---
logical: "msdyn_siconfig"
display: "siconfig"
entitySetName: "msdyn_siconfigs"
primaryId: "msdyn_siconfigid"
primaryName: "msdyn_version"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# siconfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_siconfig` |
| Display name | siconfig |
| Display (plural) | siconfig |
| Schema name | `msdyn_siconfig` |
| Entity set (Web API) | `msdyn_siconfigs` |
| Primary id attribute | `msdyn_siconfigid` |
| Primary name attribute | `msdyn_version` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_siconfigs?$select=msdyn_version&$top=10
GET /api/data/v9.2/msdyn_siconfigs(<guid>)
POST /api/data/v9.2/msdyn_siconfigs
PATCH /api/data/v9.2/msdyn_siconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_siconfigs(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_siconfigid`, `msdyn_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_siconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_siconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_siconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_siconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_siconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_siconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_siconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_siconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_siconfig_SyncErrors` | [msdyn_siconfig](msdyn_siconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_siconfig` |
| `msdyn_siconfig_DuplicateMatchingRecord` | [msdyn_siconfig](msdyn_siconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_siconfig` |
| `msdyn_siconfig_DuplicateBaseRecord` | [msdyn_siconfig](msdyn_siconfig.md) | `baserecordid` | `baserecordid_msdyn_siconfig` |
| `msdyn_siconfig_AsyncOperations` | [msdyn_siconfig](msdyn_siconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_siconfig` |
| `msdyn_siconfig_MailboxTrackingFolders` | [msdyn_siconfig](msdyn_siconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_siconfig` |
| `msdyn_siconfig_UserEntityInstanceDatas` | [msdyn_siconfig](msdyn_siconfig.md) | `objectid` | `objectid_msdyn_siconfig` |
| `msdyn_siconfig_ProcessSession` | [msdyn_siconfig](msdyn_siconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_siconfig` |
| `msdyn_siconfig_BulkDeleteFailures` | [msdyn_siconfig](msdyn_siconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_siconfig` |
| `msdyn_siconfig_PrincipalObjectAttributeAccesses` | [msdyn_siconfig](msdyn_siconfig.md) | `objectid` | `objectid_msdyn_siconfig` |


## Source

Generated from [msdyn_siconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_siconfig')) on 2026-05-07.