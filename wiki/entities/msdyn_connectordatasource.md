---
logical: "msdyn_connectordatasource"
display: "Virtual Connector Data Source"
entitySetName: "msdyn_connectordatasources"
primaryId: "msdyn_connectordatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Virtual Connector Data Source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_connectordatasource` |
| Display name | Virtual Connector Data Source |
| Display (plural) | Virtual Connector Data Sources |
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

`msdyn_appsenvironment`, `msdyn_clientid`, `msdyn_clientsecret`, `msdyn_connectionreference`, `msdyn_ConnectionReferenceId`, `msdyn_connectordatasourceId`, `msdyn_connectortype`, `msdyn_dataset_unresolvedvalue`, `msdyn_dataset_value`, `msdyn_hasacling`, `msdyn_host`, `msdyn_name`, `msdyn_resource`, `msdyn_tenant`, `msdyn_userauth`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_connreference_msdyn_connectordatasource` | [connectionreference](connectionreference.md) | `msdyn_connectionreferenceid` | `msdyn_ConnectionReferenceId` |


### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_connectordatasource_environmentvariable` | [msdyn_connectordatasourceid](msdyn_connectordatasourceid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_connectordatasource.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_connectordatasource.md) on 2026-05-06.