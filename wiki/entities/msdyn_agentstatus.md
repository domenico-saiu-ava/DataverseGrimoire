---
logical: "msdyn_agentstatus"
display: "Agent Status"
entitySetName: "msdyn_agentstatuses"
primaryId: "msdyn_agentstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent Status

Agent Status holds agent’s status or presence details.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentstatus` |
| Display name | Agent Status |
| Display (plural) | agent status |
| Schema name | `msdyn_agentstatus` |
| Entity set (Web API) | `msdyn_agentstatuses` |
| Primary id attribute | `msdyn_agentstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentstatuses(<guid>)
POST /api/data/v9.2/msdyn_agentstatuses
PATCH /api/data/v9.2/msdyn_agentstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_agentstatuses(<guid>)
```

## Attributes

Writable: **24** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_agentid`, `msdyn_agentstatusId`, `msdyn_assignedconversationcount`, `msdyn_availableunitscapacity`, `msdyn_capacitymodifiedon`, `msdyn_capacitymodifiedonwithmilliseconds`, `msdyn_currentpresenceid`, `msdyn_eventname`, `msdyn_isagentloggedin`, `msdyn_isblockedbysomeprofile`, `msdyn_name`, `msdyn_presencemodifiedby`, `msdyn_presencemodifiedbyuserid`, `msdyn_presencemodifiedon`, `msdyn_presencemodifiedonwithmilliseconds`, `msdyn_subeventname`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_presence_msdyn_agentstatus_currentpresenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_currentpresenceid` | `msdyn_currentpresenceid` |
| `msdyn_systemuser_msdyn_agentstatus_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |
| `msdyn_systemuser_msdyn_agentstatus_msdyn_presencemodifiedbyuserid` | [systemuser](systemuser.md) | `msdyn_presencemodifiedbyuserid` | `msdyn_presencemodifiedbyuserid` |
| `owner_msdyn_agentstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentstatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentstatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentstatus_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentstatus_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentstatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentstatus_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentstatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentstatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentstatus.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentstatus.md) on 2026-05-06.