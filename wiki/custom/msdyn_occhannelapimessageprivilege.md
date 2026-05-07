---
logical: "msdyn_occhannelapimessageprivilege"
display: "Privilegio per i messaggi dell'API del canale Multicanale"
entitySetName: "msdyn_occhannelapimessageprivileges"
primaryId: "msdyn_occhannelapimessageprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Privilegio per i messaggi dell'API del canale Multicanale

Entità per la creazione dei privilegi per API personalizzate. I privilegi per questa entità verranno utilizzati per limitare l'accesso alle API personalizzate.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_occhannelapimessageprivilege` |
| Display name | Privilegio per i messaggi dell'API del canale Multicanale |
| Display (plural) | Privilegi per i messaggi dell'API del canale Multicanale |
| Schema name | `msdyn_occhannelapimessageprivilege` |
| Entity set (Web API) | `msdyn_occhannelapimessageprivileges` |
| Primary id attribute | `msdyn_occhannelapimessageprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_occhannelapimessageprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_occhannelapimessageprivileges(<guid>)
POST /api/data/v9.2/msdyn_occhannelapimessageprivileges
PATCH /api/data/v9.2/msdyn_occhannelapimessageprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_occhannelapimessageprivileges(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_occhannelapimessageprivilegeid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_occhannelapimessageprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_occhannelapimessageprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_occhannelapimessageprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_occhannelapimessageprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_occhannelapimessageprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_occhannelapimessageprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_occhannelapimessageprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_occhannelapimessageprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_occhannelapimessageprivilege_SyncErrors` | [msdyn_occhannelapimessageprivilege](msdyn_occhannelapimessageprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapimessageprivilege` |
| `msdyn_occhannelapimessageprivilege_DuplicateMatchingRecord` | [msdyn_occhannelapimessageprivilege](msdyn_occhannelapimessageprivilege.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_occhannelapimessageprivilege` |
| `msdyn_occhannelapimessageprivilege_DuplicateBaseRecord` | [msdyn_occhannelapimessageprivilege](msdyn_occhannelapimessageprivilege.md) | `baserecordid` | `baserecordid_msdyn_occhannelapimessageprivilege` |
| `msdyn_occhannelapimessageprivilege_AsyncOperations` | [msdyn_occhannelapimessageprivilege](msdyn_occhannelapimessageprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapimessageprivilege` |
| `msdyn_occhannelapimessageprivilege_MailboxTrackingFolders` | [msdyn_occhannelapimessageprivilege](msdyn_occhannelapimessageprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapimessageprivilege` |
| `msdyn_occhannelapimessageprivilege_UserEntityInstanceDatas` | [msdyn_occhannelapimessageprivilege](msdyn_occhannelapimessageprivilege.md) | `objectid` | `objectid_msdyn_occhannelapimessageprivilege` |
| `msdyn_occhannelapimessageprivilege_ProcessSession` | [msdyn_occhannelapimessageprivilege](msdyn_occhannelapimessageprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapimessageprivilege` |
| `msdyn_occhannelapimessageprivilege_BulkDeleteFailures` | [msdyn_occhannelapimessageprivilege](msdyn_occhannelapimessageprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapimessageprivilege` |
| `msdyn_occhannelapimessageprivilege_PrincipalObjectAttributeAccesses` | [msdyn_occhannelapimessageprivilege](msdyn_occhannelapimessageprivilege.md) | `objectid` | `objectid_msdyn_occhannelapimessageprivilege` |


## Source

Generated from [msdyn_occhannelapimessageprivilege (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_occhannelapimessageprivilege')) on 2026-05-07.