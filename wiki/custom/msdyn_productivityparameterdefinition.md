---
logical: "msdyn_productivityparameterdefinition"
display: "Definizione parametro"
entitySetName: "msdyn_productivityparameterdefinitions"
primaryId: "msdyn_productivityparameterdefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Definizione parametro

Definizioni parametri macro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivityparameterdefinition` |
| Display name | Definizione parametro |
| Display (plural) | Definizioni parametro |
| Schema name | `msdyn_productivityparameterdefinition` |
| Entity set (Web API) | `msdyn_productivityparameterdefinitions` |
| Primary id attribute | `msdyn_productivityparameterdefinitionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivityparameterdefinitions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivityparameterdefinitions(<guid>)
POST /api/data/v9.2/msdyn_productivityparameterdefinitions
PATCH /api/data/v9.2/msdyn_productivityparameterdefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_productivityparameterdefinitions(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_defaultvalue`, `msdyn_description`, `msdyn_displayname`, `msdyn_jsonobjectstructure`, `msdyn_name`, `msdyn_parametertype`, `msdyn_productivityparameterdefinitionid`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_productivityparameterdefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivityparameterdefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivityparameterdefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivityparameterdefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_productivityparameterdefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_productivityparameterdefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_productivityparameterdefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_productivityparameterdefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivityparameterdefinition_SyncErrors` | [msdyn_productivityparameterdefinition](msdyn_productivityparameterdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityparameterdefinition` |
| `msdyn_productivityparameterdefinition_DuplicateMatchingRecord` | [msdyn_productivityparameterdefinition](msdyn_productivityparameterdefinition.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_productivityparameterdefinition` |
| `msdyn_productivityparameterdefinition_DuplicateBaseRecord` | [msdyn_productivityparameterdefinition](msdyn_productivityparameterdefinition.md) | `baserecordid` | `baserecordid_msdyn_productivityparameterdefinition` |
| `msdyn_productivityparameterdefinition_AsyncOperations` | [msdyn_productivityparameterdefinition](msdyn_productivityparameterdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityparameterdefinition` |
| `msdyn_productivityparameterdefinition_MailboxTrackingFolders` | [msdyn_productivityparameterdefinition](msdyn_productivityparameterdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityparameterdefinition` |
| `msdyn_productivityparameterdefinition_UserEntityInstanceDatas` | [msdyn_productivityparameterdefinition](msdyn_productivityparameterdefinition.md) | `objectid` | `objectid_msdyn_productivityparameterdefinition` |
| `msdyn_productivityparameterdefinition_ProcessSession` | [msdyn_productivityparameterdefinition](msdyn_productivityparameterdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityparameterdefinition` |
| `msdyn_productivityparameterdefinition_BulkDeleteFailures` | [msdyn_productivityparameterdefinition](msdyn_productivityparameterdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityparameterdefinition` |
| `msdyn_productivityparameterdefinition_PrincipalObjectAttributeAccesses` | [msdyn_productivityparameterdefinition](msdyn_productivityparameterdefinition.md) | `objectid` | `objectid_msdyn_productivityparameterdefinition` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_actioninputparameter_msdyn_par` | [msdyn_productivityactioninputparameter](msdyn_productivityactioninputparameter.md) | _n/a_ | `msdyn_msdyn_prod_actioninputparameter_msdyn_par` |
| `msdyn_msdyn_prod_actionoutputparameter_msdyn_pa` | [msdyn_productivityactionoutputparameter](msdyn_productivityactionoutputparameter.md) | _n/a_ | `msdyn_msdyn_prod_actionoutputparameter_msdyn_pa` |

## Source

Generated from [msdyn_productivityparameterdefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_productivityparameterdefinition')) on 2026-05-07.