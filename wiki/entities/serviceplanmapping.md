---
logical: "serviceplanmapping"
display: "Service Plan Mapping"
entitySetName: "serviceplanmappings"
primaryId: "serviceplanmappingid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Service Plan Mapping

Service Plan Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `serviceplanmapping` |
| Display name | Service Plan Mapping |
| Display (plural) | Service Plan Mappings |
| Schema name | `ServicePlanMapping` |
| Entity set (Web API) | `serviceplanmappings` |
| Primary id attribute | `serviceplanmappingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/serviceplanmappings?$select=name&$top=10
GET /api/data/v9.2/serviceplanmappings(<guid>)
POST /api/data/v9.2/serviceplanmappings
PATCH /api/data/v9.2/serviceplanmappings(<guid>)
DELETE /api/data/v9.2/serviceplanmappings(<guid>)
```

## Attributes

Writable: **14** · Read-only: **13**

### Writable

`CustomAPI`, `Entity`, `FeatureControl`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `SdkMessage`, `ServicePlan`, `ServicePlanMappingId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `customapi_serviceplanmapping` | [customapi](customapi.md) | `customapi` | `CustomAPI` |
| `entity_serviceplanmapping` | [entity](entity.md) | `entity` | `Entity` |
| `lk_serviceplanmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_serviceplanmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_serviceplanmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_serviceplanmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `sdkmessage_serviceplanmapping` | [sdkmessage](sdkmessage.md) | `sdkmessage` | `SdkMessage` |
| `serviceplan_serviceplanmapping` | [serviceplan](serviceplan.md) | `serviceplan` | `ServicePlan` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `serviceplanmapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `serviceplanmapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `serviceplanmapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `serviceplanmapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `serviceplanmapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `serviceplanmapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `serviceplanmapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `serviceplanmapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [serviceplanmapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/serviceplanmapping.md) on 2026-05-06.