---
logical: "msdyn_admin_pin"
display: "msdyn_admin_pin"
entitySetName: "msdyn_admin_pins"
primaryId: "msdyn_admin_pinid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_admin_pin

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_admin_pin` |
| Display name | msdyn_admin_pin |
| Display (plural) | msdyn_admin_pins |
| Schema name | `msdyn_admin_pin` |
| Entity set (Web API) | `msdyn_admin_pins` |
| Primary id attribute | `msdyn_admin_pinid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_admin_pins?$select=name&$top=10
GET /api/data/v9.2/msdyn_admin_pins(<guid>)
POST /api/data/v9.2/msdyn_admin_pins
PATCH /api/data/v9.2/msdyn_admin_pins(<guid>)
DELETE /api/data/v9.2/msdyn_admin_pins(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_admin_pinid`, `msdyn_businessunit_scopeid`, `msdyn_contactid`, `msdyn_pin_scope`, `msdyn_pin_type`, `msdyn_queueid`, `name`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_admin_pin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_admin_pin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_admin_pin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_admin_pin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_admin_pin` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_admin_pin` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_admin_pin` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_admin_pin` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_admin_pin_msdyn_businessunit_scopeid_BusinessUnit` | [businessunit](businessunit.md) | `msdyn_businessunit_scopeid` | `msdyn_businessunit_scopeid` |
| `msdyn_admin_pin_msdyn_contactid_Contact` | [contact](contact.md) | `msdyn_contactid` | `msdyn_contactid` |
| `msdyn_admin_pin_msdyn_queueid_Queue` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |



## Source

Generated from [msdyn_admin_pin (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_admin_pin')) on 2026-05-07.