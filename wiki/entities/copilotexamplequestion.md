---
logical: "copilotexamplequestion"
display: "CopilotExampleQuestion"
entitySetName: "copilotexamplequestions"
primaryId: "copilotexamplequestionid"
primaryName: "question"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# CopilotExampleQuestion

CopilotExampleQuestions Component

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

`AppContext`, `Comment`, `CopilotExampleQuestionId`, `CustomDimension`, `CustomField`, `DynamicKnowledge`, `EntityScope`, `EntityScopeColumn`, `ImportSequenceNumber`, `IsCustomizable`, `Knowledge`, `knowledgetype`, `OverriddenCreatedOn`, `Question`, `Rephrase`, `Skill`, `SkillId`, `SQLCorrectness`, `StandardSQL`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `OwningBusinessUnit`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CopilotExampleQuestion_DVTableSearch` | [dvtablesearch](dvtablesearch.md) | `skillid` | `skillid` |
| `lk_copilotexamplequestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_copilotexamplequestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_copilotexamplequestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_copilotexamplequestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_copilotexamplequestion` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `copilotexamplequestion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotexamplequestion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotexamplequestion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotexamplequestion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `copilotexamplequestion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotexamplequestion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [copilotexamplequestion.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/copilotexamplequestion.md) on 2026-05-06.