---
logical: "cai_productgroup"
display: "Gruppo prodotto"
entitySetName: "cai_productgroups"
primaryId: "cai_productgroupid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Gruppo prodotto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_productgroup` |
| Display name | Gruppo prodotto |
| Display (plural) | Gruppo prodotti |
| Schema name | `cai_productgroup` |
| Entity set (Web API) | `cai_productgroups` |
| Primary id attribute | `cai_productgroupid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_productgroups?$select=cai_name&$top=10
GET /api/data/v9.2/cai_productgroups(<guid>)
POST /api/data/v9.2/cai_productgroups
PATCH /api/data/v9.2/cai_productgroups(<guid>)
DELETE /api/data/v9.2/cai_productgroups(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`cai_code`, `cai_name`, `cai_productgroupid`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_productgroup_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_productgroup_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_productgroup_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_productgroup_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_productgroup` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_productgroup_SyncErrors` | [cai_productgroup](cai_productgroup.md) | `regardingobjectid` | `regardingobjectid_cai_productgroup` |
| `cai_productgroup_DuplicateMatchingRecord` | [cai_productgroup](cai_productgroup.md) | `duplicaterecordid` | `duplicaterecordid_cai_productgroup` |
| `cai_productgroup_DuplicateBaseRecord` | [cai_productgroup](cai_productgroup.md) | `baserecordid` | `baserecordid_cai_productgroup` |
| `cai_productgroup_AsyncOperations` | [cai_productgroup](cai_productgroup.md) | `regardingobjectid` | `regardingobjectid_cai_productgroup` |
| `cai_productgroup_MailboxTrackingFolders` | [cai_productgroup](cai_productgroup.md) | `regardingobjectid` | `regardingobjectid_cai_productgroup` |
| `cai_productgroup_UserEntityInstanceDatas` | [cai_productgroup](cai_productgroup.md) | `objectid` | `objectid_cai_productgroup` |
| `cai_productgroup_ProcessSession` | [cai_productgroup](cai_productgroup.md) | `regardingobjectid` | `regardingobjectid_cai_productgroup` |
| `cai_productgroup_BulkDeleteFailures` | [cai_productgroup](cai_productgroup.md) | `regardingobjectid` | `regardingobjectid_cai_productgroup` |
| `cai_productgroup_PrincipalObjectAttributeAccesses` | [cai_productgroup](cai_productgroup.md) | `objectid` | `objectid_cai_productgroup` |
| `cai_cai_productgroup_cai_product_productgroupid` | [cai_productgroup](cai_productgroup.md) | `cai_productgroupid` | `cai_productgroupid` |


## Source

Generated from [cai_productgroup (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_productgroup')) on 2026-05-07.