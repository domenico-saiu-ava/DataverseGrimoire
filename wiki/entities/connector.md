---
logical: "connector"
display: "Connector"
entitySetName: "connectors"
primaryId: "connectorid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Connector

Connector Entity to support Solutioning Integration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `connector` |
| Display name | Connector |
| Display (plural) | Connectors |
| Schema name | `connector` |
| Entity set (Web API) | `connectors` |
| Primary id attribute | `connectorid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/connectors?$select=name&$top=10
GET /api/data/v9.2/connectors(<guid>)
POST /api/data/v9.2/connectors
PATCH /api/data/v9.2/connectors(<guid>)
DELETE /api/data/v9.2/connectors(<guid>)
```

## Attributes

Writable: **27** · Read-only: **21**

### Writable

`Capabilities`, `ConnectionParameters`, `ConnectionParameterSets`, `connectorId`, `ConnectorInternalId`, `ConnectorType`, `CustomCodeBlobContent`, `Description`, `DisplayName`, `ExtensionAssemblyId`, `IconBlob`, `IconBrandColor`, `ImportSequenceNumber`, `Interfaces`, `IntroducedVersion`, `IsCustomizable`, `Name`, `OpenApiDefinition`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PolicyTemplateInstances`, `ScriptOperations`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentState`, `ConnectorIdUnique`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IconBlob_Timestamp`, `IconBlob_URL`, `IconBlobId`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_connector` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_connector_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_connector_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_connector_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_connector_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_connector` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_connector` | [team](team.md) | `owningteam` | `owningteam` |
| `user_connector` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPlugin_connector_connector` | _n/a_ | `connector` | _n/a_ |
| `connector_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connector_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connector_connectionreference` | _n/a_ | `customconnectorid` | _n/a_ |
| `connector_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `connector_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `connector_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connector_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `connector_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connector_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lk_connectioninstance_connectorid` | _n/a_ | `connectorid` | _n/a_ |


## Source

Generated from [connector.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/connector.md) on 2026-05-06.