---
logical: "subscriptionstatisticsoffline"
display: "Subscription Statistic Offline"
entitySetName: "subscriptionstatisticsofflineset"
primaryId: "subscriptionid"
tableType: "Standard"
ownership: "None"
---

# Subscription Statistic Offline

Subscription Statistic Offline

## Identity

| Property | Value |
| --- | --- |
| Logical name | `subscriptionstatisticsoffline` |
| Display name | Subscription Statistic Offline |
| Display (plural) | Subscription Statistics Offline |
| Schema name | `SubscriptionStatisticsOffline` |
| Entity set (Web API) | `subscriptionstatisticsofflineset` |
| Primary id attribute | `subscriptionid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/subscriptionstatisticsofflineset?$select=&$top=10
GET /api/data/v9.2/subscriptionstatisticsofflineset(<guid>)
POST /api/data/v9.2/subscriptionstatisticsofflineset
PATCH /api/data/v9.2/subscriptionstatisticsofflineset(<guid>)
DELETE /api/data/v9.2/subscriptionstatisticsofflineset(<guid>)
```

## Attributes

Writable: **3** · Read-only: **0**

### Writable

`FullSyncRequired`, `ObjectTypeCode`, `SubscriptionId`

## Relationships




## Source

Generated from [subscriptionstatisticsoffline.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/subscriptionstatisticsoffline.md) on 2026-05-06.