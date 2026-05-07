---
logical: "dvtablesearch"
display: "DVTableSearch"
entitySetName: "dvtablesearchs"
primaryId: "dvtablesearchid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DVTableSearch

DVTableSearches component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvtablesearch` |
| Display name | DVTableSearch |
| Display (plural) | DVTableSearches |
| Schema name | `DVTableSearch` |
| Entity set (Web API) | `dvtablesearchs` |
| Primary id attribute | `dvtablesearchid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvtablesearchs?$select=name&$top=10
GET /api/data/v9.2/dvtablesearchs(<guid>)
POST /api/data/v9.2/dvtablesearchs
PATCH /api/data/v9.2/dvtablesearchs(<guid>)
DELETE /api/data/v9.2/dvtablesearchs(<guid>)
```

## Attributes

Writable: **21** · Read-only: **16**

### Writable

`appid`, `appmoduleid`, `appmoduleuniquename`, `apptype`, `connectionreference`, `dvtablesearchid`, `importsequencenumber`, `iscustomizable`, `knowledgeconfig`, `knowledgesourceconsumerid`, `knowledgesourceprofileid`, `m365appmoduleid`, `m365appmoduleidsecondary`, `name`, `overriddencreatedon`, `ownerid`, `searchtype`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgesourceconsumer_dvtablesearch_knowledgesourceconsumerid` | [knowledgesourceconsumer](knowledgesourceconsumer.md) | `knowledgesourceconsumerid` | `knowledgesourceconsumerid` |
| `knowledgesourceprofile_dvtablesearch_knowledgesourceprofileid` | [knowledgesourceprofile](knowledgesourceprofile.md) | `knowledgesourceprofileid` | `knowledgesourceprofileid` |
| `lk_dvtablesearch_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvtablesearch_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvtablesearch_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvtablesearch_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_dvtablesearch` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_dvtablesearch` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_dvtablesearch` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_dvtablesearch` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ConnectionReference_DVTableSearch` | [connectionreference](connectionreference.md) | `connectionreference` | `ConnectionReference` |
| `AppModule_DVTableSearch_M365AppModuleId` | [appmodule](appmodule.md) | `m365appmoduleid` | `m365appmoduleid` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CopilotExampleQuestion_DVTableSearch` | [dvtablesearch](dvtablesearch.md) | `skillid` | `skillid` |
| `CopilotGlossaryTerm_DVTableSearch` | [dvtablesearch](dvtablesearch.md) | `skill` | `skill` |
| `msdyn_dvtablesearch_msdyn_aiconfigurationsearch` | [dvtablesearch](dvtablesearch.md) | `msdyn_dvtablesearch` | `msdyn_dvtablesearch` |
| `dvtablesearch_SyncErrors` | [dvtablesearch](dvtablesearch.md) | `regardingobjectid` | `regardingobjectid_dvtablesearch` |
| `dvtablesearch_AsyncOperations` | [dvtablesearch](dvtablesearch.md) | `regardingobjectid` | `regardingobjectid_dvtablesearch` |
| `dvtablesearch_MailboxTrackingFolders` | [dvtablesearch](dvtablesearch.md) | `regardingobjectid` | `regardingobjectid_dvtablesearch` |
| `dvtablesearch_UserEntityInstanceDatas` | [dvtablesearch](dvtablesearch.md) | `objectid` | `objectid_dvtablesearch` |
| `dvtablesearch_ProcessSession` | [dvtablesearch](dvtablesearch.md) | `regardingobjectid` | `regardingobjectid_dvtablesearch` |
| `dvtablesearch_BulkDeleteFailures` | [dvtablesearch](dvtablesearch.md) | `regardingobjectid` | `regardingobjectid_dvtablesearch` |
| `dvtablesearch_PrincipalObjectAttributeAccesses` | [dvtablesearch](dvtablesearch.md) | `objectid` | `objectid_dvtablesearch` |
| `DVTableSearch_DVTableSearch_DVTableSearch` | [dvtablesearch](dvtablesearch.md) | `dvtablesearch` | `DVTableSearch` |
| `DVTableSearch_DVFileSearch` | [dvtablesearch](dvtablesearch.md) | `dvtablesearch` | `DVTableSearch` |
| `AIPluginOperation_DVTableSearch_DVTableSe` | [dvtablesearch](dvtablesearch.md) | `dvtablesearch` | `DVTableSearch` |
| `recordstatus_searchtable_SearchConfigurationId` | [dvtablesearch](dvtablesearch.md) | `searchconfigurationid` | `SearchConfigurationId` |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_dvtablesearch` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_dvtablesearch` |
| `powerpagesite_dvtablesearch` | [powerpagesite](powerpagesite.md) | _n/a_ | `powerpagesite_dvtablesearch` |
| `skill_dvtablesearch_association` | [skill](skill.md) | _n/a_ | `skill_dvtablesearch_association` |

## Source

Generated from [dvtablesearch (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='dvtablesearch')) on 2026-05-07.