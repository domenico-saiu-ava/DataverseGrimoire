---
logical: "msdyn_pmview"
display: "Visualizzazione mining di processo"
entitySetName: "msdyn_pmviews"
primaryId: "msdyn_pmviewid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Visualizzazione mining di processo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmview` |
| Display name | Visualizzazione mining di processo |
| Display (plural) | Visualizzazioni mining di processo |
| Schema name | `msdyn_pmview` |
| Entity set (Web API) | `msdyn_pmviews` |
| Primary id attribute | `msdyn_pmviewid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmviews?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmviews(<guid>)
POST /api/data/v9.2/msdyn_pmviews
PATCH /api/data/v9.2/msdyn_pmviews(<guid>)
DELETE /api/data/v9.2/msdyn_pmviews(<guid>)
```

## Attributes

Writable: **18** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_configuration`, `msdyn_isprivate`, `msdyn_name`, `msdyn_outputdata`, `msdyn_parentpmviewid`, `msdyn_pmcalendarversionid`, `msdyn_pmprocessextendedmetadataversionid`, `msdyn_pmprocessversionid`, `msdyn_pmviewid`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmview_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmview_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmview_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmview_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmview` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmview` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmview` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmview` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_pmcalendarversion_msdyn_pmview` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `msdyn_pmcalendarversionid` | `msdyn_pmcalendarversionid` |
| `msdyn_pmprocessextendedmetadataversion_msdyn_vi` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `msdyn_pmprocessextendedmetadataversionid` | `msdyn_pmprocessextendedmetadataversionid` |
| `msdyn_pmprocessversion_msdyn_pmview` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `msdyn_pmprocessversionid` | `msdyn_pmprocessversionid` |
| `msdyn_pmview_msdyn_pmview` | [msdyn_pmview](msdyn_pmview.md) | `msdyn_parentpmviewid` | `msdyn_parentpmviewid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmtab_pmviewid_msdyn_pmview` | [msdyn_pmview](msdyn_pmview.md) | `msdyn_pmviewid` | `msdyn_pmviewId` |
| `msdyn_pmview_SyncErrors` | [msdyn_pmview](msdyn_pmview.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmview` |
| `msdyn_pmview_DuplicateMatchingRecord` | [msdyn_pmview](msdyn_pmview.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmview` |
| `msdyn_pmview_DuplicateBaseRecord` | [msdyn_pmview](msdyn_pmview.md) | `baserecordid` | `baserecordid_msdyn_pmview` |
| `msdyn_pmview_AsyncOperations` | [msdyn_pmview](msdyn_pmview.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmview` |
| `msdyn_pmview_MailboxTrackingFolders` | [msdyn_pmview](msdyn_pmview.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmview` |
| `msdyn_pmview_UserEntityInstanceDatas` | [msdyn_pmview](msdyn_pmview.md) | `objectid` | `objectid_msdyn_pmview` |
| `msdyn_pmview_ProcessSession` | [msdyn_pmview](msdyn_pmview.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmview` |
| `msdyn_pmview_BulkDeleteFailures` | [msdyn_pmview](msdyn_pmview.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmview` |
| `msdyn_pmview_PrincipalObjectAttributeAccesses` | [msdyn_pmview](msdyn_pmview.md) | `objectid` | `objectid_msdyn_pmview` |
| `msdyn_pmview_msdyn_pmview` | [msdyn_pmview](msdyn_pmview.md) | `msdyn_parentpmviewid` | `msdyn_parentpmviewid` |
| `msdyn_pmsimulation_pmviewid_msdyn_pmview` | [msdyn_pmview](msdyn_pmview.md) | `msdyn_pmviewid` | `msdyn_pmviewid` |


## Source

Generated from [msdyn_pmview (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmview')) on 2026-05-07.