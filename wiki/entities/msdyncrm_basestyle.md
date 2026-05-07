---
logical: "msdyncrm_basestyle"
display: "basestyle"
entitySetName: "msdyncrm_basestyles"
primaryId: "msdyncrm_basestyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# basestyle

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_basestyle` |
| Display name | basestyle |
| Display (plural) | basestyles |
| Schema name | `msdyncrm_basestyle` |
| Entity set (Web API) | `msdyncrm_basestyles` |
| Primary id attribute | `msdyncrm_basestyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_basestyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_basestyles(<guid>)
POST /api/data/v9.2/msdyncrm_basestyles
PATCH /api/data/v9.2/msdyncrm_basestyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_basestyles(<guid>)
```

## Attributes

Writable: **27** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_align`, `msdyncrm_backgroundColor`, `msdyncrm_backgroundImage`, `msdyncrm_basestyleId`, `msdyncrm_borderColor`, `msdyncrm_borderRadius`, `msdyncrm_borderstyle`, `msdyncrm_borderWidth`, `msdyncrm_emailcolorpalette`, `msdyncrm_marginBottom`, `msdyncrm_marginLeft`, `msdyncrm_marginRight`, `msdyncrm_marginTop`, `msdyncrm_minHeight`, `msdyncrm_name`, `msdyncrm_paddingBottom`, `msdyncrm_paddingLeft`, `msdyncrm_paddingRight`, `msdyncrm_paddingTop`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_basestyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_basestyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_basestyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_basestyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_basestyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_basestyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_basestyle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_basestyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_basestyle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_basestyle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_basestyle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_basestyle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_basestyle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_basestyle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_basestyle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_basestyle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_basestyle.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_basestyle.md) on 2026-05-06.