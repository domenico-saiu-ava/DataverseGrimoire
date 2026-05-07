---
logical: "msdyn_engageandreadinessagentresult"
display: "Engage And Readiness Agent Result"
entitySetName: "msdyn_engageandreadinessagentresults"
primaryId: "msdyn_engageandreadinessagentresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Engage And Readiness Agent Result

This table contains records of Engage And Readiness Agent Results.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_engageandreadinessagentresult` |
| Display name | Engage And Readiness Agent Result |
| Display (plural) | Engage And Readiness Agent Results |
| Schema name | `msdyn_engageandreadinessagentresult` |
| Entity set (Web API) | `msdyn_engageandreadinessagentresults` |
| Primary id attribute | `msdyn_engageandreadinessagentresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_engageandreadinessagentresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_engageandreadinessagentresults(<guid>)
POST /api/data/v9.2/msdyn_engageandreadinessagentresults
PATCH /api/data/v9.2/msdyn_engageandreadinessagentresults(<guid>)
DELETE /api/data/v9.2/msdyn_engageandreadinessagentresults(<guid>)
```

## Attributes

Writable: **19** · Read-only: **13**

### Writable

`ImportSequenceNumber`, `msdyn_bantdata`, `msdyn_engageandreadinessagentresultId`, `msdyn_executiondetails`, `msdyn_lastengageagentresponse`, `msdyn_lastprocessedactivityid`, `msdyn_lastprocessedactivitytype`, `msdyn_name`, `msdyn_purchaseintentdata`, `msdyn_regardingid`, `msdyn_regardingidIdType`, `msdyn_salesagentrun`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_lastprocessedtimestamp`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_engageandreadinessagentresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_engageandreadinessagentresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_engageandreadinessagentresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_engageandreadinessagentresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_engageandreadinessagentresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_engageandreadinessagentresult_lead` | [lead](lead.md) | `msdyn_regardingid` | `msdyn_regardingid_lead` |
| `msdyn_salesagentrun_msdyn_engageandreadinessagentresult` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |
| `owner_msdyn_engageandreadinessagentresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_engageandreadinessagentresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_engageandreadinessagentresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_engageandreadinessagentresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_engageandreadinessagentresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_engageandreadinessagentresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_engageandreadinessagentresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_engageandreadinessagentresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_engageandreadinessagentresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_engageandreadinessagentresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_engageandreadinessagentresult.md) on 2026-05-06.