---
logical: "msdyn_workstream_bot_mapping"
display: "Mapping bot flusso di lavoro"
entitySetName: "msdyn_workstream_bot_mappings"
primaryId: "msdyn_workstream_bot_mappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping bot flusso di lavoro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_workstream_bot_mapping` |
| Display name | Mapping bot flusso di lavoro |
| Display (plural) | Mapping bot flusso di lavoro |
| Schema name | `msdyn_workstream_bot_mapping` |
| Entity set (Web API) | `msdyn_workstream_bot_mappings` |
| Primary id attribute | `msdyn_workstream_bot_mappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_workstream_bot_mappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_workstream_bot_mappings(<guid>)
POST /api/data/v9.2/msdyn_workstream_bot_mappings
PATCH /api/data/v9.2/msdyn_workstream_bot_mappings(<guid>)
DELETE /api/data/v9.2/msdyn_workstream_bot_mappings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_botuserid`, `msdyn_name`, `msdyn_workstream_bot_mappingid`, `msdyn_workstreamid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_workstream_bot_mapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_workstream_bot_mapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_workstream_bot_mapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_workstream_bot_mapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_workstream_bot_mapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_workstream_bot_mapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_workstream_bot_mapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_workstream_bot_mapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_liveworkstream_msdyn_workstream_bot` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstreamid` | `msdyn_workstreamid` |
| `msdyn_systemuser_msdyn_workstream_bot_mapping` | [systemuser](systemuser.md) | `msdyn_botuserid` | `msdyn_botuserid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_workstream_bot_mapping_SyncErrors` | [msdyn_workstream_bot_mapping](msdyn_workstream_bot_mapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_workstream_bot_mapping` |
| `msdyn_workstream_bot_mapping_AsyncOperations` | [msdyn_workstream_bot_mapping](msdyn_workstream_bot_mapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_workstream_bot_mapping` |
| `msdyn_workstream_bot_mapping_MailboxTrackingFolders` | [msdyn_workstream_bot_mapping](msdyn_workstream_bot_mapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_workstream_bot_mapping` |
| `msdyn_workstream_bot_mapping_UserEntityInstanceDatas` | [msdyn_workstream_bot_mapping](msdyn_workstream_bot_mapping.md) | `objectid` | `objectid_msdyn_workstream_bot_mapping` |
| `msdyn_workstream_bot_mapping_ProcessSession` | [msdyn_workstream_bot_mapping](msdyn_workstream_bot_mapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_workstream_bot_mapping` |
| `msdyn_workstream_bot_mapping_BulkDeleteFailures` | [msdyn_workstream_bot_mapping](msdyn_workstream_bot_mapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_workstream_bot_mapping` |
| `msdyn_workstream_bot_mapping_PrincipalObjectAttributeAccesses` | [msdyn_workstream_bot_mapping](msdyn_workstream_bot_mapping.md) | `objectid` | `objectid_msdyn_workstream_bot_mapping` |


## Source

Generated from [msdyn_workstream_bot_mapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_workstream_bot_mapping')) on 2026-05-07.