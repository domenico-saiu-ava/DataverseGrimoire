---
logical: "msdyn_intentsolution_mappingconfiguration"
display: "msdyn_intentsolution_mappingconfiguration"
entitySetName: "msdyn_intentsolution_mappingconfigurations"
primaryId: "msdyn_intentsolution_mappingconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_intentsolution_mappingconfiguration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentsolution_mappingconfiguration` |
| Display name | msdyn_intentsolution_mappingconfiguration |
| Display (plural) | msdyn_intentsolution_mappingconfigurations |
| Schema name | `msdyn_intentsolution_mappingconfiguration` |
| Entity set (Web API) | `msdyn_intentsolution_mappingconfigurations` |
| Primary id attribute | `msdyn_intentsolution_mappingconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentsolution_mappingconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentsolution_mappingconfigurations(<guid>)
POST /api/data/v9.2/msdyn_intentsolution_mappingconfigurations
PATCH /api/data/v9.2/msdyn_intentsolution_mappingconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_intentsolution_mappingconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_entityname`, `msdyn_intentsolution_mappingconfigurationid`, `msdyn_name`, `msdyn_rulesetid`, `msdyn_solutionname`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentsolution_mappingconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentsolution_mappingconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentsolution_mappingconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentsolution_mappingconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentsolution_mappingconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentsolution_mappingconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentsolution_mappingconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentsolution_mappingconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intentsolution_mappingconfiguration_rulesetid_msdyn_decisionruleset` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_rulesetid` | `msdyn_rulesetid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentsolution_mappingconfiguration_SyncErrors` | [msdyn_intentsolution_mappingconfiguration](msdyn_intentsolution_mappingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentsolution_mappingconfiguration` |
| `msdyn_intentsolution_mappingconfiguration_DuplicateMatchingRecord` | [msdyn_intentsolution_mappingconfiguration](msdyn_intentsolution_mappingconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentsolution_mappingconfiguration` |
| `msdyn_intentsolution_mappingconfiguration_DuplicateBaseRecord` | [msdyn_intentsolution_mappingconfiguration](msdyn_intentsolution_mappingconfiguration.md) | `baserecordid` | `baserecordid_msdyn_intentsolution_mappingconfiguration` |
| `msdyn_intentsolution_mappingconfiguration_AsyncOperations` | [msdyn_intentsolution_mappingconfiguration](msdyn_intentsolution_mappingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentsolution_mappingconfiguration` |
| `msdyn_intentsolution_mappingconfiguration_MailboxTrackingFolders` | [msdyn_intentsolution_mappingconfiguration](msdyn_intentsolution_mappingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentsolution_mappingconfiguration` |
| `msdyn_intentsolution_mappingconfiguration_UserEntityInstanceDatas` | [msdyn_intentsolution_mappingconfiguration](msdyn_intentsolution_mappingconfiguration.md) | `objectid` | `objectid_msdyn_intentsolution_mappingconfiguration` |
| `msdyn_intentsolution_mappingconfiguration_ProcessSession` | [msdyn_intentsolution_mappingconfiguration](msdyn_intentsolution_mappingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentsolution_mappingconfiguration` |
| `msdyn_intentsolution_mappingconfiguration_BulkDeleteFailures` | [msdyn_intentsolution_mappingconfiguration](msdyn_intentsolution_mappingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentsolution_mappingconfiguration` |
| `msdyn_intentsolution_mappingconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_intentsolution_mappingconfiguration](msdyn_intentsolution_mappingconfiguration.md) | `objectid` | `objectid_msdyn_intentsolution_mappingconfiguration` |


## Source

Generated from [msdyn_intentsolution_mappingconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentsolution_mappingconfiguration')) on 2026-05-07.