---
logical: "msdyn_entityroutingconfiguration"
display: "Entità"
entitySetName: "msdyn_entityroutingconfigurations"
primaryId: "msdyn_entityroutingconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Entità

Configurazione gestione entità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityroutingconfiguration` |
| Display name | Entità |
| Display (plural) | Entità |
| Schema name | `msdyn_entityroutingconfiguration` |
| Entity set (Web API) | `msdyn_entityroutingconfigurations` |
| Primary id attribute | `msdyn_entityroutingconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityroutingconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityroutingconfigurations(<guid>)
POST /api/data/v9.2/msdyn_entityroutingconfigurations
PATCH /api/data/v9.2/msdyn_entityroutingconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_entityroutingconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_deroutingprocess`, `msdyn_entity`, `msdyn_entityroutingconfigurationid`, `msdyn_entitysetname`, `msdyn_name`, `msdyn_relationshipname`, `msdyn_routingprocess`, `msdyn_routingrulesubgrid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess` | [workflow](workflow.md) | `msdyn_deroutingprocess` | `msdyn_DeroutingProcess` |
| `msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess` | [workflow](workflow.md) | `msdyn_routingprocess` | `msdyn_RoutingProcess` |
| `lk_msdyn_entityroutingconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityroutingconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityroutingconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityroutingconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_entityroutingconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_entityroutingconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_entityroutingconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_entityroutingconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityroutingconfiguration_SyncErrors` | [msdyn_entityroutingconfiguration](msdyn_entityroutingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityroutingconfiguration` |
| `msdyn_entityroutingconfiguration_AsyncOperations` | [msdyn_entityroutingconfiguration](msdyn_entityroutingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityroutingconfiguration` |
| `msdyn_entityroutingconfiguration_MailboxTrackingFolders` | [msdyn_entityroutingconfiguration](msdyn_entityroutingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityroutingconfiguration` |
| `msdyn_entityroutingconfiguration_UserEntityInstanceDatas` | [msdyn_entityroutingconfiguration](msdyn_entityroutingconfiguration.md) | `objectid` | `objectid_msdyn_entityroutingconfiguration` |
| `msdyn_entityroutingconfiguration_ProcessSession` | [msdyn_entityroutingconfiguration](msdyn_entityroutingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityroutingconfiguration` |
| `msdyn_entityroutingconfiguration_BulkDeleteFailures` | [msdyn_entityroutingconfiguration](msdyn_entityroutingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityroutingconfiguration` |
| `msdyn_entityroutingconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_entityroutingconfiguration](msdyn_entityroutingconfiguration.md) | `objectid` | `objectid_msdyn_entityroutingconfiguration` |
| `msdyn_entityroutingconfiguration_msdyn_liveworkstream` | [msdyn_entityroutingconfiguration](msdyn_entityroutingconfiguration.md) | `msdyn_entityroutingconfigurationid` | `msdyn_entityroutingconfigurationId` |


## Source

Generated from [msdyn_entityroutingconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_entityroutingconfiguration')) on 2026-05-07.