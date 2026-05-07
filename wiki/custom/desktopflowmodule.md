---
logical: "desktopflowmodule"
display: "Modulo flusso desktop"
entitySetName: "desktopflowmodules"
primaryId: "desktopflowmoduleid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modulo flusso desktop

## Identity

| Property | Value |
| --- | --- |
| Logical name | `desktopflowmodule` |
| Display name | Modulo flusso desktop |
| Display (plural) | Moduli flussi desktop |
| Schema name | `desktopflowmodule` |
| Entity set (Web API) | `desktopflowmodules` |
| Primary id attribute | `desktopflowmoduleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/desktopflowmodules?$select=name&$top=10
GET /api/data/v9.2/desktopflowmodules(<guid>)
POST /api/data/v9.2/desktopflowmodules
PATCH /api/data/v9.2/desktopflowmodules(<guid>)
DELETE /api/data/v9.2/desktopflowmodules(<guid>)
```

## Attributes

Writable: **12** · Read-only: **17**

### Writable

`description`, `desktopflowmoduleid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `data`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_desktopflowmodule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_desktopflowmodule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_desktopflowmodule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_desktopflowmodule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_desktopflowmodule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_desktopflowmodule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_desktopflowmodule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_desktopflowmodule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_desktopflowmodule_Data` | [fileattachment](fileattachment.md) | `data` | `data` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `desktopflowmodule_SyncErrors` | [desktopflowmodule](desktopflowmodule.md) | `regardingobjectid` | `regardingobjectid_desktopflowmodule` |
| `desktopflowmodule_DuplicateMatchingRecord` | [desktopflowmodule](desktopflowmodule.md) | `duplicaterecordid` | `duplicaterecordid_desktopflowmodule` |
| `desktopflowmodule_DuplicateBaseRecord` | [desktopflowmodule](desktopflowmodule.md) | `baserecordid` | `baserecordid_desktopflowmodule` |
| `desktopflowmodule_AsyncOperations` | [desktopflowmodule](desktopflowmodule.md) | `regardingobjectid` | `regardingobjectid_desktopflowmodule` |
| `desktopflowmodule_MailboxTrackingFolders` | [desktopflowmodule](desktopflowmodule.md) | `regardingobjectid` | `regardingobjectid_desktopflowmodule` |
| `desktopflowmodule_UserEntityInstanceDatas` | [desktopflowmodule](desktopflowmodule.md) | `objectid` | `objectid_desktopflowmodule` |
| `desktopflowmodule_ProcessSession` | [desktopflowmodule](desktopflowmodule.md) | `regardingobjectid` | `regardingobjectid_desktopflowmodule` |
| `desktopflowmodule_BulkDeleteFailures` | [desktopflowmodule](desktopflowmodule.md) | `regardingobjectid` | `regardingobjectid_desktopflowmodule` |
| `desktopflowmodule_PrincipalObjectAttributeAccesses` | [desktopflowmodule](desktopflowmodule.md) | `objectid` | `objectid_desktopflowmodule` |
| `desktopflowmodule_FileAttachments` | [desktopflowmodule](desktopflowmodule.md) | `objectid` | `objectid_desktopflowmodule` |
| `dfm_desktopflowbinary_DFM` | [desktopflowmodule](desktopflowmodule.md) | `desktopflowmodule` | `desktopflowmodule` |


## Source

Generated from [desktopflowmodule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='desktopflowmodule')) on 2026-05-07.