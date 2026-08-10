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

🎉 PHASE 1 COMPLETE

After Day 4, you should have a complete blueprint of PrepWise AI V1.

Next Phase:

🎨 Phase 2 – UI/UX Design