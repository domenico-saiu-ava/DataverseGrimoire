---
logical: "msdyn_macrosession"
display: "Macro Run History"
entitySetName: "msdyn_macrosessions"
primaryId: "msdyn_macrosessionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Macro Run History

Stores history of macro runs

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_macrosession` |
| Display name | Macro Run History |
| Display (plural) | Macro Run Histories |
| Schema name | `msdyn_macrosession` |
| Entity set (Web API) | `msdyn_macrosessions` |
| Primary id attribute | `msdyn_macrosessionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_macrosessions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_macrosessions(<guid>)
POST /api/data/v9.2/msdyn_macrosessions
PATCH /api/data/v9.2/msdyn_macrosessions(<guid>)
DELETE /api/data/v9.2/msdyn_macrosessions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_executioncontext`, `msdyn_macroname`, `msdyn_macrosessionId`, `msdyn_name`, `msdyn_status`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_macrosession` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_macrosession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_macrosession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_macrosession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_macrosession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_workflow_msdyn_macrosession_macroname` | [workflow](workflow.md) | `msdyn_macroname` | `msdyn_macroname` |
| `owner_msdyn_macrosession` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_macrosession` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_macrosession` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_macrosession_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_macrosession_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_macrosession_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_macrosession_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_macrosession_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_macrosession_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_macrosession_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_macrosession_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_macrosession.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_macrosession.md) on 2026-05-06.