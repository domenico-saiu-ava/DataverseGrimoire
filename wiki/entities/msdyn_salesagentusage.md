---
logical: "msdyn_salesagentusage"
display: "SalesAgentUsage"
entitySetName: "msdyn_salesagentusages"
primaryId: "msdyn_salesagentusageid"
primaryName: "msdyn_eventid"
tableType: "Standard"
ownership: "UserOwned"
---

# SalesAgentUsage

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentusage` |
| Display name | SalesAgentUsage |
| Display (plural) | SalesAgentUsages |
| Schema name | `msdyn_SalesAgentUsage` |
| Entity set (Web API) | `msdyn_salesagentusages` |
| Primary id attribute | `msdyn_salesagentusageid` |
| Primary name attribute | `msdyn_eventid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentusages?$select=msdyn_eventid&$top=10
GET /api/data/v9.2/msdyn_salesagentusages(<guid>)
POST /api/data/v9.2/msdyn_salesagentusages
PATCH /api/data/v9.2/msdyn_salesagentusages(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentusages(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AgentName`, `msdyn_EventDate`, `msdyn_EventId`, `msdyn_EventJson`, `msdyn_SalesAgentUsageId`, `msdyn_UserId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesagentusage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesagentusage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentusage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentusage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentusage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_salesagentusage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesagentusage` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesagentusage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentusage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentusage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentusage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentusage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesagentusage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentusage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesagentusage.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesagentusage.md) on 2026-05-06.