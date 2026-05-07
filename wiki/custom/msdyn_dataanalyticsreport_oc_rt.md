---
logical: "msdyn_dataanalyticsreport_oc_rt"
display: "Analisi in tempo reale multicanale"
entitySetName: "msdyn_dataanalyticsreport_oc_rtes"
primaryId: "msdyn_dataanalyticsreport_oc_rtid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi in tempo reale multicanale

Analisi in tempo reale multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_oc_rt` |
| Display name | Analisi in tempo reale multicanale |
| Display (plural) | Analisi in tempo reale multicanale |
| Schema name | `msdyn_dataanalyticsreport_oc_rt` |
| Entity set (Web API) | `msdyn_dataanalyticsreport_oc_rtes` |
| Primary id attribute | `msdyn_dataanalyticsreport_oc_rtid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreport_oc_rtes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreport_oc_rtes(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreport_oc_rtes
PATCH /api/data/v9.2/msdyn_dataanalyticsreport_oc_rtes(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreport_oc_rtes(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_oc_rtid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_oc_rt_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_oc_rt_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_oc_rt_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_oc_rt_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_oc_rt` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_dasoc_rt_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_oc_rt_SyncErrors` | [msdyn_dataanalyticsreport_oc_rt](msdyn_dataanalyticsreport_oc_rt.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_oc_rt` |
| `msdyn_dataanalyticsreport_oc_rt_AsyncOperations` | [msdyn_dataanalyticsreport_oc_rt](msdyn_dataanalyticsreport_oc_rt.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_oc_rt` |
| `msdyn_dataanalyticsreport_oc_rt_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_oc_rt](msdyn_dataanalyticsreport_oc_rt.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_oc_rt` |
| `msdyn_dataanalyticsreport_oc_rt_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_oc_rt](msdyn_dataanalyticsreport_oc_rt.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_oc_rt` |
| `msdyn_dataanalyticsreport_oc_rt_ProcessSession` | [msdyn_dataanalyticsreport_oc_rt](msdyn_dataanalyticsreport_oc_rt.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_oc_rt` |
| `msdyn_dataanalyticsreport_oc_rt_BulkDeleteFailures` | [msdyn_dataanalyticsreport_oc_rt](msdyn_dataanalyticsreport_oc_rt.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_oc_rt` |
| `msdyn_dataanalyticsreport_oc_rt_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_oc_rt](msdyn_dataanalyticsreport_oc_rt.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_oc_rt` |


## Source

Generated from [msdyn_dataanalyticsreport_oc_rt (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_oc_rt')) on 2026-05-07.