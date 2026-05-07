---
logical: "msdyn_liveworkitemevent"
display: "Live work item event"
entitySetName: "msdyn_liveworkitemevents"
primaryId: "msdyn_liveworkitemeventid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Live work item event

This entity captures all events corresponding to a live work item.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_liveworkitemevent` |
| Display name | Live work item event |
| Display (plural) | msdyn_liveworkitemevents |
| Schema name | `msdyn_liveworkitemevent` |
| Entity set (Web API) | `msdyn_liveworkitemevents` |
| Primary id attribute | `msdyn_liveworkitemeventid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_liveworkitemevents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_liveworkitemevents(<guid>)
POST /api/data/v9.2/msdyn_liveworkitemevents
PATCH /api/data/v9.2/msdyn_liveworkitemevents(<guid>)
DELETE /api/data/v9.2/msdyn_liveworkitemevents(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_eventtime`, `msdyn_liveworkitemevent`, `msdyn_liveworkitemeventdata`, `msdyn_liveworkitemeventId`, `msdyn_liveworkitemid`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_liveworkitemevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_liveworkitemevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_liveworkitemevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_liveworkitemevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_liveworkitemevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocliveworkitem_msdyn_liveworkitemevent_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |
| `owner_msdyn_liveworkitemevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_liveworkitemevent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_liveworkitemevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_liveworkitemevent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveworkitemevent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveworkitemevent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_liveworkitemevent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_liveworkitemevent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_liveworkitemevent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveworkitemevent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_liveworkitemevent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_liveworkitemevent.md) on 2026-05-06.