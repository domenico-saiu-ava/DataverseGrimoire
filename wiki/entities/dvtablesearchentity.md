---
logical: "dvtablesearchentity"
display: "DVTableSearchEntity"
entitySetName: "dvtablesearchentities"
primaryId: "dvtablesearchentityid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# DVTableSearchEntity

DVTableSearchEntities component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvtablesearchentity` |
| Display name | DVTableSearchEntity |
| Display (plural) | DVTableSearchEntities |
| Schema name | `DVTableSearchEntity` |
| Entity set (Web API) | `dvtablesearchentities` |
| Primary id attribute | `dvtablesearchentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvtablesearchentities?$select=name&$top=10
GET /api/data/v9.2/dvtablesearchentities(<guid>)
POST /api/data/v9.2/dvtablesearchentities
PATCH /api/data/v9.2/dvtablesearchentities(<guid>)
DELETE /api/data/v9.2/dvtablesearchentities(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`DVTableSearch`, `DVTableSearchEntityId`, `Entity`, `EntityLogicalName`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `unstructuredfilesearchentityId`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_dvtablesearchentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `DVTableSearch_DVTableSearch_DVTableSearch` | [dvtablesearch](dvtablesearch.md) | `dvtablesearch` | `DVTableSearch` |
| `DVTableSearchEntity_Entity_Entity` | [entity](entity.md) | `entity` | `Entity` |
| `dvtablesearchentity_unstructuredfilesearchentity_unstructuredfilesearchentityId` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `unstructuredfilesearchentityid` | `unstructuredfilesearchentityId` |
| `lk_dvtablesearchentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvtablesearchentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvtablesearchentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvtablesearchentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_dvtablesearchentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_dvtablesearchentity` | [team](team.md) | `owningteam` | `owningteam` |
| `user_dvtablesearchentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CopilotSynonyms_DVTableSearchEntity` | _n/a_ | `skillentity` | _n/a_ |
| `dvtablesearchentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvtablesearchentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `DVTableSearchEntity_DVTableSearchAttribut` | _n/a_ | `dvtablesearchentity` | _n/a_ |
| `dvtablesearchentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvtablesearchentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `dvtablesearchentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvtablesearchentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [dvtablesearchentity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/dvtablesearchentity.md) on 2026-05-06.