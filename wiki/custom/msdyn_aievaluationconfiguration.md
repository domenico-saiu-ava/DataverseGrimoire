---
logical: "msdyn_aievaluationconfiguration"
display: "AI Evaluation Configuration"
entitySetName: "msdyn_aievaluationconfigurations"
primaryId: "msdyn_aievaluationconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Evaluation Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aievaluationconfiguration` |
| Display name | AI Evaluation Configuration |
| Display (plural) | AI Evaluation Configuration |
| Schema name | `msdyn_AIEvaluationConfiguration` |
| Entity set (Web API) | `msdyn_aievaluationconfigurations` |
| Primary id attribute | `msdyn_aievaluationconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aievaluationconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aievaluationconfigurations(<guid>)
POST /api/data/v9.2/msdyn_aievaluationconfigurations
PATCH /api/data/v9.2/msdyn_aievaluationconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_aievaluationconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aievaluationconfigurationid`, `msdyn_aiobjectid`, `msdyn_aiobjecttype`, `msdyn_configurationstate`, `msdyn_description`, `msdyn_evaluationcriteria`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aievaluationconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aievaluationconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aievaluationconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aievaluationconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aievaluationconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aievaluationconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aievaluationconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aievaluationconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aievaluationconfiguration_SyncErrors` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationconfiguration_AsyncOperations` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationconfiguration_MailboxTrackingFolders` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationconfiguration_UserEntityInstanceDatas` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `objectid` | `objectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationconfiguration_ProcessSession` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationconfiguration_BulkDeleteFailures` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `objectid` | `objectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationconfiguration_msdyn_aievaluationrun` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `msdyn_aievaluationconfigurationid` | `msdyn_AIEvaluationConfigurationId` |


## Source

Generated from [msdyn_aievaluationconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aievaluationconfiguration')) on 2026-05-07.