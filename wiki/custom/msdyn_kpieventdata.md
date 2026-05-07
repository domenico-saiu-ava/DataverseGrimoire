---
logical: "msdyn_kpieventdata"
display: "Dati evento KPI"
entitySetName: "msdyn_kpieventsdata"
primaryId: "msdyn_kpieventdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dati evento KPI

Entità primaria per un evento KPI

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kpieventdata` |
| Display name | Dati evento KPI |
| Display (plural) | Dati evento KPI |
| Schema name | `msdyn_KPIEventData` |
| Entity set (Web API) | `msdyn_kpieventsdata` |
| Primary id attribute | `msdyn_kpieventdataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kpieventsdata?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kpieventsdata(<guid>)
POST /api/data/v9.2/msdyn_kpieventsdata
PATCH /api/data/v9.2/msdyn_kpieventsdata(<guid>)
DELETE /api/data/v9.2/msdyn_kpieventsdata(<guid>)
```

## Attributes

Writable: **27** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_ProviderId`, `msdyn_additionaldata`, `msdyn_cifSessionId`, `msdyn_clientsessionid`, `msdyn_conversationid`, `msdyn_customattribute1`, `msdyn_customattribute2`, `msdyn_customattribute3`, `msdyn_customattribute4`, `msdyn_customattribute5`, `msdyn_eventtimestamp`, `msdyn_externalcorrelationid`, `msdyn_kpieventdataid`, `msdyn_kpieventid`, `msdyn_kpieventname`, `msdyn_kpieventreason`, `msdyn_name`, `msdyn_participantid`, `msdyn_providersessionid`, `msdyn_sessionId`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_kpieventdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kpieventdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kpieventdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kpieventdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_kpieventdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_kpieventdata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_kpieventdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_kpieventdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kpieventdata_SyncErrors` | [msdyn_kpieventdata](msdyn_kpieventdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_kpieventdata` |
| `msdyn_kpieventdata_DuplicateMatchingRecord` | [msdyn_kpieventdata](msdyn_kpieventdata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_kpieventdata` |
| `msdyn_kpieventdata_DuplicateBaseRecord` | [msdyn_kpieventdata](msdyn_kpieventdata.md) | `baserecordid` | `baserecordid_msdyn_kpieventdata` |
| `msdyn_kpieventdata_AsyncOperations` | [msdyn_kpieventdata](msdyn_kpieventdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_kpieventdata` |
| `msdyn_kpieventdata_MailboxTrackingFolders` | [msdyn_kpieventdata](msdyn_kpieventdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_kpieventdata` |
| `msdyn_kpieventdata_UserEntityInstanceDatas` | [msdyn_kpieventdata](msdyn_kpieventdata.md) | `objectid` | `objectid_msdyn_kpieventdata` |
| `msdyn_kpieventdata_ProcessSession` | [msdyn_kpieventdata](msdyn_kpieventdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_kpieventdata` |
| `msdyn_kpieventdata_BulkDeleteFailures` | [msdyn_kpieventdata](msdyn_kpieventdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_kpieventdata` |
| `msdyn_kpieventdata_PrincipalObjectAttributeAccesses` | [msdyn_kpieventdata](msdyn_kpieventdata.md) | `objectid` | `objectid_msdyn_kpieventdata` |


## Source

Generated from [msdyn_kpieventdata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_kpieventdata')) on 2026-05-07.