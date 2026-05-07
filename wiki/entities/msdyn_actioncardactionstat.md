---
logical: "msdyn_actioncardactionstat"
display: "Action Card Usage"
entitySetName: "msdyn_actioncardactionstats"
primaryId: "msdyn_actioncardactionstatid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Action Card Usage

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_actioncardactionstat` |
| Display name | Action Card Usage |
| Display (plural) | Action Card Usages |
| Schema name | `msdyn_actioncardactionstat` |
| Entity set (Web API) | `msdyn_actioncardactionstats` |
| Primary id attribute | `msdyn_actioncardactionstatid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_actioncardactionstats?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_actioncardactionstats(<guid>)
POST /api/data/v9.2/msdyn_actioncardactionstats
PATCH /api/data/v9.2/msdyn_actioncardactionstats(<guid>)
DELETE /api/data/v9.2/msdyn_actioncardactionstats(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_actioncardactionstatId`, `msdyn_actioncardid`, `msdyn_cardtype`, `msdyn_cardtypeid`, `msdyn_datapoint`, `msdyn_name`, `msdyn_regardingobjectid`, `msdyn_regardingobjectlogicalname`, `msdyn_regardingobjecttypecode`, `msdyn_userid`, `msdyn_value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_actioncardactionstat` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_actioncardactionstat_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_actioncardactionstat_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_actioncardactionstat_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_actioncardactionstat_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_actioncardactionstat` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_actioncardactionstat` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_actioncardactionstat` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_actioncardactionstat_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardactionstat_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardactionstat_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_actioncardactionstat_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_actioncardactionstat_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardactionstat_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_actioncardactionstat_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardactionstat_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_actioncardactionstat.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_actioncardactionstat.md) on 2026-05-06.