---
logical: "msdyn_agentgroupmembership"
display: "Agent Group Membership"
entitySetName: "msdyn_agentgroupmemberships"
primaryId: "msdyn_agentgroupmembershipid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent Group Membership

Captures Members of the Agent Groups

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentgroupmembership` |
| Display name | Agent Group Membership |
| Display (plural) | Agent Group Memberships |
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

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_agentgroupid`, `msdyn_agentgroupmembershipId`, `msdyn_name`, `msdyn_systemuserid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentgroupmembership` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentgroupmembership_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentgroupmembership_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentgroupmembership_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentgroupmembership_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_agentgroupmembership_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_agentgroupmembership_systemuserid_systemuser` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |
| `owner_msdyn_agentgroupmembership` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentgroupmembership` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentgroupmembership` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgroupmembership_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupmembership_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupmembership_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentgroupmembership_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentgroupmembership_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupmembership_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentgroupmembership_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupmembership_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentgroupmembership.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentgroupmembership.md) on 2026-05-06.