---
logical: "msdyn_customoobresearchresult"
display: "Custom OOB Research Result"
entitySetName: "msdyn_customoobresearchresults"
primaryId: "msdyn_customoobresearchresultid"
primaryName: "msdyn_customoobresearchname"
tableType: "Standard"
ownership: "UserOwned"
---

# Custom OOB Research Result

Custom OOB Research results for associated account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customoobresearchresult` |
| Display name | Custom OOB Research Result |
| Display (plural) | Custom OOB Research Results |
| Schema name | `msdyn_customoobresearchresult` |
| Entity set (Web API) | `msdyn_customoobresearchresults` |
| Primary id attribute | `msdyn_customoobresearchresultid` |
| Primary name attribute | `msdyn_customoobresearchname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customoobresearchresults?$select=msdyn_customoobresearchname&$top=10
GET /api/data/v9.2/msdyn_customoobresearchresults(<guid>)
POST /api/data/v9.2/msdyn_customoobresearchresults
PATCH /api/data/v9.2/msdyn_customoobresearchresults(<guid>)
DELETE /api/data/v9.2/msdyn_customoobresearchresults(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_customoobresearchagentlastrun`, `msdyn_customoobresearchdomainname`, `msdyn_customoobresearchfinances`, `msdyn_customoobresearchname`, `msdyn_customoobresearchnews`, `msdyn_customoobresearchoverview`, `msdyn_customoobresearchresultId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_customoobresearchresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_customoobresearchresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customoobresearchresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customoobresearchresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customoobresearchresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_customoobresearchresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_customoobresearchresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_customoobresearchresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customoobresearchresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customoobresearchresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customoobresearchresult_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customoobresearchresult_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customoobresearchresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customoobresearchresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customoobresearchresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customoobresearchresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_customoobresearchresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_customoobresearchresult.md) on 2026-05-06.