---
logical: "msdyn_ocsentimentdailytopic"
display: "Sentiment daily topic"
entitySetName: "msdyn_ocsentimentdailytopics"
primaryId: "msdyn_ocsentimentdailytopicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sentiment daily topic

1. store properties regarding each topic cluster
2. used for dashboard visualization (like topic example) and calculation for topic mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsentimentdailytopic` |
| Display name | Sentiment daily topic |
| Display (plural) | Sentiment daily topic |
| Schema name | `msdyn_ocsentimentdailytopic` |
| Entity set (Web API) | `msdyn_ocsentimentdailytopics` |
| Primary id attribute | `msdyn_ocsentimentdailytopicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsentimentdailytopics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsentimentdailytopics(<guid>)
POST /api/data/v9.2/msdyn_ocsentimentdailytopics
PATCH /api/data/v9.2/msdyn_ocsentimentdailytopics(<guid>)
DELETE /api/data/v9.2/msdyn_ocsentimentdailytopics(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_conversationcount`, `msdyn_conversationexample`, `msdyn_name`, `msdyn_ocsentimentdailytopicId`, `msdyn_sentimentdriverintradayweightimpact`, `msdyn_sentimentscore`, `msdyn_topiccountpercentage`, `msdyn_topicdate`, `msdyn_topicindex`, `msdyn_topicname`, `msdyn_weeklyid`, `msdyn_weeklytopicid`, `msdyn_weeklytopicname`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocsentimentdailytopic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocsentimentdailytopic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsentimentdailytopic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsentimentdailytopic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsentimentdailytopic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_ocsentimentdailytopic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocsentimentdailytopic` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocsentimentdailytopic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid` | _n/a_ | `msdyn_dailytopicid` | _n/a_ |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid` | _n/a_ | `msdyn_dailytopicid` | _n/a_ |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid` | _n/a_ | `msdyn_basetopicid` | _n/a_ |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid` | _n/a_ | `msdyn_dailytopicid` | _n/a_ |
| `msdyn_ocsentimentdailytopic_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopic_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopic_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocsentimentdailytopic_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocsentimentdailytopic_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsentimentdailytopic_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopic_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocsentimentdailytopic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsentimentdailytopic.md) on 2026-05-06.