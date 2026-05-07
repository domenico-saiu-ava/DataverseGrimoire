---
logical: "msdyn_channeldefinitionlocale"
display: "Channel Definition Locale"
entitySetName: "msdyn_channeldefinitionlocales"
primaryId: "msdyn_channeldefinitionlocaleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Channel Definition Locale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channeldefinitionlocale` |
| Display name | Channel Definition Locale |
| Display (plural) | Channel Definition Locales |
| Schema name | `msdyn_ChannelDefinitionLocale` |
| Entity set (Web API) | `msdyn_channeldefinitionlocales` |
| Primary id attribute | `msdyn_channeldefinitionlocaleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channeldefinitionlocales?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channeldefinitionlocales(<guid>)
POST /api/data/v9.2/msdyn_channeldefinitionlocales
PATCH /api/data/v9.2/msdyn_channeldefinitionlocales(<guid>)
DELETE /api/data/v9.2/msdyn_channeldefinitionlocales(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_ChannelDefinitionId`, `msdyn_ChannelDefinitionLocaleId`, `msdyn_LocaleContent`, `msdyn_LocaleId`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_channeldefinitionlocale` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_channeldefinitionlocale_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channeldefinitionlocale_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channeldefinitionlocale_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channeldefinitionlocale_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_channeldefinitionlocale_ChannelDefi` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |
| `owner_msdyn_channeldefinitionlocale` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_channeldefinitionlocale` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_channeldefinitionlocale` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channeldefinitionlocale_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinitionlocale_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinitionlocale_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_channeldefinitionlocale_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_channeldefinitionlocale_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinitionlocale_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channeldefinitionlocale_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinitionlocale_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_channeldefinitionlocale.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channeldefinitionlocale.md) on 2026-05-06.