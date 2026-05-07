---
logical: "msdyn_salesresearchmanager"
display: "Sales Research Manager"
entitySetName: "msdyn_salesresearchmanagers"
primaryId: "msdyn_salesresearchmanagerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales Research Manager

This table defines user access to the Sales Research Agent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesresearchmanager` |
| Display name | Sales Research Manager |
| Display (plural) | Sales Research Managers |
| Schema name | `msdyn_salesresearchmanager` |
| Entity set (Web API) | `msdyn_salesresearchmanagers` |
| Primary id attribute | `msdyn_salesresearchmanagerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesresearchmanagers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesresearchmanagers(<guid>)
POST /api/data/v9.2/msdyn_salesresearchmanagers
PATCH /api/data/v9.2/msdyn_salesresearchmanagers(<guid>)
DELETE /api/data/v9.2/msdyn_salesresearchmanagers(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_salesresearchmanagerId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesresearchmanager` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesresearchmanager_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesresearchmanager_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesresearchmanager_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesresearchmanager_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_salesresearchmanager` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesresearchmanager` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesresearchmanager` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesresearchmanager_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesresearchmanager_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesresearchmanager_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salesresearchmanager_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salesresearchmanager_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesresearchmanager_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesresearchmanager_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesresearchmanager_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesresearchmanager.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesresearchmanager.md) on 2026-05-06.