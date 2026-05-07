---
logical: "signal"
display: "signal"
entitySetName: "signals"
primaryId: "signalid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
---

# signal

## Identity

| Property | Value |
| --- | --- |
| Logical name | `signal` |
| Display name | signal |
| Display (plural) | signals |
| Schema name | `signal` |
| Entity set (Web API) | `signals` |
| Primary id attribute | `signalid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/signals?$select=name&$top=10
GET /api/data/v9.2/signals(<guid>)
POST /api/data/v9.2/signals
PATCH /api/data/v9.2/signals(<guid>)
DELETE /api/data/v9.2/signals(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`AlternativeKey`, `Contents`, `ImportSequenceNumber`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `Properties`, `signalId`, `SignalType`, `TTLInSeconds`, `UserId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_signal` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_signal_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_signal_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_signal_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_signal_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_signal` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_signal` | [team](team.md) | `owningteam` | `owningteam` |
| `user_signal` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [signal.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/signal.md) on 2026-05-06.