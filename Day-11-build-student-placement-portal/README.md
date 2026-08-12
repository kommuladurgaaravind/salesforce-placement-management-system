# 🔗 Day11 - Student Placement Portal

Integration of a Salesforce Student Placement Management System with an external recruitment platform using REST API and Apex.

---

## 📌 Project Overview

This project extends the **Student Placement Management System** by integrating Salesforce with an external recruitment platform.
When an application's status becomes **Selected**, Salesforce automatically sends the student's details to the external recruitment system.

---

## 🚀 Integration Flow

```text
Application Selected
        ↓
     Trigger
        ↓
     Queueable Apex
        ↓
  Named Credential
        ↓
      REST API
        ↓
External Recruitment System
        ↓
  Process Response
        ↓
 Integration Status
```

---

## 🛠️ Technologies Used

* Salesforce
* Apex
* Queueable Apex
* REST API
* HTTP Callouts
* JSON
* Named Credentials
* SOQL
* GitHub
* VS Code

---

## 📤 Candidate Information

The following information is sent to the external system:

* Student ID
* Name
* Email
* Branch
* CGPA
* Job ID
* Company
* Role
* Selection Date

## 🔌 API Contract

**Endpoint:**

```text
POST /candidates
```

**Request Example:**

```json
{
  "studentId": "STU10045",
  "name": "Ananya",
  "email": "ananya@example.com",
  "branch": "CSE",
  "cgpa": 8.4,
  "jobId": "JOB1007",
  "company": "KSquare",
  "role": "Salesforce Developer"
}
```

## 🔐 Security

The integration uses **Named Credentials** instead of hard-coded credentials.

```text
Apex
 ↓
Named Credential
 ↓
Authentication
 ↓
External API
```

Credentials such as passwords, tokens, and secrets are not stored in Apex code.

---

## ⚡ Why Queueable Apex?

Queueable Apex is used because the external synchronization is a secondary operation.

The student selection should be completed in Salesforce without making the user wait for the external system.

## 🚨 Error Handling

The integration handles common responses:

| Status | Meaning               |
| ------ | --------------------- |
| 200    | Success               |
| 201    | Created               |
| 400    | Bad Request           |
| 401    | Authentication Failed |
| 403    | Forbidden             |
| 500    | Server Error          |

Failed integrations can be marked as **Retry Required**.

## 🔄 Retry & Idempotency

The integration considers temporary API failures and supports retry processing.

To prevent duplicate candidate submissions, the **Salesforce Application ID / external reference** can be used as a unique identifier.

## 📊 Integration Status

Suggested statuses:

```text
Pending
Sent
Failed
Retry Required
```

Additional information can be tracked:

* External Candidate ID
* Last Integration Attempt
* Integration Error

## 🏗️ Integration Pattern

This project uses **Point-to-Point Integration**:

```text
Salesforce
    ↕
External Recruitment System
```

Middleware can be considered when integrating with multiple external systems.

---

## 🎯 Key Concepts Learned

* REST APIs
* HTTP Methods
* JSON
* Apex Callouts
* Queueable Apex
* Named Credentials
* Authentication & Authorization
* Error Handling and Retry Strategy
* Salesforce Connect & External Objects
* Synchronous vs Asynchronous Integration

---

## Test Result

<img width="1160" height="198" alt="Screenshot 2026-08-11 152627" src="https://github.com/user-attachments/assets/033a696f-87c5-4e38-aab8-74f0c6402e52" />
