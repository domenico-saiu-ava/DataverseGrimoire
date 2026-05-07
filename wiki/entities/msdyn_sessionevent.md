---
logical: "msdyn_sessionevent"
display: "Session event"
entitySetName: "msdyn_sessionevents"
primaryId: "msdyn_sessioneventid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Session event

Stores the session events for a session

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessionevent` |
| Display name | Session event |
| Display (plural) | Session events |
| Schema name | `msdyn_sessionevent` |
| Entity set (Web API) | `msdyn_sessionevents` |
| Primary id attribute | `msdyn_sessioneventid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sessionevents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sessionevents(<guid>)
POST /api/data/v9.2/msdyn_sessionevents
PATCH /api/data/v9.2/msdyn_sessionevents(<guid>)
DELETE /api/data/v9.2/msdyn_sessionevents(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_eventinfo`, `msdyn_eventreason`, `msdyn_eventtime`, `msdyn_eventtype`, `msdyn_name`, `msdyn_omnichannelsession`, `msdyn_sessioneventId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_sessionevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_sessionevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sessionevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sessionevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sessionevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocsession_sessionevent_nested` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_omnichannelsession` | `msdyn_omnichannelsession` |
| `owner_msdyn_sessionevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_sessionevent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_sessionevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessionevent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionevent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionevent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_sessionevent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_sessionevent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionevent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sessionevent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionevent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sessionevent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sessionevent.md) on 2026-05-06.