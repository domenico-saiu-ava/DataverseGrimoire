---
logical: "msdyn_templateparameter"
display: "Parametro del modello"
entitySetName: "msdyn_templateparameters"
primaryId: "msdyn_templateparameterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Parametro del modello

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templateparameter` |
| Display name | Parametro del modello |
| Display (plural) | Parametri modello |
| Schema name | `msdyn_templateparameter` |
| Entity set (Web API) | `msdyn_templateparameters` |
| Primary id attribute | `msdyn_templateparameterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_templateparameters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_templateparameters(<guid>)
POST /api/data/v9.2/msdyn_templateparameters
PATCH /api/data/v9.2/msdyn_templateparameters(<guid>)
DELETE /api/data/v9.2/msdyn_templateparameters(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_applicationtabtemplateid`, `msdyn_name`, `msdyn_templateparameterid`, `msdyn_uniquename`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_templateparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_templateparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_templateparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_templateparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_templateparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_templateparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_templateparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_templateparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_applicationtabtemplate_templateparameter` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `msdyn_applicationtabtemplateid` | `msdyn_applicationtabtemplateid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templateparameter_SyncErrors` | [msdyn_templateparameter](msdyn_templateparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateparameter` |
| `msdyn_templateparameter_DuplicateMatchingRecord` | [msdyn_templateparameter](msdyn_templateparameter.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_templateparameter` |
| `msdyn_templateparameter_DuplicateBaseRecord` | [msdyn_templateparameter](msdyn_templateparameter.md) | `baserecordid` | `baserecordid_msdyn_templateparameter` |
| `msdyn_templateparameter_AsyncOperations` | [msdyn_templateparameter](msdyn_templateparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateparameter` |
| `msdyn_templateparameter_MailboxTrackingFolders` | [msdyn_templateparameter](msdyn_templateparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateparameter` |
| `msdyn_templateparameter_UserEntityInstanceDatas` | [msdyn_templateparameter](msdyn_templateparameter.md) | `objectid` | `objectid_msdyn_templateparameter` |
| `msdyn_templateparameter_ProcessSession` | [msdyn_templateparameter](msdyn_templateparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateparameter` |
| `msdyn_templateparameter_BulkDeleteFailures` | [msdyn_templateparameter](msdyn_templateparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_templateparameter` |
| `msdyn_templateparameter_PrincipalObjectAttributeAccesses` | [msdyn_templateparameter](msdyn_templateparameter.md) | `objectid` | `objectid_msdyn_templateparameter` |


## Source

Generated from [msdyn_templateparameter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_templateparameter')) on 2026-05-07.