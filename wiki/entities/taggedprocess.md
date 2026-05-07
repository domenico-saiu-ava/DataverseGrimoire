---
logical: "taggedprocess"
display: "Tagged Process"
entitySetName: "taggedprocesses"
primaryId: "taggedprocessid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Tagged Process

## Identity

| Property | Value |
| --- | --- |
| Logical name | `taggedprocess` |
| Display name | Tagged Process |
| Display (plural) | Tagged Processes |
| Schema name | `taggedprocess` |
| Entity set (Web API) | `taggedprocesses` |
| Primary id attribute | `taggedprocessid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/taggedprocesses?$select=name&$top=10
GET /api/data/v9.2/taggedprocesses(<guid>)
POST /api/data/v9.2/taggedprocesses
PATCH /api/data/v9.2/taggedprocesses(<guid>)
DELETE /api/data/v9.2/taggedprocesses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Process`, `statecode`, `statuscode`, `Tag`, `taggedprocessId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_taggedprocess` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_taggedprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_taggedprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_taggedprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_taggedprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_taggedprocess` | [owner](owner.md) | `ownerid` | `ownerid` |
| `taggedprocess_Process_workflow` | [workflow](workflow.md) | `process` | `Process` |
| `taggedprocess_tag_tag` | [tag](tag.md) | `tag` | `tag` |
| `team_taggedprocess` | [team](team.md) | `owningteam` | `owningteam` |
| `user_taggedprocess` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `taggedprocess_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `taggedprocess_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `taggedprocess_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `taggedprocess_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `taggedprocess_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `taggedprocess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [taggedprocess.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/taggedprocess.md) on 2026-05-06.