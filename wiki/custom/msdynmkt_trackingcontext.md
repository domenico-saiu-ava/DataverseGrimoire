---
logical: "msdynmkt_trackingcontext"
display: "Contesto tracciabilità"
entitySetName: "msdynmkt_trackingcontexts"
primaryId: "msdynmkt_trackingcontextid"
primaryName: "msdynmkt_contexttype"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contesto tracciabilità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_trackingcontext` |
| Display name | Contesto tracciabilità |
| Display (plural) | Contesto tracciabilità |
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

`importsequencenumber`, `msdynmkt_businessunitid`, `msdynmkt_channeldefinitionid`, `msdynmkt_channeltype`, `msdynmkt_contactpoint`, `msdynmkt_contexttype`, `msdynmkt_customerjourneyid`, `msdynmkt_customerjourneyinstanceid`, `msdynmkt_customerjourneytype`, `msdynmkt_customerjourneyversion`, `msdynmkt_entityid`, `msdynmkt_entitytype`, `msdynmkt_identityid`, `msdynmkt_journeyactivityid`, `msdynmkt_jsondata`, `msdynmkt_linkfriendlyname`, `msdynmkt_links`, `msdynmkt_messagetemplateid`, `msdynmkt_messagetemplateversion`, `msdynmkt_messagevariationindexes`, `msdynmkt_messagevariationname`, `msdynmkt_profileid`, `msdynmkt_sender`, `msdynmkt_targeturl`, `msdynmkt_trackingcontext_emaildelivered`, `msdynmkt_trackingcontextid`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_trackingcontext_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_trackingcontext_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_trackingcontext_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_trackingcontext_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [msdynmkt_trackingcontext (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_trackingcontext')) on 2026-05-07.