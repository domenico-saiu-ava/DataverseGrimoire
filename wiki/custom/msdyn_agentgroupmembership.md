---
logical: "msdyn_agentgroupmembership"
display: "Appartenenza al gruppo di agenti"
entitySetName: "msdyn_agentgroupmemberships"
primaryId: "msdyn_agentgroupmembershipid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Appartenenza al gruppo di agenti

Acquisisce i membri dei gruppi di agenti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentgroupmembership` |
| Display name | Appartenenza al gruppo di agenti |
| Display (plural) | Appartenenze al gruppo di agenti |
| Schema name | `msdyn_agentgroupmembership` |
| Entity set (Web API) | `msdyn_agentgroupmemberships` |
| Primary id attribute | `msdyn_agentgroupmembershipid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentgroupmemberships?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentgroupmemberships(<guid>)
POST /api/data/v9.2/msdyn_agentgroupmemberships
PATCH /api/data/v9.2/msdyn_agentgroupmemberships(<guid>)
DELETE /api/data/v9.2/msdyn_agentgroupmemberships(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentgroupid`, `msdyn_agentgroupmembershipid`, `msdyn_name`, `msdyn_systemuserid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentgroupmembership_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentgroupmembership_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentgroupmembership_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentgroupmembership_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentgroupmembership` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentgroupmembership` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentgroupmembership` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentgroupmembership` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_agentgroupmembership_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_agentgroupmembership_systemuserid_systemuser` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgroupmembership_SyncErrors` | [msdyn_agentgroupmembership](msdyn_agentgroupmembership.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupmembership` |
| `msdyn_agentgroupmembership_DuplicateMatchingRecord` | [msdyn_agentgroupmembership](msdyn_agentgroupmembership.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentgroupmembership` |
| `msdyn_agentgroupmembership_DuplicateBaseRecord` | [msdyn_agentgroupmembership](msdyn_agentgroupmembership.md) | `baserecordid` | `baserecordid_msdyn_agentgroupmembership` |
| `msdyn_agentgroupmembership_AsyncOperations` | [msdyn_agentgroupmembership](msdyn_agentgroupmembership.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupmembership` |
| `msdyn_agentgroupmembership_MailboxTrackingFolders` | [msdyn_agentgroupmembership](msdyn_agentgroupmembership.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupmembership` |
| `msdyn_agentgroupmembership_UserEntityInstanceDatas` | [msdyn_agentgroupmembership](msdyn_agentgroupmembership.md) | `objectid` | `objectid_msdyn_agentgroupmembership` |
| `msdyn_agentgroupmembership_ProcessSession` | [msdyn_agentgroupmembership](msdyn_agentgroupmembership.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupmembership` |
| `msdyn_agentgroupmembership_BulkDeleteFailures` | [msdyn_agentgroupmembership](msdyn_agentgroupmembership.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupmembership` |
| `msdyn_agentgroupmembership_PrincipalObjectAttributeAccesses` | [msdyn_agentgroupmembership](msdyn_agentgroupmembership.md) | `objectid` | `objectid_msdyn_agentgroupmembership` |


## Source

Generated from [msdyn_agentgroupmembership (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentgroupmembership')) on 2026-05-07.