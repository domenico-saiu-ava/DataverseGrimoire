---
logical: "featurecontrolsetting"
display: "FeatureControlSetting"
entitySetName: "featurecontrolsettings"
primaryId: "featurecontrolsettingid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# FeatureControlSetting

Entity for safe enablement of Features.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `featurecontrolsetting` |
| Display name | FeatureControlSetting |
| Display (plural) | featurecontrolsettings |
| Schema name | `featurecontrolsetting` |
| Entity set (Web API) | `featurecontrolsettings` |
| Primary id attribute | `featurecontrolsettingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/featurecontrolsettings?$select=name&$top=10
GET /api/data/v9.2/featurecontrolsettings(<guid>)
POST /api/data/v9.2/featurecontrolsettings
PATCH /api/data/v9.2/featurecontrolsettings(<guid>)
DELETE /api/data/v9.2/featurecontrolsettings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`content`, `countoffcs`, `featurecontrolsettingid`, `fullname`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `publickeytoken`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_featurecontrolsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_featurecontrolsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_featurecontrolsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_featurecontrolsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_featurecontrolsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_featurecontrolsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_featurecontrolsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_featurecontrolsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `featurecontrolsetting_SyncErrors` | [featurecontrolsetting](featurecontrolsetting.md) | `regardingobjectid` | `regardingobjectid_featurecontrolsetting` |
| `featurecontrolsetting_DuplicateMatchingRecord` | [featurecontrolsetting](featurecontrolsetting.md) | `duplicaterecordid` | `duplicaterecordid_featurecontrolsetting` |
| `featurecontrolsetting_DuplicateBaseRecord` | [featurecontrolsetting](featurecontrolsetting.md) | `baserecordid` | `baserecordid_featurecontrolsetting` |
| `featurecontrolsetting_AsyncOperations` | [featurecontrolsetting](featurecontrolsetting.md) | `regardingobjectid` | `regardingobjectid_featurecontrolsetting` |
| `featurecontrolsetting_MailboxTrackingFolders` | [featurecontrolsetting](featurecontrolsetting.md) | `regardingobjectid` | `regardingobjectid_featurecontrolsetting` |
| `featurecontrolsetting_UserEntityInstanceDatas` | [featurecontrolsetting](featurecontrolsetting.md) | `objectid` | `objectid_featurecontrolsetting` |
| `featurecontrolsetting_ProcessSession` | [featurecontrolsetting](featurecontrolsetting.md) | `regardingobjectid` | `regardingobjectid_featurecontrolsetting` |
| `featurecontrolsetting_BulkDeleteFailures` | [featurecontrolsetting](featurecontrolsetting.md) | `regardingobjectid` | `regardingobjectid_featurecontrolsetting` |
| `featurecontrolsetting_PrincipalObjectAttributeAccesses` | [featurecontrolsetting](featurecontrolsetting.md) | `objectid` | `objectid_featurecontrolsetting` |


## Source

Generated from [featurecontrolsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='featurecontrolsetting')) on 2026-05-07.