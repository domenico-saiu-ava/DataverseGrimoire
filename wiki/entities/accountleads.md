---
logical: "accountleads"
display: "AccountLeads"
entitySetName: "accountleadscollection"
primaryId: "accountleadid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# AccountLeads

description.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `accountleads` |
| Display name | AccountLeads |
| Display (plural) | AccountLeads |
| Schema name | `AccountLeads` |
| Entity set (Web API) | `accountleadscollection` |
| Primary id attribute | `accountleadid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/accountleadscollection?$select=name&$top=10
GET /api/data/v9.2/accountleadscollection(<guid>)
POST /api/data/v9.2/accountleadscollection
PATCH /api/data/v9.2/accountleadscollection(<guid>)
DELETE /api/data/v9.2/accountleadscollection(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`AccountLeadId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`AccountId`, `LeadId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `accountleads_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `accountleads_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `accountleads_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `accountleads_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `accountleads_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [accountleads.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/accountleads.md) on 2026-05-06.