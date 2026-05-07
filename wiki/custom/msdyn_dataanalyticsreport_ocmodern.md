---
logical: "msdyn_dataanalyticsreport_ocmodern"
display: "Contact Center historical analytics"
entitySetName: "msdyn_dataanalyticsreport_ocmoderns"
primaryId: "msdyn_dataanalyticsreport_ocmodernid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contact Center historical analytics

Contact Center historical analytics

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_ocmodern` |
| Display name | Contact Center historical analytics |
| Display (plural) | Contact Center historical analytics |
| Schema name | `msdyn_dataanalyticsreport_ocmodern` |
| Entity set (Web API) | `msdyn_dataanalyticsreport_ocmoderns` |
| Primary id attribute | `msdyn_dataanalyticsreport_ocmodernid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreport_ocmoderns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreport_ocmoderns(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreport_ocmoderns
PATCH /api/data/v9.2/msdyn_dataanalyticsreport_ocmoderns(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreport_ocmoderns(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_ocmodernid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_ocmodern_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_ocmodern_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_ocmodern_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_ocmodern_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_ocmodern` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_dasocmodern_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_ocmodern_SyncErrors` | [msdyn_dataanalyticsreport_ocmodern](msdyn_dataanalyticsreport_ocmodern.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ocmodern` |
| `msdyn_dataanalyticsreport_ocmodern_AsyncOperations` | [msdyn_dataanalyticsreport_ocmodern](msdyn_dataanalyticsreport_ocmodern.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ocmodern` |
| `msdyn_dataanalyticsreport_ocmodern_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_ocmodern](msdyn_dataanalyticsreport_ocmodern.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ocmodern` |
| `msdyn_dataanalyticsreport_ocmodern_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_ocmodern](msdyn_dataanalyticsreport_ocmodern.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_ocmodern` |
| `msdyn_dataanalyticsreport_ocmodern_ProcessSession` | [msdyn_dataanalyticsreport_ocmodern](msdyn_dataanalyticsreport_ocmodern.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ocmodern` |
| `msdyn_dataanalyticsreport_ocmodern_BulkDeleteFailures` | [msdyn_dataanalyticsreport_ocmodern](msdyn_dataanalyticsreport_ocmodern.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ocmodern` |
| `msdyn_dataanalyticsreport_ocmodern_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_ocmodern](msdyn_dataanalyticsreport_ocmodern.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_ocmodern` |


## Source

Generated from [msdyn_dataanalyticsreport_ocmodern (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_ocmodern')) on 2026-05-07.