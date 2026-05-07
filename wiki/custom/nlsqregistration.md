---
logical: "nlsqregistration"
display: "informazioni registrazione NL2SQ"
entitySetName: "nlsqregistrations"
primaryId: "nlsqregistrationid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# informazioni registrazione NL2SQ

Stato di registrazione dell'organizzazione, elenco AllowedEntity e messaggio di errore di registrazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `nlsqregistration` |
| Display name | informazioni registrazione NL2SQ |
| Display (plural) | informazioni registrazione NL2SQ |
| Schema name | `nlsqregistration` |
| Entity set (Web API) | `nlsqregistrations` |
| Primary id attribute | `nlsqregistrationid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/nlsqregistrations?$select=name&$top=10
GET /api/data/v9.2/nlsqregistrations(<guid>)
POST /api/data/v9.2/nlsqregistrations
PATCH /api/data/v9.2/nlsqregistrations(<guid>)
DELETE /api/data/v9.2/nlsqregistrations(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`allowedentitylist`, `entitylist`, `errormessage`, `importsequencenumber`, `name`, `nlsqregistrationid`, `objectid`, `objectpartitionid`, `objecttype`, `objecttypedisplayname`, `objecttypeid`, `overriddencreatedon`, `ownerid`, `partitionid`, `registrationstatus`, `skill`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_nlsqregistration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_nlsqregistration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_nlsqregistration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_nlsqregistration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_nlsqregistration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_nlsqregistration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_nlsqregistration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_nlsqregistration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [nlsqregistration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='nlsqregistration')) on 2026-05-07.