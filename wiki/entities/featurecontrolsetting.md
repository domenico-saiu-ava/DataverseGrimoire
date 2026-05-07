---
logical: "featurecontrolsetting"
display: "FeatureControlSetting"
entitySetName: "featurecontrolsettings"
primaryId: "featurecontrolsettingid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# FeatureControlSetting

featurecontrolsetting

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

Writable: **16** · Read-only: **18**

### Writable

`Content`, `CountOfFCS`, `featurecontrolsettingId`, `FullName`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `publickeytoken`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_featurecontrolsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_featurecontrolsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_featurecontrolsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_featurecontrolsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_featurecontrolsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_featurecontrolsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_featurecontrolsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_featurecontrolsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `featurecontrolsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `featurecontrolsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `featurecontrolsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `featurecontrolsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `featurecontrolsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `featurecontrolsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `featurecontrolsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `featurecontrolsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [featurecontrolsetting.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/featurecontrolsetting.md) on 2026-05-06.