---
logical: "msdyn_productmap"
display: "Product Map"
entitySetName: "msdyn_productmaps"
primaryId: "msdyn_productmapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Product Map

Product map between other entities and product

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productmap` |
| Display name | Product Map |
| Display (plural) | Product Maps |
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

Writable: **12** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_productid`, `msdyn_productmapId`, `msdyn_recordid`, `msdyn_recordidIdType`, `msdyn_recordtype`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_productmap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productmap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_incident_msdyn_productmap_msdyn_recordid` | [incident](incident.md) | `msdyn_recordid` | `msdyn_recordid_Incident_incident` |
| `msdyn_msdyn_ocliveworkitem_msdyn_productmap_msdyn_recordid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_recordid` | `msdyn_recordid_msdyn_ocliveworkitem_msdyn_ocliveworkitem` |
| `msdyn_productmap_msdyn_productid_product` | [product](product.md) | `msdyn_productid` | `msdyn_productid` |
| `organization_msdyn_productmap` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productmap_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productmap_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productmap_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_productmap_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_productmap_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productmap_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_productmap_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productmap_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_productmap.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_productmap.md) on 2026-05-06.