---
logical: "msdyn_consoleapplicationtemplateparameter"
display: "Parametro (deprecato)"
entitySetName: "msdyn_consoleapplicationtemplateparameters"
primaryId: "msdyn_consoleapplicationtemplateparameterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Parametro (deprecato)

Valori di parametro del modello per un modello di applicazione specificato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_consoleapplicationtemplateparameter` |
| Display name | Parametro (deprecato) |
| Display (plural) | Parametri (deprecato) |
| Schema name | `msdyn_consoleapplicationtemplateparameter` |
| Entity set (Web API) | `msdyn_consoleapplicationtemplateparameters` |
| Primary id attribute | `msdyn_consoleapplicationtemplateparameterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_consoleapplicationtemplateparameters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_consoleapplicationtemplateparameters(<guid>)
POST /api/data/v9.2/msdyn_consoleapplicationtemplateparameters
PATCH /api/data/v9.2/msdyn_consoleapplicationtemplateparameters(<guid>)
DELETE /api/data/v9.2/msdyn_consoleapplicationtemplateparameters(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_consoleapplicationtemplateparameterid`, `msdyn_isruntime`, `msdyn_name`, `msdyn_parametername`, `msdyn_runtimetype`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_consoleapplicationtemplateparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_consoleapplicationtemplateparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_consoleapplicationtemplateparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_consoleapplicationtemplateparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_consoleapplicationtemplateparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_consoleapplicationtemplateparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_consoleapplicationtemplateparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_consoleapplicationtemplateparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_consoleapplicationtemplateparameter_SyncErrors` | [msdyn_consoleapplicationtemplateparameter](msdyn_consoleapplicationtemplateparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtemplateparameter` |
| `msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord` | [msdyn_consoleapplicationtemplateparameter](msdyn_consoleapplicationtemplateparameter.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_consoleapplicationtemplateparameter` |
| `msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord` | [msdyn_consoleapplicationtemplateparameter](msdyn_consoleapplicationtemplateparameter.md) | `baserecordid` | `baserecordid_msdyn_consoleapplicationtemplateparameter` |
| `msdyn_consoleapplicationtemplateparameter_AsyncOperations` | [msdyn_consoleapplicationtemplateparameter](msdyn_consoleapplicationtemplateparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtemplateparameter` |
| `msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders` | [msdyn_consoleapplicationtemplateparameter](msdyn_consoleapplicationtemplateparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtemplateparameter` |
| `msdyn_consoleapplicationtemplateparameter_UserEntityInstanceDatas` | [msdyn_consoleapplicationtemplateparameter](msdyn_consoleapplicationtemplateparameter.md) | `objectid` | `objectid_msdyn_consoleapplicationtemplateparameter` |
| `msdyn_consoleapplicationtemplateparameter_ProcessSession` | [msdyn_consoleapplicationtemplateparameter](msdyn_consoleapplicationtemplateparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtemplateparameter` |
| `msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures` | [msdyn_consoleapplicationtemplateparameter](msdyn_consoleapplicationtemplateparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtemplateparameter` |
| `msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses` | [msdyn_consoleapplicationtemplateparameter](msdyn_consoleapplicationtemplateparameter.md) | `objectid` | `objectid_msdyn_consoleapplicationtemplateparameter` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationtemplate_msdyn_co` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationtemplate_msdyn_co` |

## Source

Generated from [msdyn_consoleapplicationtemplateparameter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_consoleapplicationtemplateparameter')) on 2026-05-07.