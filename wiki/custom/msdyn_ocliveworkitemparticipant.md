---
logical: "msdyn_ocliveworkitemparticipant"
display: "Partecipante elemento di lavoro Live (deprecata)"
entitySetName: "msdyn_ocliveworkitemparticipants"
primaryId: "msdyn_ocliveworkitemparticipantid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Partecipante elemento di lavoro Live (deprecata)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemparticipant` |
| Display name | Partecipante elemento di lavoro Live (deprecata) |
| Display (plural) | Partecipanti elemento di lavoro Live (deprecata) |
| Schema name | `msdyn_ocliveworkitemparticipant` |
| Entity set (Web API) | `msdyn_ocliveworkitemparticipants` |
| Primary id attribute | `msdyn_ocliveworkitemparticipantid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemparticipants?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemparticipants(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemparticipants
PATCH /api/data/v9.2/msdyn_ocliveworkitemparticipants(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemparticipants(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_addedon`, `msdyn_agentid`, `msdyn_joinedon`, `msdyn_leavingreason`, `msdyn_lefton`, `msdyn_name`, `msdyn_ocliveworkitemparticipantid`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocliveworkitemparticipant_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemparticipant_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemparticipant_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemparticipant_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocliveworkitemparticipant` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocliveworkitemparticipant` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocliveworkitemparticipant` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocliveworkitemparticipant` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_systemuser_msdyn_ocliveworkitemparticipant_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitemparticipant_SyncErrors` | [msdyn_ocliveworkitemparticipant](msdyn_ocliveworkitemparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemparticipant` |
| `msdyn_ocliveworkitemparticipant_DuplicateMatchingRecord` | [msdyn_ocliveworkitemparticipant](msdyn_ocliveworkitemparticipant.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocliveworkitemparticipant` |
| `msdyn_ocliveworkitemparticipant_DuplicateBaseRecord` | [msdyn_ocliveworkitemparticipant](msdyn_ocliveworkitemparticipant.md) | `baserecordid` | `baserecordid_msdyn_ocliveworkitemparticipant` |
| `msdyn_ocliveworkitemparticipant_AsyncOperations` | [msdyn_ocliveworkitemparticipant](msdyn_ocliveworkitemparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemparticipant` |
| `msdyn_ocliveworkitemparticipant_MailboxTrackingFolders` | [msdyn_ocliveworkitemparticipant](msdyn_ocliveworkitemparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemparticipant` |
| `msdyn_ocliveworkitemparticipant_UserEntityInstanceDatas` | [msdyn_ocliveworkitemparticipant](msdyn_ocliveworkitemparticipant.md) | `objectid` | `objectid_msdyn_ocliveworkitemparticipant` |
| `msdyn_ocliveworkitemparticipant_ProcessSession` | [msdyn_ocliveworkitemparticipant](msdyn_ocliveworkitemparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemparticipant` |
| `msdyn_ocliveworkitemparticipant_BulkDeleteFailures` | [msdyn_ocliveworkitemparticipant](msdyn_ocliveworkitemparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemparticipant` |
| `msdyn_ocliveworkitemparticipant_PrincipalObjectAttributeAccesses` | [msdyn_ocliveworkitemparticipant](msdyn_ocliveworkitemparticipant.md) | `objectid` | `objectid_msdyn_ocliveworkitemparticipant` |


## Source

Generated from [msdyn_ocliveworkitemparticipant (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocliveworkitemparticipant')) on 2026-05-07.