---
logical: "msdyn_ocbulkaction"
display: "Bulk Action"
entitySetName: "msdyn_ocbulkactions"
primaryId: "msdyn_ocbulkactionid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
---

# Bulk Action

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocbulkaction` |
| Display name | Bulk Action |
| Display (plural) | Bulk Action History |
| Schema name | `msdyn_ocbulkaction` |
| Entity set (Web API) | `msdyn_ocbulkactions` |
| Primary id attribute | `msdyn_ocbulkactionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocbulkactions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocbulkactions(<guid>)
POST /api/data/v9.2/msdyn_ocbulkactions
PATCH /api/data/v9.2/msdyn_ocbulkactions(<guid>)
DELETE /api/data/v9.2/msdyn_ocbulkactions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_actionstatus`, `msdyn_actionstatusdetails`, `msdyn_bulkactiontype`, `msdyn_createdon`, `msdyn_endtime`, `msdyn_name`, `msdyn_nb_of_recipients`, `msdyn_ocbulkactionId`, `msdyn_starttime`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocbulkaction` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocbulkaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocbulkaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocbulkaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocbulkaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_ocbulkaction` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocbulkaction` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocbulkaction` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [msdyn_ocbulkaction.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocbulkaction.md) on 2026-05-06.