---
logical: "msdyn_notificationfield"
display: "Campo di notifica"
entitySetName: "msdyn_notificationfields"
primaryId: "msdyn_notificationfieldid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Campo di notifica

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_notificationfield` |
| Display name | Campo di notifica |
| Display (plural) | Campi di notifica |
| Schema name | `msdyn_notificationfield` |
| Entity set (Web API) | `msdyn_notificationfields` |
| Primary id attribute | `msdyn_notificationfieldid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_notificationfields?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_notificationfields(<guid>)
POST /api/data/v9.2/msdyn_notificationfields
PATCH /api/data/v9.2/msdyn_notificationfields(<guid>)
DELETE /api/data/v9.2/msdyn_notificationfields(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_notificationfieldid`, `msdyn_order`, `msdyn_title`, `msdyn_uniquename`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_notificationfield_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_notificationfield_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_notificationfield_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_notificationfield_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_notificationfield` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_notificationfield` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_notificationfield` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_notificationfield` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notificationfield_SyncErrors` | [msdyn_notificationfield](msdyn_notificationfield.md) | `regardingobjectid` | `regardingobjectid_msdyn_notificationfield` |
| `msdyn_notificationfield_DuplicateMatchingRecord` | [msdyn_notificationfield](msdyn_notificationfield.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_notificationfield` |
| `msdyn_notificationfield_DuplicateBaseRecord` | [msdyn_notificationfield](msdyn_notificationfield.md) | `baserecordid` | `baserecordid_msdyn_notificationfield` |
| `msdyn_notificationfield_AsyncOperations` | [msdyn_notificationfield](msdyn_notificationfield.md) | `regardingobjectid` | `regardingobjectid_msdyn_notificationfield` |
| `msdyn_notificationfield_MailboxTrackingFolders` | [msdyn_notificationfield](msdyn_notificationfield.md) | `regardingobjectid` | `regardingobjectid_msdyn_notificationfield` |
| `msdyn_notificationfield_UserEntityInstanceDatas` | [msdyn_notificationfield](msdyn_notificationfield.md) | `objectid` | `objectid_msdyn_notificationfield` |
| `msdyn_notificationfield_ProcessSession` | [msdyn_notificationfield](msdyn_notificationfield.md) | `regardingobjectid` | `regardingobjectid_msdyn_notificationfield` |
| `msdyn_notificationfield_BulkDeleteFailures` | [msdyn_notificationfield](msdyn_notificationfield.md) | `regardingobjectid` | `regardingobjectid_msdyn_notificationfield` |
| `msdyn_notificationfield_PrincipalObjectAttributeAccesses` | [msdyn_notificationfield](msdyn_notificationfield.md) | `objectid` | `objectid_msdyn_notificationfield` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notificationtemplate_notificationfield` | [msdyn_notificationtemplate](msdyn_notificationtemplate.md) | _n/a_ | `msdyn_notificationtemplate_notificationfield` |

## Source

Generated from [msdyn_notificationfield (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_notificationfield')) on 2026-05-07.