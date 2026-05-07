---
logical: "msdynmkt_preferencecenter"
display: "Preference Center"
entitySetName: "msdynmkt_preferencecenters"
primaryId: "msdynmkt_preferencecenterid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Preference Center

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_preferencecenter` |
| Display name | Preference Center |
| Display (plural) | Preference Centers |
| Schema name | `msdynmkt_preferencecenter` |
| Entity set (Web API) | `msdynmkt_preferencecenters` |
| Primary id attribute | `msdynmkt_preferencecenterid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_preferencecenters?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_preferencecenters(<guid>)
POST /api/data/v9.2/msdynmkt_preferencecenters
PATCH /api/data/v9.2/msdynmkt_preferencecenters(<guid>)
DELETE /api/data/v9.2/msdynmkt_preferencecenters(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdynmkt_ComplianceId`, `msdynmkt_designerhtml`, `msdynmkt_errormessage`, `msdynmkt_formhtml`, `msdynmkt_IsDefault`, `msdynmkt_name`, `msdynmkt_preferencecenterId`, `msdynmkt_successmessage`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_preferencecenter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_preferencecenter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_preferencecenter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_preferencecenter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_preferencecenter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `msdynmkt_complianceid` | `msdynmkt_ComplianceId` |
| `owner_msdynmkt_preferencecenter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_preferencecenter` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_preferencecenter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_preferencecenter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_preferencecenter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_preferencecenter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_preferencecenter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_preferencecenter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_preferencecenter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_preferencecenter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_preferencecenter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_preferencecenter.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_preferencecenter.md) on 2026-05-06.