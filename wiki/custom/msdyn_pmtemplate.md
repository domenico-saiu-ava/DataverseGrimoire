---
logical: "msdyn_pmtemplate"
display: "Modello mining di processo"
entitySetName: "msdyn_pmtemplates"
primaryId: "msdyn_pmtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello mining di processo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmtemplate` |
| Display name | Modello mining di processo |
| Display (plural) | Modelli mining di processo |
| Schema name | `msdyn_pmtemplate` |
| Entity set (Web API) | `msdyn_pmtemplates` |
| Primary id attribute | `msdyn_pmtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmtemplates(<guid>)
POST /api/data/v9.2/msdyn_pmtemplates
PATCH /api/data/v9.2/msdyn_pmtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_pmtemplates(<guid>)
```

## Attributes

Writable: **24** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_author`, `msdyn_category`, `msdyn_configuration`, `msdyn_description`, `msdyn_icon`, `msdyn_iconname`, `msdyn_isprivatetemplate`, `msdyn_locale`, `msdyn_mashupscript`, `msdyn_name`, `msdyn_pmtemplateid`, `msdyn_subcategory`, `msdyn_templategroupid`, `msdyn_templateversion`, `msdyn_type`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmtemplate_SyncErrors` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtemplate` |
| `msdyn_pmtemplate_DuplicateMatchingRecord` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmtemplate` |
| `msdyn_pmtemplate_DuplicateBaseRecord` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `baserecordid` | `baserecordid_msdyn_pmtemplate` |
| `msdyn_pmtemplate_AsyncOperations` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtemplate` |
| `msdyn_pmtemplate_MailboxTrackingFolders` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtemplate` |
| `msdyn_pmtemplate_UserEntityInstanceDatas` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `objectid` | `objectid_msdyn_pmtemplate` |
| `msdyn_pmtemplate_ProcessSession` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtemplate` |
| `msdyn_pmtemplate_BulkDeleteFailures` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtemplate` |
| `msdyn_pmtemplate_PrincipalObjectAttributeAccesses` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `objectid` | `objectid_msdyn_pmtemplate` |


## Source

Generated from [msdyn_pmtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmtemplate')) on 2026-05-07.