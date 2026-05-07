---
logical: "msdyn_salesagentrun"
display: "Sales agent run"
entitySetName: "msdyn_salesagentruns"
primaryId: "msdyn_salesagentrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales agent run

This table contains records of sales agent runs.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentrun` |
| Display name | Sales agent run |
| Display (plural) | Sales agent runs |
| Schema name | `msdyn_salesagentrun` |
| Entity set (Web API) | `msdyn_salesagentruns` |
| Primary id attribute | `msdyn_salesagentrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentruns(<guid>)
POST /api/data/v9.2/msdyn_salesagentruns
PATCH /api/data/v9.2/msdyn_salesagentruns(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentruns(<guid>)
```

## Attributes

Writable: **23** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_agentoutputentityid`, `msdyn_agentoutputentityname`, `msdyn_agenttype`, `msdyn_endtime`, `msdyn_macroagentorchestrationid`, `msdyn_name`, `msdyn_previoussalesagentrunid`, `msdyn_regardingid`, `msdyn_regardingidIdType`, `msdyn_salesagentprofileid`, `msdyn_salesagentrunId`, `msdyn_starttime`, `msdyn_stepentityid`, `msdyn_stepentityname`, `msdyn_triggers`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesagentrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesagentrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salesagentprofile_msdyn_salesagentrun_SalesAgentProfile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofileid` | `msdyn_salesagentprofileid` |
| `msdyn_salesagentrun_account` | [account](account.md) | `msdyn_regardingid` | `msdyn_regardingid_account` |
| `msdyn_salesagentrun_contact` | [contact](contact.md) | `msdyn_regardingid` | `msdyn_regardingid_contact` |
| `msdyn_salesagentrun_lead` | [lead](lead.md) | `msdyn_regardingid` | `msdyn_regardingid_lead` |
| `msdyn_salesagentrun_msdyn_salesagentrun` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_previoussalesagentrunid` | `msdyn_previoussalesagentrunid` |
| `msdyn_salesagentrun_opportunity` | [opportunity](opportunity.md) | `msdyn_regardingid` | `msdyn_regardingid_opportunity` |
| `owner_msdyn_salesagentrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesagentrun` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesagentrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dcaengageagentresult_salesagentrun_msdyn_salesagentrun` | _n/a_ | `msdyn_salesagentrun` | _n/a_ |
| `msdyn_salesagenthandover_msdyn_salesagentrun` | _n/a_ | `msdyn_salesagentrun` | _n/a_ |
| `msdyn_salesagentrun_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentrun_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentrun_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentrun_msdyn_engageandreadinessagentresult` | _n/a_ | `msdyn_salesagentrun` | _n/a_ |
| `msdyn_salesagentrun_msdyn_engagereadinessagentresult` | _n/a_ | `msdyn_salesagentrun` | _n/a_ |
| `msdyn_salesagentrun_msdyn_salesagentrun` | _n/a_ | `msdyn_previoussalesagentrunid` | _n/a_ |
| `msdyn_salesagentrun_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesagentrun_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesagentrun_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesagentrun.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesagentrun.md) on 2026-05-06.