---
logical: "msdyn_connectordatasource"
display: "Origine dati connettore virtuale"
entitySetName: "msdyn_connectordatasources"
primaryId: "msdyn_connectordatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine dati connettore virtuale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_connectordatasource` |
| Display name | Origine dati connettore virtuale |
| Display (plural) | Origini dati connettore virtuale |
| Schema name | `msdyn_connectordatasource` |
| Entity set (Web API) | `msdyn_connectordatasources` |
| Primary id attribute | `msdyn_connectordatasourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_connectordatasources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_connectordatasources(<guid>)
POST /api/data/v9.2/msdyn_connectordatasources
PATCH /api/data/v9.2/msdyn_connectordatasources(<guid>)
DELETE /api/data/v9.2/msdyn_connectordatasources(<guid>)
```

## Attributes

Writable: **15** · Read-only: **0**

### Writable

`msdyn_appsenvironment`, `msdyn_clientid`, `msdyn_clientsecret`, `msdyn_connectionreference`, `msdyn_connectionreferenceid`, `msdyn_connectordatasourceid`, `msdyn_connectortype`, `msdyn_dataset_unresolvedvalue`, `msdyn_dataset_value`, `msdyn_hasacling`, `msdyn_host`, `msdyn_name`, `msdyn_resource`, `msdyn_tenant`, `msdyn_userauth`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_connreference_msdyn_connectordatasource` | [connectionreference](connectionreference.md) | `msdyn_connectionreferenceid` | `msdyn_ConnectionReferenceId` |


### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_connectordatasource_environmentvariable` | [environmentvariabledefinition](environmentvariabledefinition.md) | _n/a_ | `msdyn_connectordatasource_environmentvari` |

## Source

Generated from [msdyn_connectordatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_connectordatasource')) on 2026-05-07.