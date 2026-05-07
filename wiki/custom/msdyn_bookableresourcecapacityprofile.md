---
logical: "msdyn_bookableresourcecapacityprofile"
display: "Profilo capacità risorsa prenotabile"
entitySetName: "msdyn_bookableresourcecapacityprofiles"
primaryId: "msdyn_bookableresourcecapacityprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Profilo capacità risorsa prenotabile

Profilo capacità risorsa prenotabile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bookableresourcecapacityprofile` |
| Display name | Profilo capacità risorsa prenotabile |
| Display (plural) | Profili capacità risorsa prenotabile |
| Schema name | `msdyn_bookableresourcecapacityprofile` |
| Entity set (Web API) | `msdyn_bookableresourcecapacityprofiles` |
| Primary id attribute | `msdyn_bookableresourcecapacityprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bookableresourcecapacityprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_bookableresourcecapacityprofiles(<guid>)
POST /api/data/v9.2/msdyn_bookableresourcecapacityprofiles
PATCH /api/data/v9.2/msdyn_bookableresourcecapacityprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_bookableresourcecapacityprofiles(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bookableresourcecapacityprofileid`, `msdyn_bookableresourceid`, `msdyn_capacityprofileid`, `msdyn_maxunits`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_bookableresourcecapacityprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bookableresourcecapacityprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bookableresourcecapacityprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bookableresourcecapacityprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_bookableresourcecapacityprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_bookableresourcecapacityprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_bookableresourcecapacityprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_bookableresourcecapacityprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_bookableresource_msdyn_bookableresourcecapacityprofile` | [bookableresource](bookableresource.md) | `msdyn_bookableresourceid` | `msdyn_bookableresourceid` |
| `msdyn_capacityprofile_msdyn_bookableresourcecapacityprofile` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookableresourcecapacityprofile_SyncErrors` | [msdyn_bookableresourcecapacityprofile](msdyn_bookableresourcecapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookableresourcecapacityprofile` |
| `msdyn_bookableresourcecapacityprofile_DuplicateMatchingRecord` | [msdyn_bookableresourcecapacityprofile](msdyn_bookableresourcecapacityprofile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_bookableresourcecapacityprofile` |
| `msdyn_bookableresourcecapacityprofile_DuplicateBaseRecord` | [msdyn_bookableresourcecapacityprofile](msdyn_bookableresourcecapacityprofile.md) | `baserecordid` | `baserecordid_msdyn_bookableresourcecapacityprofile` |
| `msdyn_bookableresourcecapacityprofile_AsyncOperations` | [msdyn_bookableresourcecapacityprofile](msdyn_bookableresourcecapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookableresourcecapacityprofile` |
| `msdyn_bookableresourcecapacityprofile_MailboxTrackingFolders` | [msdyn_bookableresourcecapacityprofile](msdyn_bookableresourcecapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookableresourcecapacityprofile` |
| `msdyn_bookableresourcecapacityprofile_UserEntityInstanceDatas` | [msdyn_bookableresourcecapacityprofile](msdyn_bookableresourcecapacityprofile.md) | `objectid` | `objectid_msdyn_bookableresourcecapacityprofile` |
| `msdyn_bookableresourcecapacityprofile_ProcessSession` | [msdyn_bookableresourcecapacityprofile](msdyn_bookableresourcecapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookableresourcecapacityprofile` |
| `msdyn_bookableresourcecapacityprofile_BulkDeleteFailures` | [msdyn_bookableresourcecapacityprofile](msdyn_bookableresourcecapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookableresourcecapacityprofile` |
| `msdyn_bookableresourcecapacityprofile_PrincipalObjectAttributeAccesses` | [msdyn_bookableresourcecapacityprofile](msdyn_bookableresourcecapacityprofile.md) | `objectid` | `objectid_msdyn_bookableresourcecapacityprofile` |


## Source

Generated from [msdyn_bookableresourcecapacityprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_bookableresourcecapacityprofile')) on 2026-05-07.