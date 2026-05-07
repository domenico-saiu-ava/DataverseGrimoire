---
logical: "msdyn_applicationextension"
display: "Estensione applicazione"
entitySetName: "msdyn_applicationextensions"
primaryId: "msdyn_applicationextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Estensione applicazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_applicationextension` |
| Display name | Estensione applicazione |
| Display (plural) | Estensioni applicazione |
| Schema name | `msdyn_applicationextension` |
| Entity set (Web API) | `msdyn_applicationextensions` |
| Primary id attribute | `msdyn_applicationextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_applicationextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_applicationextensions(<guid>)
POST /api/data/v9.2/msdyn_applicationextensions
PATCH /api/data/v9.2/msdyn_applicationextensions(<guid>)
DELETE /api/data/v9.2/msdyn_applicationextensions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_appconfig_relationshipname`, `msdyn_applicationextensionid`, `msdyn_name`, `msdyn_relationship_cardinality`, `msdyn_type`, `msdyn_uniquename`, `msdyn_webresource_url`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_applicationextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_applicationextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_applicationextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_applicationextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_applicationextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_applicationextension` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_applicationextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_applicationextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_applicationextension_SyncErrors` | [msdyn_applicationextension](msdyn_applicationextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_applicationextension` |
| `msdyn_applicationextension_DuplicateMatchingRecord` | [msdyn_applicationextension](msdyn_applicationextension.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_applicationextension` |
| `msdyn_applicationextension_DuplicateBaseRecord` | [msdyn_applicationextension](msdyn_applicationextension.md) | `baserecordid` | `baserecordid_msdyn_applicationextension` |
| `msdyn_applicationextension_AsyncOperations` | [msdyn_applicationextension](msdyn_applicationextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_applicationextension` |
| `msdyn_applicationextension_MailboxTrackingFolders` | [msdyn_applicationextension](msdyn_applicationextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_applicationextension` |
| `msdyn_applicationextension_UserEntityInstanceDatas` | [msdyn_applicationextension](msdyn_applicationextension.md) | `objectid` | `objectid_msdyn_applicationextension` |
| `msdyn_applicationextension_ProcessSession` | [msdyn_applicationextension](msdyn_applicationextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_applicationextension` |
| `msdyn_applicationextension_BulkDeleteFailures` | [msdyn_applicationextension](msdyn_applicationextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_applicationextension` |
| `msdyn_applicationextension_PrincipalObjectAttributeAccesses` | [msdyn_applicationextension](msdyn_applicationextension.md) | `objectid` | `objectid_msdyn_applicationextension` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfiguration_applicationextension` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | _n/a_ | `msdyn_appconfiguration_applicationextension` |

## Source

Generated from [msdyn_applicationextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_applicationextension')) on 2026-05-07.