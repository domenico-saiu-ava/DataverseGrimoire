---
logical: "msdyn_requirementdependency"
display: "Dipendenza requisito"
entitySetName: "msdyn_requirementdependencies"
primaryId: "msdyn_requirementdependencyid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dipendenza requisito

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_requirementdependency` |
| Display name | Dipendenza requisito |
| Display (plural) | Dipendenze requisito |
| Schema name | `msdyn_requirementdependency` |
| Entity set (Web API) | `msdyn_requirementdependencies` |
| Primary id attribute | `msdyn_requirementdependencyid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_requirementdependencies?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_requirementdependencies(<guid>)
POST /api/data/v9.2/msdyn_requirementdependencies
PATCH /api/data/v9.2/msdyn_requirementdependencies(<guid>)
DELETE /api/data/v9.2/msdyn_requirementdependencies(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_dependencytype`, `msdyn_dependentrequirement`, `msdyn_name`, `msdyn_requirement`, `msdyn_requirementdependencyid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_resourcerequirement_requirementdependency_resourcerequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_requirement` | `msdyn_requirement` |
| `msdyn_resourcerequirement_requirementdependency_dependentrequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_dependentrequirement` | `msdyn_dependentrequirement` |
| `lk_msdyn_requirementdependency_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_requirementdependency_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_requirementdependency_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_requirementdependency_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_requirementdependency` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_requirementdependency` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_requirementdependency` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_requirementdependency` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementdependency_SyncErrors` | [msdyn_requirementdependency](msdyn_requirementdependency.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementdependency` |
| `msdyn_requirementdependency_DuplicateMatchingRecord` | [msdyn_requirementdependency](msdyn_requirementdependency.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_requirementdependency` |
| `msdyn_requirementdependency_DuplicateBaseRecord` | [msdyn_requirementdependency](msdyn_requirementdependency.md) | `baserecordid` | `baserecordid_msdyn_requirementdependency` |
| `msdyn_requirementdependency_AsyncOperations` | [msdyn_requirementdependency](msdyn_requirementdependency.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementdependency` |
| `msdyn_requirementdependency_MailboxTrackingFolders` | [msdyn_requirementdependency](msdyn_requirementdependency.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementdependency` |
| `msdyn_requirementdependency_UserEntityInstanceDatas` | [msdyn_requirementdependency](msdyn_requirementdependency.md) | `objectid` | `objectid_msdyn_requirementdependency` |
| `msdyn_requirementdependency_ProcessSession` | [msdyn_requirementdependency](msdyn_requirementdependency.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementdependency` |
| `msdyn_requirementdependency_BulkDeleteFailures` | [msdyn_requirementdependency](msdyn_requirementdependency.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementdependency` |
| `msdyn_requirementdependency_PrincipalObjectAttributeAccesses` | [msdyn_requirementdependency](msdyn_requirementdependency.md) | `objectid` | `objectid_msdyn_requirementdependency` |


## Source

Generated from [msdyn_requirementdependency (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_requirementdependency')) on 2026-05-07.