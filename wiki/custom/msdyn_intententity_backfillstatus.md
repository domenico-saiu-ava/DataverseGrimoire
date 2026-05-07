---
logical: "msdyn_intententity_backfillstatus"
display: "Stato back-fill LOB"
entitySetName: "msdyn_intententity_backfillstatuses"
primaryId: "msdyn_intententity_backfillstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato back-fill LOB

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intententity_backfillstatus` |
| Display name | Stato back-fill LOB |
| Display (plural) | Stato back-fill del LOB e dell'entità |
| Schema name | `msdyn_intententity_backfillstatus` |
| Entity set (Web API) | `msdyn_intententity_backfillstatuses` |
| Primary id attribute | `msdyn_intententity_backfillstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intententity_backfillstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intententity_backfillstatuses(<guid>)
POST /api/data/v9.2/msdyn_intententity_backfillstatuses
PATCH /api/data/v9.2/msdyn_intententity_backfillstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_intententity_backfillstatuses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_intententity_backfillstatusid`, `msdyn_intentfamilyid`, `msdyn_jobstatus`, `msdyn_lastjob_completedon`, `msdyn_name`, `msdyn_target_entity_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intententity_backfillstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intententity_backfillstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intententity_backfillstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intententity_backfillstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intententity_backfillstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intententity_backfillstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intententity_backfillstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intententity_backfillstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intententity_backfillstatus_SyncErrors` | [msdyn_intententity_backfillstatus](msdyn_intententity_backfillstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_intententity_backfillstatus` |
| `msdyn_intententity_backfillstatus_DuplicateMatchingRecord` | [msdyn_intententity_backfillstatus](msdyn_intententity_backfillstatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intententity_backfillstatus` |
| `msdyn_intententity_backfillstatus_DuplicateBaseRecord` | [msdyn_intententity_backfillstatus](msdyn_intententity_backfillstatus.md) | `baserecordid` | `baserecordid_msdyn_intententity_backfillstatus` |
| `msdyn_intententity_backfillstatus_AsyncOperations` | [msdyn_intententity_backfillstatus](msdyn_intententity_backfillstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_intententity_backfillstatus` |
| `msdyn_intententity_backfillstatus_MailboxTrackingFolders` | [msdyn_intententity_backfillstatus](msdyn_intententity_backfillstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_intententity_backfillstatus` |
| `msdyn_intententity_backfillstatus_UserEntityInstanceDatas` | [msdyn_intententity_backfillstatus](msdyn_intententity_backfillstatus.md) | `objectid` | `objectid_msdyn_intententity_backfillstatus` |
| `msdyn_intententity_backfillstatus_ProcessSession` | [msdyn_intententity_backfillstatus](msdyn_intententity_backfillstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_intententity_backfillstatus` |
| `msdyn_intententity_backfillstatus_BulkDeleteFailures` | [msdyn_intententity_backfillstatus](msdyn_intententity_backfillstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_intententity_backfillstatus` |
| `msdyn_intententity_backfillstatus_PrincipalObjectAttributeAccesses` | [msdyn_intententity_backfillstatus](msdyn_intententity_backfillstatus.md) | `objectid` | `objectid_msdyn_intententity_backfillstatus` |


## Source

Generated from [msdyn_intententity_backfillstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intententity_backfillstatus')) on 2026-05-07.