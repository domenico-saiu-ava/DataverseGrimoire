---
logical: "msdyn_modelpreviewstatus"
display: "ModelPreviewStatus"
entitySetName: "msdyn_modelpreviewstatuses"
primaryId: "msdyn_modelpreviewstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ModelPreviewStatus

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_modelpreviewstatus` |
| Display name | ModelPreviewStatus |
| Display (plural) | ModelPreviewStatuses |
| Schema name | `msdyn_ModelPreviewStatus` |
| Entity set (Web API) | `msdyn_modelpreviewstatuses` |
| Primary id attribute | `msdyn_modelpreviewstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_modelpreviewstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_modelpreviewstatuses(<guid>)
POST /api/data/v9.2/msdyn_modelpreviewstatuses
PATCH /api/data/v9.2/msdyn_modelpreviewstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_modelpreviewstatuses(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_leadpredictionmodelenabled`, `msdyn_modelpreviewstatusid`, `msdyn_name`, `msdyn_opportunitypredictionmodelenabled`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_modelpreviewstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_modelpreviewstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_modelpreviewstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_modelpreviewstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_modelpreviewstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_modelpreviewstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_modelpreviewstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_modelpreviewstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_modelpreviewstatus_SyncErrors` | [msdyn_modelpreviewstatus](msdyn_modelpreviewstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_modelpreviewstatus` |
| `msdyn_modelpreviewstatus_DuplicateMatchingRecord` | [msdyn_modelpreviewstatus](msdyn_modelpreviewstatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_modelpreviewstatus` |
| `msdyn_modelpreviewstatus_DuplicateBaseRecord` | [msdyn_modelpreviewstatus](msdyn_modelpreviewstatus.md) | `baserecordid` | `baserecordid_msdyn_modelpreviewstatus` |
| `msdyn_modelpreviewstatus_AsyncOperations` | [msdyn_modelpreviewstatus](msdyn_modelpreviewstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_modelpreviewstatus` |
| `msdyn_modelpreviewstatus_MailboxTrackingFolders` | [msdyn_modelpreviewstatus](msdyn_modelpreviewstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_modelpreviewstatus` |
| `msdyn_modelpreviewstatus_UserEntityInstanceDatas` | [msdyn_modelpreviewstatus](msdyn_modelpreviewstatus.md) | `objectid` | `objectid_msdyn_modelpreviewstatus` |
| `msdyn_modelpreviewstatus_ProcessSession` | [msdyn_modelpreviewstatus](msdyn_modelpreviewstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_modelpreviewstatus` |
| `msdyn_modelpreviewstatus_BulkDeleteFailures` | [msdyn_modelpreviewstatus](msdyn_modelpreviewstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_modelpreviewstatus` |
| `msdyn_modelpreviewstatus_PrincipalObjectAttributeAccesses` | [msdyn_modelpreviewstatus](msdyn_modelpreviewstatus.md) | `objectid` | `objectid_msdyn_modelpreviewstatus` |


## Source

Generated from [msdyn_modelpreviewstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_modelpreviewstatus')) on 2026-05-07.