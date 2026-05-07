---
logical: "federatedknowledgeconfiguration"
display: "FederatedKnowledgeConfiguration"
entitySetName: "federatedknowledgeconfigurations"
primaryId: "federatedknowledgeconfigurationid"
primaryName: "uniquename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# FederatedKnowledgeConfiguration

Componente FederatedKnowledgeConfigurations

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

Writable: **15** · Read-only: **16**

### Writable

`connectionreference`, `federatedknowledgeconfigurationid`, `importsequencenumber`, `iscustomizable`, `knowledgeconfig`, `knowledgeconfigversion`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `statusdetail`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_federatedknowledgeconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_federatedknowledgeconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_federatedknowledgeconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_federatedknowledgeconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_federatedknowledgeconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_federatedknowledgeconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_federatedknowledgeconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_federatedknowledgeconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `connectionreference_federatedknowledgeconfiguration` | [connectionreference](connectionreference.md) | `connectionreference` | `ConnectionReference` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `federatedknowledgeconfiguration_SyncErrors` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeconfiguration` |
| `federatedknowledgeconfiguration_AsyncOperations` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeconfiguration` |
| `federatedknowledgeconfiguration_MailboxTrackingFolders` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeconfiguration` |
| `federatedknowledgeconfiguration_UserEntityInstanceDatas` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `objectid` | `objectid_federatedknowledgeconfiguration` |
| `federatedknowledgeconfiguration_ProcessSession` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeconfiguration` |
| `federatedknowledgeconfiguration_BulkDeleteFailures` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeconfiguration` |
| `federatedknowledgeconfiguration_PrincipalObjectAttributeAccesses` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `objectid` | `objectid_federatedknowledgeconfiguration` |
| `federatedknowledgeconfiguration_federatedknowledgeentityconfiguration` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `federatedknowledgeconfiguration` | `FederatedKnowledgeConfiguration` |


## Source

Generated from [federatedknowledgeconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='federatedknowledgeconfiguration')) on 2026-05-07.