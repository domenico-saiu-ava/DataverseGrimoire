---
logical: "msdyn_personal_pin"
display: "msdyn_personal_pin"
entitySetName: "msdyn_personal_pins"
primaryId: "msdyn_personal_pinid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_personal_pin

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_personal_pin` |
| Display name | msdyn_personal_pin |
| Display (plural) | msdyn_personal_pins |
| Schema name | `msdyn_personal_pin` |
| Entity set (Web API) | `msdyn_personal_pins` |
| Primary id attribute | `msdyn_personal_pinid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_personal_pins?$select=name&$top=10
GET /api/data/v9.2/msdyn_personal_pins(<guid>)
POST /api/data/v9.2/msdyn_personal_pins
PATCH /api/data/v9.2/msdyn_personal_pins(<guid>)
DELETE /api/data/v9.2/msdyn_personal_pins(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_contactid`, `msdyn_personal_pinid`, `msdyn_pin_owner`, `msdyn_pin_type`, `msdyn_queueid`, `name`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_personal_pin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_personal_pin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_personal_pin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_personal_pin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_personal_pin` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_personal_pin` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_personal_pin` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_personal_pin` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_personal_pin_contactid_Contact` | [contact](contact.md) | `msdyn_contactid` | `msdyn_contactid` |
| `msdyn_personal_pin_msdyn_pin_owner_SystemUser` | [systemuser](systemuser.md) | `msdyn_pin_owner` | `msdyn_pin_owner` |
| `msdyn_personal_pin_queueid_Queue` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |



## Source

Generated from [msdyn_personal_pin (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_personal_pin')) on 2026-05-07.