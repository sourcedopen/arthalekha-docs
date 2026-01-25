---
sidebar_position: 4
---

# Family Budgeting

This guide explains how to use Arthalekha for tracking finances across a family or household. Learn how to set up people, track individual spending, and manage shared finances using the **Family Mode** feature.

## Individual vs Family Mode

Arthalekha provides two viewing modes to help manage family finances:

### Individual Mode (Default)

When you log in, you're in Individual Mode by default. In this mode:
- You only see **your own** accounts, transactions, and recurring items
- You can create, edit, and delete your data
- Full access to all features for your personal data

### Family Mode

Switch to Family Mode to see a consolidated view of **all users' finances**. In this mode:
- View accounts, incomes, expenses, transfers, and recurring transactions from all users
- **Read-only access** - you cannot create, edit, or delete data
- Perfect for monthly family finance reviews and understanding overall household finances

### Switching Between Modes

Use the **mode toggle button** in the navigation bar to switch between Individual and Family modes. The toggle:
- Switches you to the corresponding page in the other mode
- Preserves your context (e.g., switching from individual expenses to family expenses view)
- Redirects to home if the current page doesn't exist in the target mode

:::tip
Use Individual Mode for daily transaction entry and management. Switch to Family Mode for reviews, analysis, and understanding the complete family financial picture.
:::

## Setting Up for Family Use

### Step 1: Create Family Members

First, add each person in your household:

1. Navigate to People
2. Create each family member:

| Name | Nickname |
|------|----------|
| Rajesh Kumar | Dad |
| Sunita Kumar | Mom |
| Arjun Kumar | Arjun |
| Ananya Kumar | Ananya |

### Step 2: Set Up Shared Accounts

Decide which accounts are shared vs individual:

**Shared Accounts:**
- Joint savings account
- Household cash
- Family credit card

**Individual Accounts:**
- Personal savings accounts
- Personal wallets
- Personal credit cards

### Step 3: Create Relevant Tags

Tags help categorize family expenses:

**Category Tags:**
- Groceries, Utilities, Education, Entertainment, Transport, Medical

**Person-Specific Tags (optional):**
- Kids-School, Kids-Activities
- Work-Related

## Recording Family Transactions

### Always Assign a Person

When recording transactions, select who made them:

**Example: Grocery Shopping**
```
Description: Weekly Groceries - Big Bazaar
Amount: ₹5,000
Account: Joint Savings
Person: Mom
Tags: Groceries, Food
```

**Example: School Fees**
```
Description: School Fees - March - Arjun
Amount: ₹15,000
Account: Joint Savings
Person: Dad (who paid)
Tags: Education, Kids-School
```

### Handling Truly Shared Expenses

For expenses that aren't attributable to one person:
- Leave Person blank
- Or assign to whoever made the payment
- Note "shared" in description if helpful

## Family Income Tracking

### Track Who Earns What

Record incomes with the earning person:

**Dad's Salary:**
```
Description: March Salary - TCS
Amount: ₹1,00,000
Account: Dad's Salary Account
Person: Dad
Tags: Salary
```

**Mom's Business Income:**
```
Description: March Business Revenue
Amount: ₹40,000
Account: Mom's Account
Person: Mom
Tags: Business, Income
```

### Contributions to Joint Account

When someone contributes to a shared account, use transfers:

```
Description: Dad's monthly contribution
Amount: ₹50,000
From: Dad's Salary Account
To: Joint Savings
Tags: Family-Contribution
```

## Analyzing Family Finances

### Using Family Mode for Analysis

The best way to analyze family finances is through Family Mode:

1. Click the **mode toggle** in the navigation bar to switch to Family Mode
2. You'll see consolidated data from all users
3. Available views in Family Mode:
   - **Accounts** - All users' accounts
   - **Incomes** - All incomes from all users
   - **Expenses** - All expenses from all users
   - **Transfers** - All transfers between accounts
   - **Projections** - Combined projected balance dashboard
   - **Recurring** - All recurring incomes, expenses, and transfers

### Individual Spending

Use filtering to see individual spending:

1. Go to Expenses
2. Filter by Person: "Arjun"
3. Set date range: This month
4. See all of Arjun's expenses

### Category Spending by Person

Combine filters:

1. Filter by Person: "Mom"
2. Filter by Tag: "Shopping"
3. See Mom's shopping expenses

### Family vs Individual

Compare patterns:
- Filter by person to see individual totals
- Remove person filter to see family totals
- Export and analyze in spreadsheet

## Family Budget Strategies

### Strategy 1: Pooled Income

All income goes to joint account, expenses from joint:

```
Accounts:
- Joint Family Account (primary)
- Household Cash

Flow:
Dad's Salary → Joint Account
Mom's Income → Joint Account
All Expenses ← Joint Account
```

**Pros:** Simple, truly shared
**Cons:** Less individual accountability

### Strategy 2: Contribution-Based

Each earner contributes a fixed amount to shared expenses:

```
Accounts:
- Dad's Account
- Mom's Account
- Joint Household Account

Flow:
Dad's Salary → Dad's Account
Dad transfers ₹40,000 → Joint Account
Mom's Income → Mom's Account
Mom transfers ₹30,000 → Joint Account
Household Expenses ← Joint Account
Personal Expenses ← Individual Accounts
```

**Pros:** Individual freedom + shared responsibilities
**Cons:** More accounts to manage

### Strategy 3: Percentage-Based

Contribute proportionally to income:

```
Example: Dad earns 60%, Mom earns 40%
Joint expenses: ₹50,000

Dad contributes: ₹30,000 (60%)
Mom contributes: ₹20,000 (40%)
```

## Tracking Children's Expenses

### Education Expenses

Track school-related costs:

```
Tags: Education, School-Fees
Tags: Education, Books-Supplies
Tags: Education, Tuition
```

**Examples:**
- "School Fees - Term 1 - Arjun"
- "School Books - New Session - Ananya"
- "Tuition Classes - March - Arjun"

### Allowances and Pocket Money

If children get regular allowances:

**Set up as Recurring Expense:**
```
Description: Weekly Pocket Money - Arjun
Amount: ₹500
Frequency: Weekly
Tags: Kids, Allowance
```

### Activities and Hobbies

Track extracurricular expenses:

```
Tags: Kids-Activities, Sports
Tags: Kids-Activities, Music
Tags: Kids-Activities, Art
```

## Monthly Family Review

### Review Meeting Agenda

Hold a monthly family finance review using Family Mode:

1. **Switch to Family Mode**
   - Click the mode toggle in the navigation bar
   - All views will now show consolidated data from all users

2. **Income Summary**
   - Go to Family Incomes view
   - Filter by this month
   - See total income from all users and individual contributions

3. **Expense Summary**
   - Go to Family Expenses view
   - Review total expenses from all users
   - Expenses by category and by person

4. **Budget vs Actual**
   - Compare to targets
   - Identify overspending areas

5. **Upcoming Month**
   - Go to Family Projections view
   - Check projected balances for all accounts
   - Plan for large expenses
   - Switch back to Individual Mode to make adjustments

### Export for Discussion

Export filtered data to share during the meeting:
- This month's expenses by category
- Each person's spending summary
- Income vs expense comparison

## Common Family Scenarios

### Scenario: Single Income Family

```
Setup:
- Working parent's salary account
- Joint household account
- Cash wallet for daily expenses

Flow:
Salary → Salary Account
Monthly transfer → Joint Account (bills)
Weekly transfer → Cash (daily expenses)
All expenses tracked with tags
```

### Scenario: Dual Income Family

```
Setup:
- Person A's account
- Person B's account
- Joint account
- Household cash

Flow:
Each salary → Individual accounts
Agreed contribution → Joint account
Joint account → Bills and large expenses
Individual accounts → Personal expenses
```

### Scenario: Extended Family

For larger households:

```
People:
- Grandparents
- Parents
- Children

Accounts:
- Main household account
- Individual accounts as needed

Tags for clarity:
- Elder-Care (medical, etc.)
- Kids-Expenses
- Household-General
```

## Tips for Family Success

### Use Both Modes Effectively

Leverage Individual and Family modes appropriately:
- **Individual Mode** for daily entries and personal management
- **Family Mode** for reviews and consolidated analysis
- Each family member manages their own data in Individual Mode
- Use Family Mode together during monthly reviews

### Agree on Categories

Discuss and agree on tag categories:
- What counts as "Essential" vs "Optional"?
- How to categorize gifts?
- What about personal vs family expenses?

### Set Spending Guidelines

Establish family spending rules:
- Purchases over ₹X need discussion
- Monthly budget limits by category
- Personal spending allowances

### Regular Communication

Keep finances transparent:
- Share access to Arthalekha
- Regular review meetings using Family Mode
- No financial surprises

### Respect Privacy

Balance tracking with privacy:
- Focus on categories, not every small purchase
- Trust each other
- Use tracking to improve, not criticize
- Remember: Family Mode is read-only, each person controls their own data

## Reporting for Family

### Monthly Report Format

Generate a monthly family financial report:

**Summary:**
- Total Income: ₹X
- Total Expenses: ₹Y
- Savings: ₹Z

**By Category:**
| Category | Amount | % of Total |
|----------|--------|------------|
| Groceries | ₹15,000 | 20% |
| Utilities | ₹5,000 | 7% |
| Education | ₹20,000 | 27% |
| ... | ... | ... |

**By Person:**
| Person | Expenses | Income |
|--------|----------|--------|
| Dad | ₹25,000 | ₹1,00,000 |
| Mom | ₹30,000 | ₹40,000 |
| ... | ... | ... |

## Next Steps

After setting up family budgeting:
- [Analyze spending patterns](/docs/guides/analyzing-spending)
- [Check projected balance](/docs/features/projected-balance) for the family
- [Export data](/docs/features/exports) for detailed analysis
