---
logical: "uxagentcomponent"
display: "Componente agente UX"
entitySetName: "uxagentcomponents"
primaryId: "uxagentcomponentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Componente agente UX

## Identity

| Property | Value |
| --- | --- |
| Logical name | `uxagentcomponent` |
| Display name | Componente agente UX |
| Display (plural) | Componenti agente UX |
| Schema name | `uxagentcomponent` |
| Entity set (Web API) | `uxagentcomponents` |
| Primary id attribute | `uxagentcomponentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/uxagentcomponents?$select=name&$top=10
GET /api/data/v9.2/uxagentcomponents(<guid>)
POST /api/data/v9.2/uxagentcomponents
PATCH /api/data/v9.2/uxagentcomponents(<guid>)
DELETE /api/data/v9.2/uxagentcomponents(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`activerevisionid`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `publishedrevisionid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `uxagentcomponentid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `uxagentcomponentrevision_uxagentcomponent_ActiveRevisionId` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `activerevisionid` | `ActiveRevisionId` |
| `lk_uxagentcomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_uxagentcomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_uxagentcomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_uxagentcomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_uxagentcomponent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_uxagentcomponent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_uxagentcomponent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_uxagentcomponent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `uxagentcomponentrevision_uxagentcomponent_PublishedRevisionId` | [uxagentcomponentrevision](uxagentcomponentrevision.md) | `publishedrevisionid` | `PublishedRevisionId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `uxagentcomponent_uxagentcomponentrevision_ComponentId` | [uxagentcomponent](uxagentcomponent.md) | `componentid` | `ComponentId` |
| `uxagentcomponent_SyncErrors` | [uxagentcomponent](uxagentcomponent.md) | `regardingobjectid` | `regardingobjectid_uxagentcomponent` |
| `uxagentcomponent_AsyncOperations` | [uxagentcomponent](uxagentcomponent.md) | `regardingobjectid` | `regardingobjectid_uxagentcomponent` |
| `uxagentcomponent_MailboxTrackingFolders` | [uxagentcomponent](uxagentcomponent.md) | `regardingobjectid` | `regardingobjectid_uxagentcomponent` |
| `uxagentcomponent_UserEntityInstanceDatas` | [uxagentcomponent](uxagentcomponent.md) | `objectid` | `objectid_uxagentcomponent` |
| `uxagentcomponent_ProcessSession` | [uxagentcomponent](uxagentcomponent.md) | `regardingobjectid` | `regardingobjectid_uxagentcomponent` |
| `uxagentcomponent_BulkDeleteFailures` | [uxagentcomponent](uxagentcomponent.md) | `regardingobjectid` | `regardingobjectid_uxagentcomponent` |
| `uxagentcomponent_PrincipalObjectAttributeAccesses` | [uxagentcomponent](uxagentcomponent.md) | `objectid` | `objectid_uxagentcomponent` |


## Source

Generated from [uxagentcomponent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='uxagentcomponent')) on 2026-05-07.