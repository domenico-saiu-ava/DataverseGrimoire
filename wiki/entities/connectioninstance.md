---
logical: "connectioninstance"
display: "Connection Instance"
entitySetName: "connectioninstances"
primaryId: "connectioninstanceid"
primaryName: "connectioninternalid"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **26** · Read-only: **18**

### Writable

`AccountName`, `AllowSharing`, `ConnectionInstanceDisplayName`, `ConnectionInstanceId`, `ConnectionInstanceLogicalName`, `ConnectionInternalId`, `ConnectionMetadata`, `ConnectionParametersConfig`, `ConnectionParameterSetConfig`, `ConnectionReferenceId`, `ConnectionStatus`, `ConnectionVersion`, `ConnectorId`, `ConnectorInternalId`, `CredentialId`, `IconUri`, `ImportSequenceNumber`, `IsCustomizable`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TestConnectionLinks`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_connectioninstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `connectioninstance_CredentialId_credential` | [credential](credential.md) | `credentialid` | `CredentialId` |
| `connectionreference_connectioninstance` | [connectionreference](connectionreference.md) | `connectionreferenceid` | `connectionreferenceId` |
| `lk_connectioninstance_connectorid` | [connector](connector.md) | `connectorid` | `connectorid` |
| `lk_connectioninstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_connectioninstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_connectioninstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_connectioninstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_connectioninstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_connectioninstance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_connectioninstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `connectioninstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connectioninstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connectioninstance_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `connectioninstance_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `connectioninstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connectioninstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `connectioninstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connectioninstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [connectioninstance.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/connectioninstance.md) on 2026-05-06.