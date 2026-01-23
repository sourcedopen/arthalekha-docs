---
sidebar_position: 4
---

# Expenses

An **Expense** in Arthalekha represents money spent from one of your accounts. Tracking expenses is essential for understanding where your money goes and maintaining accurate account balances.

## What is an Expense?

An expense is any money that leaves your possession and decreases an account balance. Common examples include:

- Groceries and food
- Utility bills (electricity, water, internet)
- Rent or mortgage payments
- Transportation costs
- Entertainment and subscriptions
- Shopping purchases
- Medical expenses
- Education costs

## Expense Properties

Each expense record contains:

| Property | Required | Description |
|----------|----------|-------------|
| **Description** | Yes | What the expense was for (e.g., "Grocery - Big Bazaar") |
| **Amount** | Yes | The amount spent |
| **Date** | Yes | When the expense occurred |
| **Account** | Yes | Which account the money came from |
| **Person** | No | Who made this expense (optional) |
| **Tags** | No | Categories/labels for this expense |

## How Expenses Affect Balances

When you record an expense:

1. The **account's current balance decreases** by the expense amount
2. The **monthly balance record** is updated for the transaction month
3. Any **projected balances** are recalculated

This happens automatically - you just need to record the expense.

### Example

If your "HDFC Savings" account has a balance of ₹1,25,000 and you record a rent expense of ₹20,000:

```
Before:  ₹1,25,000
Expense: -₹20,000
After:   ₹1,05,000
```

## Recording an Expense

When recording an expense, you'll need to provide:

### 1. Description
A clear description of what you spent money on:
- "Grocery - Big Bazaar"
- "Electricity Bill - March"
- "Netflix Subscription"
- "Dinner at Restaurant"

### 2. Amount
The exact amount spent. Enter the total amount debited from your account.

### 3. Date and Time
When the expense occurred. This determines:
- Which month the expense counts toward
- Accurate balance calculations
- Historical tracking

### 4. Account
Select which account the money came from. The balance of this account will decrease.

### 5. Person (Optional)
If tracking expenses by family member, select who made this expense:
- Useful for understanding individual spending habits
- Helps with family budget discussions
- Leave blank if not tracking by person

### 6. Tags (Optional)
Add tags to categorize the expense:
- "Food" for groceries and dining
- "Bills" for utilities and services
- "Entertainment" for leisure spending
- Multiple tags can be applied to one expense

## Filtering and Searching Expenses

You can filter your expense list by:

| Filter | Description |
|--------|-------------|
| **Date Range** | View expenses within a specific period |
| **Account** | View expenses from a specific account |
| **Person** | View expenses made by a specific person |
| **Tag** | View expenses with a specific tag |
| **Search** | Search in expense descriptions |

## Exporting Expenses

Export your filtered expense list to CSV for:
- Detailed analysis in Excel/Google Sheets
- Tax deduction documentation
- Budget reviews
- Expense reports

## Expense vs Transfer

Understanding the difference is important:

| Scenario | Record as |
|----------|-----------|
| Paid for groceries | **Expense** |
| Paid electricity bill | **Expense** |
| Moved money to savings account | **Transfer** (not expense) |
| Paid credit card bill | **Transfer** (not expense) |
| Withdrew cash from ATM | **Transfer** (not expense) |

**Rule of thumb**: If money is leaving your financial ecosystem (going to someone else), it's an expense. If money is just moving between your accounts, it's a transfer.

## Credit Card Expenses

When you make a purchase with a credit card:

1. Record the **expense** from your credit card account
2. The credit card balance becomes more negative (you owe more)
3. When you pay the credit card bill, record a **transfer** from your bank account to the credit card

This keeps both your spending and debt accurately tracked.

## Best Practices

### Be Descriptive
Include enough detail to remember what the expense was:
- Bad: "Shopping"
- Good: "Amazon - Bluetooth Headphones"
- Better: "Amazon - Sony WH-1000XM4 Headphones"

### Record Immediately
Record expenses as soon as they happen:
- Use the app right after making a purchase
- Check bank statements weekly for any missed expenses
- Don't let expenses pile up

### Consistent Tagging
Develop a tagging system that works for your analysis:

**By Category:**
- Food, Transport, Bills, Entertainment, Health, Education

**By Necessity:**
- Essential, Optional, Luxury

**By Frequency:**
- Daily, Monthly, Yearly, One-time

### Track the Right Person
When multiple people share an account:
- Always record who made the expense
- This enables fair splitting and individual tracking
- Useful for understanding family spending patterns

### Regular vs One-time Expenses
- For regular expenses (rent, subscriptions), consider setting up [Recurring Expenses](/docs/concepts/recurring-transactions)
- This helps with projections and ensures you don't forget regular payments

## Analyzing Expenses

Use Arthalekha's features to understand your spending:

1. **Filter by tags** to see category-wise spending
2. **Filter by person** to see individual spending
3. **Filter by date range** to compare months
4. **Export to CSV** for detailed analysis
5. **Check the dashboard** for visual summaries

## Related Concepts

- [Accounts](/docs/concepts/accounts) - Where expenses are debited from
- [Recurring Expenses](/docs/concepts/recurring-transactions) - For regular expenses like rent
- [Tags](/docs/concepts/tags) - For categorizing expenses
- [People](/docs/concepts/people) - For tracking who made expenses
- [Dashboard](/docs/features/dashboard) - For visualizing expense patterns
