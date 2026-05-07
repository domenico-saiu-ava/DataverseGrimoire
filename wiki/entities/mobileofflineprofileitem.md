---
logical: "mobileofflineprofileitem"
display: "Mobile Offline Profile Item"
entitySetName: "mobileofflineprofileitems"
primaryId: "mobileofflineprofileitemid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Mobile Offline Profile Item

Information on entity availability to mobile devices in offline mode for a mobile offline profile item.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mobileofflineprofileitem` |
| Display name | Mobile Offline Profile Item |
| Display (plural) | Mobile Offline Profile Item |
| Schema name | `MobileOfflineProfileItem` |
| Entity set (Web API) | `mobileofflineprofileitems` |
| Primary id attribute | `mobileofflineprofileitemid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mobileofflineprofileitems?$select=name&$top=10
GET /api/data/v9.2/mobileofflineprofileitems(<guid>)
POST /api/data/v9.2/mobileofflineprofileitems
PATCH /api/data/v9.2/mobileofflineprofileitems(<guid>)
DELETE /api/data/v9.2/mobileofflineprofileitems(<guid>)
```

## Attributes

Writable: **21** · Read-only: **18**

### Writable

`CanBeFollowed`, `GetRelatedEntityRecords`, `IntroducedVersion`, `IsVisibleInGrid`, `MobileOfflineProfileItemId`, `Name`, `ProcessId`, `ProfileItemEntityFilter`, `ProfileItemRule`, `RecordDistributionCriteria`, `RecordsOwnedByMe`, `RecordsOwnedByMyBusinessUnit`, `RecordsOwnedByMyTeam`, `RegardingObjectId`, `RelationshipData`, `SelectedColumns`, `SelectedEntityTypeCode`, `StageId`, `SyncIntervalInMinutes`, `TraversedPath`, `ViewQuery`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityObjectTypeCode`, `IsManaged`, `IsValidated`, `MobileOfflineProfileItemIdUnique`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `PublishedOn`, `SelectedEntityMetadata`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_MobileOfflineProfileItem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mobileofflineprofileitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mobileofflineprofileitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mobileofflineprofileitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_mobileofflineprofileitem_savedquery` | [savedquery](savedquery.md) | `profileitemrule` | `profileitemrule` |
| `MobileOfflineProfile_MobileOfflineProfileItem` | [mobileofflineprofile](mobileofflineprofile.md) | `regardingobjectid` | `regardingobjectid` |
| `MobileOfflineProfileItem_organization` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `MobileOfflineProfileItem_MobileOfflineProfileItemAssociation` | _n/a_ | `mobileofflineprofileitemid` | _n/a_ |


## Source

Generated from [mobileofflineprofileitem.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mobileofflineprofileitem.md) on 2026-05-06.