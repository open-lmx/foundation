# Open-LMX Registry Layer

## Purpose

The Registry Layer is the discovery and interoperability backbone of Open-LMX.

It allows all graphs (Learning, Capability, Work, Employment, Social, Trust, Career) to be:

- discoverable
- versioned
- queryable
- interoperable
- globally addressable

---

## Core Insight

> A graph is useless if it cannot be found, referenced, or composed.

The registry makes the system real.

---

## Registry Principle

Everything in Open-LMX must be:

- uniquely identifiable
- globally addressable
- version controlled
- schema validated
- provenance tracked

---

## Core Registry Types

- EntityRegistry
- GraphRegistry
- SchemaRegistry
- CapabilityRegistry
- RoleRegistry
- LearningRegistry
- AssessmentRegistry
- EmploymentRegistry
- TrustRegistry
- SocialRegistry
- CareerRegistry

---

## Registry Structure

```text
Registry
  ├── Entities
  │     ├── Person
  │     ├── Institution
  │     ├── Capability
  │     ├── Role
  │     ├── Job
  │
  ├── Graphs
  │     ├── LearningGraph
  │     ├── CapabilityGraph
  │     ├── EmploymentGraph
  │     ├── SocialGraph
  │     ├── TrustGraph
  │     ├── CareerGraph
  │
  ├── Schemas
  │     ├── JSON Schema definitions
  │     ├── validation rules
  │
  ├── Versions
  │     ├── snapshot history
  │     ├── evolution tracking
```

---

## Registry Functions

### 1. Discovery

Find any entity or graph globally.

### 2. Addressing

Every object has a canonical ID:

```text
lmx://capability/python-api-design/v1
```

---

### 3. Versioning

Everything evolves:

- skills evolve
- roles evolve
- jobs evolve
- learning evolves

The registry tracks all versions.

---

### 4. Composition

Graphs can reference each other:

```text
CapabilityGraph → SocialGraph → TrustGraph
LearningGraph → AssessmentGraph → CapabilityGraph
```

---

## Trust in Registry

Registry entries are only valid if:

- they have provenance
- they have verification signals
- they have ownership metadata

---

## Key Principle

> The registry is the “naming system” of reality in Open-LMX.

Without it, graphs cannot interoperate.

---

## Final Role

The Registry Layer transforms Open-LMX from:

> a set of graphs

into:

> a global, addressable, composable system of human capability and work intelligence
