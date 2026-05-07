---
logical: "msdyn_readtracker"
display: "Read Tracker"
entitySetName: "msdyn_readtrackers"
primaryId: "msdyn_readtrackerid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
---

# Read Tracker

Keeps track of the records read by an user in the system

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_readtracker` |
| Display name | Read Tracker |
| Display (plural) | Read Trackers |
| Schema name | `msdyn_readtracker` |
| Entity set (Web API) | `msdyn_readtrackers` |
| Primary id attribute | `msdyn_readtrackerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_readtrackers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_readtrackers(<guid>)
POST /api/data/v9.2/msdyn_readtrackers
PATCH /api/data/v9.2/msdyn_readtrackers(<guid>)
DELETE /api/data/v9.2/msdyn_readtrackers(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_LastReadOn`, `msdyn_Name`, `msdyn_ReadStatus`, `msdyn_readtrackerId`, `msdyn_RegardingObjectId`, `msdyn_RegardingObjectIdSerialized`, `msdyn_RegardingObjectIdType`, `msdyn_UserId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_readtracker` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_readtracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_readtracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_readtracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_readtracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_readtracker_systemuser` | [systemuser](systemuser.md) | `msdyn_userid` | `msdyn_userId` |
| `msdyn_readtracker_poly_activitypointer` | [activitypointer](activitypointer.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId` |
| `msdyn_readtracker_poly_email` | [email](email.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId` |
| `msdyn_readtracker_poly_incident` | [incident](incident.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId` |
| `msdyn_readtracker_poly_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId` |
| `msdyn_readtracker_poly_task` | [task](task.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId` |
| `owner_msdyn_readtracker` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_readtracker` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_readtracker` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [msdyn_readtracker.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_readtracker.md) on 2026-05-06.