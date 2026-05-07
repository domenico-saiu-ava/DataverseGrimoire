---
logical: "msgraphresourcetosubscription"
display: "Ms Graph Resource To Subscription"
entitySetName: "msgraphresourcetosubscriptions"
primaryId: "msgraphresourcetosubscriptionid"
primaryName: "resourceid"
tableType: "Standard"
ownership: "None"
---

# Ms Graph Resource To Subscription

For internal use only. The mapping between Ms Graph Resources and Subscriptions.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msgraphresourcetosubscription` |
| Display name | Ms Graph Resource To Subscription |
| Display (plural) | Ms Graph Resource To Subscriptions |
| Schema name | `MsGraphResourceToSubscription` |
| Entity set (Web API) | `msgraphresourcetosubscriptions` |
| Primary id attribute | `msgraphresourcetosubscriptionid` |
| Primary name attribute | `resourceid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msgraphresourcetosubscriptions?$select=resourceid&$top=10
GET /api/data/v9.2/msgraphresourcetosubscriptions(<guid>)
POST /api/data/v9.2/msgraphresourcetosubscriptions
PATCH /api/data/v9.2/msgraphresourcetosubscriptions(<guid>)
DELETE /api/data/v9.2/msgraphresourcetosubscriptions(<guid>)
```

## Attributes

Writable: **11** · Read-only: **0**

### Writable

`CreatedInGraphOn`, `ImportSequenceNumber`, `MsGraphResourceToSubscriptionId`, `OverriddenCreatedOn`, `ResourceId`, `ResourceType`, `statecode`, `statuscode`, `SubscriptionId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

## Relationships


### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msgraphresourcetosubscription_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msgraphresourcetosubscription_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msgraphresourcetosubscription_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msgraphresourcetosubscription_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msgraphresourcetosubscription_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msgraphresourcetosubscription_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msgraphresourcetosubscription.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msgraphresourcetosubscription.md) on 2026-05-06.