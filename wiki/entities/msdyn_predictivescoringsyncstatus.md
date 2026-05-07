---
logical: "msdyn_predictivescoringsyncstatus"
display: "Predictive Scoring Sync Status"
entitySetName: "msdyn_predictivescoringsyncstatuses"
primaryId: "msdyn_predictivescoringsyncstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Predictive Scoring Sync Status

Internal entity used to store sync status for predictive scoring core entities.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictivescoringsyncstatus` |
| Display name | Predictive Scoring Sync Status |
| Display (plural) | Predictive Scoring Sync Statuses |
| Schema name | `msdyn_predictivescoringsyncstatus` |
| Entity set (Web API) | `msdyn_predictivescoringsyncstatuses` |
| Primary id attribute | `msdyn_predictivescoringsyncstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictivescoringsyncstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictivescoringsyncstatuses(<guid>)
POST /api/data/v9.2/msdyn_predictivescoringsyncstatuses
PATCH /api/data/v9.2/msdyn_predictivescoringsyncstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_predictivescoringsyncstatuses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_calculatedfieldcount`, `msdyn_EACstatusmodifiedon`, `msdyn_EACsyncstatus`, `msdyn_name`, `msdyn_predictivescoringsyncstatusId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_predictivescoringsyncstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_predictivescoringsyncstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictivescoringsyncstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictivescoringsyncstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictivescoringsyncstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_predictivescoringsyncstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_predictivescoringsyncstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_predictivescoringsyncstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_predictivescoringsyncstatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivescoringsyncstatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivescoringsyncstatus_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_predictivescoringsyncstatus_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_predictivescoringsyncstatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivescoringsyncstatus_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_predictivescoringsyncstatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivescoringsyncstatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_predictivescoringsyncstatus.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_predictivescoringsyncstatus.md) on 2026-05-06.