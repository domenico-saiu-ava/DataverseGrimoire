---
logical: "msdyn_businessclosure"
display: "Chiusura aziendale"
entitySetName: "msdyn_businessclosures"
primaryId: "msdyn_businessclosureid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Chiusura aziendale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_businessclosure` |
| Display name | Chiusura aziendale |
| Display (plural) | Chiusure aziendali |
| Schema name | `msdyn_businessclosure` |
| Entity set (Web API) | `msdyn_businessclosures` |
| Primary id attribute | `msdyn_businessclosureid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_businessclosures?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_businessclosures(<guid>)
POST /api/data/v9.2/msdyn_businessclosures
PATCH /api/data/v9.2/msdyn_businessclosures(<guid>)
DELETE /api/data/v9.2/msdyn_businessclosures(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_businessclosureid`, `msdyn_duration`, `msdyn_endtime`, `msdyn_isalldayevent`, `msdyn_name`, `msdyn_selectedyear`, `msdyn_starttime`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_businessclosure_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_businessclosure_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_businessclosure_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_businessclosure_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_businessclosure` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_businessclosure` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_businessclosure` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_businessclosure` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_businessclosure_SyncErrors` | [msdyn_businessclosure](msdyn_businessclosure.md) | `regardingobjectid` | `regardingobjectid_msdyn_businessclosure` |
| `msdyn_businessclosure_AsyncOperations` | [msdyn_businessclosure](msdyn_businessclosure.md) | `regardingobjectid` | `regardingobjectid_msdyn_businessclosure` |
| `msdyn_businessclosure_MailboxTrackingFolders` | [msdyn_businessclosure](msdyn_businessclosure.md) | `regardingobjectid` | `regardingobjectid_msdyn_businessclosure` |
| `msdyn_businessclosure_UserEntityInstanceDatas` | [msdyn_businessclosure](msdyn_businessclosure.md) | `objectid` | `objectid_msdyn_businessclosure` |
| `msdyn_businessclosure_ProcessSession` | [msdyn_businessclosure](msdyn_businessclosure.md) | `regardingobjectid` | `regardingobjectid_msdyn_businessclosure` |
| `msdyn_businessclosure_BulkDeleteFailures` | [msdyn_businessclosure](msdyn_businessclosure.md) | `regardingobjectid` | `regardingobjectid_msdyn_businessclosure` |
| `msdyn_businessclosure_PrincipalObjectAttributeAccesses` | [msdyn_businessclosure](msdyn_businessclosure.md) | `objectid` | `objectid_msdyn_businessclosure` |


## Source

Generated from [msdyn_businessclosure (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_businessclosure')) on 2026-05-07.