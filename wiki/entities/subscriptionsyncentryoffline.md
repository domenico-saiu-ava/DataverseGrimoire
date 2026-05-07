---
logical: "subscriptionsyncentryoffline"
display: "Subscription Sync Entry Offline"
entitySetName: "subscriptionsyncentriesoffline"
primaryId: "subscriptionid"
tableType: "Standard"
ownership: "None"
---

# Subscription Sync Entry Offline

Used for offline sync, internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `subscriptionsyncentryoffline` |
| Display name | Subscription Sync Entry Offline |
| Display (plural) | Subscription Sync Entry Offline |
| Schema name | `SubscriptionSyncEntryOffline` |
| Entity set (Web API) | `subscriptionsyncentriesoffline` |
| Primary id attribute | `subscriptionid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/subscriptionsyncentriesoffline?$select=&$top=10
GET /api/data/v9.2/subscriptionsyncentriesoffline(<guid>)
POST /api/data/v9.2/subscriptionsyncentriesoffline
PATCH /api/data/v9.2/subscriptionsyncentriesoffline(<guid>)
DELETE /api/data/v9.2/subscriptionsyncentriesoffline(<guid>)
```

## Attributes

Writable: **5** · Read-only: **0**

### Writable

`ObjectId`, `ObjectTypeCode`, `SubscriptionId`, `SyncState`, `VersionNumber`

## Relationships




## Source

Generated from [subscriptionsyncentryoffline.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/subscriptionsyncentryoffline.md) on 2026-05-06.