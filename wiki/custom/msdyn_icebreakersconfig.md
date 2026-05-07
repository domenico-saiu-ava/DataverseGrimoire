---
logical: "msdyn_icebreakersconfig"
display: "icebreakersconfig"
entitySetName: "msdyn_icebreakersconfigs"
primaryId: "msdyn_icebreakersconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# icebreakersconfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_icebreakersconfig` |
| Display name | icebreakersconfig |
| Display (plural) | icebreakersconfigs |
| Schema name | `msdyn_icebreakersconfig` |
| Entity set (Web API) | `msdyn_icebreakersconfigs` |
| Primary id attribute | `msdyn_icebreakersconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_icebreakersconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_icebreakersconfigs(<guid>)
POST /api/data/v9.2/msdyn_icebreakersconfigs
PATCH /api/data/v9.2/msdyn_icebreakersconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_icebreakersconfigs(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aretermsaccepted`, `msdyn_icebreakersconfigid`, `msdyn_isadminsettingenabled`, `msdyn_isentertainmentcategoryenabled`, `msdyn_isfamilycategoryenabled`, `msdyn_ishealthcategoryenabled`, `msdyn_issportscategoryenabled`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_icebreakersconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_icebreakersconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_icebreakersconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_icebreakersconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_icebreakersconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_icebreakersconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_icebreakersconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_icebreakersconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_icebreakersconfig_SyncErrors` | [msdyn_icebreakersconfig](msdyn_icebreakersconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_icebreakersconfig` |
| `msdyn_icebreakersconfig_DuplicateMatchingRecord` | [msdyn_icebreakersconfig](msdyn_icebreakersconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_icebreakersconfig` |
| `msdyn_icebreakersconfig_DuplicateBaseRecord` | [msdyn_icebreakersconfig](msdyn_icebreakersconfig.md) | `baserecordid` | `baserecordid_msdyn_icebreakersconfig` |
| `msdyn_icebreakersconfig_AsyncOperations` | [msdyn_icebreakersconfig](msdyn_icebreakersconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_icebreakersconfig` |
| `msdyn_icebreakersconfig_MailboxTrackingFolders` | [msdyn_icebreakersconfig](msdyn_icebreakersconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_icebreakersconfig` |
| `msdyn_icebreakersconfig_UserEntityInstanceDatas` | [msdyn_icebreakersconfig](msdyn_icebreakersconfig.md) | `objectid` | `objectid_msdyn_icebreakersconfig` |
| `msdyn_icebreakersconfig_ProcessSession` | [msdyn_icebreakersconfig](msdyn_icebreakersconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_icebreakersconfig` |
| `msdyn_icebreakersconfig_BulkDeleteFailures` | [msdyn_icebreakersconfig](msdyn_icebreakersconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_icebreakersconfig` |
| `msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses` | [msdyn_icebreakersconfig](msdyn_icebreakersconfig.md) | `objectid` | `objectid_msdyn_icebreakersconfig` |


## Source

Generated from [msdyn_icebreakersconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_icebreakersconfig')) on 2026-05-07.