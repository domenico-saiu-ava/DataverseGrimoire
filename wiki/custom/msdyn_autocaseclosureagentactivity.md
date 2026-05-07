---
logical: "msdyn_autocaseclosureagentactivity"
display: "Attività Agente di gestione dei casi per la chiusura del caso"
entitySetName: "msdyn_autocaseclosureagentactivities"
primaryId: "msdyn_autocaseclosureagentactivityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Attività Agente di gestione dei casi per la chiusura del caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autocaseclosureagentactivity` |
| Display name | Attività Agente di gestione dei casi per la chiusura del caso |
| Display (plural) | Attività Agente di gestione dei casi per la chiusura del caso |
| Schema name | `msdyn_autocaseclosureagentactivity` |
| Entity set (Web API) | `msdyn_autocaseclosureagentactivities` |
| Primary id attribute | `msdyn_autocaseclosureagentactivityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autocaseclosureagentactivities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_autocaseclosureagentactivities(<guid>)
POST /api/data/v9.2/msdyn_autocaseclosureagentactivities
PATCH /api/data/v9.2/msdyn_autocaseclosureagentactivities(<guid>)
DELETE /api/data/v9.2/msdyn_autocaseclosureagentactivities(<guid>)
```

## Attributes

Writable: **20** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_activityid`, `msdyn_activitytype`, `msdyn_aisimulationrunid`, `msdyn_autocaseclosureagentactivityid`, `msdyn_autocaseclosureagentgeneratedemailid`, `msdyn_autocaseclosureagentmonitoringid`, `msdyn_casefollowupandclosureconfigurationid`, `msdyn_followupcount`, `msdyn_incidentid`, `msdyn_isfullautonomous`, `msdyn_name`, `msdyn_regarding`, `msdyn_retrycount`, `msdyn_triggertrackingid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_autocaseclosureagentactivity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autocaseclosureagentactivity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autocaseclosureagentactivity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autocaseclosureagentactivity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_autocaseclosureagentactivity` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_autocaseclosureagentactivity_msdyn_autocaseclosureagentmonitoringid_monitoringid` | [msdyn_autocaseclosureagentmonitoring](msdyn_autocaseclosureagentmonitoring.md) | `msdyn_autocaseclosureagentmonitoringid` | `msdyn_autocaseclosureagentmonitoringid` |
| `msdyn_autocaseclosureagentactivity_msdyn_casefollowupandclosureconfigurationid_configurationid` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `msdyn_casefollowupandclosureconfigurationid` | `msdyn_casefollowupandclosureconfigurationid` |
| `msdyn_email_msdyn_autocaseclosureagentactivity_activityid` | [email](email.md) | `msdyn_activityid` | `msdyn_activityid` |
| `msdyn_email_msdyn_autocaseclosureagentactivity_autocaseclosureagentgeneratedemailid` | [email](email.md) | `msdyn_autocaseclosureagentgeneratedemailid` | `msdyn_autocaseclosureagentgeneratedemailid` |
| `msdyn_incident_msdyn_autocaseclosureagentactivity_incidentid` | [incident](incident.md) | `msdyn_incidentid` | `msdyn_incidentid` |
| `msdyn_autocaseclosureagentactivity_regarding_incident` | [incident](incident.md) | `msdyn_regarding` | `msdyn_regarding` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autocaseclosureagentactivity_SyncErrors` | [msdyn_autocaseclosureagentactivity](msdyn_autocaseclosureagentactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocaseclosureagentactivity` |
| `msdyn_autocaseclosureagentactivity_AsyncOperations` | [msdyn_autocaseclosureagentactivity](msdyn_autocaseclosureagentactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocaseclosureagentactivity` |
| `msdyn_autocaseclosureagentactivity_MailboxTrackingFolders` | [msdyn_autocaseclosureagentactivity](msdyn_autocaseclosureagentactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocaseclosureagentactivity` |
| `msdyn_autocaseclosureagentactivity_UserEntityInstanceDatas` | [msdyn_autocaseclosureagentactivity](msdyn_autocaseclosureagentactivity.md) | `objectid` | `objectid_msdyn_autocaseclosureagentactivity` |
| `msdyn_autocaseclosureagentactivity_ProcessSession` | [msdyn_autocaseclosureagentactivity](msdyn_autocaseclosureagentactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocaseclosureagentactivity` |
| `msdyn_autocaseclosureagentactivity_BulkDeleteFailures` | [msdyn_autocaseclosureagentactivity](msdyn_autocaseclosureagentactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocaseclosureagentactivity` |
| `msdyn_autocaseclosureagentactivity_PrincipalObjectAttributeAccesses` | [msdyn_autocaseclosureagentactivity](msdyn_autocaseclosureagentactivity.md) | `objectid` | `objectid_msdyn_autocaseclosureagentactivity` |


## Source

Generated from [msdyn_autocaseclosureagentactivity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_autocaseclosureagentactivity')) on 2026-05-07.