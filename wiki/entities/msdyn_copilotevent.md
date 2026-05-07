---
logical: "msdyn_copilotevent"
display: "Copilot Event"
entitySetName: "msdyn_copilotevents"
primaryId: "msdyn_copiloteventid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
---

# Copilot Event

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotevent` |
| Display name | Copilot Event |
| Display (plural) | Copilot Events |
| Schema name | `msdyn_copilotevent` |
| Entity set (Web API) | `msdyn_copilotevents` |
| Primary id attribute | `msdyn_copiloteventid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotevents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotevents(<guid>)
POST /api/data/v9.2/msdyn_copilotevents
PATCH /api/data/v9.2/msdyn_copilotevents(<guid>)
DELETE /api/data/v9.2/msdyn_copilotevents(<guid>)
```

## Attributes

Writable: **17** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `msdyn_aiagent`, `msdyn_clienttimestamp`, `msdyn_copiloteventId`, `msdyn_interactioncontext`, `msdyn_interactionforid`, `msdyn_interactionforlogicalname`, `msdyn_interactiontype`, `msdyn_name`, `msdyn_scenariorequestid`, `msdyn_scenariotype`, `msdyn_verbatim`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_interactiondata`, `msdyn_interactiondata_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_copilotevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ElasticFileAttachment_msdyn_copilotevent_msdyn_interactiondata` | [elasticfileattachment](elasticfileattachment.md) | `msdyn_interactiondata` | `msdyn_interactiondata` |
| `lk_msdyn_copilotevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_copilotevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_copilotevent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_copilotevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotevent_ElasticFileAttachments` | _n/a_ | `objectid` | _n/a_ |


## Source

Generated from [msdyn_copilotevent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilotevent.md) on 2026-05-06.