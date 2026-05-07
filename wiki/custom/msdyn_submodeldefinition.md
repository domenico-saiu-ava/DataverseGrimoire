---
logical: "msdyn_submodeldefinition"
display: "Definizione modello secondario"
entitySetName: "msdyn_submodeldefinitions"
primaryId: "msdyn_submodeldefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Definizione modello secondario

Archivia i metadati sui modelli secondari

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_submodeldefinition` |
| Display name | Definizione modello secondario |
| Display (plural) | Definizioni di modello secondario |
| Schema name | `msdyn_submodeldefinition` |
| Entity set (Web API) | `msdyn_submodeldefinitions` |
| Primary id attribute | `msdyn_submodeldefinitionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_submodeldefinitions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_submodeldefinitions(<guid>)
POST /api/data/v9.2/msdyn_submodeldefinitions
PATCH /api/data/v9.2/msdyn_submodeldefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_submodeldefinitions(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_modelid`, `msdyn_name`, `msdyn_submodeldefinitionid`, `msdyn_type`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_submodeldefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_submodeldefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_submodeldefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_submodeldefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_submodeldefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_submodeldefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_submodeldefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_submodeldefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_submodeldefinition_SyncErrors` | [msdyn_submodeldefinition](msdyn_submodeldefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_submodeldefinition` |
| `msdyn_submodeldefinition_DuplicateMatchingRecord` | [msdyn_submodeldefinition](msdyn_submodeldefinition.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_submodeldefinition` |
| `msdyn_submodeldefinition_DuplicateBaseRecord` | [msdyn_submodeldefinition](msdyn_submodeldefinition.md) | `baserecordid` | `baserecordid_msdyn_submodeldefinition` |
| `msdyn_submodeldefinition_AsyncOperations` | [msdyn_submodeldefinition](msdyn_submodeldefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_submodeldefinition` |
| `msdyn_submodeldefinition_MailboxTrackingFolders` | [msdyn_submodeldefinition](msdyn_submodeldefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_submodeldefinition` |
| `msdyn_submodeldefinition_UserEntityInstanceDatas` | [msdyn_submodeldefinition](msdyn_submodeldefinition.md) | `objectid` | `objectid_msdyn_submodeldefinition` |
| `msdyn_submodeldefinition_ProcessSession` | [msdyn_submodeldefinition](msdyn_submodeldefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_submodeldefinition` |
| `msdyn_submodeldefinition_BulkDeleteFailures` | [msdyn_submodeldefinition](msdyn_submodeldefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_submodeldefinition` |
| `msdyn_submodeldefinition_PrincipalObjectAttributeAccesses` | [msdyn_submodeldefinition](msdyn_submodeldefinition.md) | `objectid` | `objectid_msdyn_submodeldefinition` |


## Source

Generated from [msdyn_submodeldefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_submodeldefinition')) on 2026-05-07.