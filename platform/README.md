# Open-LMX Platform (MVP Execution System)

## Purpose

This is the first executable layer of Open-LMX.

It transforms the completed Foundation (graphs + trust + registry + runtime) into a working system that can be deployed and tested in real environments.

---

## Core Principle

> Foundation defines meaning.
> Platform executes meaning.

---

# 1. MVP SYSTEM OVERVIEW

We implement a **single closed-loop capability system**:

```text
Learning Event
   ↓
Assessment Event
   ↓
Capability Engine
   ↓
Role Matching Engine
   ↓
Employment Outcome
   ↓
Evidence Store
   ↓
Trust Engine
   ↓
Updated Capability Profile
```

---

# 2. MINIMAL DEPLOYABLE SERVICES

## Core Services

```text
/platform
  /services
    identity-service
    event-bus
    learning-service
    assessment-service
    capability-service   ← CORE
    matching-service     ← CORE
    employment-service
    evidence-service
    trust-service        ← CORE
```

---

# 3. SYSTEM ARCHITECTURE (MVP)

```text
                 API GATEWAY
                      ↓
              EVENT INGESTION LAYER
                      ↓
                EVENT BUS (NATS)
                      ↓
------------------------------------------------
|  Capability Service   |  Trust Service        |
|  Matching Service     |  Evidence Service     |
------------------------------------------------
                      ↓
               GRAPH STATE STORE
            (Postgres / SurrealDB)
```

---

# 4. FIRST EXECUTABLE API (CRITICAL)

## GET /capability/:personId

### Response

```json
{
  "personId": "123",
  "capabilities": [
    {
      "name": "System Design",
      "score": 0.78,
      "confidence": 0.66
    },
    {
      "name": "Backend Engineering",
      "score": 0.82,
      "confidence": 0.74
    }
  ],
  "recommendedRoles": [
    "Backend Engineer",
    "System Architect"
  ],
  "trustScore": 0.71
}
```

---

# 5. CORE SERVICE LOGIC

## Capability Service (Pseudo Code)

```ts
function updateCapability(event) {
  const profile = loadCapabilityProfile(event.personId)

  if (event.type === "ASSESSMENT_PASSED") {
    profile.skills[event.skill].score += event.score * 0.1
  }

  if (event.type === "LEARNING_COMPLETED") {
    profile.skills[event.skill].score += 0.05
  }

  save(profile)
  publish("CAPABILITY_UPDATED", profile)
}
```

---

## Matching Service

```ts
function matchRoles(capabilityProfile) {
  return roles
    .map(role => ({
      role,
      score: similarity(role.requirements, capabilityProfile)
    }))
    .sort((a,b) => b.score - a.score)
}
```

---

## Trust Service

```ts
function computeTrust(evidence) {
  return weightedAverage([
    evidence.assessmentScore,
    evidence.employmentPerformance,
    evidence.peerValidation,
    evidence.institutionalValidation
  ])
}
```

---

# 6. EVENT MODEL (CORE SYSTEM)

All system behavior is event-driven:

```text
LEARNING_COMPLETED
ASSESSMENT_PASSED
JOB_TASK_COMPLETED
PEER_VALIDATION_ADDED
EMPLOYER_FEEDBACK_RECEIVED
```

Each event triggers:

- capability update
- trust recalculation
- role matching refresh
- career progression update

---

# 7. MINIMAL DATABASE SCHEMA

```sql
Person(id)
CapabilityProfile(personId)
CapabilitySkill(name, score, confidence)
EmploymentEvent(personId, role, performance)
Evidence(id, type, source, score)
TrustScore(entityId, score)
```

---

# 8. DEPLOYMENT (SINGLE NODE MVP)

```text
- Node.js API Gateway
- Event Bus (NATS or Redis Streams)
- Postgres / SurrealDB
- Worker processes for services
```

No Kubernetes required.
No federation required.

---

# 9. SUCCESS CRITERIA (MVP)

The system is valid if:

✔ Learning changes capability
✔ Capability changes job matching
✔ Job feedback changes trust
✔ Trust improves future recommendations

---

# 10. FINAL INTENT

This is not a product.

This is the first executable slice of a global capability-to-work intelligence system.

---

## NEXT STEP

Implement services in this order:

1. capability-service
2. event-bus
3. trust-service
4. matching-service

Then deploy single-node runtime.
