---
logical: "msdyn_conversationactionlocale"
display: "Conversation Action Locale"
entitySetName: "msdyn_conversationactionlocales"
primaryId: "msdyn_conversationactionlocaleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Action Locale

Localization information associated with the Conversation action.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationactionlocale` |
| Display name | Conversation Action Locale |
| Display (plural) | Conversation Action Locale |
| Schema name | `msdyn_conversationactionlocale` |
| Entity set (Web API) | `msdyn_conversationactionlocales` |
| Primary id attribute | `msdyn_conversationactionlocaleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationactionlocales?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationactionlocales(<guid>)
POST /api/data/v9.2/msdyn_conversationactionlocales
PATCH /api/data/v9.2/msdyn_conversationactionlocales(<guid>)
DELETE /api/data/v9.2/msdyn_conversationactionlocales(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Conversationactionkey`, `msdyn_conversationactionlocaleId`, `msdyn_Label`, `msdyn_Locale_picklist`, `msdyn_name`, `msdyn_SlashCommands`, `msdyn_Tooltip`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationactionlocale` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationactionlocale_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationactionlocale_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationactionlocale_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationactionlocale_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationaction_msdyn_conversationactionlocale_CAkey` | [msdyn_conversationaction](msdyn_conversationaction.md) | `msdyn_conversationactionkey` | `msdyn_conversationactionkey` |
| `owner_msdyn_conversationactionlocale` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationactionlocale` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationactionlocale` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationactionlocale_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationactionlocale_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationactionlocale_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationactionlocale_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationactionlocale_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationactionlocale_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationactionlocale_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationactionlocale_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationactionlocale.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationactionlocale.md) on 2026-05-06.