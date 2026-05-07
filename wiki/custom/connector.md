---
logical: "connector"
display: "Connettore"
entitySetName: "connectors"
primaryId: "connectorid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Connettore

Entità connettore per supportare l'integrazione della soluzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `connector` |
| Display name | Connettore |
| Display (plural) | Connettori |
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

Writable: **25** · Read-only: **17**

### Writable

`capabilities`, `connectionparameters`, `connectionparametersets`, `connectorid`, `connectorinternalid`, `connectortype`, `customcodeblobcontent`, `description`, `displayname`, `extensionassemblyid`, `iconbrandcolor`, `importsequencenumber`, `interfaces`, `introducedversion`, `iscustomizable`, `name`, `openapidefinition`, `overriddencreatedon`, `ownerid`, `policytemplateinstances`, `scriptoperations`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentstate`, `connectoridunique`, `createdby`, `createdon`, `createdonbehalfby`, `iconblobid`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_connector_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_connector_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_connector_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_connector_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_connector` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_connector` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_connector` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_connector` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ImageDescriptor_connector_IconBlob` | [imagedescriptor](imagedescriptor.md) | `iconblobid` | `iconblobid_imagedescriptor` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `connector_SyncErrors` | [connector](connector.md) | `regardingobjectid` | `regardingobjectid_connector` |
| `connector_DuplicateMatchingRecord` | [connector](connector.md) | `duplicaterecordid` | `duplicaterecordid_connector` |
| `connector_DuplicateBaseRecord` | [connector](connector.md) | `baserecordid` | `baserecordid_connector` |
| `connector_AsyncOperations` | [connector](connector.md) | `regardingobjectid` | `regardingobjectid_connector` |
| `connector_MailboxTrackingFolders` | [connector](connector.md) | `regardingobjectid` | `regardingobjectid_connector` |
| `connector_UserEntityInstanceDatas` | [connector](connector.md) | `objectid` | `objectid_connector` |
| `connector_ProcessSession` | [connector](connector.md) | `regardingobjectid` | `regardingobjectid_connector` |
| `connector_BulkDeleteFailures` | [connector](connector.md) | `regardingobjectid` | `regardingobjectid_connector` |
| `connector_PrincipalObjectAttributeAccesses` | [connector](connector.md) | `objectid` | `objectid_connector` |
| `AIPlugin_connector_connector` | [connector](connector.md) | `connector` | `connector` |
| `connector_connectionreference` | [connector](connector.md) | `customconnectorid` | `CustomConnectorId` |
| `lk_connectioninstance_connectorid` | [connector](connector.md) | `connectorid` | `connectorid` |


## Source

Generated from [connector (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='connector')) on 2026-05-07.