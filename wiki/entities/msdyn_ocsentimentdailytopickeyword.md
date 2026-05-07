---
logical: "msdyn_ocsentimentdailytopickeyword"
display: "Sentiment daily topic keyword"
entitySetName: "msdyn_ocsentimentdailytopickeywords"
primaryId: "msdyn_ocsentimentdailytopickeywordid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sentiment daily topic keyword

1. Store the keyword and frequency for topic clusters
2. Used for word cloud in the dashboard

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsentimentdailytopickeyword` |
| Display name | Sentiment daily topic keyword |
| Display (plural) | Sentiment daily topic keyword |
| Schema name | `msdyn_ocsentimentdailytopickeyword` |
| Entity set (Web API) | `msdyn_ocsentimentdailytopickeywords` |
| Primary id attribute | `msdyn_ocsentimentdailytopickeywordid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsentimentdailytopickeywords?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsentimentdailytopickeywords(<guid>)
POST /api/data/v9.2/msdyn_ocsentimentdailytopickeywords
PATCH /api/data/v9.2/msdyn_ocsentimentdailytopickeywords(<guid>)
DELETE /api/data/v9.2/msdyn_ocsentimentdailytopickeywords(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_dailytopicid`, `msdyn_Keywords`, `msdyn_name`, `msdyn_ocsentimentdailytopickeywordId`, `msdyn_weeklyid`, `msdyn_weeklytopicid`, `msdyn_weeklytopicname`, `msdyn_wordfrequency`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocsentimentdailytopickeyword` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocsentimentdailytopickeyword_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsentimentdailytopickeyword_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsentimentdailytopickeyword_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsentimentdailytopickeyword_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_dailytopicid` | `msdyn_dailytopicid` |
| `owner_msdyn_ocsentimentdailytopickeyword` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocsentimentdailytopickeyword` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocsentimentdailytopickeyword` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsentimentdailytopickeyword_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopickeyword_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopickeyword_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocsentimentdailytopickeyword_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocsentimentdailytopickeyword_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopickeyword_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsentimentdailytopickeyword_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopickeyword_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocsentimentdailytopickeyword.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsentimentdailytopickeyword.md) on 2026-05-06.