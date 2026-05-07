---
logical: "msdyn_incident_msdyn_customerasset"
display: "msdyn_incident_msdyn_customerasset"
entitySetName: "msdyn_incident_msdyn_customerassetset"
primaryId: "msdyn_incident_msdyn_customerassetid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_incident_msdyn_customerasset

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_incident_msdyn_customerasset` |
| Display name | msdyn_incident_msdyn_customerasset |
| Schema name | `msdyn_incident_msdyn_customerasset` |
| Entity set (Web API) | `msdyn_incident_msdyn_customerassetset` |
| Primary id attribute | `msdyn_incident_msdyn_customerassetid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_incident_msdyn_customerassetset?$select=&$top=10
GET /api/data/v9.2/msdyn_incident_msdyn_customerassetset(<guid>)
POST /api/data/v9.2/msdyn_incident_msdyn_customerassetset
PATCH /api/data/v9.2/msdyn_incident_msdyn_customerassetset(<guid>)
DELETE /api/data/v9.2/msdyn_incident_msdyn_customerassetset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`incidentid`, `msdyn_customerassetid`, `msdyn_incident_msdyn_customerassetid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_incident_msdyn_customerasset` | [incident](incident.md) | _n/a_ | `msdyn_incident_msdyn_customerasset` |

## Source

Generated from [msdyn_incident_msdyn_customerasset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_incident_msdyn_customerasset')) on 2026-05-07.