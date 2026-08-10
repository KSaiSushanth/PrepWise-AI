# 📅 PrepWise AI V1 - Phase 1 | Day 3 Deliverables

---

# User Journey

The following user journey describes the complete flow of a user interacting with PrepWise AI from account creation to interview preparation.

## Step 1 – User Registration

The user creates a new account using their email and password.

↓

## Step 2 – User Login

The user logs into the platform.

↓

## Step 3 – Dashboard

The dashboard welcomes the user and provides an option to start interview preparation.

↓

## Step 4 – Resume Upload

The user uploads their resume in PDF format.

↓

## Step 5 – AI Resume Analysis

The AI analyzes the uploaded resume and extracts:

* Skills
* Projects
* Technologies
* Strengths
* Weaknesses

↓

## Step 6 – Interview Setup

The user provides:

* Target Company
* Target Role
* Experience Level
* Strong Topics
* Weak Topics

↓

## Step 7 – Personalized Learning Roadmap

Based on the resume analysis and interview setup, the AI generates a personalized roadmap containing:

* Learning Order
* Priority Topics
* Resume Discussion Preparation
* HR Preparation

↓

## Step 8 – AI Tutor

The user selects a topic.

The AI teaches:

* Fundamentals
* Intermediate Concepts
* Advanced Concepts
* Examples
* Interview Questions
* Follow-up Questions
* Quiz
* Revision Notes

↓

## Step 9 – AI Mock Interview

The user starts a mock interview.

Available interview types:

* Technical Interview
* HR Interview
* Resume Discussion

The AI asks questions, evaluates answers, asks follow-up questions, and generates a score.

↓

## Step 10 – Performance Feedback

The AI provides:

* Technical Feedback
* Communication Feedback
* Strong Areas
* Weak Areas
* Improvement Suggestions

↓

## Step 11 – Dashboard

The dashboard displays:

* Resume Insights
* Roadmap Progress
* Completed Topics
* Interview Scores
* AI Feedback
* Overall Preparation Progress

---

# User Flow

```text
Landing Page
      │
      ▼
Signup / Login
      │
      ▼
Dashboard
      │
      ▼
Resume Upload
      │
      ▼
AI Resume Analysis
      │
      ▼
Interview Setup
      │
      ▼
AI Roadmap
      │
      ├─────────────┐
      ▼             │
AI Tutor            │
      │             │
      ▼             │
Topic Completed     │
      │             │
      └──────┐      │
             ▼      │
      Mock Interview│
             │      │
             ▼      │
     Performance Feedback
             │
             ▼
         Dashboard
```

---

# User Personas

## Persona 1 – Internship Seeker

Goal:
Prepare for internship interviews with personalized guidance.

Needs:

* Resume analysis
* Technical preparation
* HR preparation

---

## Persona 2 – Final-Year Student

Goal:
Prepare for campus placements.

Needs:

* Structured roadmap
* Mock interviews
* Progress tracking

---

## Persona 3 – Job Switcher

Goal:
Prepare for interviews at a new company.

Needs:

* Company-specific preparation
* Resume discussion practice
* Technical interview preparation

---

# Use Cases

### UC-1

User registers on the platform.

---

### UC-2

User uploads a resume.

---

### UC-3

AI analyzes the resume.

---

### UC-4

User selects company and role.

---

### UC-5

AI generates a personalized roadmap.

---

### UC-6

User learns a topic using the AI Tutor.

---

### UC-7

User completes a mock interview.

---

### UC-8

AI evaluates the interview.

---

### UC-9

User tracks progress from the dashboard.

---

# Edge Cases

* Invalid resume uploaded.
* Resume parsing fails.
* AI request timeout.
* Empty interview setup form.
* User skips resume upload.
* User exits mock interview midway.
* AI returns incomplete response.

---

# Day 3 Deliverables Checklist

✅ User Journey

✅ User Flow

✅ User Personas

✅ Use Cases

✅ Edge Cases
