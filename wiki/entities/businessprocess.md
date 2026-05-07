---
logical: "businessprocess"
display: "Business Process"
entitySetName: "businessprocesses"
primaryId: "businessprocessid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Business Process

## Identity

| Property | Value |
| --- | --- |
| Logical name | `businessprocess` |
| Display name | Business Process |
| Display (plural) | Business Processes |
| Schema name | `businessprocess` |
| Entity set (Web API) | `businessprocesses` |
| Primary id attribute | `businessprocessid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/businessprocesses?$select=name&$top=10
GET /api/data/v9.2/businessprocesses(<guid>)
POST /api/data/v9.2/businessprocesses
PATCH /api/data/v9.2/businessprocesses(<guid>)
DELETE /api/data/v9.2/businessprocesses(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`businessprocessId`, `description`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `processingcontext`, `processmap`, `processmapcreatedon`, `processmapstatus`, `processmapversion`, `rootworkflowid`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_businessprocess` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_businessprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_businessprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_businessprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_businessprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_businessprocess` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_businessprocess` | [team](team.md) | `owningteam` | `owningteam` |
| `user_businessprocess` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `workflow_businessprocess` | [workflow](workflow.md) | `rootworkflowid` | `rootworkflowid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `businessprocess_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `businessprocess_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `businessprocess_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `businessprocess_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `businessprocess_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `businessprocess_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `businessprocess_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `businessprocess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_businessprocess_msdyn_pminferredtask_msdyn_businessprocessid` | _n/a_ | `msdyn_businessprocessid` | _n/a_ |


## Source

Generated from [businessprocess.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/businessprocess.md) on 2026-05-06.