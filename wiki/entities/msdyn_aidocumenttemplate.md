---
logical: "msdyn_aidocumenttemplate"
display: "AI Document Template"
entitySetName: "msdyn_aidocumenttemplates"
primaryId: "msdyn_aidocumenttemplateid"
primaryName: "msdyn_filename"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Document Template

Stores AI-powered document templates, including file content, metadata, and ownership details, to support automated document generation and management scenarios in Power Platform solutions.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aidocumenttemplate` |
| Display name | AI Document Template |
| Display (plural) | AI Document Templates |
| Schema name | `msdyn_aidocumenttemplate` |
| Entity set (Web API) | `msdyn_aidocumenttemplates` |
| Primary id attribute | `msdyn_aidocumenttemplateid` |
| Primary name attribute | `msdyn_filename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aidocumenttemplates?$select=msdyn_filename&$top=10
GET /api/data/v9.2/msdyn_aidocumenttemplates(<guid>)
POST /api/data/v9.2/msdyn_aidocumenttemplates
PATCH /api/data/v9.2/msdyn_aidocumenttemplates(<guid>)
DELETE /api/data/v9.2/msdyn_aidocumenttemplates(<guid>)
```

## Attributes

Writable: **13** · Read-only: **20**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_aidocumenttemplateId`, `msdyn_filename`, `msdyn_mimetype`, `msdyn_uniquename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_document`, `msdyn_document_Name`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aidocumenttemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_aidocumenttemplate_msdyn_document` | [fileattachment](fileattachment.md) | `msdyn_document` | `msdyn_aidocumenttemplatefileid` |
| `lk_msdyn_aidocumenttemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aidocumenttemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aidocumenttemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aidocumenttemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_aidocumenttemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aidocumenttemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aidocumenttemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aidocumenttemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aidocumenttemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aidocumenttemplate_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aidocumenttemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aidocumenttemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aidocumenttemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aidocumenttemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aidocumenttemplate_msdyn_aiconfig` | [msdyn_aidocumenttemplateid](msdyn_aidocumenttemplateid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_aidocumenttemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aidocumenttemplate.md) on 2026-05-06.