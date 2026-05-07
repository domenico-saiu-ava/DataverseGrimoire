---
logical: "botcomponentcollection"
display: "Copilot component collection"
entitySetName: "botcomponentcollections"
primaryId: "botcomponentcollectionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Copilot component collection

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponentcollection` |
| Display name | Copilot component collection |
| Display (plural) | Copilot component collections |
| Schema name | `botcomponentcollection` |
| Entity set (Web API) | `botcomponentcollections` |
| Primary id attribute | `botcomponentcollectionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/botcomponentcollections?$select=name&$top=10
GET /api/data/v9.2/botcomponentcollections(<guid>)
POST /api/data/v9.2/botcomponentcollections
PATCH /api/data/v9.2/botcomponentcollections(<guid>)
DELETE /api/data/v9.2/botcomponentcollections(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`botcomponentcollectionId`, `Configuration`, `Description`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `SchemaName`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_botcomponentcollection` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_botcomponentcollection_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_botcomponentcollection_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_botcomponentcollection_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_botcomponentcollection_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_botcomponentcollection` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_botcomponentcollection` | [team](team.md) | `owningteam` | `owningteam` |
| `user_botcomponentcollection` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_parent_botcomponentcollection` | _n/a_ | `parentbotcomponentcollectionid` | _n/a_ |
| `botcomponentcollection_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `botcomponentcollection_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `botcomponentcollection_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `botcomponentcollection_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `botcomponentcollection_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `botcomponentcollection_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_botcomponentcollection` | [botcomponentcollectionid](botcomponentcollectionid.md) | _n/a_ | _n/a_ |

## Source

Generated from [botcomponentcollection.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/botcomponentcollection.md) on 2026-05-06.