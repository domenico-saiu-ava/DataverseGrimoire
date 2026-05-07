---
logical: "msdyncrm_qrcodestyle"
display: "QR code style"
entitySetName: "msdyncrm_qrcodestyles"
primaryId: "msdyncrm_qrcodestyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# QR code style

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_qrcodestyle` |
| Display name | QR code style |
| Display (plural) | QR code styles |
| Schema name | `msdyncrm_qrcodestyle` |
| Entity set (Web API) | `msdyncrm_qrcodestyles` |
| Primary id attribute | `msdyncrm_qrcodestyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_qrcodestyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_qrcodestyles(<guid>)
POST /api/data/v9.2/msdyncrm_qrcodestyles
PATCH /api/data/v9.2/msdyncrm_qrcodestyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_qrcodestyles(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_name`, `msdyncrm_qrcodestyleId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_qrcodestyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_qrcodestyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_qrcodestyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_qrcodestyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_qrcodestyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_qrcodestyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_qrcodestyle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_qrcodestyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_qrcodestyle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_qrcodestyle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_qrcodestyle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_qrcodestyle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_qrcodestyle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_qrcodestyle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_qrcodestyle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_qrcodestyle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_qrcodestyle.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_qrcodestyle.md) on 2026-05-06.