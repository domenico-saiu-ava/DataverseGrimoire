---
logical: "serviceplancustomcontrol"
display: "Service Plan Custom Control"
entitySetName: "serviceplancustomcontrolset"
primaryId: "serviceplancustomcontrolid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Service Plan Custom Control

Service Plan Custom Controls

## Identity

| Property | Value |
| --- | --- |
| Logical name | `serviceplancustomcontrol` |
| Display name | Service Plan Custom Control |
| Display (plural) | Service Plan Custom Controls |
| Schema name | `ServicePlanCustomControl` |
| Entity set (Web API) | `serviceplancustomcontrolset` |
| Primary id attribute | `serviceplancustomcontrolid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/serviceplancustomcontrolset?$select=name&$top=10
GET /api/data/v9.2/serviceplancustomcontrolset(<guid>)
POST /api/data/v9.2/serviceplancustomcontrolset
PATCH /api/data/v9.2/serviceplancustomcontrolset(<guid>)
DELETE /api/data/v9.2/serviceplancustomcontrolset(<guid>)
```

## Attributes

Writable: **12** · Read-only: **13**

### Writable

`customcontrolid`, `featurecontrol`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `serviceplancustomcontrolid`, `serviceplanid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_serviceplancustomcontrol_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_serviceplancustomcontrol_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_serviceplancustomcontrol_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_serviceplancustomcontrol_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `serviceplancustomcontrol_DuplicateMatchingRecord` | [serviceplancustomcontrol](serviceplancustomcontrol.md) | `duplicaterecordid` | `duplicaterecordid_serviceplancustomcontrol` |
| `serviceplancustomcontrol_DuplicateBaseRecord` | [serviceplancustomcontrol](serviceplancustomcontrol.md) | `baserecordid` | `baserecordid_serviceplancustomcontrol` |
| `serviceplancustomcontrol_AsyncOperations` | [serviceplancustomcontrol](serviceplancustomcontrol.md) | `regardingobjectid` | `regardingobjectid_serviceplancustomcontrol` |
| `serviceplancustomcontrol_MailboxTrackingFolders` | [serviceplancustomcontrol](serviceplancustomcontrol.md) | `regardingobjectid` | `regardingobjectid_serviceplancustomcontrol` |
| `serviceplancustomcontrol_UserEntityInstanceDatas` | [serviceplancustomcontrol](serviceplancustomcontrol.md) | `objectid` | `objectid_serviceplancustomcontrol` |
| `serviceplancustomcontrol_ProcessSession` | [serviceplancustomcontrol](serviceplancustomcontrol.md) | `regardingobjectid` | `regardingobjectid_serviceplancustomcontrol` |
| `serviceplancustomcontrol_BulkDeleteFailures` | [serviceplancustomcontrol](serviceplancustomcontrol.md) | `regardingobjectid` | `regardingobjectid_serviceplancustomcontrol` |
| `serviceplancustomcontrol_PrincipalObjectAttributeAccesses` | [serviceplancustomcontrol](serviceplancustomcontrol.md) | `objectid` | `objectid_serviceplancustomcontrol` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `serviceplan_customcontrol` | [serviceplan](serviceplan.md) | _n/a_ | `serviceplan_customcontrol_association` |

## Source

Generated from [serviceplancustomcontrol (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='serviceplancustomcontrol')) on 2026-05-07.