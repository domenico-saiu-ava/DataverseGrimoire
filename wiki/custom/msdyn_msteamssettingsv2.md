---
logical: "msdyn_msteamssettingsv2"
display: "msdyn_msteamssettingsv2"
entitySetName: "msdyn_msteamssettingsv2"
primaryId: "msdyn_msteamssettingsv2id"
primaryName: "msdyn_msteamssettingsname"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msteamssettingsv2

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msteamssettingsv2` |
| Display name | msdyn_msteamssettingsv2 |
| Display (plural) | msdyn_msteamssettingsv2 |
| Schema name | `msdyn_msteamssettingsv2` |
| Entity set (Web API) | `msdyn_msteamssettingsv2` |
| Primary id attribute | `msdyn_msteamssettingsv2id` |
| Primary name attribute | `msdyn_msteamssettingsname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msteamssettingsv2?$select=msdyn_msteamssettingsname&$top=10
GET /api/data/v9.2/msdyn_msteamssettingsv2(<guid>)
POST /api/data/v9.2/msdyn_msteamssettingsv2
PATCH /api/data/v9.2/msdyn_msteamssettingsv2(<guid>)
DELETE /api/data/v9.2/msdyn_msteamssettingsv2(<guid>)
```

## Attributes

Writable: **19** · Read-only: **7**

### Writable

`createdby`, `importsequencenumber`, `msdyn_defaultteamschattitleenabled`, `msdyn_embedcollabserviceurl`, `msdyn_embedcollabteamsintegrationenabled`, `msdyn_entitysettingforteamsmeetingintegration`, `msdyn_isdefaultentitysettingcreatedfortmi`, `msdyn_msteamssettingsname`, `msdyn_msteamssettingsv2id`, `msdyn_securityrolesettingforteamsmeetingintegration`, `msdyn_sensitivitylabelsettingenabled`, `msdyn_tabserviceurl`, `msdyn_teamsappautoinstallenabled`, `msdyn_teamsmeetingintegrationenabled`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_msteamssettingsv2_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_msteamssettingsv2_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_msteamssettingsv2_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_msteamssettingsv2_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msteamssettingsv2_SyncErrors` | [msdyn_msteamssettingsv2](msdyn_msteamssettingsv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_msteamssettingsv2` |
| `msdyn_msteamssettingsv2_AsyncOperations` | [msdyn_msteamssettingsv2](msdyn_msteamssettingsv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_msteamssettingsv2` |
| `msdyn_msteamssettingsv2_MailboxTrackingFolders` | [msdyn_msteamssettingsv2](msdyn_msteamssettingsv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_msteamssettingsv2` |
| `msdyn_msteamssettingsv2_UserEntityInstanceDatas` | [msdyn_msteamssettingsv2](msdyn_msteamssettingsv2.md) | `objectid` | `objectid_msdyn_msteamssettingsv2` |
| `msdyn_msteamssettingsv2_ProcessSession` | [msdyn_msteamssettingsv2](msdyn_msteamssettingsv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_msteamssettingsv2` |
| `msdyn_msteamssettingsv2_BulkDeleteFailures` | [msdyn_msteamssettingsv2](msdyn_msteamssettingsv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_msteamssettingsv2` |
| `msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses` | [msdyn_msteamssettingsv2](msdyn_msteamssettingsv2.md) | `objectid` | `objectid_msdyn_msteamssettingsv2` |


## Source

Generated from [msdyn_msteamssettingsv2 (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msteamssettingsv2')) on 2026-05-07.