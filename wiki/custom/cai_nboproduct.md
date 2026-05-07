---
logical: "cai_nboproduct"
display: "Prodotto NBO"
entitySetName: "cai_nboproducts"
primaryId: "cai_nboproductid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Prodotto NBO

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_nboproduct` |
| Display name | Prodotto NBO |
| Display (plural) | Prodotti NBO |
| Schema name | `cai_nboproduct` |
| Entity set (Web API) | `cai_nboproducts` |
| Primary id attribute | `cai_nboproductid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_nboproducts?$select=cai_name&$top=10
GET /api/data/v9.2/cai_nboproducts(<guid>)
POST /api/data/v9.2/cai_nboproducts
PATCH /api/data/v9.2/cai_nboproducts(<guid>)
DELETE /api/data/v9.2/cai_nboproducts(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`cai_name`, `cai_nboproductcode`, `cai_nboproductid`, `cai_productid`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_cai_product_cai_nboproduct_productid` | [cai_product](cai_product.md) | `cai_productid` | `cai_productid` |
| `lk_cai_nboproduct_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_nboproduct_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_nboproduct_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_nboproduct_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_nboproduct` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_nextbestproduct_nboproductid_cai_nboproduct` | [cai_nboproduct](cai_nboproduct.md) | `cai_nboproductid` | `cai_nboproductid` |
| `cai_nboproduct_SyncErrors` | [cai_nboproduct](cai_nboproduct.md) | `regardingobjectid` | `regardingobjectid_cai_nboproduct` |
| `cai_nboproduct_DuplicateMatchingRecord` | [cai_nboproduct](cai_nboproduct.md) | `duplicaterecordid` | `duplicaterecordid_cai_nboproduct` |
| `cai_nboproduct_DuplicateBaseRecord` | [cai_nboproduct](cai_nboproduct.md) | `baserecordid` | `baserecordid_cai_nboproduct` |
| `cai_nboproduct_AsyncOperations` | [cai_nboproduct](cai_nboproduct.md) | `regardingobjectid` | `regardingobjectid_cai_nboproduct` |
| `cai_nboproduct_MailboxTrackingFolders` | [cai_nboproduct](cai_nboproduct.md) | `regardingobjectid` | `regardingobjectid_cai_nboproduct` |
| `cai_nboproduct_UserEntityInstanceDatas` | [cai_nboproduct](cai_nboproduct.md) | `objectid` | `objectid_cai_nboproduct` |
| `cai_nboproduct_ProcessSession` | [cai_nboproduct](cai_nboproduct.md) | `regardingobjectid` | `regardingobjectid_cai_nboproduct` |
| `cai_nboproduct_BulkDeleteFailures` | [cai_nboproduct](cai_nboproduct.md) | `regardingobjectid` | `regardingobjectid_cai_nboproduct` |
| `cai_nboproduct_PrincipalObjectAttributeAccesses` | [cai_nboproduct](cai_nboproduct.md) | `objectid` | `objectid_cai_nboproduct` |


## Source

Generated from [cai_nboproduct (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_nboproduct')) on 2026-05-07.