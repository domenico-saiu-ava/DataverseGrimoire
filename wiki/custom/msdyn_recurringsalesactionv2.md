---
logical: "msdyn_recurringsalesactionv2"
display: "Recurring Sales Action V2"
entitySetName: "msdyn_recurringsalesactionsv2"
primaryId: "msdyn_recurringsalesactionv2id"
primaryName: "msdyn_triggername"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Recurring Sales Action V2

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_recurringsalesactionv2` |
| Display name | Recurring Sales Action V2 |
| Display (plural) | Recurring Sales Actions V2 |
| Schema name | `msdyn_recurringsalesactionv2` |
| Entity set (Web API) | `msdyn_recurringsalesactionsv2` |
| Primary id attribute | `msdyn_recurringsalesactionv2id` |
| Primary name attribute | `msdyn_triggername` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_recurringsalesactionsv2?$select=msdyn_triggername&$top=10
GET /api/data/v9.2/msdyn_recurringsalesactionsv2(<guid>)
POST /api/data/v9.2/msdyn_recurringsalesactionsv2
PATCH /api/data/v9.2/msdyn_recurringsalesactionsv2(<guid>)
DELETE /api/data/v9.2/msdyn_recurringsalesactionsv2(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_customactionname`, `msdyn_failurecount`, `msdyn_featurename`, `msdyn_isrecurrencepatternschedule`, `msdyn_lastexecutioninfo`, `msdyn_payload`, `msdyn_recordstate`, `msdyn_recurringsalesactionv2id`, `msdyn_retrycount`, `msdyn_schedule`, `msdyn_startdate`, `msdyn_triggername`, `msdyn_workloadname`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_recurringsalesactionv2_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_recurringsalesactionv2_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_recurringsalesactionv2_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_recurringsalesactionv2_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_recurringsalesactionv2` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_recurringsalesactionv2_SyncErrors` | [msdyn_recurringsalesactionv2](msdyn_recurringsalesactionv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_recurringsalesactionv2` |
| `msdyn_recurringsalesactionv2_AsyncOperations` | [msdyn_recurringsalesactionv2](msdyn_recurringsalesactionv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_recurringsalesactionv2` |
| `msdyn_recurringsalesactionv2_MailboxTrackingFolders` | [msdyn_recurringsalesactionv2](msdyn_recurringsalesactionv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_recurringsalesactionv2` |
| `msdyn_recurringsalesactionv2_UserEntityInstanceDatas` | [msdyn_recurringsalesactionv2](msdyn_recurringsalesactionv2.md) | `objectid` | `objectid_msdyn_recurringsalesactionv2` |
| `msdyn_recurringsalesactionv2_ProcessSession` | [msdyn_recurringsalesactionv2](msdyn_recurringsalesactionv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_recurringsalesactionv2` |
| `msdyn_recurringsalesactionv2_BulkDeleteFailures` | [msdyn_recurringsalesactionv2](msdyn_recurringsalesactionv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_recurringsalesactionv2` |
| `msdyn_recurringsalesactionv2_PrincipalObjectAttributeAccesses` | [msdyn_recurringsalesactionv2](msdyn_recurringsalesactionv2.md) | `objectid` | `objectid_msdyn_recurringsalesactionv2` |


## Source

Generated from [msdyn_recurringsalesactionv2 (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_recurringsalesactionv2')) on 2026-05-07.