---
logical: "msdyn_liveconversationcountercondition"
display: "Condizione contatore conversazioni live"
entitySetName: "msdyn_liveconversationcounterconditions"
primaryId: "msdyn_liveconversationcounterconditionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Condizione contatore conversazioni live

Condizione contatore conversazioni live

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_liveconversationcountercondition` |
| Display name | Condizione contatore conversazioni live |
| Display (plural) | Condizioni contatore conversazioni live |
| Schema name | `msdyn_liveconversationcountercondition` |
| Entity set (Web API) | `msdyn_liveconversationcounterconditions` |
| Primary id attribute | `msdyn_liveconversationcounterconditionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_liveconversationcounterconditions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_liveconversationcounterconditions(<guid>)
POST /api/data/v9.2/msdyn_liveconversationcounterconditions
PATCH /api/data/v9.2/msdyn_liveconversationcounterconditions(<guid>)
DELETE /api/data/v9.2/msdyn_liveconversationcounterconditions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_liveconversationcounterconditionid`, `msdyn_name`, `msdyn_units`, `msdyn_urgencylevel`, `msdyn_value`, `msdyn_workstreamid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_liveconversationcountercondition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_liveconversationcountercondition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_liveconversationcountercondition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_liveconversationcountercondition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_liveconversationcountercondition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_liveconversationcountercondition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_liveconversationcountercondition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_liveconversationcountercondition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_workstream_liveconversationcountercond` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstreamid` | `msdyn_workstreamid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_liveconversationcountercondition_SyncErrors` | [msdyn_liveconversationcountercondition](msdyn_liveconversationcountercondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveconversationcountercondition` |
| `msdyn_liveconversationcountercondition_AsyncOperations` | [msdyn_liveconversationcountercondition](msdyn_liveconversationcountercondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveconversationcountercondition` |
| `msdyn_liveconversationcountercondition_MailboxTrackingFolders` | [msdyn_liveconversationcountercondition](msdyn_liveconversationcountercondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveconversationcountercondition` |
| `msdyn_liveconversationcountercondition_UserEntityInstanceDatas` | [msdyn_liveconversationcountercondition](msdyn_liveconversationcountercondition.md) | `objectid` | `objectid_msdyn_liveconversationcountercondition` |
| `msdyn_liveconversationcountercondition_ProcessSession` | [msdyn_liveconversationcountercondition](msdyn_liveconversationcountercondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveconversationcountercondition` |
| `msdyn_liveconversationcountercondition_BulkDeleteFailures` | [msdyn_liveconversationcountercondition](msdyn_liveconversationcountercondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveconversationcountercondition` |
| `msdyn_liveconversationcountercondition_PrincipalObjectAttributeAccesses` | [msdyn_liveconversationcountercondition](msdyn_liveconversationcountercondition.md) | `objectid` | `objectid_msdyn_liveconversationcountercondition` |


## Source

Generated from [msdyn_liveconversationcountercondition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_liveconversationcountercondition')) on 2026-05-07.