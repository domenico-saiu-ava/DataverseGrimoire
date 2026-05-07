---
logical: "msdyn_botusermapping"
display: "Bot user mapping"
entitySetName: "msdyn_botusermappings"
primaryId: "msdyn_botusermappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Bot user mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_botusermapping` |
| Display name | Bot user mapping |
| Display (plural) | Bot user mappings |
| Schema name | `msdyn_botusermapping` |
| Entity set (Web API) | `msdyn_botusermappings` |
| Primary id attribute | `msdyn_botusermappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_botusermappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_botusermappings(<guid>)
POST /api/data/v9.2/msdyn_botusermappings
PATCH /api/data/v9.2/msdyn_botusermappings(<guid>)
DELETE /api/data/v9.2/msdyn_botusermappings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_botapplicationid`, `msdyn_botusermappingId`, `msdyn_name`, `msdyn_owningenvironmentid`, `msdyn_systemuserid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_botusermapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_botusermapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_botusermapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_botusermapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_botusermapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_systemuser_botusermapping_systemuserid` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |
| `owner_msdyn_botusermapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_botusermapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_botusermapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_botusermapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_botusermapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_botusermapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_botusermapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_botusermapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_botusermapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_botusermapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_botusermapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_botusermapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_botusermapping.md) on 2026-05-06.