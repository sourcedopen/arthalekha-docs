---
sidebar_position: 9
---

# Recurring Transactions

**Recurring transactions** in Arthalekha are templates for transactions that happen regularly. They help you track expected future income and expenses, and enable accurate balance projections.

## What are Recurring Transactions?

Recurring transactions represent financial events that repeat on a schedule:

- **Recurring Incomes**: Regular money coming in (salary, rent received)
- **Recurring Expenses**: Regular money going out (rent, subscriptions, EMIs)
- **Recurring Transfers**: Regular money movements between accounts (monthly savings)

## Why Use Recurring Transactions?

### 1. Future Balance Projections

Recurring transactions power the projected balance feature. By knowing what's coming, Arthalekha can show you:
- Expected balance next month
- When you might run low on funds
- How much you'll have saved by year-end

### 2. Financial Planning

See upcoming financial commitments:
- Bills due this month
- Expected income timing
- Planned savings contributions

### 3. Never Forget Regular Payments

Keep track of:
- Subscription renewals
- Bill due dates
- Investment contributions

## Recurring Transaction Properties

Each recurring transaction has:

| Property | Description |
|----------|-------------|
| **Description** | What the transaction is for |
| **Amount** | The recurring amount |
| **Account** | Which account is affected (optional for incomes/expenses) |
| **Person** | Who this relates to (optional, incomes/expenses only) |
| **Tags** | Categories for this transaction |
| **Next Transaction Date** | When the next occurrence is due |
| **Frequency** | How often it repeats |
| **Remaining Recurrences** | How many times left (optional) |

### Optional Account (Skip Transaction)

For recurring incomes and expenses, the account field is **optional**. When no account is selected:

- **No transaction is created** when the next date arrives
- The **next transaction date is still updated** according to the frequency
- **Remaining recurrences are still decremented** (if set)
- Useful for **tracking reminders** without affecting account balances

This is helpful for:
- Tracking expected payments you haven't assigned an account to yet
- Reminders for financial events without actual transactions
- Planning future expenses before deciding which account to use

## Frequencies

Arthalekha supports these recurring frequencies:

| Frequency | Meaning | Example |
|-----------|---------|---------|
| **Daily** | Every day | Daily allowance |
| **Weekly** | Every 7 days | Weekly grocery shopping |
| **Biweekly** | Every 14 days | Biweekly paycheck |
| **Monthly** | Every month | Monthly salary, rent |
| **Quarterly** | Every 3 months | Quarterly insurance |
| **Yearly** | Every 12 months | Annual subscriptions |

[See Frequencies Reference →](/docs/reference/frequencies)

## Remaining Recurrences

You can set a limit on how many times a recurring transaction should repeat:

| Setting | Behavior |
|---------|----------|
| **Not set (null)** | Repeats indefinitely |
| **Number (e.g., 12)** | Repeats exactly that many times, then stops |
| **0** | No more recurrences (effectively ended) |

### Use Cases

- **EMI with 24 months**: Set remaining recurrences to 24
- **Yearly subscription, auto-renews**: Leave unset (indefinite)
- **6-month gym membership**: Set remaining recurrences to 6

## Types of Recurring Transactions

### Recurring Incomes

Regular money coming into your accounts:

| Example | Frequency | Typical |
|---------|-----------|---------|
| Monthly salary | Monthly | 1st of month |
| Freelance retainer | Monthly | 15th of month |
| Rental income | Monthly | 5th of month |
| Quarterly dividends | Quarterly | End of quarter |
| Annual bonus | Yearly | December |

### Recurring Expenses

Regular money going out of your accounts:

| Example | Frequency | Typical |
|---------|-----------|---------|
| Rent/Mortgage | Monthly | 1st of month |
| Electricity bill | Monthly | 15th of month |
| Netflix subscription | Monthly | Varies |
| Car EMI | Monthly | 5th of month |
| Annual insurance | Yearly | Policy date |

### Recurring Transfers

Regular money movements between your accounts:

| Example | Frequency | Typical |
|---------|-----------|---------|
| Monthly savings | Monthly | 1st of month |
| SIP investment | Monthly | Any date |
| Emergency fund contribution | Monthly | After salary |

## Creating Recurring Transactions

When creating a recurring transaction:

### 1. Choose the Type
- Recurring Income, Recurring Expense, or Recurring Transfer

### 2. Enter Details
- Description (what it's for)
- Amount
- Associated account(s)

### 3. Set the Schedule
- **Next Transaction Date**: When the next occurrence is due
- **Frequency**: How often it repeats
- **Remaining Recurrences**: How many times (optional)

### 4. Add Tags (Optional)
- Categorize for analysis

## How Projections Work

Recurring transactions feed into the projected balance feature:

```
Today's Balance: ₹1,00,000

Recurring Items (Monthly):
  + Salary:     ₹75,000
  - Rent:       ₹20,000
  - EMI:        ₹15,000
  - Savings:    ₹20,000 (transfer)

Projected Balance (1 month later):
  ₹1,00,000 + ₹75,000 - ₹20,000 - ₹15,000 - ₹20,000 = ₹1,20,000
```

The system projects balances day by day for up to 12+ months.

## Managing Recurring Transactions

### Viewing All Recurring Items

Access separate lists for:
- Recurring Incomes
- Recurring Expenses
- Recurring Transfers

Each shows upcoming transactions and their schedules.

### Editing

Update recurring transactions when:
- Amount changes (salary increase, rent hike)
- Account changes (new bank account)
- Frequency changes (annual to monthly)
- End date approaches

### Deleting

Delete recurring transactions when:
- You cancel a subscription
- You finish paying off a loan
- The recurring item no longer applies

## Best Practices

### Set Up All Regular Items

Create recurring transactions for:
- All regular income sources
- All subscriptions and memberships
- All loans and EMIs
- All regular bills
- Regular savings/investment contributions

### Keep Amounts Updated

When rates change:
- Update the recurring transaction amount
- Check after bill revisions, salary changes, etc.

### Use Meaningful Descriptions

Include relevant details:
- "Rent - ABC Apartments"
- "Netflix - Family Plan"
- "Car Loan EMI - HDFC"

### Set Accurate Dates

Match the actual transaction dates:
- Salary on the actual pay date
- Bills on their typical due date
- This ensures accurate projections

### Review Periodically

Monthly review to ensure:
- All recurring items are current
- Amounts are accurate
- Nothing is missing

### Use Remaining Recurrences for Finite Items

Set limits for:
- Loans with fixed tenure
- Fixed-term subscriptions
- Time-bound commitments

## Common Scenarios

### Salary Setup

```
Type: Recurring Income
Description: Monthly Salary - Acme Corp
Amount: ₹75,000
Account: HDFC Salary Account
Frequency: Monthly
Next Date: 1st of next month
Remaining: (leave empty - indefinite)
```

### Rent Setup

```
Type: Recurring Expense
Description: Rent - Sunshine Apartments
Amount: ₹20,000
Account: HDFC Salary Account
Frequency: Monthly
Next Date: 5th of next month
Remaining: (leave empty - indefinite)
```

### EMI Setup

```
Type: Recurring Expense
Description: Car Loan EMI - HDFC
Amount: ₹15,000
Account: HDFC Salary Account
Frequency: Monthly
Next Date: 10th of next month
Remaining: 36 (3 years left)
```

### SIP Setup

```
Type: Recurring Transfer
Description: Monthly SIP - Mutual Fund
Amount: ₹10,000
From Account: HDFC Salary Account
To Account: Investment Account
Frequency: Monthly
Next Date: 15th of next month
Remaining: (leave empty - indefinite)
```

## Related Concepts

- [Incomes](/docs/concepts/incomes) - One-time income transactions
- [Expenses](/docs/concepts/expenses) - One-time expense transactions
- [Transfers](/docs/concepts/transfers) - One-time transfer transactions
- [Projected Balance](/docs/features/projected-balance) - Using recurring transactions for projections
- [Frequencies Reference](/docs/reference/frequencies) - Detailed frequency options
