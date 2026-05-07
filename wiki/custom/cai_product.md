---
logical: "cai_product"
display: "Prodotto"
entitySetName: "cai_products"
primaryId: "cai_productid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Prodotto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_product` |
| Display name | Prodotto |
| Display (plural) | Prodotti |
| Schema name | `cai_product` |
| Entity set (Web API) | `cai_products` |
| Primary id attribute | `cai_productid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_products?$select=cai_name&$top=10
GET /api/data/v9.2/cai_products(<guid>)
POST /api/data/v9.2/cai_products
PATCH /api/data/v9.2/cai_products(<guid>)
DELETE /api/data/v9.2/cai_products(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`ava_anagrafeoffertacampagnaid`, `cai_argumentid`, `cai_cai_defaultforappointmentrequest`, `cai_code`, `cai_macrocategoryid`, `cai_macroproductid`, `cai_marketinggoalid`, `cai_name`, `cai_productgroupid`, `cai_productid`, `cai_tobdi`, `cai_toprivate`, `cai_toretail`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_cai_argument_cai_product_argumentid` | [cai_argument](cai_argument.md) | `cai_argumentid` | `cai_argumentid` |
| `cai_cai_marketinggoal_cai_product_marketinggoalid` | [cai_marketinggoal](cai_marketinggoal.md) | `cai_marketinggoalid` | `cai_marketinggoalid` |
| `cai_cai_macroproduct_cai_product_macroproductid` | [cai_macroproduct](cai_macroproduct.md) | `cai_macroproductid` | `cai_macroproductid` |
| `cai_cai_macrocategory_cai_product_macrocategoryid` | [cai_macrocategory](cai_macrocategory.md) | `cai_macrocategoryid` | `cai_macrocategoryid` |
| `cai_cai_productgroup_cai_product_productgroupid` | [cai_productgroup](cai_productgroup.md) | `cai_productgroupid` | `cai_productgroupid` |
| `lk_cai_product_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_product_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_product_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_product_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_product` | [organization](organization.md) | `organizationid` | `organizationid` |
| `ava_cai_product_anagrafeoffertacampagnaid_cai_campaignoffer` | [cai_campaignoffer](cai_campaignoffer.md) | `ava_anagrafeoffertacampagnaid` | `ava_anagrafeoffertacampagnaid` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_nextbestproduct_productid_cai_product` | [cai_product](cai_product.md) | `cai_productid` | `cai_productid` |
| `cai_lead_productid_cai_product` | [cai_product](cai_product.md) | `cai_productid` | `cai_productid` |
| `cai_cai_product_cai_dispatchingrule_productid` | [cai_product](cai_product.md) | `cai_productid` | `cai_productid` |
| `cai_cai_product_cai_nboproduct_productid` | [cai_product](cai_product.md) | `cai_productid` | `cai_productid` |
| `cai_campaignoffer_productid_cai_product` | [cai_product](cai_product.md) | `cai_productid` | `cai_productid` |
| `cai_product_SyncErrors` | [cai_product](cai_product.md) | `regardingobjectid` | `regardingobjectid_cai_product` |
| `cai_product_DuplicateMatchingRecord` | [cai_product](cai_product.md) | `duplicaterecordid` | `duplicaterecordid_cai_product` |
| `cai_product_DuplicateBaseRecord` | [cai_product](cai_product.md) | `baserecordid` | `baserecordid_cai_product` |
| `cai_product_AsyncOperations` | [cai_product](cai_product.md) | `regardingobjectid` | `regardingobjectid_cai_product` |
| `cai_product_MailboxTrackingFolders` | [cai_product](cai_product.md) | `regardingobjectid` | `regardingobjectid_cai_product` |
| `cai_product_UserEntityInstanceDatas` | [cai_product](cai_product.md) | `objectid` | `objectid_cai_product` |
| `cai_product_ProcessSession` | [cai_product](cai_product.md) | `regardingobjectid` | `regardingobjectid_cai_product` |
| `cai_product_BulkDeleteFailures` | [cai_product](cai_product.md) | `regardingobjectid` | `regardingobjectid_cai_product` |
| `cai_product_PrincipalObjectAttributeAccesses` | [cai_product](cai_product.md) | `objectid` | `objectid_cai_product` |


## Source

Generated from [cai_product (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_product')) on 2026-05-07.