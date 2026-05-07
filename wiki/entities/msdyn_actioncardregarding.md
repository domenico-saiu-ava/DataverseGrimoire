---
logical: "msdyn_actioncardregarding"
display: "Action Card Regarding"
entitySetName: "msdyn_actioncardregardings"
primaryId: "msdyn_actioncardregardingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Action Card Regarding

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_actioncardregarding` |
| Display name | Action Card Regarding |
| Display (plural) | Action Card Regardings |
| Schema name | `msdyn_actioncardregarding` |
| Entity set (Web API) | `msdyn_actioncardregardings` |
| Primary id attribute | `msdyn_actioncardregardingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_actioncardregardings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_actioncardregardings(<guid>)
POST /api/data/v9.2/msdyn_actioncardregardings
PATCH /api/data/v9.2/msdyn_actioncardregardings(<guid>)
DELETE /api/data/v9.2/msdyn_actioncardregardings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_actioncardid`, `msdyn_actioncardregardingId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_actioncardregarding` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_actioncardregarding_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_actioncardregarding_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_actioncardregarding_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_actioncardregarding_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_actioncardregarding` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_actioncardregarding` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_actioncardregarding` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_actioncardregarding_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardregarding_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardregarding_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_actioncardregarding_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_actioncardregarding_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardregarding_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_actioncardregarding_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardregarding_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_actioncardregarding.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_actioncardregarding.md) on 2026-05-06.