---
logical: "msdyn_sessiontemplate"
display: "Modello di sessione"
entitySetName: "msdyn_sessiontemplates"
primaryId: "msdyn_sessiontemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di sessione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessiontemplate` |
| Display name | Modello di sessione |
| Display (plural) | Modelli di sessione |
| Schema name | `msdyn_sessiontemplate` |
| Entity set (Web API) | `msdyn_sessiontemplates` |
| Primary id attribute | `msdyn_sessiontemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sessiontemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sessiontemplates(<guid>)
POST /api/data/v9.2/msdyn_sessiontemplates
PATCH /api/data/v9.2/msdyn_sessiontemplates(<guid>)
DELETE /api/data/v9.2/msdyn_sessiontemplates(<guid>)
```

## Attributes

Writable: **22** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_anchortab`, `msdyn_description`, `msdyn_enablebuildexpression`, `msdyn_enabletitlesync`, `msdyn_entity`, `msdyn_expressiondata`, `msdyn_name`, `msdyn_panelstate`, `msdyn_sessionicon`, `msdyn_sessiontemplateid`, `msdyn_sessiontype`, `msdyn_title`, `msdyn_type`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sessiontemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sessiontemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sessiontemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sessiontemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sessiontemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sessiontemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sessiontemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sessiontemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_applicationtabtemplate_sessiontemplate_anchortab` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `msdyn_anchortab` | `msdyn_anchortab` |
| `msdyn_webresource_sessiontemplate_sessionicon` | [webresource](webresource.md) | `msdyn_sessionicon` | `msdyn_sessionicon` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessiontemplate_SyncErrors` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessiontemplate` |
| `msdyn_sessiontemplate_DuplicateMatchingRecord` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sessiontemplate` |
| `msdyn_sessiontemplate_DuplicateBaseRecord` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | `baserecordid` | `baserecordid_msdyn_sessiontemplate` |
| `msdyn_sessiontemplate_AsyncOperations` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessiontemplate` |
| `msdyn_sessiontemplate_MailboxTrackingFolders` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessiontemplate` |
| `msdyn_sessiontemplate_UserEntityInstanceDatas` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | `objectid` | `objectid_msdyn_sessiontemplate` |
| `msdyn_sessiontemplate_ProcessSession` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessiontemplate` |
| `msdyn_sessiontemplate_BulkDeleteFailures` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessiontemplate` |
| `msdyn_sessiontemplate_PrincipalObjectAttributeAccesses` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | `objectid` | `objectid_msdyn_sessiontemplate` |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessiontemplate_applicationtab` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | _n/a_ | `msdyn_sessiontemplate_applicationtab` |
| `msdyn_appconfiguration_sessiontemplate` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | _n/a_ | `msdyn_appconfiguration_sessiontemplate` |
| `msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | _n/a_ | `msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat` |

## Source

Generated from [msdyn_sessiontemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sessiontemplate')) on 2026-05-07.