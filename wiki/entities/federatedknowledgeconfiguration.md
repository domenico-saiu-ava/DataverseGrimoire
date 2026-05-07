---
logical: "federatedknowledgeconfiguration"
display: "FederatedKnowledgeConfiguration"
entitySetName: "federatedknowledgeconfigurations"
primaryId: "federatedknowledgeconfigurationid"
primaryName: "uniquename"
tableType: "Standard"
ownership: "UserOwned"
---

# FederatedKnowledgeConfiguration

FederatedKnowledgeConfigurations component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `federatedknowledgeconfiguration` |
| Display name | FederatedKnowledgeConfiguration |
| Display (plural) | FederatedKnowledgeConfigurations |
| Schema name | `FederatedKnowledgeConfiguration` |
| Entity set (Web API) | `federatedknowledgeconfigurations` |
| Primary id attribute | `federatedknowledgeconfigurationid` |
| Primary name attribute | `uniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/federatedknowledgeconfigurations?$select=uniquename&$top=10
GET /api/data/v9.2/federatedknowledgeconfigurations(<guid>)
POST /api/data/v9.2/federatedknowledgeconfigurations
PATCH /api/data/v9.2/federatedknowledgeconfigurations(<guid>)
DELETE /api/data/v9.2/federatedknowledgeconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ConnectionReference`, `FederatedKnowledgeConfigurationId`, `ImportSequenceNumber`, `IsCustomizable`, `KnowledgeConfig`, `KnowledgeConfigVersion`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `StatusDetail`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_federatedknowledgeconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `connectionreference_federatedknowledgeconfiguration` | [connectionreference](connectionreference.md) | `connectionreference` | `ConnectionReference` |
| `lk_federatedknowledgeconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_federatedknowledgeconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_federatedknowledgeconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_federatedknowledgeconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_federatedknowledgeconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_federatedknowledgeconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_federatedknowledgeconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `federatedknowledgeconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `federatedknowledgeconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `federatedknowledgeconfiguration_federatedknowledgeentityconfiguration` | _n/a_ | `federatedknowledgeconfiguration` | _n/a_ |
| `federatedknowledgeconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `federatedknowledgeconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `federatedknowledgeconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `federatedknowledgeconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [federatedknowledgeconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/federatedknowledgeconfiguration.md) on 2026-05-06.