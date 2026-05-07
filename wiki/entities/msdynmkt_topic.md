---
logical: "msdynmkt_topic"
display: "Topic"
entitySetName: "msdynmkt_topics"
primaryId: "msdynmkt_topicid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Topic

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_topic` |
| Display name | Topic |
| Display (plural) | Topics |
| Schema name | `msdynmkt_topic` |
| Entity set (Web API) | `msdynmkt_topics` |
| Primary id attribute | `msdynmkt_topicid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_topics?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_topics(<guid>)
POST /api/data/v9.2/msdynmkt_topics
PATCH /api/data/v9.2/msdynmkt_topics(<guid>)
DELETE /api/data/v9.2/msdynmkt_topics(<guid>)
```

## Attributes

Writable: **12** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdynmkt_name`, `msdynmkt_purposeId`, `msdynmkt_topicId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_topic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_topic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_topic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_topic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_topic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdynmkt_msdynmkt_purpose_msdynmkt_topic` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_purposeid` | `msdynmkt_purposeId` |
| `owner_msdynmkt_topic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_topic` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_topic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_msdynmkt_contactpointconsent4_topicId_msd` | _n/a_ | `msdynmkt_topicid` | _n/a_ |
| `msdynmkt_topic_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_topic_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_topic_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_topic_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_topic_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_topic_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_topic_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_topic_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_topic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_topic.md) on 2026-05-06.