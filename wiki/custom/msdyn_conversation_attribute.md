---
logical: "msdyn_conversation_attribute"
display: "Attributo conversazione"
entitySetName: "msdyn_conversation_attributes"
primaryId: "msdyn_conversation_attributeid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Attributo conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversation_attribute` |
| Display name | Attributo conversazione |
| Display (plural) | Attributi conversazione |
| Schema name | `msdyn_conversation_attribute` |
| Entity set (Web API) | `msdyn_conversation_attributes` |
| Primary id attribute | `msdyn_conversation_attributeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversation_attributes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversation_attributes(<guid>)
POST /api/data/v9.2/msdyn_conversation_attributes
PATCH /api/data/v9.2/msdyn_conversation_attributes(<guid>)
DELETE /api/data/v9.2/msdyn_conversation_attributes(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversation_attributeid`, `msdyn_conversation_id`, `msdyn_keyword`, `msdyn_name`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversation_attribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversation_attribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversation_attribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversation_attribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversation_attribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversation_attribute` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversation_attribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversation_attribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [msdyn_conversation_attribute (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversation_attribute')) on 2026-05-07.