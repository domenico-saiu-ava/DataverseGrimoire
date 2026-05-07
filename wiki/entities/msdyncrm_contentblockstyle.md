---
logical: "msdyncrm_contentblockstyle"
display: "Content Block"
entitySetName: "msdyncrm_contentblockstyles"
primaryId: "msdyncrm_contentblockstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Content Block

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_contentblockstyle` |
| Display name | Content Block |
| Display (plural) | Content Block |
| Schema name | `msdyncrm_contentblockstyle` |
| Entity set (Web API) | `msdyncrm_contentblockstyles` |
| Primary id attribute | `msdyncrm_contentblockstyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_contentblockstyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_contentblockstyles(<guid>)
POST /api/data/v9.2/msdyncrm_contentblockstyles
PATCH /api/data/v9.2/msdyncrm_contentblockstyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_contentblockstyles(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_basestyle`, `msdyncrm_contentblockstyleId`, `msdyncrm_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_contentblockstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_contentblockstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_contentblockstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_contentblockstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_contentblockstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_contentblockstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_contentblockstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_contentblockstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_contentblockstyle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_contentblockstyle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_contentblockstyle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_contentblockstyle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_contentblockstyle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_contentblockstyle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_contentblockstyle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_contentblockstyle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_contentblockstyle.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_contentblockstyle.md) on 2026-05-06.