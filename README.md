# 💳 Merchant Settlement Waterfall — Real Rails Intelligence PoC

A production-style intelligence dashboard that simulates how merchant payments flow through the global payments rail — from gross sales → fees → reserves → net settlement.

Built as part of the **Real Rails Intelligence Library PoC framework**.

---

## 🚀 Live Features

### 📊 Settlement Waterfall Engine
- Gross Sales → Fees → Reserve Hold → Net Settlement
- Dynamic recalculation based on filters

### ⏱ Settlement Delay Analytics
- Weekly settlement delay simulation
- Processor & merchant impact modeling

### 🧠 Pricing Scenario Simulator
- Flat Rate / Interchange+ / Tiered models
- Real-time financial impact visualization

### 🔍 Intelligent Filters
- Merchant selection (Amazon, Flipkart, Shopify)
- Processor selection (Stripe, Razorpay, Adyen)
- Region-based simulation hooks

### 📦 Downloadable Dataset
- CSV export for analysis
- Synthetic merchant settlement dataset

---

## 🏗 Architecture

## 🔄 System Flow

Gross Sales
  ↓
Card Networks (Visa/Mastercard)
  ↓
Payment Processor (Stripe/Razorpay/Adyen)
  ↓
Acquirer Bank
  ↓
Reserve + Fees Applied
  ↓
Net Settlement to Merchant


---

## 🧠 Data Model

Since real-time settlement data is not publicly available:

- Uses **synthetic merchant batches**
- Simulates processor pricing behavior
- Models reserve + delay logic

Sources conceptually aligned with:
- CFPB (Consumer Financial Protection Bureau)
- Federal Reserve Payments Study

---

## 🧩 Key Concepts Explained

### 💰 Payment Rail
The infrastructure that moves money from customer → merchant.

### 🏦 Who Controls the Rail
- Card Networks (Visa, Mastercard)
- Regulators (Federal Reserve, CFPB)
- Processors (Stripe, Razorpay, Adyen)

### ⏳ Settlement Delay
Time between transaction authorization and merchant payout.

---

## 📂 Project Structure


---

## ⚙️ Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Recharts
- React Hooks

---

## 🎯 What This Project Demonstrates

- Payment rail intelligence modeling
- Financial data simulation
- Dashboard engineering
- UI/UX for fintech systems
- Data-driven decision interfaces

---

## 📸 Screenshots

Add screenshots in:

