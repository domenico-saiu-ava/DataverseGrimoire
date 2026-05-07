---
logical: "msdyn_ocmessagemaskingrule"
display: "Regola di mascheramento messaggi"
entitySetName: "msdyn_ocmessagemaskingrules"
primaryId: "msdyn_ocmessagemaskingruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di mascheramento messaggi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocmessagemaskingrule` |
| Display name | Regola di mascheramento messaggi |
| Display (plural) | Regola di mascheramento messaggi |
| Schema name | `msdyn_ocmessagemaskingrule` |
| Entity set (Web API) | `msdyn_ocmessagemaskingrules` |
| Primary id attribute | `msdyn_ocmessagemaskingruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocmessagemaskingrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocmessagemaskingrules(<guid>)
POST /api/data/v9.2/msdyn_ocmessagemaskingrules
PATCH /api/data/v9.2/msdyn_ocmessagemaskingrules(<guid>)
DELETE /api/data/v9.2/msdyn_ocmessagemaskingrules(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_liveworkstreamid`, `msdyn_name`, `msdyn_oclanguageid`, `msdyn_ocmessagemaskingruleid`, `msdyn_redactedmessagetext`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocmessagemaskingrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocmessagemaskingrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocmessagemaskingrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocmessagemaskingrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocmessagemaskingrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocmessagemaskingrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocmessagemaskingrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocmessagemaskingrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_oclanguage_msdyn_ocmessagemaskingrule_oclanguageid` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_oclanguageid` | `msdyn_oclanguageid` |
| `msdyn_msdyn_liveworkstream_msdyn_ocmessagemaskingrule_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocmessagemaskingrule_SyncErrors` | [msdyn_ocmessagemaskingrule](msdyn_ocmessagemaskingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocmessagemaskingrule` |
| `msdyn_ocmessagemaskingrule_DuplicateMatchingRecord` | [msdyn_ocmessagemaskingrule](msdyn_ocmessagemaskingrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocmessagemaskingrule` |
| `msdyn_ocmessagemaskingrule_DuplicateBaseRecord` | [msdyn_ocmessagemaskingrule](msdyn_ocmessagemaskingrule.md) | `baserecordid` | `baserecordid_msdyn_ocmessagemaskingrule` |
| `msdyn_ocmessagemaskingrule_AsyncOperations` | [msdyn_ocmessagemaskingrule](msdyn_ocmessagemaskingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocmessagemaskingrule` |
| `msdyn_ocmessagemaskingrule_MailboxTrackingFolders` | [msdyn_ocmessagemaskingrule](msdyn_ocmessagemaskingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocmessagemaskingrule` |
| `msdyn_ocmessagemaskingrule_UserEntityInstanceDatas` | [msdyn_ocmessagemaskingrule](msdyn_ocmessagemaskingrule.md) | `objectid` | `objectid_msdyn_ocmessagemaskingrule` |
| `msdyn_ocmessagemaskingrule_ProcessSession` | [msdyn_ocmessagemaskingrule](msdyn_ocmessagemaskingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocmessagemaskingrule` |
| `msdyn_ocmessagemaskingrule_BulkDeleteFailures` | [msdyn_ocmessagemaskingrule](msdyn_ocmessagemaskingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocmessagemaskingrule` |
| `msdyn_ocmessagemaskingrule_PrincipalObjectAttributeAccesses` | [msdyn_ocmessagemaskingrule](msdyn_ocmessagemaskingrule.md) | `objectid` | `objectid_msdyn_ocmessagemaskingrule` |


## Source

Generated from [msdyn_ocmessagemaskingrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocmessagemaskingrule')) on 2026-05-07.