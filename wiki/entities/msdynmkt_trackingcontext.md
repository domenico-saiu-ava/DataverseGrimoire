---
logical: "msdynmkt_trackingcontext"
display: "TrackingContext"
entitySetName: "msdynmkt_trackingcontexts"
primaryId: "msdynmkt_trackingcontextid"
primaryName: "msdynmkt_contexttype"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# TrackingContext

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_trackingcontext` |
| Display name | TrackingContext |
| Display (plural) | TrackingContexts |
| Schema name | `msdynmkt_trackingcontext` |
| Entity set (Web API) | `msdynmkt_trackingcontexts` |
| Primary id attribute | `msdynmkt_trackingcontextid` |
| Primary name attribute | `msdynmkt_contexttype` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_trackingcontexts?$select=msdynmkt_contexttype&$top=10
GET /api/data/v9.2/msdynmkt_trackingcontexts(<guid>)
POST /api/data/v9.2/msdynmkt_trackingcontexts
PATCH /api/data/v9.2/msdynmkt_trackingcontexts(<guid>)
DELETE /api/data/v9.2/msdynmkt_trackingcontexts(<guid>)
```

## Attributes

Writable: **29** · Read-only: **7**

### Writable

`ImportSequenceNumber`, `msdynmkt_businessunitid`, `msdynmkt_channeldefinitionid`, `msdynmkt_channeltype`, `msdynmkt_contactpoint`, `msdynmkt_contexttype`, `msdynmkt_customerjourneyid`, `msdynmkt_customerjourneyinstanceid`, `msdynmkt_customerjourneytype`, `msdynmkt_customerjourneyversion`, `msdynmkt_emaildelivered`, `msdynmkt_entityid`, `msdynmkt_entitytype`, `msdynmkt_identityid`, `msdynmkt_journeyactivityid`, `msdynmkt_jsondata`, `msdynmkt_linkfriendlyname`, `msdynmkt_links`, `msdynmkt_messagetemplateid`, `msdynmkt_messagetemplateversion`, `msdynmkt_messagevariationindexes`, `msdynmkt_messagevariationname`, `msdynmkt_profileid`, `msdynmkt_sender`, `msdynmkt_targeturl`, `msdynmkt_trackingcontextId`, `OverriddenCreatedOn`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_trackingcontext_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_trackingcontext_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_trackingcontext_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_trackingcontext_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [msdynmkt_trackingcontext.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_trackingcontext.md) on 2026-05-06.