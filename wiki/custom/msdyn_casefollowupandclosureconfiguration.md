---
logical: "msdyn_casefollowupandclosureconfiguration"
display: "Configurazione di completamento e chiusura dei casi"
entitySetName: "msdyn_casefollowupandclosureconfigurations"
primaryId: "msdyn_casefollowupandclosureconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione di completamento e chiusura dei casi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casefollowupandclosureconfiguration` |
| Display name | Configurazione di completamento e chiusura dei casi |
| Display (plural) | Configurazioni di completamento e chiusura dei casi |
| Schema name | `msdyn_casefollowupandclosureconfiguration` |
| Entity set (Web API) | `msdyn_casefollowupandclosureconfigurations` |
| Primary id attribute | `msdyn_casefollowupandclosureconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casefollowupandclosureconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casefollowupandclosureconfigurations(<guid>)
POST /api/data/v9.2/msdyn_casefollowupandclosureconfigurations
PATCH /api/data/v9.2/msdyn_casefollowupandclosureconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_casefollowupandclosureconfigurations(<guid>)
```

## Attributes

Writable: **23** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_activationmode`, `msdyn_casefollowupandclosureconfigurationid`, `msdyn_caseresolutionattributes`, `msdyn_conditionname`, `msdyn_conditionxml`, `msdyn_followupemailattributes`, `msdyn_followupemailtemplates`, `msdyn_followuptrigger`, `msdyn_followupwaittimes`, `msdyn_incidententityname`, `msdyn_isdirectinvocationenabled`, `msdyn_isfullautonomous`, `msdyn_name`, `msdyn_numoffollowups`, `msdyn_preresolutionperiod`, `msdyn_ruleorder`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casefollowupandclosureconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casefollowupandclosureconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casefollowupandclosureconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casefollowupandclosureconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_casefollowupandclosureconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casefollowupandclosureconfiguration_SyncErrors` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_casefollowupandclosureconfiguration` |
| `msdyn_casefollowupandclosureconfiguration_AsyncOperations` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_casefollowupandclosureconfiguration` |
| `msdyn_casefollowupandclosureconfiguration_MailboxTrackingFolders` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_casefollowupandclosureconfiguration` |
| `msdyn_casefollowupandclosureconfiguration_UserEntityInstanceDatas` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `objectid` | `objectid_msdyn_casefollowupandclosureconfiguration` |
| `msdyn_casefollowupandclosureconfiguration_ProcessSession` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_casefollowupandclosureconfiguration` |
| `msdyn_casefollowupandclosureconfiguration_BulkDeleteFailures` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_casefollowupandclosureconfiguration` |
| `msdyn_casefollowupandclosureconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `objectid` | `objectid_msdyn_casefollowupandclosureconfiguration` |
| `msdyn_autocaseclosureagentactivity_msdyn_casefollowupandclosureconfigurationid_configurationid` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `msdyn_casefollowupandclosureconfigurationid` | `msdyn_casefollowupandclosureconfigurationid` |
| `msdyn_autocaseclosureagentmonitoring_msdyn_casefollowupandclosureconfiguration_configurationid` | [msdyn_casefollowupandclosureconfiguration](msdyn_casefollowupandclosureconfiguration.md) | `msdyn_casefollowupandclosureconfigurationid` | `msdyn_casefollowupandclosureconfigurationid` |


## Source

Generated from [msdyn_casefollowupandclosureconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_casefollowupandclosureconfiguration')) on 2026-05-07.