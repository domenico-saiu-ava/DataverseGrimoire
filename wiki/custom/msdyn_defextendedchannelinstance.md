---
logical: "msdyn_defextendedchannelinstance"
display: "msdyn_DefExtendedChannelInstance"
entitySetName: "msdyn_defextendedchannelinstances"
primaryId: "msdyn_defextendedchannelinstanceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_DefExtendedChannelInstance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_defextendedchannelinstance` |
| Display name | msdyn_DefExtendedChannelInstance |
| Display (plural) | msdyn_DefExtendedChannelInstances |
| Schema name | `msdyn_DefExtendedChannelInstance` |
| Entity set (Web API) | `msdyn_defextendedchannelinstances` |
| Primary id attribute | `msdyn_defextendedchannelinstanceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_defextendedchannelinstances?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_defextendedchannelinstances(<guid>)
POST /api/data/v9.2/msdyn_defextendedchannelinstances
PATCH /api/data/v9.2/msdyn_defextendedchannelinstances(<guid>)
DELETE /api/data/v9.2/msdyn_defextendedchannelinstances(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_defextendedchannelinstanceid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_defextendedchannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_defextendedchannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_defextendedchannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_defextendedchannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_defextendedchannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_defextendedchannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_defextendedchannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_defextendedchannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_defextendedchannelinstance_SyncErrors` | [msdyn_defextendedchannelinstance](msdyn_defextendedchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_defextendedchannelinstance` |
| `msdyn_defextendedchannelinstance_DuplicateMatchingRecord` | [msdyn_defextendedchannelinstance](msdyn_defextendedchannelinstance.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_defextendedchannelinstance` |
| `msdyn_defextendedchannelinstance_DuplicateBaseRecord` | [msdyn_defextendedchannelinstance](msdyn_defextendedchannelinstance.md) | `baserecordid` | `baserecordid_msdyn_defextendedchannelinstance` |
| `msdyn_defextendedchannelinstance_AsyncOperations` | [msdyn_defextendedchannelinstance](msdyn_defextendedchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_defextendedchannelinstance` |
| `msdyn_defextendedchannelinstance_MailboxTrackingFolders` | [msdyn_defextendedchannelinstance](msdyn_defextendedchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_defextendedchannelinstance` |
| `msdyn_defextendedchannelinstance_UserEntityInstanceDatas` | [msdyn_defextendedchannelinstance](msdyn_defextendedchannelinstance.md) | `objectid` | `objectid_msdyn_defextendedchannelinstance` |
| `msdyn_defextendedchannelinstance_ProcessSession` | [msdyn_defextendedchannelinstance](msdyn_defextendedchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_defextendedchannelinstance` |
| `msdyn_defextendedchannelinstance_BulkDeleteFailures` | [msdyn_defextendedchannelinstance](msdyn_defextendedchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_defextendedchannelinstance` |
| `msdyn_defextendedchannelinstance_PrincipalObjectAttributeAccesses` | [msdyn_defextendedchannelinstance](msdyn_defextendedchannelinstance.md) | `objectid` | `objectid_msdyn_defextendedchannelinstance` |
| `msdyn_channelinstance_msdyn_defextendedchannelinstance` | [msdyn_defextendedchannelinstance](msdyn_defextendedchannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityId_msdyn_defextendedchannelinstance` |


## Source

Generated from [msdyn_defextendedchannelinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_defextendedchannelinstance')) on 2026-05-07.