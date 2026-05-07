---
logical: "msdyn_swarmparticipant"
display: "Swarm participant"
entitySetName: "msdyn_swarmparticipants"
primaryId: "msdyn_swarmparticipantid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Swarm participant

Stores the participants information of swarm

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarmparticipant` |
| Display name | Swarm participant |
| Display (plural) | Swarm participants |
| Schema name | `msdyn_swarmparticipant` |
| Entity set (Web API) | `msdyn_swarmparticipants` |
| Primary id attribute | `msdyn_swarmparticipantid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_swarmparticipants?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_swarmparticipants(<guid>)
POST /api/data/v9.2/msdyn_swarmparticipants
PATCH /api/data/v9.2/msdyn_swarmparticipants(<guid>)
DELETE /api/data/v9.2/msdyn_swarmparticipants(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_acceptedon`, `msdyn_name`, `msdyn_rejectedon`, `msdyn_rejectedreason`, `msdyn_swarmid`, `msdyn_swarmparticipantId`, `msdyn_swarmroleid`, `msdyn_userid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_swarmparticipant` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_swarmparticipant_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarmparticipant_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarmparticipant_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarmparticipant_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid` | [msdyn_swarm](msdyn_swarm.md) | `msdyn_swarmid` | `msdyn_swarmid` |
| `msdyn_msdyn_swarmrole_msdyn_swarmparticipant_swarmroleid` | [msdyn_swarmrole](msdyn_swarmrole.md) | `msdyn_swarmroleid` | `msdyn_swarmroleid` |
| `msdyn_systemuser_msdyn_swarmparticipant_userid` | [systemuser](systemuser.md) | `msdyn_userid` | `msdyn_userid` |
| `owner_msdyn_swarmparticipant` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_swarmparticipant` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_swarmparticipant` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_swarmparticipant_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmparticipant_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmparticipant_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_swarmparticipant_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_swarmparticipant_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmparticipant_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_swarmparticipant_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmparticipant_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_swarmparticipant.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_swarmparticipant.md) on 2026-05-06.