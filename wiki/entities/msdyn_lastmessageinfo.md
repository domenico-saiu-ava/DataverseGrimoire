---
logical: "msdyn_lastmessageinfo"
display: "Last message info"
entitySetName: "msdyn_lastmessageinfos"
primaryId: "msdyn_lastmessageinfoid"
primaryName: "msdyn_liveworkitemid"
tableType: "Elastic"
ownership: "UserOwned"
---

# Last message info

Stores last message per conversation and inbox thread IDs.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_lastmessageinfo` |
| Display name | Last message info |
| Display (plural) | Last message infos |
| Schema name | `msdyn_lastmessageinfo` |
| Entity set (Web API) | `msdyn_lastmessageinfos` |
| Primary id attribute | `msdyn_lastmessageinfoid` |
| Primary name attribute | `msdyn_liveworkitemid` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_lastmessageinfos?$select=msdyn_liveworkitemid&$top=10
GET /api/data/v9.2/msdyn_lastmessageinfos(<guid>)
POST /api/data/v9.2/msdyn_lastmessageinfos
PATCH /api/data/v9.2/msdyn_lastmessageinfos(<guid>)
DELETE /api/data/v9.2/msdyn_lastmessageinfos(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_lastmessageinfoId`, `msdyn_liveworkitemid`, `msdyn_recordtype`, `msdyn_value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_lastmessageinfo` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_lastmessageinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_lastmessageinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_lastmessageinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_lastmessageinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_lastmessageinfo` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_lastmessageinfo` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_lastmessageinfo` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [msdyn_lastmessageinfo.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_lastmessageinfo.md) on 2026-05-06.