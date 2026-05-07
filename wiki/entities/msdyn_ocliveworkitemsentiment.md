---
logical: "msdyn_ocliveworkitemsentiment"
display: "Conversation Sentiment"
entitySetName: "msdyn_ocliveworkitemsentiments"
primaryId: "msdyn_ocliveworkitemsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Sentiment

Stores the machine learning generated customer sentiment of the communication  between the user and the customer

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemsentiment` |
| Display name | Conversation Sentiment |
| Display (plural) | Conversation Sentiment |
| Schema name | `msdyn_ocliveworkitemsentiment` |
| Entity set (Web API) | `msdyn_ocliveworkitemsentiments` |
| Primary id attribute | `msdyn_ocliveworkitemsentimentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemsentiments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemsentiments(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemsentiments
PATCH /api/data/v9.2/msdyn_ocliveworkitemsentiments(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemsentiments(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_ocliveworkitemid`, `msdyn_ocliveworkitemsentimentId`, `msdyn_predictedlanguage`, `msdyn_SentimentModelVersion`, `msdyn_SentimentPulse`, `msdyn_SentimentTransition`, `msdyn_SentimentZone`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocliveworkitemsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocliveworkitemsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemsentiment_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `owner_msdyn_ocliveworkitemsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocliveworkitemsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocliveworkitemsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitemsentiment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemsentiment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemsentiment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemsentiment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocliveworkitemsentiment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemsentiment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocliveworkitemsentiment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocliveworkitemsentiment.md) on 2026-05-06.