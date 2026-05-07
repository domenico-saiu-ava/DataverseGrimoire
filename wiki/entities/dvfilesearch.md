---
logical: "dvfilesearch"
display: "DVFileSearch"
entitySetName: "dvfilesearchs"
primaryId: "dvfilesearchid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# DVFileSearch

DVFileSearches Component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvfilesearch` |
| Display name | DVFileSearch |
| Display (plural) | DVFileSearches |
| Schema name | `DVFileSearch` |
| Entity set (Web API) | `dvfilesearchs` |
| Primary id attribute | `dvfilesearchid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvfilesearchs?$select=name&$top=10
GET /api/data/v9.2/dvfilesearchs(<guid>)
POST /api/data/v9.2/dvfilesearchs
PATCH /api/data/v9.2/dvfilesearchs(<guid>)
DELETE /api/data/v9.2/dvfilesearchs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **18**

### Writable

`DVFileSearchId`, `DVTableSearch`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_dvfilesearch` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `DVTableSearch_DVFileSearch` | [dvtablesearch](dvtablesearch.md) | `dvtablesearch` | `DVTableSearch` |
| `lk_dvfilesearch_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvfilesearch_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvfilesearch_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvfilesearch_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_dvfilesearch` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_dvfilesearch` | [team](team.md) | `owningteam` | `owningteam` |
| `user_dvfilesearch` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPluginOperation_DVFileSearch_DVFileSear` | _n/a_ | `dvfilesearch` | _n/a_ |
| `dvfilesearch_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvfilesearch_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `DVFileSearch_DVFileSearch_DVFileSearchEnt` | _n/a_ | `dvfilesearch` | _n/a_ |
| `dvfilesearch_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvfilesearch_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `dvfilesearch_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvfilesearch_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesite_dvfilesearch` | [dvfilesearchid](dvfilesearchid.md) | _n/a_ | _n/a_ |

## Source

Generated from [dvfilesearch.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/dvfilesearch.md) on 2026-05-06.