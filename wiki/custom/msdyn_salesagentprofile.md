---
logical: "msdyn_salesagentprofile"
display: "SalesAgentProfile"
entitySetName: "msdyn_salesagentprofiles"
primaryId: "msdyn_salesagentprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# SalesAgentProfile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentprofile` |
| Display name | SalesAgentProfile |
| Display (plural) | salesagentprofiles |
| Schema name | `msdyn_salesagentprofile` |
| Entity set (Web API) | `msdyn_salesagentprofiles` |
| Primary id attribute | `msdyn_salesagentprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentprofiles(<guid>)
POST /api/data/v9.2/msdyn_salesagentprofiles
PATCH /api/data/v9.2/msdyn_salesagentprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentprofiles(<guid>)
```

## Attributes

Writable: **29** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_activatedby`, `msdyn_activatedon`, `msdyn_agentlocalecode`, `msdyn_aidisclaimer`, `msdyn_complianceprofile`, `msdyn_description`, `msdyn_emailsignaturerecordid`, `msdyn_iscomplianceenabled`, `msdyn_microagentsconfiguration`, `msdyn_name`, `msdyn_otherterms`, `msdyn_previousstatuscode`, `msdyn_publisherrordetails`, `msdyn_publishstartedon`, `msdyn_publishstatus`, `msdyn_purpose`, `msdyn_salesagentinfo`, `msdyn_salesagentprofileid`, `msdyn_salesagenttype`, `msdyn_segmentinfo`, `msdyn_topic`, `msdyn_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesagentprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesagentprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesagentprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesagentprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesagentprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_systemuser_msdyn_salesagentprofile_ActivatedBy` | [systemuser](systemuser.md) | `msdyn_activatedby` | `msdyn_ActivatedBy` |
| `msdyn_systemuser_msdyn_salesagentprofile_SalesAgentInfo` | [systemuser](systemuser.md) | `msdyn_salesagentinfo` | `msdyn_SalesAgentInfo` |

### One-to-Many (19)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentprofile_SyncErrors` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentprofile` |
| `msdyn_salesagentprofile_DuplicateMatchingRecord` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salesagentprofile` |
| `msdyn_salesagentprofile_DuplicateBaseRecord` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `baserecordid` | `baserecordid_msdyn_salesagentprofile` |
| `msdyn_salesagentprofile_AsyncOperations` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentprofile` |
| `msdyn_salesagentprofile_MailboxTrackingFolders` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentprofile` |
| `msdyn_salesagentprofile_UserEntityInstanceDatas` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `objectid` | `objectid_msdyn_salesagentprofile` |
| `msdyn_salesagentprofile_ProcessSession` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentprofile` |
| `msdyn_salesagentprofile_BulkDeleteFailures` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentprofile` |
| `msdyn_salesagentprofile_PrincipalObjectAttributeAccesses` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `objectid` | `objectid_msdyn_salesagentprofile` |
| `msdyn_salesagentprocessingstate_salesagentprofile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_salesagentprofile` |
| `msdyn_salesagentprofile_msdyn_salesagentrun_SalesAgentProfile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofileid` | `msdyn_salesagentprofileid` |
| `msdyn_triggersalesagent_salesagentprofile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_salesagentprofile` |
| `msdyn_salesagentexecutionconfig_msdyn_salesagentprofileid_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofileid` | `msdyn_salesagentprofileid` |
| `msdyn_OpportunityResearchAgentTrigger_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |
| `msdyn_OpportunityResearchResult_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |
| `msdyn_OpportunityAccountResearchResult_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |
| `msdyn_OpportunityResearchIndicator_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |
| `msdyn_OpportunityResearchUserInteractions_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |
| `msdyn_RelatedConversationTriggerTable_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |


## Source

Generated from [msdyn_salesagentprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesagentprofile')) on 2026-05-07.