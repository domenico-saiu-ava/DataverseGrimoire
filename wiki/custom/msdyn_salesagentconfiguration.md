---
logical: "msdyn_salesagentconfiguration"
display: "Configurazione dell'agente di vendita"
entitySetName: "msdyn_salesagentconfigurations"
primaryId: "msdyn_salesagentconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione dell'agente di vendita

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentconfiguration` |
| Display name | Configurazione dell'agente di vendita |
| Display (plural) | Configurazioni dell'agente di vendita |
| Schema name | `msdyn_SalesAgentConfiguration` |
| Entity set (Web API) | `msdyn_salesagentconfigurations` |
| Primary id attribute | `msdyn_salesagentconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentconfigurations(<guid>)
POST /api/data/v9.2/msdyn_salesagentconfigurations
PATCH /api/data/v9.2/msdyn_salesagentconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentconfigurations(<guid>)
```

## Attributes

Writable: **27** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_accountresearchconfig`, `msdyn_activatedby`, `msdyn_activatedon`, `msdyn_activationstatusagentenabled`, `msdyn_activationstatusupdatedby`, `msdyn_activationstatusupdatedon`, `msdyn_bingchatenabled`, `msdyn_customerprofileconfig`, `msdyn_emailvalidationconfig`, `msdyn_leadrefreshdetails`, `msdyn_leadwebresearchconfig`, `msdyn_name`, `msdyn_prioritizationconfig`, `msdyn_productconfig`, `msdyn_qualificationconfig`, `msdyn_qualificationcriteria`, `msdyn_salesagentconfigurationid`, `msdyn_supportingknowledgeconfig`, `msdyn_teamaccessconfig`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesagentconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesagentconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesagentconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesagentconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesagentconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_salesagentconfiguration_ActivatedBy_systemuser` | [systemuser](systemuser.md) | `msdyn_activatedby` | `msdyn_ActivatedBy` |
| `msdyn_salesagentconfiguration_ActivationStatusUpdatedBy_systemuser` | [systemuser](systemuser.md) | `msdyn_activationstatusupdatedby` | `msdyn_ActivationStatusUpdatedBy` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentconfiguration_SyncErrors` | [msdyn_salesagentconfiguration](msdyn_salesagentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentconfiguration` |
| `msdyn_salesagentconfiguration_AsyncOperations` | [msdyn_salesagentconfiguration](msdyn_salesagentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentconfiguration` |
| `msdyn_salesagentconfiguration_MailboxTrackingFolders` | [msdyn_salesagentconfiguration](msdyn_salesagentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentconfiguration` |
| `msdyn_salesagentconfiguration_UserEntityInstanceDatas` | [msdyn_salesagentconfiguration](msdyn_salesagentconfiguration.md) | `objectid` | `objectid_msdyn_salesagentconfiguration` |
| `msdyn_salesagentconfiguration_ProcessSession` | [msdyn_salesagentconfiguration](msdyn_salesagentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentconfiguration` |
| `msdyn_salesagentconfiguration_BulkDeleteFailures` | [msdyn_salesagentconfiguration](msdyn_salesagentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentconfiguration` |
| `msdyn_salesagentconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_salesagentconfiguration](msdyn_salesagentconfiguration.md) | `objectid` | `objectid_msdyn_salesagentconfiguration` |


## Source

Generated from [msdyn_salesagentconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesagentconfiguration')) on 2026-05-07.