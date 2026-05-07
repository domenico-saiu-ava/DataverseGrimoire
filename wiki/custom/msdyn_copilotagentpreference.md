---
logical: "msdyn_copilotagentpreference"
display: "Preferenza utente per Copilot"
entitySetName: "msdyn_copilotagentpreferences"
primaryId: "msdyn_copilotagentpreferenceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Preferenza utente per Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotagentpreference` |
| Display name | Preferenza utente per Copilot |
| Display (plural) | Preferenze rappresentante per Copilot |
| Schema name | `msdyn_copilotagentpreference` |
| Entity set (Web API) | `msdyn_copilotagentpreferences` |
| Primary id attribute | `msdyn_copilotagentpreferenceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotagentpreferences?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotagentpreferences(<guid>)
POST /api/data/v9.2/msdyn_copilotagentpreferences
PATCH /api/data/v9.2/msdyn_copilotagentpreferences(<guid>)
DELETE /api/data/v9.2/msdyn_copilotagentpreferences(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentprompts`, `msdyn_copilotagentpreferenceid`, `msdyn_enabledefaultexecution`, `msdyn_enabledskills`, `msdyn_isfullpagecopilotenabled`, `msdyn_kbfilterscope`, `msdyn_name`, `msdyn_pluginscope`, `msdyn_prioritizationcolumns`, `msdyn_prioritizationfetchxml`, `msdyn_prioritizationprompt`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotagentpreference_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotagentpreference_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotagentpreference_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotagentpreference_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_copilotagentpreference` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_copilotagentpreference` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_copilotagentpreference` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_copilotagentpreference` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotagentpreference_SyncErrors` | [msdyn_copilotagentpreference](msdyn_copilotagentpreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotagentpreference` |
| `msdyn_copilotagentpreference_DuplicateMatchingRecord` | [msdyn_copilotagentpreference](msdyn_copilotagentpreference.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotagentpreference` |
| `msdyn_copilotagentpreference_DuplicateBaseRecord` | [msdyn_copilotagentpreference](msdyn_copilotagentpreference.md) | `baserecordid` | `baserecordid_msdyn_copilotagentpreference` |
| `msdyn_copilotagentpreference_AsyncOperations` | [msdyn_copilotagentpreference](msdyn_copilotagentpreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotagentpreference` |
| `msdyn_copilotagentpreference_MailboxTrackingFolders` | [msdyn_copilotagentpreference](msdyn_copilotagentpreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotagentpreference` |
| `msdyn_copilotagentpreference_UserEntityInstanceDatas` | [msdyn_copilotagentpreference](msdyn_copilotagentpreference.md) | `objectid` | `objectid_msdyn_copilotagentpreference` |
| `msdyn_copilotagentpreference_ProcessSession` | [msdyn_copilotagentpreference](msdyn_copilotagentpreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotagentpreference` |
| `msdyn_copilotagentpreference_BulkDeleteFailures` | [msdyn_copilotagentpreference](msdyn_copilotagentpreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotagentpreference` |
| `msdyn_copilotagentpreference_PrincipalObjectAttributeAccesses` | [msdyn_copilotagentpreference](msdyn_copilotagentpreference.md) | `objectid` | `objectid_msdyn_copilotagentpreference` |


## Source

Generated from [msdyn_copilotagentpreference (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotagentpreference')) on 2026-05-07.