/**
 * Open-LMX Capability Service (MVP)
 * ----------------------------------
 * First executable service in the Open-LMX platform.
 *
 * Responsibilities:
 * - maintain capability profiles
 * - process learning + assessment events
 * - compute capability scores
 * - expose capability API
 */

import http from "http";

// -----------------------------
// In-memory store (MVP ONLY)
// -----------------------------
const capabilityStore: Record<string, any> = {};

// -----------------------------
// Core capability update logic
// -----------------------------
function updateCapability(personId: string, event: any) {
  if (!capabilityStore[personId]) {
    capabilityStore[personId] = {
      personId,
      skills: {},
      trustScore: 0.5,
    };
  }

  const profile = capabilityStore[personId];
  const skill = event.skill || "general";

  if (!profile.skills[skill]) {
    profile.skills[skill] = {
      score: 0.5,
      confidence: 0.5,
    };
  }

  // Learning signal
  if (event.type === "LEARNING_COMPLETED") {
    profile.skills[skill].score += 0.02;
  }

  // Assessment signal
  if (event.type === "ASSESSMENT_PASSED") {
    profile.skills[skill].score += (event.score || 0.7) * 0.1;
    profile.skills[skill].confidence += 0.05;
  }

  // Clamp values
  profile.skills[skill].score = Math.min(1, profile.skills[skill].score);
  profile.skills[skill].confidence = Math.min(1, profile.skills[skill].confidence);

  capabilityStore[personId] = profile;

  return profile;
}

// -----------------------------
// Simple role matching (MVP)
// -----------------------------
function matchRoles(profile: any) {
  const roles = [
    { name: "Backend Engineer", req: { general: 0.6 } },
    { name: "System Architect", req: { general: 0.75 } },
    { name: "Junior Developer", req: { general: 0.3 } },
  ];

  return roles
    .map((role) => {
      const score = Object.keys(role.req).reduce((acc, k) => {
        return acc + (profile.skills[k]?.score || 0) - role.req[k];
      }, 0);

      return { role: role.name, score };
    })
    .sort((a, b) => b.score - a.score);
}

// -----------------------------
// HTTP Server (single node MVP)
// -----------------------------
const server = http.createServer((req, res) => {
  if (req.url?.startsWith("/capability/") && req.method === "GET") {
    const personId = req.url.split("/")[2];

    const profile = capabilityStore[personId] || {
      personId,
      skills: {},
      trustScore: 0.5,
    };

    const roles = matchRoles(profile);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ...profile, recommendedRoles: roles }));
    return;
  }

  if (req.url === "/event" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => (body += chunk));

    req.on("end", () => {
      const event = JSON.parse(body);
      const profile = updateCapability(event.personId, event);
      const roles = matchRoles(profile);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ profile, roles }));
    });

    return;
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3001, () => {
  console.log("Capability Service running on http://localhost:3001");
});
