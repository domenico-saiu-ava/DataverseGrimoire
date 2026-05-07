---
logical: "cai_nextbestproduct"
display: "Next best product"
entitySetName: "cai_nextbestproducts"
primaryId: "cai_nextbestproductid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Next best product

Next best product da proporre ai clienti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_nextbestproduct` |
| Display name | Next best product |
| Display (plural) | Next best products |
| Schema name | `cai_nextbestproduct` |
| Entity set (Web API) | `cai_nextbestproducts` |
| Primary id attribute | `cai_nextbestproductid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_nextbestproducts?$select=cai_name&$top=10
GET /api/data/v9.2/cai_nextbestproducts(<guid>)
POST /api/data/v9.2/cai_nextbestproducts
PATCH /api/data/v9.2/cai_nextbestproducts(<guid>)
DELETE /api/data/v9.2/cai_nextbestproducts(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`cai_customerid`, `cai_enddate`, `cai_name`, `cai_nboproductid`, `cai_nextbestproductid`, `cai_priority`, `cai_productid`, `cai_productmodel`, `cai_sellingproposition`, `cai_statecode`, `cai_statuscode`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_nextbestproduct_productid_cai_product` | [cai_product](cai_product.md) | `cai_productid` | `cai_productid` |
| `lk_cai_nextbestproduct_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_nextbestproduct_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_nextbestproduct_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_nextbestproduct_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_nextbestproduct` | [organization](organization.md) | `organizationid` | `organizationid` |
| `cai_nextbestproduct_nboproductid_cai_nboproduct` | [cai_nboproduct](cai_nboproduct.md) | `cai_nboproductid` | `cai_nboproductid` |
| `cai_account_cai_nextbestproduct_920` | [account](account.md) | `cai_customerid` | `cai_customerid_account` |
| `cai_contact_cai_nextbestproduct_920` | [contact](contact.md) | `cai_customerid` | `cai_customerid_contact` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_nextbestproduct_SyncErrors` | [cai_nextbestproduct](cai_nextbestproduct.md) | `regardingobjectid` | `regardingobjectid_cai_nextbestproduct` |
| `cai_nextbestproduct_DuplicateMatchingRecord` | [cai_nextbestproduct](cai_nextbestproduct.md) | `duplicaterecordid` | `duplicaterecordid_cai_nextbestproduct` |
| `cai_nextbestproduct_DuplicateBaseRecord` | [cai_nextbestproduct](cai_nextbestproduct.md) | `baserecordid` | `baserecordid_cai_nextbestproduct` |
| `cai_nextbestproduct_AsyncOperations` | [cai_nextbestproduct](cai_nextbestproduct.md) | `regardingobjectid` | `regardingobjectid_cai_nextbestproduct` |
| `cai_nextbestproduct_MailboxTrackingFolders` | [cai_nextbestproduct](cai_nextbestproduct.md) | `regardingobjectid` | `regardingobjectid_cai_nextbestproduct` |
| `cai_nextbestproduct_UserEntityInstanceDatas` | [cai_nextbestproduct](cai_nextbestproduct.md) | `objectid` | `objectid_cai_nextbestproduct` |
| `cai_nextbestproduct_ProcessSession` | [cai_nextbestproduct](cai_nextbestproduct.md) | `regardingobjectid` | `regardingobjectid_cai_nextbestproduct` |
| `cai_nextbestproduct_BulkDeleteFailures` | [cai_nextbestproduct](cai_nextbestproduct.md) | `regardingobjectid` | `regardingobjectid_cai_nextbestproduct` |
| `cai_nextbestproduct_PrincipalObjectAttributeAccesses` | [cai_nextbestproduct](cai_nextbestproduct.md) | `objectid` | `objectid_cai_nextbestproduct` |


## Source

Generated from [cai_nextbestproduct (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_nextbestproduct')) on 2026-05-07.