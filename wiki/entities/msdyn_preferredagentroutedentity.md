---
logical: "msdyn_preferredagentroutedentity"
display: "Preferred Agent Routed Entity"
entitySetName: "msdyn_preferredagentroutedentities"
primaryId: "msdyn_preferredagentroutedentityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Preferred Agent Routed Entity

Preferred Agent Routed table used to store information for routed table name and customer identifying column on the table

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_preferredagentroutedentity` |
| Display name | Preferred Agent Routed Entity |
| Display (plural) | Preferred Agent Routed Entity |
| Schema name | `msdyn_preferredagentroutedentity` |
| Entity set (Web API) | `msdyn_preferredagentroutedentities` |
| Primary id attribute | `msdyn_preferredagentroutedentityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_preferredagentroutedentities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_preferredagentroutedentities(<guid>)
POST /api/data/v9.2/msdyn_preferredagentroutedentities
PATCH /api/data/v9.2/msdyn_preferredagentroutedentities(<guid>)
DELETE /api/data/v9.2/msdyn_preferredagentroutedentities(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_customeridentifiername`, `msdyn_Name`, `msdyn_preferredagentroutedentityId`, `msdyn_routedentityname`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_preferredagentroutedentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_preferredagentroutedentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_preferredagentroutedentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_preferredagentroutedentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_preferredagentroutedentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_preferredagentroutedentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_preferredagentroutedentity` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_preferredagentroutedentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_preferredagentroutedentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagentroutedentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagentroutedentity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_preferredagentroutedentity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_preferredagentroutedentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagentroutedentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_preferredagentroutedentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagentroutedentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_preferredagentroutedentity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_preferredagentroutedentity.md) on 2026-05-06.