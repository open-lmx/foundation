# Open-LMX Work Data Models

The Work domain defines how real-world demand for human capability is structured.

It connects economic activity, organizational needs, and job execution to capabilities and competencies.

## Purpose

Work models describe what the world needs people to do.

They form the demand side of the Open-LMX operating system.

## Core Work Entities

- Industry
- Sector
- Occupation
- Role
- Job
- Task
- Responsibility
- Project
- WorkProduct
- Experience
- Performance

## Work Hierarchy

```text
Industry
  ↓
Sector
  ↓
Occupation
  ↓
Role
  ↓
Job
  ↓
Task
  ↓
Responsibility
  ↓
WorkProduct
```

## Role (Core Bridge Entity)

Role is the most important abstraction in the Work domain.

A Role defines:

- Required capabilities
- Required competencies
- Expected responsibilities
- Context of execution
- Performance expectations

Roles connect capability supply to demand.

```text
Capability → Role → Job → Employment
```

## Task Model

Tasks represent atomic units of work.

Tasks are mapped to capabilities and competencies.

## Performance Model

Performance represents observed execution quality over time.

It feeds back into:

- Capability validation
- Career progression
- Trust scoring

## Work Domain Principle

Work is structured, observable, and decomposable into tasks.

Every role can be expressed as a set of capability requirements.

Every job is an instance of one or more roles.

## Connection to Capability Domain

```text
Capability
  ↓
Capability Requirement
  ↓
Role
  ↓
Job
```

## Connection to Career Domain

```text
Job Experience
  ↓
Performance
  ↓
Career Progression
```
