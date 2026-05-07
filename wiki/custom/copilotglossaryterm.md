---
logical: "copilotglossaryterm"
display: "CopilotGlossaryTerm"
entitySetName: "copilotglossaryterms"
primaryId: "copilotglossarytermid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# CopilotGlossaryTerm

Componente CopilotGlossaryTerm

## Identity

| Property | Value |
| --- | --- |
| Logical name | `copilotglossaryterm` |
| Display name | CopilotGlossaryTerm |
| Display (plural) | CopilotGlossaryTerms |
| Schema name | `CopilotGlossaryTerm` |
| Entity set (Web API) | `copilotglossaryterms` |
| Primary id attribute | `copilotglossarytermid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/copilotglossaryterms?$select=name&$top=10
GET /api/data/v9.2/copilotglossaryterms(<guid>)
POST /api/data/v9.2/copilotglossaryterms
PATCH /api/data/v9.2/copilotglossaryterms(<guid>)
DELETE /api/data/v9.2/copilotglossaryterms(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`copilotglossarytermid`, `description`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `skill`, `statecode`, `statuscode`, `term`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_copilotglossaryterm_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_copilotglossaryterm_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_copilotglossaryterm_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_copilotglossaryterm_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_copilotglossaryterm` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_copilotglossaryterm` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_copilotglossaryterm` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_copilotglossaryterm` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `CopilotGlossaryTerm_DVTableSearch` | [dvtablesearch](dvtablesearch.md) | `skill` | `skill` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `copilotglossaryterm_SyncErrors` | [copilotglossaryterm](copilotglossaryterm.md) | `regardingobjectid` | `regardingobjectid_copilotglossaryterm` |
| `copilotglossaryterm_AsyncOperations` | [copilotglossaryterm](copilotglossaryterm.md) | `regardingobjectid` | `regardingobjectid_copilotglossaryterm` |
| `copilotglossaryterm_MailboxTrackingFolders` | [copilotglossaryterm](copilotglossaryterm.md) | `regardingobjectid` | `regardingobjectid_copilotglossaryterm` |
| `copilotglossaryterm_UserEntityInstanceDatas` | [copilotglossaryterm](copilotglossaryterm.md) | `objectid` | `objectid_copilotglossaryterm` |
| `copilotglossaryterm_ProcessSession` | [copilotglossaryterm](copilotglossaryterm.md) | `regardingobjectid` | `regardingobjectid_copilotglossaryterm` |
| `copilotglossaryterm_BulkDeleteFailures` | [copilotglossaryterm](copilotglossaryterm.md) | `regardingobjectid` | `regardingobjectid_copilotglossaryterm` |
| `copilotglossaryterm_PrincipalObjectAttributeAccesses` | [copilotglossaryterm](copilotglossaryterm.md) | `objectid` | `objectid_copilotglossaryterm` |


## Source

Generated from [copilotglossaryterm (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='copilotglossaryterm')) on 2026-05-07.