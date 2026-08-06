# Salesforce Day 6 
# Apex Trigger & Trigger Handler

## Project Overview

This project implements Apex Triggers using the Trigger Handler pattern for a Placement Management System in Salesforce.

The solution validates student job applications before insertion and performs business logic after application status updates.

---

## What I Built

Implemented an Apex Trigger with a Trigger Handler class for the **Application__c** object.

The project includes:

- Before Insert Trigger
- After Update Trigger
- Trigger Handler Pattern
- Business Validation Rules
- Anonymous Apex Testing

---

## Files Included

| File | Purpose |
|------|---------|
| `ApplicationTrigger.apxt` | Apex Trigger |
| `ApplicationTriggerHandler.apxc` | Trigger Handler containing business logic |
| `Anonymous Apex` | Test script used to verify trigger execution |

---

# Trigger Events Implemented

## Before Insert

The trigger validates an application before it is saved.

### Validation 1 — Minimum CGPA

Checks whether the student's CGPA satisfies the minimum CGPA required by the selected job.

If not,

```
Student CGPA is below the required minimum CGPA.
```

is displayed.

---

### Validation 2 — Application Deadline

Checks whether today's date is greater than the Job Last Date.

If yes,

```
Application deadline has passed.
```

is displayed.

---

### Validation 3 — Duplicate Application

Checks whether the same student has already applied for the same job.

If a duplicate exists,

```
Student has already applied for this job.
```

is displayed.

---

### Validation 4 — Default Status

If Status is left blank,

it is automatically set to

```
Applied
```

before saving the record.

---

## After Update

The trigger executes additional logic after an Application is updated.

### Placement Statistics

Whenever an application status changes to

```
Selected
```

the trigger executes placement statistics logic.

(Current implementation displays a debug message.)

---

### Notifications

Whenever the status changes to one of the following:

- Interview Scheduled
- Selected
- Rejected
- Offer Accepted

the trigger simulates sending notifications using debug logs.

---

# Trigger Handler Pattern

Instead of placing business logic directly inside the Trigger,

all logic is implemented inside



---

# Conclusion

This assignment demonstrates how Apex Triggers and Trigger Handlers can enforce business rules in Salesforce. The implementation validates application data before insertion, prevents duplicate applications, automatically assigns default values, and performs additional business processing after status updates while following Salesforce development best practices.
