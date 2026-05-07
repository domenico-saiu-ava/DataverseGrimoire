---
logical: "msdynmkt_contactpointconsent4"
display: "Contact Point Consent"
entitySetName: "msdynmkt_contactpointconsent4s"
primaryId: "msdynmkt_contactpointconsent4id"
primaryName: "msdynmkt_contactpointvalue"
tableType: "Standard"
ownership: "UserOwned"
---

# Contact Point Consent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_contactpointconsent4` |
| Display name | Contact Point Consent |
| Display (plural) | Contact Point Consents |
| Schema name | `msdynmkt_contactpointconsent4` |
| Entity set (Web API) | `msdynmkt_contactpointconsent4s` |
| Primary id attribute | `msdynmkt_contactpointconsent4id` |
| Primary name attribute | `msdynmkt_contactpointvalue` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_contactpointconsent4s?$select=msdynmkt_contactpointvalue&$top=10
GET /api/data/v9.2/msdynmkt_contactpointconsent4s(<guid>)
POST /api/data/v9.2/msdynmkt_contactpointconsent4s
PATCH /api/data/v9.2/msdynmkt_contactpointconsent4s(<guid>)
DELETE /api/data/v9.2/msdynmkt_contactpointconsent4s(<guid>)
```

## Attributes

Writable: **23** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_contactpointconsent4Id`, `msdynmkt_contactpointconsenttype`, `msdynmkt_contactpointtype`, `msdynmkt_contactpointvalue`, `msdynmkt_logicalreason`, `msdynmkt_messageId`, `msdynmkt_messageidIdType`, `msdynmkt_migrationtimestamp`, `msdynmkt_modifiedonbehalf`, `msdynmkt_purposeId`, `msdynmkt_reason`, `msdynmkt_source`, `msdynmkt_topicId`, `msdynmkt_uionly_value_tracking`, `msdynmkt_value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_contactpointconsent4` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `email_msdynmkt_contactpointconsent4_messageid` | [email](email.md) | `msdynmkt_messageid` | `email_msdynmkt_messageid` |
| `lk_msdynmkt_contactpointconsent4_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_contactpointconsent4_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_contactpointconsent4_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_contactpointconsent4_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdynmkt_msdynmkt_contactpointconsent4_purposeId_m` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_purposeid` | `msdynmkt_purposeId` |
| `msdynmkt_msdynmkt_contactpointconsent4_topicId_msd` | [msdynmkt_topic](msdynmkt_topic.md) | `msdynmkt_topicid` | `msdynmkt_topicId` |
| `owner_msdynmkt_contactpointconsent4` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_contactpointconsent4` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_contactpointconsent4` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_contactpointconsent4_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_contactpointconsent4_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_contactpointconsent4_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_contactpointconsent4_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_contactpointconsent4_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_contactpointconsent4_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_contactpointconsent4_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_contactpointconsent4_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_contactpointconsent4.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_contactpointconsent4.md) on 2026-05-06.