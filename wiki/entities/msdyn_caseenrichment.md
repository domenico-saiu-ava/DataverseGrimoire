---
logical: "msdyn_caseenrichment"
display: "Case Enrichment"
entitySetName: "msdyn_caseenrichments"
primaryId: "msdyn_caseenrichmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Case Enrichment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_caseenrichment` |
| Display name | Case Enrichment |
| Display (plural) | Case Enrichments |
| Schema name | `msdyn_caseenrichment` |
| Entity set (Web API) | `msdyn_caseenrichments` |
| Primary id attribute | `msdyn_caseenrichmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_caseenrichments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_caseenrichments(<guid>)
POST /api/data/v9.2/msdyn_caseenrichments
PATCH /api/data/v9.2/msdyn_caseenrichments(<guid>)
DELETE /api/data/v9.2/msdyn_caseenrichments(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_caseenrichmentId`, `msdyn_caseid`, `msdyn_name`, `msdyn_summary`, `msdyn_tags`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_caseenrichment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_caseenrichment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_caseenrichment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_caseenrichment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_incident_msdyn_caseenrichment_caseid` | [incident](incident.md) | `msdyn_caseid` | `msdyn_caseid` |
| `organization_msdyn_caseenrichment` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_caseenrichment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_caseenrichment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_caseenrichment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_caseenrichment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_caseenrichment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_caseenrichment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_caseenrichment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_caseenrichment.md) on 2026-05-06.