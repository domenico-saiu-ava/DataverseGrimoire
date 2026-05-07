---
logical: "msdyn_segmentcatalogue"
display: "SegmentsUtil"
entitySetName: "msdyn_segmentcatalogues"
primaryId: "msdyn_segmentcatalogueid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`importsequencenumber`, `msdyn_name`, `msdyn_segmentcatalogueid`, `msdyn_segmentcatalogueuniquekey`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_segmentcatalogue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_segmentcatalogue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_segmentcatalogue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_segmentcatalogue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_segmentcatalogue` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_segmentcatalogue_SyncErrors` | [msdyn_segmentcatalogue](msdyn_segmentcatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentcatalogue` |
| `msdyn_segmentcatalogue_AsyncOperations` | [msdyn_segmentcatalogue](msdyn_segmentcatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentcatalogue` |
| `msdyn_segmentcatalogue_MailboxTrackingFolders` | [msdyn_segmentcatalogue](msdyn_segmentcatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentcatalogue` |
| `msdyn_segmentcatalogue_UserEntityInstanceDatas` | [msdyn_segmentcatalogue](msdyn_segmentcatalogue.md) | `objectid` | `objectid_msdyn_segmentcatalogue` |
| `msdyn_segmentcatalogue_ProcessSession` | [msdyn_segmentcatalogue](msdyn_segmentcatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentcatalogue` |
| `msdyn_segmentcatalogue_BulkDeleteFailures` | [msdyn_segmentcatalogue](msdyn_segmentcatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentcatalogue` |
| `msdyn_segmentcatalogue_PrincipalObjectAttributeAccesses` | [msdyn_segmentcatalogue](msdyn_segmentcatalogue.md) | `objectid` | `objectid_msdyn_segmentcatalogue` |


## Source

Generated from [msdyn_segmentcatalogue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_segmentcatalogue')) on 2026-05-07.