---
logical: "msdyn_casetopic_incident"
display: "Mapping incidenti argomento del caso"
entitySetName: "msdyn_casetopic_incidents"
primaryId: "msdyn_casetopic_incidentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping incidenti argomento del caso

Mapping casi con gli argomenti del caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casetopic_incident` |
| Display name | Mapping incidenti argomento del caso |
| Display (plural) | Incidenti argomento del caso |
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

`importsequencenumber`, `msdyn_casetopic_incidentid`, `msdyn_casetopicid`, `msdyn_incidentid`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casetopic_incident_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casetopic_incident_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casetopic_incident_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casetopic_incident_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_casetopic_incident` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_incident_msdyn_casetopic_incident_incidentid` | [incident](incident.md) | `msdyn_incidentid` | `msdyn_incidentid` |
| `msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid` | [msdyn_casetopic](msdyn_casetopic.md) | `msdyn_casetopicid` | `msdyn_casetopicid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casetopic_incident_SyncErrors` | [msdyn_casetopic_incident](msdyn_casetopic_incident.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopic_incident` |
| `msdyn_casetopic_incident_AsyncOperations` | [msdyn_casetopic_incident](msdyn_casetopic_incident.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopic_incident` |
| `msdyn_casetopic_incident_MailboxTrackingFolders` | [msdyn_casetopic_incident](msdyn_casetopic_incident.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopic_incident` |
| `msdyn_casetopic_incident_UserEntityInstanceDatas` | [msdyn_casetopic_incident](msdyn_casetopic_incident.md) | `objectid` | `objectid_msdyn_casetopic_incident` |
| `msdyn_casetopic_incident_ProcessSession` | [msdyn_casetopic_incident](msdyn_casetopic_incident.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopic_incident` |
| `msdyn_casetopic_incident_BulkDeleteFailures` | [msdyn_casetopic_incident](msdyn_casetopic_incident.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopic_incident` |
| `msdyn_casetopic_incident_PrincipalObjectAttributeAccesses` | [msdyn_casetopic_incident](msdyn_casetopic_incident.md) | `objectid` | `objectid_msdyn_casetopic_incident` |


## Source

Generated from [msdyn_casetopic_incident (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_casetopic_incident')) on 2026-05-07.