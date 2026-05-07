---
logical: "msdyn_forecastpredictionstatus"
display: "Forecast Prediction Status"
entitySetName: "msdyn_forecastpredictionstatuses"
primaryId: "msdyn_forecastpredictionstatusid"
primaryName: "msdyn_predictionstatus"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Forecast Prediction Status

Forecast Prediction Status

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastpredictionstatus` |
| Display name | Forecast Prediction Status |
| Display (plural) | Forecast Prediction Status |
| Schema name | `msdyn_forecastpredictionstatus` |
| Entity set (Web API) | `msdyn_forecastpredictionstatuses` |
| Primary id attribute | `msdyn_forecastpredictionstatusid` |
| Primary name attribute | `msdyn_predictionstatus` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecastpredictionstatuses?$select=msdyn_predictionstatus&$top=10
GET /api/data/v9.2/msdyn_forecastpredictionstatuses(<guid>)
POST /api/data/v9.2/msdyn_forecastpredictionstatuses
PATCH /api/data/v9.2/msdyn_forecastpredictionstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_forecastpredictionstatuses(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_errorcode`, `msdyn_errordetails`, `msdyn_failurecount`, `msdyn_forecastconfigurationid`, `msdyn_forecastpredictionstatusid`, `msdyn_nextscheduledtime`, `msdyn_orchestrationstage`, `msdyn_orchestrationstate`, `msdyn_outputgenerationdate`, `msdyn_predictionon`, `msdyn_predictionstatus`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastpredictionstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastpredictionstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastpredictionstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastpredictionstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_forecastpredictionstatus` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecastpredictionstatus_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastpredictionstatus_SyncErrors` | [msdyn_forecastpredictionstatus](msdyn_forecastpredictionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastpredictionstatus` |
| `msdyn_forecastpredictionstatus_AsyncOperations` | [msdyn_forecastpredictionstatus](msdyn_forecastpredictionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastpredictionstatus` |
| `msdyn_forecastpredictionstatus_MailboxTrackingFolders` | [msdyn_forecastpredictionstatus](msdyn_forecastpredictionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastpredictionstatus` |
| `msdyn_forecastpredictionstatus_UserEntityInstanceDatas` | [msdyn_forecastpredictionstatus](msdyn_forecastpredictionstatus.md) | `objectid` | `objectid_msdyn_forecastpredictionstatus` |
| `msdyn_forecastpredictionstatus_ProcessSession` | [msdyn_forecastpredictionstatus](msdyn_forecastpredictionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastpredictionstatus` |
| `msdyn_forecastpredictionstatus_BulkDeleteFailures` | [msdyn_forecastpredictionstatus](msdyn_forecastpredictionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastpredictionstatus` |
| `msdyn_forecastpredictionstatus_PrincipalObjectAttributeAccesses` | [msdyn_forecastpredictionstatus](msdyn_forecastpredictionstatus.md) | `objectid` | `objectid_msdyn_forecastpredictionstatus` |
| `msdyn_forecastpredictionstatus_Annotations` | [msdyn_forecastpredictionstatus](msdyn_forecastpredictionstatus.md) | `objectid` | `objectid_msdyn_forecastpredictionstatus` |


## Source

Generated from [msdyn_forecastpredictionstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_forecastpredictionstatus')) on 2026-05-07.