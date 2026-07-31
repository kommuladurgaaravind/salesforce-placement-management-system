# Salesforce Interview Readiness Bootcamp – Day 4
## Your First Lightning Web Component (LWC)

## 📌 Project Overview

This project is part of the **Salesforce Interview Readiness Bootcamp**. The objective was to build the first **Lightning Web Component (LWC)** and understand how Salesforce user interfaces are developed using modern web technologies.

This project demonstrates the basics of Lightning Web Components, including component structure, data binding, JavaScript event handling, and deployment to a Lightning App Page. :contentReference[oaicite:0]{index=0}

---

## 🎯 Objectives

- Understand what Lightning Web Components (LWC) are.
- Create the first Lightning Web Component.
- Learn the structure of an LWC.
- Deploy the component to a Lightning Page.
- Implement data binding.
- Handle button click events.
- Understand how LWC will communicate with Apex in future projects. :contentReference[oaicite:1]{index=1}

---

## 🛠️ Technologies Used

- Salesforce Platform
- Lightning Web Components (LWC)
- HTML
- JavaScript
- XML (Meta Configuration)

---

## 📂 Component Structure

```
force-app/
└── main/
    └── default/
        └── lwc/
            └── placementHome/
                ├── placementHome.html
                ├── placementHome.js
                └── placementHome.js-meta.xml
```

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
- Student Name
- Roll Number
- Department

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

(All values are hard-coded for this exercise.) :contentReference[oaicite:3]{index=3}

---

## 📚 What I Learned

- Introduction to Lightning Web Components.
- LWC component architecture.
- HTML, JavaScript, and Meta XML roles.
- Data Binding using template expressions.
- JavaScript variables.
- Event handling with button clicks.
- Deploying components using Lightning App Builder.
- Difference between frontend (LWC) and backend (Apex). :contentReference[oaicite:4]{index=4}

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
- Explain the component developed in this project. :contentReference[oaicite:5]{index=5}

---

## 📸 Screenshots

Add screenshots here after deployment.

Example:

```
screenshots/
│── home-page.png
│── student-details.png
│── welcome-message.png
│── status-update.png
```

---

## 📖 Key Concept

Lightning Web Components (LWC) is Salesforce's modern UI framework based on web standards such as HTML, JavaScript, and CSS. It enables developers to build fast, reusable, and maintainable user interfaces that interact with Salesforce data through Apex. :contentReference[oaicite:6]{index=6}

---

## 🔮 Future Enhancement

In upcoming bootcamp sessions, this component will be connected to:

- Apex Classes
- SOQL Queries
- Salesforce Database

to retrieve real-time placement information instead of hard-coded values. :contentReference[oaicite:7]{index=7}

---

## 👨‍💻 Author

**Name:** Kommula Durga Aravind

Salesforce Interview Readiness Bootcamp – Day 4
