---
logical: "msdyn_entitydeltachange"
display: "Entity Delta Change"
entitySetName: "msdyn_entitydeltachanges"
primaryId: "msdyn_entitydeltachangeid"
primaryName: "msdyn_entitytypename"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Entity Delta Change

Entity Delta Changes

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entitydeltachange` |
| Display name | Entity Delta Change |
| Display (plural) | Entity Delta Changes |
| Schema name | `msdyn_entitydeltachange` |
| Entity set (Web API) | `msdyn_entitydeltachanges` |
| Primary id attribute | `msdyn_entitydeltachangeid` |
| Primary name attribute | `msdyn_entitytypename` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entitydeltachanges?$select=msdyn_entitytypename&$top=10
GET /api/data/v9.2/msdyn_entitydeltachanges(<guid>)
POST /api/data/v9.2/msdyn_entitydeltachanges
PATCH /api/data/v9.2/msdyn_entitydeltachanges(<guid>)
DELETE /api/data/v9.2/msdyn_entitydeltachanges(<guid>)
```

## Attributes

Writable: **8** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_changecount`, `msdyn_changereceivedtime`, `msdyn_entitydeltachangeid`, `msdyn_entitytypename`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entitydeltachange_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entitydeltachange_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entitydeltachange_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entitydeltachange_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [msdyn_entitydeltachange (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_entitydeltachange')) on 2026-05-07.