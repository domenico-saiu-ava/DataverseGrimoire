---
logical: "msdyn_warranty"
display: "Garanzia"
entitySetName: "msdyn_warranties"
primaryId: "msdyn_warrantyid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Garanzia

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_warranty` |
| Display name | Garanzia |
| Display (plural) | Garanzie |
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

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_enddate`, `msdyn_name`, `msdyn_startdate`, `msdyn_warrantyholder`, `msdyn_warrantyid`, `msdyn_warrantyprovider`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_warranty_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_warranty_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_warranty_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_warranty_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_warranty` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_warranty` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_warranty` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_warranty` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_account_msdyn_warranty_WarrantyHolder` | [account](account.md) | `msdyn_warrantyholder` | `msdyn_WarrantyHolder` |
| `msdyn_account_msdyn_warranty_WarrantyProvider` | [account](account.md) | `msdyn_warrantyprovider` | `msdyn_WarrantyProvider` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_warranty_SyncErrors` | [msdyn_warranty](msdyn_warranty.md) | `regardingobjectid` | `regardingobjectid_msdyn_warranty` |
| `msdyn_warranty_AsyncOperations` | [msdyn_warranty](msdyn_warranty.md) | `regardingobjectid` | `regardingobjectid_msdyn_warranty` |
| `msdyn_warranty_MailboxTrackingFolders` | [msdyn_warranty](msdyn_warranty.md) | `regardingobjectid` | `regardingobjectid_msdyn_warranty` |
| `msdyn_warranty_UserEntityInstanceDatas` | [msdyn_warranty](msdyn_warranty.md) | `objectid` | `objectid_msdyn_warranty` |
| `msdyn_warranty_ProcessSession` | [msdyn_warranty](msdyn_warranty.md) | `regardingobjectid` | `regardingobjectid_msdyn_warranty` |
| `msdyn_warranty_BulkDeleteFailures` | [msdyn_warranty](msdyn_warranty.md) | `regardingobjectid` | `regardingobjectid_msdyn_warranty` |
| `msdyn_warranty_PrincipalObjectAttributeAccesses` | [msdyn_warranty](msdyn_warranty.md) | `objectid` | `objectid_msdyn_warranty` |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_warranty_account` | [account](account.md) | _n/a_ | `msdyn_msdyn_warranty_account` |
| `msdyn_msdyn_warranty_msdyn_customerasset` | [msdyn_customerasset](msdyn_customerasset.md) | _n/a_ | `msdyn_msdyn_warranty_msdyn_customerasset` |
| `msdyn_msdyn_warranty_msdyn_functionallocation` | [msdyn_functionallocation](msdyn_functionallocation.md) | _n/a_ | `msdyn_msdyn_warranty_msdyn_functionallocation` |

## Source

Generated from [msdyn_warranty (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_warranty')) on 2026-05-07.