---
logical: "msdyn_dmsrequest"
display: "Richiesta servizio di spostamento dati"
entitySetName: "msdyn_dmsrequests"
primaryId: "msdyn_dmsrequestid"
primaryName: "msdyn_requestuniquename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Richiesta servizio di spostamento dati

Tabella per le richieste del servizio di spostamento dati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dmsrequest` |
| Display name | Richiesta servizio di spostamento dati |
| Display (plural) | Richieste servizio di spostamento dati |
| Schema name | `msdyn_dmsrequest` |
| Entity set (Web API) | `msdyn_dmsrequests` |
| Primary id attribute | `msdyn_dmsrequestid` |
| Primary name attribute | `msdyn_requestuniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dmsrequests?$select=msdyn_requestuniquename&$top=10
GET /api/data/v9.2/msdyn_dmsrequests(<guid>)
POST /api/data/v9.2/msdyn_dmsrequests
PATCH /api/data/v9.2/msdyn_dmsrequests(<guid>)
DELETE /api/data/v9.2/msdyn_dmsrequests(<guid>)
```

## Attributes

Writable: **21** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_additionalproperties`, `msdyn_cdmentityinformation`, `msdyn_cdmtodataverseentitymapping`, `msdyn_correlationid`, `msdyn_datalakefoldername`, `msdyn_dataverseentityinformation`, `msdyn_dmsrequestid`, `msdyn_modeljsonpath`, `msdyn_requestparameters`, `msdyn_requesttype`, `msdyn_requestuniquename`, `msdyn_userobjectid`, `msdyn_usertenantid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dmsrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dmsrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dmsrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dmsrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dmsrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dmsrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dmsrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dmsrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dmsrequest_SyncErrors` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequest` |
| `msdyn_dmsrequest_DuplicateMatchingRecord` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dmsrequest` |
| `msdyn_dmsrequest_DuplicateBaseRecord` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `baserecordid` | `baserecordid_msdyn_dmsrequest` |
| `msdyn_dmsrequest_AsyncOperations` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequest` |
| `msdyn_dmsrequest_MailboxTrackingFolders` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequest` |
| `msdyn_dmsrequest_UserEntityInstanceDatas` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `objectid` | `objectid_msdyn_dmsrequest` |
| `msdyn_dmsrequest_ProcessSession` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequest` |
| `msdyn_dmsrequest_BulkDeleteFailures` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequest` |
| `msdyn_dmsrequest_PrincipalObjectAttributeAccesses` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `objectid` | `objectid_msdyn_dmsrequest` |
| `msdyn_uploadrequest_jobstatus` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `msdyn_lookupfield_uploadrequest` | `msdyn_lookupfield_uploadrequest` |


## Source

Generated from [msdyn_dmsrequest (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dmsrequest')) on 2026-05-07.