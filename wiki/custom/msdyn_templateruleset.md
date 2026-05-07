---
logical: "msdyn_templateruleset"
display: "Set di regole del modello"
entitySetName: "msdyn_templaterulesets"
primaryId: "msdyn_templaterulesetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Set di regole del modello

Contiene set di regole del modello che possono essere applicate al metodo di assegnazione personalizzato in una coda

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templateruleset` |
| Display name | Set di regole del modello |
| Display (plural) | Set di regole del modello |
| Schema name | `msdyn_templateruleset` |
| Entity set (Web API) | `msdyn_templaterulesets` |
| Primary id attribute | `msdyn_templaterulesetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_templaterulesets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_templaterulesets(<guid>)
POST /api/data/v9.2/msdyn_templaterulesets
PATCH /api/data/v9.2/msdyn_templaterulesets(<guid>)
DELETE /api/data/v9.2/msdyn_templaterulesets(<guid>)
```

## Attributes

Writable: **20** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_bulkoperationrunid`, `msdyn_channel`, `msdyn_channeltype`, `msdyn_description`, `msdyn_draftruleset`, `msdyn_name`, `msdyn_publishedon`, `msdyn_publishedruleset`, `msdyn_streamsource`, `msdyn_templaterulesetid`, `msdyn_type`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_templateruleset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_templateruleset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_templateruleset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_templateruleset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_templateruleset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_templateruleset` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_templateruleset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_templateruleset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_templateruleset_draftruleset_msdyn_decisionruleset` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_draftruleset` | `msdyn_draftruleset` |
| `msdyn_templateruleset_publishedruleset_msdyn_decisionruleset` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_publishedruleset` | `msdyn_publishedruleset` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templateruleset_SyncErrors` | [msdyn_templateruleset](msdyn_templateruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateruleset` |
| `msdyn_templateruleset_DuplicateMatchingRecord` | [msdyn_templateruleset](msdyn_templateruleset.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_templateruleset` |
| `msdyn_templateruleset_DuplicateBaseRecord` | [msdyn_templateruleset](msdyn_templateruleset.md) | `baserecordid` | `baserecordid_msdyn_templateruleset` |
| `msdyn_templateruleset_AsyncOperations` | [msdyn_templateruleset](msdyn_templateruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateruleset` |
| `msdyn_templateruleset_MailboxTrackingFolders` | [msdyn_templateruleset](msdyn_templateruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateruleset` |
| `msdyn_templateruleset_UserEntityInstanceDatas` | [msdyn_templateruleset](msdyn_templateruleset.md) | `objectid` | `objectid_msdyn_templateruleset` |
| `msdyn_templateruleset_ProcessSession` | [msdyn_templateruleset](msdyn_templateruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateruleset` |
| `msdyn_templateruleset_BulkDeleteFailures` | [msdyn_templateruleset](msdyn_templateruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateruleset` |
| `msdyn_templateruleset_PrincipalObjectAttributeAccesses` | [msdyn_templateruleset](msdyn_templateruleset.md) | `objectid` | `objectid_msdyn_templateruleset` |
| `msdyn_templatevariablebatchoperation_msdyn_templaterulesetid_msdyn_templateruleset` | [msdyn_templateruleset](msdyn_templateruleset.md) | `msdyn_templaterulesetid` | `msdyn_templaterulesetid` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templatecontextvariable_msdyn_templateruleset_msdyn_templateruleset` | [msdyn_templatecontextvariable](msdyn_templatecontextvariable.md) | _n/a_ | `msdyn_templatecontextvariable_msdyn_templateruleset_msdyn_templateruleset` |

## Source

Generated from [msdyn_templateruleset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_templateruleset')) on 2026-05-07.