---
logical: "msdyn_workflowactionstatus"
display: "Stato azione flusso di lavoro"
entitySetName: "msdyn_workflowactionstatuses"
primaryId: "msdyn_workflowactionstatusid"
primaryName: "msdyn_actionname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato azione flusso di lavoro

Stato elaborazione azione flussi di lavoro PA

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_workflowactionstatus` |
| Display name | Stato azione flusso di lavoro |
| Display (plural) | Stati azione flusso di lavoro |
| Schema name | `msdyn_workflowactionstatus` |
| Entity set (Web API) | `msdyn_workflowactionstatuses` |
| Primary id attribute | `msdyn_workflowactionstatusid` |
| Primary name attribute | `msdyn_actionname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_workflowactionstatuses?$select=msdyn_actionname&$top=10
GET /api/data/v9.2/msdyn_workflowactionstatuses(<guid>)
POST /api/data/v9.2/msdyn_workflowactionstatuses
PATCH /api/data/v9.2/msdyn_workflowactionstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_workflowactionstatuses(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_actionerrors`, `msdyn_actionname`, `msdyn_actionresult`, `msdyn_actionstatus`, `msdyn_extendedpayload`, `msdyn_workflowactionstatusid`, `msdyn_workflowid`, `msdyn_workflowrunid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_workflowactionstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_workflowactionstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_workflowactionstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_workflowactionstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_workflowactionstatus` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_workflowactionstatus_SyncErrors` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_workflowactionstatus` |
| `msdyn_workflowactionstatus_AsyncOperations` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_workflowactionstatus` |
| `msdyn_workflowactionstatus_MailboxTrackingFolders` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_workflowactionstatus` |
| `msdyn_workflowactionstatus_UserEntityInstanceDatas` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `objectid` | `objectid_msdyn_workflowactionstatus` |
| `msdyn_workflowactionstatus_ProcessSession` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_workflowactionstatus` |
| `msdyn_workflowactionstatus_BulkDeleteFailures` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_workflowactionstatus` |
| `msdyn_workflowactionstatus_PrincipalObjectAttributeAccesses` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `objectid` | `objectid_msdyn_workflowactionstatus` |


## Source

Generated from [msdyn_workflowactionstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_workflowactionstatus')) on 2026-05-07.