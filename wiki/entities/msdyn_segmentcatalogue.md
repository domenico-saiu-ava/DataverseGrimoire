---
logical: "msdyn_segmentcatalogue"
display: "SegmentsUtil"
entitySetName: "msdyn_segmentcatalogues"
primaryId: "msdyn_segmentcatalogueid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# SegmentsUtil

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_segmentcatalogue` |
| Display name | SegmentsUtil |
| Display (plural) | SegmentsUtils |
| Schema name | `msdyn_segmentcatalogue` |
| Entity set (Web API) | `msdyn_segmentcatalogues` |
| Primary id attribute | `msdyn_segmentcatalogueid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_segmentcatalogues?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_segmentcatalogues(<guid>)
POST /api/data/v9.2/msdyn_segmentcatalogues
PATCH /api/data/v9.2/msdyn_segmentcatalogues(<guid>)
DELETE /api/data/v9.2/msdyn_segmentcatalogues(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_segmentcatalogueId`, `msdyn_segmentcatalogueuniquekey`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_segmentcatalogue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_segmentcatalogue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_segmentcatalogue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_segmentcatalogue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_segmentcatalogue` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_segmentcatalogue_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentcatalogue_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentcatalogue_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentcatalogue_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_segmentcatalogue_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentcatalogue_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_segmentcatalogue.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_segmentcatalogue.md) on 2026-05-06.