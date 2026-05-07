---
logical: "msdyn_ocsessionsentiment"
display: "Session Sentiment"
entitySetName: "msdyn_ocsessionsentiments"
primaryId: "msdyn_ocsessionsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Session Sentiment

Stores the session level sentiment for customer interactions calculated using AI.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsessionsentiment` |
| Display name | Session Sentiment |
| Display (plural) | Session Sentiments |
| Schema name | `msdyn_ocsessionsentiment` |
| Entity set (Web API) | `msdyn_ocsessionsentiments` |
| Primary id attribute | `msdyn_ocsessionsentimentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsessionsentiments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsessionsentiments(<guid>)
POST /api/data/v9.2/msdyn_ocsessionsentiments
PATCH /api/data/v9.2/msdyn_ocsessionsentiments(<guid>)
DELETE /api/data/v9.2/msdyn_ocsessionsentiments(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_ocsessionsentimentId`, `msdyn_omnichannelsession`, `msdyn_predictedlanguage`, `msdyn_sentimentmodelversion`, `msdyn_sentimentpulse`, `msdyn_sentimenttransition`, `msdyn_sentimentzone`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocsessionsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocsessionsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsessionsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsessionsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsessionsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocsession_msdyn_ocsessionsentiment_omnichannelsession` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_omnichannelsession` | `msdyn_omnichannelsession` |
| `owner_msdyn_ocsessionsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocsessionsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocsessionsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsessionsentiment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessionsentiment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessionsentiment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessionsentiment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsessionsentiment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessionsentiment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocsessionsentiment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsessionsentiment.md) on 2026-05-06.