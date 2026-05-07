---
logical: "msdyn_forecastinstance"
display: "Forecast"
entitySetName: "msdyn_forecastinstances"
primaryId: "msdyn_forecastinstanceid"
primaryName: "msdyn_forecastname"
tableType: "Standard"
ownership: "UserOwned"
---

# Forecast

Stores sales predictions for your team or organization. For internal use.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastinstance` |
| Display name | Forecast |
| Display (plural) | Forecasts |
| Schema name | `msdyn_forecastinstance` |
| Entity set (Web API) | `msdyn_forecastinstances` |
| Primary id attribute | `msdyn_forecastinstanceid` |
| Primary name attribute | `msdyn_forecastname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecastinstances?$select=msdyn_forecastname&$top=10
GET /api/data/v9.2/msdyn_forecastinstances(<guid>)
POST /api/data/v9.2/msdyn_forecastinstances
PATCH /api/data/v9.2/msdyn_forecastinstances(<guid>)
DELETE /api/data/v9.2/msdyn_forecastinstances(<guid>)
```

## Attributes

Writable: **30** · Read-only: **22**

### Writable

`ImportSequenceNumber`, `msdyn_actualamount`, `msdyn_bestcaseamount`, `msdyn_committedamount`, `msdyn_forecastdefinitionid`, `msdyn_forecastinstanceId`, `msdyn_forecastinstancetype`, `msdyn_forecastname`, `msdyn_forecastparentid`, `msdyn_forecastrecurrenceid`, `msdyn_ismanualbestcase`, `msdyn_ismanualcommitted`, `msdyn_ismanualpipeline`, `msdyn_isquotasourcemanual`, `msdyn_level`, `msdyn_manualbestcaseamount`, `msdyn_manualcommittedamount`, `msdyn_manualpipelineamount`, `msdyn_matchinggoalid`, `msdyn_pipelineamount`, `msdyn_recurrenceindex`, `msdyn_targetamount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_actualamount_Base`, `msdyn_bestcaseamount_Base`, `msdyn_committedamount_Base`, `msdyn_manualbestcaseamount_Base`, `msdyn_manualcommittedamount_Base`, `msdyn_manualpipelineamount_Base`, `msdyn_percentageachieved`, `msdyn_pipelineamount_Base`, `msdyn_targetamount_Base`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_forecastinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_forecastinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_goal_msdyn_forecastinstance` | [goal](goal.md) | `msdyn_matchinggoalid` | `msdyn_matchinggoalid` |
| `msdyn_msdyn_forecastdefinition_msdyn_forecastinstance` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `msdyn_forecastdefinitionid` | `msdyn_forecastdefinitionid` |
| `msdyn_msdyn_forecastinstance_msdyn_forecastinstance` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `msdyn_forecastparentid` | `msdyn_forecastparentid` |
| `msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `msdyn_forecastrecurrenceid` | `msdyn_forecastrecurrenceid` |
| `owner_msdyn_forecastinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_forecastinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_msdyn_forecastinstance` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_msdyn_forecastinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastinstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastinstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastinstance_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_forecastinstance_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_forecastinstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastinstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_forecastinstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastinstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_forecastinstance_msdyn_forecastinstance` | _n/a_ | `msdyn_forecastparentid` | _n/a_ |


## Source

Generated from [msdyn_forecastinstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_forecastinstance.md) on 2026-05-06.