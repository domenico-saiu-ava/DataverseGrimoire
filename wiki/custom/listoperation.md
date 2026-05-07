---
logical: "listoperation"
display: "Operazione elenco"
entitySetName: "listoperations"
primaryId: "listoperationid"
primaryName: "listoperationprimaryname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Operazione elenco

Operazione di sistema utilizzata per eseguire operazioni elenco lunghe e asincrone su set di dati di grandi dimensioni, ad esempio l'aggiunta di membri a un elenco.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `listoperation` |
| Display name | Operazione elenco |
| Display (plural) | Operazioni elenco |
| Schema name | `listoperation` |
| Entity set (Web API) | `listoperations` |
| Primary id attribute | `listoperationid` |
| Primary name attribute | `listoperationprimaryname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/listoperations?$select=listoperationprimaryname&$top=10
GET /api/data/v9.2/listoperations(<guid>)
POST /api/data/v9.2/listoperations
PATCH /api/data/v9.2/listoperations(<guid>)
DELETE /api/data/v9.2/listoperations(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`added`, `batchinput`, `errorcode`, `errordescription`, `importsequencenumber`, `input`, `listid`, `listoperationid`, `listoperationname`, `listoperationprimaryname`, `log`, `overriddencreatedon`, `ownerid`, `processed`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_listoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_listoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_listoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_listoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_listoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_listoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_listoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_listoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `list_listoperation_ListId` | [list](list.md) | `listid` | `ListId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `listoperation_SyncErrors` | [listoperation](listoperation.md) | `regardingobjectid` | `regardingobjectid_listoperation` |
| `listoperation_AsyncOperations` | [listoperation](listoperation.md) | `regardingobjectid` | `regardingobjectid_listoperation` |
| `listoperation_MailboxTrackingFolders` | [listoperation](listoperation.md) | `regardingobjectid` | `regardingobjectid_listoperation` |
| `listoperation_UserEntityInstanceDatas` | [listoperation](listoperation.md) | `objectid` | `objectid_listoperation` |
| `listoperation_ProcessSession` | [listoperation](listoperation.md) | `regardingobjectid` | `regardingobjectid_listoperation` |
| `listoperation_BulkDeleteFailures` | [listoperation](listoperation.md) | `regardingobjectid` | `regardingobjectid_listoperation` |
| `listoperation_PrincipalObjectAttributeAccesses` | [listoperation](listoperation.md) | `objectid` | `objectid_listoperation` |


## Source

Generated from [listoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='listoperation')) on 2026-05-07.