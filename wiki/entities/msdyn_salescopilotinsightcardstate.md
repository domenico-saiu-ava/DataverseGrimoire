---
logical: "msdyn_salescopilotinsightcardstate"
display: "Sales Copilot Insight Card State"
entitySetName: "msdyn_salescopilotinsightcardstates"
primaryId: "msdyn_salescopilotinsightcardstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales Copilot Insight Card State

This entity used to store actions performed by users on the entity like snooze/dismiss.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotinsightcardstate` |
| Display name | Sales Copilot Insight Card State |
| Display (plural) | Sales Copilot Insight Card States |
| Schema name | `msdyn_salescopilotinsightcardstate` |
| Entity set (Web API) | `msdyn_salescopilotinsightcardstates` |
| Primary id attribute | `msdyn_salescopilotinsightcardstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotinsightcardstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salescopilotinsightcardstates(<guid>)
POST /api/data/v9.2/msdyn_salescopilotinsightcardstates
PATCH /api/data/v9.2/msdyn_salescopilotinsightcardstates(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotinsightcardstates(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_insightcardstate`, `msdyn_name`, `msdyn_regardinginsightid`, `msdyn_regardinginsightlogicalname`, `msdyn_salescopilotinsightcardstateId`, `msdyn_snoozetill`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salescopilotinsightcardstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salescopilotinsightcardstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotinsightcardstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotinsightcardstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotinsightcardstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_salescopilotinsightcardstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salescopilotinsightcardstate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salescopilotinsightcardstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotinsightcardstate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotinsightcardstate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotinsightcardstate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salescopilotinsightcardstate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salescopilotinsightcardstate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotinsightcardstate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salescopilotinsightcardstate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotinsightcardstate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salescopilotinsightcardstate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salescopilotinsightcardstate.md) on 2026-05-06.