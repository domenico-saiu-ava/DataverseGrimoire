---
logical: "msdyn_dataanalyticsreport_oc"
display: "Analisi cronologica di Multicanale"
entitySetName: "msdyn_dataanalyticsreport_ocs"
primaryId: "msdyn_dataanalyticsreport_ocid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi cronologica di Multicanale

Analisi cronologica di Multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_oc` |
| Display name | Analisi cronologica di Multicanale |
| Display (plural) | Analisi cronologica di Multicanale |
| Schema name | `msdyn_dataanalyticsreport_oc` |
| Entity set (Web API) | `msdyn_dataanalyticsreport_ocs` |
| Primary id attribute | `msdyn_dataanalyticsreport_ocid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreport_ocs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreport_ocs(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreport_ocs
PATCH /api/data/v9.2/msdyn_dataanalyticsreport_ocs(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreport_ocs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_ocid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_oc_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_oc_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_oc_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_oc_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_oc` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_oc_SyncErrors` | [msdyn_dataanalyticsreport_oc](msdyn_dataanalyticsreport_oc.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_oc` |
| `msdyn_dataanalyticsreport_oc_AsyncOperations` | [msdyn_dataanalyticsreport_oc](msdyn_dataanalyticsreport_oc.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_oc` |
| `msdyn_dataanalyticsreport_oc_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_oc](msdyn_dataanalyticsreport_oc.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_oc` |
| `msdyn_dataanalyticsreport_oc_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_oc](msdyn_dataanalyticsreport_oc.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_oc` |
| `msdyn_dataanalyticsreport_oc_ProcessSession` | [msdyn_dataanalyticsreport_oc](msdyn_dataanalyticsreport_oc.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_oc` |
| `msdyn_dataanalyticsreport_oc_BulkDeleteFailures` | [msdyn_dataanalyticsreport_oc](msdyn_dataanalyticsreport_oc.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_oc` |
| `msdyn_dataanalyticsreport_oc_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_oc](msdyn_dataanalyticsreport_oc.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_oc` |


## Source

Generated from [msdyn_dataanalyticsreport_oc (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_oc')) on 2026-05-07.