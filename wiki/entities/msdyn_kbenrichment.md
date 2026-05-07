---
logical: "msdyn_kbenrichment"
display: "KB Enrichment"
entitySetName: "msdyn_kbenrichments"
primaryId: "msdyn_kbenrichmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# KB Enrichment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kbenrichment` |
| Display name | KB Enrichment |
| Display (plural) | KB Enrichments |
| Schema name | `msdyn_kbenrichment` |
| Entity set (Web API) | `msdyn_kbenrichments` |
| Primary id attribute | `msdyn_kbenrichmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kbenrichments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kbenrichments(<guid>)
POST /api/data/v9.2/msdyn_kbenrichments
PATCH /api/data/v9.2/msdyn_kbenrichments(<guid>)
DELETE /api/data/v9.2/msdyn_kbenrichments(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_detailsummary`, `msdyn_kbenrichmentId`, `msdyn_kbid`, `msdyn_name`, `msdyn_summary`, `msdyn_tags`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_kbenrichment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kbenrichment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kbenrichment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kbenrichment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_knowledgearticle_msdyn_kbenrichment_kbid` | [knowledgearticle](knowledgearticle.md) | `msdyn_kbid` | `msdyn_kbid` |
| `organization_msdyn_kbenrichment` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kbenrichment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbenrichment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbenrichment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbenrichment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_kbenrichment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbenrichment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_kbenrichment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_kbenrichment.md) on 2026-05-06.