---
logical: "msdyn_aitestrunbatch"
display: "AI Test Run Batch"
entitySetName: "msdyn_aitestrunbatches"
primaryId: "msdyn_aitestrunbatchid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Test Run Batch

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitestrunbatch` |
| Display name | AI Test Run Batch |
| Display (plural) | AI Test Run Batch |
| Schema name | `msdyn_AITestRunBatch` |
| Entity set (Web API) | `msdyn_aitestrunbatches` |
| Primary id attribute | `msdyn_aitestrunbatchid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitestrunbatches?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aitestrunbatches(<guid>)
POST /api/data/v9.2/msdyn_aitestrunbatches
PATCH /api/data/v9.2/msdyn_aitestrunbatches(<guid>)
DELETE /api/data/v9.2/msdyn_aitestrunbatches(<guid>)
```

## Attributes

Writable: **20** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AccuracyScore`, `msdyn_AIObjectId`, `msdyn_AIObjectType`, `msdyn_AITestRunBatchId`, `msdyn_BatchRunStatus`, `msdyn_CompletedOn`, `msdyn_Description`, `msdyn_ErrorMessage`, `msdyn_LastReviewedOn`, `msdyn_Name`, `msdyn_RunDuration`, `msdyn_StartedOn`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aitestrunbatch` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aitestrunbatch_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitestrunbatch_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitestrunbatch_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitestrunbatch_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_aitestrunbatch` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aitestrunbatch` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aitestrunbatch` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitestrunbatch_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestrunbatch_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestrunbatch_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aitestrunbatch_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aitestrunbatch_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestrunbatch_msdyn_aitestrun` | _n/a_ | `msdyn_aitestrunbatchid` | _n/a_ |
| `msdyn_aitestrunbatch_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aitestrunbatch_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestrunbatch_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aitestrunbatch.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aitestrunbatch.md) on 2026-05-06.