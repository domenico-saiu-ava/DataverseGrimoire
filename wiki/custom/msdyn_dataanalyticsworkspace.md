---
logical: "msdyn_dataanalyticsworkspace"
display: "Area di lavoro di analisi dei dati"
entitySetName: "msdyn_dataanalyticsworkspaces"
primaryId: "msdyn_dataanalyticsworkspaceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Area di lavoro di analisi dei dati

Aree di lavoro Power BI di analisi dei dati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsworkspace` |
| Display name | Area di lavoro di analisi dei dati |
| Display (plural) | Aree di lavoro di analisi dei dati |
| Schema name | `msdyn_dataanalyticsworkspace` |
| Entity set (Web API) | `msdyn_dataanalyticsworkspaces` |
| Primary id attribute | `msdyn_dataanalyticsworkspaceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsworkspaces?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsworkspaces(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsworkspaces
PATCH /api/data/v9.2/msdyn_dataanalyticsworkspaces(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsworkspaces(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_configuredby`, `msdyn_dataanalyticsworkspaceid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_name`, `msdyn_workspaceid`, `msdyn_workspacetype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsworkspace_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsworkspace_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsworkspace_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsworkspace_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataanalyticsworkspace` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataanalyticsworkspace` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataanalyticsworkspace` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataanalyticsworkspace` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_systemuser_msdyn_dataanalyticsworkspace_configuredby` | [systemuser](systemuser.md) | `msdyn_configuredby` | `msdyn_configuredby` |
| `msdyn_msdyn_dataanalyticsworkspace_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsworkspace_SyncErrors` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsworkspace` |
| `msdyn_dataanalyticsworkspace_DuplicateMatchingRecord` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataanalyticsworkspace` |
| `msdyn_dataanalyticsworkspace_DuplicateBaseRecord` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `baserecordid` | `baserecordid_msdyn_dataanalyticsworkspace` |
| `msdyn_dataanalyticsworkspace_AsyncOperations` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsworkspace` |
| `msdyn_dataanalyticsworkspace_MailboxTrackingFolders` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsworkspace` |
| `msdyn_dataanalyticsworkspace_UserEntityInstanceDatas` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `objectid` | `objectid_msdyn_dataanalyticsworkspace` |
| `msdyn_dataanalyticsworkspace_ProcessSession` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsworkspace` |
| `msdyn_dataanalyticsworkspace_BulkDeleteFailures` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsworkspace` |
| `msdyn_dataanalyticsworkspace_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `objectid` | `objectid_msdyn_dataanalyticsworkspace` |
| `msdyn_msdyn_dataanalyticsworkspace_msdyn_dataanalyticsdataset_dataanalyticsworkspaceid` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `msdyn_dataanalyticsworkspaceid` | `msdyn_dataanalyticsworkspaceid` |


## Source

Generated from [msdyn_dataanalyticsworkspace (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsworkspace')) on 2026-05-07.