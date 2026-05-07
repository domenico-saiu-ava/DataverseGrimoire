---
logical: "msdyn_workqueuerecord"
display: "Work Queue Record"
entitySetName: "msdyn_workqueuerecords"
primaryId: "msdyn_workqueuerecordid"
primaryName: "msdyn_primaryname"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Work Queue Record

Entity created to store WorkQueue Data Model Records

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_workqueuerecord` |
| Display name | Work Queue Record |
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

`ImportSequenceNumber`, `msdyn_displayattributes`, `msdyn_duetime`, `msdyn_endtime`, `msdyn_entitysetname`, `msdyn_entitytypecode`, `msdyn_entitytypedisplayname`, `msdyn_entitytypelogicalname`, `msdyn_filterattributes`, `msdyn_linkedactivityid`, `msdyn_nextactionerrorstate`, `msdyn_nextactionid`, `msdyn_nextactionname`, `msdyn_nextactionsource`, `msdyn_nextactionsubtype`, `msdyn_nextactiontype`, `msdyn_nextactiontypedisplayname`, `msdyn_nextactionwaitstate`, `msdyn_operationparameter`, `msdyn_primaryentityid`, `msdyn_primaryname`, `msdyn_prioritygrade`, `msdyn_priorityscore`, `msdyn_sequenceid`, `msdyn_sequencename`, `msdyn_sequencestepid`, `msdyn_sortattributes`, `msdyn_workqueuerecordId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`

## Relationships




## Source

Generated from [msdyn_workqueuerecord.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_workqueuerecord.md) on 2026-05-06.