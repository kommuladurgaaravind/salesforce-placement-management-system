# Salesforce Interview Readiness Bootcamp – Day 4
## Your First Lightning Web Component (LWC)

## 📌 Project Overview

This project is part of the **Salesforce Interview Readiness Bootcamp**. The objective was to build the first **Lightning Web Component (LWC)** and understand how Salesforce user interfaces are developed using modern web technologies.

---

## 🎯 Objectives

- Understand what Lightning Web Components (LWC) are.
- Create the first Lightning Web Component.
- Learn the structure of an LWC.
- Deploy the component to a Lightning Page.
- Implement data binding.
- Handle button click events.

---

## 🛠️ Technologies Used

- Salesforce Platform
- Lightning Web Components (LWC)
- HTML
- JavaScript
- XML (Meta Configuration)


### File Responsibilities

### placementHome.html
- Creates the user interface
- Displays text, buttons, and layout

### placementHome.js
- Stores variables
- Handles button click events
- Implements component logic

### placementHome.js-meta.xml
- Makes the component available in Lightning App Builder
- Specifies where the component can be used :contentReference[oaicite:2]{index=2}

---


## 🚀 Features Implemented

### ✅ Welcome Page
- Displays:
  - Welcome to Vishnu Placement Portal

### ✅ Student Information
Displays:
- Student Name : Kommula Durga Aravind
- Roll Number : 23PA1A0484
- Department : ECE

### ✅ Welcome Button
Button:
```
Show Welcome Message
```

Displays:
```
Welcome to Salesforce Development
```

### ✅ Application Status

Initial Status:
```
Not Applied
```

After Button Click:
```
Applied
```

### ✅ Placement Dashboard

Displays:
- Placement Portal
- Today's Date
- Welcome Student
- Number of Companies
- Number of Jobs
- Applications Submitted

---

## 📚 What I Learned

- Introduction to Lightning Web Components.
- LWC component architecture.
- HTML, JavaScript, and Meta XML roles.
- Data Binding using template expressions.
- Deploying components using Lightning App Builder.
- Difference between frontend (LWC) and backend (Apex). 
---

## ❓ Interview Questions Covered

- What is Lightning Web Components?
- Why did Salesforce introduce LWC?
- Difference between LWC and Aura Components.
- What are the three files inside an LWC?
- Why is JavaScript required?
- What is Data Binding?
- Can LWC directly execute SOQL?
- Why does LWC need Apex?
- Where is an LWC deployed?
- Explain the component developed in this project.

---
## README Questions

### 1. What is LWC?

Lightning Web Components (LWC) is Salesforce's modern user interface framework built on web standards such as HTML, JavaScript, and CSS. It enables developers to create fast, reusable, and maintainable components for Salesforce applications. :contentReference[oaicite:0]{index=0}

### 2. What did you build?

I built my first Lightning Web Component named **placementHome**. The component displays a welcome message, student details, application status, and a simple placement dashboard. It also demonstrates data binding and JavaScript event handling using buttons. :contentReference[oaicite:1]{index=1}

### 3. Which file contains HTML?

The **`placementHome.html`** file contains the HTML. It is responsible for defining the user interface, including the layout, text, and buttons. :contentReference[oaicite:2]{index=2}

### 4. Which file contains JavaScript?

The **`placementHome.js`** file contains the JavaScript. It manages variables, component logic, event handling, and communication within the Lightning Web Component. :contentReference[oaicite:3]{index=3}

### 5. What did you learn today?

Today, I learned the fundamentals of Lightning Web Components, including component structure, data binding, JavaScript event handling, deployment to a Lightning Page, and how LWC will interact with Apex in future projects. :contentReference[oaicite:4]{index=4}
## 📖 Key Concept

Lightning Web Components (LWC) is Salesforce's modern UI framework based on web standards such as HTML, JavaScript, and CSS. It enables developers to build fast, reusable, and maintainable user interfaces that interact with Salesforce data through Apex.

---

## 🔮 Future Enhancement

In upcoming bootcamp sessions, this component will be connected to:

- Apex Classes
- SOQL Queries
- Salesforce Database
