---
logical: "msdyn_agentchannelstate"
display: "Agent Channel State"
entitySetName: "msdyn_agentchannelstates"
primaryId: "msdyn_agentchannelstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent Channel State

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentchannelstate` |
| Display name | Agent Channel State |
| Display (plural) | Agent Channel States |
| Schema name | `msdyn_agentchannelstate` |
| Entity set (Web API) | `msdyn_agentchannelstates` |
| Primary id attribute | `msdyn_agentchannelstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentchannelstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentchannelstates(<guid>)
POST /api/data/v9.2/msdyn_agentchannelstates
PATCH /api/data/v9.2/msdyn_agentchannelstates(<guid>)
DELETE /api/data/v9.2/msdyn_agentchannelstates(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_agentchannelstateId`, `msdyn_agentid`, `msdyn_channeltype`, `msdyn_lastsessionreleasetime`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentchannelstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentchannelstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentchannelstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentchannelstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentchannelstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_systemuser_msdyn_agentchannelstate_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |
| `owner_msdyn_agentchannelstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentchannelstate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentchannelstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentchannelstate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentchannelstate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentchannelstate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentchannelstate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentchannelstate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentchannelstate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentchannelstate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentchannelstate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentchannelstate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentchannelstate.md) on 2026-05-06.