---
logical: "msdyn_personalmessage"
display: "Personal quick reply"
entitySetName: "msdyn_personalmessages"
primaryId: "msdyn_personalmessageid"
primaryName: "msdyn_title"
tableType: "Standard"
ownership: "UserOwned"
---

# Personal quick reply

Omnichannel agents's personal quick replies

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_personalmessage` |
| Display name | Personal quick reply |
| Display (plural) | Personal quick replies |
| Schema name | `msdyn_personalmessage` |
| Entity set (Web API) | `msdyn_personalmessages` |
| Primary id attribute | `msdyn_personalmessageid` |
| Primary name attribute | `msdyn_title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_personalmessages?$select=msdyn_title&$top=10
GET /api/data/v9.2/msdyn_personalmessages(<guid>)
POST /api/data/v9.2/msdyn_personalmessages
PATCH /api/data/v9.2/msdyn_personalmessages(<guid>)
DELETE /api/data/v9.2/msdyn_personalmessages(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_locale_field`, `msdyn_message`, `msdyn_personalmessageId`, `msdyn_tagscontrolfield`, `msdyn_title`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_personalmessage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_personalmessage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_personalmessage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_personalmessage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_personalmessage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_personalmessage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_personalmessage` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_personalmessage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_personalmessage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personalmessage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personalmessage_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_personalmessage_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_personalmessage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personalmessage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_personalmessage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personalmessage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_personalmessage_msdyn_octag` | [msdyn_personalmessageid](msdyn_personalmessageid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_personalmessage.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_personalmessage.md) on 2026-05-06.