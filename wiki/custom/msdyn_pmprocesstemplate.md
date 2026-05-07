---
logical: "msdyn_pmprocesstemplate"
display: "Modello di processo PM"
entitySetName: "msdyn_pmprocesstemplates"
primaryId: "msdyn_pmprocesstemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di processo PM

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmprocesstemplate` |
| Display name | Modello di processo PM |
| Display (plural) | Modelli di processo PM |
| Schema name | `msdyn_pmprocesstemplate` |
| Entity set (Web API) | `msdyn_pmprocesstemplates` |
| Primary id attribute | `msdyn_pmprocesstemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmprocesstemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmprocesstemplates(<guid>)
POST /api/data/v9.2/msdyn_pmprocesstemplates
PATCH /api/data/v9.2/msdyn_pmprocesstemplates(<guid>)
DELETE /api/data/v9.2/msdyn_pmprocesstemplates(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_pminferredtaskid`, `msdyn_pmprocesstemplateid`, `msdyn_processdataflowconfig`, `msdyn_processmashupscript`, `msdyn_processminingmetadataconfig`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmprocesstemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmprocesstemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmprocesstemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmprocesstemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmprocesstemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmprocesstemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmprocesstemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmprocesstemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_pminferredtask_msdyn_pmprocesstemplate_pmnferredtaskid` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_pminferredtaskid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmprocesstemplate_SyncErrors` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocesstemplate_DuplicateMatchingRecord` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocesstemplate_DuplicateBaseRecord` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `baserecordid` | `baserecordid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocesstemplate_AsyncOperations` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocesstemplate_MailboxTrackingFolders` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocesstemplate_UserEntityInstanceDatas` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `objectid` | `objectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocesstemplate_ProcessSession` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocesstemplate_BulkDeleteFailures` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocesstemplate_PrincipalObjectAttributeAccesses` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `objectid` | `objectid_msdyn_pmprocesstemplate` |


## Source

Generated from [msdyn_pmprocesstemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmprocesstemplate')) on 2026-05-07.