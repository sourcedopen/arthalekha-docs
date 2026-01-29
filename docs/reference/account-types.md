---
sidebar_position: 1
---

# Account Types Reference

Quick reference for all account types in Arthalekha.

## Account Type Summary

| Type | Code | Typical Balance | Description |
|------|------|-----------------|-------------|
| Cash | CA | Positive | Physical cash, wallet |
| Savings | SB | Positive | Bank accounts |
| Credit Card | CC | Negative (debt) | Credit cards |
| Wallet | WL | Positive | Digital wallets, payment apps |
| Investment | IN | Positive | Stocks, mutual funds, FDs |
| Loan | LN | Negative (debt) or Positive (lent) | Loans taken or given |
| Other | OT | Varies | Any other type |

## Detailed Reference

### Cash (CA)

**Use for:**
- Physical currency
- Cash in wallet
- Cash at home

**Balance behavior:**
- Positive or zero
- Increases with ATM withdrawals (transfer from bank)
- Decreases with cash expenses

**Examples:**
- "Cash Wallet"
- "Home Cash"
- "Petty Cash"

---

### Savings (SB)

**Use for:**
- Bank savings accounts
- Checking/current accounts
- Fixed deposit accounts (or use Investment)

**Balance behavior:**
- Usually positive
- Increases with income
- Decreases with expenses and transfers out

**Examples:**
- "HDFC Savings"
- "SBI Salary Account"
- "Emergency Fund - Axis"

---

### Credit Card (CC)

**Use for:**
- Credit cards
- Store credit
- Revolving credit lines

**Balance behavior:**
- Typically negative (represents debt)
- More negative when you make purchases (expense)
- Less negative when you make payments (transfer)
- Zero or positive when fully paid

**Recording transactions:**
- Purchases: Record as expense FROM credit card
- Payments: Record as transfer FROM bank TO credit card

**Additional fields:**
- Credit Limit - Maximum credit available
- Rate of Interest - Annual interest rate
- Bill Generated On - Statement generation day
- Repayment Due After - Days until payment is due

**Examples:**
- "HDFC Credit Card - 4521"
- "Amazon Pay ICICI"
- "SBI SimplySave"

---

### Wallet (WL)

**Use for:**
- Digital wallets (Google Pay, Paytm, PhonePe)
- PayPal, Venmo equivalents
- Prepaid cards

**Balance behavior:**
- Usually positive (prepaid)
- Increases when you load money (transfer from bank)
- Decreases when you spend

**Examples:**
- "Google Pay"
- "Paytm Wallet"
- "Amazon Pay Balance"

---

### Investment (IN)

**Use for:**
- Stock brokerage accounts
- Mutual fund accounts
- Fixed deposits
- PPF accounts
- Retirement accounts

**Balance behavior:**
- Positive and ideally growing
- Increases with contributions (transfers in)
- Increases with dividends/returns (income)
- Decreases with withdrawals (transfers out)

**Important:** Arthalekha tracks cash flow, not market value. Balance represents money invested, not current market worth.

**Examples:**
- "Zerodha - Stocks"
- "Groww - Mutual Funds"
- "PPF Account"
- "SBI FD"

---

### Loan (LN)

**Use for:**
- Loans you've taken (home, car, personal)
- Loans you've given to others
- Any debt obligations

**Balance behavior:**

*For loans taken (you owe money):*
- Negative balance = amount you owe
- Payments make it less negative
- Reaches zero when paid off

*For loans given (others owe you):*
- Positive balance = amount owed to you
- Repayments reduce the balance
- Reaches zero when fully repaid

**Examples:**
- "Home Loan - HDFC" (negative)
- "Car Loan - SBI" (negative)
- "Loan to Rahul" (positive)

---

### Other (OT)

**Use for:**
- Accounts that don't fit other categories
- Security deposits
- Escrow accounts
- Special purpose accounts

**Balance behavior:**
- Varies based on purpose

**Examples:**
- "Security Deposit - Apartment"
- "Escrow Account"
- "Gift Card Balance"

## Quick Selection Guide

| I want to track... | Use Type |
|-------------------|----------|
| My bank account | Savings (SB) |
| Cash in my wallet | Cash (CA) |
| My credit card | Credit Card (CC) |
| Google Pay balance | Wallet (WL) |
| My stock investments | Investment (IN) |
| My home loan | Loan (LN) |
| A loan I gave to friend | Loan (LN) |
| Something else | Other (OT) |

## See Also

- [Accounts Concept](/docs/concepts/accounts) - Full account documentation
- [Account Types Feature](/docs/features/account-types) - Detailed usage guide
- [Setting Up Accounts](/docs/guides/setting-up-accounts) - Setup guide
