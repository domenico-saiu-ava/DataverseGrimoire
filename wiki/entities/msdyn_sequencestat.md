---
logical: "msdyn_sequencestat"
display: "Sequence Stat"
entitySetName: "msdyn_sequencestats"
primaryId: "msdyn_sequencestatid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sequence Stat

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sequencestat` |
| Display name | Sequence Stat |
| Display (plural) | Sequence Stats |
| Schema name | `msdyn_sequencestat` |
| Entity set (Web API) | `msdyn_sequencestats` |
| Primary id attribute | `msdyn_sequencestatid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sequencestats?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sequencestats(<guid>)
POST /api/data/v9.2/msdyn_sequencestats
PATCH /api/data/v9.2/msdyn_sequencestats(<guid>)
DELETE /api/data/v9.2/msdyn_sequencestats(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_avgtimefortargetcompletion`, `msdyn_name`, `msdyn_range`, `msdyn_sequence`, `msdyn_sequencestatId`, `msdyn_successrate`, `msdyn_targetscompleted`, `msdyn_targetscreated`, `msdyn_targetsdisconnected`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_sequencestat` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_sequencestat_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sequencestat_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sequencestat_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sequencestat_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_sequence_sequencestat` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_sequence` | `msdyn_sequence` |
| `owner_msdyn_sequencestat` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_sequencestat` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_sequencestat` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sequencestat_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencestat_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencestat_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencestat_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sequencestat_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencestat_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sequencestat.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sequencestat.md) on 2026-05-06.