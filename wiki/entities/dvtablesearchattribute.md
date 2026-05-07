---
logical: "dvtablesearchattribute"
display: "DVTableSearchAttribute"
entitySetName: "dvtablesearchattributes"
primaryId: "dvtablesearchattributeid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# DVTableSearchAttribute

DVTableSearchAttribute component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvtablesearchattribute` |
| Display name | DVTableSearchAttribute |
| Display (plural) | DVTableSearchAttributes |
| Schema name | `DVTableSearchAttribute` |
| Entity set (Web API) | `dvtablesearchattributes` |
| Primary id attribute | `dvtablesearchattributeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvtablesearchattributes?$select=name&$top=10
GET /api/data/v9.2/dvtablesearchattributes(<guid>)
POST /api/data/v9.2/dvtablesearchattributes
PATCH /api/data/v9.2/dvtablesearchattributes(<guid>)
DELETE /api/data/v9.2/dvtablesearchattributes(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`attribute`, `AttributeLogicalName`, `DVTableSearchAttributeId`, `dvtablesearchentity`, `ImportSequenceNumber`, `IsAttributeEnabledForVectorSearch`, `IsCustomizable`, `IsRetrievable`, `IsSearchable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attribute_dvtablesearchattribute` | [attribute](attribute.md) | `attribute` | `attribute` |
| `business_unit_dvtablesearchattribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `DVTableSearchEntity_DVTableSearchAttribut` | [dvtablesearchentity](dvtablesearchentity.md) | `dvtablesearchentity` | `dvtablesearchentity` |
| `lk_dvtablesearchattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvtablesearchattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvtablesearchattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvtablesearchattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_dvtablesearchattribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_dvtablesearchattribute` | [team](team.md) | `owningteam` | `owningteam` |
| `user_dvtablesearchattribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dvtablesearchattribute_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvtablesearchattribute_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvtablesearchattribute_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvtablesearchattribute_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `dvtablesearchattribute_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dvtablesearchattribute_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [dvtablesearchattribute.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/dvtablesearchattribute.md) on 2026-05-06.