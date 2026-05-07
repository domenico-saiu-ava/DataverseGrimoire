---
logical: "msdyn_warranty"
display: "Warranty"
entitySetName: "msdyn_warranties"
primaryId: "msdyn_warrantyid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Warranty

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_warranty` |
| Display name | Warranty |
| Display (plural) | Warranties |
| Schema name | `msdyn_Warranty` |
| Entity set (Web API) | `msdyn_warranties` |
| Primary id attribute | `msdyn_warrantyid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_warranties?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_warranties(<guid>)
POST /api/data/v9.2/msdyn_warranties
PATCH /api/data/v9.2/msdyn_warranties(<guid>)
DELETE /api/data/v9.2/msdyn_warranties(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_EndDate`, `msdyn_Name`, `msdyn_StartDate`, `msdyn_WarrantyHolder`, `msdyn_WarrantyId`, `msdyn_WarrantyProvider`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_warranty` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_warranty_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_warranty_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_warranty_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_warranty_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_account_msdyn_warranty_WarrantyHolder` | [account](account.md) | `msdyn_warrantyholder` | `msdyn_WarrantyHolder` |
| `msdyn_account_msdyn_warranty_WarrantyProvider` | [account](account.md) | `msdyn_warrantyprovider` | `msdyn_WarrantyProvider` |
| `owner_msdyn_warranty` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_warranty` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_warranty` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_warranty_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_warranty_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_warranty_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_warranty_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_warranty_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_warranty_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_warranty_account` | [msdyn_warrantyid](msdyn_warrantyid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_warranty_msdyn_customerasset` | [msdyn_warrantyid](msdyn_warrantyid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_warranty_msdyn_functionallocation` | [msdyn_warrantyid](msdyn_warrantyid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_warranty.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_warranty.md) on 2026-05-06.