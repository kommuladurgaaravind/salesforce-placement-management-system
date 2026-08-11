# 🎓 Student Placement Portal

A Salesforce-powered Student Placement Portal built using Lightning Web Components (LWC), Apex, SOQL, and Salesforce Custom Objects.

---

## 🚀 Project Overview

The **Student Placement Portal** is a student-facing placement application built on Salesforce.

Instead of students directly working with Salesforce records, the portal provides a simple interface where students can:

-  View their profile
-  View their CGPA
-  Update their CGPA
-  View eligible jobs
-  Apply for jobs
-  View submitted applications
-  Track application status
-  See newly submitted applications without manually refreshing the page

The project demonstrates how Salesforce can be transformed from a record-management platform into a complete user-facing application.

---

# 🎯 Project Goal

The main goal is to simplify the student placement process.

```text
                    🎓 STUDENT
                        │
                        ▼
              ┌───────────────────┐
              │  Student Portal   │
              └─────────┬─────────┘
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
         👤            💼            📋
      Profile       Jobs        Applications
          │             │             │
          │             ▼             │
          │      Check Eligibility    │
          │             │             │
          │             ▼             │
          │           📝 Apply        │
          │             │             │
          │             ▼             │
          │      Application__c      │
          │             │             │
          └─────────────┴─────────────┘
                        │
                        ▼
                  🎯 Track Status
```
