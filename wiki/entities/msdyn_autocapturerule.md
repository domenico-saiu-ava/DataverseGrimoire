---
logical: "msdyn_autocapturerule"
display: "Auto Capture Rule"
entitySetName: "msdyn_autocapturerules"
primaryId: "msdyn_autocaptureruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Auto Capture Rule

Auto Capture Rules

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autocapturerule` |
| Display name | Auto Capture Rule |
| Display (plural) | Auto Capture Rules |
| Schema name | `msdyn_autocapturerule` |
| Entity set (Web API) | `msdyn_autocapturerules` |
| Primary id attribute | `msdyn_autocaptureruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autocapturerules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_autocapturerules(<guid>)
POST /api/data/v9.2/msdyn_autocapturerules
PATCH /api/data/v9.2/msdyn_autocapturerules(<guid>)
DELETE /api/data/v9.2/msdyn_autocapturerules(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_autocaptureruleId`, `msdyn_name`, `msdyn_ruledatasource`, `msdyn_rulename`, `msdyn_rulevalue`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_autocapturerule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_autocapturerule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autocapturerule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autocapturerule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autocapturerule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_autocapturerule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_autocapturerule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_autocapturerule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autocapturerule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocapturerule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocapturerule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_autocapturerule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_autocapturerule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocapturerule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_autocapturerule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocapturerule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_autocapturerule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_autocapturerule.md) on 2026-05-06.