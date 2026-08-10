# 📅 PrepWise AI V1 - Phase 1 | Day 1 Deliverables

---

# Project Vision

PrepWise AI aims to build an AI-powered interview preparation platform that helps users become interview-ready through a personalized and structured learning experience. Unlike many existing interview preparation platforms that primarily conduct mock interviews or provide generic learning resources, PrepWise AI focuses on understanding each candidate's individual profile and delivering personalized guidance throughout their preparation journey.

The platform is designed for students, internship seekers, fresh graduates, job switchers, and professionals preparing for technical and HR interviews. It analyzes the user's resume, target company, target role, strengths, and weaknesses to generate a personalized preparation roadmap.

PrepWise AI serves as an intelligent AI interview mentor by providing three core AI modes:

* **AI Resume Analyzer**
* **AI Tutor**
* **AI Mock Interviewer**

The platform prepares users for every important stage of the interview process, including technical interviews, HR interviews, resume discussions, project discussions, and communication improvement through AI-powered feedback.

Our vision is to make interview preparation personalized, structured, and accessible by providing every user with an AI mentor that understands their background and guides them from preparation to interview readiness.

---

# Problem Statement

The following challenges motivated the development of **PrepWise AI**:

* Students and job seekers often struggle to find the right platform for interview preparation.
* Most existing platforms provide generic interview questions or mock interviews but do not personalize preparation based on the user's resume, target company, target role, strengths, weaknesses, or current skill level.
* Users are forced to switch between multiple platforms for different needs such as learning technical concepts, practicing mock interviews, improving communication skills, preparing for HR rounds, analyzing resumes, and tracking progress. This makes the preparation process fragmented and inefficient.
* Many candidates get stuck searching for the right mentor, study material, or preparation strategy without knowing what to learn first or how to structure their preparation.
* Candidates with good technical knowledge often fail interviews because they struggle to explain concepts clearly, discuss their projects confidently, answer follow-up questions, or perform well in HR interviews.
* Existing platforms rarely identify a candidate's strengths and weaknesses or provide a personalized learning roadmap based on their profile.
* There is no single platform that combines resume analysis, personalized learning, AI tutoring, mock interviews, communication feedback, performance evaluation, and progress tracking into one interview preparation experience.

---

# Target Users

PrepWise AI is designed for individuals preparing for technical and HR interviews across different stages of their careers.

### Primary Target Users

* Final-Year College Students preparing for campus placements.
* Internship Seekers preparing for internship interviews.
* Students preparing for technical interviews.
* Fresh Graduates entering the job market.
* Job Switchers preparing for new opportunities.
* Professional Developers preparing for company interviews.

---

# Unique Selling Proposition (USP)

PrepWise AI differentiates itself by providing a personalized interview preparation experience instead of generic AI responses.

### Our Unique Selling Points

* Personalized interview preparation based on the user's resume, target company, target role, strengths, and weaknesses.
* AI Resume Analyzer that identifies skills, projects, technologies, strengths, and improvement areas.
* AI Tutor that teaches interview topics from fundamentals to interview-ready level without requiring repeated prompts.
* AI Mock Interviewer that conducts technical, HR, and resume-based interviews with personalized feedback.
* Resume-based and company-specific interview preparation.
* Communication and answer-quality feedback after every mock interview.
* Personalized learning roadmap generated specifically for each user.
* A unified platform that combines resume analysis, learning, mock interviews, and progress tracking in one place.

---

# Mission Statement

Our mission is to simplify interview preparation by providing personalized AI-driven guidance that helps students and professionals prepare efficiently through resume analysis, structured learning, AI tutoring, realistic mock interviews, and continuous feedback.

---

# Project Goals

## Primary Goal

To develop an AI-powered interview preparation platform that delivers a personalized learning experience and helps users prepare confidently for technical, HR, and resume-based interviews through intelligent guidance and structured preparation.

### V1 Goals

* Build a secure user authentication system.
* Allow users to upload and analyze their resumes.
* Generate personalized interview preparation roadmaps.
* Teach interview topics using the AI Tutor.
* Conduct AI-powered technical, HR, and resume-based mock interviews.
* Provide communication and performance feedback after interviews.
* Track learning progress and interview performance through a dashboard.
* Deliver company-specific and role-specific interview preparation.
* Create a responsive and user-friendly web application.

---

# Competitor Analysis

| Platform        | Strengths                                             | Limitations                                                    | PrepWise AI Advantage                                                                                              |
| --------------- | ----------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ChatGPT         | Excellent explanations and coding help                | Generic responses, no interview workflow, no progress tracking | Personalized interview preparation based on resume, company, and role                                              |
| FinalRound AI   | AI mock interviews and interview assistance           | Limited personalized learning and roadmap generation           | Resume analysis, structured learning, roadmap, and interview preparation in one platform                           |
| Interviewing.io | Real interview practice with experienced interviewers | Focused mainly on mock interviews                              | Adds AI tutoring, resume analysis, personalized roadmap, and progress tracking                                     |
| Pramp           | Peer-to-peer mock interviews                          | Depends on availability of peers, limited personalization      | AI-driven personalized mock interviews available anytime                                                           |
| LeetCode        | Excellent coding interview practice                   | Primarily focused on coding problems                           | Covers technical concepts, HR interviews, resume discussions, communication feedback, and personalized preparation |

---

# Day 1 Deliverables Checklist

* ✅ Project Vision
* ✅ Problem Statement
* ✅ Target Users
* ✅ Unique Selling Proposition (USP)
* ✅ Mission Statement
* ✅ Project Goals (V1)
* ✅ Competitor Analysis


# 📅 PrepWise AI V1 - Phase 1 | Day 2 Deliverables

---

# MVP Definition

## What is the MVP?

The Minimum Viable Product (MVP) of PrepWise AI is a fully functional web application that provides personalized interview preparation through AI-powered resume analysis, structured learning, and mock interviews.

The primary objective of the MVP is to help users become interview-ready by analyzing their profile, generating a personalized preparation roadmap, teaching interview-related topics, conducting mock interviews, and providing performance feedback.

The MVP focuses on delivering a complete interview preparation workflow while keeping the feature set manageable, scalable, and production-ready.

---

# MVP Scope

The MVP will include the following core modules:

## Module 1 – User Authentication

* User Registration
* User Login
* JWT Authentication
* User Profile

---

## Module 2 – AI Resume Analyzer

* Resume Upload (PDF)
* Resume Parsing
* Skill Extraction
* Project Extraction
* Technology Extraction
* Resume Insights
* Strength & Weakness Analysis

---

## Module 3 – Interview Setup

User selects:

* Target Company
* Target Role
* Experience Level
* Strong Topics
* Weak Topics

---

## Module 4 – Personalized Learning Roadmap

AI generates:

* Learning Order
* Priority Topics
* Resume Preparation
* HR Preparation

---

## Module 5 – AI Tutor

For every topic:

* Concept Explanation
* Examples
* Best Practices
* Common Mistakes
* Interview Questions
* Follow-up Questions
* Quiz
* Revision Notes

---

## Module 6 – AI Mock Interview

Interview Types:

* Technical Interview
* HR Interview
* Resume Discussion

AI will:

* Ask Questions
* Ask Follow-up Questions
* Evaluate Answers
* Generate Score
* Provide Communication Feedback
* Suggest Improvements

---

## Module 7 – Dashboard

Displays:

* Resume Analysis
* Personalized Roadmap
* Learning Progress
* Completed Topics
* Interview Scores
* AI Feedback

---

# Out of Scope (V2)

The following features are intentionally excluded from the MVP:

* Voice Interviews
* Video Interviews
* Live Coding Interviews
* ATS Resume Checker
* Recruiter Dashboard
* Mobile Application
* Premium Subscription
* AI Memory Across Sessions
* Advanced Analytics
* Company-specific Interview Dataset
* College Placement Portal
* Multi-language Support

---

# Functional Overview

The overall workflow of PrepWise AI V1 is:

1. User creates an account.
2. User uploads a resume.
3. AI analyzes the resume.
4. User selects the target company and role.
5. AI generates a personalized learning roadmap.
6. User learns topics using the AI Tutor.
7. User attends AI-powered mock interviews.
8. AI provides performance and communication feedback.
9. User tracks progress from the dashboard.

---

# Success Criteria

The MVP will be considered successful if a user can:

* Register and log in successfully.
* Upload a resume.
* Receive AI-generated resume insights.
* Generate a personalized interview roadmap.
* Learn interview topics using the AI Tutor.
* Complete technical, HR, and resume-based mock interviews.
* Receive meaningful AI feedback.
* Track learning progress from the dashboard.

---

# Future Scope (V2)

Potential enhancements after the successful completion of V1:

* Voice-Based Mock Interviews
* Video Interviews
* Live Coding Assessments
* ATS Resume Scoring
* Recruiter Dashboard
* Mobile Application
* AI Memory
* Advanced Communication Analysis
* Company-specific Interview Database
* Premium Features

---

# Day 2 Deliverables Checklist

✅ MVP Definition

✅ MVP Scope

✅ Included Features

✅ Excluded Features (V2)

✅ Functional Overview

✅ Success Criteria

✅ Future Scope


# 6. Functional Requirements

The following functional requirements define the core functionalities that PrepWise AI V1 must provide.

## User Management

FR-1: The system shall allow users to register using an email and password.

FR-2: The system shall allow registered users to log in securely.

FR-3: The system shall authenticate users using JWT-based authentication.

FR-4: The system shall allow users to view and manage their profile.

------------------------------------------------------------

## Resume Management

FR-5: The system shall allow users to upload resumes in PDF format.

FR-6: The system shall securely store uploaded resumes.

FR-7: The system shall analyze uploaded resumes using AI.

FR-8: The system shall extract skills, projects, and technologies from the resume.

FR-9: The system shall identify strengths and weaknesses based on the uploaded resume.

------------------------------------------------------------

## Interview Setup

FR-10: The system shall allow users to select their target company.

FR-11: The system shall allow users to select their target job role.

FR-12: The system shall allow users to specify their experience level.

FR-13: The system shall allow users to specify strong and weak topics.

------------------------------------------------------------

## Personalized Learning Roadmap

FR-14: The system shall generate a personalized interview preparation roadmap.

FR-15: The roadmap shall prioritize learning topics based on the user's profile and interview preferences.

------------------------------------------------------------

## AI Tutor

FR-16: The system shall provide AI-generated explanations for selected topics.

FR-17: The AI Tutor shall teach concepts from fundamentals to interview-ready level.

FR-18: The AI Tutor shall provide interview questions and follow-up questions.

FR-19: The AI Tutor shall generate quizzes and revision notes for each topic.

------------------------------------------------------------

## AI Mock Interview

FR-20: The system shall conduct technical mock interviews.

FR-21: The system shall conduct HR mock interviews.

FR-22: The system shall conduct resume-based interview discussions.

FR-23: The AI shall evaluate user responses.

FR-24: The AI shall provide communication and performance feedback.

FR-25: The AI shall generate an interview score and improvement suggestions.

------------------------------------------------------------

## Dashboard

FR-26: The system shall display resume analysis results.

FR-27: The system shall display the personalized learning roadmap.

FR-28: The system shall track completed topics.

FR-29: The system shall display interview history and scores.

FR-30: The system shall display AI-generated feedback and preparation progress.

══════════════════════════════════════════════════════════════════════

# 7. Non-Functional Requirements

The following non-functional requirements define the quality attributes of PrepWise AI V1.

## Performance

NFR-1: The system should respond to user requests within a reasonable time under normal usage.

NFR-2: Resume uploads and AI processing should complete reliably without data loss.

------------------------------------------------------------

## Security

NFR-3: User passwords shall be securely hashed before storage.

NFR-4: Authentication shall use JWT-based authorization.

NFR-5: Only authenticated users shall access protected features.

NFR-6: Uploaded resumes and user data shall be handled securely.

------------------------------------------------------------

## Usability

NFR-7: The application shall provide an intuitive and user-friendly interface.

NFR-8: The application shall be responsive across desktops, tablets, and mobile devices.

NFR-9: Navigation between modules shall be simple and consistent.

------------------------------------------------------------

## Reliability

NFR-10: The system shall handle invalid inputs gracefully.

NFR-11: Appropriate error messages shall be displayed when operations fail.

NFR-12: User data shall remain consistent and protected during failures.

------------------------------------------------------------

## Scalability

NFR-13: The application architecture should support the addition of future modules such as voice interviews, ATS analysis, and mobile applications without major redesign.

------------------------------------------------------------

## Maintainability

NFR-14: The project shall follow a modular architecture for easier maintenance and future enhancements.

NFR-15: The codebase shall follow consistent coding standards and documentation practices.

------------------------------------------------------------

## Compatibility

NFR-16: The application shall support modern web browsers such as Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.

------------------------------------------------------------

## Availability

NFR-17: The deployed application should be available for users with minimal downtime during normal operation.

------------------------------------------------------------

## AI Quality

NFR-18: AI responses should be relevant to the selected company, role, resume, and topic.

NFR-19: AI-generated interview questions and learning content should remain structured, consistent, and interview-focused.

NFR-20: AI feedback should provide clear, actionable suggestions for improvement.


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


══════════════════════════════════════════════════════════════════════
          PREPWISE AI V1 – PHASE 1 | DAY 4 DELIVERABLES
══════════════════════════════════════════════════════════════════════

GOAL

Design how PrepWise AI works internally before writing any code.

By the end of Day 4, every developer should understand how the
application is structured and how data flows through the system.

══════════════════════════════════════════════════════════════════════
1. HIGH-LEVEL ARCHITECTURE
══════════════════════════════════════════════════════════════════════

Design the overall architecture of the application.

Include:

• User
• React Frontend
• Express Backend
• MongoDB Atlas
• Cloudinary
• OpenAI API

                           ┌────────────────────┐
                           │       User         │
                           └─────────┬──────────┘
                                     │
                                     ▼
                        ┌─────────────────────────┐
                        │ React + Tailwind Frontend│
                        └─────────┬───────────────┘
                                  │ REST API
                                  ▼
                    ┌────────────────────────────────┐
                    │     Node.js + Express Backend   │
                    └───────┬───────────────┬────────┘
                            │               │
                ┌───────────▼──────┐   ┌────▼─────────────┐
                │  MongoDB Atlas   │   │   Cloudinary     │
                │ Users/Resume/... │   │ Resume PDF Store │
                └──────────────────┘   └──────────────────┘
                            │
                            ▼
                 ┌────────────────────────┐
                 │     OpenAI API         │
                 │                        │
                 │ • Resume Analyzer      │
                 │ • AI Tutor             │
                 │ • Mock Interview       │
                 └────────────────────────┘

Deliverables:

✅ High-Level Architecture Diagram

✅ Component Responsibilities

──────────────────────────────────────────────────────────────────────

══════════════════════════════════════════════════════════════════════
2. AI ARCHITECTURE
══════════════════════════════════════════════════════════════════════

Design the three AI modes.

Mode 1 — AI Resume Analyzer

Input:
• Resume PDF

Output:
• Skills
• Projects
• Technologies
• Strengths
• Weaknesses
• Resume Insights

------------------------------------------------------------

Mode 2 — AI Tutor

Input:
• Selected Topic

Output:
• Complete Interview-Oriented Learning
• Interview Questions
• Follow-up Questions
• Quiz
• Revision

------------------------------------------------------------

Mode 3 — AI Mock Interview

Input:
• Resume
• Company
• Role

Output:
• Technical Interview
• HR Interview
• Resume Discussion
• Communication Feedback
• Performance Score

Deliverables:

✅ AI Architecture Diagram

✅ AI Modes Documentation

──────────────────────────────────────────────────────────────────────

══════════════════════════════════════════════════════════════════════
3. FEATURE FLOW
══════════════════════════════════════════════════════════════════════

Document the flow of every major feature.

Flow 1

Signup
↓

Login
↓

Dashboard

------------------------------------------------------------

Flow 2

Resume Upload
↓

Cloudinary
↓

Resume Analysis
↓

Save Results

------------------------------------------------------------

Flow 3

Interview Setup
↓

Roadmap Generation
↓

Dashboard

------------------------------------------------------------

Flow 4

Select Topic
↓

AI Tutor
↓

Quiz
↓

Complete Topic

------------------------------------------------------------

Flow 5

Mock Interview
↓

Answer Questions
↓

Evaluation
↓

Dashboard

Deliverables:

✅ Feature Flow Diagrams

──────────────────────────────────────────────────────────────────────

══════════════════════════════════════════════════════════════════════
4. SOFTWARE REQUIREMENTS SPECIFICATION (SRS)
══════════════════════════════════════════════════════════════════════

Combine everything created during Phase 1 into one document.

Include:

• Project Vision
• Problem Statement
• Target Users
• USP
• Mission Statement
• Project Goals
• MVP Definition
• User Journey
• User Flow
• High-Level Architecture
• AI Architecture
• Feature Flow

Deliverables:

✅ Final SRS Document (Version 1)

──────────────────────────────────────────────────────────────────────

══════════════════════════════════════════════════════════════════════
5. PHASE 1 REVIEW
══════════════════════════════════════════════════════════════════════

Review all documents.

Check:

• Is the MVP clearly defined?
• Are unnecessary features removed?
• Is V1 achievable?
• Does every feature have a purpose?
• Are all documents consistent?

Deliverables:

✅ Product Planning Completed

══════════════════════════════════════════════════════════════════════
END OF DAY 4 CHECKLIST
══════════════════════════════════════════════════════════════════════

□ High-Level Architecture

□ AI Architecture

□ Feature Flow

□ Software Requirements Specification (SRS)

□ Product Planning Review

══════════════════════════════════════════════════════════════════════

