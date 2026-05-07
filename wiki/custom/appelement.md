---
logical: "appelement"
display: "Elemento dell'app basata su modello"
entitySetName: "appelements"
primaryId: "appelementid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento dell'app basata su modello

Associa un'app basata su modello ai relativi componenti.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appelement` |
| Display name | Elemento dell'app basata su modello |
| Display (plural) | Elementi dell'app basata su modello |
| Schema name | `AppElement` |
| Entity set (Web API) | `appelements` |
| Primary id attribute | `appelementid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appelements?$select=name&$top=10
GET /api/data/v9.2/appelements(<guid>)
POST /api/data/v9.2/appelements
PATCH /api/data/v9.2/appelements(<guid>)
DELETE /api/data/v9.2/appelements(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`appelementid`, `canvasappid`, `importsequencenumber`, `iscustomizable`, `name`, `objectid`, `overriddencreatedon`, `parentappmoduleid`, `publishconfiguration`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `statecode`, `statuscode`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appelement_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appelement_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appelement_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appelement_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appelement` | [organization](organization.md) | `organizationid` | `organizationid` |
| `appmodule_appelement_parentappmoduleid` | [appmodule](appmodule.md) | `parentappmoduleid` | `parentappmoduleid` |
| `mcpserver_appelement_objectid` | [mcpserver](mcpserver.md) | `objectid` | `objectid` |
| `canvasapp_appelement_canvasappid` | [canvasapp](canvasapp.md) | `canvasappid` | `canvasappid` |
| `bot_appelement_objectid` | [bot](bot.md) | `objectid` | `objectid` |
| `aiskillconfig_appelement_objectid` | [aiskillconfig](aiskillconfig.md) | `objectid` | `objectid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appelement_SyncErrors` | [appelement](appelement.md) | `regardingobjectid` | `regardingobjectid_appelement` |
| `appelement_AsyncOperations` | [appelement](appelement.md) | `regardingobjectid` | `regardingobjectid_appelement` |
| `appelement_MailboxTrackingFolders` | [appelement](appelement.md) | `regardingobjectid` | `regardingobjectid_appelement` |
| `appelement_UserEntityInstanceDatas` | [appelement](appelement.md) | `objectid` | `objectid_appelement` |
| `appelement_ProcessSession` | [appelement](appelement.md) | `regardingobjectid` | `regardingobjectid_appelement` |
| `appelement_BulkDeleteFailures` | [appelement](appelement.md) | `regardingobjectid` | `regardingobjectid_appelement` |
| `appelement_PrincipalObjectAttributeAccesses` | [appelement](appelement.md) | `objectid` | `objectid_appelement` |


## Source

Generated from [appelement (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appelement')) on 2026-05-07.