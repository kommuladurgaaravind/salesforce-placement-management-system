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


# ApplicationTriggerHandler.apxc
```

public class ApplicationTriggerHandler {

    // BEFORE INSERT
    public static void beforeInsert(List<Application__c> newApplications) {

        // Collect Student and Job IDs
        Set<Id> studentIds = new Set<Id>();
        Set<Id> jobIds = new Set<Id>();

        for (Application__c app : newApplications) {
            if (app.Student__c != null) {
                studentIds.add(app.Student__c);
            }

            if (app.Job__c != null) {
                jobIds.add(app.Job__c);
            }
        }

        // Query Students
        Map<Id, Student__c> studentMap = new Map<Id, Student__c>([
            SELECT Id, CGPA__c
            FROM Student__c
            WHERE Id IN :studentIds
        ]);

        // Query Jobs
        Map<Id, Job__c> jobMap = new Map<Id, Job__c>([
            SELECT Id,
                   Minimum_CGPA__c,
                   Last_Date__c
            FROM Job__c
            WHERE Id IN :jobIds
        ]);

        // Existing Applications
        Set<String> existingApplications = new Set<String>();

        for (Application__c app : [
            SELECT Student__c,
                   Job__c
            FROM Application__c
            WHERE Student__c IN :studentIds
            AND Job__c IN :jobIds
        ]) {

            existingApplications.add(
                app.Student__c + '-' + app.Job__c
            );

        }

        // Validation
        for (Application__c app : newApplications) {

            Student__c student = studentMap.get(app.Student__c);
            Job__c job = jobMap.get(app.Job__c);

            if(student == null){
                app.addError('Please select a valid Student.');
            }

            if(job == null){
                app.addError('Please select a valid Job.');
            }

            if(student == null || job == null){
                continue;
            }

            // Rule 1 - CGPA
            if(student.CGPA__c < job.Minimum_CGPA__c){

                app.addError(
                    'Student CGPA is below the required minimum CGPA.'
                );

            }

            // Rule 2 - Last Date
            if(Date.today() > job.Last_Date__c){

                app.addError(
                    'Application deadline has passed.'
                );

            }

            // Rule 3 - Duplicate
            String key = app.Student__c + '-' + app.Job__c;

            if(existingApplications.contains(key)){

                app.addError(
                    'Student has already applied for this job.'
                );

            }

            // Rule 4 - Default Status
            if(String.isBlank(app.Status__c)){

                app.Status__c = 'Applied';

            }

        }

    }

    // AFTER UPDATE
    public static void afterUpdate(
        List<Application__c> newApplications,
        Map<Id, Application__c> oldMap
    ){

        for(Application__c app : newApplications){

            Application__c oldApp = oldMap.get(app.Id);

            // US-14
            if(app.Status__c == 'Selected'
               && oldApp.Status__c != 'Selected'){

                System.debug(
                    'Placement statistics updated.'
                );

            }

            // US-15
            if(app.Status__c != oldApp.Status__c){

                if(app.Status__c == 'Interview Scheduled'
                || app.Status__c == 'Selected'
                || app.Status__c == 'Rejected'
                || app.Status__c == 'Offer Accepted'){

                    System.debug(
                        'Notification sent for status : '
                        + app.Status__c
                    );

                }

            }

        }

    }

}
```




# ApplicationTrigger.apxt

```
trigger ApplicationTrigger on Application__c (
    before insert,
    after update
) {

    if (Trigger.isBefore && Trigger.isInsert) {
        ApplicationTriggerHandler.beforeInsert(Trigger.new);
    }

    if (Trigger.isAfter && Trigger.isUpdate) {
        ApplicationTriggerHandler.afterUpdate(
            Trigger.new,
            Trigger.oldMap
        );
    }
}
```

This keeps the Trigger lightweight and follows Salesforce best practices.

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

This assignment demonstrates how Apex Triggers and Trigger Handlers can enforce business rules in Salesforce. The implementation validates application data before insertion, prevents duplicate applications, automatically assigns default values, and performs additional business processing after status updates while following Salesforce development best practices.
