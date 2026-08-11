# Salesforce Day 9 – Student Job Application System

## 📌 Project Overview

This project is a Salesforce-based **Student Job Application System** developed as part of the Day 9 Salesforce training task.

The system allows students to view eligible job opportunities based on their CGPA, view job details, and apply for jobs. The application process uses Salesforce objects, Apex, and Lightning Web Components (LWC).

---

## 🎯 Objective

The main objective of this task is to build a simple job application system where:

* Students can view available jobs.
* Jobs contain company, role, package, location, deadline, and eligibility information.
* Student CGPA can be compared with the minimum CGPA required for a job.
* Eligible students can apply for jobs.
* Applications are associated with both the Student and Job records.
* Duplicate applications can be prevented.
* Application status can be tracked.

---

## 🔗 Object Relationships

The application system follows this relationship:

```text
Student
   │
   │ Student__c
   ▼
Application
   │
   │ Job__c
   ▼
Job
```

An Application connects one Student with one Job.

---

## ⚙️ Apex

The project uses Apex to implement the backend business logic.

### ApplicationService

The `ApplicationService` class handles application-related business logic such as:

* Checking the student.
* Checking the selected job.
* Validating eligibility.
* Checking for duplicate applications.
* Creating an Application record.
* Setting the initial application status.

### EligibleJobsController

The `EligibleJobsController` class provides Apex methods that can be called by the Lightning Web Components.

It acts as the connection between the frontend LWC and Salesforce backend logic.

---

## 💻 Lightning Web Components

The project uses Lightning Web Components to provide the user interface.

### Eligible Jobs Component

The component displays available job opportunities and relevant information such as:

* Company Name
* Job Role
* Package
* Location
* Deadline
* Minimum CGPA
* Eligibility Criteria

The component also provides actions such as:

* View Details
* Apply

### Job Card Component

The job card component represents an individual job opportunity.

It communicates user actions back to the parent component using Lightning Web Component events.

---

## 🔄 Application Flow

The application flow is:

```text
Student
   ↓
Open Eligible Jobs
   ↓
View Job Details
   ↓
Check Eligibility
   ↓
Click Apply
   ↓
Apex Controller
   ↓
Application Service
   ↓
Check Student
   ↓
Check Job
   ↓
Check CGPA
   ↓
Check Duplicate Application
   ↓
Create Application
   ↓
Status = Submitted
   ↓
Display Success/Error Message
```

---

## 🛠️ Technologies Used

* Salesforce
* Apex
* Lightning Web Components (LWC)
* SOQL
* Salesforce Custom Objects
* Salesforce Lookup Relationships
* Git
* GitHub
* Visual Studio Code
* Salesforce CLI

---

## 🚀 Conclusion

The Day 9 Salesforce task implements a basic student job application platform using Salesforce.

The system connects **Student, Job, and Application** objects and combines Salesforce data modeling, Apex backend logic, and Lightning Web Components to provide an end-to-end job application workflow.
