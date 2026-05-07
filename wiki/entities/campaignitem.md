---
logical: "campaignitem"
display: "Campaign Item"
entitySetName: "campaignitems"
primaryId: "campaignitemid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Campaign Item

Work item in a campaign, a list or sales literature.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `campaignitem` |
| Display name | Campaign Item |
| Display (plural) | Campaign Items |
| Schema name | `CampaignItem` |
| Entity set (Web API) | `campaignitems` |
| Primary id attribute | `campaignitemid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/campaignitems?$select=name&$top=10
GET /api/data/v9.2/campaignitems(<guid>)
POST /api/data/v9.2/campaignitems
PATCH /api/data/v9.2/campaignitems(<guid>)
DELETE /api/data/v9.2/campaignitems(<guid>)
```

## Attributes

Writable: **9** · Read-only: **5**

### Writable

`CampaignId`, `CampaignItemId`, `EntityId`, `EntityType`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `campaignitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `campaigncampaign_association` | _n/a_ | _n/a_ | _n/a_ |
| `campaignlist_association` | _n/a_ | _n/a_ | _n/a_ |
| `campaignproduct_association` | _n/a_ | _n/a_ | _n/a_ |
| `campaignsalesliterature_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [campaignitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/campaignitem.md) on 2026-05-06.