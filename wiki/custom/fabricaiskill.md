---
logical: "fabricaiskill"
display: "Competenza IA Fabric"
entitySetName: "fabricaiskills"
primaryId: "fabricaiskillid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Competenza IA Fabric

Competenze IA pubblicate da Fabric.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `fabricaiskill` |
| Display name | Competenza IA Fabric |
| Display (plural) | Competenza IA Fabric |
| Schema name | `fabricaiskill` |
| Entity set (Web API) | `fabricaiskills` |
| Primary id attribute | `fabricaiskillid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/fabricaiskills?$select=name&$top=10
GET /api/data/v9.2/fabricaiskills(<guid>)
POST /api/data/v9.2/fabricaiskills
PATCH /api/data/v9.2/fabricaiskills(<guid>)
DELETE /api/data/v9.2/fabricaiskills(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`aipluginoperationid`, `context`, `customapiid`, `description`, `fabricaiskillid`, `importsequencenumber`, `iscustomizable`, `keywords`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uri`, `utcconversiontimezonecode`, `workspaceid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_fabricaiskill_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_fabricaiskill_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_fabricaiskill_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_fabricaiskill_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_fabricaiskill` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_fabricaiskill` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_fabricaiskill` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_fabricaiskill` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `fabricaiskill_customapiid` | [customapi](customapi.md) | `customapiid` | `CustomApiId` |
| `fabricaiskill_aipluginoperationid` | [aipluginoperation](aipluginoperation.md) | `aipluginoperationid` | `aipluginoperationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `fabricaiskill_SyncErrors` | [fabricaiskill](fabricaiskill.md) | `regardingobjectid` | `regardingobjectid_fabricaiskill` |
| `fabricaiskill_AsyncOperations` | [fabricaiskill](fabricaiskill.md) | `regardingobjectid` | `regardingobjectid_fabricaiskill` |
| `fabricaiskill_MailboxTrackingFolders` | [fabricaiskill](fabricaiskill.md) | `regardingobjectid` | `regardingobjectid_fabricaiskill` |
| `fabricaiskill_UserEntityInstanceDatas` | [fabricaiskill](fabricaiskill.md) | `objectid` | `objectid_fabricaiskill` |
| `fabricaiskill_ProcessSession` | [fabricaiskill](fabricaiskill.md) | `regardingobjectid` | `regardingobjectid_fabricaiskill` |
| `fabricaiskill_BulkDeleteFailures` | [fabricaiskill](fabricaiskill.md) | `regardingobjectid` | `regardingobjectid_fabricaiskill` |
| `fabricaiskill_PrincipalObjectAttributeAccesses` | [fabricaiskill](fabricaiskill.md) | `objectid` | `objectid_fabricaiskill` |


## Source

Generated from [fabricaiskill (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='fabricaiskill')) on 2026-05-07.