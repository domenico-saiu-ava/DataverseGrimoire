---
logical: "msdyn_oobaccountresearchresult"
display: "Default OOB Account Research Result"
entitySetName: "msdyn_oobaccountresearchresults"
primaryId: "msdyn_oobaccountresearchresultid"
primaryName: "msdyn_oobaccountname"
tableType: "Standard"
ownership: "UserOwned"
---

# Default OOB Account Research Result

Default Research results for associated account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_oobaccountresearchresult` |
| Display name | Default OOB Account Research Result |
| Display (plural) | Default OOB Account Research Results |
| Schema name | `msdyn_oobaccountresearchresult` |
| Entity set (Web API) | `msdyn_oobaccountresearchresults` |
| Primary id attribute | `msdyn_oobaccountresearchresultid` |
| Primary name attribute | `msdyn_oobaccountname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_oobaccountresearchresults?$select=msdyn_oobaccountname&$top=10
GET /api/data/v9.2/msdyn_oobaccountresearchresults(<guid>)
POST /api/data/v9.2/msdyn_oobaccountresearchresults
PATCH /api/data/v9.2/msdyn_oobaccountresearchresults(<guid>)
DELETE /api/data/v9.2/msdyn_oobaccountresearchresults(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_oobaccountdomainname`, `msdyn_oobaccountfinances`, `msdyn_oobaccountname`, `msdyn_oobaccountnews`, `msdyn_oobaccountoverview`, `msdyn_oobaccountresearchagentlastrun`, `msdyn_oobaccountresearchresultId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_oobaccountresearchresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_oobaccountresearchresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_oobaccountresearchresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_oobaccountresearchresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_oobaccountresearchresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_oobaccountresearchresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_oobaccountresearchresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_oobaccountresearchresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_oobaccountresearchresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oobaccountresearchresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oobaccountresearchresult_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_oobaccountresearchresult_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_oobaccountresearchresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oobaccountresearchresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_oobaccountresearchresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oobaccountresearchresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_oobaccountresearchresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_oobaccountresearchresult.md) on 2026-05-06.