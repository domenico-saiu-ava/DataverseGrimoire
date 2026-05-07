---
logical: "msdyn_evaluationinputconfig"
display: "Evaluation input config"
entitySetName: "msdyn_evaluationinputconfigs"
primaryId: "msdyn_evaluationinputconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Evaluation input config

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationinputconfig` |
| Display name | Evaluation input config |
| Display (plural) | Evaluation input configs |
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

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_EvaluatedEntity`, `msdyn_EvaluationInputConfigId`, `msdyn_InputConfig`, `msdyn_isBulkEnabled`, `msdyn_Name`, `msdyn_ProvisioningStatus`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationinputconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationinputconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationinputconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationinputconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_evaluationinputconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationinputconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationinputconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationinputconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationinputconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationinputconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationinputconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_evaluationinputconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationinputconfig.md) on 2026-05-06.