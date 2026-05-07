---
logical: "appnotification"
display: "Notification"
entitySetName: "appnotifications"
primaryId: "appnotificationid"
primaryName: "title"
tableType: "Elastic"
ownership: "UserOwned"
---

# Notification

Notification to be provided to a user.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appnotification` |
| Display name | Notification |
| Display (plural) | Notifications |
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

Writable: **16** · Read-only: **12**

### Writable

`AppModuleId`, `appnotificationId`, `Body`, `Data`, `IconType`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `Priority`, `TimeZoneRuleVersionNumber`, `Title`, `ToastType`, `TTLInSeconds`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appmodule_appnotification_app` | [appmodule](appmodule.md) | `appmoduleid` | `AppModuleId` |
| `business_unit_appnotification` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_appnotification_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appnotification_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appnotification_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appnotification_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_appnotification` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_appnotification` | [team](team.md) | `owningteam` | `owningteam` |
| `user_appnotification` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [appnotification.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appnotification.md) on 2026-05-06.