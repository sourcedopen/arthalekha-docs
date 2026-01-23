---
sidebar_position: 5
---

# Transfers

A **Transfer** in Arthalekha represents money moving between two of your own accounts. Transfers help you track internal money movements without affecting your overall net worth.

## What is a Transfer?

A transfer is money moving from one account you own to another account you own. Common examples include:

- Moving money from checking to savings
- Paying off a credit card bill
- Withdrawing cash from ATM (bank to cash)
- Depositing cash into bank (cash to bank)
- Moving money between digital wallets
- Transferring between investment accounts

## Transfer Properties

Each transfer record contains:

| Property | Required | Description |
|----------|----------|-------------|
| **Description** | Yes | What the transfer is for (e.g., "Monthly savings transfer") |
| **Amount** | Yes | The amount being transferred |
| **Date** | Yes | When the transfer occurred |
| **Source Account (Debtor)** | Yes | The account money is coming FROM |
| **Destination Account (Creditor)** | Yes | The account money is going TO |
| **Tags** | No | Categories/labels for this transfer |

## Understanding Debtor and Creditor

Arthalekha uses accounting terminology for transfers:

| Term | Meaning | Balance Effect |
|------|---------|----------------|
| **Debtor** | The source account (money leaves) | Balance decreases |
| **Creditor** | The destination account (money enters) | Balance increases |

Think of it as: The debtor "owes" money to the creditor.

## How Transfers Affect Balances

When you record a transfer:

1. The **source account (debtor) balance decreases** by the transfer amount
2. The **destination account (creditor) balance increases** by the same amount
3. Your **total net worth stays the same** (money just moved)
4. **Monthly balance records** are updated for both accounts

### Example

Transferring ₹10,000 from "HDFC Savings" to "Emergency Fund":

```
HDFC Savings (Source/Debtor):
  Before: ₹1,00,000
  After:  ₹90,000  (-₹10,000)

Emergency Fund (Destination/Creditor):
  Before: ₹50,000
  After:  ₹60,000  (+₹10,000)

Total Net Worth:
  Before: ₹1,50,000
  After:  ₹1,50,000  (unchanged)
```

## Recording a Transfer

When recording a transfer, you'll need to provide:

### 1. Description
A clear description of why you're transferring:
- "Monthly savings contribution"
- "Credit card payment - January"
- "ATM withdrawal"
- "Investment deposit"

### 2. Amount
The exact amount being transferred between accounts.

### 3. Date and Time
When the transfer occurred. Important for:
- Accurate balance timelines
- Monthly reporting
- Matching with bank statements

### 4. Source Account (From)
Select the account the money is coming FROM. This account's balance will decrease.

### 5. Destination Account (To)
Select the account the money is going TO. This account's balance will increase.

:::caution
The source and destination accounts must be different. You cannot transfer money to the same account.
:::

### 6. Tags (Optional)
Add tags to categorize the transfer:
- "Savings" for transfers to savings accounts
- "Card Payment" for credit card payments
- "Investment" for investment contributions

## Common Transfer Scenarios

### ATM Withdrawal

When you withdraw cash from an ATM:
- **Source**: Bank account
- **Destination**: Cash/Wallet account
- **Description**: "ATM withdrawal - [location]"

### Credit Card Payment

When you pay your credit card bill:
- **Source**: Bank account (where payment comes from)
- **Destination**: Credit card account (reduces the negative balance)
- **Description**: "Credit card payment - [month]"

### Savings Contribution

When you move money to savings:
- **Source**: Primary checking account
- **Destination**: Savings account
- **Description**: "Monthly savings - [month]"

### Investment Deposit

When you invest money:
- **Source**: Bank account
- **Destination**: Investment account
- **Description**: "SIP investment" or "Mutual fund purchase"

## Transfer vs Income/Expense

It's crucial to use the correct transaction type:

| Scenario | Correct Type |
|----------|--------------|
| Moved money from bank to wallet | **Transfer** |
| Paid credit card bill from bank | **Transfer** |
| Received money from employer | **Income** |
| Received money from a friend (repayment) | **Income** |
| Paid for groceries | **Expense** |
| Sent money to family member | **Expense** |

**Key Question**: Is the money staying within your accounts, or going to/coming from outside?
- Staying within → **Transfer**
- Coming from outside → **Income**
- Going outside → **Expense**

## Filtering Transfers

You can filter your transfer list by:

| Filter | Description |
|--------|-------------|
| **Date Range** | View transfers within a specific period |
| **Source Account** | View transfers FROM a specific account |
| **Destination Account** | View transfers TO a specific account |
| **Tag** | View transfers with a specific tag |
| **Search** | Search in transfer descriptions |

## Best Practices

### Clear Descriptions
Make it easy to understand the transfer purpose:
- Include the reason: "Monthly savings transfer"
- Include relevant details: "Credit card payment - January bill"

### Consistent Scheduling
For regular transfers:
- Set up [Recurring Transfers](/docs/concepts/recurring-transactions) for automated tracking
- Use consistent descriptions for easy searching

### Credit Card Management
- Record each purchase as an expense from the credit card
- Record the monthly payment as a transfer from bank to credit card
- This keeps both spending and debt accurately tracked

### Cash Tracking
- Create a "Cash" or "Wallet" account for physical money
- Record ATM withdrawals as transfers from bank to cash
- Record cash deposits as transfers from cash to bank
- Record cash expenses as expenses from the cash account

## Related Concepts

- [Accounts](/docs/concepts/accounts) - The source and destination of transfers
- [Recurring Transfers](/docs/concepts/recurring-transactions) - For regular transfers
- [Tags](/docs/concepts/tags) - For categorizing transfers
- [Balances](/docs/concepts/balances) - How transfers affect account balances
