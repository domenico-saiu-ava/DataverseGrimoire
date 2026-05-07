---
logical: "msdyn_aitestcasedocument"
display: "AI Test Case Document"
entitySetName: "msdyn_aitestcasedocuments"
primaryId: "msdyn_aitestcasedocumentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Test Case Document

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitestcasedocument` |
| Display name | AI Test Case Document |
| Display (plural) | AI Test Case Document |
| Schema name | `msdyn_AITestCaseDocument` |
| Entity set (Web API) | `msdyn_aitestcasedocuments` |
| Primary id attribute | `msdyn_aitestcasedocumentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitestcasedocuments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aitestcasedocuments(<guid>)
POST /api/data/v9.2/msdyn_aitestcasedocuments
PATCH /api/data/v9.2/msdyn_aitestcasedocuments(<guid>)
DELETE /api/data/v9.2/msdyn_aitestcasedocuments(<guid>)
```

## Attributes

Writable: **14** · Read-only: **20**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AITestCaseDocumentId`, `msdyn_AITestCaseInputId`, `msdyn_Description`, `msdyn_InputId`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_InputFile`, `msdyn_InputFile_Name`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aitestcasedocument` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_AITestCaseDocument_msdyn_InputFile` | [fileattachment](fileattachment.md) | `msdyn_inputfile` | `msdyn_inputfile` |
| `lk_msdyn_aitestcasedocument_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitestcasedocument_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitestcasedocument_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitestcasedocument_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_aitestcaseinput_msdyn_aitestcasedocument` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `msdyn_aitestcaseinputid` | `msdyn_AITestCaseInputId` |
| `owner_msdyn_aitestcasedocument` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aitestcasedocument` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aitestcasedocument` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitestcasedocument_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcasedocument_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcasedocument_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aitestcasedocument_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcasedocument_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aitestcasedocument_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestcasedocument_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aitestcasedocument.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aitestcasedocument.md) on 2026-05-06.