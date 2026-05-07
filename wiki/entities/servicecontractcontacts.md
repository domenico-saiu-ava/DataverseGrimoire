---
logical: "servicecontractcontacts"
display: "Service Contract Contact"
entitySetName: "servicecontractcontactscollection"
primaryId: "servicecontractcontactid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Service Contract Contact

Item in a Service contract.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `servicecontractcontacts` |
| Display name | Service Contract Contact |
| Display (plural) | Service Contract Contacts |
| Schema name | `ServiceContractContacts` |
| Entity set (Web API) | `servicecontractcontactscollection` |
| Primary id attribute | `servicecontractcontactid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/servicecontractcontactscollection?$select=name&$top=10
GET /api/data/v9.2/servicecontractcontactscollection(<guid>)
POST /api/data/v9.2/servicecontractcontactscollection
PATCH /api/data/v9.2/servicecontractcontactscollection(<guid>)
DELETE /api/data/v9.2/servicecontractcontactscollection(<guid>)
```

## Attributes

Writable: **7** · Read-only: **3**

### Writable

`ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `ServiceContractContactId`, `ServiceLevel`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ContactId`, `ContractId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `servicecontractcontacts_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `servicecontractcontacts_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `servicecontractcontacts_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `servicecontractcontacts_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `servicecontractcontacts_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [servicecontractcontacts.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/servicecontractcontacts.md) on 2026-05-06.