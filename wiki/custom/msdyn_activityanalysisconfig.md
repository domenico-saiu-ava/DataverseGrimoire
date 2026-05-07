---
logical: "msdyn_activityanalysisconfig"
display: "Configurazione Analisi relazione"
entitySetName: "msdyn_activityanalysisconfigs"
primaryId: "msdyn_activityanalysisconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione Analisi relazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_activityanalysisconfig` |
| Display name | Configurazione Analisi relazione |
| Display (plural) | RelationshipAnalysisConfigs |
| Schema name | `msdyn_activityanalysisconfig` |
| Entity set (Web API) | `msdyn_activityanalysisconfigs` |
| Primary id attribute | `msdyn_activityanalysisconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_activityanalysisconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_activityanalysisconfigs(<guid>)
POST /api/data/v9.2/msdyn_activityanalysisconfigs
PATCH /api/data/v9.2/msdyn_activityanalysisconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_activityanalysisconfigs(<guid>)
```

## Attributes

Writable: **28** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_activityanalysisconfigid`, `msdyn_communicationfrequency`, `msdyn_currentstatus`, `msdyn_datasource`, `msdyn_emailweight`, `msdyn_exchangemarsstatus`, `msdyn_healthfeaturestatus`, `msdyn_ignoreexchangeoptincheck`, `msdyn_inmailweight`, `msdyn_isaprilpreviewenabled`, `msdyn_islinkedinenabled`, `msdyn_isorgsettingenable`, `msdyn_linkedinstatus`, `msdyn_meetingweight`, `msdyn_name`, `msdyn_oneclickactivityanalysisprovisioning`, `msdyn_orgtypesuffix`, `msdyn_otheractivites`, `msdyn_overflowentitylist`, `msdyn_phonecallweight`, `msdyn_taskweight`, `msdyn_timelineactivites`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_activityanalysisconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_activityanalysisconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_activityanalysisconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_activityanalysisconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_activityanalysisconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_activityanalysisconfig_SyncErrors` | [msdyn_activityanalysisconfig](msdyn_activityanalysisconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_activityanalysisconfig` |
| `msdyn_activityanalysisconfig_AsyncOperations` | [msdyn_activityanalysisconfig](msdyn_activityanalysisconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_activityanalysisconfig` |
| `msdyn_activityanalysisconfig_MailboxTrackingFolders` | [msdyn_activityanalysisconfig](msdyn_activityanalysisconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_activityanalysisconfig` |
| `msdyn_activityanalysisconfig_UserEntityInstanceDatas` | [msdyn_activityanalysisconfig](msdyn_activityanalysisconfig.md) | `objectid` | `objectid_msdyn_activityanalysisconfig` |
| `msdyn_activityanalysisconfig_ProcessSession` | [msdyn_activityanalysisconfig](msdyn_activityanalysisconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_activityanalysisconfig` |
| `msdyn_activityanalysisconfig_BulkDeleteFailures` | [msdyn_activityanalysisconfig](msdyn_activityanalysisconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_activityanalysisconfig` |
| `msdyn_activityanalysisconfig_PrincipalObjectAttributeAccesses` | [msdyn_activityanalysisconfig](msdyn_activityanalysisconfig.md) | `objectid` | `objectid_msdyn_activityanalysisconfig` |


## Source

Generated from [msdyn_activityanalysisconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_activityanalysisconfig')) on 2026-05-07.