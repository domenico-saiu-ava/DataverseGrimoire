---
logical: "msfp_unsubscribedrecipient"
display: "Customer Voice unsubscribed recipient"
entitySetName: "msfp_unsubscribedrecipients"
primaryId: "msfp_unsubscribedrecipientid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice unsubscribed recipient

Email address of an unsubscribed respondent.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_unsubscribedrecipient` |
| Display name | Customer Voice unsubscribed recipient |
| Display (plural) | Customer Voice unsubscribed recipients |
| Schema name | `msfp_unsubscribedrecipient` |
| Entity set (Web API) | `msfp_unsubscribedrecipients` |
| Primary id attribute | `msfp_unsubscribedrecipientid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_unsubscribedrecipients?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_unsubscribedrecipients(<guid>)
POST /api/data/v9.2/msfp_unsubscribedrecipients
PATCH /api/data/v9.2/msfp_unsubscribedrecipients(<guid>)
DELETE /api/data/v9.2/msfp_unsubscribedrecipients(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_emailaddress`, `msfp_name`, `msfp_unsubscribedrecipientId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_unsubscribedrecipient` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_unsubscribedrecipient_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_unsubscribedrecipient_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_unsubscribedrecipient_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_unsubscribedrecipient_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msfp_unsubscribedrecipient` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_unsubscribedrecipient` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_unsubscribedrecipient` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_msfp_unsubscribedrecipient_msfp_surveyinvite` | _n/a_ | `msfp_unsubscribedrecipientsurveyinviteid` | _n/a_ |
| `msfp_unsubscribedrecipient_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_unsubscribedrecipient_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_unsubscribedrecipient_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_unsubscribedrecipient_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_unsubscribedrecipient_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_unsubscribedrecipient_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_unsubscribedrecipient.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_unsubscribedrecipient.md) on 2026-05-06.