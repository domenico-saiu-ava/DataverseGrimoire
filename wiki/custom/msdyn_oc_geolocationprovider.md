---
logical: "msdyn_oc_geolocationprovider"
display: "Provider di georilevazione"
entitySetName: "msdyn_oc_geolocationproviders"
primaryId: "msdyn_oc_geolocationproviderid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Provider di georilevazione

Provider di georilevazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_oc_geolocationprovider` |
| Display name | Provider di georilevazione |
| Display (plural) | Provider di georilevazione |
| Schema name | `msdyn_oc_geolocationprovider` |
| Entity set (Web API) | `msdyn_oc_geolocationproviders` |
| Primary id attribute | `msdyn_oc_geolocationproviderid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_oc_geolocationproviders?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_oc_geolocationproviders(<guid>)
POST /api/data/v9.2/msdyn_oc_geolocationproviders
PATCH /api/data/v9.2/msdyn_oc_geolocationproviders(<guid>)
DELETE /api/data/v9.2/msdyn_oc_geolocationproviders(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_oc_geolocationproviderid`, `msdyn_providerapikey`, `msdyn_providerapikeyversion`, `msdyn_providername`, `msdyn_secureproviderapikey`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_oc_geolocationprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_oc_geolocationprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_oc_geolocationprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_oc_geolocationprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_oc_geolocationprovider` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_oc_geolocationprovider` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_oc_geolocationprovider` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_oc_geolocationprovider` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_oc_geolocationprovider_SyncErrors` | [msdyn_oc_geolocationprovider](msdyn_oc_geolocationprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_oc_geolocationprovider` |
| `msdyn_oc_geolocationprovider_DuplicateMatchingRecord` | [msdyn_oc_geolocationprovider](msdyn_oc_geolocationprovider.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_oc_geolocationprovider` |
| `msdyn_oc_geolocationprovider_DuplicateBaseRecord` | [msdyn_oc_geolocationprovider](msdyn_oc_geolocationprovider.md) | `baserecordid` | `baserecordid_msdyn_oc_geolocationprovider` |
| `msdyn_oc_geolocationprovider_AsyncOperations` | [msdyn_oc_geolocationprovider](msdyn_oc_geolocationprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_oc_geolocationprovider` |
| `msdyn_oc_geolocationprovider_MailboxTrackingFolders` | [msdyn_oc_geolocationprovider](msdyn_oc_geolocationprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_oc_geolocationprovider` |
| `msdyn_oc_geolocationprovider_UserEntityInstanceDatas` | [msdyn_oc_geolocationprovider](msdyn_oc_geolocationprovider.md) | `objectid` | `objectid_msdyn_oc_geolocationprovider` |
| `msdyn_oc_geolocationprovider_ProcessSession` | [msdyn_oc_geolocationprovider](msdyn_oc_geolocationprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_oc_geolocationprovider` |
| `msdyn_oc_geolocationprovider_BulkDeleteFailures` | [msdyn_oc_geolocationprovider](msdyn_oc_geolocationprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_oc_geolocationprovider` |
| `msdyn_oc_geolocationprovider_PrincipalObjectAttributeAccesses` | [msdyn_oc_geolocationprovider](msdyn_oc_geolocationprovider.md) | `objectid` | `objectid_msdyn_oc_geolocationprovider` |


## Source

Generated from [msdyn_oc_geolocationprovider (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_oc_geolocationprovider')) on 2026-05-07.