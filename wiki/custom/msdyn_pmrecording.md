---
logical: "msdyn_pmrecording"
display: "Registrazione mining di processo"
entitySetName: "msdyn_pmrecordings"
primaryId: "msdyn_pmrecordingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Registrazione mining di processo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmrecording` |
| Display name | Registrazione mining di processo |
| Display (plural) | Registrazioni mining di processo |
| Schema name | `msdyn_pmrecording` |
| Entity set (Web API) | `msdyn_pmrecordings` |
| Primary id attribute | `msdyn_pmrecordingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmrecordings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmrecordings(<guid>)
POST /api/data/v9.2/msdyn_pmrecordings
PATCH /api/data/v9.2/msdyn_pmrecordings(<guid>)
DELETE /api/data/v9.2/msdyn_pmrecordings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_iterationid`, `msdyn_lasterrors`, `msdyn_name`, `msdyn_normalizedrecording`, `msdyn_parenttask`, `msdyn_pmrecordingid`, `msdyn_publishingstatus`, `msdyn_sourceworkflow`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmrecording_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmrecording_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmrecording_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmrecording_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmrecording` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmrecording` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmrecording` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmrecording` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_parenttask` | `msdyn_parenttask` |
| `msdyn_workflow_msdyn_pmrecording` | [workflow](workflow.md) | `msdyn_sourceworkflow` | `msdyn_sourceworkflow` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmrecording_SyncErrors` | [msdyn_pmrecording](msdyn_pmrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmrecording` |
| `msdyn_pmrecording_DuplicateMatchingRecord` | [msdyn_pmrecording](msdyn_pmrecording.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmrecording` |
| `msdyn_pmrecording_DuplicateBaseRecord` | [msdyn_pmrecording](msdyn_pmrecording.md) | `baserecordid` | `baserecordid_msdyn_pmrecording` |
| `msdyn_pmrecording_AsyncOperations` | [msdyn_pmrecording](msdyn_pmrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmrecording` |
| `msdyn_pmrecording_MailboxTrackingFolders` | [msdyn_pmrecording](msdyn_pmrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmrecording` |
| `msdyn_pmrecording_UserEntityInstanceDatas` | [msdyn_pmrecording](msdyn_pmrecording.md) | `objectid` | `objectid_msdyn_pmrecording` |
| `msdyn_pmrecording_ProcessSession` | [msdyn_pmrecording](msdyn_pmrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmrecording` |
| `msdyn_pmrecording_BulkDeleteFailures` | [msdyn_pmrecording](msdyn_pmrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmrecording` |
| `msdyn_pmrecording_PrincipalObjectAttributeAccesses` | [msdyn_pmrecording](msdyn_pmrecording.md) | `objectid` | `objectid_msdyn_pmrecording` |


## Source

Generated from [msdyn_pmrecording (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmrecording')) on 2026-05-07.