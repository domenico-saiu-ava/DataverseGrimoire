---
logical: "msdyn_organizationsolutionmap"
display: "msdyn_organizationsolutionmap"
entitySetName: "msdyn_organizationsolutionmaps"
primaryId: "msdyn_organizationsolutionmapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_organizationsolutionmap

Questa tabella contiene i record dei mapping delle soluzioni dell'organizzazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_organizationsolutionmap` |
| Display name | msdyn_organizationsolutionmap |
| Display (plural) | msdyn_organizationsolutionmaps |
| Schema name | `msdyn_organizationsolutionmap` |
| Entity set (Web API) | `msdyn_organizationsolutionmaps` |
| Primary id attribute | `msdyn_organizationsolutionmapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_organizationsolutionmaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_organizationsolutionmaps(<guid>)
POST /api/data/v9.2/msdyn_organizationsolutionmaps
PATCH /api/data/v9.2/msdyn_organizationsolutionmaps(<guid>)
DELETE /api/data/v9.2/msdyn_organizationsolutionmaps(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_organizationsolutionmapid`, `msdyn_reviewstate`, `msdyn_solutionbehaviour`, `msdyn_solutionid`, `msdyn_solutionisexternal`, `msdyn_solutionmetadata`, `msdyn_solutiontype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_organizationsolutionmap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_organizationsolutionmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_organizationsolutionmap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_organizationsolutionmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_organizationsolutionmap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_organizationsolutionmap` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_organizationsolutionmap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_organizationsolutionmap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_organizationsolutionmap_SyncErrors` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationsolutionmap` |
| `msdyn_organizationsolutionmap_DuplicateMatchingRecord` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_organizationsolutionmap` |
| `msdyn_organizationsolutionmap_DuplicateBaseRecord` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `baserecordid` | `baserecordid_msdyn_organizationsolutionmap` |
| `msdyn_organizationsolutionmap_AsyncOperations` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationsolutionmap` |
| `msdyn_organizationsolutionmap_MailboxTrackingFolders` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationsolutionmap` |
| `msdyn_organizationsolutionmap_UserEntityInstanceDatas` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `objectid` | `objectid_msdyn_organizationsolutionmap` |
| `msdyn_organizationsolutionmap_ProcessSession` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationsolutionmap` |
| `msdyn_organizationsolutionmap_BulkDeleteFailures` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_organizationsolutionmap` |
| `msdyn_organizationsolutionmap_PrincipalObjectAttributeAccesses` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `objectid` | `objectid_msdyn_organizationsolutionmap` |
| `msdyn_intentsolutionmap_solutionmapid_msdyn_organizationsolutionmap` | [msdyn_organizationsolutionmap](msdyn_organizationsolutionmap.md) | `msdyn_solutionmapid` | `msdyn_solutionmapid` |


## Source

Generated from [msdyn_organizationsolutionmap (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_organizationsolutionmap')) on 2026-05-07.