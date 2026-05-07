---
logical: "msdyn_schedulingscope"
display: "Ambito di pianificazione"
entitySetName: "msdyn_schedulingscopes"
primaryId: "msdyn_schedulingscopeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Ambito di pianificazione

Definisce l'ambito della pianificazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_schedulingscope` |
| Display name | Ambito di pianificazione |
| Display (plural) | Ambiti di pianificazione |
| Schema name | `msdyn_schedulingscope` |
| Entity set (Web API) | `msdyn_schedulingscopes` |
| Primary id attribute | `msdyn_schedulingscopeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_schedulingscopes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_schedulingscopes(<guid>)
POST /api/data/v9.2/msdyn_schedulingscopes
PATCH /api/data/v9.2/msdyn_schedulingscopes(<guid>)
DELETE /api/data/v9.2/msdyn_schedulingscopes(<guid>)
```

## Attributes

Writable: **20** · Read-only: **2**

### Writable

`createdby`, `createdon`, `createdonbehalfby`, `importsequencenumber`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_bookingviewid`, `msdyn_name`, `msdyn_requirementviewid`, `msdyn_resourceviewid`, `msdyn_schedulingscopeid`, `overriddencreatedon`, `ownerid`, `owningteam`, `owninguser`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`owningbusinessunit`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_schedulingscope_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_schedulingscope_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_schedulingscope_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_schedulingscope_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_schedulingscope` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_schedulingscope` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_schedulingscope` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_schedulingscope` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_schedulingscope_SyncErrors` | [msdyn_schedulingscope](msdyn_schedulingscope.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingscope` |
| `msdyn_schedulingscope_AsyncOperations` | [msdyn_schedulingscope](msdyn_schedulingscope.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingscope` |
| `msdyn_schedulingscope_MailboxTrackingFolders` | [msdyn_schedulingscope](msdyn_schedulingscope.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingscope` |
| `msdyn_schedulingscope_UserEntityInstanceDatas` | [msdyn_schedulingscope](msdyn_schedulingscope.md) | `objectid` | `objectid_msdyn_schedulingscope` |
| `msdyn_schedulingscope_ProcessSession` | [msdyn_schedulingscope](msdyn_schedulingscope.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingscope` |
| `msdyn_schedulingscope_BulkDeleteFailures` | [msdyn_schedulingscope](msdyn_schedulingscope.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingscope` |
| `msdyn_schedulingscope_PrincipalObjectAttributeAccesses` | [msdyn_schedulingscope](msdyn_schedulingscope.md) | `objectid` | `objectid_msdyn_schedulingscope` |


## Source

Generated from [msdyn_schedulingscope (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_schedulingscope')) on 2026-05-07.