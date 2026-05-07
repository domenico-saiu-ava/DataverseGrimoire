---
logical: "cai_macroproduct"
display: "Macroprodotto"
entitySetName: "cai_macroproducts"
primaryId: "cai_macroproductid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Macroprodotto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_macroproduct` |
| Display name | Macroprodotto |
| Display (plural) | Macroprodotti |
| Schema name | `cai_macroproduct` |
| Entity set (Web API) | `cai_macroproducts` |
| Primary id attribute | `cai_macroproductid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_macroproducts?$select=cai_name&$top=10
GET /api/data/v9.2/cai_macroproducts(<guid>)
POST /api/data/v9.2/cai_macroproducts
PATCH /api/data/v9.2/cai_macroproducts(<guid>)
DELETE /api/data/v9.2/cai_macroproducts(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`cai_code`, `cai_macroproductid`, `cai_name`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_macroproduct_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_macroproduct_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_macroproduct_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_macroproduct_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_macroproduct` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_macroproduct_SyncErrors` | [cai_macroproduct](cai_macroproduct.md) | `regardingobjectid` | `regardingobjectid_cai_macroproduct` |
| `cai_macroproduct_DuplicateMatchingRecord` | [cai_macroproduct](cai_macroproduct.md) | `duplicaterecordid` | `duplicaterecordid_cai_macroproduct` |
| `cai_macroproduct_DuplicateBaseRecord` | [cai_macroproduct](cai_macroproduct.md) | `baserecordid` | `baserecordid_cai_macroproduct` |
| `cai_macroproduct_AsyncOperations` | [cai_macroproduct](cai_macroproduct.md) | `regardingobjectid` | `regardingobjectid_cai_macroproduct` |
| `cai_macroproduct_MailboxTrackingFolders` | [cai_macroproduct](cai_macroproduct.md) | `regardingobjectid` | `regardingobjectid_cai_macroproduct` |
| `cai_macroproduct_UserEntityInstanceDatas` | [cai_macroproduct](cai_macroproduct.md) | `objectid` | `objectid_cai_macroproduct` |
| `cai_macroproduct_ProcessSession` | [cai_macroproduct](cai_macroproduct.md) | `regardingobjectid` | `regardingobjectid_cai_macroproduct` |
| `cai_macroproduct_BulkDeleteFailures` | [cai_macroproduct](cai_macroproduct.md) | `regardingobjectid` | `regardingobjectid_cai_macroproduct` |
| `cai_macroproduct_PrincipalObjectAttributeAccesses` | [cai_macroproduct](cai_macroproduct.md) | `objectid` | `objectid_cai_macroproduct` |
| `cai_cai_macroproduct_cai_product_macroproductid` | [cai_macroproduct](cai_macroproduct.md) | `cai_macroproductid` | `cai_macroproductid` |


## Source

Generated from [cai_macroproduct (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_macroproduct')) on 2026-05-07.