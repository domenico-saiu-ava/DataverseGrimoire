---
logical: "msdyn_preferredagent"
display: "Agente preferito"
entitySetName: "msdyn_preferredagents"
primaryId: "msdyn_preferredagentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Agente preferito

Tabella agente preferito, tabella utilizzata per archiviare il mapping tra l'utente di sistema e il contatto/account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_preferredagent` |
| Display name | Agente preferito |
| Display (plural) | Agenti preferiti |
| Schema name | `msdyn_preferredagent` |
| Entity set (Web API) | `msdyn_preferredagents` |
| Primary id attribute | `msdyn_preferredagentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_preferredagents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_preferredagents(<guid>)
POST /api/data/v9.2/msdyn_preferredagents
PATCH /api/data/v9.2/msdyn_preferredagents(<guid>)
DELETE /api/data/v9.2/msdyn_preferredagents(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_preferencerating`, `msdyn_preferredagentid`, `msdyn_recordid`, `msdyn_recordtype`, `msdyn_systemuserid`, `msdyn_temporarypreference`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_preferredagent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_preferredagent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_preferredagent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_preferredagent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_preferredagent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_preferredagent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_preferredagent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_preferredagent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_preferredagent_account_msdyn_recordId` | [account](account.md) | `msdyn_recordid` | `msdyn_recordId_account` |
| `msdyn_msdyn_preferredagent_contact_msdyn_recordId` | [contact](contact.md) | `msdyn_recordid` | `msdyn_recordId_contact` |
| `msdyn_systemuser_msdyn_preferredagent_systemuserid` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_preferredagent_SyncErrors` | [msdyn_preferredagent](msdyn_preferredagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagent` |
| `msdyn_preferredagent_DuplicateMatchingRecord` | [msdyn_preferredagent](msdyn_preferredagent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_preferredagent` |
| `msdyn_preferredagent_DuplicateBaseRecord` | [msdyn_preferredagent](msdyn_preferredagent.md) | `baserecordid` | `baserecordid_msdyn_preferredagent` |
| `msdyn_preferredagent_AsyncOperations` | [msdyn_preferredagent](msdyn_preferredagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagent` |
| `msdyn_preferredagent_MailboxTrackingFolders` | [msdyn_preferredagent](msdyn_preferredagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagent` |
| `msdyn_preferredagent_UserEntityInstanceDatas` | [msdyn_preferredagent](msdyn_preferredagent.md) | `objectid` | `objectid_msdyn_preferredagent` |
| `msdyn_preferredagent_ProcessSession` | [msdyn_preferredagent](msdyn_preferredagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagent` |
| `msdyn_preferredagent_BulkDeleteFailures` | [msdyn_preferredagent](msdyn_preferredagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagent` |
| `msdyn_preferredagent_PrincipalObjectAttributeAccesses` | [msdyn_preferredagent](msdyn_preferredagent.md) | `objectid` | `objectid_msdyn_preferredagent` |


## Source

Generated from [msdyn_preferredagent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_preferredagent')) on 2026-05-07.