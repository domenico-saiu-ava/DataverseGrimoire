---
logical: "msdyn_requirementchange"
display: "Modifica requisito"
entitySetName: "msdyn_requirementchanges"
primaryId: "msdyn_requirementchangeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modifica requisito

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_requirementchange` |
| Display name | Modifica requisito |
| Display (plural) | Modifiche requisito |
| Schema name | `msdyn_requirementchange` |
| Entity set (Web API) | `msdyn_requirementchanges` |
| Primary id attribute | `msdyn_requirementchangeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_requirementchanges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_requirementchanges(<guid>)
POST /api/data/v9.2/msdyn_requirementchanges
PATCH /api/data/v9.2/msdyn_requirementchanges(<guid>)
DELETE /api/data/v9.2/msdyn_requirementchanges(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_changesjson`, `msdyn_name`, `msdyn_requirementchangeid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_requirementchange_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_requirementchange_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_requirementchange_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_requirementchange_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_requirementchange` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_requirementchange` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_requirementchange` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_requirementchange` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementchange_SyncErrors` | [msdyn_requirementchange](msdyn_requirementchange.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementchange` |
| `msdyn_requirementchange_AsyncOperations` | [msdyn_requirementchange](msdyn_requirementchange.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementchange` |
| `msdyn_requirementchange_MailboxTrackingFolders` | [msdyn_requirementchange](msdyn_requirementchange.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementchange` |
| `msdyn_requirementchange_UserEntityInstanceDatas` | [msdyn_requirementchange](msdyn_requirementchange.md) | `objectid` | `objectid_msdyn_requirementchange` |
| `msdyn_requirementchange_ProcessSession` | [msdyn_requirementchange](msdyn_requirementchange.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementchange` |
| `msdyn_requirementchange_BulkDeleteFailures` | [msdyn_requirementchange](msdyn_requirementchange.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementchange` |
| `msdyn_requirementchange_PrincipalObjectAttributeAccesses` | [msdyn_requirementchange](msdyn_requirementchange.md) | `objectid` | `objectid_msdyn_requirementchange` |


## Source

Generated from [msdyn_requirementchange (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_requirementchange')) on 2026-05-07.