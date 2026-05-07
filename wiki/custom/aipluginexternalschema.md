---
logical: "aipluginexternalschema"
display: "AIPluginExternalSchema"
entitySetName: "aipluginexternalschemas"
primaryId: "aipluginexternalschemaid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AIPluginExternalSchema

AIPluginExternalSchemas component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginexternalschema` |
| Display name | AIPluginExternalSchema |
| Display (plural) | AIPluginExternalSchemas |
| Schema name | `AIPluginExternalSchema` |
| Entity set (Web API) | `aipluginexternalschemas` |
| Primary id attribute | `aipluginexternalschemaid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginexternalschemas?$select=name&$top=10
GET /api/data/v9.2/aipluginexternalschemas(<guid>)
POST /api/data/v9.2/aipluginexternalschemas
PATCH /api/data/v9.2/aipluginexternalschemas(<guid>)
DELETE /api/data/v9.2/aipluginexternalschemas(<guid>)
```

## Attributes

Writable: **10** · Read-only: **16**

### Writable

`aipluginexternalschemaid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aipluginexternalschema_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginexternalschema_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginexternalschema_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginexternalschema_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aipluginexternalschema` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aipluginexternalschema` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aipluginexternalschema` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aipluginexternalschema` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginexternalschema_SyncErrors` | [aipluginexternalschema](aipluginexternalschema.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschema` |
| `aipluginexternalschema_AsyncOperations` | [aipluginexternalschema](aipluginexternalschema.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschema` |
| `aipluginexternalschema_MailboxTrackingFolders` | [aipluginexternalschema](aipluginexternalschema.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschema` |
| `aipluginexternalschema_UserEntityInstanceDatas` | [aipluginexternalschema](aipluginexternalschema.md) | `objectid` | `objectid_aipluginexternalschema` |
| `aipluginexternalschema_ProcessSession` | [aipluginexternalschema](aipluginexternalschema.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschema` |
| `aipluginexternalschema_BulkDeleteFailures` | [aipluginexternalschema](aipluginexternalschema.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschema` |
| `aipluginexternalschema_PrincipalObjectAttributeAccesses` | [aipluginexternalschema](aipluginexternalschema.md) | `objectid` | `objectid_aipluginexternalschema` |


## Source

Generated from [aipluginexternalschema (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aipluginexternalschema')) on 2026-05-07.