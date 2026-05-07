---
logical: "msdyn_agentgroup"
display: "Agent Group"
entitySetName: "msdyn_agentgroups"
primaryId: "msdyn_agentgroupid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Agent Group

Captures unique Agent Groups

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentgroup` |
| Display name | Agent Group |
| Display (plural) | Agent Groups |
| Schema name | `msdyn_agentgroup` |
| Entity set (Web API) | `msdyn_agentgroups` |
| Primary id attribute | `msdyn_agentgroupid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentgroups?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentgroups(<guid>)
POST /api/data/v9.2/msdyn_agentgroups
PATCH /api/data/v9.2/msdyn_agentgroups(<guid>)
DELETE /api/data/v9.2/msdyn_agentgroups(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentgroupid`, `msdyn_description`, `msdyn_intentfamilyid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgroup_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `lk_msdyn_agentgroup_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentgroup_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentgroup_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentgroup_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentgroup` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentgroup` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentgroup` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentgroup` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_queueusergroupmembership_usergroup_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_usergroup` | `msdyn_usergroup` |
| `msdyn_intentsolutionmap_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_intentfamily_msdyn_defaultusergroup_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_defaultusergroup` | `msdyn_defaultusergroup` |
| `msdyn_agentgroup_SyncErrors` | [msdyn_agentgroup](msdyn_agentgroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroup` |
| `msdyn_agentgroup_DuplicateMatchingRecord` | [msdyn_agentgroup](msdyn_agentgroup.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentgroup` |
| `msdyn_agentgroup_DuplicateBaseRecord` | [msdyn_agentgroup](msdyn_agentgroup.md) | `baserecordid` | `baserecordid_msdyn_agentgroup` |
| `msdyn_agentgroup_AsyncOperations` | [msdyn_agentgroup](msdyn_agentgroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroup` |
| `msdyn_agentgroup_MailboxTrackingFolders` | [msdyn_agentgroup](msdyn_agentgroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroup` |
| `msdyn_agentgroup_UserEntityInstanceDatas` | [msdyn_agentgroup](msdyn_agentgroup.md) | `objectid` | `objectid_msdyn_agentgroup` |
| `msdyn_agentgroup_ProcessSession` | [msdyn_agentgroup](msdyn_agentgroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroup` |
| `msdyn_agentgroup_BulkDeleteFailures` | [msdyn_agentgroup](msdyn_agentgroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroup` |
| `msdyn_agentgroup_PrincipalObjectAttributeAccesses` | [msdyn_agentgroup](msdyn_agentgroup.md) | `objectid` | `objectid_msdyn_agentgroup` |
| `msdyn_agentgroupmembership_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_agentgroup_activeagentgroupid` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_activeagentgroupid` | `msdyn_activeagentgroupid` |
| `msdyn_msdyn_ocsession_msdyn_agentgroup_activeagentgroupid` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_activeagentgroupid` | `msdyn_activeagentgroupid` |
| `msdyn_msdyn_agentgroup_msdyn_agentgrouplanguage_agentgroupid` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_agentgroupregion_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_agentgroupmatchingcriteria_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |


## Source

Generated from [msdyn_agentgroup (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentgroup')) on 2026-05-07.