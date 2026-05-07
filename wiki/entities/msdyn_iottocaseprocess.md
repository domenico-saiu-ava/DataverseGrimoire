---
logical: "msdyn_iottocaseprocess"
display: "IoT Alert to Case Process"
entitySetName: "msdyn_iottocaseprocesses"
primaryId: "businessprocessflowinstanceid"
primaryName: "bpf_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# IoT Alert to Case Process

Base entity for process IoT to Case Process

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iottocaseprocess` |
| Display name | IoT Alert to Case Process |
| Display (plural) | IoT Alert to Case Process |
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

`ActiveStageId`, `ActiveStageStartedOn`, `bpf_incidentid`, `bpf_msdyn_iotalertid`, `bpf_name`, `BusinessProcessFlowInstanceId`, `CompletedOn`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `ProcessId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`bpf_Duration`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bpf_incident_msdyn_iottocaseprocess` | [incident](incident.md) | `bpf_incidentid` | `bpf_incidentid` |
| `bpf_msdyn_iotalert_msdyn_iottocaseprocess` | [msdyn_iotalert](msdyn_iotalert.md) | `bpf_msdyn_iotalertid` | `bpf_msdyn_iotalertid` |
| `lk_msdyn_iottocaseprocess_activestageid` | [processstage](processstage.md) | `activestageid` | `activestageid` |
| `lk_msdyn_iottocaseprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iottocaseprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iottocaseprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iottocaseprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_msdyn_iottocaseprocess_processid` | [workflow](workflow.md) | `processid` | `processid` |
| `organization_msdyn_iottocaseprocess` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iottocaseprocess_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iottocaseprocess_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iottocaseprocess_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iottocaseprocess_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iottocaseprocess_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iottocaseprocess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iottocaseprocess_WorkflowLogs` | _n/a_ | `asyncoperationid` | _n/a_ |


## Source

Generated from [msdyn_iottocaseprocess.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iottocaseprocess.md) on 2026-05-06.