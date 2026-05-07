---
logical: "msdyn_leademailextension"
display: "Estensione email lead"
entitySetName: "msdyn_leademailextensions"
primaryId: "msdyn_leademailextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Estensione email lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leademailextension` |
| Display name | Estensione email lead |
| Display (plural) | Estensioni email lead |
| Schema name | `msdyn_leademailextension` |
| Entity set (Web API) | `msdyn_leademailextensions` |
| Primary id attribute | `msdyn_leademailextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leademailextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leademailextensions(<guid>)
POST /api/data/v9.2/msdyn_leademailextensions
PATCH /api/data/v9.2/msdyn_leademailextensions(<guid>)
DELETE /api/data/v9.2/msdyn_leademailextensions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_emailcategory`, `msdyn_emailvalidationreason`, `msdyn_emailvalidationstatus`, `msdyn_leademailextensionid`, `msdyn_leadid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_leademailextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leademailextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leademailextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leademailextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_leademailextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_leademailextension` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_leademailextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_leademailextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_leademailextension_leadid_lead` | [lead](lead.md) | `msdyn_leadid` | `msdyn_leadid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leademailextension_SyncErrors` | [msdyn_leademailextension](msdyn_leademailextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_leademailextension` |
| `msdyn_leademailextension_DuplicateMatchingRecord` | [msdyn_leademailextension](msdyn_leademailextension.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_leademailextension` |
| `msdyn_leademailextension_DuplicateBaseRecord` | [msdyn_leademailextension](msdyn_leademailextension.md) | `baserecordid` | `baserecordid_msdyn_leademailextension` |
| `msdyn_leademailextension_AsyncOperations` | [msdyn_leademailextension](msdyn_leademailextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_leademailextension` |
| `msdyn_leademailextension_MailboxTrackingFolders` | [msdyn_leademailextension](msdyn_leademailextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_leademailextension` |
| `msdyn_leademailextension_UserEntityInstanceDatas` | [msdyn_leademailextension](msdyn_leademailextension.md) | `objectid` | `objectid_msdyn_leademailextension` |
| `msdyn_leademailextension_ProcessSession` | [msdyn_leademailextension](msdyn_leademailextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_leademailextension` |
| `msdyn_leademailextension_BulkDeleteFailures` | [msdyn_leademailextension](msdyn_leademailextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_leademailextension` |
| `msdyn_leademailextension_PrincipalObjectAttributeAccesses` | [msdyn_leademailextension](msdyn_leademailextension.md) | `objectid` | `objectid_msdyn_leademailextension` |


## Source

Generated from [msdyn_leademailextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_leademailextension')) on 2026-05-07.