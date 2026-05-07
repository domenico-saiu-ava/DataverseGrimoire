---
logical: "msdyn_emailsentiment"
display: "Email Sentiment"
entitySetName: "msdyn_emailsentiments"
primaryId: "msdyn_emailsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Email Sentiment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_emailsentiment` |
| Display name | Email Sentiment |
| Display (plural) | Email Sentiments |
| Schema name | `msdyn_emailsentiment` |
| Entity set (Web API) | `msdyn_emailsentiments` |
| Primary id attribute | `msdyn_emailsentimentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_emailsentiments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_emailsentiments(<guid>)
POST /api/data/v9.2/msdyn_emailsentiments
PATCH /api/data/v9.2/msdyn_emailsentiments(<guid>)
DELETE /api/data/v9.2/msdyn_emailsentiments(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_email`, `msdyn_emailsentimentId`, `msdyn_name`, `msdyn_responsetime`, `msdyn_sentimentscore`, `msdyn_timezone`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_emailsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_emailsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_emailsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_emailsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_emailsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_email_email_msdyn_emailsentiment` | [email](email.md) | `msdyn_email` | `msdyn_email` |
| `owner_msdyn_emailsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_emailsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_emailsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_emailsentiment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_emailsentiment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_emailsentiment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_emailsentiment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_emailsentiment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_emailsentiment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_emailsentiment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_emailsentiment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_emailsentiment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_emailsentiment.md) on 2026-05-06.