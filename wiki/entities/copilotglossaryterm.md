---
logical: "copilotglossaryterm"
display: "CopilotGlossaryTerm"
entitySetName: "copilotglossaryterms"
primaryId: "copilotglossarytermid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# CopilotGlossaryTerm

CopilotGlossaryTerm Component

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

Writable: **14** · Read-only: **18**

### Writable

`CopilotGlossaryTermId`, `Description`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Skill`, `statecode`, `statuscode`, `Term`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_copilotglossaryterm` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `CopilotGlossaryTerm_DVTableSearch` | [dvtablesearch](dvtablesearch.md) | `skill` | `skill` |
| `lk_copilotglossaryterm_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_copilotglossaryterm_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_copilotglossaryterm_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_copilotglossaryterm_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_copilotglossaryterm` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_copilotglossaryterm` | [team](team.md) | `owningteam` | `owningteam` |
| `user_copilotglossaryterm` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `copilotglossaryterm_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotglossaryterm_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotglossaryterm_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotglossaryterm_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `copilotglossaryterm_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotglossaryterm_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [copilotglossaryterm.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/copilotglossaryterm.md) on 2026-05-06.