---
logical: "msdyn_schedulingparameter"
display: "Parametro di pianificazione"
entitySetName: "msdyn_schedulingparameters"
primaryId: "msdyn_schedulingparameterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Parametro di pianificazione

Parametri di pianificazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_schedulingparameter` |
| Display name | Parametro di pianificazione |
| Display (plural) | Parametri di pianificazione |
| Schema name | `msdyn_schedulingparameter` |
| Entity set (Web API) | `msdyn_schedulingparameters` |
| Primary id attribute | `msdyn_schedulingparameterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_schedulingparameters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_schedulingparameters(<guid>)
POST /api/data/v9.2/msdyn_schedulingparameters
PATCH /api/data/v9.2/msdyn_schedulingparameters(<guid>)
DELETE /api/data/v9.2/msdyn_schedulingparameters(<guid>)
```

## Attributes

Writable: **31** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_advancedsettings`, `msdyn_autoupdatebookingtravel`, `msdyn_backgroundjobsconfiguration`, `msdyn_connecttomaps`, `msdyn_customgeolatitudefield`, `msdyn_customgeolocationentity`, `msdyn_customgeolongitudefield`, `msdyn_customgeoresourcefield`, `msdyn_customgeotimestampfield`, `msdyn_defaultradiusunit`, `msdyn_defaultradiusvalue`, `msdyn_disablesanitizinghtmltemplates`, `msdyn_enableappointments`, `msdyn_enablecustomgeolocation`, `msdyn_enableoptimizer`, `msdyn_enableoutlookschedules`, `msdyn_enablesuggestschedule`, `msdyn_geolocationexpiresafterxminutes`, `msdyn_geolocationrefreshintervalseconds`, `msdyn_internalflag`, `msdyn_mapapikey`, `msdyn_name`, `msdyn_saautofilterserviceterritory`, `msdyn_scheduleboardrefreshintervalseconds`, `msdyn_schedulingparameterid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_schedulingparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_schedulingparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_schedulingparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_schedulingparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_schedulingparameter` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_schedulingparameter_SyncErrors` | [msdyn_schedulingparameter](msdyn_schedulingparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingparameter` |
| `msdyn_schedulingparameter_AsyncOperations` | [msdyn_schedulingparameter](msdyn_schedulingparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingparameter` |
| `msdyn_schedulingparameter_MailboxTrackingFolders` | [msdyn_schedulingparameter](msdyn_schedulingparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingparameter` |
| `msdyn_schedulingparameter_UserEntityInstanceDatas` | [msdyn_schedulingparameter](msdyn_schedulingparameter.md) | `objectid` | `objectid_msdyn_schedulingparameter` |
| `msdyn_schedulingparameter_ProcessSession` | [msdyn_schedulingparameter](msdyn_schedulingparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingparameter` |
| `msdyn_schedulingparameter_BulkDeleteFailures` | [msdyn_schedulingparameter](msdyn_schedulingparameter.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedulingparameter` |
| `msdyn_schedulingparameter_PrincipalObjectAttributeAccesses` | [msdyn_schedulingparameter](msdyn_schedulingparameter.md) | `objectid` | `objectid_msdyn_schedulingparameter` |


## Source

Generated from [msdyn_schedulingparameter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_schedulingparameter')) on 2026-05-07.