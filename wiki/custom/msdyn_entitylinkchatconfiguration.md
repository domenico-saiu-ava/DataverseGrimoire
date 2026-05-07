---
logical: "msdyn_entitylinkchatconfiguration"
display: "Configurazione chat collegamento entità"
entitySetName: "msdyn_entitylinkchatconfigurations"
primaryId: "msdyn_entitylinkchatconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione chat collegamento entità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entitylinkchatconfiguration` |
| Display name | Configurazione chat collegamento entità |
| Display (plural) | Configurazioni chat collegamento entità |
| Schema name | `msdyn_entitylinkchatconfiguration` |
| Entity set (Web API) | `msdyn_entitylinkchatconfigurations` |
| Primary id attribute | `msdyn_entitylinkchatconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entitylinkchatconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entitylinkchatconfigurations(<guid>)
POST /api/data/v9.2/msdyn_entitylinkchatconfigurations
PATCH /api/data/v9.2/msdyn_entitylinkchatconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_entitylinkchatconfigurations(<guid>)
```

## Attributes

Writable: **23** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_contextviewid`, `msdyn_enableaiintroductionmessage`, `msdyn_enableaisuggestion`, `msdyn_enableautonamechats`, `msdyn_enablekickoffmessage`, `msdyn_enablelogicbasedsuggestion`, `msdyn_entitylinkchatconfigurationid`, `msdyn_entitytype`, `msdyn_filteringattributes`, `msdyn_isenabledforbot`, `msdyn_name`, `msdyn_recentchatlinkercanunlink`, `msdyn_recordownercanunlink`, `msdyn_uniquename`, `msdyn_usercanjoinchat`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entitylinkchatconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entitylinkchatconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entitylinkchatconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entitylinkchatconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_entitylinkchatconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_entitylinkchatconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_entitylinkchatconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_entitylinkchatconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_entity_msdyn_entitylinkchatconfiguration` | [entity](entity.md) | `msdyn_entitytype` | `msdyn_entitytype` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entitylinkchatconfiguration_SyncErrors` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entitylinkchatconfiguration_DuplicateMatchingRecord` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entitylinkchatconfiguration_DuplicateBaseRecord` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `baserecordid` | `baserecordid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entitylinkchatconfiguration_AsyncOperations` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entitylinkchatconfiguration_MailboxTrackingFolders` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entitylinkchatconfiguration_UserEntityInstanceDatas` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `objectid` | `objectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entitylinkchatconfiguration_ProcessSession` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entitylinkchatconfiguration_BulkDeleteFailures` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entitylinkchatconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `objectid` | `objectid_msdyn_entitylinkchatconfiguration` |


## Source

Generated from [msdyn_entitylinkchatconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_entitylinkchatconfiguration')) on 2026-05-07.