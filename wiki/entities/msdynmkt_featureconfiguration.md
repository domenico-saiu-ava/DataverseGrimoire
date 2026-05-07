---
logical: "msdynmkt_featureconfiguration"
display: "Marketing feature configuration"
entitySetName: "msdynmkt_featureconfigurations"
primaryId: "msdynmkt_featureconfigurationid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdynmkt_featureconfigurationId`, `msdynmkt_featurestate`, `msdynmkt_name`, `msdynmkt_originurl`, `msdynmkt_uniquename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_featureconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_featureconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_featureconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_featureconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_featureconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_featureconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_featureconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_featureconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_featureconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_featureconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_featureconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_featureconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_featureconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_featureconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_featureconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_featureconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_featureconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_featureconfiguration.md) on 2026-05-06.