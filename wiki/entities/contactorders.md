---
logical: "contactorders"
display: "ContactOrders"
entitySetName: "contactorderscollection"
primaryId: "contactorderid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# ContactOrders

## Identity

| Property | Value |
| --- | --- |
| Logical name | `contactorders` |
| Display name | ContactOrders |
| Display (plural) | ContactOrders |
| Schema name | `ContactOrders` |
| Entity set (Web API) | `contactorderscollection` |
| Primary id attribute | `contactorderid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/contactorderscollection?$select=name&$top=10
GET /api/data/v9.2/contactorderscollection(<guid>)
POST /api/data/v9.2/contactorderscollection
PATCH /api/data/v9.2/contactorderscollection(<guid>)
DELETE /api/data/v9.2/contactorderscollection(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`ContactOrderId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ContactId`, `SalesOrderId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contactorders_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactorders_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactorders_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactorders_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contactorders_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [contactorders.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/contactorders.md) on 2026-05-06.