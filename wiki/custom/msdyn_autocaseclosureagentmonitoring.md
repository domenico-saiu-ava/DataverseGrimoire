---
logical: "msdyn_autocaseclosureagentmonitoring"
display: "Monitoraggio di Agente di gestione dei casi per la chiusura del caso"
entitySetName: "msdyn_autocaseclosureagentmonitorings"
primaryId: "msdyn_autocaseclosureagentmonitoringid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Monitoraggio di Agente di gestione dei casi per la chiusura del caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autocaseclosureagentmonitoring` |
| Display name | Monitoraggio di Agente di gestione dei casi per la chiusura del caso |
| Display (plural) | Monitoraggio di Agente di gestione dei casi per la chiusura del caso |
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

Writable: **18** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_autocaseclosureagentmonitoringid`, `msdyn_casefollowupandclosureconfigurationid`, `msdyn_didcustomerconfirmcaseresolution`, `msdyn_didcustomerreplytoagentemail`, `msdyn_incidentid`, `msdyn_isfullautonomous`, `msdyn_name`, `msdyn_nextaction`, `msdyn_nextactiondue`, `msdyn_regarding`, `msdyn_strikecount`, `msdyn_wasfollowupdirectlyinvoked`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_autocaseclosureagentmonitoring_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autocaseclosureagentmonitoring_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autocaseclosureagentmonitoring_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autocaseclosureagentmonitoring_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_autocaseclosureagentmonitoring` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_autocaseclosureagentmonitoring_msdyn_casefollowupandclosureconfiguration_configurationid` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `msdyn_casefollowupandclosureconfigurationid` | `msdyn_casefollowupandclosureconfigurationid` |
| `msdyn_incident_msdyn_autocaseclosureagentmonitoring_incidentid` | [incident](incident.md) | `msdyn_incidentid` | `msdyn_incidentid` |
| `msdyn_autocaseclosureagentmonitoring_regarding_incident` | [incident](incident.md) | `msdyn_regarding` | `msdyn_regarding` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autocaseclosureagentmonitoring_SyncErrors` | [msdyn_autocaseclosureagentmonitoring](msdyn_autocaseclosureagentmonitoring.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocaseclosureagentmonitoring` |
| `msdyn_autocaseclosureagentmonitoring_AsyncOperations` | [msdyn_autocaseclosureagentmonitoring](msdyn_autocaseclosureagentmonitoring.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocaseclosureagentmonitoring` |
| `msdyn_autocaseclosureagentmonitoring_MailboxTrackingFolders` | [msdyn_autocaseclosureagentmonitoring](msdyn_autocaseclosureagentmonitoring.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocaseclosureagentmonitoring` |
| `msdyn_autocaseclosureagentmonitoring_UserEntityInstanceDatas` | [msdyn_autocaseclosureagentmonitoring](msdyn_autocaseclosureagentmonitoring.md) | `objectid` | `objectid_msdyn_autocaseclosureagentmonitoring` |
| `msdyn_autocaseclosureagentmonitoring_ProcessSession` | [msdyn_autocaseclosureagentmonitoring](msdyn_autocaseclosureagentmonitoring.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocaseclosureagentmonitoring` |
| `msdyn_autocaseclosureagentmonitoring_BulkDeleteFailures` | [msdyn_autocaseclosureagentmonitoring](msdyn_autocaseclosureagentmonitoring.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocaseclosureagentmonitoring` |
| `msdyn_autocaseclosureagentmonitoring_PrincipalObjectAttributeAccesses` | [msdyn_autocaseclosureagentmonitoring](msdyn_autocaseclosureagentmonitoring.md) | `objectid` | `objectid_msdyn_autocaseclosureagentmonitoring` |
| `msdyn_autocaseclosureagentactivity_msdyn_autocaseclosureagentmonitoringid_monitoringid` | [msdyn_autocaseclosureagentmonitoring](msdyn_autocaseclosureagentmonitoring.md) | `msdyn_autocaseclosureagentmonitoringid` | `msdyn_autocaseclosureagentmonitoringid` |


## Source

Generated from [msdyn_autocaseclosureagentmonitoring (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_autocaseclosureagentmonitoring')) on 2026-05-07.