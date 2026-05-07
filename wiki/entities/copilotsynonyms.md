---
logical: "copilotsynonyms"
display: "CopilotSynonyms"
entitySetName: "copilotsynonyms"
primaryId: "copilotsynonymsid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# CopilotSynonyms

CopilotSynonyms Component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `copilotsynonyms` |
| Display name | CopilotSynonyms |
| Display (plural) | CopilotSynonyms |
| Schema name | `CopilotSynonyms` |
| Entity set (Web API) | `copilotsynonyms` |
| Primary id attribute | `copilotsynonymsid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/copilotsynonyms?$select=name&$top=10
GET /api/data/v9.2/copilotsynonyms(<guid>)
POST /api/data/v9.2/copilotsynonyms
PATCH /api/data/v9.2/copilotsynonyms(<guid>)
DELETE /api/data/v9.2/copilotsynonyms(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ColumnLogicalName`, `CopilotSynonymsId`, `Description`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `SkillEntity`, `statecode`, `statuscode`, `Synonyms`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_copilotsynonyms` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `CopilotSynonyms_DVTableSearchEntity` | [dvtablesearchentity](dvtablesearchentity.md) | `skillentity` | `skillentity` |
| `lk_copilotsynonyms_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_copilotsynonyms_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_copilotsynonyms_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_copilotsynonyms_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_copilotsynonyms` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_copilotsynonyms` | [team](team.md) | `owningteam` | `owningteam` |
| `user_copilotsynonyms` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `copilotsynonyms_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotsynonyms_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotsynonyms_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotsynonyms_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `copilotsynonyms_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `copilotsynonyms_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [copilotsynonyms.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/copilotsynonyms.md) on 2026-05-06.