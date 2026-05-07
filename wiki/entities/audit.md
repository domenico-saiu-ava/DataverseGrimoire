---
logical: "audit"
display: "Auditing"
entitySetName: "audits"
primaryId: "auditid"
tableType: "Standard"
ownership: "None"
---

# Auditing

Track changes to records for analysis, record keeping, and compliance.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `audit` |
| Display name | Auditing |
| Display (plural) | Audits |
| Schema name | `Audit` |
| Entity set (Web API) | `audits` |
| Primary id attribute | `auditid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/audits?$select=&$top=10
GET /api/data/v9.2/audits(<guid>)
POST /api/data/v9.2/audits
PATCH /api/data/v9.2/audits(<guid>)
DELETE /api/data/v9.2/audits(<guid>)
```

## Attributes

Writable: **3** · Read-only: **13**

### Writable

`AdditionalInfo`, `RegardingObjectId`, `UserAdditionalInfo`

### Read-only

`Action`, `AttributeMask`, `AuditId`, `CallingUserId`, `ChangeData`, `CreatedOn`, `ObjectId`, `ObjectTypeCode`, `Operation`, `TimeToLiveInSeconds`, `TransactionId`, `UserId`, `VersionNumber`

## Relationships

### Many-to-One (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_audit_callinguserid` | [systemuser](systemuser.md) | `callinguserid` | `callinguserid` |
| `lk_audit_userid` | [systemuser](systemuser.md) | `userid` | `userid` |



## Source

Generated from [audit.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/audit.md) on 2026-05-06.