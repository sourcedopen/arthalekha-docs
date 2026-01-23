---
sidebar_position: 2
---

# Accounts

An **Account** in Arthalekha represents any financial container where you keep or owe money. Accounts are the foundation of your financial tracking - every transaction must be associated with at least one account.

## What is an Account?

Think of an account as any distinct pool of money you want to track separately. This includes:

- Your primary bank account
- A savings account
- Credit cards
- Digital wallets (PayPal, Google Pay, etc.)
- Cash in your wallet
- Investment accounts
- Loans you've taken or given

## Account Properties

Each account has the following properties:

| Property | Description |
|----------|-------------|
| **Name** | A descriptive name (e.g., "HDFC Savings", "Cash Wallet") |
| **Identifier** | Optional account number or reference (e.g., last 4 digits) |
| **Account Type** | The category of account (Savings, Credit Card, etc.) |
| **Initial Date** | When you started tracking this account |
| **Initial Balance** | The balance on the initial date |
| **Current Balance** | The real-time balance (automatically calculated) |

## Account Types

Arthalekha supports several account types, each with a short code for easy identification:

| Type | Code | Description |
|------|------|-------------|
| **Cash** | CA | Physical cash, wallet money |
| **Savings** | SB | Bank savings accounts |
| **Credit Card** | CC | Credit cards (balance typically negative) |
| **Wallet** | WL | Digital wallets, payment apps |
| **Investment** | IN | Stocks, mutual funds, fixed deposits |
| **Loan** | LN | Loans (given or taken) |
| **Other** | OT | Any other type of account |

[See detailed Account Types reference →](/docs/reference/account-types)

## Account Labels

In the interface, accounts are displayed with a **label** that combines:
- The short code for the account type
- The account name
- The identifier (if provided)

For example: `SB - HDFC Savings - 4523`

This makes it easy to quickly identify accounts, especially when you have multiple accounts of the same type.

## Balance Tracking

### Current Balance

The **current balance** is automatically maintained by Arthalekha. It updates whenever you:
- Record an income (balance increases)
- Record an expense (balance decreases)
- Record a transfer (source decreases, destination increases)

You never need to manually update the current balance.

### Initial Balance

When creating an account, you specify:
- **Initial Date**: The date from which you want to start tracking
- **Initial Balance**: The account balance on that date

All transactions should be dated on or after the initial date for accurate balance calculations.

### Historical Balances

Arthalekha maintains monthly balance snapshots for each account. This allows you to:
- See how your balance has changed over time
- Generate historical reports
- Understand spending patterns across months

## Working with Accounts

### Creating an Account

When creating a new account, provide:
1. A descriptive **name**
2. The **account type**
3. Optionally, an **identifier** (like last 4 digits of account number)
4. The **initial date** (when you want to start tracking)
5. The **initial balance** on that date

### Account Transactions

From any account, you can view all transactions affecting it:
- Incomes credited to the account
- Expenses debited from the account
- Transfers into or out of the account

### Account Projected Balance

For each account, you can view projected future balances based on:
- The current balance
- Scheduled recurring incomes
- Scheduled recurring expenses
- Scheduled recurring transfers

## Best Practices

### Naming Conventions

Use clear, descriptive names that help you identify accounts quickly:
- Include the bank/service name: "HDFC Savings", "PayPal"
- Add purpose if helpful: "Emergency Fund", "Vacation Savings"

### Using Identifiers

The identifier field is useful when you have multiple accounts at the same bank:
- Use last 4 digits of account number
- Use a nickname that's meaningful to you

### Setting Initial Balances

For accurate tracking:
- Check your actual account balance on the initial date
- Enter the exact amount
- Start recording transactions from that date forward

### Credit Cards and Loans

For credit cards and loans:
- A negative balance represents money you owe
- Payments to a credit card are recorded as transfers from another account
- This keeps your net worth calculations accurate
