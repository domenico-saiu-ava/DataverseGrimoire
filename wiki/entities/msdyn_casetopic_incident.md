---
logical: "msdyn_casetopic_incident"
display: "Case topic Incident mapping"
entitySetName: "msdyn_casetopic_incidents"
primaryId: "msdyn_casetopic_incidentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Case topic Incident mapping

Cases mapping with the case topics

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casetopic_incident` |
| Display name | Case topic Incident mapping |
| Display (plural) | Case topic incidents |
| Schema name | `msdyn_casetopic_incident` |
| Entity set (Web API) | `msdyn_casetopic_incidents` |
| Primary id attribute | `msdyn_casetopic_incidentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casetopic_incidents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casetopic_incidents(<guid>)
POST /api/data/v9.2/msdyn_casetopic_incidents
PATCH /api/data/v9.2/msdyn_casetopic_incidents(<guid>)
DELETE /api/data/v9.2/msdyn_casetopic_incidents(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_casetopic_incidentId`, `msdyn_casetopicid`, `msdyn_incidentid`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casetopic_incident_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casetopic_incident_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casetopic_incident_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casetopic_incident_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_incident_msdyn_casetopic_incident_incidentid` | [incident](incident.md) | `msdyn_incidentid` | `msdyn_incidentid` |
| `msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid` | [msdyn_casetopic](msdyn_casetopic.md) | `msdyn_casetopicid` | `msdyn_casetopicid` |
| `organization_msdyn_casetopic_incident` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casetopic_incident_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopic_incident_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopic_incident_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopic_incident_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_casetopic_incident_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopic_incident_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_casetopic_incident.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_casetopic_incident.md) on 2026-05-06.