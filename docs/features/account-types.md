---
sidebar_position: 5
---

# Account Types

Arthalekha supports different **account types** to accurately represent the various financial instruments you use. Each type has specific characteristics and behaviors.

## Available Account Types

| Type | Code | Description |
|------|------|-------------|
| **Cash** | CA | Physical cash and wallet money |
| **Savings** | SB | Bank savings accounts |
| **Credit Card** | CC | Credit cards |
| **Wallet** | WL | Digital wallets and payment apps |
| **Investment** | IN | Investment accounts |
| **Loan** | LN | Loans (taken or given) |
| **Other** | OT | Any other type |

## Cash (CA)

### What It Represents
- Physical currency in your possession
- Money in your physical wallet
- Cash at home

### Typical Usage
- Track cash withdrawals from ATM (transfer from bank)
- Record cash expenses
- Monitor cash on hand

### Balance Behavior
- Always positive (or zero)
- Decreases with cash expenses
- Increases with ATM withdrawals (transfers from bank)

### Example
```
Account: Cash Wallet
Type: Cash (CA)
Initial Balance: ₹5,000
```

## Savings (SB)

### What It Represents
- Bank savings accounts
- Checking accounts
- Current accounts

### Typical Usage
- Main account for salary
- Primary expense account
- Savings goals

### Balance Behavior
- Usually positive
- Increases with income (salary, etc.)
- Decreases with expenses and transfers out

### Example
```
Account: HDFC Savings
Type: Savings (SB)
Identifier: 4523 (last 4 digits)
Initial Balance: ₹1,00,000
```

## Credit Card (CC)

### What It Represents
- Credit cards
- Store credit accounts
- Any revolving credit

### Typical Usage
- Record credit card purchases as expenses
- Track credit card debt
- Record payments as transfers from bank

### Balance Behavior
- Usually **negative** (represents debt)
- Becomes more negative with expenses (you owe more)
- Becomes less negative with payments (you owe less)
- Zero or positive when fully paid

### Understanding Credit Card Balance

```
Starting Balance: ₹0 (no debt)

Make a purchase (expense): -₹5,000
  → Balance: -₹5,000 (you owe ₹5,000)

Make another purchase: -₹3,000
  → Balance: -₹8,000 (you owe ₹8,000)

Pay the bill (transfer from bank): +₹8,000
  → Balance: ₹0 (no debt)
```

### Credit Card Details

When creating a credit card account, you can specify additional details:

| Field | Description |
|-------|-------------|
| **Credit Limit** | Maximum credit available on the card |
| **Rate of Interest** | Annual interest rate charged on outstanding balance |
| **Interest Frequency** | How often interest is calculated |
| **Bill Generated On** | Day of month when statement is generated |
| **Repayment Due After** | Number of days after bill generation when payment is due |

### Example
```
Account: HDFC Credit Card
Type: Credit Card (CC)
Identifier: 8765 (last 4 digits)
Initial Balance: ₹0 (or current debt as negative)
Credit Limit: ₹1,00,000
```

## Wallet (WL)

### What It Represents
- Digital wallets (PayPal, Google Pay, Paytm)
- Payment apps
- Prepaid cards

### Typical Usage
- Track money loaded into wallet (transfer from bank)
- Record expenses paid via wallet
- Monitor wallet balance

### Balance Behavior
- Usually positive (prepaid balance)
- Some may allow negative (credit feature)

### Example
```
Account: Google Pay
Type: Wallet (WL)
Initial Balance: ₹2,000
```

## Investment (IN)

### What It Represents
- Brokerage accounts
- Mutual fund accounts
- Fixed deposits
- Stock portfolios
- Retirement accounts

### Typical Usage
- Track investment contributions (transfers from bank)
- Record investment returns (income)
- Monitor investment value

### Balance Behavior
- Usually positive and growing
- Increases with contributions
- May increase with recorded returns

### Note on Investment Tracking

Arthalekha tracks cash flow, not market values:
- Record money you put IN as transfers
- Record dividends/interest as income
- Record withdrawals as transfers out
- Balance reflects contributed amount, not market value

### Example
```
Account: Mutual Fund SIP
Type: Investment (IN)
Initial Balance: ₹50,000
```

## Loan (LN)

### What It Represents
- Loans you've taken (car loan, home loan, personal loan)
- Loans you've given to others
- Any debt obligations

### Typical Usage

**For loans taken (you owe money):**
- Initial balance is negative (your debt)
- EMI payments are transfers reducing the debt
- Interest payments are expenses

**For loans given (others owe you):**
- Initial balance is positive (money owed to you)
- Repayments reduce the balance
- Interest received is income

### Balance Behavior

**Loan taken:**
```
Initial Balance: -₹5,00,000 (you owe 5 lakh)
EMI Payment: +₹15,000 (debt reduces)
After Payment: -₹4,85,000 (you now owe 4.85 lakh)
```

**Loan given:**
```
Initial Balance: ₹50,000 (friend owes you)
Repayment: -₹10,000 (debt reduces)
After Repayment: ₹40,000 (friend now owes you)
```

### Example
```
Account: Car Loan - HDFC
Type: Loan (LN)
Initial Balance: -₹5,00,000 (debt)
```

## Other (OT)

### What It Represents
- Any account that doesn't fit other categories
- Specialized accounts
- Temporary tracking accounts

### Typical Usage
- Unique financial instruments
- Temporary tracking needs
- Anything that needs a different classification

### Example
```
Account: Security Deposit
Type: Other (OT)
Initial Balance: ₹50,000
```

## Choosing the Right Type

### Decision Guide

| Scenario | Recommended Type |
|----------|------------------|
| Bank account | Savings (SB) |
| Cash in wallet | Cash (CA) |
| Credit card | Credit Card (CC) |
| PayPal, Paytm | Wallet (WL) |
| Stocks, mutual funds | Investment (IN) |
| Car/home loan | Loan (LN) |
| Emergency fund in bank | Savings (SB) |
| FD in bank | Investment (IN) or Savings (SB) |
| Money lent to friend | Loan (LN) |

### Multiple Accounts of Same Type

You can have multiple accounts of the same type:
- HDFC Savings + SBI Savings (both Savings type)
- Visa Card + Mastercard (both Credit Card type)
- Paytm + Google Pay (both Wallet type)

## Account Type Benefits

### Accurate Reporting

Correct typing enables:
- Proper balance interpretation
- Accurate net worth calculation
- Meaningful reports

### Clear Organization

Types help organize:
- Quick identification of accounts
- Grouped views by type
- Logical structure

### Proper Balance Handling

Types clarify:
- Whether negative balance is normal (CC, Loan)
- Expected balance behavior
- Financial health indicators

## Related Concepts

- [Accounts](/docs/concepts/accounts) - Full account documentation
- [Balances](/docs/concepts/balances) - How balances work
- [Account Types Reference](/docs/reference/account-types) - Quick reference
