---
logical: "msdyn_knowledgesearchinsight"
display: "Knowledge Search Insight"
entitySetName: "msdyn_knowledgesearchinsights"
primaryId: "msdyn_knowledgesearchinsightid"
primaryName: "msdyn_searchterm"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge Search Insight

Knowledge Search Insight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgesearchinsight` |
| Display name | Knowledge Search Insight |
| Display (plural) | Knowledge Search Insights |
| Schema name | `msdyn_knowledgesearchinsight` |
| Entity set (Web API) | `msdyn_knowledgesearchinsights` |
| Primary id attribute | `msdyn_knowledgesearchinsightid` |
| Primary name attribute | `msdyn_searchterm` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgesearchinsights?$select=msdyn_searchterm&$top=10
GET /api/data/v9.2/msdyn_knowledgesearchinsights(<guid>)
POST /api/data/v9.2/msdyn_knowledgesearchinsights
PATCH /api/data/v9.2/msdyn_knowledgesearchinsights(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgesearchinsights(<guid>)
```

## Attributes

Writable: **24** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ApplicationName`, `msdyn_CorrelationId`, `msdyn_CustomControlId`, `msdyn_EntityRecordId`, `msdyn_EntityType`, `msdyn_Filters`, `msdyn_InitiatedBy`, `msdyn_knowledgesearchinsightId`, `msdyn_ResponseTime`, `msdyn_ResultCount`, `msdyn_SearchProviderId`, `msdyn_SearchProviderName`, `msdyn_SearchTerm`, `msdyn_SearchType`, `msdyn_SortBy`, `msdyn_TimeStamp`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_knowledgesearchinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_knowledgesearchinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgesearchinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgesearchinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgesearchinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_knowledgesearchinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_knowledgesearchinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_knowledgesearchinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgesearchinsight_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgesearchinsight_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgesearchinsight_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_knowledgesearchinsight_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_knowledgesearchinsight_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgesearchinsight_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgesearchinsight_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_knowledgesearchinsight.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_knowledgesearchinsight.md) on 2026-05-06.