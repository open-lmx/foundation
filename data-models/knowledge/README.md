# Open-LMX Knowledge Data Models

Knowledge is the foundation beneath learning, assessment, competency, credentialing, capability, performance, and trust.

## Purpose

Open-LMX models knowledge as governed assets that can be referenced by learning resources, lessons, objectives, assessments, competencies, credentials, agents, tools, and models.

## Core Knowledge Asset Types

- KnowledgeAsset
- Concept
- Term
- Definition
- Fact
- Rule
- Principle
- Theory
- Law
- Formula
- Theorem
- Pattern
- MentalModel
- Methodology
- Framework
- Taxonomy
- Ontology
- KnowledgeGraph

## Knowledge to Learning Graph

```text
KnowledgeAsset
  contains Concept
  defines Term
  explains Theory
  supports Framework

Concept
  has Definition
  appears_in Lesson
  required_by Competency
  assessed_by Assessment

LearningResource
  teaches Concept
  references KnowledgeAsset

Competency
  requires Concept
  proves Capability
```

## Rule

Learning artifacts should reference governed knowledge assets wherever possible instead of using unstructured strings.
