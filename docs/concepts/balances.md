---
sidebar_position: 8
---

# Balances

**Balances** in Arthalekha represent how much money is in your accounts at any given time. Understanding how balances work is key to getting accurate financial tracking.

## Types of Balances

Arthalekha maintains two types of balance information:

### 1. Current Balance

The **current balance** is the real-time, up-to-date balance of each account. It:
- Updates automatically with every transaction
- Shows exactly how much is in the account right now
- Is displayed on account listings and dashboards

### 2. Historical Balances

**Historical balances** are monthly snapshots showing what each account's balance was at the end of each month. They:
- Are recorded automatically
- Allow you to see balance trends over time
- Enable historical reporting and analysis

## How Balances Are Calculated

The balance formula is:

```
Current Balance = Initial Balance
                + Total Incomes
                - Total Expenses
                + Transfers In
                - Transfers Out
```

### Transaction Effects

| Transaction Type | Effect on Balance |
|-----------------|-------------------|
| Income | **Increases** the account balance |
| Expense | **Decreases** the account balance |
| Transfer Out | **Decreases** the source account balance |
| Transfer In | **Increases** the destination account balance |

## Initial Balance

When you create an account, you specify:
- **Initial Date**: When you start tracking the account
- **Initial Balance**: The account balance on that date

This serves as the starting point for all balance calculations.

### Example

```
Account: HDFC Savings
Initial Date: January 1, 2024
Initial Balance: ₹50,000

January Transactions:
  + Income (Salary): ₹75,000
  - Expense (Rent): ₹20,000
  - Expense (Groceries): ₹5,000
  - Transfer Out (to Savings): ₹10,000

Balance at End of January:
  ₹50,000 + ₹75,000 - ₹20,000 - ₹5,000 - ₹10,000 = ₹90,000
```

## Balance Updates

Balances update automatically when you:

1. **Create a transaction** - Balance adjusts immediately
2. **Edit a transaction** - Old effect is reversed, new effect is applied
3. **Delete a transaction** - Effect is reversed

You never need to manually calculate or update balances.

## Monthly Balance Records

At the end of each month, Arthalekha maintains a balance snapshot for each account. This enables:

### Trend Analysis

See how your balance has changed over months:
```
January:  ₹50,000
February: ₹65,000  (+₹15,000)
March:    ₹80,000  (+₹15,000)
April:    ₹72,000  (-₹8,000)
```

### Historical Reporting

Generate reports for any past period using the recorded balances.

### Average Balance Calculation

Calculate average balance over time for banking requirements or personal analysis.

## Viewing Balances

### Account List

The main accounts view shows each account with its current balance.

### Account Details

Individual account pages show:
- Current balance
- Recent transactions affecting the balance
- Balance history

### Dashboard

The home dashboard shows:
- Total balance across all accounts
- Monthly income vs expense summary
- Balance trends chart

### Projected Balance

The projected balance view shows:
- Current balance
- Expected future balance based on recurring transactions
- Day-by-day projections

## Balance Accuracy

For accurate balances:

### 1. Set Correct Initial Values

- Check your actual account balance on the initial date
- Enter it precisely as the initial balance
- All future calculations depend on this starting point

### 2. Record All Transactions

- Log every income, expense, and transfer
- Don't skip small transactions
- Regular recording ensures accuracy

### 3. Reconcile Periodically

- Compare Arthalekha balance with actual account balance
- If there's a discrepancy, look for missed transactions
- Adjust if needed (create a correction transaction)

### 4. Use the Right Transaction Type

- Income for money coming in from outside
- Expense for money going out
- Transfer for money moving between your accounts

Using the wrong type will cause balance errors.

## Negative Balances

Some accounts can legitimately have negative balances:

### Credit Cards

Credit card accounts typically show negative balances:
- Each expense increases the negative balance (you owe more)
- Payments decrease the negative balance (you owe less)

```
Starting: ₹0
Expense:  -₹5,000 (you now owe ₹5,000)
Expense:  -₹3,000 (you now owe ₹8,000)
Payment:  +₹8,000 (you now owe ₹0)
```

### Loans

Loan accounts work similarly:
- Negative balance represents debt
- Payments reduce the debt

### Overdrafts

Bank accounts with overdraft can go negative temporarily.

## Net Worth

Your total **net worth** is the sum of all account balances:

```
Net Worth = Σ (All Account Balances)
```

This includes:
- Positive balances (bank accounts, investments)
- Negative balances (credit cards, loans)

The result shows your true financial position.

## Balance History

### Why Track History?

Historical balance tracking helps you:
- See financial progress over time
- Identify patterns (seasonal spending, etc.)
- Plan for future based on past trends
- Generate historical reports

### Accessing History

View balance history through:
- Account details page
- Reports and exports
- Projected balance charts

## Troubleshooting Balance Issues

### Balance Doesn't Match Bank Statement

1. Check for missed transactions
2. Verify transaction amounts are correct
3. Check initial balance was set correctly
4. Look for duplicate entries

### Sudden Balance Jump

1. Check recent transactions for errors
2. Look for large transactions that might be wrong
3. Verify transfers are recorded correctly (both sides)

### Historical Balance Seems Wrong

1. Review transactions from that period
2. Check if initial balance was correct
3. Look for backdated transaction errors

## Related Concepts

- [Accounts](/docs/concepts/accounts) - Each account has a balance
- [Incomes](/docs/concepts/incomes) - Increase balances
- [Expenses](/docs/concepts/expenses) - Decrease balances
- [Transfers](/docs/concepts/transfers) - Move balances between accounts
- [Projected Balance](/docs/features/projected-balance) - Future balance estimates
