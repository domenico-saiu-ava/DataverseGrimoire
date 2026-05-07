---
logical: "msdyn_intentharvesting_batchjobstatus"
display: "msdyn_intentharvesting_batchjobstatus"
entitySetName: "msdyn_intentharvesting_batchjobstatuses"
primaryId: "msdyn_intentharvesting_batchjobstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_intentharvesting_batchjobstatus

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentharvesting_batchjobstatus` |
| Display name | msdyn_intentharvesting_batchjobstatus |
| Display (plural) | msdyn_intentharvesting_batchjobstatuses |
| Schema name | `msdyn_intentharvesting_batchjobstatus` |
| Entity set (Web API) | `msdyn_intentharvesting_batchjobstatuses` |
| Primary id attribute | `msdyn_intentharvesting_batchjobstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentharvesting_batchjobstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentharvesting_batchjobstatuses(<guid>)
POST /api/data/v9.2/msdyn_intentharvesting_batchjobstatuses
PATCH /api/data/v9.2/msdyn_intentharvesting_batchjobstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_intentharvesting_batchjobstatuses(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_batchjob_package_id`, `msdyn_intentharvesting_batchjobstatusid`, `msdyn_job_status_details`, `msdyn_jobstatus`, `msdyn_jobtype`, `msdyn_last_successful_run`, `msdyn_name`, `msdyn_records_processed`, `msdyn_run_frequency`, `msdyn_runconfiguration`, `msdyn_target_entity_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentharvesting_batchjobstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentharvesting_batchjobstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentharvesting_batchjobstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentharvesting_batchjobstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentharvesting_batchjobstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentharvesting_batchjobstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentharvesting_batchjobstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentharvesting_batchjobstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentharvesting_batchjobstatus_SyncErrors` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_batchjobstatus` |
| `msdyn_intentharvesting_batchjobstatus_DuplicateMatchingRecord` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentharvesting_batchjobstatus` |
| `msdyn_intentharvesting_batchjobstatus_DuplicateBaseRecord` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `baserecordid` | `baserecordid_msdyn_intentharvesting_batchjobstatus` |
| `msdyn_intentharvesting_batchjobstatus_AsyncOperations` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_batchjobstatus` |
| `msdyn_intentharvesting_batchjobstatus_MailboxTrackingFolders` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_batchjobstatus` |
| `msdyn_intentharvesting_batchjobstatus_UserEntityInstanceDatas` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `objectid` | `objectid_msdyn_intentharvesting_batchjobstatus` |
| `msdyn_intentharvesting_batchjobstatus_ProcessSession` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_batchjobstatus` |
| `msdyn_intentharvesting_batchjobstatus_BulkDeleteFailures` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_batchjobstatus` |
| `msdyn_intentharvesting_batchjobstatus_PrincipalObjectAttributeAccesses` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `objectid` | `objectid_msdyn_intentharvesting_batchjobstatus` |
| `msdyn_msdyn_intent_msdyn_intentharvesting_batchjobstatusid_msdyn_intentharvesting_batchjobstatus` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `msdyn_intentharvesting_batchjobstatusid` | `msdyn_intentharvesting_batchjobstatusid` |
| `msdyn_intentharvesting_batchjobstatusdetail_msdyn_intentharvesting_batchjobstatusid_msdyn_intentharvesting_batchjobstatus` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `msdyn_intentharvesting_batchjobstatusid` | `msdyn_intentharvesting_batchjobstatusid` |
| `msdyn_intentharvesting_proposedintent_batchjobstatusid` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `msdyn_intentharvesting_batchjobstatusid` | `msdyn_intentharvesting_batchjobstatusid` |


## Source

Generated from [msdyn_intentharvesting_batchjobstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentharvesting_batchjobstatus')) on 2026-05-07.