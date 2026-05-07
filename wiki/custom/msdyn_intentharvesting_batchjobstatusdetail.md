---
logical: "msdyn_intentharvesting_batchjobstatusdetail"
display: "msdyn_intentharvesting_batchjobstatusdetail"
entitySetName: "msdyn_intentharvesting_batchjobstatusdetails"
primaryId: "msdyn_intentharvesting_batchjobstatusdetailid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_intentharvesting_batchjobstatusdetail

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentharvesting_batchjobstatusdetail` |
| Display name | msdyn_intentharvesting_batchjobstatusdetail |
| Display (plural) | msdyn_intentharvesting_batchjobstatusdetails |
| Schema name | `msdyn_intentharvesting_batchjobstatusdetail` |
| Entity set (Web API) | `msdyn_intentharvesting_batchjobstatusdetails` |
| Primary id attribute | `msdyn_intentharvesting_batchjobstatusdetailid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentharvesting_batchjobstatusdetails?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentharvesting_batchjobstatusdetails(<guid>)
POST /api/data/v9.2/msdyn_intentharvesting_batchjobstatusdetails
PATCH /api/data/v9.2/msdyn_intentharvesting_batchjobstatusdetails(<guid>)
DELETE /api/data/v9.2/msdyn_intentharvesting_batchjobstatusdetails(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_intentfamilyid`, `msdyn_intentharvesting_batchjobstatusdetailid`, `msdyn_intentharvesting_batchjobstatusid`, `msdyn_job_status_details`, `msdyn_jobreviewstate`, `msdyn_name`, `msdyn_runconfiguration`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentharvesting_batchjobstatusdetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentharvesting_batchjobstatusdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentharvesting_batchjobstatusdetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentharvesting_batchjobstatusdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentharvesting_batchjobstatusdetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentharvesting_batchjobstatusdetail` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentharvesting_batchjobstatusdetail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentharvesting_batchjobstatusdetail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intentharvesting_batchjobstatusdetail_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentharvesting_batchjobstatusdetail_msdyn_intentharvesting_batchjobstatusid_msdyn_intentharvesting_batchjobstatus` | [msdyn_intentharvesting_batchjobstatus](msdyn_intentharvesting_batchjobstatus.md) | `msdyn_intentharvesting_batchjobstatusid` | `msdyn_intentharvesting_batchjobstatusid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentharvesting_batchjobstatusdetail_SyncErrors` | [msdyn_intentharvesting_batchjobstatusdetail](msdyn_intentharvesting_batchjobstatusdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_batchjobstatusdetail` |
| `msdyn_intentharvesting_batchjobstatusdetail_DuplicateMatchingRecord` | [msdyn_intentharvesting_batchjobstatusdetail](msdyn_intentharvesting_batchjobstatusdetail.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentharvesting_batchjobstatusdetail` |
| `msdyn_intentharvesting_batchjobstatusdetail_DuplicateBaseRecord` | [msdyn_intentharvesting_batchjobstatusdetail](msdyn_intentharvesting_batchjobstatusdetail.md) | `baserecordid` | `baserecordid_msdyn_intentharvesting_batchjobstatusdetail` |
| `msdyn_intentharvesting_batchjobstatusdetail_AsyncOperations` | [msdyn_intentharvesting_batchjobstatusdetail](msdyn_intentharvesting_batchjobstatusdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_batchjobstatusdetail` |
| `msdyn_intentharvesting_batchjobstatusdetail_MailboxTrackingFolders` | [msdyn_intentharvesting_batchjobstatusdetail](msdyn_intentharvesting_batchjobstatusdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_batchjobstatusdetail` |
| `msdyn_intentharvesting_batchjobstatusdetail_UserEntityInstanceDatas` | [msdyn_intentharvesting_batchjobstatusdetail](msdyn_intentharvesting_batchjobstatusdetail.md) | `objectid` | `objectid_msdyn_intentharvesting_batchjobstatusdetail` |
| `msdyn_intentharvesting_batchjobstatusdetail_ProcessSession` | [msdyn_intentharvesting_batchjobstatusdetail](msdyn_intentharvesting_batchjobstatusdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_batchjobstatusdetail` |
| `msdyn_intentharvesting_batchjobstatusdetail_BulkDeleteFailures` | [msdyn_intentharvesting_batchjobstatusdetail](msdyn_intentharvesting_batchjobstatusdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_batchjobstatusdetail` |
| `msdyn_intentharvesting_batchjobstatusdetail_PrincipalObjectAttributeAccesses` | [msdyn_intentharvesting_batchjobstatusdetail](msdyn_intentharvesting_batchjobstatusdetail.md) | `objectid` | `objectid_msdyn_intentharvesting_batchjobstatusdetail` |


## Source

Generated from [msdyn_intentharvesting_batchjobstatusdetail (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentharvesting_batchjobstatusdetail')) on 2026-05-07.