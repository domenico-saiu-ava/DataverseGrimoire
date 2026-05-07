---
logical: "msdyn_agentnudgetemplate"
display: "Modello di suggerimento agente"
entitySetName: "msdyn_agentnudgetemplates"
primaryId: "msdyn_agentnudgetemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di suggerimento agente

Rappresenta un'occorrenza di una regola di conformità violata in una conversazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentnudgetemplate` |
| Display name | Modello di suggerimento agente |
| Display (plural) | Modelli di suggerimento agente |
| Schema name | `msdyn_AgentNudgeTemplate` |
| Entity set (Web API) | `msdyn_agentnudgetemplates` |
| Primary id attribute | `msdyn_agentnudgetemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentnudgetemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentnudgetemplates(<guid>)
POST /api/data/v9.2/msdyn_agentnudgetemplates
PATCH /api/data/v9.2/msdyn_agentnudgetemplates(<guid>)
DELETE /api/data/v9.2/msdyn_agentnudgetemplates(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentnudgetemplateid`, `msdyn_name`, `msdyn_nudgetext`, `msdyn_priority`, `msdyn_shownudge`, `msdyn_suggestnextresponse`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentnudgetemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentnudgetemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentnudgetemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentnudgetemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentnudgetemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentnudgetemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentnudgetemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentnudgetemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentnudgetemplate_SyncErrors` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentnudgetemplate` |
| `msdyn_agentnudgetemplate_DuplicateMatchingRecord` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentnudgetemplate` |
| `msdyn_agentnudgetemplate_DuplicateBaseRecord` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `baserecordid` | `baserecordid_msdyn_agentnudgetemplate` |
| `msdyn_agentnudgetemplate_AsyncOperations` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentnudgetemplate` |
| `msdyn_agentnudgetemplate_MailboxTrackingFolders` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentnudgetemplate` |
| `msdyn_agentnudgetemplate_UserEntityInstanceDatas` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `objectid` | `objectid_msdyn_agentnudgetemplate` |
| `msdyn_agentnudgetemplate_ProcessSession` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentnudgetemplate` |
| `msdyn_agentnudgetemplate_BulkDeleteFailures` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentnudgetemplate` |
| `msdyn_agentnudgetemplate_PrincipalObjectAttributeAccesses` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `objectid` | `objectid_msdyn_agentnudgetemplate` |
| `msdyn_AgentNudge_NudgeTemplateID_msdyn_agentnudgetemplate` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `msdyn_nudgetemplateid` | `msdyn_NudgeTemplateID` |
| `msdyn_compliancerule_NudgeTemplateID_msdyn_agentnudgetemplate` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `msdyn_nudgetemplateid` | `msdyn_NudgeTemplateID` |


## Source

Generated from [msdyn_agentnudgetemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentnudgetemplate')) on 2026-05-07.