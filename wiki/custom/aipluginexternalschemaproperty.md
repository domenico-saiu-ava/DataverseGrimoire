---
logical: "aipluginexternalschemaproperty"
display: "AIPluginExternalSchemaProperty"
entitySetName: "aipluginexternalschemaproperties"
primaryId: "aipluginexternalschemapropertyid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AIPluginExternalSchemaProperty

AIPluginExternalSchemaProperties component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginexternalschemaproperty` |
| Display name | AIPluginExternalSchemaProperty |
| Display (plural) | AIPluginExternalSchemaProperties |
| Schema name | `AIPluginExternalSchemaProperty` |
| Entity set (Web API) | `aipluginexternalschemaproperties` |
| Primary id attribute | `aipluginexternalschemapropertyid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginexternalschemaproperties?$select=name&$top=10
GET /api/data/v9.2/aipluginexternalschemaproperties(<guid>)
POST /api/data/v9.2/aipluginexternalschemaproperties
PATCH /api/data/v9.2/aipluginexternalschemaproperties(<guid>)
DELETE /api/data/v9.2/aipluginexternalschemaproperties(<guid>)
```

## Attributes

Writable: **10** · Read-only: **16**

### Writable

`aipluginexternalschemapropertyid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aipluginexternalschemaproperty_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginexternalschemaproperty_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginexternalschemaproperty_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginexternalschemaproperty_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aipluginexternalschemaproperty` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aipluginexternalschemaproperty` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aipluginexternalschemaproperty` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aipluginexternalschemaproperty` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginexternalschemaproperty_SyncErrors` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschemaproperty` |
| `aipluginexternalschemaproperty_AsyncOperations` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschemaproperty` |
| `aipluginexternalschemaproperty_MailboxTrackingFolders` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschemaproperty` |
| `aipluginexternalschemaproperty_UserEntityInstanceDatas` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `objectid` | `objectid_aipluginexternalschemaproperty` |
| `aipluginexternalschemaproperty_ProcessSession` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschemaproperty` |
| `aipluginexternalschemaproperty_BulkDeleteFailures` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschemaproperty` |
| `aipluginexternalschemaproperty_PrincipalObjectAttributeAccesses` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `objectid` | `objectid_aipluginexternalschemaproperty` |


## Source

Generated from [aipluginexternalschemaproperty (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aipluginexternalschemaproperty')) on 2026-05-07.