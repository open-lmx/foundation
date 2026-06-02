# Open-LMX Learning Data Models

This directory defines Open-LMX learning data models aligned with schema.org education and learning concepts.

## Purpose

Learning artifacts should be governed assets. They must be identifiable, versioned, related, assessable, and auditable.

## Schema.org Alignment

Primary schema.org concepts:

- CreativeWork
- LearningResource
- Course
- CourseInstance
- EducationalOccupationalCredential
- EducationalOccupationalProgram
- EducationEvent
- AlignmentObject
- DefinedTerm

## Open-LMX Learning Model Families

- Learning Resource
- Course
- Course Instance
- Module
- Lesson
- Topic
- Concept
- Competency
- Learning Objective
- Learning Outcome
- Assessment
- Question
- Rubric
- Assignment
- Exercise
- Lab
- Project
- Curriculum
- Learning Path
- Program
- Credential
- Certificate
- Learner Profile
- Instructor Profile
- Enrollment
- Completion Record
- Learning Record

## Core Graph

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
