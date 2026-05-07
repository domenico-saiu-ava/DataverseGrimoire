---
logical: "msdynmkt_metadataitem"
display: "Metadata Item"
entitySetName: "msdynmkt_metadataitems"
primaryId: "msdynmkt_metadataitemid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Metadata Item

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_metadataitem` |
| Display name | Metadata Item |
| Display (plural) | Metadata Items |
| Schema name | `msdynmkt_metadataitem` |
| Entity set (Web API) | `msdynmkt_metadataitems` |
| Primary id attribute | `msdynmkt_metadataitemid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_metadataitems?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_metadataitems(<guid>)
POST /api/data/v9.2/msdynmkt_metadataitems
PATCH /api/data/v9.2/msdynmkt_metadataitems(<guid>)
DELETE /api/data/v9.2/msdynmkt_metadataitems(<guid>)
```

## Attributes

Writable: **31** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_DataType`, `msdynmkt_DateTimeBehavior`, `msdynmkt_DisplayName`, `msdynmkt_FullMetadataAsJSON`, `msdynmkt_IconPath`, `msdynmkt_IsRequired`, `msdynmkt_IsSecured`, `msdynmkt_LanguageCode`, `msdynmkt_LogicalName`, `msdynmkt_metadataitemId`, `msdynmkt_name`, `msdynmkt_NativeId`, `msdynmkt_NavigationPathsAsJSON`, `msdynmkt_ReferencedSourcesAsJSON`, `msdynmkt_SourceDisplayName`, `msdynmkt_SourceIsVirtual`, `msdynmkt_SourceLogicalName`, `msdynmkt_SourcePrimaryId`, `msdynmkt_SourceSetName`, `msdynmkt_SourceType`, `msdynmkt_SourceVirtualTableType`, `msdynmkt_StringFormatType`, `msdynmkt_TargetAudience`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_metadataitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_metadataitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_metadataitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_metadataitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_metadataitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_metadataitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_metadataitem` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_metadataitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_metadataitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadataitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadataitem_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_metadataitem_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_metadataitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadataitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_metadataitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadataitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_metadataitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_metadataitem.md) on 2026-05-06.