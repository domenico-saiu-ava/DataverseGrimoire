---
logical: "msdyn_ocliveworkitemcontextitemelastic"
display: "Elemento contestuale elastico"
entitySetName: "msdyn_ocliveworkitemcontextitemelastics"
primaryId: "msdyn_ocliveworkitemcontextitemelasticid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento contestuale elastico

Tabella elementi contestuali elastici.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemcontextitemelastic` |
| Display name | Elemento contestuale elastico |
| Display (plural) | Elementi contestuali elastici |
| Schema name | `msdyn_ocliveworkitemcontextitemelastic` |
| Entity set (Web API) | `msdyn_ocliveworkitemcontextitemelastics` |
| Primary id attribute | `msdyn_ocliveworkitemcontextitemelasticid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemcontextitemelastics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemcontextitemelastics(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemcontextitemelastics
PATCH /api/data/v9.2/msdyn_ocliveworkitemcontextitemelastics(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemcontextitemelastics(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_datatype`, `msdyn_isdisplayable`, `msdyn_name`, `msdyn_ocliveworkitemcontextitemelasticid`, `msdyn_ocliveworkitemid`, `msdyn_ocliveworkstreamcontextvariableid`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `partitionid`, `timezoneruleversionnumber`, `ttlinseconds`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocliveworkitemcontextitemelastic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemcontextitemelastic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemcontextitemelastic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemcontextitemelastic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocliveworkitemcontextitemelastic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocliveworkitemcontextitemelastic` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocliveworkitemcontextitemelastic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocliveworkitemcontextitemelastic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_ocliveworkitemcontextitemelastic_msdyn_ocliveworkitemid_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_ocliveworkitemcontextitemelastic_msdyn_ocliveworkstreamcontextvariableid_msdyn_ocliveworkstreamcontextvariable` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `msdyn_ocliveworkstreamcontextvariableid` | `msdyn_ocliveworkstreamcontextvariableid` |



## Source

Generated from [msdyn_ocliveworkitemcontextitemelastic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocliveworkitemcontextitemelastic')) on 2026-05-07.