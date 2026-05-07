---
logical: "msdyn_evaluationinputconfig"
display: "Configurazione input valutazione"
entitySetName: "msdyn_evaluationinputconfigs"
primaryId: "msdyn_evaluationinputconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione input valutazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationinputconfig` |
| Display name | Configurazione input valutazione |
| Display (plural) | Configurazioni input valutazione |
| Schema name | `msdyn_EvaluationInputConfig` |
| Entity set (Web API) | `msdyn_evaluationinputconfigs` |
| Primary id attribute | `msdyn_evaluationinputconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationinputconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationinputconfigs(<guid>)
POST /api/data/v9.2/msdyn_evaluationinputconfigs
PATCH /api/data/v9.2/msdyn_evaluationinputconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationinputconfigs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_evaluatedentity`, `msdyn_evaluationinputconfigid`, `msdyn_inputconfig`, `msdyn_isbulkenabled`, `msdyn_name`, `msdyn_provisioningstatus`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationinputconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationinputconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationinputconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationinputconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_evaluationinputconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationinputconfig_SyncErrors` | [msdyn_evaluationinputconfig](msdyn_evaluationinputconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationinputconfig` |
| `msdyn_evaluationinputconfig_AsyncOperations` | [msdyn_evaluationinputconfig](msdyn_evaluationinputconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationinputconfig` |
| `msdyn_evaluationinputconfig_MailboxTrackingFolders` | [msdyn_evaluationinputconfig](msdyn_evaluationinputconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationinputconfig` |
| `msdyn_evaluationinputconfig_UserEntityInstanceDatas` | [msdyn_evaluationinputconfig](msdyn_evaluationinputconfig.md) | `objectid` | `objectid_msdyn_evaluationinputconfig` |
| `msdyn_evaluationinputconfig_ProcessSession` | [msdyn_evaluationinputconfig](msdyn_evaluationinputconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationinputconfig` |
| `msdyn_evaluationinputconfig_BulkDeleteFailures` | [msdyn_evaluationinputconfig](msdyn_evaluationinputconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationinputconfig` |
| `msdyn_evaluationinputconfig_PrincipalObjectAttributeAccesses` | [msdyn_evaluationinputconfig](msdyn_evaluationinputconfig.md) | `objectid` | `objectid_msdyn_evaluationinputconfig` |


## Source

Generated from [msdyn_evaluationinputconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationinputconfig')) on 2026-05-07.