---
logical: "socialprofile"
display: "Social Profile"
entitySetName: "socialprofiles"
primaryId: "socialprofileid"
primaryName: "profilename"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["profilo social", "profilo social media"]
synonyms_en: ["social profile"]
---

# Social Profile

This entity is used to store social profile information of its associated account and contacts on different social channels.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `socialprofile` |
| Display name | Social Profile |
| Display (plural) | Social Profiles |
| Schema name | `SocialProfile` |
| Entity set (Web API) | `socialprofiles` |
| Primary id attribute | `socialprofileid` |
| Primary name attribute | `profilename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/socialprofiles?$select=profilename&$top=10
GET /api/data/v9.2/socialprofiles(<guid>)
POST /api/data/v9.2/socialprofiles
PATCH /api/data/v9.2/socialprofiles(<guid>)
DELETE /api/data/v9.2/socialprofiles(<guid>)
```

## Attributes

Writable: **22** · Read-only: **12**

### Writable

`Blocked`, `Community`, `CustomerId`, `CustomerIdName`, `CustomerIdType`, `CustomerIdYomiName`, `ImportSequenceNumber`, `InfluenceScore`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdName`, `OwnerIdType`, `ProfileFullName`, `ProfileLink`, `ProfileName`, `SocialProfileId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UniqueProfileID`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_socialprofiles` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_SocialProfile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_SocialProfile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_SocialProfile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `Socialprofile_customer_accounts` | [account](account.md) | `customerid` | `customerid_account` |
| `Socialprofile_customer_contacts` | [contact](contact.md) | `customerid` | `customerid_contact` |
| `socialProfile_owning_user` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `transactioncurrency_SocialProfile` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `SocialProfile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `socialprofile_connections1` | _n/a_ | `record1id` | _n/a_ |
| `socialprofile_connections2` | _n/a_ | `record2id` | _n/a_ |
| `SocialProfile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `SocialProfile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `socialprofile_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `SocialProfile_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Socialprofile_SocialActivities` | _n/a_ | `postfromprofileid` | _n/a_ |
| `SocialProfile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [socialprofile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/socialprofile.md) on 2026-05-06.