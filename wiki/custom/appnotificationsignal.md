---
logical: "appnotificationsignal"
display: "App Notification Signal"
entitySetName: "appnotificationsignals"
primaryId: "appnotificationsignalid"
primaryName: "sharedworkspacename"
tableType: "Elastic"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# App Notification Signal

Contains information about the app notification required for calling Jobs.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appnotificationsignal` |
| Display name | App Notification Signal |
| Display (plural) | App Notification Signals |
| Schema name | `appnotificationsignal` |
| Entity set (Web API) | `appnotificationsignals` |
| Primary id attribute | `appnotificationsignalid` |
| Primary name attribute | `sharedworkspacename` |
| Table type | Elastic |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/appnotificationsignals?$select=sharedworkspacename&$top=10
GET /api/data/v9.2/appnotificationsignals(<guid>)
POST /api/data/v9.2/appnotificationsignals
PATCH /api/data/v9.2/appnotificationsignals(<guid>)
DELETE /api/data/v9.2/appnotificationsignals(<guid>)
```

## Attributes

Writable: **9** · Read-only: **7**

### Writable

`appnotificationid`, `appnotificationsignalid`, `frstenantid`, `importsequencenumber`, `overriddencreatedon`, `partitionid`, `sharedworkspaceid`, `sharedworkspacename`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appnotificationsignal_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appnotificationsignal_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appnotificationsignal_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appnotificationsignal_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [appnotificationsignal (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appnotificationsignal')) on 2026-05-07.