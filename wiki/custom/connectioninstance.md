---
logical: "connectioninstance"
display: "Connection Instance"
entitySetName: "connectioninstances"
primaryId: "connectioninstanceid"
primaryName: "connectioninternalid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Connection Instance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `connectioninstance` |
| Display name | Connection Instance |
| Display (plural) | Connector Connections |
| Schema name | `ConnectionInstance` |
| Entity set (Web API) | `connectioninstances` |
| Primary id attribute | `connectioninstanceid` |
| Primary name attribute | `connectioninternalid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/connectioninstances?$select=connectioninternalid&$top=10
GET /api/data/v9.2/connectioninstances(<guid>)
POST /api/data/v9.2/connectioninstances
PATCH /api/data/v9.2/connectioninstances(<guid>)
DELETE /api/data/v9.2/connectioninstances(<guid>)
```

## Attributes

Writable: **25** · Read-only: **16**

### Writable

`accountname`, `allowsharing`, `connectioninstancedisplayname`, `connectioninstanceid`, `connectioninstancelogicalname`, `connectioninternalid`, `connectionmetadata`, `connectionparametersconfig`, `connectionparametersetconfig`, `connectionreferenceid`, `connectionstatus`, `connectionversion`, `connectorid`, `connectorinternalid`, `credentialid`, `iconuri`, `importsequencenumber`, `iscustomizable`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `testconnectionlinks`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_connectioninstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_connectioninstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_connectioninstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_connectioninstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_connectioninstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_connectioninstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_connectioninstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_connectioninstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_connectioninstance_connectorid` | [connector](connector.md) | `connectorid` | `connectorid` |
| `connectionreference_connectioninstance` | [connectionreference](connectionreference.md) | `connectionreferenceid` | `connectionreferenceId` |
| `connectioninstance_CredentialId_credential` | [credential](credential.md) | `credentialid` | `CredentialId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `connectioninstance_SyncErrors` | [connectioninstance](connectioninstance.md) | `regardingobjectid` | `regardingobjectid_connectioninstance` |
| `connectioninstance_DuplicateMatchingRecord` | [connectioninstance](connectioninstance.md) | `duplicaterecordid` | `duplicaterecordid_connectioninstance` |
| `connectioninstance_DuplicateBaseRecord` | [connectioninstance](connectioninstance.md) | `baserecordid` | `baserecordid_connectioninstance` |
| `connectioninstance_AsyncOperations` | [connectioninstance](connectioninstance.md) | `regardingobjectid` | `regardingobjectid_connectioninstance` |
| `connectioninstance_MailboxTrackingFolders` | [connectioninstance](connectioninstance.md) | `regardingobjectid` | `regardingobjectid_connectioninstance` |
| `connectioninstance_UserEntityInstanceDatas` | [connectioninstance](connectioninstance.md) | `objectid` | `objectid_connectioninstance` |
| `connectioninstance_ProcessSession` | [connectioninstance](connectioninstance.md) | `regardingobjectid` | `regardingobjectid_connectioninstance` |
| `connectioninstance_BulkDeleteFailures` | [connectioninstance](connectioninstance.md) | `regardingobjectid` | `regardingobjectid_connectioninstance` |
| `connectioninstance_PrincipalObjectAttributeAccesses` | [connectioninstance](connectioninstance.md) | `objectid` | `objectid_connectioninstance` |


## Source

Generated from [connectioninstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='connectioninstance')) on 2026-05-07.