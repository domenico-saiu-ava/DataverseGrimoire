---
logical: "federatedknowledgeentityconfiguration"
display: "FederatedKnowledgeEntityConfiguration"
entitySetName: "federatedknowledgeentityconfigurations"
primaryId: "federatedknowledgeentityconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# FederatedKnowledgeEntityConfiguration

FederatedKnowledgeEntityConfigurations component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `federatedknowledgeentityconfiguration` |
| Display name | FederatedKnowledgeEntityConfiguration |
| Display (plural) | FederatedKnowledgeEntityConfigurations |
| Schema name | `FederatedKnowledgeEntityConfiguration` |
| Entity set (Web API) | `federatedknowledgeentityconfigurations` |
| Primary id attribute | `federatedknowledgeentityconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/federatedknowledgeentityconfigurations?$select=name&$top=10
GET /api/data/v9.2/federatedknowledgeentityconfigurations(<guid>)
POST /api/data/v9.2/federatedknowledgeentityconfigurations
PATCH /api/data/v9.2/federatedknowledgeentityconfigurations(<guid>)
DELETE /api/data/v9.2/federatedknowledgeentityconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`EntityConfig`, `EntityConfigVersion`, `FederatedKnowledgeConfiguration`, `FederatedKnowledgeEntityConfigurationId`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_federatedknowledgeentityconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `federatedknowledgeconfiguration_federatedknowledgeentityconfiguration` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `federatedknowledgeconfiguration` | `FederatedKnowledgeConfiguration` |
| `lk_federatedknowledgeentityconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_federatedknowledgeentityconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_federatedknowledgeentityconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_federatedknowledgeentityconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_federatedknowledgeentityconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_federatedknowledgeentityconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_federatedknowledgeentityconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `federatedknowledgeentityconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `federatedknowledgeentityconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `federatedknowledgeentityconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `federatedknowledgeentityconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `federatedknowledgeentityconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `federatedknowledgeentityconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [federatedknowledgeentityconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/federatedknowledgeentityconfiguration.md) on 2026-05-06.