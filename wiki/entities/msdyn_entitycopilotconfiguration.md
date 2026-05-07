---
logical: "msdyn_entitycopilotconfiguration"
display: "Entity Copilot Configuration"
entitySetName: "msdyn_entitycopilotconfigurations"
primaryId: "msdyn_entitycopilotconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Entity Copilot Configuration

Entity Copilot Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entitycopilotconfiguration` |
| Display name | Entity Copilot Configuration |
| Display (plural) | Entity Copilot Configuration |
| Schema name | `msdyn_entitycopilotconfiguration` |
| Entity set (Web API) | `msdyn_entitycopilotconfigurations` |
| Primary id attribute | `msdyn_entitycopilotconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entitycopilotconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entitycopilotconfigurations(<guid>)
POST /api/data/v9.2/msdyn_entitycopilotconfigurations
PATCH /api/data/v9.2/msdyn_entitycopilotconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_entitycopilotconfigurations(<guid>)
```

## Attributes

Writable: **18** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_autotriggerproactiveinsight`, `msdyn_datacontextconfiguration`, `msdyn_displaytimer`, `msdyn_enableintent`, `msdyn_entitycopilotconfigurationId`, `msdyn_entityname`, `msdyn_name`, `msdyn_showsentimentenabled`, `msdyn_showslatimercontrolenabled`, `msdyn_summarysettingid`, `msdyn_viewconfiguration`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entitycopilotconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entitycopilotconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entitycopilotconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entitycopilotconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_entitycopilotconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entitycopilotconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entitycopilotconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entitycopilotconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_entitycopilotconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_entitycopilotconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entitycopilotconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_entitycopilotconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entitycopilotconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_entitycopilotconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_entitycopilotconfiguration.md) on 2026-05-06.