---
logical: "msdyn_leaddelinkresult"
display: "Lead Delink Result"
entitySetName: "msdyn_leaddelinkresults"
primaryId: "msdyn_leaddelinkresultid"
primaryName: "msdyn_leadid"
tableType: "Standard"
ownership: "UserOwned"
---

# Lead Delink Result

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leaddelinkresult` |
| Display name | Lead Delink Result |
| Display (plural) | Lead Delink Results |
| Schema name | `msdyn_leaddelinkresult` |
| Entity set (Web API) | `msdyn_leaddelinkresults` |
| Primary id attribute | `msdyn_leaddelinkresultid` |
| Primary name attribute | `msdyn_leadid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leaddelinkresults?$select=msdyn_leadid&$top=10
GET /api/data/v9.2/msdyn_leaddelinkresults(<guid>)
POST /api/data/v9.2/msdyn_leaddelinkresults
PATCH /api/data/v9.2/msdyn_leaddelinkresults(<guid>)
DELETE /api/data/v9.2/msdyn_leaddelinkresults(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_accountid`, `msdyn_ContactId`, `msdyn_isaccountdelinked`, `msdyn_iscontactdelinked`, `msdyn_leaddelinkresultId`, `msdyn_leadid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_leaddelinkresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_leaddelinkresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leaddelinkresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leaddelinkresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leaddelinkresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_leaddelinkresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_leaddelinkresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_leaddelinkresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leaddelinkresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leaddelinkresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leaddelinkresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leaddelinkresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_leaddelinkresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leaddelinkresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_leaddelinkresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_leaddelinkresult.md) on 2026-05-06.