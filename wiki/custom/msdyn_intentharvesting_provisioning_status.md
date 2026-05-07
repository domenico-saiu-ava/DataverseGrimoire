---
logical: "msdyn_intentharvesting_provisioning_status"
display: "msdyn_intentharvesting_provisioning_status"
entitySetName: "msdyn_intentharvesting_provisioning_statuses"
primaryId: "msdyn_intentharvesting_provisioning_statusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_intentharvesting_provisioning_status

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentharvesting_provisioning_status` |
| Display name | msdyn_intentharvesting_provisioning_status |
| Display (plural) | msdyn_intentharvesting_provisioning_statuses |
| Schema name | `msdyn_intentharvesting_provisioning_status` |
| Entity set (Web API) | `msdyn_intentharvesting_provisioning_statuses` |
| Primary id attribute | `msdyn_intentharvesting_provisioning_statusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentharvesting_provisioning_statuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentharvesting_provisioning_statuses(<guid>)
POST /api/data/v9.2/msdyn_intentharvesting_provisioning_statuses
PATCH /api/data/v9.2/msdyn_intentharvesting_provisioning_statuses(<guid>)
DELETE /api/data/v9.2/msdyn_intentharvesting_provisioning_statuses(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_configurationstatus`, `msdyn_harvestingstate`, `msdyn_intentharvesting_provisioning_statusid`, `msdyn_name`, `msdyn_provisioning_status`, `msdyn_provisioningstatus_package_id`, `msdyn_provisioningstatus_packageid`, `msdyn_runconfiguration`, `msdyn_target_entity_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentharvesting_provisioning_status_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentharvesting_provisioning_status_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentharvesting_provisioning_status_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentharvesting_provisioning_status_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentharvesting_provisioning_status` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentharvesting_provisioning_status` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentharvesting_provisioning_status` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentharvesting_provisioning_status` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentharvesting_provisioning_status_SyncErrors` | [msdyn_intentharvesting_provisioning_status](msdyn_intentharvesting_provisioning_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_provisioning_status` |
| `msdyn_intentharvesting_provisioning_status_DuplicateMatchingRecord` | [msdyn_intentharvesting_provisioning_status](msdyn_intentharvesting_provisioning_status.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentharvesting_provisioning_status` |
| `msdyn_intentharvesting_provisioning_status_DuplicateBaseRecord` | [msdyn_intentharvesting_provisioning_status](msdyn_intentharvesting_provisioning_status.md) | `baserecordid` | `baserecordid_msdyn_intentharvesting_provisioning_status` |
| `msdyn_intentharvesting_provisioning_status_AsyncOperations` | [msdyn_intentharvesting_provisioning_status](msdyn_intentharvesting_provisioning_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_provisioning_status` |
| `msdyn_intentharvesting_provisioning_status_MailboxTrackingFolders` | [msdyn_intentharvesting_provisioning_status](msdyn_intentharvesting_provisioning_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_provisioning_status` |
| `msdyn_intentharvesting_provisioning_status_UserEntityInstanceDatas` | [msdyn_intentharvesting_provisioning_status](msdyn_intentharvesting_provisioning_status.md) | `objectid` | `objectid_msdyn_intentharvesting_provisioning_status` |
| `msdyn_intentharvesting_provisioning_status_ProcessSession` | [msdyn_intentharvesting_provisioning_status](msdyn_intentharvesting_provisioning_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_provisioning_status` |
| `msdyn_intentharvesting_provisioning_status_BulkDeleteFailures` | [msdyn_intentharvesting_provisioning_status](msdyn_intentharvesting_provisioning_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentharvesting_provisioning_status` |
| `msdyn_intentharvesting_provisioning_status_PrincipalObjectAttributeAccesses` | [msdyn_intentharvesting_provisioning_status](msdyn_intentharvesting_provisioning_status.md) | `objectid` | `objectid_msdyn_intentharvesting_provisioning_status` |


## Source

Generated from [msdyn_intentharvesting_provisioning_status (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentharvesting_provisioning_status')) on 2026-05-07.