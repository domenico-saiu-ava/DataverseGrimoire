---
logical: "appnotification"
display: "Notifica"
entitySetName: "appnotifications"
primaryId: "appnotificationid"
primaryName: "title"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Notifica

Notifica da inviare a un utente.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appnotification` |
| Display name | Notifica |
| Display (plural) | Notifiche |
| Schema name | `appnotification` |
| Entity set (Web API) | `appnotifications` |
| Primary id attribute | `appnotificationid` |
| Primary name attribute | `title` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/appnotifications?$select=title&$top=10
GET /api/data/v9.2/appnotifications(<guid>)
POST /api/data/v9.2/appnotifications
PATCH /api/data/v9.2/appnotifications(<guid>)
DELETE /api/data/v9.2/appnotifications(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`appmoduleid`, `appnotificationid`, `body`, `data`, `icontype`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `partitionid`, `priority`, `timezoneruleversionnumber`, `title`, `toasttype`, `ttlinseconds`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appnotification_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appnotification_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appnotification_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appnotification_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_appnotification` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_appnotification` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_appnotification` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_appnotification` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `appmodule_appnotification_app` | [appmodule](appmodule.md) | `appmoduleid` | `AppModuleId` |



## Source

Generated from [appnotification (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appnotification')) on 2026-05-07.