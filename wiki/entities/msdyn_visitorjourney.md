---
logical: "msdyn_visitorjourney"
display: "Self service"
entitySetName: "msdyn_visitorjourneies"
primaryId: "msdyn_visitorjourneyid"
primaryName: "msdyn_displaytitle"
tableType: "Standard"
ownership: "UserOwned"
---

# Self service

Stores each customer action as a record. The actions tracked are before an interaction is initiated. Agents will see the actions for an interaction in the Self Service section of the Customer Summary page, when enabled.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_visitorjourney` |
| Display name | Self service |
| Display (plural) | Self services |
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

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_displaytitle`, `msdyn_endtime`, `msdyn_ocliveworkitemid`, `msdyn_starttime`, `msdyn_type`, `msdyn_url`, `msdyn_visitorjourneyId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_visitorjourney` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_visitorjourney_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_visitorjourney_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_visitorjourney_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_visitorjourney_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocliveworkitem_msdyn_visitorjourney_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `owner_msdyn_visitorjourney` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_visitorjourney` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_visitorjourney` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_visitorjourney_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_visitorjourney_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_visitorjourney_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_visitorjourney_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_visitorjourney_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_visitorjourney_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_visitorjourney.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_visitorjourney.md) on 2026-05-06.