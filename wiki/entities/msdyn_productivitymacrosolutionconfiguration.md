---
logical: "msdyn_productivitymacrosolutionconfiguration"
display: "Macro Solution Configuration"
entitySetName: "msdyn_productivitymacrosolutionconfigurations"
primaryId: "msdyn_productivitymacrosolutionconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Macro Solution Configuration

Macro solution related configurations

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivitymacrosolutionconfiguration` |
| Display name | Macro Solution Configuration |
| Display (plural) | Macro Solution Configurations |
| Schema name | `msdyn_productivitymacrosolutionconfiguration` |
| Entity set (Web API) | `msdyn_productivitymacrosolutionconfigurations` |
| Primary id attribute | `msdyn_productivitymacrosolutionconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivitymacrosolutionconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivitymacrosolutionconfigurations(<guid>)
POST /api/data/v9.2/msdyn_productivitymacrosolutionconfigurations
PATCH /api/data/v9.2/msdyn_productivitymacrosolutionconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_productivitymacrosolutionconfigurations(<guid>)
```

## Attributes

Writable: **22** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_designerfallbackurl`, `msdyn_designerurlconfigentity`, `msdyn_designerurlconfigentityattrib`, `msdyn_designerurlconfigentityid`, `msdyn_designerurlconfigentityquery`, `msdyn_designerurlrelativepath`, `msdyn_macrosversion`, `msdyn_name`, `msdyn_productivitymacrosolutionconfigurationId`, `msdyn_searchhint`, `msdyn_UniqueName`, `msdyn_uservoicelink`, `msdyn_uservoicetext`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_productivitymacrosolutionconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_productivitymacrosolutionconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivitymacrosolutionconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivitymacrosolutionconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivitymacrosolutionconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_productivitymacrosolutionconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_productivitymacrosolutionconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_productivitymacrosolutionconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivitymacrosolutionconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacrosolutionconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacrosolutionconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_productivitymacrosolutionconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_productivitymacrosolutionconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacrosolutionconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_productivitymacrosolutionconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacrosolutionconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_productivitymacrosolutionconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_productivitymacrosolutionconfiguration.md) on 2026-05-06.