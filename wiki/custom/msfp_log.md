---
logical: "msfp_log"
display: "Log Customer Voice"
entitySetName: "msfp_logs"
primaryId: "msfp_logid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Log Customer Voice

Questa entità contiene i log che vengono creati durante le operazioni CDS di Customer Voice 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_log` |
| Display name | Log Customer Voice |
| Display (plural) | Log Customer Voice |
| Schema name | `msfp_log` |
| Entity set (Web API) | `msfp_logs` |
| Primary id attribute | `msfp_logid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_logs?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_logs(<guid>)
POST /api/data/v9.2/msfp_logs
PATCH /api/data/v9.2/msfp_logs(<guid>)
DELETE /api/data/v9.2/msfp_logs(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_details`, `msfp_logid`, `msfp_name`, `msfp_operation`, `msfp_recordid`, `msfp_recordtype`, `msfp_sourcesurveyidentifier`, `msfp_surveytableid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_log_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_log_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_log_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_log_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_log` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_log` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_log` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_log` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_log_SyncErrors` | [msfp_log](msfp_log.md) | `regardingobjectid` | `regardingobjectid_msfp_log` |
| `msfp_log_DuplicateMatchingRecord` | [msfp_log](msfp_log.md) | `duplicaterecordid` | `duplicaterecordid_msfp_log` |
| `msfp_log_DuplicateBaseRecord` | [msfp_log](msfp_log.md) | `baserecordid` | `baserecordid_msfp_log` |
| `msfp_log_AsyncOperations` | [msfp_log](msfp_log.md) | `regardingobjectid` | `regardingobjectid_msfp_log` |
| `msfp_log_MailboxTrackingFolders` | [msfp_log](msfp_log.md) | `regardingobjectid` | `regardingobjectid_msfp_log` |
| `msfp_log_UserEntityInstanceDatas` | [msfp_log](msfp_log.md) | `objectid` | `objectid_msfp_log` |
| `msfp_log_ProcessSession` | [msfp_log](msfp_log.md) | `regardingobjectid` | `regardingobjectid_msfp_log` |
| `msfp_log_BulkDeleteFailures` | [msfp_log](msfp_log.md) | `regardingobjectid` | `regardingobjectid_msfp_log` |
| `msfp_log_PrincipalObjectAttributeAccesses` | [msfp_log](msfp_log.md) | `objectid` | `objectid_msfp_log` |


## Source

Generated from [msfp_log (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_log')) on 2026-05-07.