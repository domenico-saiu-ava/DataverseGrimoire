---
logical: "msdyn_adaptivecardconfiguration"
display: "Adaptive Card Configuration"
entitySetName: "msdyn_adaptivecardconfigurations"
primaryId: "msdyn_adaptivecardconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Adaptive Card Configuration

Adaptive Card Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_adaptivecardconfiguration` |
| Display name | Adaptive Card Configuration |
| Display (plural) | Adaptive Card Configuration |
| Schema name | `msdyn_adaptivecardconfiguration` |
| Entity set (Web API) | `msdyn_adaptivecardconfigurations` |
| Primary id attribute | `msdyn_adaptivecardconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_adaptivecardconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_adaptivecardconfigurations(<guid>)
POST /api/data/v9.2/msdyn_adaptivecardconfigurations
PATCH /api/data/v9.2/msdyn_adaptivecardconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_adaptivecardconfigurations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_adaptivecardconfigurationId`, `msdyn_adaptivecardtemplate`, `msdyn_name`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_adaptivecardconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_adaptivecardconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_adaptivecardconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_adaptivecardconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_adaptivecardconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_adaptivecardconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_adaptivecardconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_adaptivecardconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_adaptivecardconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_adaptivecardconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_adaptivecardconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_adaptivecardconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_adaptivecardconfiguration.md) on 2026-05-06.