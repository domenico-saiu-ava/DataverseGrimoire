---
logical: "msdyn_preferredagentcustomeridentity"
display: "Preferred Agent Customer Identity"
entitySetName: "msdyn_preferredagentcustomeridentities"
primaryId: "msdyn_preferredagentcustomeridentityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Preferred Agent Customer Identity

Used for storing the table used to identify customer and the corresponding associated table

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_preferredagentcustomeridentity` |
| Display name | Preferred Agent Customer Identity |
| Display (plural) | Preferred Agent Customer Identities |
| Schema name | `msdyn_preferredagentcustomeridentity` |
| Entity set (Web API) | `msdyn_preferredagentcustomeridentities` |
| Primary id attribute | `msdyn_preferredagentcustomeridentityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_preferredagentcustomeridentities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_preferredagentcustomeridentities(<guid>)
POST /api/data/v9.2/msdyn_preferredagentcustomeridentities
PATCH /api/data/v9.2/msdyn_preferredagentcustomeridentities(<guid>)
DELETE /api/data/v9.2/msdyn_preferredagentcustomeridentities(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_associatedfieldname`, `msdyn_entityname`, `msdyn_name`, `msdyn_preferredagentcustomeridentityId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_preferredagentcustomeridentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_preferredagentcustomeridentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_preferredagentcustomeridentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_preferredagentcustomeridentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_preferredagentcustomeridentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_preferredagentcustomeridentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_preferredagentcustomeridentity` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_preferredagentcustomeridentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_preferredagentcustomeridentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagentcustomeridentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagentcustomeridentity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_preferredagentcustomeridentity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_preferredagentcustomeridentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagentcustomeridentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_preferredagentcustomeridentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagentcustomeridentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_preferredagentcustomeridentity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_preferredagentcustomeridentity.md) on 2026-05-06.