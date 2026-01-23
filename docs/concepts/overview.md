---
sidebar_position: 1
---

# Core Concepts Overview

Arthalekha is built around a few core concepts that work together to provide a complete picture of your finances. Understanding these concepts will help you get the most out of the application.

## The Big Picture

```
┌─────────────────────────────────────────────────────────────┐
│                          USER                                │
│                    (owns everything)                         │
└─────────────────────────────────────────────────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
    ┌──────────┐       ┌──────────┐       ┌──────────┐
    │ ACCOUNTS │       │  PEOPLE  │       │   TAGS   │
    │          │       │          │       │          │
    │ Bank     │       │ Family   │       │ Category │
    │ Wallet   │       │ members  │       │ labels   │
    │ Credit   │       │          │       │          │
    └──────────┘       └──────────┘       └──────────┘
          │                   │                   │
          │                   │                   │
          └─────────┬─────────┴─────────┬─────────┘
                    │                   │
                    ▼                   ▼
            ┌──────────────────────────────────┐
            │          TRANSACTIONS            │
            │                                  │
            │  • Income (money in)             │
            │  • Expense (money out)           │
            │  • Transfer (between accounts)   │
            └──────────────────────────────────┘
                            │
                            ▼
            ┌──────────────────────────────────┐
            │           BALANCES               │
            │                                  │
            │  Real-time + Historical records  │
            └──────────────────────────────────┘
```

## Core Entities

### Accounts

An **Account** represents any place where you keep money. This could be:
- A bank savings account
- A checking account
- A credit card
- A digital wallet (PayPal, Venmo, etc.)
- Cash on hand
- An investment account
- A loan account

Each account tracks its current balance and maintains a history of balances over time.

[Learn more about Accounts →](/docs/concepts/accounts)

### Transactions

Transactions are the financial movements that affect your accounts:

| Type | Description | Effect on Balance |
|------|-------------|-------------------|
| **Income** | Money received | Increases account balance |
| **Expense** | Money spent | Decreases account balance |
| **Transfer** | Money moved between accounts | Decreases source, increases destination |

- [Learn more about Incomes →](/docs/concepts/incomes)
- [Learn more about Expenses →](/docs/concepts/expenses)
- [Learn more about Transfers →](/docs/concepts/transfers)

### People

**People** represent the members of your household or group. When recording a transaction, you can optionally specify which person it's associated with:
- Who received the income?
- Who made the expense?

This helps track individual spending patterns within a family or group.

[Learn more about People →](/docs/concepts/people)

### Tags

**Tags** provide a flexible way to categorize your transactions. Unlike rigid category systems, tags let you organize transactions in whatever way makes sense for you:
- By category (Food, Transport, Entertainment)
- By project (Home Renovation, Vacation)
- By status (Essential, Optional)
- Or any combination

[Learn more about Tags →](/docs/concepts/tags)

### Balances

Arthalekha maintains two types of balance information:

1. **Current Balance** - The real-time balance of each account, updated with every transaction
2. **Historical Balances** - Monthly snapshots of account balances for tracking changes over time

[Learn more about Balances →](/docs/concepts/balances)

### Recurring Transactions

For transactions that happen regularly (salary, rent, subscriptions), you can set up **recurring transactions**. These serve as templates that:
- Help you track expected future transactions
- Enable accurate balance projections
- Can be configured for any frequency (daily, weekly, monthly, etc.)

[Learn more about Recurring Transactions →](/docs/concepts/recurring-transactions)

## How It All Works Together

1. **You create accounts** for each place you keep money
2. **You add people** to represent family/group members
3. **You create tags** to categorize your transactions
4. **You record transactions** (incomes, expenses, transfers) as they happen
5. **Balances update automatically** based on your transactions
6. **You set up recurring transactions** for regular items
7. **Projections show future balances** based on recurring transactions

## The Balance Formula

For any account, the balance is calculated as:

```
Balance = Initial Balance
        + Total Incomes
        - Total Expenses
        + Transfers In
        - Transfers Out
```

This calculation happens automatically whenever you record a transaction.
