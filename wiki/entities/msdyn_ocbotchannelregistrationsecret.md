---
logical: "msdyn_ocbotchannelregistrationsecret"
display: "Bot Channel Registration Secret"
entitySetName: "msdyn_ocbotchannelregistrationsecrets"
primaryId: "msdyn_ocbotchannelregistrationsecretid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Bot Channel Registration Secret

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocbotchannelregistrationsecret` |
| Display name | Bot Channel Registration Secret |
| Display (plural) | Bot Channel Registration Secrets |
| Schema name | `msdyn_ocbotchannelregistrationsecret` |
| Entity set (Web API) | `msdyn_ocbotchannelregistrationsecrets` |
| Primary id attribute | `msdyn_ocbotchannelregistrationsecretid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocbotchannelregistrationsecrets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocbotchannelregistrationsecrets(<guid>)
POST /api/data/v9.2/msdyn_ocbotchannelregistrationsecrets
PATCH /api/data/v9.2/msdyn_ocbotchannelregistrationsecrets(<guid>)
DELETE /api/data/v9.2/msdyn_ocbotchannelregistrationsecrets(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_ocbotchannelregistrationid`, `msdyn_ocbotchannelregistrationsecretId`, `msdyn_securemsappsecret`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocbotchannelregistrationsecret` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocbotchannelregistrationsecret_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocbotchannelregistrationsecret_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocbotchannelregistrationsecret_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocbotchannelregistrationsecret_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocbotchannelregistration_msdyn_ocbotchannelregistrationsecret_ocbotchannelregistrationid` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `msdyn_ocbotchannelregistrationid` | `msdyn_ocbotchannelregistrationid` |
| `owner_msdyn_ocbotchannelregistrationsecret` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocbotchannelregistrationsecret` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocbotchannelregistrationsecret` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocbotchannelregistrationsecret_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocbotchannelregistrationsecret_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocbotchannelregistrationsecret_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocbotchannelregistrationsecret_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocbotchannelregistrationsecret_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocbotchannelregistrationsecret_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocbotchannelregistrationsecret_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocbotchannelregistrationsecret_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocbotchannelregistrationsecret.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocbotchannelregistrationsecret.md) on 2026-05-06.