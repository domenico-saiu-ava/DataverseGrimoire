---
logical: "msdyn_dmsrequeststatus"
display: "Stato della richiesta del servizio di spostamento dati"
entitySetName: "msdyn_dmsrequeststatuses"
primaryId: "msdyn_dmsrequeststatusid"
primaryName: "msdyn_jobuniquename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato della richiesta del servizio di spostamento dati

Tabella per lo stato delle richieste del servizio di spostamento dati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dmsrequeststatus` |
| Display name | Stato della richiesta del servizio di spostamento dati |
| Display (plural) | Stati richieste servizio di spostamento dati |
| Schema name | `msdyn_dmsrequeststatus` |
| Entity set (Web API) | `msdyn_dmsrequeststatuses` |
| Primary id attribute | `msdyn_dmsrequeststatusid` |
| Primary name attribute | `msdyn_jobuniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dmsrequeststatuses?$select=msdyn_jobuniquename&$top=10
GET /api/data/v9.2/msdyn_dmsrequeststatuses(<guid>)
POST /api/data/v9.2/msdyn_dmsrequeststatuses
PATCH /api/data/v9.2/msdyn_dmsrequeststatuses(<guid>)
DELETE /api/data/v9.2/msdyn_dmsrequeststatuses(<guid>)
```

## Attributes

Writable: **18** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataflowid`, `msdyn_dataflowjobid`, `msdyn_dmsrequeststatusid`, `msdyn_errordetails`, `msdyn_jobuniquename`, `msdyn_lookupfield_uploadrequest`, `msdyn_uploadendtime`, `msdyn_uploadstarttime`, `msdyn_uploadstatus`, `msdyn_uploadstatusdetails`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dmsrequeststatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dmsrequeststatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dmsrequeststatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dmsrequeststatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dmsrequeststatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dmsrequeststatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dmsrequeststatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dmsrequeststatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_uploadrequest_jobstatus` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `msdyn_lookupfield_uploadrequest` | `msdyn_lookupfield_uploadrequest` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dmsrequeststatus_SyncErrors` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequeststatus` |
| `msdyn_dmsrequeststatus_DuplicateMatchingRecord` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dmsrequeststatus` |
| `msdyn_dmsrequeststatus_DuplicateBaseRecord` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `baserecordid` | `baserecordid_msdyn_dmsrequeststatus` |
| `msdyn_dmsrequeststatus_AsyncOperations` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequeststatus` |
| `msdyn_dmsrequeststatus_MailboxTrackingFolders` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequeststatus` |
| `msdyn_dmsrequeststatus_UserEntityInstanceDatas` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `objectid` | `objectid_msdyn_dmsrequeststatus` |
| `msdyn_dmsrequeststatus_ProcessSession` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequeststatus` |
| `msdyn_dmsrequeststatus_BulkDeleteFailures` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequeststatus` |
| `msdyn_dmsrequeststatus_PrincipalObjectAttributeAccesses` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `objectid` | `objectid_msdyn_dmsrequeststatus` |


## Source

Generated from [msdyn_dmsrequeststatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dmsrequeststatus')) on 2026-05-07.