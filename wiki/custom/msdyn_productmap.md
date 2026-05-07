---
logical: "msdyn_productmap"
display: "Mapping prodotto"
entitySetName: "msdyn_productmaps"
primaryId: "msdyn_productmapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping prodotto

Mapping del prodotto tra altre entità e prodotto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productmap` |
| Display name | Mapping prodotto |
| Display (plural) | Mapping prodotto |
| Schema name | `msdyn_productmap` |
| Entity set (Web API) | `msdyn_productmaps` |
| Primary id attribute | `msdyn_productmapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productmaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productmaps(<guid>)
POST /api/data/v9.2/msdyn_productmaps
PATCH /api/data/v9.2/msdyn_productmaps(<guid>)
DELETE /api/data/v9.2/msdyn_productmaps(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_productid`, `msdyn_productmapid`, `msdyn_recordid`, `msdyn_recordtype`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_productmap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productmap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_productmap` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_incident_msdyn_productmap_msdyn_recordid` | [incident](incident.md) | `msdyn_recordid` | `msdyn_recordid_Incident_incident` |
| `msdyn_productmap_msdyn_productid_product` | [product](product.md) | `msdyn_productid` | `msdyn_productid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_productmap_msdyn_recordid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_recordid` | `msdyn_recordid_msdyn_ocliveworkitem_msdyn_ocliveworkitem` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productmap_SyncErrors` | [msdyn_productmap](msdyn_productmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_productmap` |
| `msdyn_productmap_DuplicateMatchingRecord` | [msdyn_productmap](msdyn_productmap.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_productmap` |
| `msdyn_productmap_DuplicateBaseRecord` | [msdyn_productmap](msdyn_productmap.md) | `baserecordid` | `baserecordid_msdyn_productmap` |
| `msdyn_productmap_AsyncOperations` | [msdyn_productmap](msdyn_productmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_productmap` |
| `msdyn_productmap_MailboxTrackingFolders` | [msdyn_productmap](msdyn_productmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_productmap` |
| `msdyn_productmap_UserEntityInstanceDatas` | [msdyn_productmap](msdyn_productmap.md) | `objectid` | `objectid_msdyn_productmap` |
| `msdyn_productmap_ProcessSession` | [msdyn_productmap](msdyn_productmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_productmap` |
| `msdyn_productmap_BulkDeleteFailures` | [msdyn_productmap](msdyn_productmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_productmap` |
| `msdyn_productmap_PrincipalObjectAttributeAccesses` | [msdyn_productmap](msdyn_productmap.md) | `objectid` | `objectid_msdyn_productmap` |


## Source

Generated from [msdyn_productmap (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_productmap')) on 2026-05-07.