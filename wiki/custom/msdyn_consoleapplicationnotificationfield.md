---
logical: "msdyn_consoleapplicationnotificationfield"
display: "Campo di notifica (deprecato)"
entitySetName: "msdyn_consoleapplicationnotificationfields"
primaryId: "msdyn_consoleapplicationnotificationfieldid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Campo di notifica (deprecato)

Definisce un campo (chiave, templateValue) che deve essere popolato nel corpo della notifica.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_consoleapplicationnotificationfield` |
| Display name | Campo di notifica (deprecato) |
| Display (plural) | Campi di notifica (deprecato) |
| Schema name | `msdyn_consoleapplicationnotificationfield` |
| Entity set (Web API) | `msdyn_consoleapplicationnotificationfields` |
| Primary id attribute | `msdyn_consoleapplicationnotificationfieldid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_consoleapplicationnotificationfields?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_consoleapplicationnotificationfields(<guid>)
POST /api/data/v9.2/msdyn_consoleapplicationnotificationfields
PATCH /api/data/v9.2/msdyn_consoleapplicationnotificationfields(<guid>)
DELETE /api/data/v9.2/msdyn_consoleapplicationnotificationfields(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_consoleapplicationnotificationfieldid`, `msdyn_lineheader`, `msdyn_name`, `msdyn_priority`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_consoleapplicationnotificationfield_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_consoleapplicationnotificationfield_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_consoleapplicationnotificationfield_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_consoleapplicationnotificationfield_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_consoleapplicationnotificationfield` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_consoleapplicationnotificationfield` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_consoleapplicationnotificationfield` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_consoleapplicationnotificationfield` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_consoleapplicationnotificationfield_SyncErrors` | [msdyn_consoleapplicationnotificationfield](msdyn_consoleapplicationnotificationfield.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationnotificationfield` |
| `msdyn_consoleapplicationnotificationfield_DuplicateMatchingRecord` | [msdyn_consoleapplicationnotificationfield](msdyn_consoleapplicationnotificationfield.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_consoleapplicationnotificationfield` |
| `msdyn_consoleapplicationnotificationfield_DuplicateBaseRecord` | [msdyn_consoleapplicationnotificationfield](msdyn_consoleapplicationnotificationfield.md) | `baserecordid` | `baserecordid_msdyn_consoleapplicationnotificationfield` |
| `msdyn_consoleapplicationnotificationfield_AsyncOperations` | [msdyn_consoleapplicationnotificationfield](msdyn_consoleapplicationnotificationfield.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationnotificationfield` |
| `msdyn_consoleapplicationnotificationfield_MailboxTrackingFolders` | [msdyn_consoleapplicationnotificationfield](msdyn_consoleapplicationnotificationfield.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationnotificationfield` |
| `msdyn_consoleapplicationnotificationfield_UserEntityInstanceDatas` | [msdyn_consoleapplicationnotificationfield](msdyn_consoleapplicationnotificationfield.md) | `objectid` | `objectid_msdyn_consoleapplicationnotificationfield` |
| `msdyn_consoleapplicationnotificationfield_ProcessSession` | [msdyn_consoleapplicationnotificationfield](msdyn_consoleapplicationnotificationfield.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationnotificationfield` |
| `msdyn_consoleapplicationnotificationfield_BulkDeleteFailures` | [msdyn_consoleapplicationnotificationfield](msdyn_consoleapplicationnotificationfield.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationnotificationfield` |
| `msdyn_consoleapplicationnotificationfield_PrincipalObjectAttributeAccesses` | [msdyn_consoleapplicationnotificationfield](msdyn_consoleapplicationnotificationfield.md) | `objectid` | `objectid_msdyn_consoleapplicationnotificationfield` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationnotificationtempl` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationnotificationtempl` |

## Source

Generated from [msdyn_consoleapplicationnotificationfield (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_consoleapplicationnotificationfield')) on 2026-05-07.