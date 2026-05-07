---
logical: "msdyn_engagereadinessagentresult"
display: "Engage And Readiness Agent Result V2"
entitySetName: "msdyn_engagereadinessagentresults"
primaryId: "msdyn_engagereadinessagentresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Engage And Readiness Agent Result V2

This table contains records of Engage And Readiness Agent Results.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_engagereadinessagentresult` |
| Display name | Engage And Readiness Agent Result V2 |
| Display (plural) | Engage And Readiness Agent Results V2 |
| Schema name | `msdyn_engagereadinessagentresult` |
| Entity set (Web API) | `msdyn_engagereadinessagentresults` |
| Primary id attribute | `msdyn_engagereadinessagentresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_engagereadinessagentresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_engagereadinessagentresults(<guid>)
POST /api/data/v9.2/msdyn_engagereadinessagentresults
PATCH /api/data/v9.2/msdyn_engagereadinessagentresults(<guid>)
DELETE /api/data/v9.2/msdyn_engagereadinessagentresults(<guid>)
```

## Attributes

Writable: **24** · Read-only: **13**

### Writable

`ImportSequenceNumber`, `msdyn_agentrespondedquerycount`, `msdyn_bantdata`, `msdyn_customeraskedquerycount`, `msdyn_engagereadinessagentresultId`, `msdyn_executiondetails`, `msdyn_followupdetails`, `msdyn_lastengageagentresponse`, `msdyn_lastprocessedactivityid`, `msdyn_lastprocessedactivitytype`, `msdyn_name`, `msdyn_purchaseintentdata`, `msdyn_regardingid`, `msdyn_regardingidIdType`, `msdyn_RunAfterDate`, `msdyn_salesagentrun`, `msdyn_standardsinterviewed`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_lastprocessedtimestamp`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_engagereadinessagentresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_engagereadinessagentresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_engagereadinessagentresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_engagereadinessagentresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_engagereadinessagentresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_engagereadinessagentresult_lead` | [lead](lead.md) | `msdyn_regardingid` | `msdyn_regardingid_lead` |
| `msdyn_salesagentrun_msdyn_engagereadinessagentresult` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |
| `owner_msdyn_engagereadinessagentresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_engagereadinessagentresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_engagereadinessagentresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_engagereadinessagentresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_engagereadinessagentresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_engagereadinessagentresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_engagereadinessagentresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_engagereadinessagentresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_engagereadinessagentresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_engagereadinessagentresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_engagereadinessagentresult.md) on 2026-05-06.