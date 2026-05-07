---
logical: "approvalprocess"
display: "Approval Process"
entitySetName: "approvalprocesses"
primaryId: "approvalprocessid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Approval Process

Approval Process for Multi-Stage Approvals

## Identity

| Property | Value |
| --- | --- |
| Logical name | `approvalprocess` |
| Display name | Approval Process |
| Display (plural) | Approval Processes |
| Schema name | `approvalprocess` |
| Entity set (Web API) | `approvalprocesses` |
| Primary id attribute | `approvalprocessid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/approvalprocesses?$select=name&$top=10
GET /api/data/v9.2/approvalprocesses(<guid>)
POST /api/data/v9.2/approvalprocesses
PATCH /api/data/v9.2/approvalprocesses(<guid>)
DELETE /api/data/v9.2/approvalprocesses(<guid>)
```

## Attributes

Writable: **14** · Read-only: **22**

### Writable

`approvalprocessId`, `ImportSequenceNumber`, `IntroducedVersion`, `IsCustomizable`, `MetadataVersion`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Inputs`, `Inputs_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `Stages`, `Stages_Name`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_approvalprocess` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_approvalprocess_Inputs` | [fileattachment](fileattachment.md) | `inputs` | `inputs` |
| `FileAttachment_approvalprocess_Stages` | [fileattachment](fileattachment.md) | `stages` | `stages` |
| `lk_approvalprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_approvalprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_approvalprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_approvalprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_approvalprocess` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_approvalprocess` | [team](team.md) | `owningteam` | `owningteam` |
| `user_approvalprocess` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalprocess_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `approvalprocess_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalprocess_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalprocess_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `approvalprocess_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `approvalprocess_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `approvalprocess_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalprocess_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `approvalprocess_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalprocess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [approvalprocess.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/approvalprocess.md) on 2026-05-06.