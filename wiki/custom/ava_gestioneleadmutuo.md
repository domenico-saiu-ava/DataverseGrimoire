---
logical: "ava_gestioneleadmutuo"
display: "Gestione Lead Mutuo"
entitySetName: "ava_gestioneleadmutuos"
primaryId: "businessprocessflowinstanceid"
primaryName: "bpf_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Gestione Lead Mutuo

Entità di base per il processo. Gestione Lead Mutuo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_gestioneleadmutuo` |
| Display name | Gestione Lead Mutuo |
| Display (plural) | Gestione Lead Mutuo |
| Schema name | `ava_gestioneleadmutuo` |
| Entity set (Web API) | `ava_gestioneleadmutuos` |
| Primary id attribute | `businessprocessflowinstanceid` |
| Primary name attribute | `bpf_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_gestioneleadmutuos?$select=bpf_name&$top=10
GET /api/data/v9.2/ava_gestioneleadmutuos(<guid>)
POST /api/data/v9.2/ava_gestioneleadmutuos
PATCH /api/data/v9.2/ava_gestioneleadmutuos(<guid>)
DELETE /api/data/v9.2/ava_gestioneleadmutuos(<guid>)
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
| `lk_ava_gestioneleadmutuo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_gestioneleadmutuo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_gestioneleadmutuo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_gestioneleadmutuo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_ava_gestioneleadmutuo` | [organization](organization.md) | `organizationid` | `organizationid` |
| `lk_ava_gestioneleadmutuo_activestageid` | [processstage](processstage.md) | `activestageid` | `activestageid` |
| `lk_ava_gestioneleadmutuo_processid` | [workflow](workflow.md) | `processid` | `processid` |
| `bpf_lead_ava_gestioneleadmutuo` | [lead](lead.md) | `bpf_leadid` | `bpf_leadid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_gestioneleadmutuo_SyncErrors` | [ava_gestioneleadmutuo](ava_gestioneleadmutuo.md) | `regardingobjectid` | `regardingobjectid_ava_gestioneleadmutuo` |
| `ava_gestioneleadmutuo_AsyncOperations` | [ava_gestioneleadmutuo](ava_gestioneleadmutuo.md) | `regardingobjectid` | `regardingobjectid_ava_gestioneleadmutuo` |
| `ava_gestioneleadmutuo_WorkflowLogs` | [ava_gestioneleadmutuo](ava_gestioneleadmutuo.md) | `asyncoperationid` | `asyncoperationid_ava_gestioneleadmutuo` |
| `ava_gestioneleadmutuo_MailboxTrackingFolders` | [ava_gestioneleadmutuo](ava_gestioneleadmutuo.md) | `regardingobjectid` | `regardingobjectid_ava_gestioneleadmutuo` |
| `ava_gestioneleadmutuo_UserEntityInstanceDatas` | [ava_gestioneleadmutuo](ava_gestioneleadmutuo.md) | `objectid` | `objectid_ava_gestioneleadmutuo` |
| `ava_gestioneleadmutuo_ProcessSession` | [ava_gestioneleadmutuo](ava_gestioneleadmutuo.md) | `regardingobjectid` | `regardingobjectid_ava_gestioneleadmutuo` |
| `ava_gestioneleadmutuo_BulkDeleteFailures` | [ava_gestioneleadmutuo](ava_gestioneleadmutuo.md) | `regardingobjectid` | `regardingobjectid_ava_gestioneleadmutuo` |
| `ava_gestioneleadmutuo_PrincipalObjectAttributeAccesses` | [ava_gestioneleadmutuo](ava_gestioneleadmutuo.md) | `objectid` | `objectid_ava_gestioneleadmutuo` |


## Source

Generated from [ava_gestioneleadmutuo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_gestioneleadmutuo')) on 2026-05-07.