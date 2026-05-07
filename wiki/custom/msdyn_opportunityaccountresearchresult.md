---
logical: "msdyn_opportunityaccountresearchresult"
display: "Opportunity Account Research Result"
entitySetName: "msdyn_opportunityaccountresearchresults"
primaryId: "msdyn_opportunityaccountresearchresultid"
primaryName: "msdyn_accountname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Opportunity Account Research Result

Account research results for opportunities

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_opportunityaccountresearchresult` |
| Display name | Opportunity Account Research Result |
| Display (plural) | Opportunity Account Research Results |
| Schema name | `msdyn_OpportunityAccountResearchResult` |
| Entity set (Web API) | `msdyn_opportunityaccountresearchresults` |
| Primary id attribute | `msdyn_opportunityaccountresearchresultid` |
| Primary name attribute | `msdyn_accountname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_opportunityaccountresearchresults?$select=msdyn_accountname&$top=10
GET /api/data/v9.2/msdyn_opportunityaccountresearchresults(<guid>)
POST /api/data/v9.2/msdyn_opportunityaccountresearchresults
PATCH /api/data/v9.2/msdyn_opportunityaccountresearchresults(<guid>)
DELETE /api/data/v9.2/msdyn_opportunityaccountresearchresults(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_accountdomainname`, `msdyn_accountfinances`, `msdyn_accountid`, `msdyn_accountname`, `msdyn_accountnews`, `msdyn_accountoverview`, `msdyn_localecode`, `msdyn_opportunityaccountresearchresultid`, `msdyn_productids`, `msdyn_salesagentprofile`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_opportunityaccountresearchresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunityaccountresearchresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunityaccountresearchresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunityaccountresearchresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_opportunityaccountresearchresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_opportunityaccountresearchresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_opportunityaccountresearchresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_opportunityaccountresearchresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_OpportunityAccountResearchResult_Account_AccountId` | [account](account.md) | `msdyn_accountid` | `msdyn_AccountId` |
| `msdyn_OpportunityAccountResearchResult_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunityaccountresearchresult_SyncErrors` | [msdyn_opportunityaccountresearchresult](msdyn_opportunityaccountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityaccountresearchresult` |
| `msdyn_opportunityaccountresearchresult_AsyncOperations` | [msdyn_opportunityaccountresearchresult](msdyn_opportunityaccountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityaccountresearchresult` |
| `msdyn_opportunityaccountresearchresult_MailboxTrackingFolders` | [msdyn_opportunityaccountresearchresult](msdyn_opportunityaccountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityaccountresearchresult` |
| `msdyn_opportunityaccountresearchresult_UserEntityInstanceDatas` | [msdyn_opportunityaccountresearchresult](msdyn_opportunityaccountresearchresult.md) | `objectid` | `objectid_msdyn_opportunityaccountresearchresult` |
| `msdyn_opportunityaccountresearchresult_ProcessSession` | [msdyn_opportunityaccountresearchresult](msdyn_opportunityaccountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityaccountresearchresult` |
| `msdyn_opportunityaccountresearchresult_BulkDeleteFailures` | [msdyn_opportunityaccountresearchresult](msdyn_opportunityaccountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityaccountresearchresult` |
| `msdyn_opportunityaccountresearchresult_PrincipalObjectAttributeAccesses` | [msdyn_opportunityaccountresearchresult](msdyn_opportunityaccountresearchresult.md) | `objectid` | `objectid_msdyn_opportunityaccountresearchresult` |


## Source

Generated from [msdyn_opportunityaccountresearchresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_opportunityaccountresearchresult')) on 2026-05-07.