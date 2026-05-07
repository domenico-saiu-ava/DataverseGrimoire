---
logical: "msdyn_productivityactionoutputparameter"
display: "Parametro di output azione"
entitySetName: "msdyn_productivityactionoutputparameters"
primaryId: "msdyn_productivityactionoutputparameterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Parametro di output azione

Attributi dei parametri di output azione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivityactionoutputparameter` |
| Display name | Parametro di output azione |
| Display (plural) | Parametri di output azione |
| Schema name | `msdyn_productivityactionoutputparameter` |
| Entity set (Web API) | `msdyn_productivityactionoutputparameters` |
| Primary id attribute | `msdyn_productivityactionoutputparameterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivityactionoutputparameters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivityactionoutputparameters(<guid>)
POST /api/data/v9.2/msdyn_productivityactionoutputparameters
PATCH /api/data/v9.2/msdyn_productivityactionoutputparameters(<guid>)
DELETE /api/data/v9.2/msdyn_productivityactionoutputparameters(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_actiontemplateoutputparameterid`, `msdyn_name`, `msdyn_productivityactionoutputparameterid`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_productivityactionoutputparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivityactionoutputparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivityactionoutputparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivityactionoutputparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_productivityactionoutputparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_productivityactionoutputparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_productivityactionoutputparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_productivityactionoutputparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_prod_macroactiontemplate_msdyn_actionout` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `msdyn_actiontemplateoutputparameterid` | `msdyn_actiontemplateoutputparameterid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivityactionoutputparameter_SyncErrors` | [msdyn_productivityactionoutputparameter](msdyn_productivityactionoutputparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityactionoutputparameter` |
| `msdyn_productivityactionoutputparameter_DuplicateMatchingRecord` | [msdyn_productivityactionoutputparameter](msdyn_productivityactionoutputparameter.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_productivityactionoutputparameter` |
| `msdyn_productivityactionoutputparameter_DuplicateBaseRecord` | [msdyn_productivityactionoutputparameter](msdyn_productivityactionoutputparameter.md) | `baserecordid` | `baserecordid_msdyn_productivityactionoutputparameter` |
| `msdyn_productivityactionoutputparameter_AsyncOperations` | [msdyn_productivityactionoutputparameter](msdyn_productivityactionoutputparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityactionoutputparameter` |
| `msdyn_productivityactionoutputparameter_MailboxTrackingFolders` | [msdyn_productivityactionoutputparameter](msdyn_productivityactionoutputparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityactionoutputparameter` |
| `msdyn_productivityactionoutputparameter_UserEntityInstanceDatas` | [msdyn_productivityactionoutputparameter](msdyn_productivityactionoutputparameter.md) | `objectid` | `objectid_msdyn_productivityactionoutputparameter` |
| `msdyn_productivityactionoutputparameter_ProcessSession` | [msdyn_productivityactionoutputparameter](msdyn_productivityactionoutputparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityactionoutputparameter` |
| `msdyn_productivityactionoutputparameter_BulkDeleteFailures` | [msdyn_productivityactionoutputparameter](msdyn_productivityactionoutputparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityactionoutputparameter` |
| `msdyn_productivityactionoutputparameter_PrincipalObjectAttributeAccesses` | [msdyn_productivityactionoutputparameter](msdyn_productivityactionoutputparameter.md) | `objectid` | `objectid_msdyn_productivityactionoutputparameter` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_actionoutputparameter_msdyn_pa` | [msdyn_productivityparameterdefinition](msdyn_productivityparameterdefinition.md) | _n/a_ | `msdyn_msdyn_prod_actionoutputparameter_msdyn_pa` |

## Source

Generated from [msdyn_productivityactionoutputparameter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_productivityactionoutputparameter')) on 2026-05-07.