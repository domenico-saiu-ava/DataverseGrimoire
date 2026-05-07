---
logical: "msdyn_agentstatushistory"
display: "Agent Status history"
entitySetName: "msdyn_agentstatushistories"
primaryId: "msdyn_agentstatushistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent Status history

Agent status history entity records any changes to agent’s presence or available capacity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentstatushistory` |
| Display name | Agent Status history |
| Display (plural) | Agent Status Histories |
| Schema name | `msdyn_agentstatushistory` |
| Entity set (Web API) | `msdyn_agentstatushistories` |
| Primary id attribute | `msdyn_agentstatushistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentstatushistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentstatushistories(<guid>)
POST /api/data/v9.2/msdyn_agentstatushistories
PATCH /api/data/v9.2/msdyn_agentstatushistories(<guid>)
DELETE /api/data/v9.2/msdyn_agentstatushistories(<guid>)
```

## Attributes

Writable: **22** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Agentid`, `msdyn_agentstatushistoryId`, `msdyn_assignedconversationcount`, `msdyn_availablecapacity`, `msdyn_endtime`, `msdyn_eventid`, `msdyn_eventname`, `msdyn_isagentloggedin`, `msdyn_isblockedbysomeprofile`, `msdyn_name`, `msdyn_presenceid`, `msdyn_presencemodifiedbyuserid`, `msdyn_starttime`, `msdyn_subeventname`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentstatushistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentstatushistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentstatushistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentstatushistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentstatushistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_presenceid` | `msdyn_presenceid` |
| `msdyn_systemuser_msdyn_agentstatushistory_Agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_Agentid` |
| `msdyn_systemuser_msdyn_agentstatushistory_msdyn_presencemodifiedbyuserid` | [systemuser](systemuser.md) | `msdyn_presencemodifiedbyuserid` | `msdyn_presencemodifiedbyuserid` |
| `owner_msdyn_agentstatushistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentstatushistory` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentstatushistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentstatushistory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentstatushistory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentstatushistory_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentstatushistory_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentstatushistory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentstatushistory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentstatushistory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentstatushistory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentstatushistory.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentstatushistory.md) on 2026-05-06.