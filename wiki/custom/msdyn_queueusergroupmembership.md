---
logical: "msdyn_queueusergroupmembership"
display: "Queue User Group Membership"
entitySetName: "msdyn_queueusergroupmemberships"
primaryId: "msdyn_queueusergroupmembershipid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Queue User Group Membership

Captures User Groups associated with Queues

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_queueusergroupmembership` |
| Display name | Queue User Group Membership |
| Display (plural) | Queue User Group Memberships |
| Schema name | `msdyn_queueusergroupmembership` |
| Entity set (Web API) | `msdyn_queueusergroupmemberships` |
| Primary id attribute | `msdyn_queueusergroupmembershipid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_queueusergroupmemberships?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_queueusergroupmemberships(<guid>)
POST /api/data/v9.2/msdyn_queueusergroupmemberships
PATCH /api/data/v9.2/msdyn_queueusergroupmemberships(<guid>)
DELETE /api/data/v9.2/msdyn_queueusergroupmemberships(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_queueid`, `msdyn_queueusergroupmembershipid`, `msdyn_usergroup`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_queueusergroupmembership_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_queueusergroupmembership_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_queueusergroupmembership_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_queueusergroupmembership_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_queueusergroupmembership` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_queueusergroupmembership` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_queueusergroupmembership` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_queueusergroupmembership` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_queueusergroupmembership_usergroup_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_usergroup` | `msdyn_usergroup` |
| `msdyn_queueusergroupmembership_queueid_queue` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_queueusergroupmembership_SyncErrors` | [msdyn_queueusergroupmembership](msdyn_queueusergroupmembership.md) | `regardingobjectid` | `regardingobjectid_msdyn_queueusergroupmembership` |
| `msdyn_queueusergroupmembership_DuplicateMatchingRecord` | [msdyn_queueusergroupmembership](msdyn_queueusergroupmembership.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_queueusergroupmembership` |
| `msdyn_queueusergroupmembership_DuplicateBaseRecord` | [msdyn_queueusergroupmembership](msdyn_queueusergroupmembership.md) | `baserecordid` | `baserecordid_msdyn_queueusergroupmembership` |
| `msdyn_queueusergroupmembership_AsyncOperations` | [msdyn_queueusergroupmembership](msdyn_queueusergroupmembership.md) | `regardingobjectid` | `regardingobjectid_msdyn_queueusergroupmembership` |
| `msdyn_queueusergroupmembership_MailboxTrackingFolders` | [msdyn_queueusergroupmembership](msdyn_queueusergroupmembership.md) | `regardingobjectid` | `regardingobjectid_msdyn_queueusergroupmembership` |
| `msdyn_queueusergroupmembership_UserEntityInstanceDatas` | [msdyn_queueusergroupmembership](msdyn_queueusergroupmembership.md) | `objectid` | `objectid_msdyn_queueusergroupmembership` |
| `msdyn_queueusergroupmembership_ProcessSession` | [msdyn_queueusergroupmembership](msdyn_queueusergroupmembership.md) | `regardingobjectid` | `regardingobjectid_msdyn_queueusergroupmembership` |
| `msdyn_queueusergroupmembership_BulkDeleteFailures` | [msdyn_queueusergroupmembership](msdyn_queueusergroupmembership.md) | `regardingobjectid` | `regardingobjectid_msdyn_queueusergroupmembership` |
| `msdyn_queueusergroupmembership_PrincipalObjectAttributeAccesses` | [msdyn_queueusergroupmembership](msdyn_queueusergroupmembership.md) | `objectid` | `objectid_msdyn_queueusergroupmembership` |


## Source

Generated from [msdyn_queueusergroupmembership (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_queueusergroupmembership')) on 2026-05-07.