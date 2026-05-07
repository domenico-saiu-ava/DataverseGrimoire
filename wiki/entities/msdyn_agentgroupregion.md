---
logical: "msdyn_agentgroupregion"
display: "Agent Group Region"
entitySetName: "msdyn_agentgroupregions"
primaryId: "msdyn_agentgroupregionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent Group Region

Represents the association of user groups with region

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentgroupregion` |
| Display name | Agent Group Region |
| Display (plural) | Agent Group Regions |
| Schema name | `msdyn_agentgroupregion` |
| Entity set (Web API) | `msdyn_agentgroupregions` |
| Primary id attribute | `msdyn_agentgroupregionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentgroupregions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentgroupregions(<guid>)
POST /api/data/v9.2/msdyn_agentgroupregions
PATCH /api/data/v9.2/msdyn_agentgroupregions(<guid>)
DELETE /api/data/v9.2/msdyn_agentgroupregions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_agentgroupid`, `msdyn_agentgroupregionId`, `msdyn_name`, `msdyn_regionid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentgroupregion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentgroupregion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentgroupregion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentgroupregion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentgroupregion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_agentgroupregion_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_agentgroupregion_regionid_msdyn_region` | [msdyn_region](msdyn_region.md) | `msdyn_regionid` | `msdyn_regionid` |
| `owner_msdyn_agentgroupregion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentgroupregion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentgroupregion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgroupregion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupregion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupregion_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentgroupregion_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentgroupregion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupregion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentgroupregion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupregion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentgroupregion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentgroupregion.md) on 2026-05-06.