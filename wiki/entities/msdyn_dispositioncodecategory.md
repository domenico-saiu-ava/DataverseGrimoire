---
logical: "msdyn_dispositioncodecategory"
display: "Disposition Code Category"
entitySetName: "msdyn_dispositioncodecategories"
primaryId: "msdyn_dispositioncodecategoryid"
primaryName: "msdyn_categoryname"
tableType: "Standard"
ownership: "UserOwned"
---

# Disposition Code Category

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dispositioncodecategory` |
| Display name | Disposition Code Category |
| Display (plural) | Disposition Code Categories |
| Schema name | `msdyn_dispositioncodecategory` |
| Entity set (Web API) | `msdyn_dispositioncodecategories` |
| Primary id attribute | `msdyn_dispositioncodecategoryid` |
| Primary name attribute | `msdyn_categoryname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dispositioncodecategories?$select=msdyn_categoryname&$top=10
GET /api/data/v9.2/msdyn_dispositioncodecategories(<guid>)
POST /api/data/v9.2/msdyn_dispositioncodecategories
PATCH /api/data/v9.2/msdyn_dispositioncodecategories(<guid>)
DELETE /api/data/v9.2/msdyn_dispositioncodecategories(<guid>)
```

## Attributes

Writable: **11** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_categoryname`, `msdyn_dispositioncodecategoryId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dispositioncodecategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dispositioncodecategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dispositioncodecategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dispositioncodecategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dispositioncodecategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_dispositioncodecategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dispositioncodecategory` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dispositioncodecategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dispositioncodecategory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dispositioncodecategory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dispositioncodecategory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dispositioncodecategory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dispositioncodecategory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dispositioncodecategory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocdispositioncode_dispositioncodecategoryid_msdyn_dispositioncodecategory` | _n/a_ | `msdyn_dispositioncodecategoryid` | _n/a_ |


## Source

Generated from [msdyn_dispositioncodecategory.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dispositioncodecategory.md) on 2026-05-06.