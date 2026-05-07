---
logical: "msdyn_region"
display: "Region"
entitySetName: "msdyn_regions"
primaryId: "msdyn_regionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Region

This entity is used to identify the region of end customers. Users and user groups are decorated with region, and matched with conversations to route them. Users and user groups decoration also supports hierarchy.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_region` |
| Display name | Region |
| Display (plural) | Regions |
| Schema name | `msdyn_region` |
| Entity set (Web API) | `msdyn_regions` |
| Primary id attribute | `msdyn_regionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_regions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_regions(<guid>)
POST /api/data/v9.2/msdyn_regions
PATCH /api/data/v9.2/msdyn_regions(<guid>)
DELETE /api/data/v9.2/msdyn_regions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_parentregionid`, `msdyn_regioncode`, `msdyn_regionId`, `msdyn_regionname`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_region` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_region_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_region_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_region_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_region_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_region_parentregionid_msdyn_region` | [msdyn_region](msdyn_region.md) | `msdyn_parentregionid` | `msdyn_parentregionid` |
| `owner_msdyn_region` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_region` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_region` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgroupregion_regionid_msdyn_region` | _n/a_ | `msdyn_regionid` | _n/a_ |
| `msdyn_agentregion_regionid_msdyn_region` | _n/a_ | `msdyn_regionid` | _n/a_ |
| `msdyn_ocliveworkitem_regionid_msdyn_region` | _n/a_ | `msdyn_regionid` | _n/a_ |
| `msdyn_region_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_region_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_region_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_region_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_region_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_region_parentregionid_msdyn_region` | _n/a_ | `msdyn_parentregionid` | _n/a_ |
| `msdyn_region_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_region_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_region_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_region.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_region.md) on 2026-05-06.