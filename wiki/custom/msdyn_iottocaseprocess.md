---
logical: "msdyn_iottocaseprocess"
display: "Processo da avviso IoT a caso"
entitySetName: "msdyn_iottocaseprocesses"
primaryId: "businessprocessflowinstanceid"
primaryName: "bpf_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Processo da avviso IoT a caso

Entità di base per il processo da IoT a caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iottocaseprocess` |
| Display name | Processo da avviso IoT a caso |
| Display (plural) | Processo da avviso IoT a caso |
| Schema name | `msdyn_iottocaseprocess` |
| Entity set (Web API) | `msdyn_iottocaseprocesses` |
| Primary id attribute | `businessprocessflowinstanceid` |
| Primary name attribute | `bpf_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iottocaseprocesses?$select=bpf_name&$top=10
GET /api/data/v9.2/msdyn_iottocaseprocesses(<guid>)
POST /api/data/v9.2/msdyn_iottocaseprocesses
PATCH /api/data/v9.2/msdyn_iottocaseprocesses(<guid>)
DELETE /api/data/v9.2/msdyn_iottocaseprocesses(<guid>)
```

## Attributes

Writable: **15** · Read-only: **9**

### Writable

`activestageid`, `activestagestartedon`, `bpf_incidentid`, `bpf_msdyn_iotalertid`, `bpf_name`, `businessprocessflowinstanceid`, `completedon`, `importsequencenumber`, `overriddencreatedon`, `processid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`bpf_duration`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iottocaseprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iottocaseprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iottocaseprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iottocaseprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_iottocaseprocess` | [organization](organization.md) | `organizationid` | `organizationid` |
| `lk_msdyn_iottocaseprocess_activestageid` | [processstage](processstage.md) | `activestageid` | `activestageid` |
| `lk_msdyn_iottocaseprocess_processid` | [workflow](workflow.md) | `processid` | `processid` |
| `bpf_incident_msdyn_iottocaseprocess` | [incident](incident.md) | `bpf_incidentid` | `bpf_incidentid` |
| `bpf_msdyn_iotalert_msdyn_iottocaseprocess` | [msdyn_iotalert](msdyn_iotalert.md) | `bpf_msdyn_iotalertid` | `bpf_msdyn_iotalertid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iottocaseprocess_SyncErrors` | [msdyn_iottocaseprocess](msdyn_iottocaseprocess.md) | `regardingobjectid` | `regardingobjectid_msdyn_iottocaseprocess` |
| `msdyn_iottocaseprocess_AsyncOperations` | [msdyn_iottocaseprocess](msdyn_iottocaseprocess.md) | `regardingobjectid` | `regardingobjectid_msdyn_iottocaseprocess` |
| `msdyn_iottocaseprocess_WorkflowLogs` | [msdyn_iottocaseprocess](msdyn_iottocaseprocess.md) | `asyncoperationid` | `asyncoperationid_msdyn_iottocaseprocess` |
| `msdyn_iottocaseprocess_MailboxTrackingFolders` | [msdyn_iottocaseprocess](msdyn_iottocaseprocess.md) | `regardingobjectid` | `regardingobjectid_msdyn_iottocaseprocess` |
| `msdyn_iottocaseprocess_UserEntityInstanceDatas` | [msdyn_iottocaseprocess](msdyn_iottocaseprocess.md) | `objectid` | `objectid_msdyn_iottocaseprocess` |
| `msdyn_iottocaseprocess_ProcessSession` | [msdyn_iottocaseprocess](msdyn_iottocaseprocess.md) | `regardingobjectid` | `regardingobjectid_msdyn_iottocaseprocess` |
| `msdyn_iottocaseprocess_BulkDeleteFailures` | [msdyn_iottocaseprocess](msdyn_iottocaseprocess.md) | `regardingobjectid` | `regardingobjectid_msdyn_iottocaseprocess` |
| `msdyn_iottocaseprocess_PrincipalObjectAttributeAccesses` | [msdyn_iottocaseprocess](msdyn_iottocaseprocess.md) | `objectid` | `objectid_msdyn_iottocaseprocess` |


## Source

Generated from [msdyn_iottocaseprocess (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iottocaseprocess')) on 2026-05-07.