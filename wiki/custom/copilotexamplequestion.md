---
logical: "copilotexamplequestion"
display: "CopilotExampleQuestion"
entitySetName: "copilotexamplequestions"
primaryId: "copilotexamplequestionid"
primaryName: "question"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# CopilotExampleQuestion

Componente CopilotExampleQuestions

## Identity

| Property | Value |
| --- | --- |
| Logical name | `copilotexamplequestion` |
| Display name | CopilotExampleQuestion |
| Display (plural) | CopilotExampleQuestions |
| Schema name | `CopilotExampleQuestion` |
| Entity set (Web API) | `copilotexamplequestions` |
| Primary id attribute | `copilotexamplequestionid` |
| Primary name attribute | `question` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/copilotexamplequestions?$select=question&$top=10
GET /api/data/v9.2/copilotexamplequestions(<guid>)
POST /api/data/v9.2/copilotexamplequestions
PATCH /api/data/v9.2/copilotexamplequestions(<guid>)
DELETE /api/data/v9.2/copilotexamplequestions(<guid>)
```

## Attributes

Writable: **23** · Read-only: **15**

### Writable

`appcontext`, `comment`, `copilotexamplequestionid`, `customdimension`, `customfield`, `dynamicknowledge`, `entityscope`, `entityscopecolumn`, `importsequencenumber`, `iscustomizable`, `knowledge`, `knowledgetype`, `overriddencreatedon`, `question`, `rephrase`, `skill`, `skillid`, `sqlcorrectness`, `standardsql`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `owningbusinessunit`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_copilotexamplequestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_copilotexamplequestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_copilotexamplequestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_copilotexamplequestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_copilotexamplequestion` | [organization](organization.md) | `organizationid` | `organizationid` |
| `CopilotExampleQuestion_DVTableSearch` | [dvtablesearch](dvtablesearch.md) | `skillid` | `skillid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `copilotexamplequestion_SyncErrors` | [copilotexamplequestion](copilotexamplequestion.md) | `regardingobjectid` | `regardingobjectid_copilotexamplequestion` |
| `copilotexamplequestion_AsyncOperations` | [copilotexamplequestion](copilotexamplequestion.md) | `regardingobjectid` | `regardingobjectid_copilotexamplequestion` |
| `copilotexamplequestion_MailboxTrackingFolders` | [copilotexamplequestion](copilotexamplequestion.md) | `regardingobjectid` | `regardingobjectid_copilotexamplequestion` |
| `copilotexamplequestion_UserEntityInstanceDatas` | [copilotexamplequestion](copilotexamplequestion.md) | `objectid` | `objectid_copilotexamplequestion` |
| `copilotexamplequestion_ProcessSession` | [copilotexamplequestion](copilotexamplequestion.md) | `regardingobjectid` | `regardingobjectid_copilotexamplequestion` |
| `copilotexamplequestion_BulkDeleteFailures` | [copilotexamplequestion](copilotexamplequestion.md) | `regardingobjectid` | `regardingobjectid_copilotexamplequestion` |
| `copilotexamplequestion_PrincipalObjectAttributeAccesses` | [copilotexamplequestion](copilotexamplequestion.md) | `objectid` | `objectid_copilotexamplequestion` |


## Source

Generated from [copilotexamplequestion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='copilotexamplequestion')) on 2026-05-07.