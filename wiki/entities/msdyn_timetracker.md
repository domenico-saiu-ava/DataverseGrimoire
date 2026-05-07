---
logical: "msdyn_timetracker"
display: "Time Tracker"
entitySetName: "msdyn_timetrackers"
primaryId: "msdyn_timetrackerid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
---

# Time Tracker

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_timetracker` |
| Display name | Time Tracker |
| Display (plural) | Time Trackers |
| Schema name | `msdyn_timetracker` |
| Entity set (Web API) | `msdyn_timetrackers` |
| Primary id attribute | `msdyn_timetrackerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_timetrackers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_timetrackers(<guid>)
POST /api/data/v9.2/msdyn_timetrackers
PATCH /api/data/v9.2/msdyn_timetrackers(<guid>)
DELETE /api/data/v9.2/msdyn_timetrackers(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_category`, `msdyn_duration`, `msdyn_Name`, `msdyn_reasoncategoryfortimelog`, `msdyn_reasonfortimelog`, `msdyn_regardingentity`, `msdyn_starttime`, `msdyn_timetrackerId`, `msdyn_timevaluepercategory`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_timetracker` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_timetracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_timetracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_timetracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_timetracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_timetracker_regardingentity_Incident` | [incident](incident.md) | `msdyn_regardingentity` | `msdyn_regardingentity` |
| `owner_msdyn_timetracker` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_timetracker` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_timetracker` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [msdyn_timetracker.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_timetracker.md) on 2026-05-06.