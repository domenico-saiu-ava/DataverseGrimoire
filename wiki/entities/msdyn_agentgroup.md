---
logical: "msdyn_agentgroup"
display: "Agent Group"
entitySetName: "msdyn_agentgroups"
primaryId: "msdyn_agentgroupid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_agentgroupId`, `msdyn_description`, `msdyn_intentfamilyid`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentgroup` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentgroup_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentgroup_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentgroup_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentgroup_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_agentgroup_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `owner_msdyn_agentgroup` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentgroup` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentgroup` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgroup_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroup_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroup_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentgroup_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentgroup_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroup_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentgroup_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroup_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupmatchingcriteria_agentgroupid_msdyn_agentgroup` | _n/a_ | `msdyn_agentgroupid` | _n/a_ |
| `msdyn_agentgroupmembership_agentgroupid_msdyn_agentgroup` | _n/a_ | `msdyn_agentgroupid` | _n/a_ |
| `msdyn_agentgroupregion_agentgroupid_msdyn_agentgroup` | _n/a_ | `msdyn_agentgroupid` | _n/a_ |
| `msdyn_intentfamily_msdyn_defaultusergroup_msdyn_agentgroup` | _n/a_ | `msdyn_defaultusergroup` | _n/a_ |
| `msdyn_intentsolutionmap_agentgroupid_msdyn_agentgroup` | _n/a_ | `msdyn_agentgroupid` | _n/a_ |
| `msdyn_msdyn_agentgroup_msdyn_agentgrouplanguage_agentgroupid` | _n/a_ | `msdyn_agentgroupid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_agentgroup_activeagentgroupid` | _n/a_ | `msdyn_activeagentgroupid` | _n/a_ |
| `msdyn_msdyn_ocsession_msdyn_agentgroup_activeagentgroupid` | _n/a_ | `msdyn_activeagentgroupid` | _n/a_ |


## Source

Generated from [msdyn_agentgroup.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentgroup.md) on 2026-05-06.