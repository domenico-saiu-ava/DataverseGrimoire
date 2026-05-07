---
logical: "msdyn_scheduleboardsetting"
display: "Impostazione scheda di pianificazione"
entitySetName: "msdyn_scheduleboardsettinges"
primaryId: "msdyn_scheduleboardsettingid"
primaryName: "msdyn_tabname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione scheda di pianificazione

Per archiviare le impostazioni della scheda di pianificazione per utente e schede

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_scheduleboardsetting` |
| Display name | Impostazione scheda di pianificazione |
| Display (plural) | Impostazioni scheda di pianificazione |
| Schema name | `msdyn_scheduleboardsetting` |
| Entity set (Web API) | `msdyn_scheduleboardsettinges` |
| Primary id attribute | `msdyn_scheduleboardsettingid` |
| Primary name attribute | `msdyn_tabname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_scheduleboardsettinges?$select=msdyn_tabname&$top=10
GET /api/data/v9.2/msdyn_scheduleboardsettinges(<guid>)
POST /api/data/v9.2/msdyn_scheduleboardsettinges
PATCH /api/data/v9.2/msdyn_scheduleboardsettinges(<guid>)
DELETE /api/data/v9.2/msdyn_scheduleboardsettinges(<guid>)
```

## Attributes

Writable: **44** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bookbasedon`, `msdyn_customtabname`, `msdyn_customtabwebresource`, `msdyn_filterlayout`, `msdyn_filtervalues`, `msdyn_fullybookedcolor`, `msdyn_hidecancelled`, `msdyn_ispublic`, `msdyn_issynchronizeresources`, `msdyn_mapviewtabplacement`, `msdyn_notbookedcolor`, `msdyn_ordernumber`, `msdyn_organizationalunittooltipsviewid`, `msdyn_organizationalunitviewid`, `msdyn_overbookedcolor`, `msdyn_partiallybookedcolor`, `msdyn_resourcecelltemplate`, `msdyn_retrieveresourcesquery`, `msdyn_saavailablecolor`, `msdyn_saavailableicon`, `msdyn_saavailableicondefault`, `msdyn_sapartiallyavailablecolor`, `msdyn_sapartiallyavailableicon`, `msdyn_sapartiallyavailableicondefault`, `msdyn_saunavailablecolor`, `msdyn_saunavailableicon`, `msdyn_saunavailableicondefault`, `msdyn_scheduleboardsettingid`, `msdyn_scheduleralertsview`, `msdyn_schedulerresourcedetailsview`, `msdyn_schedulerresourcetooltipview`, `msdyn_settings`, `msdyn_sharetype`, `msdyn_tabname`, `msdyn_unscheduledrequirementsviewid`, `msdyn_unscheduledwopagereccount`, `msdyn_workinghourscolor`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_scheduleboardsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_scheduleboardsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_scheduleboardsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_scheduleboardsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_scheduleboardsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_scheduleboardsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_scheduleboardsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_scheduleboardsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_configuration_msdyn_scheduleboardsetting_FilterLayout` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_filterlayout` | `msdyn_FilterLayout` |
| `msdyn_msdyn_configuration_msdyn_scheduleboardsetting_ResourceCellTemplate` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_resourcecelltemplate` | `msdyn_ResourceCellTemplate` |
| `msdyn_msdyn_configuration_msdyn_scheduleboardsetting_RetrieveResourcesQuery` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_retrieveresourcesquery` | `msdyn_RetrieveResourcesQuery` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_scheduleboardsetting_SyncErrors` | [msdyn_scheduleboardsetting](msdyn_scheduleboardsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_scheduleboardsetting` |
| `msdyn_scheduleboardsetting_DuplicateMatchingRecord` | [msdyn_scheduleboardsetting](msdyn_scheduleboardsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_scheduleboardsetting` |
| `msdyn_scheduleboardsetting_DuplicateBaseRecord` | [msdyn_scheduleboardsetting](msdyn_scheduleboardsetting.md) | `baserecordid` | `baserecordid_msdyn_scheduleboardsetting` |
| `msdyn_scheduleboardsetting_AsyncOperations` | [msdyn_scheduleboardsetting](msdyn_scheduleboardsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_scheduleboardsetting` |
| `msdyn_scheduleboardsetting_MailboxTrackingFolders` | [msdyn_scheduleboardsetting](msdyn_scheduleboardsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_scheduleboardsetting` |
| `msdyn_scheduleboardsetting_UserEntityInstanceDatas` | [msdyn_scheduleboardsetting](msdyn_scheduleboardsetting.md) | `objectid` | `objectid_msdyn_scheduleboardsetting` |
| `msdyn_scheduleboardsetting_ProcessSession` | [msdyn_scheduleboardsetting](msdyn_scheduleboardsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_scheduleboardsetting` |
| `msdyn_scheduleboardsetting_BulkDeleteFailures` | [msdyn_scheduleboardsetting](msdyn_scheduleboardsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_scheduleboardsetting` |
| `msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses` | [msdyn_scheduleboardsetting](msdyn_scheduleboardsetting.md) | `objectid` | `objectid_msdyn_scheduleboardsetting` |
| `msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid` | [msdyn_scheduleboardsetting](msdyn_scheduleboardsetting.md) | `msdyn_scheduleboardsettingid` | `msdyn_scheduleboardsettingid` |


## Source

Generated from [msdyn_scheduleboardsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_scheduleboardsetting')) on 2026-05-07.