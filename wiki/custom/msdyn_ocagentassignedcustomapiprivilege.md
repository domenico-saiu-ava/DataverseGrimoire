---
logical: "msdyn_ocagentassignedcustomapiprivilege"
display: "Privilegio dell'API personalizzata di assegnazione agli agenti Multicanale "
entitySetName: "msdyn_ocagentassignedcustomapiprivileges"
primaryId: "msdyn_ocagentassignedcustomapiprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Privilegio dell'API personalizzata di assegnazione agli agenti Multicanale 

Entità per la creazione dei privilegi per API personalizzate private di assegnazione agli agenti. I privilegi per questa entità verranno utilizzati per limitare l'accesso alle API solo per gli utenti dell'app FPA.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocagentassignedcustomapiprivilege` |
| Display name | Privilegio dell'API personalizzata di assegnazione agli agenti Multicanale  |
| Display (plural) | Privilegi dell'API personalizzata di assegnazione agli agenti Multicanale |
| Schema name | `msdyn_ocagentassignedcustomapiprivilege` |
| Entity set (Web API) | `msdyn_ocagentassignedcustomapiprivileges` |
| Primary id attribute | `msdyn_ocagentassignedcustomapiprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocagentassignedcustomapiprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocagentassignedcustomapiprivileges(<guid>)
POST /api/data/v9.2/msdyn_ocagentassignedcustomapiprivileges
PATCH /api/data/v9.2/msdyn_ocagentassignedcustomapiprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_ocagentassignedcustomapiprivileges(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_ocagentassignedcustomapiprivilegeid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocagentassignedcustomapiprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocagentassignedcustomapiprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocagentassignedcustomapiprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocagentassignedcustomapiprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocagentassignedcustomapiprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocagentassignedcustomapiprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocagentassignedcustomapiprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocagentassignedcustomapiprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocagentassignedcustomapiprivilege_SyncErrors` | [msdyn_ocagentassignedcustomapiprivilege](msdyn_ocagentassignedcustomapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocagentassignedcustomapiprivilege` |
| `msdyn_ocagentassignedcustomapiprivilege_DuplicateMatchingRecord` | [msdyn_ocagentassignedcustomapiprivilege](msdyn_ocagentassignedcustomapiprivilege.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocagentassignedcustomapiprivilege` |
| `msdyn_ocagentassignedcustomapiprivilege_DuplicateBaseRecord` | [msdyn_ocagentassignedcustomapiprivilege](msdyn_ocagentassignedcustomapiprivilege.md) | `baserecordid` | `baserecordid_msdyn_ocagentassignedcustomapiprivilege` |
| `msdyn_ocagentassignedcustomapiprivilege_AsyncOperations` | [msdyn_ocagentassignedcustomapiprivilege](msdyn_ocagentassignedcustomapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocagentassignedcustomapiprivilege` |
| `msdyn_ocagentassignedcustomapiprivilege_MailboxTrackingFolders` | [msdyn_ocagentassignedcustomapiprivilege](msdyn_ocagentassignedcustomapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocagentassignedcustomapiprivilege` |
| `msdyn_ocagentassignedcustomapiprivilege_UserEntityInstanceDatas` | [msdyn_ocagentassignedcustomapiprivilege](msdyn_ocagentassignedcustomapiprivilege.md) | `objectid` | `objectid_msdyn_ocagentassignedcustomapiprivilege` |
| `msdyn_ocagentassignedcustomapiprivilege_ProcessSession` | [msdyn_ocagentassignedcustomapiprivilege](msdyn_ocagentassignedcustomapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocagentassignedcustomapiprivilege` |
| `msdyn_ocagentassignedcustomapiprivilege_BulkDeleteFailures` | [msdyn_ocagentassignedcustomapiprivilege](msdyn_ocagentassignedcustomapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocagentassignedcustomapiprivilege` |
| `msdyn_ocagentassignedcustomapiprivilege_PrincipalObjectAttributeAccesses` | [msdyn_ocagentassignedcustomapiprivilege](msdyn_ocagentassignedcustomapiprivilege.md) | `objectid` | `objectid_msdyn_ocagentassignedcustomapiprivilege` |


## Source

Generated from [msdyn_ocagentassignedcustomapiprivilege (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocagentassignedcustomapiprivilege')) on 2026-05-07.