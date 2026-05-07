---
logical: "subscriptionsyncentryoutlook"
display: "Subscription Sync Entry Outlook"
entitySetName: "subscriptionsyncentriesoutlook"
primaryId: "subscriptionid"
tableType: "Standard"
ownership: "None"
---

# Subscription Sync Entry Outlook

Used for outlook sync, internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `subscriptionsyncentryoutlook` |
| Display name | Subscription Sync Entry Outlook |
| Display (plural) | Subscription Sync Entry Outlook |
| Schema name | `SubscriptionSyncEntryOutlook` |
| Entity set (Web API) | `subscriptionsyncentriesoutlook` |
| Primary id attribute | `subscriptionid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/subscriptionsyncentriesoutlook?$select=&$top=10
GET /api/data/v9.2/subscriptionsyncentriesoutlook(<guid>)
POST /api/data/v9.2/subscriptionsyncentriesoutlook
PATCH /api/data/v9.2/subscriptionsyncentriesoutlook(<guid>)
DELETE /api/data/v9.2/subscriptionsyncentriesoutlook(<guid>)
```

## Attributes

Writable: **5** · Read-only: **0**

### Writable

`ObjectId`, `ObjectTypeCode`, `SubscriptionId`, `SyncState`, `VersionNumber`

## Relationships




## Source

Generated from [subscriptionsyncentryoutlook.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/subscriptionsyncentryoutlook.md) on 2026-05-06.