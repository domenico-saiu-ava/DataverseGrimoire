---
logical: "msdyn_ocrichobjectmap"
display: "Mapping messaggi RTF"
entitySetName: "msdyn_ocrichobjectmaps"
primaryId: "msdyn_ocrichobjectmapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping messaggi RTF

Mapping di messaggi RTF per l'integrazione di Multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocrichobjectmap` |
| Display name | Mapping messaggi RTF |
| Display (plural) | Mapping messaggi RTF |
| Schema name | `msdyn_ocrichobjectmap` |
| Entity set (Web API) | `msdyn_ocrichobjectmaps` |
| Primary id attribute | `msdyn_ocrichobjectmapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocrichobjectmaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocrichobjectmaps(<guid>)
POST /api/data/v9.2/msdyn_ocrichobjectmaps
PATCH /api/data/v9.2/msdyn_ocrichobjectmaps(<guid>)
DELETE /api/data/v9.2/msdyn_ocrichobjectmaps(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_authsettingsmapid`, `msdyn_name`, `msdyn_ocmappedrichobjid`, `msdyn_ocpaymentprofileid`, `msdyn_ocrichobjectmapid`, `msdyn_ocrichobjid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_authenticationsettings_msdyn_ocrichobjectmap` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `msdyn_authsettingsmapid` | `msdyn_authsettingsmapid` |
| `msdyn_ocrichobject_msdyn_ocrichobjectmap` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `msdyn_ocmappedrichobjid` | `msdyn_ocmappedrichobjid` |
| `msdyn_msdyn_ocpaymentprofile_msdyn_ocrichobjectmap_ocpaymentprofileid` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `msdyn_ocpaymentprofileid` | `msdyn_ocpaymentprofileid` |
| `lk_msdyn_ocrichobjectmap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocrichobjectmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocrichobjectmap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocrichobjectmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocrichobjectmap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocrichobjectmap` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocrichobjectmap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocrichobjectmap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocrichobjectmap_SyncErrors` | [msdyn_ocrichobjectmap](msdyn_ocrichobjectmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrichobjectmap` |
| `msdyn_ocrichobjectmap_DuplicateMatchingRecord` | [msdyn_ocrichobjectmap](msdyn_ocrichobjectmap.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocrichobjectmap` |
| `msdyn_ocrichobjectmap_DuplicateBaseRecord` | [msdyn_ocrichobjectmap](msdyn_ocrichobjectmap.md) | `baserecordid` | `baserecordid_msdyn_ocrichobjectmap` |
| `msdyn_ocrichobjectmap_AsyncOperations` | [msdyn_ocrichobjectmap](msdyn_ocrichobjectmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrichobjectmap` |
| `msdyn_ocrichobjectmap_MailboxTrackingFolders` | [msdyn_ocrichobjectmap](msdyn_ocrichobjectmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrichobjectmap` |
| `msdyn_ocrichobjectmap_UserEntityInstanceDatas` | [msdyn_ocrichobjectmap](msdyn_ocrichobjectmap.md) | `objectid` | `objectid_msdyn_ocrichobjectmap` |
| `msdyn_ocrichobjectmap_ProcessSession` | [msdyn_ocrichobjectmap](msdyn_ocrichobjectmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrichobjectmap` |
| `msdyn_ocrichobjectmap_BulkDeleteFailures` | [msdyn_ocrichobjectmap](msdyn_ocrichobjectmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrichobjectmap` |
| `msdyn_ocrichobjectmap_PrincipalObjectAttributeAccesses` | [msdyn_ocrichobjectmap](msdyn_ocrichobjectmap.md) | `objectid` | `objectid_msdyn_ocrichobjectmap` |


## Source

Generated from [msdyn_ocrichobjectmap (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocrichobjectmap')) on 2026-05-07.