---
logical: "aipluginexternalschemaproperty"
display: "AIPluginExternalSchemaProperty"
entitySetName: "aipluginexternalschemaproperties"
primaryId: "aipluginexternalschemapropertyid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# AIPluginExternalSchemaProperty

AIPluginExternalSchemaProperties component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginexternalschemaproperty` |
| Display name | AIPluginExternalSchemaProperty |
| Display (plural) | AIPluginExternalSchemaProperties |
| Schema name | `AIPluginExternalSchemaProperty` |
| Entity set (Web API) | `aipluginexternalschemaproperties` |
| Primary id attribute | `aipluginexternalschemapropertyid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginexternalschemaproperties?$select=name&$top=10
GET /api/data/v9.2/aipluginexternalschemaproperties(<guid>)
POST /api/data/v9.2/aipluginexternalschemaproperties
PATCH /api/data/v9.2/aipluginexternalschemaproperties(<guid>)
DELETE /api/data/v9.2/aipluginexternalschemaproperties(<guid>)
```

## Attributes

Writable: **11** · Read-only: **18**

### Writable

`AIPluginExternalSchemaPropertyId`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_aipluginexternalschemaproperty` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aipluginexternalschemaproperty_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginexternalschemaproperty_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginexternalschemaproperty_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginexternalschemaproperty_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aipluginexternalschemaproperty` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aipluginexternalschemaproperty` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aipluginexternalschemaproperty` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginexternalschemaproperty_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginexternalschemaproperty_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginexternalschemaproperty_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginexternalschemaproperty_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aipluginexternalschemaproperty_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginexternalschemaproperty_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [aipluginexternalschemaproperty.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aipluginexternalschemaproperty.md) on 2026-05-06.