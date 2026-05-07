---
logical: "msdyn_customaccountinsightsresult"
display: "Custom Account Insights Result"
entitySetName: "msdyn_customaccountinsightsresults"
primaryId: "msdyn_customaccountinsightsresultid"
primaryName: "msdyn_customaccountinsightsname"
tableType: "Standard"
ownership: "UserOwned"
---

# Custom Account Insights Result

Custom Account Insights Results results for associated account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customaccountinsightsresult` |
| Display name | Custom Account Insights Result |
| Display (plural) | Custom Account Insights Results |
| Schema name | `msdyn_customaccountinsightsresult` |
| Entity set (Web API) | `msdyn_customaccountinsightsresults` |
| Primary id attribute | `msdyn_customaccountinsightsresultid` |
| Primary name attribute | `msdyn_customaccountinsightsname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customaccountinsightsresults?$select=msdyn_customaccountinsightsname&$top=10
GET /api/data/v9.2/msdyn_customaccountinsightsresults(<guid>)
POST /api/data/v9.2/msdyn_customaccountinsightsresults
PATCH /api/data/v9.2/msdyn_customaccountinsightsresults(<guid>)
DELETE /api/data/v9.2/msdyn_customaccountinsightsresults(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_customaccountinsightsagentlastrun`, `msdyn_customaccountinsightsagentresult`, `msdyn_customaccountinsightsconfigid`, `msdyn_customaccountinsightsdomainname`, `msdyn_customaccountinsightsname`, `msdyn_customaccountinsightsresultId`, `msdyn_leadId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_customaccountinsightsresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_customaccountinsightsresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customaccountinsightsresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customaccountinsightsresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customaccountinsightsresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_customaccountinsightsresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_customaccountinsightsresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_customaccountinsightsresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customaccountinsightsresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customaccountinsightsresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customaccountinsightsresult_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customaccountinsightsresult_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customaccountinsightsresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customaccountinsightsresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customaccountinsightsresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customaccountinsightsresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_customaccountinsightsresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_customaccountinsightsresult.md) on 2026-05-06.