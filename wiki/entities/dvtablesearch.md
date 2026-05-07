---
logical: "dvtablesearch"
display: "DVTableSearch"
entitySetName: "dvtablesearchs"
primaryId: "dvtablesearchid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# DVTableSearch

DVTableSearches component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvtablesearch` |
| Display name | DVTableSearch |
| Display (plural) | DVTableSearches |
| Schema name | `DVTableSearch` |
| Entity set (Web API) | `dvtablesearchs` |
| Primary id attribute | `dvtablesearchid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvtablesearchs?$select=name&$top=10
GET /api/data/v9.2/dvtablesearchs(<guid>)
POST /api/data/v9.2/dvtablesearchs
PATCH /api/data/v9.2/dvtablesearchs(<guid>)
DELETE /api/data/v9.2/dvtablesearchs(<guid>)
```

## Attributes

Writable: **20** · Read-only: **18**

### Writable

`AppId`, `AppModuleId`, `AppModuleUniqueName`, `AppType`, `ConnectionReference`, `DVTableSearchId`, `ImportSequenceNumber`, `IsCustomizable`, `KnowledgeConfig`, `knowledgesourceconsumerid`, `knowledgesourceprofileid`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `SearchType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_dvtablesearch` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ConnectionReference_DVTableSearch` | [connectionreference](connectionreference.md) | `connectionreference` | `ConnectionReference` |
| `lk_dvtablesearch_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvtablesearch_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvtablesearch_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvtablesearch_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_dvtablesearch` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_dvtablesearch` | [team](team.md) | `owningteam` | `owningteam` |
| `user_dvtablesearch` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPluginOperation_DVTableSearch_DVTableSe` | _n/a_ | `dvtablesearch` | _n/a_ |
| `CopilotExampleQuestion_DVTableSearch` | _n/a_ | `skillid` | _n/a_ |
| `CopilotGlossaryTerm_DVTableSearch` | _n/a_ | `skill` | _n/a_ |
| `dvtablesearch_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvtablesearch_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `DVTableSearch_DVFileSearch` | _n/a_ | `dvtablesearch` | _n/a_ |
| `DVTableSearch_DVTableSearch_DVTableSearch` | _n/a_ | `dvtablesearch` | _n/a_ |
| `dvtablesearch_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvtablesearch_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `dvtablesearch_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvtablesearch_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_dvtablesearch` | [dvtablesearchid](dvtablesearchid.md) | _n/a_ | _n/a_ |
| `powerpagesite_dvtablesearch` | [dvtablesearchid](dvtablesearchid.md) | _n/a_ | _n/a_ |

## Source

Generated from [dvtablesearch.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/dvtablesearch.md) on 2026-05-06.