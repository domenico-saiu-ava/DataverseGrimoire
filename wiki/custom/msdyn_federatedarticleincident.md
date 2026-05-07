---
logical: "msdyn_federatedarticleincident"
display: "Incidente articolo federato della Knowledge Base"
entitySetName: "msdyn_federatedarticleincidents"
primaryId: "msdyn_federatedarticleincidentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Incidente articolo federato della Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_federatedarticleincident` |
| Display name | Incidente articolo federato della Knowledge Base |
| Display (plural) | Incidenti articolo federato della Knowledge Base |
| Schema name | `msdyn_federatedarticleincident` |
| Entity set (Web API) | `msdyn_federatedarticleincidents` |
| Primary id attribute | `msdyn_federatedarticleincidentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_federatedarticleincidents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_federatedarticleincidents(<guid>)
POST /api/data/v9.2/msdyn_federatedarticleincidents
PATCH /api/data/v9.2/msdyn_federatedarticleincidents(<guid>)
DELETE /api/data/v9.2/msdyn_federatedarticleincidents(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_federatedarticleid`, `msdyn_federatedarticleincidentid`, `msdyn_incidentid`, `msdyn_name`, `msdyn_searchproviderarticleid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_incident_msdyn_federatedarticleincident_IncidentId` | [incident](incident.md) | `msdyn_incidentid` | `msdyn_incidentid` |
| `lk_msdyn_federatedarticleincident_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_federatedarticleincident_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_federatedarticleincident_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_federatedarticleincident_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_federatedarticleincident` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `msdyn_federatedarticleid` | `msdyn_federatedarticleid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_federatedarticleincident_SyncErrors` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticleincident` |
| `msdyn_federatedarticleincident_DuplicateMatchingRecord` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_federatedarticleincident` |
| `msdyn_federatedarticleincident_DuplicateBaseRecord` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `baserecordid` | `baserecordid_msdyn_federatedarticleincident` |
| `msdyn_federatedarticleincident_AsyncOperations` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticleincident` |
| `msdyn_federatedarticleincident_MailboxTrackingFolders` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticleincident` |
| `msdyn_federatedarticleincident_UserEntityInstanceDatas` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `objectid` | `objectid_msdyn_federatedarticleincident` |
| `msdyn_federatedarticleincident_ProcessSession` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticleincident` |
| `msdyn_federatedarticleincident_BulkDeleteFailures` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticleincident` |
| `msdyn_federatedarticleincident_PrincipalObjectAttributeAccesses` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `objectid` | `objectid_msdyn_federatedarticleincident` |


## Source

Generated from [msdyn_federatedarticleincident (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_federatedarticleincident')) on 2026-05-07.