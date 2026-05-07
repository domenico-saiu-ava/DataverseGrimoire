---
logical: "searchcustomanalyzer"
display: "SearchCustomAnalyzer"
entitySetName: "searchcustomanalyzers"
primaryId: "searchcustomanalyzerid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# SearchCustomAnalyzer

## Identity

| Property | Value |
| --- | --- |
| Logical name | `searchcustomanalyzer` |
| Display name | SearchCustomAnalyzer |
| Display (plural) | SearchCustomAnalyzer |
| Schema name | `searchcustomanalyzer` |
| Entity set (Web API) | `searchcustomanalyzers` |
| Primary id attribute | `searchcustomanalyzerid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/searchcustomanalyzers?$select=name&$top=10
GET /api/data/v9.2/searchcustomanalyzers(<guid>)
POST /api/data/v9.2/searchcustomanalyzers
PATCH /api/data/v9.2/searchcustomanalyzers(<guid>)
DELETE /api/data/v9.2/searchcustomanalyzers(<guid>)
```

## Attributes

Writable: **8** · Read-only: **10**

### Writable

`ImportSequenceNumber`, `name`, `OverriddenCreatedOn`, `searchcustomanalyzerId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`analyzers`, `analyzers_Name`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_searchcustomanalyzer_analyzers` | [fileattachment](fileattachment.md) | `analyzers` | `analyzers` |
| `lk_searchcustomanalyzer_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_searchcustomanalyzer_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_searchcustomanalyzer_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_searchcustomanalyzer_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_searchcustomanalyzer` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `searchcustomanalyzer_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchcustomanalyzer_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchcustomanalyzer_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `searchcustomanalyzer_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `searchcustomanalyzer_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `searchcustomanalyzer_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchcustomanalyzer_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `searchcustomanalyzer_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `searchcustomanalyzer_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [searchcustomanalyzer.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/searchcustomanalyzer.md) on 2026-05-06.