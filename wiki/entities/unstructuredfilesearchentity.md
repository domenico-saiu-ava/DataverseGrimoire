---
logical: "unstructuredfilesearchentity"
display: "UnstructuredFileSearchEntity"
entitySetName: "unstructuredfilesearchentities"
primaryId: "unstructuredfilesearchentityid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# UnstructuredFileSearchEntity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `unstructuredfilesearchentity` |
| Display name | UnstructuredFileSearchEntity |
| Display (plural) | UnstructuredFileSearchEntity |
| Schema name | `unstructuredfilesearchentity` |
| Entity set (Web API) | `unstructuredfilesearchentities` |
| Primary id attribute | `unstructuredfilesearchentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/unstructuredfilesearchentities?$select=name&$top=10
GET /api/data/v9.2/unstructuredfilesearchentities(<guid>)
POST /api/data/v9.2/unstructuredfilesearchentities
PATCH /api/data/v9.2/unstructuredfilesearchentities(<guid>)
DELETE /api/data/v9.2/unstructuredfilesearchentities(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `KnowledgeSource`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `SourceUrl`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `unstructuredfilesearchentityId`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_unstructuredfilesearchentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_unstructuredfilesearchentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_unstructuredfilesearchentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_unstructuredfilesearchentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_unstructuredfilesearchentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_unstructuredfilesearchentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_unstructuredfilesearchentity` | [team](team.md) | `owningteam` | `owningteam` |
| `user_unstructuredfilesearchentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dvtablesearchentity_unstructuredfilesearchentity_unstructuredfilesearchentityId` | _n/a_ | `unstructuredfilesearchentityid` | _n/a_ |
| `unstructuredfilesearchentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `unstructuredfilesearchentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `unstructuredfilesearchentity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `unstructuredfilesearchentity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `unstructuredfilesearchentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `unstructuredfilesearchentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `unstructuredfilesearchentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `unstructuredfilesearchentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `unstructuredfilesearchentity_unstructuredfilesearchrecord_UnstructuredFileSearchEntityId` | _n/a_ | `unstructuredfilesearchentityid` | _n/a_ |


## Source

Generated from [unstructuredfilesearchentity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/unstructuredfilesearchentity.md) on 2026-05-06.