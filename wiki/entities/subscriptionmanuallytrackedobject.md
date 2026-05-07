---
logical: "subscriptionmanuallytrackedobject"
display: "Subscription Manually Tracked Object"
entitySetName: "subscriptionmanuallytrackedobjects"
primaryId: "subscriptionmanuallytrackedobjectid"
tableType: "Standard"
ownership: "None"
---

# Subscription Manually Tracked Object

For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `subscriptionmanuallytrackedobject` |
| Display name | Subscription Manually Tracked Object |
| Display (plural) | Subscription Manually Tracked Objects |
| Schema name | `SubscriptionManuallyTrackedObject` |
| Entity set (Web API) | `subscriptionmanuallytrackedobjects` |
| Primary id attribute | `subscriptionmanuallytrackedobjectid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/subscriptionmanuallytrackedobjects?$select=&$top=10
GET /api/data/v9.2/subscriptionmanuallytrackedobjects(<guid>)
POST /api/data/v9.2/subscriptionmanuallytrackedobjects
PATCH /api/data/v9.2/subscriptionmanuallytrackedobjects(<guid>)
DELETE /api/data/v9.2/subscriptionmanuallytrackedobjects(<guid>)
```

## Attributes

Writable: **5** · Read-only: **0**

### Writable

`ObjectId`, `ObjectTypeCode`, `SubscriptionId`, `SubscriptionManuallyTrackedObjectId`, `Track`

## Relationships




## Source

Generated from [subscriptionmanuallytrackedobject.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/subscriptionmanuallytrackedobject.md) on 2026-05-06.