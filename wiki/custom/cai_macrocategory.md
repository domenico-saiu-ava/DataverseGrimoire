---
logical: "cai_macrocategory"
display: "Macrocategoria"
entitySetName: "cai_macrocategories"
primaryId: "cai_macrocategoryid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Macrocategoria

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_macrocategory` |
| Display name | Macrocategoria |
| Display (plural) | Macrocategorie |
| Schema name | `cai_macrocategory` |
| Entity set (Web API) | `cai_macrocategories` |
| Primary id attribute | `cai_macrocategoryid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_macrocategories?$select=cai_name&$top=10
GET /api/data/v9.2/cai_macrocategories(<guid>)
POST /api/data/v9.2/cai_macrocategories
PATCH /api/data/v9.2/cai_macrocategories(<guid>)
DELETE /api/data/v9.2/cai_macrocategories(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`cai_code`, `cai_macrocategoryid`, `cai_minterclass`, `cai_name`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_macrocategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_macrocategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_macrocategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_macrocategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_macrocategory` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_macrocategory_SyncErrors` | [cai_macrocategory](cai_macrocategory.md) | `regardingobjectid` | `regardingobjectid_cai_macrocategory` |
| `cai_macrocategory_DuplicateMatchingRecord` | [cai_macrocategory](cai_macrocategory.md) | `duplicaterecordid` | `duplicaterecordid_cai_macrocategory` |
| `cai_macrocategory_DuplicateBaseRecord` | [cai_macrocategory](cai_macrocategory.md) | `baserecordid` | `baserecordid_cai_macrocategory` |
| `cai_macrocategory_AsyncOperations` | [cai_macrocategory](cai_macrocategory.md) | `regardingobjectid` | `regardingobjectid_cai_macrocategory` |
| `cai_macrocategory_MailboxTrackingFolders` | [cai_macrocategory](cai_macrocategory.md) | `regardingobjectid` | `regardingobjectid_cai_macrocategory` |
| `cai_macrocategory_UserEntityInstanceDatas` | [cai_macrocategory](cai_macrocategory.md) | `objectid` | `objectid_cai_macrocategory` |
| `cai_macrocategory_ProcessSession` | [cai_macrocategory](cai_macrocategory.md) | `regardingobjectid` | `regardingobjectid_cai_macrocategory` |
| `cai_macrocategory_BulkDeleteFailures` | [cai_macrocategory](cai_macrocategory.md) | `regardingobjectid` | `regardingobjectid_cai_macrocategory` |
| `cai_macrocategory_PrincipalObjectAttributeAccesses` | [cai_macrocategory](cai_macrocategory.md) | `objectid` | `objectid_cai_macrocategory` |
| `cai_cai_macrocategory_cai_product_macrocategoryid` | [cai_macrocategory](cai_macrocategory.md) | `cai_macrocategoryid` | `cai_macrocategoryid` |


## Source

Generated from [cai_macrocategory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_macrocategory')) on 2026-05-07.