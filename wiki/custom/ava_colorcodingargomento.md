---
logical: "ava_colorcodingargomento"
display: "Color Coding Argomento"
entitySetName: "ava_colorcodingargomentos"
primaryId: "ava_colorcodingargomentoid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Color Coding Argomento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_colorcodingargomento` |
| Display name | Color Coding Argomento |
| Display (plural) | Color Coding Argomento |
| Schema name | `ava_ColorCodingArgomento` |
| Entity set (Web API) | `ava_colorcodingargomentos` |
| Primary id attribute | `ava_colorcodingargomentoid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_colorcodingargomentos?$select=ava_name&$top=10
GET /api/data/v9.2/ava_colorcodingargomentos(<guid>)
POST /api/data/v9.2/ava_colorcodingargomentos
PATCH /api/data/v9.2/ava_colorcodingargomentos(<guid>)
DELETE /api/data/v9.2/ava_colorcodingargomentos(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`ava_argomento`, `ava_codice`, `ava_colorcodingargomentoid`, `ava_colore`, `ava_name`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_colorcodingargomento_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_colorcodingargomento_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_colorcodingargomento_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_colorcodingargomento_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_colorcodingargomento` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_colorcodingargomento` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_colorcodingargomento` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_colorcodingargomento` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_colorcodingargomento_SyncErrors` | [ava_colorcodingargomento](ava_colorcodingargomento.md) | `regardingobjectid` | `regardingobjectid_ava_colorcodingargomento` |
| `ava_colorcodingargomento_DuplicateMatchingRecord` | [ava_colorcodingargomento](ava_colorcodingargomento.md) | `duplicaterecordid` | `duplicaterecordid_ava_colorcodingargomento` |
| `ava_colorcodingargomento_DuplicateBaseRecord` | [ava_colorcodingargomento](ava_colorcodingargomento.md) | `baserecordid` | `baserecordid_ava_colorcodingargomento` |
| `ava_colorcodingargomento_AsyncOperations` | [ava_colorcodingargomento](ava_colorcodingargomento.md) | `regardingobjectid` | `regardingobjectid_ava_colorcodingargomento` |
| `ava_colorcodingargomento_MailboxTrackingFolders` | [ava_colorcodingargomento](ava_colorcodingargomento.md) | `regardingobjectid` | `regardingobjectid_ava_colorcodingargomento` |
| `ava_colorcodingargomento_UserEntityInstanceDatas` | [ava_colorcodingargomento](ava_colorcodingargomento.md) | `objectid` | `objectid_ava_colorcodingargomento` |
| `ava_colorcodingargomento_ProcessSession` | [ava_colorcodingargomento](ava_colorcodingargomento.md) | `regardingobjectid` | `regardingobjectid_ava_colorcodingargomento` |
| `ava_colorcodingargomento_BulkDeleteFailures` | [ava_colorcodingargomento](ava_colorcodingargomento.md) | `regardingobjectid` | `regardingobjectid_ava_colorcodingargomento` |
| `ava_colorcodingargomento_PrincipalObjectAttributeAccesses` | [ava_colorcodingargomento](ava_colorcodingargomento.md) | `objectid` | `objectid_ava_colorcodingargomento` |


## Source

Generated from [ava_colorcodingargomento (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_colorcodingargomento')) on 2026-05-07.