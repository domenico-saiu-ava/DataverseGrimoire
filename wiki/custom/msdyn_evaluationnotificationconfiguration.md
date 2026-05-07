---
logical: "msdyn_evaluationnotificationconfiguration"
display: "Configurazione notifica valutazione"
entitySetName: "msdyn_evaluationnotificationconfigurations"
primaryId: "msdyn_evaluationnotificationconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione notifica valutazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationnotificationconfiguration` |
| Display name | Configurazione notifica valutazione |
| Display (plural) | Configurazioni notifiche valutazione |
| Schema name | `msdyn_evaluationnotificationconfiguration` |
| Entity set (Web API) | `msdyn_evaluationnotificationconfigurations` |
| Primary id attribute | `msdyn_evaluationnotificationconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationnotificationconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationnotificationconfigurations(<guid>)
POST /api/data/v9.2/msdyn_evaluationnotificationconfigurations
PATCH /api/data/v9.2/msdyn_evaluationnotificationconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationnotificationconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_criterianotificationenabled`, `msdyn_criteriathresholds`, `msdyn_evaluationnotificationconfigurationid`, `msdyn_evaluationplanid`, `msdyn_name`, `msdyn_notificationenabled`, `msdyn_sectionnotificationenabled`, `msdyn_sectionthresholds`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationnotificationconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationnotificationconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationnotificationconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationnotificationconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationnotificationconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationnotificationconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationnotificationconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationnotificationconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_evaluationnotificationconfiguration_msdyn_evaluationplan` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `msdyn_evaluationplanid` | `msdyn_evaluationplanid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationnotificationconfiguration_SyncErrors` | [msdyn_evaluationnotificationconfiguration](msdyn_evaluationnotificationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationnotificationconfiguration` |
| `msdyn_evaluationnotificationconfiguration_AsyncOperations` | [msdyn_evaluationnotificationconfiguration](msdyn_evaluationnotificationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationnotificationconfiguration` |
| `msdyn_evaluationnotificationconfiguration_MailboxTrackingFolders` | [msdyn_evaluationnotificationconfiguration](msdyn_evaluationnotificationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationnotificationconfiguration` |
| `msdyn_evaluationnotificationconfiguration_UserEntityInstanceDatas` | [msdyn_evaluationnotificationconfiguration](msdyn_evaluationnotificationconfiguration.md) | `objectid` | `objectid_msdyn_evaluationnotificationconfiguration` |
| `msdyn_evaluationnotificationconfiguration_ProcessSession` | [msdyn_evaluationnotificationconfiguration](msdyn_evaluationnotificationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationnotificationconfiguration` |
| `msdyn_evaluationnotificationconfiguration_BulkDeleteFailures` | [msdyn_evaluationnotificationconfiguration](msdyn_evaluationnotificationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationnotificationconfiguration` |
| `msdyn_evaluationnotificationconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_evaluationnotificationconfiguration](msdyn_evaluationnotificationconfiguration.md) | `objectid` | `objectid_msdyn_evaluationnotificationconfiguration` |


## Source

Generated from [msdyn_evaluationnotificationconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationnotificationconfiguration')) on 2026-05-07.