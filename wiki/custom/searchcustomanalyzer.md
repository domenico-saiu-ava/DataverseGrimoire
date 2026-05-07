---
logical: "searchcustomanalyzer"
display: "SearchCustomAnalyzer"
entitySetName: "searchcustomanalyzers"
primaryId: "searchcustomanalyzerid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **8** · Read-only: **9**

### Writable

`importsequencenumber`, `name`, `overriddencreatedon`, `searchcustomanalyzerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`analyzers`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_searchcustomanalyzer_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_searchcustomanalyzer_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_searchcustomanalyzer_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_searchcustomanalyzer_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_searchcustomanalyzer` | [organization](organization.md) | `organizationid` | `organizationid` |
| `FileAttachment_searchcustomanalyzer_analyzers` | [fileattachment](fileattachment.md) | `analyzers` | `analyzers` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `searchcustomanalyzer_SyncErrors` | [searchcustomanalyzer](searchcustomanalyzer.md) | `regardingobjectid` | `regardingobjectid_searchcustomanalyzer` |
| `searchcustomanalyzer_DuplicateMatchingRecord` | [searchcustomanalyzer](searchcustomanalyzer.md) | `duplicaterecordid` | `duplicaterecordid_searchcustomanalyzer` |
| `searchcustomanalyzer_DuplicateBaseRecord` | [searchcustomanalyzer](searchcustomanalyzer.md) | `baserecordid` | `baserecordid_searchcustomanalyzer` |
| `searchcustomanalyzer_AsyncOperations` | [searchcustomanalyzer](searchcustomanalyzer.md) | `regardingobjectid` | `regardingobjectid_searchcustomanalyzer` |
| `searchcustomanalyzer_MailboxTrackingFolders` | [searchcustomanalyzer](searchcustomanalyzer.md) | `regardingobjectid` | `regardingobjectid_searchcustomanalyzer` |
| `searchcustomanalyzer_UserEntityInstanceDatas` | [searchcustomanalyzer](searchcustomanalyzer.md) | `objectid` | `objectid_searchcustomanalyzer` |
| `searchcustomanalyzer_ProcessSession` | [searchcustomanalyzer](searchcustomanalyzer.md) | `regardingobjectid` | `regardingobjectid_searchcustomanalyzer` |
| `searchcustomanalyzer_BulkDeleteFailures` | [searchcustomanalyzer](searchcustomanalyzer.md) | `regardingobjectid` | `regardingobjectid_searchcustomanalyzer` |
| `searchcustomanalyzer_PrincipalObjectAttributeAccesses` | [searchcustomanalyzer](searchcustomanalyzer.md) | `objectid` | `objectid_searchcustomanalyzer` |
| `searchcustomanalyzer_FileAttachments` | [searchcustomanalyzer](searchcustomanalyzer.md) | `objectid` | `objectid_searchcustomanalyzer` |


## Source

Generated from [searchcustomanalyzer (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='searchcustomanalyzer')) on 2026-05-07.