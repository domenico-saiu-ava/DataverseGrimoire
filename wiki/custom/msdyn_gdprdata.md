---
logical: "msdyn_gdprdata"
display: "GDPRData"
entitySetName: "msdyn_gdprdataset"
primaryId: "msdyn_gdprdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# GDPRData

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_gdprdata` |
| Display name | GDPRData |
| Display (plural) | GDPRData |
| Schema name | `msdyn_gdprdata` |
| Entity set (Web API) | `msdyn_gdprdataset` |
| Primary id attribute | `msdyn_gdprdataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_gdprdataset?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_gdprdataset(<guid>)
POST /api/data/v9.2/msdyn_gdprdataset
PATCH /api/data/v9.2/msdyn_gdprdataset(<guid>)
DELETE /api/data/v9.2/msdyn_gdprdataset(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_data`, `msdyn_dataheader`, `msdyn_entityid`, `msdyn_entitytype`, `msdyn_gdprdataid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_gdprdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_gdprdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_gdprdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_gdprdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_gdprdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_gdprdata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_gdprdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_gdprdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_gdprdata_SyncErrors` | [msdyn_gdprdata](msdyn_gdprdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_gdprdata` |
| `msdyn_gdprdata_AsyncOperations` | [msdyn_gdprdata](msdyn_gdprdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_gdprdata` |
| `msdyn_gdprdata_MailboxTrackingFolders` | [msdyn_gdprdata](msdyn_gdprdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_gdprdata` |
| `msdyn_gdprdata_UserEntityInstanceDatas` | [msdyn_gdprdata](msdyn_gdprdata.md) | `objectid` | `objectid_msdyn_gdprdata` |
| `msdyn_gdprdata_ProcessSession` | [msdyn_gdprdata](msdyn_gdprdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_gdprdata` |
| `msdyn_gdprdata_BulkDeleteFailures` | [msdyn_gdprdata](msdyn_gdprdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_gdprdata` |
| `msdyn_gdprdata_PrincipalObjectAttributeAccesses` | [msdyn_gdprdata](msdyn_gdprdata.md) | `objectid` | `objectid_msdyn_gdprdata` |


## Source

Generated from [msdyn_gdprdata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_gdprdata')) on 2026-05-07.