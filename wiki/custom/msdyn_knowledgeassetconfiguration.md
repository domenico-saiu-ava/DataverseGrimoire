---
logical: "msdyn_knowledgeassetconfiguration"
display: "Configurazione risorse Knowledge Base"
entitySetName: "msdyn_knowledgeassetconfigurations"
primaryId: "msdyn_knowledgeassetconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione risorse Knowledge Base

Configurazioni delle risorse della Knowledge Base per le origini dati configurate nell'hub della Knowledge Base.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgeassetconfiguration` |
| Display name | Configurazione risorse Knowledge Base |
| Display (plural) | Risorse Knowledge Base con configurazioni |
| Schema name | `msdyn_knowledgeassetconfiguration` |
| Entity set (Web API) | `msdyn_knowledgeassetconfigurations` |
| Primary id attribute | `msdyn_knowledgeassetconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgeassetconfigurations?$select=name&$top=10
GET /api/data/v9.2/msdyn_knowledgeassetconfigurations(<guid>)
POST /api/data/v9.2/msdyn_knowledgeassetconfigurations
PATCH /api/data/v9.2/msdyn_knowledgeassetconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgeassetconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aipluginoperationid`, `msdyn_customapiid`, `msdyn_knowledgeassetconfigurationid`, `msdyn_providerspecificconfiguration`, `msdyn_providertype`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgeassetconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgeassetconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgeassetconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgeassetconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_knowledgeassetconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_knowledgeassetconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_knowledgeassetconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_knowledgeassetconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_knowledgeassetconfiguration_aipluginoperationid` | [aipluginoperation](aipluginoperation.md) | `msdyn_aipluginoperationid` | `msdyn_aipluginoperationid` |
| `msdyn_knowledgeassetconfiguration_customapiid` | [customapi](customapi.md) | `msdyn_customapiid` | `msdyn_customapiid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgeassetconfiguration_SyncErrors` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeassetconfiguration_AsyncOperations` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeassetconfiguration_MailboxTrackingFolders` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeassetconfiguration_UserEntityInstanceDatas` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `objectid` | `objectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeassetconfiguration_ProcessSession` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeassetconfiguration_BulkDeleteFailures` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeassetconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `objectid` | `objectid_msdyn_knowledgeassetconfiguration` |


## Source

Generated from [msdyn_knowledgeassetconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgeassetconfiguration')) on 2026-05-07.