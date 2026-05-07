---
logical: "msdyn_intentcontexthistory"
display: "Intent Context History"
entitySetName: "msdyn_intentcontexthistories"
primaryId: "msdyn_intentcontexthistoryid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Intent Context History

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentcontexthistory` |
| Display name | Intent Context History |
| Display (plural) | Intent Context Histories |
| Schema name | `msdyn_IntentContextHistory` |
| Entity set (Web API) | `msdyn_intentcontexthistories` |
| Primary id attribute | `msdyn_intentcontexthistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentcontexthistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentcontexthistories(<guid>)
POST /api/data/v9.2/msdyn_intentcontexthistories
PATCH /api/data/v9.2/msdyn_intentcontexthistories(<guid>)
DELETE /api/data/v9.2/msdyn_intentcontexthistories(<guid>)
```

## Attributes

Writable: **14** · Read-only: **7**

### Writable

`ImportSequenceNumber`, `msdyn_AgentActivityType`, `msdyn_AgentType`, `msdyn_CorrelationID`, `msdyn_IntentContext`, `msdyn_IntentContextHistoryId`, `msdyn_LastProcessedTimestamp`, `msdyn_Name`, `msdyn_RelatedRecordEntityLogicalName`, `msdyn_RelatedRecordID`, `msdyn_relatedrecordidIdType`, `OverriddenCreatedOn`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentcontexthistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentcontexthistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentcontexthistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentcontexthistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_intentcontexthistory_poly_incident` | [incident](incident.md) | `msdyn_relatedrecordid` | `msdyn_relatedrecordid_incident` |
| `msdyn_intentcontexthistory_poly_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_relatedrecordid` | `msdyn_relatedrecordid_msdyn_ocliveworkitem` |



## Source

Generated from [msdyn_intentcontexthistory.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentcontexthistory.md) on 2026-05-06.