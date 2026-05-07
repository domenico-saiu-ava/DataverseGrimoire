---
logical: "subscriptionstatisticsoutlook"
display: "Subscription Statistic Outlook"
entitySetName: "subscriptionstatisticsoutlookset"
primaryId: "subscriptionid"
tableType: "Standard"
ownership: "None"
---

# Subscription Statistic Outlook

Subscription Statistic Outlook

## Identity

| Property | Value |
| --- | --- |
| Logical name | `subscriptionstatisticsoutlook` |
| Display name | Subscription Statistic Outlook |
| Display (plural) | Subscription Statistics Outlook |
| Schema name | `SubscriptionStatisticsOutlook` |
| Entity set (Web API) | `subscriptionstatisticsoutlookset` |
| Primary id attribute | `subscriptionid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/subscriptionstatisticsoutlookset?$select=&$top=10
GET /api/data/v9.2/subscriptionstatisticsoutlookset(<guid>)
POST /api/data/v9.2/subscriptionstatisticsoutlookset
PATCH /api/data/v9.2/subscriptionstatisticsoutlookset(<guid>)
DELETE /api/data/v9.2/subscriptionstatisticsoutlookset(<guid>)
```

## Attributes

Writable: **3** · Read-only: **0**

### Writable

`FullSyncRequired`, `ObjectTypeCode`, `SubscriptionId`

## Relationships




## Source

Generated from [subscriptionstatisticsoutlook.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/subscriptionstatisticsoutlook.md) on 2026-05-06.