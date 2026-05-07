---
logical: "msdyn_salesocsmstemplate"
display: "Modello di SMS"
entitySetName: "msdyn_salesocsmstemplates"
primaryId: "msdyn_salesocsmstemplateid"
primaryName: "msdyn_title"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di SMS

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesocsmstemplate` |
| Display name | Modello di SMS |
| Display (plural) | Modelli di SMS |
| Schema name | `msdyn_salesocsmstemplate` |
| Entity set (Web API) | `msdyn_salesocsmstemplates` |
| Primary id attribute | `msdyn_salesocsmstemplateid` |
| Primary name attribute | `msdyn_title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesocsmstemplates?$select=msdyn_title&$top=10
GET /api/data/v9.2/msdyn_salesocsmstemplates(<guid>)
POST /api/data/v9.2/msdyn_salesocsmstemplates
PATCH /api/data/v9.2/msdyn_salesocsmstemplates(<guid>)
DELETE /api/data/v9.2/msdyn_salesocsmstemplates(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_category`, `msdyn_language`, `msdyn_placeholders`, `msdyn_salesocsmstemplateid`, `msdyn_templatetext`, `msdyn_title`, `msdyn_viewableby`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesocsmstemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesocsmstemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesocsmstemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesocsmstemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesocsmstemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesocsmstemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesocsmstemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesocsmstemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesocsmstemplate_SyncErrors` | [msdyn_salesocsmstemplate](msdyn_salesocsmstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesocsmstemplate` |
| `msdyn_salesocsmstemplate_DuplicateMatchingRecord` | [msdyn_salesocsmstemplate](msdyn_salesocsmstemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salesocsmstemplate` |
| `msdyn_salesocsmstemplate_DuplicateBaseRecord` | [msdyn_salesocsmstemplate](msdyn_salesocsmstemplate.md) | `baserecordid` | `baserecordid_msdyn_salesocsmstemplate` |
| `msdyn_salesocsmstemplate_AsyncOperations` | [msdyn_salesocsmstemplate](msdyn_salesocsmstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesocsmstemplate` |
| `msdyn_salesocsmstemplate_MailboxTrackingFolders` | [msdyn_salesocsmstemplate](msdyn_salesocsmstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesocsmstemplate` |
| `msdyn_salesocsmstemplate_UserEntityInstanceDatas` | [msdyn_salesocsmstemplate](msdyn_salesocsmstemplate.md) | `objectid` | `objectid_msdyn_salesocsmstemplate` |
| `msdyn_salesocsmstemplate_ProcessSession` | [msdyn_salesocsmstemplate](msdyn_salesocsmstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesocsmstemplate` |
| `msdyn_salesocsmstemplate_BulkDeleteFailures` | [msdyn_salesocsmstemplate](msdyn_salesocsmstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesocsmstemplate` |
| `msdyn_salesocsmstemplate_PrincipalObjectAttributeAccesses` | [msdyn_salesocsmstemplate](msdyn_salesocsmstemplate.md) | `objectid` | `objectid_msdyn_salesocsmstemplate` |


## Source

Generated from [msdyn_salesocsmstemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesocsmstemplate')) on 2026-05-07.