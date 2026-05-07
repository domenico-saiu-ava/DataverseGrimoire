---
logical: "msdynmkt_topic"
display: "Argomento"
entitySetName: "msdynmkt_topics"
primaryId: "msdynmkt_topicid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Argomento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_topic` |
| Display name | Argomento |
| Display (plural) | Argomenti |
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

Writable: **11** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdynmkt_name`, `msdynmkt_purposeid`, `msdynmkt_topicid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_topic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_topic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_topic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_topic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_topic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_topic` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_topic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_topic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdynmkt_msdynmkt_purpose_msdynmkt_topic` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_purposeid` | `msdynmkt_purposeId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_topic_SyncErrors` | [msdynmkt_topic](msdynmkt_topic.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_topic` |
| `msdynmkt_topic_DuplicateMatchingRecord` | [msdynmkt_topic](msdynmkt_topic.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_topic` |
| `msdynmkt_topic_DuplicateBaseRecord` | [msdynmkt_topic](msdynmkt_topic.md) | `baserecordid` | `baserecordid_msdynmkt_topic` |
| `msdynmkt_topic_AsyncOperations` | [msdynmkt_topic](msdynmkt_topic.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_topic` |
| `msdynmkt_topic_MailboxTrackingFolders` | [msdynmkt_topic](msdynmkt_topic.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_topic` |
| `msdynmkt_topic_UserEntityInstanceDatas` | [msdynmkt_topic](msdynmkt_topic.md) | `objectid` | `objectid_msdynmkt_topic` |
| `msdynmkt_topic_ProcessSession` | [msdynmkt_topic](msdynmkt_topic.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_topic` |
| `msdynmkt_topic_BulkDeleteFailures` | [msdynmkt_topic](msdynmkt_topic.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_topic` |
| `msdynmkt_topic_PrincipalObjectAttributeAccesses` | [msdynmkt_topic](msdynmkt_topic.md) | `objectid` | `objectid_msdynmkt_topic` |
| `msdynmkt_msdynmkt_contactpointconsent4_topicId_msd` | [msdynmkt_topic](msdynmkt_topic.md) | `msdynmkt_topicid` | `msdynmkt_topicId` |


## Source

Generated from [msdynmkt_topic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_topic')) on 2026-05-07.