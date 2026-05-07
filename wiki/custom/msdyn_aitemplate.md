---
logical: "msdyn_aitemplate"
display: "AI Template"
entitySetName: "msdyn_aitemplates"
primaryId: "msdyn_aitemplateid"
primaryName: "msdyn_uniquename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitemplate` |
| Display name | AI Template |
| Display (plural) | AI Templates |
| Schema name | `msdyn_AITemplate` |
| Entity set (Web API) | `msdyn_aitemplates` |
| Primary id attribute | `msdyn_aitemplateid` |
| Primary name attribute | `msdyn_uniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitemplates?$select=msdyn_uniquename&$top=10
GET /api/data/v9.2/msdyn_aitemplates(<guid>)
POST /api/data/v9.2/msdyn_aitemplates
PATCH /api/data/v9.2/msdyn_aitemplates(<guid>)
DELETE /api/data/v9.2/msdyn_aitemplates(<guid>)
```

## Attributes

Writable: **22** · Read-only: **16**

### Writable

`importsequencenumber`, `introducedversion`, `iscustomizable`, `msdyn_aitemplateid`, `msdyn_databinding`, `msdyn_defaultrunschedulingoptions`, `msdyn_istrainable`, `msdyn_modelaction`, `msdyn_resourceinfo`, `msdyn_runconfigschema`, `msdyn_rundataspecification`, `msdyn_templateversion`, `msdyn_trainingconfigschema`, `msdyn_trainingdataspecification`, `msdyn_uniquename`, `msdyn_uxconfiguration`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_aitemplateidunique`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aitemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aitemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aitemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aitemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aitemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitemplate_SyncErrors` | [msdyn_aitemplate](msdyn_aitemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitemplate` |
| `msdyn_aitemplate_AsyncOperations` | [msdyn_aitemplate](msdyn_aitemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitemplate` |
| `msdyn_aitemplate_MailboxTrackingFolders` | [msdyn_aitemplate](msdyn_aitemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitemplate` |
| `msdyn_aitemplate_UserEntityInstanceDatas` | [msdyn_aitemplate](msdyn_aitemplate.md) | `objectid` | `objectid_msdyn_aitemplate` |
| `msdyn_aitemplate_ProcessSession` | [msdyn_aitemplate](msdyn_aitemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitemplate` |
| `msdyn_aitemplate_BulkDeleteFailures` | [msdyn_aitemplate](msdyn_aitemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitemplate` |
| `msdyn_aitemplate_PrincipalObjectAttributeAccesses` | [msdyn_aitemplate](msdyn_aitemplate.md) | `objectid` | `objectid_msdyn_aitemplate` |
| `msdyn_aitemplate_msdyn_aimodel` | [msdyn_aitemplate](msdyn_aitemplate.md) | `msdyn_templateid` | `msdyn_TemplateId` |


## Source

Generated from [msdyn_aitemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aitemplate')) on 2026-05-07.