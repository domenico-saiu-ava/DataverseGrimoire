---
logical: "approvalstageintelligent"
display: "Approval Stage Intelligent"
entitySetName: "approvalstageintelligents"
primaryId: "approvalstageintelligentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Approval Stage Intelligent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `approvalstageintelligent` |
| Display name | Approval Stage Intelligent |
| Display (plural) | Approval Stage Intelligents |
| Schema name | `approvalstageintelligent` |
| Entity set (Web API) | `approvalstageintelligents` |
| Primary id attribute | `approvalstageintelligentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/approvalstageintelligents?$select=name&$top=10
GET /api/data/v9.2/approvalstageintelligents(<guid>)
POST /api/data/v9.2/approvalstageintelligents
PATCH /api/data/v9.2/approvalstageintelligents(<guid>)
DELETE /api/data/v9.2/approvalstageintelligents(<guid>)
```

## Attributes

Writable: **17** · Read-only: **14**

### Writable

`AiModelId`, `Approval`, `approvalstageintelligentId`, `ImportSequenceNumber`, `Name`, `NextSteps`, `NextStepsResult`, `NextStepsResultValue`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PredictionRationale`, `PredictionResponse`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Inputs`, `Inputs_Name`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstageintelligent_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |
| `business_unit_approvalstageintelligent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_approvalstageintelligent_Inputs` | [fileattachment](fileattachment.md) | `inputs` | `inputs` |
| `lk_approvalstageintelligent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_approvalstageintelligent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_approvalstageintelligent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_approvalstageintelligent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_approvalstageintelligent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_approvalstageintelligent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_approvalstageintelligent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstageintelligent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageintelligent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageintelligent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `approvalstageintelligent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `approvalstageintelligent_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `approvalstageintelligent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageintelligent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `approvalstageintelligent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageintelligent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageorder_stageintelligent_approvalstageintelligent` | _n/a_ | `stageintelligent` | _n/a_ |


## Source

Generated from [approvalstageintelligent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/approvalstageintelligent.md) on 2026-05-06.