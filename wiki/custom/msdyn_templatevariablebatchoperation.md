---
logical: "msdyn_templatevariablebatchoperation"
display: "Operazione in batch variabile di contesto"
entitySetName: "msdyn_templatevariablebatchoperations"
primaryId: "msdyn_templatevariablebatchoperationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Operazione in batch variabile di contesto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templatevariablebatchoperation` |
| Display name | Operazione in batch variabile di contesto |
| Display (plural) | Operazioni in batch variabili di contesto |
| Schema name | `msdyn_templatevariablebatchoperation` |
| Entity set (Web API) | `msdyn_templatevariablebatchoperations` |
| Primary id attribute | `msdyn_templatevariablebatchoperationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_templatevariablebatchoperations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_templatevariablebatchoperations(<guid>)
POST /api/data/v9.2/msdyn_templatevariablebatchoperations
PATCH /api/data/v9.2/msdyn_templatevariablebatchoperations(<guid>)
DELETE /api/data/v9.2/msdyn_templatevariablebatchoperations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bulkoperationrunid`, `msdyn_contextmapping`, `msdyn_createdcontextvariableids`, `msdyn_createddependencymappings`, `msdyn_errorlog`, `msdyn_name`, `msdyn_templaterulesetid`, `msdyn_templatevariablebatchoperationid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_templatevariablebatchoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_templatevariablebatchoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_templatevariablebatchoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_templatevariablebatchoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_templatevariablebatchoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_templatevariablebatchoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_templatevariablebatchoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_templatevariablebatchoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_templatevariablebatchoperation_msdyn_templaterulesetid_msdyn_templateruleset` | [msdyn_templateruleset](msdyn_templateruleset.md) | `msdyn_templaterulesetid` | `msdyn_templaterulesetid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templatevariablebatchoperation_SyncErrors` | [msdyn_templatevariablebatchoperation](msdyn_templatevariablebatchoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatevariablebatchoperation` |
| `msdyn_templatevariablebatchoperation_DuplicateMatchingRecord` | [msdyn_templatevariablebatchoperation](msdyn_templatevariablebatchoperation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_templatevariablebatchoperation` |
| `msdyn_templatevariablebatchoperation_DuplicateBaseRecord` | [msdyn_templatevariablebatchoperation](msdyn_templatevariablebatchoperation.md) | `baserecordid` | `baserecordid_msdyn_templatevariablebatchoperation` |
| `msdyn_templatevariablebatchoperation_AsyncOperations` | [msdyn_templatevariablebatchoperation](msdyn_templatevariablebatchoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatevariablebatchoperation` |
| `msdyn_templatevariablebatchoperation_MailboxTrackingFolders` | [msdyn_templatevariablebatchoperation](msdyn_templatevariablebatchoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatevariablebatchoperation` |
| `msdyn_templatevariablebatchoperation_UserEntityInstanceDatas` | [msdyn_templatevariablebatchoperation](msdyn_templatevariablebatchoperation.md) | `objectid` | `objectid_msdyn_templatevariablebatchoperation` |
| `msdyn_templatevariablebatchoperation_ProcessSession` | [msdyn_templatevariablebatchoperation](msdyn_templatevariablebatchoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatevariablebatchoperation` |
| `msdyn_templatevariablebatchoperation_BulkDeleteFailures` | [msdyn_templatevariablebatchoperation](msdyn_templatevariablebatchoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_templatevariablebatchoperation` |
| `msdyn_templatevariablebatchoperation_PrincipalObjectAttributeAccesses` | [msdyn_templatevariablebatchoperation](msdyn_templatevariablebatchoperation.md) | `objectid` | `objectid_msdyn_templatevariablebatchoperation` |


## Source

Generated from [msdyn_templatevariablebatchoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_templatevariablebatchoperation')) on 2026-05-07.