---
logical: "msdyn_dcaengageagentresult"
display: "SCA Engage Agent Result"
entitySetName: "msdyn_dcaengageagentresults"
primaryId: "msdyn_dcaengageagentresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# SCA Engage Agent Result

This table displays the outcome of interactions handled by the Engage Agent within the Sales Close Agent process.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dcaengageagentresult` |
| Display name | SCA Engage Agent Result |
| Display (plural) | SCA Engage Agent Results |
| Schema name | `msdyn_dcaengageagentresult` |
| Entity set (Web API) | `msdyn_dcaengageagentresults` |
| Primary id attribute | `msdyn_dcaengageagentresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dcaengageagentresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dcaengageagentresults(<guid>)
POST /api/data/v9.2/msdyn_dcaengageagentresults
PATCH /api/data/v9.2/msdyn_dcaengageagentresults(<guid>)
DELETE /api/data/v9.2/msdyn_dcaengageagentresults(<guid>)
```

## Attributes

Writable: **22** · Read-only: **13**

### Writable

`additionaldata`, `ImportSequenceNumber`, `msdyn_dcaengageagentresultId`, `msdyn_engageagentresponsehistory`, `msdyn_executiondetails`, `msdyn_followupdetails`, `msdyn_lastengageagentresponse`, `msdyn_lastprocessedactivityid`, `msdyn_lastprocessedactivitytype`, `msdyn_name`, `msdyn_regarding`, `msdyn_regardingIdType`, `msdyn_runafterdate`, `msdyn_salesagentrun`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `prevstatuscode`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_lastprocessedtimestamp`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dcaengageagentresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dcaengageagentresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dcaengageagentresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dcaengageagentresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dcaengageagentresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_dcaengageagentresult_regarding_account` | [account](account.md) | `msdyn_regarding` | `msdyn_regarding_account` |
| `msdyn_dcaengageagentresult_regarding_contact` | [contact](contact.md) | `msdyn_regarding` | `msdyn_regarding_contact` |
| `msdyn_dcaengageagentresult_regarding_lead` | [lead](lead.md) | `msdyn_regarding` | `msdyn_regarding_lead` |
| `msdyn_dcaengageagentresult_regarding_opportunity` | [opportunity](opportunity.md) | `msdyn_regarding` | `msdyn_regarding_opportunity` |
| `msdyn_dcaengageagentresult_salesagentrun_msdyn_salesagentrun` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |
| `owner_msdyn_dcaengageagentresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dcaengageagentresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dcaengageagentresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dcaengageagentresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dcaengageagentresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dcaengageagentresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dcaengageagentresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dcaengageagentresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dcaengageagentresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dcaengageagentresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dcaengageagentresult.md) on 2026-05-06.