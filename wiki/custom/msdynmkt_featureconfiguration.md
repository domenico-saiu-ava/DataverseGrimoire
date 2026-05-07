---
logical: "msdynmkt_featureconfiguration"
display: "Marketing feature configuration"
entitySetName: "msdynmkt_featureconfigurations"
primaryId: "msdynmkt_featureconfigurationid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Marketing feature configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_featureconfiguration` |
| Display name | Marketing feature configuration |
| Display (plural) | Marketing feature configurations |
| Schema name | `msdynmkt_featureconfiguration` |
| Entity set (Web API) | `msdynmkt_featureconfigurations` |
| Primary id attribute | `msdynmkt_featureconfigurationid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_featureconfigurations?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_featureconfigurations(<guid>)
POST /api/data/v9.2/msdynmkt_featureconfigurations
PATCH /api/data/v9.2/msdynmkt_featureconfigurations(<guid>)
DELETE /api/data/v9.2/msdynmkt_featureconfigurations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdynmkt_featureconfigurationid`, `msdynmkt_featurestate`, `msdynmkt_name`, `msdynmkt_originurl`, `msdynmkt_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_featureconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_featureconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_featureconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_featureconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_featureconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_featureconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_featureconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_featureconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_featureconfiguration_SyncErrors` | [msdynmkt_featureconfiguration](msdynmkt_featureconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_featureconfiguration` |
| `msdynmkt_featureconfiguration_DuplicateMatchingRecord` | [msdynmkt_featureconfiguration](msdynmkt_featureconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_featureconfiguration` |
| `msdynmkt_featureconfiguration_DuplicateBaseRecord` | [msdynmkt_featureconfiguration](msdynmkt_featureconfiguration.md) | `baserecordid` | `baserecordid_msdynmkt_featureconfiguration` |
| `msdynmkt_featureconfiguration_AsyncOperations` | [msdynmkt_featureconfiguration](msdynmkt_featureconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_featureconfiguration` |
| `msdynmkt_featureconfiguration_MailboxTrackingFolders` | [msdynmkt_featureconfiguration](msdynmkt_featureconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_featureconfiguration` |
| `msdynmkt_featureconfiguration_UserEntityInstanceDatas` | [msdynmkt_featureconfiguration](msdynmkt_featureconfiguration.md) | `objectid` | `objectid_msdynmkt_featureconfiguration` |
| `msdynmkt_featureconfiguration_ProcessSession` | [msdynmkt_featureconfiguration](msdynmkt_featureconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_featureconfiguration` |
| `msdynmkt_featureconfiguration_BulkDeleteFailures` | [msdynmkt_featureconfiguration](msdynmkt_featureconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_featureconfiguration` |
| `msdynmkt_featureconfiguration_PrincipalObjectAttributeAccesses` | [msdynmkt_featureconfiguration](msdynmkt_featureconfiguration.md) | `objectid` | `objectid_msdynmkt_featureconfiguration` |


## Source

Generated from [msdynmkt_featureconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_featureconfiguration')) on 2026-05-07.