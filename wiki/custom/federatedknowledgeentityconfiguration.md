---
logical: "federatedknowledgeentityconfiguration"
display: "FederatedKnowledgeEntityConfiguration"
entitySetName: "federatedknowledgeentityconfigurations"
primaryId: "federatedknowledgeentityconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# FederatedKnowledgeEntityConfiguration

Componente FederatedKnowledgeEntityConfigurations

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

Writable: **13** · Read-only: **16**

### Writable

`entityconfig`, `entityconfigversion`, `federatedknowledgeconfiguration`, `federatedknowledgeentityconfigurationid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_federatedknowledgeentityconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_federatedknowledgeentityconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_federatedknowledgeentityconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_federatedknowledgeentityconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_federatedknowledgeentityconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_federatedknowledgeentityconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_federatedknowledgeentityconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_federatedknowledgeentityconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `federatedknowledgeconfiguration_federatedknowledgeentityconfiguration` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `federatedknowledgeconfiguration` | `FederatedKnowledgeConfiguration` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `federatedknowledgeentityconfiguration_SyncErrors` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeentityconfiguration` |
| `federatedknowledgeentityconfiguration_AsyncOperations` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeentityconfiguration` |
| `federatedknowledgeentityconfiguration_MailboxTrackingFolders` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeentityconfiguration` |
| `federatedknowledgeentityconfiguration_UserEntityInstanceDatas` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `objectid` | `objectid_federatedknowledgeentityconfiguration` |
| `federatedknowledgeentityconfiguration_ProcessSession` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeentityconfiguration` |
| `federatedknowledgeentityconfiguration_BulkDeleteFailures` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeentityconfiguration` |
| `federatedknowledgeentityconfiguration_PrincipalObjectAttributeAccesses` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `objectid` | `objectid_federatedknowledgeentityconfiguration` |


## Source

Generated from [federatedknowledgeentityconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='federatedknowledgeentityconfiguration')) on 2026-05-07.