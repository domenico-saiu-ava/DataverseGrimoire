---
logical: "msdyn_caseenrichment"
display: "Arricchimento caso"
entitySetName: "msdyn_caseenrichments"
primaryId: "msdyn_caseenrichmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Arricchimento caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_caseenrichment` |
| Display name | Arricchimento caso |
| Display (plural) | Arricchimenti caso |
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

`importsequencenumber`, `msdyn_caseenrichmentid`, `msdyn_caseid`, `msdyn_name`, `msdyn_summary`, `msdyn_tags`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_caseenrichment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_caseenrichment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_caseenrichment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_caseenrichment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_caseenrichment` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_incident_msdyn_caseenrichment_caseid` | [incident](incident.md) | `msdyn_caseid` | `msdyn_caseid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_caseenrichment_SyncErrors` | [msdyn_caseenrichment](msdyn_caseenrichment.md) | `regardingobjectid` | `regardingobjectid_msdyn_caseenrichment` |
| `msdyn_caseenrichment_AsyncOperations` | [msdyn_caseenrichment](msdyn_caseenrichment.md) | `regardingobjectid` | `regardingobjectid_msdyn_caseenrichment` |
| `msdyn_caseenrichment_MailboxTrackingFolders` | [msdyn_caseenrichment](msdyn_caseenrichment.md) | `regardingobjectid` | `regardingobjectid_msdyn_caseenrichment` |
| `msdyn_caseenrichment_UserEntityInstanceDatas` | [msdyn_caseenrichment](msdyn_caseenrichment.md) | `objectid` | `objectid_msdyn_caseenrichment` |
| `msdyn_caseenrichment_ProcessSession` | [msdyn_caseenrichment](msdyn_caseenrichment.md) | `regardingobjectid` | `regardingobjectid_msdyn_caseenrichment` |
| `msdyn_caseenrichment_BulkDeleteFailures` | [msdyn_caseenrichment](msdyn_caseenrichment.md) | `regardingobjectid` | `regardingobjectid_msdyn_caseenrichment` |
| `msdyn_caseenrichment_PrincipalObjectAttributeAccesses` | [msdyn_caseenrichment](msdyn_caseenrichment.md) | `objectid` | `objectid_msdyn_caseenrichment` |


## Source

Generated from [msdyn_caseenrichment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_caseenrichment')) on 2026-05-07.