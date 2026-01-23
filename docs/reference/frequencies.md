---
sidebar_position: 2
---

# Frequencies Reference

Quick reference for recurring transaction frequencies in Arthalekha.

## Frequency Summary

| Frequency | Period | Occurrences per Year |
|-----------|--------|---------------------|
| Daily | Every day | 365 |
| Weekly | Every 7 days | 52 |
| Biweekly | Every 14 days | 26 |
| Monthly | Every month | 12 |
| Quarterly | Every 3 months | 4 |
| Yearly | Every 12 months | 1 |

## Detailed Reference

### Daily

**Repeats:** Every day

**Use for:**
- Daily allowances
- Daily subscriptions (rare)
- Per-day expenses you want to project

**Example:**
```
Description: Daily Coffee Budget
Amount: ₹100
Frequency: Daily
```

**Annual total:** Amount × 365

---

### Weekly

**Repeats:** Every 7 days

**Use for:**
- Weekly allowances
- Weekly services (cleaning, etc.)
- Weekly shopping budgets

**Example:**
```
Description: Weekly Groceries
Amount: ₹3,000
Frequency: Weekly
```

**Annual total:** Amount × 52

---

### Biweekly

**Repeats:** Every 14 days (every 2 weeks)

**Use for:**
- Biweekly paychecks
- Fortnightly expenses
- Every-other-week services

**Example:**
```
Description: Biweekly Salary
Amount: ₹37,500
Frequency: Biweekly
```

**Annual total:** Amount × 26

---

### Monthly

**Repeats:** Same day each month

**Use for:**
- Monthly salary
- Rent/mortgage
- Most subscriptions
- Utility bills
- Loan EMIs
- Monthly investments (SIP)

**Example:**
```
Description: Monthly Rent
Amount: ₹20,000
Frequency: Monthly
```

**Annual total:** Amount × 12

---

### Quarterly

**Repeats:** Every 3 months

**Use for:**
- Quarterly insurance payments
- Quarterly subscriptions
- Quarterly bonuses
- Quarterly tax payments

**Example:**
```
Description: Quarterly Insurance Premium
Amount: ₹5,000
Frequency: Quarterly
```

**Annual total:** Amount × 4

---

### Yearly

**Repeats:** Once a year

**Use for:**
- Annual subscriptions (Amazon Prime, etc.)
- Annual insurance premiums
- Yearly fees
- Annual bonuses
- Tax refunds

**Example:**
```
Description: Amazon Prime Subscription
Amount: ₹1,499
Frequency: Yearly
```

**Annual total:** Amount × 1

## Choosing the Right Frequency

| Your situation | Choose |
|----------------|--------|
| Happens every day | Daily |
| Happens once a week | Weekly |
| Happens every two weeks | Biweekly |
| Happens once a month | Monthly |
| Happens every three months | Quarterly |
| Happens once a year | Yearly |

## Common Items by Frequency

### Daily
- Daily allowance
- Per diem expenses

### Weekly
- Weekly pocket money
- Weekly house cleaning service
- Weekly newspaper subscription

### Biweekly
- Biweekly salary (some countries)
- Fortnightly rent

### Monthly
- Salary (most common)
- Rent
- EMIs
- Utility bills
- Mobile/Internet
- Streaming subscriptions
- Gym membership
- SIP investments

### Quarterly
- Insurance premiums (if paid quarterly)
- Some professional memberships
- Advance tax payments

### Yearly
- Annual subscriptions (Prime, etc.)
- Annual insurance (if paid yearly)
- Car insurance
- Professional memberships
- Annual bonuses
- Tax refunds

## Date Handling

### Monthly Frequency

If you set a recurring item for the 31st, and a month has only 30 days:
- System typically uses the last day of the month
- Or may use the same date in the next valid month

### Yearly Frequency

For February 29th (leap year):
- Non-leap years: Usually falls on February 28th
- Or may shift to March 1st

## Frequency Math

### Calculate Annual Cost

```
Daily:     Amount × 365
Weekly:    Amount × 52
Biweekly:  Amount × 26
Monthly:   Amount × 12
Quarterly: Amount × 4
Yearly:    Amount × 1
```

### Calculate Monthly Equivalent

```
Daily:     Amount × 30 (approx)
Weekly:    Amount × 4.33
Biweekly:  Amount × 2.17
Monthly:   Amount × 1
Quarterly: Amount ÷ 3
Yearly:    Amount ÷ 12
```

### Example Calculation

**Question:** What's the monthly cost of a daily ₹100 expense?

```
₹100 × 30 = ₹3,000 per month (approx)
or
₹100 × 365 ÷ 12 = ₹3,041.67 per month (exact)
```

## Impact on Projections

Your frequency choices directly affect balance projections:

- **More frequent** = More impact on projections
- **Daily items** show daily balance changes
- **Monthly items** show monthly cycles
- **Yearly items** appear as single spikes

## Tips

### Start with Monthly

Most recurring items are monthly. Start there and add other frequencies as needed.

### Convert to Annual

When comparing subscriptions, convert everything to annual:
- ₹200/month subscription = ₹2,400/year
- ₹2,000/year subscription = ₹167/month

### Watch Biweekly vs Monthly

Biweekly (26/year) is different from twice monthly (24/year):
- Biweekly: Every 2 weeks = 26 occurrences
- Semi-monthly: Twice a month = 24 occurrences

## See Also

- [Recurring Transactions](/docs/concepts/recurring-transactions) - Full documentation
- [Managing Recurring](/docs/guides/managing-recurring) - How-to guide
- [Projected Balance](/docs/features/projected-balance) - How frequencies affect projections
