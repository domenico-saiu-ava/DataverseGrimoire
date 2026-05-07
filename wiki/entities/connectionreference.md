---
logical: "connectionreference"
display: "Connection Reference"
entitySetName: "connectionreferences"
primaryId: "connectionreferenceid"
primaryName: "connectionreferencedisplayname"
tableType: "Standard"
ownership: "UserOwned"
---

# Connection Reference

## Identity

| Property | Value |
| --- | --- |
| Logical name | `connectionreference` |
| Display name | Connection Reference |
| Display (plural) | Connection References |
| Schema name | `connectionreference` |
| Entity set (Web API) | `connectionreferences` |
| Primary id attribute | `connectionreferenceid` |
| Primary name attribute | `connectionreferencedisplayname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/connectionreferences?$select=connectionreferencedisplayname&$top=10
GET /api/data/v9.2/connectionreferences(<guid>)
POST /api/data/v9.2/connectionreferences
PATCH /api/data/v9.2/connectionreferences(<guid>)
DELETE /api/data/v9.2/connectionreferences(<guid>)
```

## Attributes

Writable: **19** · Read-only: **18**

### Writable

`ConnectionId`, `ConnectionParametersConfig`, `ConnectionParameterSetConfig`, `connectionreferencedisplayname`, `connectionreferenceId`, `ConnectionReferenceLogicalName`, `ConnectorId`, `CustomConnectorId`, `Description`, `ImportSequenceNumber`, `IsCustomizable`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PromptingBehavior`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_connectionreference` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `connector_connectionreference` | [connector](connector.md) | `customconnectorid` | `CustomConnectorId` |
| `lk_connectionreference_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_connectionreference_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_connectionreference_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_connectionreference_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_connectionreference` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_connectionreference` | [team](team.md) | `owningteam` | `owningteam` |
| `user_connectionreference` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_connectionreference` | _n/a_ | `providerconnectionreferenceid` | _n/a_ |
| `connectionreference_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connectionreference_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connectionreference_connectioninstance` | _n/a_ | `connectionreferenceid` | _n/a_ |
| `ConnectionReference_DVTableSearch` | _n/a_ | `connectionreference` | _n/a_ |
| `connectionreference_federatedknowledgeconfiguration` | _n/a_ | `connectionreference` | _n/a_ |
| `connectionreference_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connectionreference_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `connectionreference_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connectionreference_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `credential_connectionreference` | _n/a_ | `connectionreference` | _n/a_ |
| `msdyn_AIConfiguration_ConnectionReference` | _n/a_ | `msdyn_connectionreferenceid` | _n/a_ |
| `msdyn_connreference_msdyn_connectordatasource` | _n/a_ | `msdyn_connectionreferenceid` | _n/a_ |
| `msdyn_dfcr_cr_connect` | _n/a_ | `msdyn_connectionreference` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_connectionreference` | [connectionreferenceid](connectionreferenceid.md) | _n/a_ | _n/a_ |

## Source

Generated from [connectionreference.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/connectionreference.md) on 2026-05-06.