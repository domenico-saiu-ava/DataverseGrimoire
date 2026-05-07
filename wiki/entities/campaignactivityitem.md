---
logical: "campaignactivityitem"
display: "Campaign Activity Item"
entitySetName: "campaignactivityitems"
primaryId: "campaignactivityitemid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Campaign Activity Item

Work item of a campaign activity, such as a list or sales literature.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `campaignactivityitem` |
| Display name | Campaign Activity Item |
| Display (plural) | Campaign Activity Items |
| Schema name | `CampaignActivityItem` |
| Entity set (Web API) | `campaignactivityitems` |
| Primary id attribute | `campaignactivityitemid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/campaignactivityitems?$select=name&$top=10
GET /api/data/v9.2/campaignactivityitems(<guid>)
POST /api/data/v9.2/campaignactivityitems
PATCH /api/data/v9.2/campaignactivityitems(<guid>)
DELETE /api/data/v9.2/campaignactivityitems(<guid>)
```

## Attributes

Writable: **10** · Read-only: **5**

### Writable

`CampaignActivityId`, `CampaignActivityIdType`, `CampaignActivityItemId`, `ImportSequenceNumber`, `ItemId`, `ItemObjectTypeCode`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ActivityPointer_CampaignActivityItems` | [activitypointer](activitypointer.md) | `campaignactivityid` | `campaignactivityid` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `campaignactivityitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivityitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivityitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivityitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `campaignactivitylist_association` | _n/a_ | _n/a_ | _n/a_ |
| `campaignactivitysalesliterature_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [campaignactivityitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/campaignactivityitem.md) on 2026-05-06.