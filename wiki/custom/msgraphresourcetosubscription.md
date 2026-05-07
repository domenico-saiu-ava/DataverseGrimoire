---
logical: "msgraphresourcetosubscription"
display: "Da risorsa MS Graph ad abbonamento"
entitySetName: "msgraphresourcetosubscriptions"
primaryId: "msgraphresourcetosubscriptionid"
primaryName: "resourceid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Da risorsa MS Graph ad abbonamento

Solo per uso interno. Mapping tra le risorse di MS Graph e gli abbonamenti.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msgraphresourcetosubscription` |
| Display name | Da risorsa MS Graph ad abbonamento |
| Display (plural) | Da risorsa MS Graph ad abbonamenti |
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

Writable: **11** · Read-only: **1**

### Writable

`createdingraphon`, `importsequencenumber`, `msgraphresourcetosubscriptionid`, `overriddencreatedon`, `resourceid`, `resourcetype`, `statecode`, `statuscode`, `subscriptionid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`versionnumber`

## Relationships


### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msgraphresourcetosubscription_SyncErrors` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `regardingobjectid` | `regardingobjectid_msgraphresourcetosubscription` |
| `msgraphresourcetosubscription_AsyncOperations` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `regardingobjectid` | `regardingobjectid_msgraphresourcetosubscription` |
| `msgraphresourcetosubscription_MailboxTrackingFolders` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `regardingobjectid` | `regardingobjectid_msgraphresourcetosubscription` |
| `msgraphresourcetosubscription_UserEntityInstanceDatas` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `objectid` | `objectid_msgraphresourcetosubscription` |
| `msgraphresourcetosubscription_ProcessSession` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `regardingobjectid` | `regardingobjectid_msgraphresourcetosubscription` |
| `msgraphresourcetosubscription_BulkDeleteFailures` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `regardingobjectid` | `regardingobjectid_msgraphresourcetosubscription` |
| `msgraphresourcetosubscription_PrincipalObjectAttributeAccesses` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `objectid` | `objectid_msgraphresourcetosubscription` |


## Source

Generated from [msgraphresourcetosubscription (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msgraphresourcetosubscription')) on 2026-05-07.