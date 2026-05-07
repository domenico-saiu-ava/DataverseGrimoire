---
logical: "msdynmkt_predefinedplaceholder"
display: "Predefined Placeholder"
entitySetName: "msdynmkt_predefinedplaceholders"
primaryId: "msdynmkt_predefinedplaceholderid"
primaryName: "msdynmkt_description"
tableType: "Standard"
ownership: "UserOwned"
---

# Predefined Placeholder

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_predefinedplaceholder` |
| Display name | Predefined Placeholder |
| Display (plural) | Predefined Placeholders |
| Schema name | `msdynmkt_predefinedplaceholder` |
| Entity set (Web API) | `msdynmkt_predefinedplaceholders` |
| Primary id attribute | `msdynmkt_predefinedplaceholderid` |
| Primary name attribute | `msdynmkt_description` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_predefinedplaceholders?$select=msdynmkt_description&$top=10
GET /api/data/v9.2/msdynmkt_predefinedplaceholders(<guid>)
POST /api/data/v9.2/msdynmkt_predefinedplaceholders
PATCH /api/data/v9.2/msdynmkt_predefinedplaceholders(<guid>)
DELETE /api/data/v9.2/msdynmkt_predefinedplaceholders(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_description`, `msdynmkt_isbuiltin`, `msdynmkt_language`, `msdynmkt_namespace`, `msdynmkt_placeholderdescriptors`, `msdynmkt_placeholderlabel`, `msdynmkt_placeholdertype`, `msdynmkt_predefinedplaceholderId`, `msdynmkt_usecount`, `msdynmkt_usedon`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_predefinedplaceholder` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_predefinedplaceholder_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_predefinedplaceholder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_predefinedplaceholder_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_predefinedplaceholder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_predefinedplaceholder` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_predefinedplaceholder` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_predefinedplaceholder` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_predefinedplaceholder_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_predefinedplaceholder_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_predefinedplaceholder_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_predefinedplaceholder_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_predefinedplaceholder_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_predefinedplaceholder_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_predefinedplaceholder_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_predefinedplaceholder_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_predefinedplaceholder.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_predefinedplaceholder.md) on 2026-05-06.