---
logical: "msdyn_wemreporttemplate"
display: "Modello di report WEM"
entitySetName: "msdyn_wemreporttemplates"
primaryId: "msdyn_wemreporttemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di report WEM

Entità modello per il report WEM.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wemreporttemplate` |
| Display name | Modello di report WEM |
| Display (plural) | Entità modello per il report WEM. |
| Schema name | `msdyn_wemreporttemplate` |
| Entity set (Web API) | `msdyn_wemreporttemplates` |
| Primary id attribute | `msdyn_wemreporttemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wemreporttemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wemreporttemplates(<guid>)
POST /api/data/v9.2/msdyn_wemreporttemplates
PATCH /api/data/v9.2/msdyn_wemreporttemplates(<guid>)
DELETE /api/data/v9.2/msdyn_wemreporttemplates(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_mefjobmodulename`, `msdyn_mefjobmoduleversion`, `msdyn_name`, `msdyn_reportname`, `msdyn_reporttemplatemetadata`, `msdyn_reportversion`, `msdyn_type`, `msdyn_wemreporttemplateid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_wemreporttemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wemreporttemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wemreporttemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wemreporttemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wemreporttemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wemreporttemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wemreporttemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wemreporttemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemreporttemplate_msdyn_wemreport_wemreporttemplate` | [msdyn_wemreporttemplate](msdyn_wemreporttemplate.md) | `msdyn_wemreporttemplate` | `msdyn_wemreporttemplate` |
| `msdyn_wemreporttemplate_SyncErrors` | [msdyn_wemreporttemplate](msdyn_wemreporttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemreporttemplate` |
| `msdyn_wemreporttemplate_AsyncOperations` | [msdyn_wemreporttemplate](msdyn_wemreporttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemreporttemplate` |
| `msdyn_wemreporttemplate_MailboxTrackingFolders` | [msdyn_wemreporttemplate](msdyn_wemreporttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemreporttemplate` |
| `msdyn_wemreporttemplate_UserEntityInstanceDatas` | [msdyn_wemreporttemplate](msdyn_wemreporttemplate.md) | `objectid` | `objectid_msdyn_wemreporttemplate` |
| `msdyn_wemreporttemplate_ProcessSession` | [msdyn_wemreporttemplate](msdyn_wemreporttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemreporttemplate` |
| `msdyn_wemreporttemplate_BulkDeleteFailures` | [msdyn_wemreporttemplate](msdyn_wemreporttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemreporttemplate` |
| `msdyn_wemreporttemplate_PrincipalObjectAttributeAccesses` | [msdyn_wemreporttemplate](msdyn_wemreporttemplate.md) | `objectid` | `objectid_msdyn_wemreporttemplate` |
| `msdyn_wemreporttemplate_DuplicateMatchingRecord` | [msdyn_wemreporttemplate](msdyn_wemreporttemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_wemreporttemplate` |
| `msdyn_wemreporttemplate_DuplicateBaseRecord` | [msdyn_wemreporttemplate](msdyn_wemreporttemplate.md) | `baserecordid` | `baserecordid_msdyn_wemreporttemplate` |


## Source

Generated from [msdyn_wemreporttemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wemreporttemplate')) on 2026-05-07.