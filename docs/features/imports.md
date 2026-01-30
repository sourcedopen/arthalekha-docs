---
sidebar_position: 5
---

# Imports

Arthalekha allows you to **import** your financial data from CSV files. This is useful for bulk data entry, migrating from other tools, or restoring data from exports.

## Why Import Data?

### Bulk Data Entry

Import multiple transactions at once:
- Historical transactions
- Bank statement data
- Data from other financial tools

### Migration

Move your data from:
- Spreadsheets you've been maintaining
- Other expense tracking apps
- Exported data from other systems

### Backup Restoration

Restore data from:
- Previous exports
- Backup files
- Shared family data

## What Can Be Imported?

### Incomes

Import income records including:
- Date
- Description
- Account
- Person (optional)
- Tags (optional)
- Amount

### Expenses

Import expense records including:
- Date
- Description
- Account
- Person (optional)
- Tags (optional)
- Amount

## CSV Format Requirements

### Headers

Your CSV file must have these exact headers in this order:

```csv
Date,Description,Account,Person,Tags,Amount
```

### Column Details

| Column | Required | Format | Example |
|--------|----------|--------|---------|
| **Date** | Yes | YYYY-MM-DD | 2024-01-15 |
| **Description** | Yes | Text (max 255 chars) | Monthly Salary |
| **Account** | Yes | Account name (must exist) | Savings Account |
| **Person** | No | Person name (must exist if provided) | John Doe |
| **Tags** | No | Comma or pipe separated | Food, Travel |
| **Amount** | Yes | Decimal (0.01 - 999999999999) | 5000.00 |

### Sample CSV Files

**Incomes Example:**
```csv
Date,Description,Account,Person,Tags,Amount
2024-01-01,Monthly Salary,HDFC Savings,,Salary,75000.00
2024-01-15,Freelance Project,HDFC Savings,Dad,"Freelance, Work",15000.00
2024-01-20,Interest,Savings Account,,Interest,500.00
```

**Expenses Example:**
```csv
Date,Description,Account,Person,Tags,Amount
2024-01-05,Grocery Shopping,HDFC Savings,,Food,2500.00
2024-01-10,Electricity Bill,HDFC Savings,,"Bills, Utilities",1500.00
2024-01-15,Restaurant Dinner,Cash Wallet,Mom,"Food, Entertainment",1200.00
```

## How to Import

### Step 1: Prepare Your CSV

1. Create a CSV file with the required headers
2. Ensure all account names match existing accounts
3. Ensure all person names match existing people (if used)
4. Ensure all tag names match existing tags (if used)
5. Use the correct date format (YYYY-MM-DD)

### Step 2: Navigate to Import

1. Go to Incomes or Expenses list
2. Click the "Import CSV" button

### Step 3: Upload File

1. Select your CSV file
2. Click "Import"
3. Wait for processing

### Step 4: Check Status

After uploading:
- You'll be redirected to the import status page
- The import is processed asynchronously
- Refresh the page to see updated status

## Import Processing

### Validation

Before any data is imported, the system validates ALL rows:
- Date format is correct
- Description is not empty
- Account exists and belongs to you
- Person exists (if provided)
- Tags exist (if provided)
- Amount is valid

### All-or-Nothing

**Important:** If ANY row fails validation, the ENTIRE import fails. No partial imports occur.

This ensures data integrity - you either get all your data imported or none of it, allowing you to fix issues and retry.

### Status Types

| Status | Meaning |
|--------|---------|
| **Pending** | Import queued for processing |
| **Validating** | System is checking all rows |
| **Processing** | Importing valid data |
| **Completed** | All rows imported successfully |
| **Failed** | Validation errors found, nothing imported |

## Handling Errors

### Viewing Errors

If an import fails:
1. The status page shows "Failed"
2. All validation errors are listed
3. Each error shows the row number and issue

### Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| Invalid date format | Date not in YYYY-MM-DD | Change "15-01-2024" to "2024-01-15" |
| Account does not exist | Account name not found | Check spelling, create account first |
| Person does not exist | Person name not found | Check spelling, create person first |
| Tag does not exist | Tag name not found | Check spelling, create tag first |
| Amount must be greater than zero | Zero or negative amount | Use positive amounts |
| Description is required | Empty description | Add a description |

### Fixing and Retrying

1. Download or edit your original CSV
2. Fix the errors listed
3. Re-upload the corrected file

## Tags in CSV

### Comma-Separated Tags

```csv
"Food, Travel, Entertainment"
```

### Pipe-Separated Tags

```csv
"Food|Travel|Entertainment"
```

Both formats are supported. Use quotes if tags contain commas.

## Best Practices

### Prepare Data Carefully

Before importing:
- Create all needed accounts first
- Create all needed people first
- Create all needed tags first
- Verify spelling matches exactly

### Start Small

For first-time imports:
- Test with a small file (5-10 rows)
- Verify the import worked correctly
- Then import larger batches

### Check Account Names

Account names must match exactly:
- "HDFC Savings" is different from "hdfc savings"
- "Savings Account" is different from "SavingsAccount"

### Use Consistent Formats

Maintain consistency:
- Same date format throughout
- Same account names as in the app
- Same tag names as in the app

### Keep Original Files

After importing:
- Keep your original CSV files
- Note which files were imported
- Useful for reference and troubleshooting

## Limitations

### What You Cannot Import

Currently, imports don't support:
- Transfers (import as incomes/expenses separately)
- Recurring transactions
- Account balances directly

### File Size

- Maximum file size: 10MB
- For very large imports, split into multiple files

### Processing Time

Large imports may take time:
- Import is processed asynchronously
- Refresh the status page to check progress
- Don't upload the same file multiple times

## Related Features

- [Exports](/docs/features/exports) - Export data to CSV
- [Incomes](/docs/concepts/incomes) - Income transactions
- [Expenses](/docs/concepts/expenses) - Expense transactions
- [Accounts](/docs/concepts/accounts) - Create accounts before importing
- [Tags](/docs/concepts/tags) - Create tags before importing
