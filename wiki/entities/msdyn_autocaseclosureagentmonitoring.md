---
logical: "msdyn_autocaseclosureagentmonitoring"
display: "Case Management Agent for case closure Monitoring"
entitySetName: "msdyn_autocaseclosureagentmonitorings"
primaryId: "msdyn_autocaseclosureagentmonitoringid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Case Management Agent for case closure Monitoring

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autocaseclosureagentmonitoring` |
| Display name | Case Management Agent for case closure Monitoring |
| Display (plural) | Case Management Agent for case closure Monitoring |
| Schema name | `msdyn_autocaseclosureagentmonitoring` |
| Entity set (Web API) | `msdyn_autocaseclosureagentmonitorings` |
| Primary id attribute | `msdyn_autocaseclosureagentmonitoringid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autocaseclosureagentmonitorings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_autocaseclosureagentmonitorings(<guid>)
POST /api/data/v9.2/msdyn_autocaseclosureagentmonitorings
PATCH /api/data/v9.2/msdyn_autocaseclosureagentmonitorings(<guid>)
DELETE /api/data/v9.2/msdyn_autocaseclosureagentmonitorings(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_autocaseclosureagentmonitoringId`, `msdyn_casefollowupandclosureconfigurationid`, `msdyn_didcustomerconfirmcaseresolution`, `msdyn_didcustomerreplytoagentemail`, `msdyn_incidentid`, `msdyn_isfullautonomous`, `msdyn_name`, `msdyn_nextaction`, `msdyn_nextactiondue`, `msdyn_regarding`, `msdyn_regardingIdType`, `msdyn_strikecount`, `msdyn_wasfollowupdirectlyinvoked`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_autocaseclosureagentmonitoring_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autocaseclosureagentmonitoring_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autocaseclosureagentmonitoring_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autocaseclosureagentmonitoring_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_autocaseclosureagentmonitoring_msdyn_casefollowupandclosureconfiguration_configurationid` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `msdyn_casefollowupandclosureconfigurationid` | `msdyn_casefollowupandclosureconfigurationid` |
| `msdyn_autocaseclosureagentmonitoring_regarding_incident` | [incident](incident.md) | `msdyn_regarding` | `msdyn_regarding` |
| `msdyn_incident_msdyn_autocaseclosureagentmonitoring_incidentid` | [incident](incident.md) | `msdyn_incidentid` | `msdyn_incidentid` |
| `organization_msdyn_autocaseclosureagentmonitoring` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autocaseclosureagentactivity_msdyn_autocaseclosureagentmonitoringid_monitoringid` | _n/a_ | `msdyn_autocaseclosureagentmonitoringid` | _n/a_ |
| `msdyn_autocaseclosureagentmonitoring_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocaseclosureagentmonitoring_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocaseclosureagentmonitoring_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocaseclosureagentmonitoring_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_autocaseclosureagentmonitoring_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocaseclosureagentmonitoring_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_autocaseclosureagentmonitoring.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_autocaseclosureagentmonitoring.md) on 2026-05-06.