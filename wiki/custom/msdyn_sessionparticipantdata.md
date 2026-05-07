---
logical: "msdyn_sessionparticipantdata"
display: "Dati partecipante della sessione (deprecata)"
entitySetName: "msdyn_sessionparticipantsdata"
primaryId: "msdyn_sessionparticipantdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dati partecipante della sessione (deprecata)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessionparticipantdata` |
| Display name | Dati partecipante della sessione (deprecata) |
| Display (plural) | Dati partecipanti della sessione (deprecata) |
| Schema name | `msdyn_SessionParticipantData` |
| Entity set (Web API) | `msdyn_sessionparticipantsdata` |
| Primary id attribute | `msdyn_sessionparticipantdataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sessionparticipantsdata?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sessionparticipantsdata(<guid>)
POST /api/data/v9.2/msdyn_sessionparticipantsdata
PATCH /api/data/v9.2/msdyn_sessionparticipantsdata(<guid>)
DELETE /api/data/v9.2/msdyn_sessionparticipantsdata(<guid>)
```

## Attributes

Writable: **22** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationid`, `msdyn_customattribute1`, `msdyn_customattribute2`, `msdyn_customattribute3`, `msdyn_customattribute4`, `msdyn_customattribute5`, `msdyn_name`, `msdyn_participantaddedtimestamp`, `msdyn_participantassignreason`, `msdyn_participantid`, `msdyn_participantmode`, `msdyn_participantname`, `msdyn_participanttype`, `msdyn_providersessionid`, `msdyn_sessionparticipantdataid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sessionparticipantdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sessionparticipantdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sessionparticipantdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sessionparticipantdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sessionparticipantdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sessionparticipantdata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sessionparticipantdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sessionparticipantdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessionparticipantdata_SyncErrors` | [msdyn_sessionparticipantdata](msdyn_sessionparticipantdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipantdata` |
| `msdyn_sessionparticipantdata_DuplicateMatchingRecord` | [msdyn_sessionparticipantdata](msdyn_sessionparticipantdata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sessionparticipantdata` |
| `msdyn_sessionparticipantdata_DuplicateBaseRecord` | [msdyn_sessionparticipantdata](msdyn_sessionparticipantdata.md) | `baserecordid` | `baserecordid_msdyn_sessionparticipantdata` |
| `msdyn_sessionparticipantdata_AsyncOperations` | [msdyn_sessionparticipantdata](msdyn_sessionparticipantdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipantdata` |
| `msdyn_sessionparticipantdata_MailboxTrackingFolders` | [msdyn_sessionparticipantdata](msdyn_sessionparticipantdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipantdata` |
| `msdyn_sessionparticipantdata_UserEntityInstanceDatas` | [msdyn_sessionparticipantdata](msdyn_sessionparticipantdata.md) | `objectid` | `objectid_msdyn_sessionparticipantdata` |
| `msdyn_sessionparticipantdata_ProcessSession` | [msdyn_sessionparticipantdata](msdyn_sessionparticipantdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipantdata` |
| `msdyn_sessionparticipantdata_BulkDeleteFailures` | [msdyn_sessionparticipantdata](msdyn_sessionparticipantdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipantdata` |
| `msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses` | [msdyn_sessionparticipantdata](msdyn_sessionparticipantdata.md) | `objectid` | `objectid_msdyn_sessionparticipantdata` |


## Source

Generated from [msdyn_sessionparticipantdata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sessionparticipantdata')) on 2026-05-07.