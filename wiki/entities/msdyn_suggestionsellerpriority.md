---
logical: "msdyn_suggestionsellerpriority"
display: "Suggestion Seller Priority"
entitySetName: "msdyn_suggestionsellerpriorities"
primaryId: "msdyn_suggestionsellerpriorityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Suggestion Seller Priority

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionsellerpriority` |
| Display name | Suggestion Seller Priority |
| Display (plural) | suggestionsellerpriorities |
| Schema name | `msdyn_suggestionsellerpriority` |
| Entity set (Web API) | `msdyn_suggestionsellerpriorities` |
| Primary id attribute | `msdyn_suggestionsellerpriorityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestionsellerpriorities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_suggestionsellerpriorities(<guid>)
POST /api/data/v9.2/msdyn_suggestionsellerpriorities
PATCH /api/data/v9.2/msdyn_suggestionsellerpriorities(<guid>)
DELETE /api/data/v9.2/msdyn_suggestionsellerpriorities(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_priorityvalue`, `msdyn_sellerxml`, `msdyn_suggestionassignmentruleid`, `msdyn_suggestionsellerpriorityId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_suggestionsellerpriority` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_suggestionsellerpriority_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionsellerpriority_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionsellerpriority_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionsellerpriority_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_suggestionassignmentrule_suggestionsellerpriority_suggestionassignmentruleid` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `msdyn_suggestionassignmentruleid` | `msdyn_suggestionassignmentruleid` |
| `owner_msdyn_suggestionsellerpriority` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_suggestionsellerpriority` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_suggestionsellerpriority` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestionsellerpriority_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionsellerpriority_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionsellerpriority_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_suggestionsellerpriority_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_suggestionsellerpriority_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionsellerpriority_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_suggestionsellerpriority_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionsellerpriority_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_suggestionsellerpriority.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_suggestionsellerpriority.md) on 2026-05-06.