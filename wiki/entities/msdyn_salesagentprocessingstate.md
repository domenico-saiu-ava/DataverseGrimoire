---
logical: "msdyn_salesagentprocessingstate"
display: "Sales agent processing state"
entitySetName: "msdyn_salesagentprocessingstates"
primaryId: "msdyn_salesagentprocessingstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales agent processing state

This table maintains the state of agent process

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentprocessingstate` |
| Display name | Sales agent processing state |
| Display (plural) | Sales agent processing states |
| Schema name | `msdyn_salesagentprocessingstate` |
| Entity set (Web API) | `msdyn_salesagentprocessingstates` |
| Primary id attribute | `msdyn_salesagentprocessingstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentprocessingstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentprocessingstates(<guid>)
POST /api/data/v9.2/msdyn_salesagentprocessingstates
PATCH /api/data/v9.2/msdyn_salesagentprocessingstates(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentprocessingstates(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_agentorchestrationid`, `msdyn_currentprocessingstate`, `msdyn_lastresearchendtime`, `msdyn_lastresearchstarttime`, `msdyn_name`, `msdyn_nextrefreshtime`, `msdyn_regardingentity`, `msdyn_salesagentprocessingstateId`, `msdyn_salesagentprofile`, `msdyn_totalresearchcount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesagentprocessingstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesagentprocessingstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentprocessingstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentprocessingstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentprocessingstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salesagentprocessingstate_regardingentity_opportunity` | [opportunity](opportunity.md) | `msdyn_regardingentity` | `msdyn_regardingentity` |
| `msdyn_salesagentprocessingstate_salesagentprofile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_salesagentprofile` |
| `owner_msdyn_salesagentprocessingstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesagentprocessingstate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesagentprocessingstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentprocessingstate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentprocessingstate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentprocessingstate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentprocessingstate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesagentprocessingstate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentprocessingstate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesagentprocessingstate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesagentprocessingstate.md) on 2026-05-06.