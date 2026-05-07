---
logical: "msdyn_occhannelapiconversationprivilege"
display: "Privilegio di conversazione dell'API del canale Multicanale"
entitySetName: "msdyn_occhannelapiconversationprivileges"
primaryId: "msdyn_occhannelapiconversationprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Privilegio di conversazione dell'API del canale Multicanale

Entità per la creazione dei privilegi per API personalizzate. I privilegi per questa entità verranno utilizzati per limitare l'accesso alle API personalizzate.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_occhannelapiconversationprivilege` |
| Display name | Privilegio di conversazione dell'API del canale Multicanale |
| Display (plural) | Privilegi di conversazione dell'API del canale Multicanale |
| Schema name | `msdyn_occhannelapiconversationprivilege` |
| Entity set (Web API) | `msdyn_occhannelapiconversationprivileges` |
| Primary id attribute | `msdyn_occhannelapiconversationprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_occhannelapiconversationprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_occhannelapiconversationprivileges(<guid>)
POST /api/data/v9.2/msdyn_occhannelapiconversationprivileges
PATCH /api/data/v9.2/msdyn_occhannelapiconversationprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_occhannelapiconversationprivileges(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_occhannelapiconversationprivilegeid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_occhannelapiconversationprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_occhannelapiconversationprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_occhannelapiconversationprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_occhannelapiconversationprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_occhannelapiconversationprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_occhannelapiconversationprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_occhannelapiconversationprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_occhannelapiconversationprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_occhannelapiconversationprivilege_SyncErrors` | [msdyn_occhannelapiconversationprivilege](msdyn_occhannelapiconversationprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapiconversationprivilege` |
| `msdyn_occhannelapiconversationprivilege_DuplicateMatchingRecord` | [msdyn_occhannelapiconversationprivilege](msdyn_occhannelapiconversationprivilege.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_occhannelapiconversationprivilege` |
| `msdyn_occhannelapiconversationprivilege_DuplicateBaseRecord` | [msdyn_occhannelapiconversationprivilege](msdyn_occhannelapiconversationprivilege.md) | `baserecordid` | `baserecordid_msdyn_occhannelapiconversationprivilege` |
| `msdyn_occhannelapiconversationprivilege_AsyncOperations` | [msdyn_occhannelapiconversationprivilege](msdyn_occhannelapiconversationprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapiconversationprivilege` |
| `msdyn_occhannelapiconversationprivilege_MailboxTrackingFolders` | [msdyn_occhannelapiconversationprivilege](msdyn_occhannelapiconversationprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapiconversationprivilege` |
| `msdyn_occhannelapiconversationprivilege_UserEntityInstanceDatas` | [msdyn_occhannelapiconversationprivilege](msdyn_occhannelapiconversationprivilege.md) | `objectid` | `objectid_msdyn_occhannelapiconversationprivilege` |
| `msdyn_occhannelapiconversationprivilege_ProcessSession` | [msdyn_occhannelapiconversationprivilege](msdyn_occhannelapiconversationprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapiconversationprivilege` |
| `msdyn_occhannelapiconversationprivilege_BulkDeleteFailures` | [msdyn_occhannelapiconversationprivilege](msdyn_occhannelapiconversationprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapiconversationprivilege` |
| `msdyn_occhannelapiconversationprivilege_PrincipalObjectAttributeAccesses` | [msdyn_occhannelapiconversationprivilege](msdyn_occhannelapiconversationprivilege.md) | `objectid` | `objectid_msdyn_occhannelapiconversationprivilege` |


## Source

Generated from [msdyn_occhannelapiconversationprivilege (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_occhannelapiconversationprivilege')) on 2026-05-07.