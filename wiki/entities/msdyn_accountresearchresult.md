---
logical: "msdyn_accountresearchresult"
display: "Account Research Result"
entitySetName: "msdyn_accountresearchresults"
primaryId: "msdyn_accountresearchresultid"
primaryName: "msdyn_accountname"
tableType: "Standard"
ownership: "UserOwned"
---

# Account Research Result

Research results for associated account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_accountresearchresult` |
| Display name | Account Research Result |
| Display (plural) | Account Research Result |
| Schema name | `msdyn_accountresearchresult` |
| Entity set (Web API) | `msdyn_accountresearchresults` |
| Primary id attribute | `msdyn_accountresearchresultid` |
| Primary name attribute | `msdyn_accountname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_accountresearchresults?$select=msdyn_accountname&$top=10
GET /api/data/v9.2/msdyn_accountresearchresults(<guid>)
POST /api/data/v9.2/msdyn_accountresearchresults
PATCH /api/data/v9.2/msdyn_accountresearchresults(<guid>)
DELETE /api/data/v9.2/msdyn_accountresearchresults(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_accountdomainname`, `msdyn_accountfinances`, `msdyn_accountname`, `msdyn_accountnews`, `msdyn_accountoverview`, `msdyn_accountresearchagentlastrun`, `msdyn_accountresearchresultId`, `msdyn_CustomResearchConfigId`, `msdyn_CustomResearchResults`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_accountresearchresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_accountresearchresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_accountresearchresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_accountresearchresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_accountresearchresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_accountresearchresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_accountresearchresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_accountresearchresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_accountresearchresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchresult_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_accountresearchresult_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_accountresearchresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_accountresearchresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_accountresearchresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_accountresearchresult.md) on 2026-05-06.