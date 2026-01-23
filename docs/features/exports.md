---
sidebar_position: 4
---

# Exports

Arthalekha allows you to **export** your financial data to CSV format for external analysis, backup, or sharing. Exports work with your current filters, letting you download exactly the data you need.

## Why Export Data?

### Detailed Analysis

Export to spreadsheet software for:
- Pivot tables and charts
- Custom calculations
- Advanced filtering and sorting
- Trend analysis

### Record Keeping

Keep external copies for:
- Tax documentation
- Financial records
- Backup purposes
- Historical reference

### Sharing

Share financial data for:
- Family budget discussions
- Accountant review
- Loan applications
- Expense reports

## What Can Be Exported?

### Incomes

Export income records including:
- Description
- Amount
- Date
- Account
- Person
- Tags

### Expenses

Export expense records including:
- Description
- Amount
- Date
- Account
- Person
- Tags

### Transfers

Export transfer records including:
- Description
- Amount
- Date
- Source account (debtor)
- Destination account (creditor)
- Tags

## How to Export

### Basic Export

1. Navigate to the list (Incomes, Expenses, or Transfers)
2. Apply any desired filters (date range, account, etc.)
3. Click the "Export" or "Download CSV" button
4. The file downloads to your computer

### Filtered Exports

Exports respect your current filters:
- Only filtered transactions are included
- Use filters to export specific subsets
- Combine filters for precise exports

### Export Examples

**All expenses for the month:**
1. Go to Expenses
2. Set date filter to the month
3. Export

**Food expenses for the quarter:**
1. Go to Expenses
2. Set date filter to the quarter
3. Filter by "Food" tag
4. Export

**One person's transactions:**
1. Go to Expenses (or Incomes)
2. Filter by person
3. Set date range
4. Export

## CSV Format

### What is CSV?

CSV (Comma-Separated Values) is a simple text format that:
- Opens in Excel, Google Sheets, Numbers
- Can be imported into any spreadsheet software
- Is human-readable in text editors
- Works with most data analysis tools

### File Structure

Exported CSV files include:
- Header row with column names
- One row per transaction
- Comma-separated values
- Proper quoting for special characters

### Sample CSV Content

```csv
Description,Amount,Date,Account,Person,Tags
"Monthly Salary",75000,"2024-01-01","HDFC Salary","Dad","Salary"
"Freelance Project",15000,"2024-01-15","HDFC Salary","Dad","Freelance,Income"
```

## Using Exported Data

### In Microsoft Excel

1. Open Excel
2. Open the downloaded CSV file
3. Data appears in columns
4. Use Excel features for analysis

### In Google Sheets

1. Go to Google Sheets
2. File → Import → Upload
3. Select the CSV file
4. Data imports into a new sheet

### In Other Tools

CSV files work with:
- Apple Numbers
- LibreOffice Calc
- Data analysis tools (Python pandas, R)
- Database import utilities

## Analysis Ideas

### Category Breakdown

After exporting:
1. Import into spreadsheet
2. Create pivot table by tag/category
3. Sum amounts per category
4. Create pie chart

### Monthly Trends

After exporting several months:
1. Combine exports or export longer range
2. Group by month
3. Create trend charts
4. Compare month-over-month

### Person Comparison

After exporting:
1. Create pivot table by person
2. Sum amounts
3. Compare spending across family members

### Vendor Analysis

After exporting:
1. Filter or sort by description
2. Group similar vendors
3. See where money goes

## Best Practices

### Regular Exports

Consider regular exports for:
- Monthly backup of transactions
- Quarterly detailed analysis
- Annual tax preparation

### Consistent Naming

Name export files descriptively:
- `expenses-january-2024.csv`
- `income-q1-2024.csv`
- `food-expenses-2024.csv`

### Secure Storage

Store exported files securely:
- Financial data is sensitive
- Use encrypted storage if needed
- Don't share carelessly

### Keep Filters Noted

Remember what filters were applied:
- Note in the filename
- Keep a record of export parameters
- Helps when reviewing later

## Limitations

### What's NOT Exported

Exports may not include:
- Calculated totals (you calculate in spreadsheet)
- Charts and graphs (data only)
- Account balances (transactions only)

### Format Limitations

CSV format:
- Is plain text (no formatting)
- Doesn't include formulas
- May need cleanup for some special characters

## Related Features

- [Filtering](/docs/features/filtering-and-search) - Filter before exporting
- [Tags](/docs/concepts/tags) - Export by category
- [People](/docs/concepts/people) - Export by person
- [Incomes](/docs/concepts/incomes) - Income export
- [Expenses](/docs/concepts/expenses) - Expense export
- [Transfers](/docs/concepts/transfers) - Transfer export
