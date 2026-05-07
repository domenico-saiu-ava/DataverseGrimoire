---
logical: "entitlementcontacts"
display: "Entitlement Contact"
entitySetName: "entitlementcontactscollection"
primaryId: "entitlementcontactid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Entitlement Contact

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entitlementcontacts` |
| Display name | Entitlement Contact |
| Display (plural) | Entitlement Contacts |
| Schema name | `EntitlementContacts` |
| Entity set (Web API) | `entitlementcontactscollection` |
| Primary id attribute | `entitlementcontactid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/entitlementcontactscollection?$select=name&$top=10
GET /api/data/v9.2/entitlementcontactscollection(<guid>)
POST /api/data/v9.2/entitlementcontactscollection
PATCH /api/data/v9.2/entitlementcontactscollection(<guid>)
DELETE /api/data/v9.2/entitlementcontactscollection(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`EntitlementContactId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ContactId`, `EntitlementId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlementcontacts_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementcontacts_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementcontacts_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementcontacts_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlementcontacts_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [entitlementcontacts.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/entitlementcontacts.md) on 2026-05-06.