---
logical: "msdyn_proactive_delivery"
display: "Consegna proattiva"
entitySetName: "msdyn_proactive_deliveries"
primaryId: "msdyn_proactive_deliveryid"
primaryName: "msdyn_delivery_id"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Consegna proattiva

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_proactive_delivery` |
| Display name | Consegna proattiva |
| Display (plural) | Consegne proattive |
| Schema name | `msdyn_proactive_delivery` |
| Entity set (Web API) | `msdyn_proactive_deliveries` |
| Primary id attribute | `msdyn_proactive_deliveryid` |
| Primary name attribute | `msdyn_delivery_id` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_proactive_deliveries?$select=msdyn_delivery_id&$top=10
GET /api/data/v9.2/msdyn_proactive_deliveries(<guid>)
POST /api/data/v9.2/msdyn_proactive_deliveries
PATCH /api/data/v9.2/msdyn_proactive_deliveries(<guid>)
DELETE /api/data/v9.2/msdyn_proactive_deliveries(<guid>)
```

## Attributes

Writable: **29** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_call_id`, `msdyn_channel`, `msdyn_channel_sent_date`, `msdyn_contact_id`, `msdyn_conversation_id`, `msdyn_delivery_id`, `msdyn_dialmode_type`, `msdyn_disposition_codes`, `msdyn_end_date`, `msdyn_expiration_date`, `msdyn_from_address`, `msdyn_journey_id`, `msdyn_journey_run_id`, `msdyn_proactive_deliveryid`, `msdyn_proactive_engagement_config_id`, `msdyn_queue_id`, `msdyn_result`, `msdyn_result_date`, `msdyn_start_date`, `msdyn_status`, `msdyn_to_address`, `msdyn_tracking_id`, `msdyn_window_end_date`, `msdyn_window_start_date`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_proactive_delivery_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_proactive_delivery_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_proactive_delivery_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_proactive_delivery_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_proactive_delivery` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_proactive_delivery` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_proactive_delivery` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_proactive_delivery` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_proactive_delivery_attribute_msdyn_proactive_delivery_msdyn_proactive_delivery` | [msdyn_proactive_delivery](msdyn_proactive_delivery.md) | `msdyn_proactive_delivery` | `msdyn_proactive_delivery` |


## Source

Generated from [msdyn_proactive_delivery (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_proactive_delivery')) on 2026-05-07.