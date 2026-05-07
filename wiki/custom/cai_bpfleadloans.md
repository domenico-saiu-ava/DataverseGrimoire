---
logical: "cai_bpfleadloans"
display: "Processo Lead Mutui"
entitySetName: "cai_bpfleadloanses"
primaryId: "businessprocessflowinstanceid"
primaryName: "bpf_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Processo Lead Mutui

Entità di base per il processo. Processo Lead Mutui

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_bpfleadloans` |
| Display name | Processo Lead Mutui |
| Display (plural) | Processo Lead Mutui |
| Schema name | `cai_bpfleadloans` |
| Entity set (Web API) | `cai_bpfleadloanses` |
| Primary id attribute | `businessprocessflowinstanceid` |
| Primary name attribute | `bpf_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_bpfleadloanses?$select=bpf_name&$top=10
GET /api/data/v9.2/cai_bpfleadloanses(<guid>)
POST /api/data/v9.2/cai_bpfleadloanses
PATCH /api/data/v9.2/cai_bpfleadloanses(<guid>)
DELETE /api/data/v9.2/cai_bpfleadloanses(<guid>)
```

## Attributes

Writable: **14** · Read-only: **9**

### Writable

`activestageid`, `activestagestartedon`, `bpf_leadid`, `bpf_name`, `businessprocessflowinstanceid`, `completedon`, `importsequencenumber`, `overriddencreatedon`, `processid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`bpf_duration`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bpf_lead_cai_bpfleadloans` | [lead](lead.md) | `bpf_leadid` | `bpf_leadid` |
| `lk_cai_bpfleadloans_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_bpfleadloans_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_bpfleadloans_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_bpfleadloans_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_bpfleadloans` | [organization](organization.md) | `organizationid` | `organizationid` |
| `lk_cai_bpfleadloans_activestageid` | [processstage](processstage.md) | `activestageid` | `activestageid` |
| `lk_cai_bpfleadloans_processid` | [workflow](workflow.md) | `processid` | `processid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_bpfleadloans_SyncErrors` | [cai_bpfleadloans](cai_bpfleadloans.md) | `regardingobjectid` | `regardingobjectid_cai_bpfleadloans` |
| `cai_bpfleadloans_AsyncOperations` | [cai_bpfleadloans](cai_bpfleadloans.md) | `regardingobjectid` | `regardingobjectid_cai_bpfleadloans` |
| `cai_bpfleadloans_WorkflowLogs` | [cai_bpfleadloans](cai_bpfleadloans.md) | `asyncoperationid` | `asyncoperationid_cai_bpfleadloans` |
| `cai_bpfleadloans_MailboxTrackingFolders` | [cai_bpfleadloans](cai_bpfleadloans.md) | `regardingobjectid` | `regardingobjectid_cai_bpfleadloans` |
| `cai_bpfleadloans_UserEntityInstanceDatas` | [cai_bpfleadloans](cai_bpfleadloans.md) | `objectid` | `objectid_cai_bpfleadloans` |
| `cai_bpfleadloans_ProcessSession` | [cai_bpfleadloans](cai_bpfleadloans.md) | `regardingobjectid` | `regardingobjectid_cai_bpfleadloans` |
| `cai_bpfleadloans_BulkDeleteFailures` | [cai_bpfleadloans](cai_bpfleadloans.md) | `regardingobjectid` | `regardingobjectid_cai_bpfleadloans` |
| `cai_bpfleadloans_PrincipalObjectAttributeAccesses` | [cai_bpfleadloans](cai_bpfleadloans.md) | `objectid` | `objectid_cai_bpfleadloans` |


## Source

Generated from [cai_bpfleadloans (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_bpfleadloans')) on 2026-05-07.