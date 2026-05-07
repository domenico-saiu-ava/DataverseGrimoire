---
logical: "msdyn_lastmessageinfo"
display: "Info ultimo messaggio"
entitySetName: "msdyn_lastmessageinfos"
primaryId: "msdyn_lastmessageinfoid"
primaryName: "msdyn_liveworkitemid"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Info ultimo messaggio

Archivia l'ultimo messaggio per conversazione e gli ID thread della posta in arrivo.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_lastmessageinfo` |
| Display name | Info ultimo messaggio |
| Display (plural) | Info ultimo messaggio |
| Schema name | `msdyn_lastmessageinfo` |
| Entity set (Web API) | `msdyn_lastmessageinfos` |
| Primary id attribute | `msdyn_lastmessageinfoid` |
| Primary name attribute | `msdyn_liveworkitemid` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_lastmessageinfos?$select=msdyn_liveworkitemid&$top=10
GET /api/data/v9.2/msdyn_lastmessageinfos(<guid>)
POST /api/data/v9.2/msdyn_lastmessageinfos
PATCH /api/data/v9.2/msdyn_lastmessageinfos(<guid>)
DELETE /api/data/v9.2/msdyn_lastmessageinfos(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_lastmessageinfoid`, `msdyn_liveworkitemid`, `msdyn_recordtype`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_lastmessageinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_lastmessageinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_lastmessageinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_lastmessageinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_lastmessageinfo` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_lastmessageinfo` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_lastmessageinfo` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_lastmessageinfo` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [msdyn_lastmessageinfo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_lastmessageinfo')) on 2026-05-07.