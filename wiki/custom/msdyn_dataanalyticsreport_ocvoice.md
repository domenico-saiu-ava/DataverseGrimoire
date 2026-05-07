---
logical: "msdyn_dataanalyticsreport_ocvoice"
display: "Analisi cronologica voce Multicanale (anteprima) (deprecato)"
entitySetName: "msdyn_dataanalyticsreport_ocvoices"
primaryId: "msdyn_dataanalyticsreport_ocvoiceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi cronologica voce Multicanale (anteprima) (deprecato)

Analisi cronologica voce Multicanale (anteprima) (deprecato)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_ocvoice` |
| Display name | Analisi cronologica voce Multicanale (anteprima) (deprecato) |
| Display (plural) | Analisi cronologica voce Multicanale (anteprima) (deprecato) |
| Schema name | `msdyn_dataanalyticsreport_ocvoice` |
| Entity set (Web API) | `msdyn_dataanalyticsreport_ocvoices` |
| Primary id attribute | `msdyn_dataanalyticsreport_ocvoiceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreport_ocvoices?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreport_ocvoices(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreport_ocvoices
PATCH /api/data/v9.2/msdyn_dataanalyticsreport_ocvoices(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreport_ocvoices(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_ocvoiceid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_ocvoice_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_ocvoice_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_ocvoice_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_ocvoice_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_ocvoice` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_ocvoice_SyncErrors` | [msdyn_dataanalyticsreport_ocvoice](msdyn_dataanalyticsreport_ocvoice.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ocvoice` |
| `msdyn_dataanalyticsreport_ocvoice_AsyncOperations` | [msdyn_dataanalyticsreport_ocvoice](msdyn_dataanalyticsreport_ocvoice.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ocvoice` |
| `msdyn_dataanalyticsreport_ocvoice_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_ocvoice](msdyn_dataanalyticsreport_ocvoice.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ocvoice` |
| `msdyn_dataanalyticsreport_ocvoice_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_ocvoice](msdyn_dataanalyticsreport_ocvoice.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_ocvoice` |
| `msdyn_dataanalyticsreport_ocvoice_ProcessSession` | [msdyn_dataanalyticsreport_ocvoice](msdyn_dataanalyticsreport_ocvoice.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ocvoice` |
| `msdyn_dataanalyticsreport_ocvoice_BulkDeleteFailures` | [msdyn_dataanalyticsreport_ocvoice](msdyn_dataanalyticsreport_ocvoice.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ocvoice` |
| `msdyn_dataanalyticsreport_ocvoice_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_ocvoice](msdyn_dataanalyticsreport_ocvoice.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_ocvoice` |


## Source

Generated from [msdyn_dataanalyticsreport_ocvoice (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_ocvoice')) on 2026-05-07.