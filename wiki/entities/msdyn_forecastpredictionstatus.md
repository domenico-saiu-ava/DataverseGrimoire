---
logical: "msdyn_forecastpredictionstatus"
display: "Forecast Prediction Status"
entitySetName: "msdyn_forecastpredictionstatuses"
primaryId: "msdyn_forecastpredictionstatusid"
primaryName: "msdyn_predictionstatus"
tableType: "Standard"
ownership: "OrganizationOwned"
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

`ImportSequenceNumber`, `msdyn_errorcode`, `msdyn_errordetails`, `msdyn_failurecount`, `msdyn_forecastconfigurationid`, `msdyn_forecastpredictionstatusId`, `msdyn_nextscheduledtime`, `msdyn_orchestrationstage`, `msdyn_orchestrationstate`, `msdyn_outputgenerationdate`, `msdyn_predictionon`, `msdyn_predictionstatus`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastpredictionstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastpredictionstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastpredictionstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastpredictionstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecastpredictionstatus_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `organization_msdyn_forecastpredictionstatus` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastpredictionstatus_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_forecastpredictionstatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastpredictionstatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastpredictionstatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastpredictionstatus_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_forecastpredictionstatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastpredictionstatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_forecastpredictionstatus.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_forecastpredictionstatus.md) on 2026-05-06.