---
logical: "msdyn_templatecontextvariable"
display: "Variabile di contesto modello"
entitySetName: "msdyn_templatecontextvariables"
primaryId: "msdyn_templatecontextvariableid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Variabile di contesto modello

Utilizzata per creare variabili di contesto che possono essere utilizzate nell'entità Set di regole modello. Rende disponibili le variabili di contesto a livello globale e offre l'opzione per rendere i modelli indipendenti dal canale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templatecontextvariable` |
| Display name | Variabile di contesto modello |
| Display (plural) | Variabili di contesto modello |
| Schema name | `msdyn_templatecontextvariable` |
| Entity set (Web API) | `msdyn_templatecontextvariables` |
| Primary id attribute | `msdyn_templatecontextvariableid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_templatecontextvariables?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_templatecontextvariables(<guid>)
POST /api/data/v9.2/msdyn_templatecontextvariables
PATCH /api/data/v9.2/msdyn_templatecontextvariables(<guid>)
DELETE /api/data/v9.2/msdyn_templatecontextvariables(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_datatype`, `msdyn_displayname`, `msdyn_name`, `msdyn_templatecontextvariableid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_templatecontextvariable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_templatecontextvariable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_templatecontextvariable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_templatecontextvariable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_templatecontextvariable` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_templatecontextvariable` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_templatecontextvariable` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_templatecontextvariable` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templatecontextvariable_SyncErrors` | [msdyn_templatecontextvariable](msdyn_templatecontextvariable.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatecontextvariable` |
| `msdyn_templatecontextvariable_DuplicateMatchingRecord` | [msdyn_templatecontextvariable](msdyn_templatecontextvariable.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_templatecontextvariable` |
| `msdyn_templatecontextvariable_DuplicateBaseRecord` | [msdyn_templatecontextvariable](msdyn_templatecontextvariable.md) | `baserecordid` | `baserecordid_msdyn_templatecontextvariable` |
| `msdyn_templatecontextvariable_AsyncOperations` | [msdyn_templatecontextvariable](msdyn_templatecontextvariable.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatecontextvariable` |
| `msdyn_templatecontextvariable_MailboxTrackingFolders` | [msdyn_templatecontextvariable](msdyn_templatecontextvariable.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatecontextvariable` |
| `msdyn_templatecontextvariable_UserEntityInstanceDatas` | [msdyn_templatecontextvariable](msdyn_templatecontextvariable.md) | `objectid` | `objectid_msdyn_templatecontextvariable` |
| `msdyn_templatecontextvariable_ProcessSession` | [msdyn_templatecontextvariable](msdyn_templatecontextvariable.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatecontextvariable` |
| `msdyn_templatecontextvariable_BulkDeleteFailures` | [msdyn_templatecontextvariable](msdyn_templatecontextvariable.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatecontextvariable` |
| `msdyn_templatecontextvariable_PrincipalObjectAttributeAccesses` | [msdyn_templatecontextvariable](msdyn_templatecontextvariable.md) | `objectid` | `objectid_msdyn_templatecontextvariable` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templatecontextvariable_msdyn_templateruleset_msdyn_templateruleset` | [msdyn_templateruleset](msdyn_templateruleset.md) | _n/a_ | `msdyn_templatecontextvariable_msdyn_templateruleset_msdyn_templateruleset` |

## Source

Generated from [msdyn_templatecontextvariable (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_templatecontextvariable')) on 2026-05-07.