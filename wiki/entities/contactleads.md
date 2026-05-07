---
logical: "contactleads"
display: "ContactLeads"
entitySetName: "contactleadscollection"
primaryId: "contactleadid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# ContactLeads

## Identity

| Property | Value |
| --- | --- |
| Logical name | `contactleads` |
| Display name | ContactLeads |
| Display (plural) | ContactLeads |
| Schema name | `ContactLeads` |
| Entity set (Web API) | `contactleadscollection` |
| Primary id attribute | `contactleadid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/contactleadscollection?$select=name&$top=10
GET /api/data/v9.2/contactleadscollection(<guid>)
POST /api/data/v9.2/contactleadscollection
PATCH /api/data/v9.2/contactleadscollection(<guid>)
DELETE /api/data/v9.2/contactleadscollection(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`ContactLeadId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ContactId`, `LeadId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contactleads_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactleads_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactleads_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactleads_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contactleads_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [contactleads.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/contactleads.md) on 2026-05-06.