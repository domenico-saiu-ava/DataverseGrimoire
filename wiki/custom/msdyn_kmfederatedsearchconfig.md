---
logical: "msdyn_kmfederatedsearchconfig"
display: "Provider di ricerca"
entitySetName: "msdyn_kmfederatedsearchconfigs"
primaryId: "msdyn_kmfederatedsearchconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Provider di ricerca

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kmfederatedsearchconfig` |
| Display name | Provider di ricerca |
| Display (plural) | Provider di ricerca |
| Schema name | `msdyn_kmfederatedsearchconfig` |
| Entity set (Web API) | `msdyn_kmfederatedsearchconfigs` |
| Primary id attribute | `msdyn_kmfederatedsearchconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kmfederatedsearchconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kmfederatedsearchconfigs(<guid>)
POST /api/data/v9.2/msdyn_kmfederatedsearchconfigs
PATCH /api/data/v9.2/msdyn_kmfederatedsearchconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_kmfederatedsearchconfigs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`connectionid`, `importsequencenumber`, `msdyn_description`, `msdyn_kmfederatedsearchconfigid`, `msdyn_name`, `organization`, `overriddencreatedon`, `ownerid`, `searchtype`, `sharepointurl`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_kmfederatedsearchconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kmfederatedsearchconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kmfederatedsearchconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kmfederatedsearchconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_kmfederatedsearchconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_kmfederatedsearchconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_kmfederatedsearchconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_kmfederatedsearchconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kmfederatedsearchconfig_SyncErrors` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmfederatedsearchconfig_DuplicateMatchingRecord` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmfederatedsearchconfig_DuplicateBaseRecord` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `baserecordid` | `baserecordid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmfederatedsearchconfig_AsyncOperations` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmfederatedsearchconfig_MailboxTrackingFolders` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmfederatedsearchconfig_UserEntityInstanceDatas` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `objectid` | `objectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmfederatedsearchconfig_ProcessSession` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmfederatedsearchconfig_BulkDeleteFailures` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmfederatedsearchconfig_PrincipalObjectAttributeAccesses` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `objectid` | `objectid_msdyn_kmfederatedsearchconfig` |
| `IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `msdyn_searchproviderid` | `msdyn_searchproviderid` |


## Source

Generated from [msdyn_kmfederatedsearchconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_kmfederatedsearchconfig')) on 2026-05-07.