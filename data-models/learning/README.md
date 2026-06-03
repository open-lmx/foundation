# Open-LMX Learning Data Models

The Learning domain defines how knowledge is structured into teachable, consumable, and measurable learning experiences.

It is the supply mechanism that transforms knowledge into structured capability-building pathways.

---

## Purpose

Learning models describe:

- how knowledge is organized
- how it is delivered
- how it is consumed
- how it is structured into measurable outcomes

---

## Core Learning Entities

- LearningResource
- LearningObjective
- LearningOutcome
- Course
- Module
- Lesson
- Curriculum
- Program
- LearningPath
- Exercise
- Assignment
- Lab
- Project

---

## Learning Graph

This is the canonical learning structure in Open-LMX.

```text
Knowledge
  ↓
Concepts
  ↓
Learning Objectives
  ↓
Learning Resources
  ↓
Lessons
  ↓
Modules
  ↓
Courses
  ↓
Programs
```

---

## Full Learning-to-Competency Flow

```text
Program
  contains Course

Course
  contains Module
  teaches Competency
  assesses Assessment
  awards Credential

Module
  contains Lesson

Lesson
  teaches Concept
  requires Prerequisite
  uses LearningResource

Assessment
  evaluates Competency
  produces LearningOutcome

Credential
  proves Competency
  issued_to LearnerProfile
  issued_by Organization
```

---

## Learning Lifecycle

### 1. Knowledge Structuring

Raw knowledge is decomposed into concepts, principles, and frameworks.

### 2. Curriculum Design

Knowledge is structured into objectives, lessons, modules, and courses.

### 3. Delivery

Learning is delivered via lessons, labs, assignments, and projects.

### 4. Outcome Mapping

Each learning unit maps to measurable outcomes and competencies.

---

## Connection to Assessment Domain

Learning is validated through assessment:

```text
Learning Outcome
  ↓
Assessment
  ↓
Evidence
  ↓
Competency
```

---

## Connection to Capability Domain

```text
Learning
  ↓
Competency
  ↓
Capability
```

---

## Core Principle

Learning is a structured transformation from knowledge to capability, not isolated content consumption.
