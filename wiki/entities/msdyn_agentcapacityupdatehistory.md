---
logical: "msdyn_agentcapacityupdatehistory"
display: "Agent capacity update history"
entitySetName: "msdyn_agentcapacityupdatehistories"
primaryId: "msdyn_agentcapacityupdatehistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent capacity update history

Agent capacity update history entity records any changes to agent capacity against a capacity profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentcapacityupdatehistory` |
| Display name | Agent capacity update history |
| Display (plural) | Agent capacity update histories |
| Schema name | `msdyn_agentcapacityupdatehistory` |
| Entity set (Web API) | `msdyn_agentcapacityupdatehistories` |
| Primary id attribute | `msdyn_agentcapacityupdatehistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentcapacityupdatehistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentcapacityupdatehistories(<guid>)
POST /api/data/v9.2/msdyn_agentcapacityupdatehistories
PATCH /api/data/v9.2/msdyn_agentcapacityupdatehistories(<guid>)
DELETE /api/data/v9.2/msdyn_agentcapacityupdatehistories(<guid>)
```

## Attributes

Writable: **23** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_agentcapacityupdatehistoryId`, `msdyn_agentid`, `msdyn_availablecapacityprofileunits`, `msdyn_blockassignment`, `msdyn_capacityprofileid`, `msdyn_defaultmaxunits`, `msdyn_endtime`, `msdyn_eventid`, `msdyn_isforceassignment`, `msdyn_isunitbased`, `msdyn_name`, `msdyn_presenceid`, `msdyn_resetduration`, `msdyn_sessionid`, `msdyn_starttime`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentcapacityupdatehistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentcapacityupdatehistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentcapacityupdatehistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentcapacityupdatehistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentcapacityupdatehistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_capacityprofile_msdyn_agentcapacityupdatehistory_capacityprofileid` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |
| `msdyn_msdyn_ocsession_msdyn_agentcapacityupdatehistory_sessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |
| `msdyn_msdyn_presence_msdyn_agentcapacityupdatehistory_presenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_presenceid` | `msdyn_presenceid` |
| `owner_msdyn_agentcapacityupdatehistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentcapacityupdatehistory` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentcapacityupdatehistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `user_msdyn_agentcapacityupdatehistory_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentcapacityupdatehistory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcapacityupdatehistory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcapacityupdatehistory_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentcapacityupdatehistory_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentcapacityupdatehistory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcapacityupdatehistory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentcapacityupdatehistory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcapacityupdatehistory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentcapacityupdatehistory.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentcapacityupdatehistory.md) on 2026-05-06.