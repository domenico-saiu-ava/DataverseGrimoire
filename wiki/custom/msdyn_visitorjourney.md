---
logical: "msdyn_visitorjourney"
display: "Servizio autonomo"
entitySetName: "msdyn_visitorjourneies"
primaryId: "msdyn_visitorjourneyid"
primaryName: "msdyn_displaytitle"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Servizio autonomo

Archivia ogni azione del cliente come record. Le azioni registrate sono precedenti all'avvio di un'interazione. Gli agenti vedranno le azioni per un'interazione nella sezione Servizio autonomo della pagina di riepilogo del cliente, laddove abilitata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_visitorjourney` |
| Display name | Servizio autonomo |
| Display (plural) | Servizi autonomi |
| Schema name | `msdyn_visitorjourney` |
| Entity set (Web API) | `msdyn_visitorjourneies` |
| Primary id attribute | `msdyn_visitorjourneyid` |
| Primary name attribute | `msdyn_displaytitle` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_visitorjourneies?$select=msdyn_displaytitle&$top=10
GET /api/data/v9.2/msdyn_visitorjourneies(<guid>)
POST /api/data/v9.2/msdyn_visitorjourneies
PATCH /api/data/v9.2/msdyn_visitorjourneies(<guid>)
DELETE /api/data/v9.2/msdyn_visitorjourneies(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_displaytitle`, `msdyn_endtime`, `msdyn_ocliveworkitemid`, `msdyn_starttime`, `msdyn_type`, `msdyn_url`, `msdyn_visitorjourneyid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_visitorjourney_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_visitorjourney_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_visitorjourney_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_visitorjourney_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_visitorjourney` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_visitorjourney` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_visitorjourney` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_visitorjourney` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocliveworkitem_msdyn_visitorjourney_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_visitorjourney_SyncErrors` | [msdyn_visitorjourney](msdyn_visitorjourney.md) | `regardingobjectid` | `regardingobjectid_msdyn_visitorjourney` |
| `msdyn_visitorjourney_AsyncOperations` | [msdyn_visitorjourney](msdyn_visitorjourney.md) | `regardingobjectid` | `regardingobjectid_msdyn_visitorjourney` |
| `msdyn_visitorjourney_MailboxTrackingFolders` | [msdyn_visitorjourney](msdyn_visitorjourney.md) | `regardingobjectid` | `regardingobjectid_msdyn_visitorjourney` |
| `msdyn_visitorjourney_UserEntityInstanceDatas` | [msdyn_visitorjourney](msdyn_visitorjourney.md) | `objectid` | `objectid_msdyn_visitorjourney` |
| `msdyn_visitorjourney_ProcessSession` | [msdyn_visitorjourney](msdyn_visitorjourney.md) | `regardingobjectid` | `regardingobjectid_msdyn_visitorjourney` |
| `msdyn_visitorjourney_BulkDeleteFailures` | [msdyn_visitorjourney](msdyn_visitorjourney.md) | `regardingobjectid` | `regardingobjectid_msdyn_visitorjourney` |
| `msdyn_visitorjourney_PrincipalObjectAttributeAccesses` | [msdyn_visitorjourney](msdyn_visitorjourney.md) | `objectid` | `objectid_msdyn_visitorjourney` |


## Source

Generated from [msdyn_visitorjourney (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_visitorjourney')) on 2026-05-07.