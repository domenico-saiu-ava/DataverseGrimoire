---
logical: "msdyn_ocsentimentdailytopictrending"
display: "Sentiment daily topic trending"
entitySetName: "msdyn_ocsentimentdailytopictrendings"
primaryId: "msdyn_ocsentimentdailytopictrendingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sentiment daily topic trending

1. Store the day to day topic mapping information
2. Used for dashboard visualization

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsentimentdailytopictrending` |
| Display name | Sentiment daily topic trending |
| Display (plural) | Sentiment daily topic trending |
| Schema name | `msdyn_ocsentimentdailytopictrending` |
| Entity set (Web API) | `msdyn_ocsentimentdailytopictrendings` |
| Primary id attribute | `msdyn_ocsentimentdailytopictrendingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsentimentdailytopictrendings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsentimentdailytopictrendings(<guid>)
POST /api/data/v9.2/msdyn_ocsentimentdailytopictrendings
PATCH /api/data/v9.2/msdyn_ocsentimentdailytopictrendings(<guid>)
DELETE /api/data/v9.2/msdyn_ocsentimentdailytopictrendings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_basetopicid`, `msdyn_dailytopicid`, `msdyn_name`, `msdyn_ocsentimentdailytopictrendingId`, `msdyn_similarityscore`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocsentimentdailytopictrending` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocsentimentdailytopictrending_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsentimentdailytopictrending_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsentimentdailytopictrending_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsentimentdailytopictrending_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_basetopicid` | `msdyn_basetopicid` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_dailytopicid` | `msdyn_dailytopicid` |
| `owner_msdyn_ocsentimentdailytopictrending` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocsentimentdailytopictrending` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocsentimentdailytopictrending` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsentimentdailytopictrending_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopictrending_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopictrending_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocsentimentdailytopictrending_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocsentimentdailytopictrending_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopictrending_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsentimentdailytopictrending_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsentimentdailytopictrending_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocsentimentdailytopictrending.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsentimentdailytopictrending.md) on 2026-05-06.