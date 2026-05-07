---
logical: "msdyn_productivityactioninputparameter"
display: "Parametro di input azione"
entitySetName: "msdyn_productivityactioninputparameters"
primaryId: "msdyn_productivityactioninputparameterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Parametro di input azione

Attributi dei parametri di input azione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivityactioninputparameter` |
| Display name | Parametro di input azione |
| Display (plural) | Parametri di input azione |
| Schema name | `msdyn_productivityactioninputparameter` |
| Entity set (Web API) | `msdyn_productivityactioninputparameters` |
| Primary id attribute | `msdyn_productivityactioninputparameterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivityactioninputparameters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivityactioninputparameters(<guid>)
POST /api/data/v9.2/msdyn_productivityactioninputparameters
PATCH /api/data/v9.2/msdyn_productivityactioninputparameters(<guid>)
DELETE /api/data/v9.2/msdyn_productivityactioninputparameters(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_actiontemplateinputparameterid`, `msdyn_name`, `msdyn_parametertype`, `msdyn_productivityactioninputparameterid`, `msdyn_uniquename`, `msdyn_visibility`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_productivityactioninputparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivityactioninputparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivityactioninputparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivityactioninputparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_productivityactioninputparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_productivityactioninputparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_productivityactioninputparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_productivityactioninputparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_prod_macroactiontemplate_msdyn_actioninput` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `msdyn_actiontemplateinputparameterid` | `msdyn_actiontemplateinputparameterid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivityactioninputparameter_SyncErrors` | [msdyn_productivityactioninputparameter](msdyn_productivityactioninputparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityactioninputparameter` |
| `msdyn_productivityactioninputparameter_DuplicateMatchingRecord` | [msdyn_productivityactioninputparameter](msdyn_productivityactioninputparameter.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_productivityactioninputparameter` |
| `msdyn_productivityactioninputparameter_DuplicateBaseRecord` | [msdyn_productivityactioninputparameter](msdyn_productivityactioninputparameter.md) | `baserecordid` | `baserecordid_msdyn_productivityactioninputparameter` |
| `msdyn_productivityactioninputparameter_AsyncOperations` | [msdyn_productivityactioninputparameter](msdyn_productivityactioninputparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityactioninputparameter` |
| `msdyn_productivityactioninputparameter_MailboxTrackingFolders` | [msdyn_productivityactioninputparameter](msdyn_productivityactioninputparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityactioninputparameter` |
| `msdyn_productivityactioninputparameter_UserEntityInstanceDatas` | [msdyn_productivityactioninputparameter](msdyn_productivityactioninputparameter.md) | `objectid` | `objectid_msdyn_productivityactioninputparameter` |
| `msdyn_productivityactioninputparameter_ProcessSession` | [msdyn_productivityactioninputparameter](msdyn_productivityactioninputparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityactioninputparameter` |
| `msdyn_productivityactioninputparameter_BulkDeleteFailures` | [msdyn_productivityactioninputparameter](msdyn_productivityactioninputparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityactioninputparameter` |
| `msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses` | [msdyn_productivityactioninputparameter](msdyn_productivityactioninputparameter.md) | `objectid` | `objectid_msdyn_productivityactioninputparameter` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_actioninputparameter_msdyn_par` | [msdyn_productivityparameterdefinition](msdyn_productivityparameterdefinition.md) | _n/a_ | `msdyn_msdyn_prod_actioninputparameter_msdyn_par` |

## Source

Generated from [msdyn_productivityactioninputparameter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_productivityactioninputparameter')) on 2026-05-07.