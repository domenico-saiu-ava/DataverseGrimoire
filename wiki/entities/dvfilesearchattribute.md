---
logical: "dvfilesearchattribute"
display: "DVFileSearchAttribute"
entitySetName: "dvfilesearchattributes"
primaryId: "dvfilesearchattributeid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# DVFileSearchAttribute

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvfilesearchattribute` |
| Display name | DVFileSearchAttribute |
| Display (plural) | DVFileSearchAttributes |
| Schema name | `DVFileSearchAttribute` |
| Entity set (Web API) | `dvfilesearchattributes` |
| Primary id attribute | `dvfilesearchattributeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvfilesearchattributes?$select=name&$top=10
GET /api/data/v9.2/dvfilesearchattributes(<guid>)
POST /api/data/v9.2/dvfilesearchattributes
PATCH /api/data/v9.2/dvfilesearchattributes(<guid>)
DELETE /api/data/v9.2/dvfilesearchattributes(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`attribute`, `AttributeLogicalName`, `DVFileSearchAttributeId`, `dvfilesearchentity`, `ImportSequenceNumber`, `IsCustomizable`, `IsFilterable`, `IsSearchable`, `IsVectorizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attribute_dvfilesearchattribute` | [attribute](attribute.md) | `attribute` | `attribute` |
| `business_unit_dvfilesearchattribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `DVFileSearchEntity_DVFileSearchAttribute` | [dvfilesearchentity](dvfilesearchentity.md) | `dvfilesearchentity` | `dvfilesearchentity` |
| `lk_dvfilesearchattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvfilesearchattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvfilesearchattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvfilesearchattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_dvfilesearchattribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_dvfilesearchattribute` | [team](team.md) | `owningteam` | `owningteam` |
| `user_dvfilesearchattribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dvfilesearchattribute_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvfilesearchattribute_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvfilesearchattribute_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvfilesearchattribute_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `dvfilesearchattribute_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvfilesearchattribute_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [dvfilesearchattribute.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/dvfilesearchattribute.md) on 2026-05-06.