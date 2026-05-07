---
logical: "msdyn_analytics"
display: "Configurazione di Power BI"
entitySetName: "msdyn_analyticses"
primaryId: "msdyn_analyticsid"
primaryName: "msdyn_title"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione di Power BI

Archivia le configurazioni Power BI per l'esperienza di supervisione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analytics` |
| Display name | Configurazione di Power BI |
| Display (plural) | Configurazioni Power BI |
| Schema name | `msdyn_analytics` |
| Entity set (Web API) | `msdyn_analyticses` |
| Primary id attribute | `msdyn_analyticsid` |
| Primary name attribute | `msdyn_title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analyticses?$select=msdyn_title&$top=10
GET /api/data/v9.2/msdyn_analyticses(<guid>)
POST /api/data/v9.2/msdyn_analyticses
PATCH /api/data/v9.2/msdyn_analyticses(<guid>)
DELETE /api/data/v9.2/msdyn_analyticses(<guid>)
```

## Attributes

Writable: **14** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_analyticsid`, `msdyn_ispaasenabled`, `msdyn_keyvaulturi`, `msdyn_nativeappid`, `msdyn_ocanalyticspreviewenable`, `msdyn_title`, `msdyn_workspaceid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_analytics_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analytics_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analytics_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analytics_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_analytics` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_analytics` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_analytics` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_analytics` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analytics_SyncErrors` | [msdyn_analytics](msdyn_analytics.md) | `regardingobjectid` | `regardingobjectid_msdyn_analytics` |
| `msdyn_analytics_DuplicateMatchingRecord` | [msdyn_analytics](msdyn_analytics.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_analytics` |
| `msdyn_analytics_DuplicateBaseRecord` | [msdyn_analytics](msdyn_analytics.md) | `baserecordid` | `baserecordid_msdyn_analytics` |
| `msdyn_analytics_AsyncOperations` | [msdyn_analytics](msdyn_analytics.md) | `regardingobjectid` | `regardingobjectid_msdyn_analytics` |
| `msdyn_analytics_MailboxTrackingFolders` | [msdyn_analytics](msdyn_analytics.md) | `regardingobjectid` | `regardingobjectid_msdyn_analytics` |
| `msdyn_analytics_UserEntityInstanceDatas` | [msdyn_analytics](msdyn_analytics.md) | `objectid` | `objectid_msdyn_analytics` |
| `msdyn_analytics_ProcessSession` | [msdyn_analytics](msdyn_analytics.md) | `regardingobjectid` | `regardingobjectid_msdyn_analytics` |
| `msdyn_analytics_BulkDeleteFailures` | [msdyn_analytics](msdyn_analytics.md) | `regardingobjectid` | `regardingobjectid_msdyn_analytics` |
| `msdyn_analytics_PrincipalObjectAttributeAccesses` | [msdyn_analytics](msdyn_analytics.md) | `objectid` | `objectid_msdyn_analytics` |


## Source

Generated from [msdyn_analytics (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_analytics')) on 2026-05-07.