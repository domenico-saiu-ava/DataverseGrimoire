---
logical: "serviceplanmapping"
display: "Service Plan Mapping"
entitySetName: "serviceplanmappings"
primaryId: "serviceplanmappingid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`customapi`, `entity`, `featurecontrol`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `sdkmessage`, `serviceplan`, `serviceplanmappingid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_serviceplanmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_serviceplanmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_serviceplanmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_serviceplanmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `entity_serviceplanmapping` | [entity](entity.md) | `entity` | `Entity` |
| `sdkmessage_serviceplanmapping` | [sdkmessage](sdkmessage.md) | `sdkmessage` | `SdkMessage` |
| `serviceplan_serviceplanmapping` | [serviceplan](serviceplan.md) | `serviceplan` | `ServicePlan` |
| `customapi_serviceplanmapping` | [customapi](customapi.md) | `customapi` | `CustomAPI` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `serviceplanmapping_SyncErrors` | [serviceplanmapping](serviceplanmapping.md) | `regardingobjectid` | `regardingobjectid_serviceplanmapping` |
| `serviceplanmapping_DuplicateMatchingRecord` | [serviceplanmapping](serviceplanmapping.md) | `duplicaterecordid` | `duplicaterecordid_serviceplanmapping` |
| `serviceplanmapping_DuplicateBaseRecord` | [serviceplanmapping](serviceplanmapping.md) | `baserecordid` | `baserecordid_serviceplanmapping` |
| `serviceplanmapping_AsyncOperations` | [serviceplanmapping](serviceplanmapping.md) | `regardingobjectid` | `regardingobjectid_serviceplanmapping` |
| `serviceplanmapping_MailboxTrackingFolders` | [serviceplanmapping](serviceplanmapping.md) | `regardingobjectid` | `regardingobjectid_serviceplanmapping` |
| `serviceplanmapping_UserEntityInstanceDatas` | [serviceplanmapping](serviceplanmapping.md) | `objectid` | `objectid_serviceplanmapping` |
| `serviceplanmapping_ProcessSession` | [serviceplanmapping](serviceplanmapping.md) | `regardingobjectid` | `regardingobjectid_serviceplanmapping` |
| `serviceplanmapping_BulkDeleteFailures` | [serviceplanmapping](serviceplanmapping.md) | `regardingobjectid` | `regardingobjectid_serviceplanmapping` |
| `serviceplanmapping_PrincipalObjectAttributeAccesses` | [serviceplanmapping](serviceplanmapping.md) | `objectid` | `objectid_serviceplanmapping` |


## Source

Generated from [serviceplanmapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='serviceplanmapping')) on 2026-05-07.