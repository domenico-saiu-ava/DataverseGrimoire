---
logical: "msdyn_knowledgeinteractioninsight"
display: "Knowledge Interaction Insight"
entitySetName: "msdyn_knowledgeinteractioninsights"
primaryId: "msdyn_knowledgeinteractioninsightid"
primaryName: "msdyn_interactiontype"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge Interaction Insight

Knowledge Interaction Insight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgeinteractioninsight` |
| Display name | Knowledge Interaction Insight |
| Display (plural) | Knowledge Interaction Insights |
| Schema name | `msdyn_knowledgeinteractioninsight` |
| Entity set (Web API) | `msdyn_knowledgeinteractioninsights` |
| Primary id attribute | `msdyn_knowledgeinteractioninsightid` |
| Primary name attribute | `msdyn_interactiontype` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgeinteractioninsights?$select=msdyn_interactiontype&$top=10
GET /api/data/v9.2/msdyn_knowledgeinteractioninsights(<guid>)
POST /api/data/v9.2/msdyn_knowledgeinteractioninsights
PATCH /api/data/v9.2/msdyn_knowledgeinteractioninsights(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgeinteractioninsights(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ArticleRank`, `msdyn_ArticleRecordId`, `msdyn_ArticleRelevance`, `msdyn_InteractionContext`, `msdyn_InteractionType`, `msdyn_knowledgeinteractioninsightId`, `msdyn_KnowledgeOperationId`, `msdyn_KnowledgeOperationType`, `msdyn_TimeStamp`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_knowledgeinteractioninsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_knowledgeinteractioninsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgeinteractioninsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgeinteractioninsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgeinteractioninsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_knowledgeinteractioninsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_knowledgeinteractioninsight` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_knowledgeinteractioninsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgeinteractioninsight_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeinteractioninsight_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeinteractioninsight_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_knowledgeinteractioninsight_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgeinteractioninsight_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeinteractioninsight_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_knowledgeinteractioninsight.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_knowledgeinteractioninsight.md) on 2026-05-06.