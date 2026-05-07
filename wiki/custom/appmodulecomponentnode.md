---
logical: "appmodulecomponentnode"
display: "Nodo del componente dell'app basata su modello"
entitySetName: "appmodulecomponentnodes"
primaryId: "appmodulecomponentnodeid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Nodo del componente dell'app basata su modello

Contiene informazioni sul nodo del componente dell'app basata su modello

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appmodulecomponentnode` |
| Display name | Nodo del componente dell'app basata su modello |
| Display (plural) | Nodi del componente dell'app basata su modello |
| Schema name | `AppModuleComponentNode` |
| Entity set (Web API) | `appmodulecomponentnodes` |
| Primary id attribute | `appmodulecomponentnodeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appmodulecomponentnodes?$select=name&$top=10
GET /api/data/v9.2/appmodulecomponentnodes(<guid>)
POST /api/data/v9.2/appmodulecomponentnodes
PATCH /api/data/v9.2/appmodulecomponentnodes(<guid>)
DELETE /api/data/v9.2/appmodulecomponentnodes(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`appmodulecomponentnodeid`, `componentdatabaseversion`, `componentobjectid`, `componenttype`, `importsequencenumber`, `name`, `overriddencreatedon`, `snapshotversionnumber`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `validationresult`, `validationstatus`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appmodulecomponentnode_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appmodulecomponentnode_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appmodulecomponentnode_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appmodulecomponentnode_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appmodulecomponentnode` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appmodulecomponentnode_SyncErrors` | [appmodulecomponentnode](appmodulecomponentnode.md) | `regardingobjectid` | `regardingobjectid_appmodulecomponentnode` |
| `appmodulecomponentnode_AsyncOperations` | [appmodulecomponentnode](appmodulecomponentnode.md) | `regardingobjectid` | `regardingobjectid_appmodulecomponentnode` |
| `appmodulecomponentnode_MailboxTrackingFolders` | [appmodulecomponentnode](appmodulecomponentnode.md) | `regardingobjectid` | `regardingobjectid_appmodulecomponentnode` |
| `appmodulecomponentnode_UserEntityInstanceDatas` | [appmodulecomponentnode](appmodulecomponentnode.md) | `objectid` | `objectid_appmodulecomponentnode` |
| `appmodulecomponentnode_ProcessSession` | [appmodulecomponentnode](appmodulecomponentnode.md) | `regardingobjectid` | `regardingobjectid_appmodulecomponentnode` |
| `appmodulecomponentnode_BulkDeleteFailures` | [appmodulecomponentnode](appmodulecomponentnode.md) | `regardingobjectid` | `regardingobjectid_appmodulecomponentnode` |
| `appmodulecomponentnode_PrincipalObjectAttributeAccesses` | [appmodulecomponentnode](appmodulecomponentnode.md) | `objectid` | `objectid_appmodulecomponentnode` |
| `appmodulecomponentnode_appmodulecomponentedge_ComponentNodeFrom` | [appmodulecomponentnode](appmodulecomponentnode.md) | `componentnodefrom` | `ComponentNodeFrom` |
| `appmodulecomponentnode_appmodulecomponentedge_ComponentNodeTo` | [appmodulecomponentnode](appmodulecomponentnode.md) | `componentnodeto` | `ComponentNodeTo` |


## Source

Generated from [appmodulecomponentnode (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appmodulecomponentnode')) on 2026-05-07.