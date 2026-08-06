# Placement Management System – Day6
## 🚀 Bulk-Safe Apex Trigger using Trigger Handler Pattern

## 📌 Project Overview

This project implements a **Bulk-Safe Apex Trigger** for the Placement Management System using the **Trigger Handler Pattern**.

The solution validates student job applications before insertion and detects important status changes after updates while following Salesforce Governor Limits and Bulkification best practices.

---

# Features Implemented

## Before Insert

The trigger performs the following validations:

- Validates Student existence
- Validates Job existence
- Validates Student CGPA against Job Minimum CGPA
- Validates Job Application Deadline
- Prevents duplicate job applications
- Automatically assigns **Applied** as the default Application Status

---

## After Update

The trigger detects important business events:

- Detects when Application Status changes to **Selected**
- Detects application status transitions
- Logs notification events using `System.debug()`

---

# Bulkification Techniques Used

This project follows Salesforce Bulkification principles.

### Collections Used

- List
- Set
- Map

### Bulk SOQL

Student and Job records are queried only once using Maps.

```apex
Map<Id, Student__c> studentMap
Map<Id, Job__c> jobMap
```

### No SOQL Inside Loops

All SOQL queries are executed before processing records.

### No DML Inside Loops

No insert, update, or delete operations are executed inside loops.

### Trigger Handler Pattern

Business logic is separated from the Trigger.

```
ApplicationTrigger
        ↓
ApplicationTriggerHandler
        ↓
Business Logic
```

---

# Objects Used

## Student__c

| Field | Description |
|--------|-------------|
| Name | Student Name |
| CGPA__c | Student CGPA |

---

## Job__c

| Field | Description |
|--------|-------------|
| Name | Job Name |
| Minimum_CGPA__c | Minimum CGPA Required |
| Last_Date__c | Application Deadline |

---

## Application__c

| Field | Description |
|--------|-------------|
| Name | Application Name |
| Student__c | Student Lookup |
| Job__c | Job Lookup |
| Status__c | Application Status |
| Application_Date__c | Application Date |

---

# Trigger Events

| Event | Description |
|--------|-------------|
| Before Insert | Validates new applications |
| After Update | Detects status changes |

---

# Validation Rules Implemented

### Rule 1

Student CGPA must be greater than or equal to Job Minimum CGPA.

---

### Rule 2

Applications cannot be submitted after the Job Deadline.

---

### Rule 3

A Student cannot apply for the same Job more than once.

---

### Rule 4

If Status is blank, it is automatically set to **Applied**.

---

# Governor Limit Best Practices

The project follows Salesforce Governor Limits by:

- Using Sets to collect IDs
- Using Maps for fast lookups
- Executing Bulk SOQL
- Avoiding SOQL inside loops
- Avoiding DML inside loops
- Processing records in memory

---

# Trigger Architecture

```
ApplicationTrigger
        │
        ▼
ApplicationTriggerHandler
        │
        ▼
Business Logic
```

---


# What I Learned

During this sprint I learned:

- Apex Trigger Handler Pattern
- Bulkification
- Salesforce Governor Limits
- Trigger.new
- Trigger.oldMap
- Bulk SOQL
- List, Set and Map Collections
- Bulk-safe Trigger Design
- Salesforce Trigger Best Practices

---

# Anonymous Apex Testing

The trigger was tested using Anonymous Apex.

Example:

```apex
Student__c student = [
    SELECT Id
    FROM Student__c
    LIMIT 1
];

Job__c job = [
    SELECT Id
    FROM Job__c
    LIMIT 1
];

Application__c app = new Application__c();

app.Student__c = student.Id;
app.Job__c = job.Id;

insert app;
```

---

# Test Result

<img width="782" height="168" alt="image" src="https://github.com/user-attachments/assets/826b2e42-cada-442f-9929-e812133c6b6b" />

---

# Conclusion

This project demonstrates how to build scalable and bulk-safe Apex Triggers using the Trigger Handler Pattern. By applying Salesforce Bulkification techniques such as Sets, Maps, Bulk SOQL, and collection-based processing, the solution efficiently handles multiple records while staying within Governor Limits and maintaining clean, reusable code.
