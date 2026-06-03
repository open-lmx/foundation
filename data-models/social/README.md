# Open-LMX Social Graph Layer

## Purpose

Open-LMX requires a social network layer because capabilities, credentials, and roles do not become meaningful in isolation.

They become meaningful through relationships between people, institutions, employers, and verifiers.

This layer enables the system to make disconnected systems "talk".

## Core Insight

> Capability is not only an attribute of a person.
> It is a signal validated and amplified by a network.

## Why a Social Graph is Required

Without a social graph:

- Credentials are static documents
- Skills are isolated labels
- Trust is centralised and brittle
- Matching is purely rule-based

With a social graph:

- Trust propagates through relationships
- Capability is validated socially and institutionally
- Learning and work feedback loops emerge
- Reputation becomes structured and computable

## Core Entities

- Person
- Institution
- Employer
- Instructor
- Mentor
- Peer
- Team
- Community
- Project

## Core Relationships

```text
Person ─ learns_from ─ Instructor
Person ─ evaluated_by ─ Institution
Person ─ works_with ─ Peer
Person ─ employed_by ─ Employer
Person ─ mentored_by ─ Mentor
Person ─ contributes_to ─ Project
Institution ─ certifies ─ Capability
Employer ─ validates ─ Performance
```

## Social Layer Functions

### 1. Trust Propagation

Trust is not stored directly; it is computed through relationships.

### 2. Capability Validation

Capabilities become stronger when:

- multiple independent verifiers agree
- performance history exists
- peer validation is present

### 3. Reputation Graph

Reputation is a derived signal from:

- verified performance
- peer endorsements
- institutional validation
- outcome success rate

## Social Graph + Capability Graph

```text
Social Graph
    ↓
Evidence Flow
    ↓
Capability Graph
    ↓
Role Matching
    ↓
Employment Outcomes
```

## Key Principle

> Things do not talk to each other directly.
> People and institutions talk through a social graph.

The social graph is the transport layer for trust and meaning.

## Platform Implication

The Open-LMX platform must treat social relationships as first-class data:

- auditable
- versioned
- consent-aware
- privacy-controlled
- explainable

## Summary

The missing piece is not more data models.

It is the network that connects them.
