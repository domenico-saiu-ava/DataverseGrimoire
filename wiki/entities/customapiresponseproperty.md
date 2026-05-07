---
logical: "customapiresponseproperty"
display: "Custom API Response Property"
entitySetName: "customapiresponseproperties"
primaryId: "customapiresponsepropertyid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Custom API Response Property

Entity that defines a response property for a custom API

## Identity

| Property | Value |
| --- | --- |
| Logical name | `customapiresponseproperty` |
| Display name | Custom API Response Property |
| Display (plural) | Custom API Response Properties |
| Schema name | `CustomAPIResponseProperty` |
| Entity set (Web API) | `customapiresponseproperties` |
| Primary id attribute | `customapiresponsepropertyid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/customapiresponseproperties?$select=name&$top=10
GET /api/data/v9.2/customapiresponseproperties(<guid>)
POST /api/data/v9.2/customapiresponseproperties
PATCH /api/data/v9.2/customapiresponseproperties(<guid>)
DELETE /api/data/v9.2/customapiresponseproperties(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`CustomAPIId`, `CustomAPIResponsePropertyId`, `Description`, `DisplayName`, `ImportSequenceNumber`, `IsCustomizable`, `LogicalEntityName`, `Name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `customapi_customapiresponseproperty` | [customapi](customapi.md) | `customapiid` | `CustomAPIId` |
| `lk_customapiresponseproperty_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_customapiresponseproperty_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_customapiresponseproperty_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_customapiresponseproperty_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `customapiresponseproperty_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapiresponseproperty_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapiresponseproperty_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapiresponseproperty_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `customapiresponseproperty_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapiresponseproperty_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [customapiresponseproperty.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/customapiresponseproperty.md) on 2026-05-06.