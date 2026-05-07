---
logical: "msdyncrm_dividerstyle"
display: "Divider style"
entitySetName: "msdyncrm_dividerstyles"
primaryId: "msdyncrm_dividerstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Divider style

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_dividerstyle` |
| Display name | Divider style |
| Display (plural) | Dividers style |
| Schema name | `msdyncrm_dividerstyle` |
| Entity set (Web API) | `msdyncrm_dividerstyles` |
| Primary id attribute | `msdyncrm_dividerstyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_dividerstyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_dividerstyles(<guid>)
POST /api/data/v9.2/msdyncrm_dividerstyles
PATCH /api/data/v9.2/msdyncrm_dividerstyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_dividerstyles(<guid>)
```

## Attributes

Writable: **24** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_alignment`, `msdyncrm_dividerstyleId`, `msdyncrm_emailcolorpalette`, `msdyncrm_linecolor`, `msdyncrm_linesize`, `msdyncrm_linestyle`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_name`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_width`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_dividerstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_dividerstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_dividerstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_dividerstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_dividerstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_dividerstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_dividerstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_dividerstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_dividerstyle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_dividerstyle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_dividerstyle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_dividerstyle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_dividerstyle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_dividerstyle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_dividerstyle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_dividerstyle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_dividerstyle.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_dividerstyle.md) on 2026-05-06.