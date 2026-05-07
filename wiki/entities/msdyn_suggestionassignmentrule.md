---
logical: "msdyn_suggestionassignmentrule"
display: "Suggestion Assignment Rule"
entitySetName: "msdyn_suggestionassignmentrules"
primaryId: "msdyn_suggestionassignmentruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Suggestion Assignment Rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionassignmentrule` |
| Display name | Suggestion Assignment Rule |
| Display (plural) | Suggestion Assignment Rules |
| Schema name | `msdyn_suggestionassignmentrule` |
| Entity set (Web API) | `msdyn_suggestionassignmentrules` |
| Primary id attribute | `msdyn_suggestionassignmentruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestionassignmentrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_suggestionassignmentrules(<guid>)
POST /api/data/v9.2/msdyn_suggestionassignmentrules
PATCH /api/data/v9.2/msdyn_suggestionassignmentrules(<guid>)
DELETE /api/data/v9.2/msdyn_suggestionassignmentrules(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_assignmentruleid`, `msdyn_associatedprimaryentity`, `msdyn_name`, `msdyn_sellerteamtype`, `msdyn_suggestionassignmentruleId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_suggestionassignmentrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_suggestionassignmentrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionassignmentrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionassignmentrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionassignmentrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_assignmentrule_suggestionassignmentrule_lookup` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `msdyn_assignmentruleid` | `msdyn_assignmentruleid` |
| `owner_msdyn_suggestionassignmentrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_suggestionassignmentrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_suggestionassignmentrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestionassignmentrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionassignmentrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionassignmentrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_suggestionassignmentrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_suggestionassignmentrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionassignmentrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_suggestionassignmentrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionassignmentrule_suggestionsellerpriority_suggestionassignmentruleid` | _n/a_ | `msdyn_suggestionassignmentruleid` | _n/a_ |
| `msdyn_suggestionassignmentrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_suggestionassignmentrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_suggestionassignmentrule.md) on 2026-05-06.