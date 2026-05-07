---
logical: "msdyn_salescopilotjobstatus"
display: "Sales Copilot Job Status"
entitySetName: "msdyn_salescopilotjobstatuses"
primaryId: "msdyn_salescopilotjobstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales Copilot Job Status

Sales Copilot Job Status

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotjobstatus` |
| Display name | Sales Copilot Job Status |
| Display (plural) | Sales Copilot Job Statuses |
| Schema name | `msdyn_salescopilotjobstatus` |
| Entity set (Web API) | `msdyn_salescopilotjobstatuses` |
| Primary id attribute | `msdyn_salescopilotjobstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotjobstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salescopilotjobstatuses(<guid>)
POST /api/data/v9.2/msdyn_salescopilotjobstatuses
PATCH /api/data/v9.2/msdyn_salescopilotjobstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotjobstatuses(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_jobtype`, `msdyn_lastruntime`, `msdyn_name`, `msdyn_salescopilotjobstatusId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salescopilotjobstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salescopilotjobstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotjobstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotjobstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotjobstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_salescopilotjobstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salescopilotjobstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salescopilotjobstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotjobstatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotjobstatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotjobstatus_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salescopilotjobstatus_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salescopilotjobstatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotjobstatus_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salescopilotjobstatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotjobstatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salescopilotjobstatus.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salescopilotjobstatus.md) on 2026-05-06.