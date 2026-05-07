---
logical: "msdyn_agentcapacityprofileunit"
display: "Unità profilo capacità agente"
entitySetName: "msdyn_agentcapacityprofileunits"
primaryId: "msdyn_agentcapacityprofileunitid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Unità profilo capacità agente

Le unità del profilo capacità agente contengono la capacità disponibile dell'agente per ogni profilo di capacità associato.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentcapacityprofileunit` |
| Display name | Unità profilo capacità agente |
| Display (plural) | Unità profilo capacità agente |
| Schema name | `msdyn_agentcapacityprofileunit` |
| Entity set (Web API) | `msdyn_agentcapacityprofileunits` |
| Primary id attribute | `msdyn_agentcapacityprofileunitid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentcapacityprofileunits?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentcapacityprofileunits(<guid>)
POST /api/data/v9.2/msdyn_agentcapacityprofileunits
PATCH /api/data/v9.2/msdyn_agentcapacityprofileunits(<guid>)
DELETE /api/data/v9.2/msdyn_agentcapacityprofileunits(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentcapacityprofileunitid`, `msdyn_agentid`, `msdyn_availablecapacityprofileunits`, `msdyn_capacityprofileid`, `msdyn_consumedcapacityprofileunits`, `msdyn_defaultmaxunits`, `msdyn_isforceassignedprofile`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentcapacityprofileunit_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentcapacityprofileunit_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentcapacityprofileunit_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentcapacityprofileunit_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentcapacityprofileunit` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentcapacityprofileunit` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentcapacityprofileunit` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentcapacityprofileunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_capacityprofile_msdyn_agentcapacityprofileunit_capacityprofileid` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |
| `msdyn_systemuser_msdyn_agentcapacityprofileunit_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentcapacityprofileunit_SyncErrors` | [msdyn_agentcapacityprofileunit](msdyn_agentcapacityprofileunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcapacityprofileunit` |
| `msdyn_agentcapacityprofileunit_DuplicateMatchingRecord` | [msdyn_agentcapacityprofileunit](msdyn_agentcapacityprofileunit.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentcapacityprofileunit` |
| `msdyn_agentcapacityprofileunit_DuplicateBaseRecord` | [msdyn_agentcapacityprofileunit](msdyn_agentcapacityprofileunit.md) | `baserecordid` | `baserecordid_msdyn_agentcapacityprofileunit` |
| `msdyn_agentcapacityprofileunit_AsyncOperations` | [msdyn_agentcapacityprofileunit](msdyn_agentcapacityprofileunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcapacityprofileunit` |
| `msdyn_agentcapacityprofileunit_MailboxTrackingFolders` | [msdyn_agentcapacityprofileunit](msdyn_agentcapacityprofileunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcapacityprofileunit` |
| `msdyn_agentcapacityprofileunit_UserEntityInstanceDatas` | [msdyn_agentcapacityprofileunit](msdyn_agentcapacityprofileunit.md) | `objectid` | `objectid_msdyn_agentcapacityprofileunit` |
| `msdyn_agentcapacityprofileunit_ProcessSession` | [msdyn_agentcapacityprofileunit](msdyn_agentcapacityprofileunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcapacityprofileunit` |
| `msdyn_agentcapacityprofileunit_BulkDeleteFailures` | [msdyn_agentcapacityprofileunit](msdyn_agentcapacityprofileunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcapacityprofileunit` |
| `msdyn_agentcapacityprofileunit_PrincipalObjectAttributeAccesses` | [msdyn_agentcapacityprofileunit](msdyn_agentcapacityprofileunit.md) | `objectid` | `objectid_msdyn_agentcapacityprofileunit` |


## Source

Generated from [msdyn_agentcapacityprofileunit (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentcapacityprofileunit')) on 2026-05-07.