---
logical: "msdyn_forecastinstance"
display: "Previsione"
entitySetName: "msdyn_forecastinstances"
primaryId: "msdyn_forecastinstanceid"
primaryName: "msdyn_forecastname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Previsione

Archivia le previsioni di vendita per il tuo team o organizzazione. Per uso interno.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastinstance` |
| Display name | Previsione |
| Display (plural) | Previsioni |
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

Writable: **29** · Read-only: **20**

### Writable

`importsequencenumber`, `msdyn_actualamount`, `msdyn_bestcaseamount`, `msdyn_committedamount`, `msdyn_forecastdefinitionid`, `msdyn_forecastinstanceid`, `msdyn_forecastinstancetype`, `msdyn_forecastname`, `msdyn_forecastparentid`, `msdyn_forecastrecurrenceid`, `msdyn_ismanualbestcase`, `msdyn_ismanualcommitted`, `msdyn_ismanualpipeline`, `msdyn_isquotasourcemanual`, `msdyn_level`, `msdyn_manualbestcaseamount`, `msdyn_manualcommittedamount`, `msdyn_manualpipelineamount`, `msdyn_matchinggoalid`, `msdyn_pipelineamount`, `msdyn_recurrenceindex`, `msdyn_targetamount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `transactioncurrencyid`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `exchangerate`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_actualamount_base`, `msdyn_bestcaseamount_base`, `msdyn_committedamount_base`, `msdyn_manualbestcaseamount_base`, `msdyn_manualcommittedamount_base`, `msdyn_manualpipelineamount_base`, `msdyn_percentageachieved`, `msdyn_pipelineamount_base`, `msdyn_targetamount_base`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_forecastinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_forecastinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_forecastinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_forecastinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `TransactionCurrency_msdyn_forecastinstance` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `msdyn_msdyn_forecastdefinition_msdyn_forecastinstance` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `msdyn_forecastdefinitionid` | `msdyn_forecastdefinitionid` |
| `msdyn_msdyn_forecastinstance_msdyn_forecastinstance` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `msdyn_forecastparentid` | `msdyn_forecastparentid` |
| `msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `msdyn_forecastrecurrenceid` | `msdyn_forecastrecurrenceid` |
| `msdyn_goal_msdyn_forecastinstance` | [goal](goal.md) | `msdyn_matchinggoalid` | `msdyn_matchinggoalid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastinstance_SyncErrors` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastinstance` |
| `msdyn_forecastinstance_DuplicateMatchingRecord` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_forecastinstance` |
| `msdyn_forecastinstance_DuplicateBaseRecord` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `baserecordid` | `baserecordid_msdyn_forecastinstance` |
| `msdyn_forecastinstance_AsyncOperations` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastinstance` |
| `msdyn_forecastinstance_MailboxTrackingFolders` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastinstance` |
| `msdyn_forecastinstance_UserEntityInstanceDatas` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `objectid` | `objectid_msdyn_forecastinstance` |
| `msdyn_forecastinstance_ProcessSession` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastinstance` |
| `msdyn_forecastinstance_BulkDeleteFailures` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastinstance` |
| `msdyn_forecastinstance_PrincipalObjectAttributeAccesses` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `objectid` | `objectid_msdyn_forecastinstance` |
| `msdyn_msdyn_forecastinstance_msdyn_forecastinstance` | [msdyn_forecastinstance](msdyn_forecastinstance.md) | `msdyn_forecastparentid` | `msdyn_forecastparentid` |


## Source

Generated from [msdyn_forecastinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_forecastinstance')) on 2026-05-07.