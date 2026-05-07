---
logical: "msdyn_sessiondata"
display: "Dati sessione (deprecata)"
entitySetName: "msdyn_sessionsdata"
primaryId: "msdyn_sessiondataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dati sessione (deprecata)

Entità primaria per i dati della sessione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessiondata` |
| Display name | Dati sessione (deprecata) |
| Display (plural) | Dati sessioni (deprecata) |
| Schema name | `msdyn_SessionData` |
| Entity set (Web API) | `msdyn_sessionsdata` |
| Primary id attribute | `msdyn_sessiondataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sessionsdata?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sessionsdata(<guid>)
POST /api/data/v9.2/msdyn_sessionsdata
PATCH /api/data/v9.2/msdyn_sessionsdata(<guid>)
DELETE /api/data/v9.2/msdyn_sessionsdata(<guid>)
```

## Attributes

Writable: **27** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationid`, `msdyn_customattribute1`, `msdyn_customattribute2`, `msdyn_customattribute3`, `msdyn_customattribute4`, `msdyn_customattribute5`, `msdyn_externalcorrelationid`, `msdyn_name`, `msdyn_providersessionid`, `msdyn_queueid`, `msdyn_queuename`, `msdyn_sessionadditionaldata`, `msdyn_sessionagentassignedtimestamp`, `msdyn_sessionchannel`, `msdyn_sessioncreatedtimestamp`, `msdyn_sessioncreationreason`, `msdyn_sessiondataid`, `msdyn_sessionqueueassignedtimestamp`, `msdyn_ucisessionid`, `msdyn_ucisessionname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sessiondata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sessiondata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sessiondata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sessiondata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sessiondata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sessiondata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sessiondata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sessiondata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessiondata_SyncErrors` | [msdyn_sessiondata](msdyn_sessiondata.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessiondata` |
| `msdyn_sessiondata_DuplicateMatchingRecord` | [msdyn_sessiondata](msdyn_sessiondata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sessiondata` |
| `msdyn_sessiondata_DuplicateBaseRecord` | [msdyn_sessiondata](msdyn_sessiondata.md) | `baserecordid` | `baserecordid_msdyn_sessiondata` |
| `msdyn_sessiondata_AsyncOperations` | [msdyn_sessiondata](msdyn_sessiondata.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessiondata` |
| `msdyn_sessiondata_MailboxTrackingFolders` | [msdyn_sessiondata](msdyn_sessiondata.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessiondata` |
| `msdyn_sessiondata_UserEntityInstanceDatas` | [msdyn_sessiondata](msdyn_sessiondata.md) | `objectid` | `objectid_msdyn_sessiondata` |
| `msdyn_sessiondata_ProcessSession` | [msdyn_sessiondata](msdyn_sessiondata.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessiondata` |
| `msdyn_sessiondata_BulkDeleteFailures` | [msdyn_sessiondata](msdyn_sessiondata.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessiondata` |
| `msdyn_sessiondata_PrincipalObjectAttributeAccesses` | [msdyn_sessiondata](msdyn_sessiondata.md) | `objectid` | `objectid_msdyn_sessiondata` |


## Source

Generated from [msdyn_sessiondata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sessiondata')) on 2026-05-07.