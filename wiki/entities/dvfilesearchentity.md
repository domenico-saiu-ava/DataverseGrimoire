---
logical: "dvfilesearchentity"
display: "DVFileSearchEntity"
entitySetName: "dvfilesearchentities"
primaryId: "dvfilesearchentityid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# DVFileSearchEntity

DVFileSearchEntities component.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvfilesearchentity` |
| Display name | DVFileSearchEntity |
| Display (plural) | DVFileSearchEntities |
| Schema name | `DVFileSearchEntity` |
| Entity set (Web API) | `dvfilesearchentities` |
| Primary id attribute | `dvfilesearchentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvfilesearchentities?$select=name&$top=10
GET /api/data/v9.2/dvfilesearchentities(<guid>)
POST /api/data/v9.2/dvfilesearchentities
PATCH /api/data/v9.2/dvfilesearchentities(<guid>)
DELETE /api/data/v9.2/dvfilesearchentities(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`DVFileSearch`, `DVFileSearchEntityId`, `Entity`, `EntityLogicalName`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_dvfilesearchentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `DVFileSearch_DVFileSearch_DVFileSearchEnt` | [dvfilesearch](dvfilesearch.md) | `dvfilesearch` | `DVFileSearch` |
| `DVFileSearchEntity_Entity_Entity` | [entity](entity.md) | `entity` | `Entity` |
| `lk_dvfilesearchentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvfilesearchentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvfilesearchentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvfilesearchentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_dvfilesearchentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_dvfilesearchentity` | [team](team.md) | `owningteam` | `owningteam` |
| `user_dvfilesearchentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dvfilesearchentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvfilesearchentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `DVFileSearchEntity_DVFileSearchAttribute` | _n/a_ | `dvfilesearchentity` | _n/a_ |
| `dvfilesearchentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvfilesearchentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `dvfilesearchentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvfilesearchentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [dvfilesearchentity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/dvfilesearchentity.md) on 2026-05-06.