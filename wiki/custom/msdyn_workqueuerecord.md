---
logical: "msdyn_workqueuerecord"
display: "Record coda di lavoro"
entitySetName: "msdyn_workqueuerecords"
primaryId: "msdyn_workqueuerecordid"
primaryName: "msdyn_primaryname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Record coda di lavoro

Entità creata per archiviare i record del modello di dati WorkQueue

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_workqueuerecord` |
| Display name | Record coda di lavoro |
| Display (plural) | workqueuerecord |
| Schema name | `msdyn_workqueuerecord` |
| Entity set (Web API) | `msdyn_workqueuerecords` |
| Primary id attribute | `msdyn_workqueuerecordid` |
| Primary name attribute | `msdyn_primaryname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_workqueuerecords?$select=msdyn_primaryname&$top=10
GET /api/data/v9.2/msdyn_workqueuerecords(<guid>)
POST /api/data/v9.2/msdyn_workqueuerecords
PATCH /api/data/v9.2/msdyn_workqueuerecords(<guid>)
DELETE /api/data/v9.2/msdyn_workqueuerecords(<guid>)
```

## Attributes

Writable: **28** · Read-only: **6**

### Writable

`importsequencenumber`, `msdyn_displayattributes`, `msdyn_duetime`, `msdyn_endtime`, `msdyn_entitysetname`, `msdyn_entitytypecode`, `msdyn_entitytypedisplayname`, `msdyn_entitytypelogicalname`, `msdyn_filterattributes`, `msdyn_linkedactivityid`, `msdyn_nextactionerrorstate`, `msdyn_nextactionid`, `msdyn_nextactionname`, `msdyn_nextactionsource`, `msdyn_nextactionsubtype`, `msdyn_nextactiontype`, `msdyn_nextactiontypedisplayname`, `msdyn_nextactionwaitstate`, `msdyn_operationparameter`, `msdyn_primaryentityid`, `msdyn_primaryname`, `msdyn_prioritygrade`, `msdyn_priorityscore`, `msdyn_sequenceid`, `msdyn_sequencename`, `msdyn_sequencestepid`, `msdyn_sortattributes`, `msdyn_workqueuerecordid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`

## Relationships




## Source

Generated from [msdyn_workqueuerecord (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_workqueuerecord')) on 2026-05-07.