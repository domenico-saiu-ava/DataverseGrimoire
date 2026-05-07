---
logical: "msdyn_leadagentresult"
display: "Risultato dell'agente lead"
entitySetName: "msdyn_leadagentresults"
primaryId: "msdyn_leadagentresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato dell'agente lead

Entità per salvare i risultati dell'agente lead.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leadagentresult` |
| Display name | Risultato dell'agente lead |
| Display (plural) | Risultati dell'agente lead |
| Schema name | `msdyn_leadagentresult` |
| Entity set (Web API) | `msdyn_leadagentresults` |
| Primary id attribute | `msdyn_leadagentresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leadagentresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leadagentresults(<guid>)
POST /api/data/v9.2/msdyn_leadagentresults
PATCH /api/data/v9.2/msdyn_leadagentresults(<guid>)
DELETE /api/data/v9.2/msdyn_leadagentresults(<guid>)
```

## Attributes

Writable: **30** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_assistleadpriority`, `msdyn_bantscore`, `msdyn_cioengagementsummary`, `msdyn_cioengagementsummarylastrun`, `msdyn_firesynthesisadditionalinsights`, `msdyn_firesynthesisagentlastrun`, `msdyn_firesynthesisdata`, `msdyn_icpbantsummary`, `msdyn_icpexecutivesummary`, `msdyn_icpscore`, `msdyn_leadagentresultid`, `msdyn_leadid`, `msdyn_mostrecentoutlookactivity`, `msdyn_name`, `msdyn_prioritizationagentlastrun`, `msdyn_prioritizationresultdetails`, `msdyn_prioritizationresultscore`, `msdyn_purchasinginterestdata`, `msdyn_qualificationagentlastrun`, `msdyn_qualificationdecision`, `msdyn_qualificationresultdetails`, `msdyn_qualificationresultrank`, `msdyn_qualificationstandards`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_leadagentresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadagentresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadagentresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadagentresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_leadagentresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_leadagentresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_leadagentresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_leadagentresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_leadagentresult_leadid` | [lead](lead.md) | `msdyn_leadid` | `msdyn_leadid_lead` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadagentresult_SyncErrors` | [msdyn_leadagentresult](msdyn_leadagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadagentresult` |
| `msdyn_leadagentresult_DuplicateMatchingRecord` | [msdyn_leadagentresult](msdyn_leadagentresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_leadagentresult` |
| `msdyn_leadagentresult_DuplicateBaseRecord` | [msdyn_leadagentresult](msdyn_leadagentresult.md) | `baserecordid` | `baserecordid_msdyn_leadagentresult` |
| `msdyn_leadagentresult_AsyncOperations` | [msdyn_leadagentresult](msdyn_leadagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadagentresult` |
| `msdyn_leadagentresult_MailboxTrackingFolders` | [msdyn_leadagentresult](msdyn_leadagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadagentresult` |
| `msdyn_leadagentresult_UserEntityInstanceDatas` | [msdyn_leadagentresult](msdyn_leadagentresult.md) | `objectid` | `objectid_msdyn_leadagentresult` |
| `msdyn_leadagentresult_ProcessSession` | [msdyn_leadagentresult](msdyn_leadagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadagentresult` |
| `msdyn_leadagentresult_BulkDeleteFailures` | [msdyn_leadagentresult](msdyn_leadagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadagentresult` |
| `msdyn_leadagentresult_PrincipalObjectAttributeAccesses` | [msdyn_leadagentresult](msdyn_leadagentresult.md) | `objectid` | `objectid_msdyn_leadagentresult` |


## Source

Generated from [msdyn_leadagentresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_leadagentresult')) on 2026-05-07.