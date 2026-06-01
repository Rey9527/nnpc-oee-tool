# N/NPC Certificates Airtable Setup

Create a table named:

```text
Certificates
```

Required fields:

```text
Certificate ID
Recipient Name
Position
Program
Certificate Type
Start Date
End Date
Issue Date
Status
Issued By Name
Issued By Title
Revoked At
Revocation Reason
```

Recommended field types:

```text
Certificate ID      Single line text
Recipient Name      Single line text
Position            Single line text
Program             Single line text
Certificate Type    Single line text
Start Date          Date
End Date            Date
Issue Date          Date
Status              Single select
Issued By Name      Single line text
Issued By Title     Single line text
Revoked At          Date with time
Revocation Reason   Long text
```

Status options must exist before using the admin page:

```text
Draft
Verified
Revoked
Expired
```

Example record:

```text
Certificate ID: NNPC-INT-2026-001
Recipient Name: Lin Myat Phyo
Position: Data & AI Operation Analyst Intern
Program: NNPC Internship Program
Certificate Type: internship_completion
Start Date: 2025-12-05
End Date: 2026-06-04
Issue Date: 2026-06-05
Status: Verified
Issued By Name: Derek Yeh
Issued By Title: Chief Executive Officer
```
