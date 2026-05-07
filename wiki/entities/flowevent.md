---
logical: "flowevent"
display: "Flow Event"
entitySetName: "flowevents"
primaryId: "floweventid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flow Event

Entity to store the events that happen during usage of Power Automate.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowevent` |
| Display name | Flow Event |
| Display (plural) | Flow Events |
| Schema name | `flowevent` |
| Entity set (Web API) | `flowevents` |
| Primary id attribute | `floweventid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowevents?$select=name&$top=10
GET /api/data/v9.2/flowevents(<guid>)
POST /api/data/v9.2/flowevents
PATCH /api/data/v9.2/flowevents(<guid>)
DELETE /api/data/v9.2/flowevents(<guid>)
```

## Attributes

Writable: **19** · Read-only: **13**

### Writable

`eventcode`, `eventcontent`, `EventDuration`, `eventtype`, `ExpiryDate`, `floweventId`, `ImportSequenceNumber`, `level`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `parentobjectid`, `parentobjectidIdType`, `parentobjectlogicalname`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CompletedOn`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `flowevent_flowmachine` | [flowmachine](flowmachine.md) | `parentobjectid` | `parentobjectid_flowmachine` |
| `flowevent_flowmachinegroup` | [flowmachinegroup](flowmachinegroup.md) | `parentobjectid` | `parentobjectid_flowmachinegroup` |
| `flowevent_flowsession` | [flowsession](flowsession.md) | `parentobjectid` | `parentobjectid_flowsession` |
| `flowevent_workflow` | [workflow](workflow.md) | `parentobjectid` | `parentobjectid_workflow` |
| `flowevent_workqueue` | [workqueue](workqueue.md) | `parentobjectid` | `parentobjectid_workqueue` |
| `lk_flowevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_flowevent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowevent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowevent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowevent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `flowevent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `flowevent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowevent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `flowevent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowevent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [flowevent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowevent.md) on 2026-05-06.