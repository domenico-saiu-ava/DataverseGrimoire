---
logical: "msdyn_schedulingfeatureflag"
display: "Flag di funzionalità di pianificazione"
entitySetName: "msdyn_schedulingfeatureflags"
primaryId: "msdyn_schedulingfeatureflagid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Flag di funzionalità di pianificazione

Aggiorna i record in questa entità per abilitare una nuova funzionalità.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_schedulingfeatureflag` |
| Display name | Flag di funzionalità di pianificazione |
| Display (plural) | Flag di funzionalità di pianificazione |
| Schema name | `msdyn_schedulingfeatureflag` |
| Entity set (Web API) | `msdyn_schedulingfeatureflags` |
| Primary id attribute | `msdyn_schedulingfeatureflagid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_schedulingfeatureflags?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_schedulingfeatureflags(<guid>)
POST /api/data/v9.2/msdyn_schedulingfeatureflags
PATCH /api/data/v9.2/msdyn_schedulingfeatureflags(<guid>)
DELETE /api/data/v9.2/msdyn_schedulingfeatureflags(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_description`, `msdyn_enabled`, `msdyn_name`, `msdyn_schedulingfeatureflagid`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_schedulingfeatureflag_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_schedulingfeatureflag_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_schedulingfeatureflag_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_schedulingfeatureflag_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_schedulingfeatureflag` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_schedulingfeatureflag` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_schedulingfeatureflag` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_schedulingfeatureflag` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_schedulingfeatureflag_SyncErrors` | [msdyn_schedulingfeatureflag](msdyn_schedulingfeatureflag.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingfeatureflag` |
| `msdyn_schedulingfeatureflag_DuplicateMatchingRecord` | [msdyn_schedulingfeatureflag](msdyn_schedulingfeatureflag.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_schedulingfeatureflag` |
| `msdyn_schedulingfeatureflag_DuplicateBaseRecord` | [msdyn_schedulingfeatureflag](msdyn_schedulingfeatureflag.md) | `baserecordid` | `baserecordid_msdyn_schedulingfeatureflag` |
| `msdyn_schedulingfeatureflag_AsyncOperations` | [msdyn_schedulingfeatureflag](msdyn_schedulingfeatureflag.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingfeatureflag` |
| `msdyn_schedulingfeatureflag_MailboxTrackingFolders` | [msdyn_schedulingfeatureflag](msdyn_schedulingfeatureflag.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingfeatureflag` |
| `msdyn_schedulingfeatureflag_UserEntityInstanceDatas` | [msdyn_schedulingfeatureflag](msdyn_schedulingfeatureflag.md) | `objectid` | `objectid_msdyn_schedulingfeatureflag` |
| `msdyn_schedulingfeatureflag_ProcessSession` | [msdyn_schedulingfeatureflag](msdyn_schedulingfeatureflag.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingfeatureflag` |
| `msdyn_schedulingfeatureflag_BulkDeleteFailures` | [msdyn_schedulingfeatureflag](msdyn_schedulingfeatureflag.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingfeatureflag` |
| `msdyn_schedulingfeatureflag_PrincipalObjectAttributeAccesses` | [msdyn_schedulingfeatureflag](msdyn_schedulingfeatureflag.md) | `objectid` | `objectid_msdyn_schedulingfeatureflag` |


## Source

Generated from [msdyn_schedulingfeatureflag (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_schedulingfeatureflag')) on 2026-05-07.