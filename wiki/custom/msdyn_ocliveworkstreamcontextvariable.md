---
logical: "msdyn_ocliveworkstreamcontextvariable"
display: "Variabile di contesto"
entitySetName: "msdyn_ocliveworkstreamcontextvariables"
primaryId: "msdyn_ocliveworkstreamcontextvariableid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Variabile di contesto

Archivia le variabili di contesto per un flusso di lavoro.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkstreamcontextvariable` |
| Display name | Variabile di contesto |
| Display (plural) | Variabili di contesto |
| Schema name | `msdyn_ocliveworkstreamcontextvariable` |
| Entity set (Web API) | `msdyn_ocliveworkstreamcontextvariables` |
| Primary id attribute | `msdyn_ocliveworkstreamcontextvariableid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkstreamcontextvariables?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkstreamcontextvariables(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkstreamcontextvariables
PATCH /api/data/v9.2/msdyn_ocliveworkstreamcontextvariables(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkstreamcontextvariables(<guid>)
```

## Attributes

Writable: **19** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_datatype`, `msdyn_displayname`, `msdyn_entitylogicalname`, `msdyn_isdisplayable`, `msdyn_islist`, `msdyn_ismodifiable`, `msdyn_issystemdefined`, `msdyn_liveworkstreamid`, `msdyn_name`, `msdyn_ocliveworkstreamcontextvariableid`, `msdyn_relationshipname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocliveworkstreamcontextvariable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkstreamcontextvariable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkstreamcontextvariable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkstreamcontextvariable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocliveworkstreamcontextvariable` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocliveworkstreamcontextvariable` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocliveworkstreamcontextvariable` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocliveworkstreamcontextvariable` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rulesetdependencymapping_ocliveworkstreamcontextvariable_referencedpolymorphicentityid` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable` |
| `msdyn_ocliveworkstreamcontextvariable_SyncErrors` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkstreamcontextvariable` |
| `msdyn_ocliveworkstreamcontextvariable_DuplicateMatchingRecord` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocliveworkstreamcontextvariable` |
| `msdyn_ocliveworkstreamcontextvariable_DuplicateBaseRecord` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `baserecordid` | `baserecordid_msdyn_ocliveworkstreamcontextvariable` |
| `msdyn_ocliveworkstreamcontextvariable_AsyncOperations` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkstreamcontextvariable` |
| `msdyn_ocliveworkstreamcontextvariable_MailboxTrackingFolders` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkstreamcontextvariable` |
| `msdyn_ocliveworkstreamcontextvariable_UserEntityInstanceDatas` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `objectid` | `objectid_msdyn_ocliveworkstreamcontextvariable` |
| `msdyn_ocliveworkstreamcontextvariable_ProcessSession` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkstreamcontextvariable` |
| `msdyn_ocliveworkstreamcontextvariable_BulkDeleteFailures` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkstreamcontextvariable` |
| `msdyn_ocliveworkstreamcontextvariable_PrincipalObjectAttributeAccesses` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `objectid` | `objectid_msdyn_ocliveworkstreamcontextvariable` |
| `msdyn_ocliveworkitemcontextitemelastic_msdyn_ocliveworkstreamcontextvariableid_msdyn_ocliveworkstreamcontextvariable` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `msdyn_ocliveworkstreamcontextvariableid` | `msdyn_ocliveworkstreamcontextvariableid` |
| `msdyn_msdyn_lwscv_msdyn_ocliveworkitemcontextitem_ocliveworkstreamcontextvariableid` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `msdyn_ocliveworkstreamcontextvariableid` | `msdyn_ocliveworkstreamcontextvariableid` |


## Source

Generated from [msdyn_ocliveworkstreamcontextvariable (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocliveworkstreamcontextvariable')) on 2026-05-07.