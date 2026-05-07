---
logical: "msdyn_paflowruntracker"
display: "PA Flow Run Tracker"
entitySetName: "msdyn_paflowruntrackers"
primaryId: "msdyn_paflowruntrackerid"
primaryName: "msdyn_runid"
tableType: "Standard"
ownership: "UserOwned"
---

# PA Flow Run Tracker

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_paflowruntracker` |
| Display name | PA Flow Run Tracker |
| Display (plural) | PA Flow Run Trackers |
| Schema name | `msdyn_PAFlowRunTracker` |
| Entity set (Web API) | `msdyn_paflowruntrackers` |
| Primary id attribute | `msdyn_paflowruntrackerid` |
| Primary name attribute | `msdyn_runid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_paflowruntrackers?$select=msdyn_runid&$top=10
GET /api/data/v9.2/msdyn_paflowruntrackers(<guid>)
POST /api/data/v9.2/msdyn_paflowruntrackers
PATCH /api/data/v9.2/msdyn_paflowruntrackers(<guid>)
DELETE /api/data/v9.2/msdyn_paflowruntrackers(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_FlowStatus`, `msdyn_PAFlowRunTrackerId`, `msdyn_runID`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_paflowruntracker` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_paflowruntracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_paflowruntracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_paflowruntracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_paflowruntracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_paflowruntracker` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_paflowruntracker` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_paflowruntracker` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_paflowruntracker_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_paflowruntracker_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_paflowruntracker_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_paflowruntracker_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_paflowruntracker_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_paflowruntracker_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_paflowruntracker.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_paflowruntracker.md) on 2026-05-06.