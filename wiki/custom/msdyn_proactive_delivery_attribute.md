---
logical: "msdyn_proactive_delivery_attribute"
display: "Attributo di consegna proattiva"
entitySetName: "msdyn_proactive_delivery_attributes"
primaryId: "msdyn_proactive_delivery_attributeid"
primaryName: "msdyn_keyword"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Attributo di consegna proattiva

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_proactive_delivery_attribute` |
| Display name | Attributo di consegna proattiva |
| Display (plural) | Attributi di consegna proattiva |
| Schema name | `msdyn_proactive_delivery_attribute` |
| Entity set (Web API) | `msdyn_proactive_delivery_attributes` |
| Primary id attribute | `msdyn_proactive_delivery_attributeid` |
| Primary name attribute | `msdyn_keyword` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_proactive_delivery_attributes?$select=msdyn_keyword&$top=10
GET /api/data/v9.2/msdyn_proactive_delivery_attributes(<guid>)
POST /api/data/v9.2/msdyn_proactive_delivery_attributes
PATCH /api/data/v9.2/msdyn_proactive_delivery_attributes(<guid>)
DELETE /api/data/v9.2/msdyn_proactive_delivery_attributes(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_keyword`, `msdyn_proactive_delivery`, `msdyn_proactive_delivery_attributeid`, `msdyn_type`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_proactive_delivery_attribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_proactive_delivery_attribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_proactive_delivery_attribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_proactive_delivery_attribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_proactive_delivery_attribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_proactive_delivery_attribute` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_proactive_delivery_attribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_proactive_delivery_attribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_proactive_delivery_attribute_msdyn_proactive_delivery_msdyn_proactive_delivery` | [msdyn_proactive_delivery](msdyn_proactive_delivery.md) | `msdyn_proactive_delivery` | `msdyn_proactive_delivery` |



## Source

Generated from [msdyn_proactive_delivery_attribute (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_proactive_delivery_attribute')) on 2026-05-07.