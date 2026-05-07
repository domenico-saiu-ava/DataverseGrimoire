---
logical: "msdyn_applicationtabtemplate"
display: "Modello scheda applicazione"
entitySetName: "msdyn_applicationtabtemplates"
primaryId: "msdyn_applicationtabtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello scheda applicazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_applicationtabtemplate` |
| Display name | Modello scheda applicazione |
| Display (plural) | Modelli di scheda applicazione |
| Schema name | `msdyn_applicationtabtemplate` |
| Entity set (Web API) | `msdyn_applicationtabtemplates` |
| Primary id attribute | `msdyn_applicationtabtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_applicationtabtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_applicationtabtemplates(<guid>)
POST /api/data/v9.2/msdyn_applicationtabtemplates
PATCH /api/data/v9.2/msdyn_applicationtabtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_applicationtabtemplates(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_applicationtabtemplateid`, `msdyn_description`, `msdyn_name`, `msdyn_pagetype`, `msdyn_pinned`, `msdyn_templateparameters`, `msdyn_title`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_applicationtabtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_applicationtabtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_applicationtabtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_applicationtabtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_applicationtabtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_applicationtabtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_applicationtabtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_applicationtabtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_applicationtabtemplate_SyncErrors` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_applicationtabtemplate` |
| `msdyn_applicationtabtemplate_DuplicateMatchingRecord` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_applicationtabtemplate` |
| `msdyn_applicationtabtemplate_DuplicateBaseRecord` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `baserecordid` | `baserecordid_msdyn_applicationtabtemplate` |
| `msdyn_applicationtabtemplate_AsyncOperations` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_applicationtabtemplate` |
| `msdyn_applicationtabtemplate_MailboxTrackingFolders` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_applicationtabtemplate` |
| `msdyn_applicationtabtemplate_UserEntityInstanceDatas` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `objectid` | `objectid_msdyn_applicationtabtemplate` |
| `msdyn_applicationtabtemplate_ProcessSession` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_applicationtabtemplate` |
| `msdyn_applicationtabtemplate_BulkDeleteFailures` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_applicationtabtemplate` |
| `msdyn_applicationtabtemplate_PrincipalObjectAttributeAccesses` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `objectid` | `objectid_msdyn_applicationtabtemplate` |
| `msdyn_applicationtabtemplate_sessiontemplate_anchortab` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `msdyn_anchortab` | `msdyn_anchortab` |
| `msdyn_applicationtabtemplate_templateparameter` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `msdyn_applicationtabtemplateid` | `msdyn_applicationtabtemplateid` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessiontemplate_applicationtab` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | _n/a_ | `msdyn_sessiontemplate_applicationtab` |

## Source

Generated from [msdyn_applicationtabtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_applicationtabtemplate')) on 2026-05-07.