---
logical: "connectionreference"
display: "Riferimento di connessione"
entitySetName: "connectionreferences"
primaryId: "connectionreferenceid"
primaryName: "connectionreferencedisplayname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Riferimento di connessione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `connectionreference` |
| Display name | Riferimento di connessione |
| Display (plural) | Riferimenti di connessione |
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

Writable: **18** · Read-only: **16**

### Writable

`connectionid`, `connectionparametersconfig`, `connectionparametersetconfig`, `connectionreferencedisplayname`, `connectionreferenceid`, `connectionreferencelogicalname`, `connectorid`, `customconnectorid`, `description`, `importsequencenumber`, `iscustomizable`, `overriddencreatedon`, `ownerid`, `promptingbehavior`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_connectionreference_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_connectionreference_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_connectionreference_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_connectionreference_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_connectionreference` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_connectionreference` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_connectionreference` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_connectionreference` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `connector_connectionreference` | [connector](connector.md) | `customconnectorid` | `CustomConnectorId` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_connreference_msdyn_connectordatasource` | [connectionreference](connectionreference.md) | `msdyn_connectionreferenceid` | `msdyn_ConnectionReferenceId` |
| `msdyn_AIConfiguration_ConnectionReference` | [connectionreference](connectionreference.md) | `msdyn_connectionreferenceid` | `msdyn_ConnectionReferenceId` |
| `msdyn_connectionreference_msdyn_aimodelcatalog_ConnectionReferenceId` | [connectionreference](connectionreference.md) | `msdyn_connectionreferenceid` | `msdyn_connectionreferenceid` |
| `credential_connectionreference` | [connectionreference](connectionreference.md) | `connectionreference` | `connectionreference` |
| `ConnectionReference_DVTableSearch` | [connectionreference](connectionreference.md) | `connectionreference` | `ConnectionReference` |
| `connectionreference_federatedknowledgeconfiguration` | [connectionreference](connectionreference.md) | `connectionreference` | `ConnectionReference` |
| `msdyn_dfcr_cr_connect` | [connectionreference](connectionreference.md) | `msdyn_connectionreference` | `msdyn_ConnectionReference` |
| `connectionreference_SyncErrors` | [connectionreference](connectionreference.md) | `regardingobjectid` | `regardingobjectid_connectionreference` |
| `connectionreference_AsyncOperations` | [connectionreference](connectionreference.md) | `regardingobjectid` | `regardingobjectid_connectionreference` |
| `connectionreference_MailboxTrackingFolders` | [connectionreference](connectionreference.md) | `regardingobjectid` | `regardingobjectid_connectionreference` |
| `connectionreference_UserEntityInstanceDatas` | [connectionreference](connectionreference.md) | `objectid` | `objectid_connectionreference` |
| `connectionreference_ProcessSession` | [connectionreference](connectionreference.md) | `regardingobjectid` | `regardingobjectid_connectionreference` |
| `connectionreference_BulkDeleteFailures` | [connectionreference](connectionreference.md) | `regardingobjectid` | `regardingobjectid_connectionreference` |
| `connectionreference_PrincipalObjectAttributeAccesses` | [connectionreference](connectionreference.md) | `objectid` | `objectid_connectionreference` |
| `connectionreference_connectioninstance` | [connectionreference](connectionreference.md) | `connectionreferenceid` | `connectionreferenceId` |
| `bot_connectionreference` | [connectionreference](connectionreference.md) | `providerconnectionreferenceid` | `ProviderConnectionReferenceId` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_connectionreference` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_connectionreference` |

## Source

Generated from [connectionreference (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='connectionreference')) on 2026-05-07.