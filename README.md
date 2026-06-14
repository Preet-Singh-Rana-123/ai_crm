# 🚀 SmartReach AI CRM

An AI-Native Customer Relationship Management (CRM) platform built to help brands intelligently identify customer segments, create personalized campaigns, launch communications, and analyze campaign performance using AI-powered workflows.

Built as part of an AI CRM challenge focused on creating an intelligent customer engagement platform for Direct-to-Consumer (D2C) and retail brands.

---

## 📌 Problem Statement

Modern brands collect large amounts of customer and purchase data but often struggle to:

* Identify the right audience.
* Create effective personalized messaging.
* Choose the best communication channel.
* Measure campaign performance.
* Act on customer insights quickly.

SmartReach AI CRM solves these problems by combining CRM functionality with AI-powered decision-making and campaign automation.

---

## ✨ Key Features

### 👥 Customer Management

* Manage customer profiles.
* Store customer attributes:

  * Name
  * Email
  * Phone
  * City
  * Total Spending
  * Order Count
  * Last Purchase Date
* Customer tagging system:

  * VIP
  * Frequent Buyer
  * Inactive Customer

---

### 🛒 Order Management

* Track customer orders.
* Store purchased products.
* Monitor customer spending behavior.
* Revenue analytics.

---

### 🎯 Smart Segmentation

Create customer segments using behavioral rules:

Examples:

* Customers with total spending > ₹5000
* Frequent buyers
* Inactive customers
* City-based audiences

Each segment automatically calculates audience size.

---

### 📢 Campaign Management

Create and manage marketing campaigns.

Campaign Features:

* Campaign Name
* Audience Selection
* Channel Selection
* Personalized Messages
* Campaign Status Tracking

Supported Channels:

* Email
* SMS
* WhatsApp
* RCS

---

### 📈 Campaign Analytics

Track campaign performance through:

* Sent
* Delivered
* Opened
* Clicked
* Failed

Performance Metrics:

* Delivery Rate
* Open Rate
* Click Through Rate (CTR)

Visualized using interactive charts.

---

## 🤖 AI Assistant

AI-powered marketer assistant.

### AI Segment Generator

Convert natural language into segmentation rules.

Example:

> Find customers who spent more than ₹5000 and placed more than 5 orders.

Generated Output:

```json
{
  "conditions": [
    {
      "field": "totalSpent",
      "operator": ">",
      "value": 5000
    }
  ]
}
```

### AI Message Generator

Generate personalized campaign messages.

Example:

> Re-engage inactive customers.

Generated Message:

```text
Hey {{name}},
We miss you! Here's an exclusive offer waiting for you.
```

### AI Insights Generator

Analyze campaign performance and generate recommendations.

Example:

* Open rate is strong.
* Click-through rate can be improved.
* Consider more personalized offers.

---

## 🧠 AI Agent

The flagship feature of SmartReach.

Instead of manually creating campaigns, marketers simply describe their goal.

Example:

```text
Bring back customers who haven't purchased in 60 days and offer a discount.
```

The AI Agent automatically:

1. Creates the audience.
2. Estimates audience size.
3. Selects the communication channel.
4. Generates campaign messaging.
5. Creates a campaign plan.

Output:

```text
Campaign:
Re-engagement Campaign

Audience:
Inactive Customers

Channel:
Email

Message:
Hey {{name}}, we miss you...
```

This transforms campaign creation into a goal-driven workflow.

---

## 🏗️ System Architecture

```text
Frontend (React + Redux)
            │
            ▼
Backend (Node.js + Express)
            │
            ▼
MongoDB Atlas
            │
            ▼
Gemini AI APIs
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Redux Toolkit
* React Router
* Axios
* Tailwind CSS
* Recharts

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### AI

* Google Gemini API

### Deployment

* Render
* MongoDB Atlas

---

## 📂 Project Structure

```text
ai_crm
│
├── frontend
│   ├── components
│   ├── pages
│   ├── redux
│   ├── routes
│   └── api
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   └── scripts
│
└── README.md
```

---

## 📊 Seeded Demo Data

The application includes realistic generated data:

* 1000 Customers
* 8000+ Orders
* Multiple Segments
* Campaigns
* Communication Events
* Analytics Data

This provides a production-like environment for testing and demonstrations.

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/Preet-Singh-Rana-123/ai_crm.git
```

### Backend

```bash
cd backend

npm install

npm run dev
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

Backend `.env`

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Frontend `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📸 Screenshots

### Dashboard

* KPI Cards
* Campaign Funnel
* Revenue Overview

### Customers

* Search
* Filters
* Customer Tags

### Campaigns

* Campaign Creation
* Segment Selection
* Message Personalization

### Analytics

* Delivery Metrics
* Open Rate
* CTR Analysis

### AI Assistant

* Segment Generator
* Message Generator
* Insights Generator

### AI Agent

* Goal-Based Campaign Planning

---

## 🔮 Future Improvements

* Campaign Scheduling
* A/B Testing
* Predictive Customer Churn
* AI Channel Optimization
* Multi-Agent Campaign Execution
* Real-time Notifications
* Advanced Customer Journey Analytics

---

## 👨‍💻 Author

**Preet Singh Rana**

GitHub:
https://github.com/Preet-Singh-Rana-123

Project Repository:
https://github.com/Preet-Singh-Rana-123/ai_crm

---

## ⭐ Highlights

* AI-Native CRM Architecture
* Goal-Driven Campaign Creation
* Intelligent Customer Segmentation
* AI-Powered Marketing Assistant
* Campaign Analytics Dashboard
* Full-Stack MERN Application
* Production Deployment Ready
