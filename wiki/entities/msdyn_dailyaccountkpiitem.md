---
logical: "msdyn_dailyaccountkpiitem"
display: "Daily Kpis for account"
entitySetName: "msdyn_dailyaccountkpiitems"
primaryId: "msdyn_dailyaccountkpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Daily Kpis for account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dailyaccountkpiitem` |
| Display name | Daily Kpis for account |
| Display (plural) | dailyaccountkpiitems |
| Schema name | `msdyn_dailyaccountkpiitem` |
| Entity set (Web API) | `msdyn_dailyaccountkpiitems` |
| Primary id attribute | `msdyn_dailyaccountkpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dailyaccountkpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dailyaccountkpiitems(<guid>)
POST /api/data/v9.2/msdyn_dailyaccountkpiitems
PATCH /api/data/v9.2/msdyn_dailyaccountkpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_dailyaccountkpiitems(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_accountId`, `msdyn_computationaccuracy`, `msdyn_dailyaccountkpiitemId`, `msdyn_date`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_entityid`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dailyaccountkpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dailyaccountkpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dailyaccountkpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dailyaccountkpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_account_dailyaccountkpiitem_entityid` | [account](account.md) | `msdyn_entityid` | `msdyn_entityid` |
| `organization_msdyn_dailyaccountkpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dailyaccountkpiitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyaccountkpiitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyaccountkpiitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyaccountkpiitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dailyaccountkpiitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dailyaccountkpiitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dailyaccountkpiitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dailyaccountkpiitem.md) on 2026-05-06.