---
sidebar_position: 2
---

# Projected Balance

The **Projected Balance** feature in Arthalekha shows your expected future account balances based on recurring transactions. It helps you plan ahead and avoid financial surprises.

## What is Projected Balance?

Projected balance combines:
- Your **current actual balance**
- **Scheduled recurring incomes** (money coming in)
- **Scheduled recurring expenses** (money going out)
- **Scheduled recurring transfers** (money moving between accounts)

This shows you what your balance is expected to be in the future.

## Why Use Projected Balance?

### Financial Planning

See ahead to plan for:
- Large upcoming expenses
- Whether you'll have enough for a purchase
- When you'll reach savings goals

### Avoid Overdrafts

Know in advance if:
- An account might go negative
- You need to transfer funds
- You should delay a purchase

### Cash Flow Management

Understand:
- When income arrives vs when bills are due
- Gaps in cash flow
- Optimal timing for large expenses

## Accessing Projected Balance

### Account-Level Projections

From any account's detail page:
1. Navigate to the account
2. Click on "Projected Balance" or similar
3. View day-by-day projections for that account

### Dashboard Projections

The projected dashboard shows:
- Month-by-month projections
- Multiple months ahead (12+)
- Aggregate view across accounts

## Understanding the Projection View

### Daily Projections

For each day in the future, see:

| Column | Description |
|--------|-------------|
| **Date** | The projected date |
| **Expected Income** | Recurring incomes due that day |
| **Expected Expenses** | Recurring expenses due that day |
| **Transfers In** | Recurring transfers into the account |
| **Transfers Out** | Recurring transfers out of the account |
| **Projected Balance** | Expected balance at end of day |

### Monthly Summary

The monthly projected view shows:
- Beginning balance for each month
- Total expected income
- Total expected expenses
- Net change
- Ending balance

## How Projections are Calculated

### Starting Point

Projections start from:
- Today's actual balance
- All recorded transactions up to today

### Future Transactions

The system adds:
- Each recurring income on its scheduled date
- Each recurring expense on its scheduled date
- Each recurring transfer on its scheduled date

### Day-by-Day Calculation

```
Day 1 Balance = Today's Balance + Day 1 Income - Day 1 Expenses ± Day 1 Transfers
Day 2 Balance = Day 1 Balance + Day 2 Income - Day 2 Expenses ± Day 2 Transfers
...and so on
```

## Example Projection

Starting scenario:
```
Today's Balance: ₹1,00,000
```

Recurring transactions:
```
1st of month: +₹75,000 (Salary)
5th of month: -₹20,000 (Rent)
10th of month: -₹15,000 (Car EMI)
15th of month: -₹10,000 (Transfer to savings)
```

Projection for next month:
```
1st:  ₹1,00,000 + ₹75,000 = ₹1,75,000
5th:  ₹1,75,000 - ₹20,000 = ₹1,55,000
10th: ₹1,55,000 - ₹15,000 = ₹1,40,000
15th: ₹1,40,000 - ₹10,000 = ₹1,30,000
End:  ₹1,30,000 (no more transactions)
```

## Projection Accuracy

### What's Included

Projections include:
- All recurring incomes with future dates
- All recurring expenses with future dates
- All recurring transfers with future dates

### What's NOT Included

Projections do NOT include:
- One-time transactions you haven't recorded yet
- Variable expenses (groceries, entertainment)
- Unexpected income or expenses

### Improving Accuracy

To make projections more accurate:
1. Set up ALL recurring transactions
2. Keep amounts up to date
3. Add recurring items for regular but variable expenses (estimate amounts)
4. Review and adjust regularly

## Using Projections Effectively

### Scenario Planning

Ask "what if" questions:
- What if I increase my SIP by ₹5,000?
- What if I add a new subscription?
- Can I afford this purchase next month?

### Goal Tracking

Track progress toward goals:
- "When will I have ₹5,00,000 saved?"
- "Will I hit my target by December?"

### Early Warning

Get advance notice of:
- Months with negative projected balance
- Times when multiple large expenses align
- Periods when cash flow is tight

## Interpreting Projections

### Healthy Projection

A healthy projection shows:
- Consistently positive balances
- Balance growing or stable over time
- No unexpected drops

### Warning Signs

Watch out for:
- Projected balance going negative
- Steady decline over months
- Large drops around specific dates

### Taking Action

When projections show problems:
1. Identify the cause (which expenses?)
2. Consider adjustments (delay purchases, reduce spending)
3. Plan for additional income if needed
4. Set up transfers to cover shortfalls

## Projection Time Horizon

### Short-term (1-3 months)

Most accurate because:
- Fewer unknowns
- Recurring items are reliable
- Less time for changes

### Medium-term (3-6 months)

Reasonably accurate but:
- Some expenses may change
- New recurring items might appear
- Life changes happen

### Long-term (6-12+ months)

Use as a guide, understanding:
- Many things can change
- Amounts may need adjustment
- Good for goal setting, not precision planning

## Best Practices

### Complete Recurring Setup

For accurate projections:
- Add ALL recurring income sources
- Add ALL subscriptions and memberships
- Add ALL loans, EMIs, regular bills
- Add ALL scheduled savings/investments

### Regular Updates

Review recurring transactions when:
- You get a salary increase
- Subscription prices change
- You start or stop services
- Loan tenure changes

### Use Projections for Decisions

Before major financial decisions:
- Check the projected balance impact
- See if you can afford it
- Plan the best timing

## Related Features

- [Recurring Transactions](/docs/concepts/recurring-transactions) - Powers the projections
- [Dashboard](/docs/features/dashboard) - Current month view
- [Accounts](/docs/concepts/accounts) - Account-level projections
- [Balances](/docs/concepts/balances) - Understanding balance calculations
