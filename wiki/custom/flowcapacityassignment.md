---
logical: "flowcapacityassignment"
display: "Assegnazione capacità di flusso"
entitySetName: "flowcapacityassignments"
primaryId: "flowcapacityassignmentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Assegnazione capacità di flusso

Assegnazione della capacità per l'utilizzo in Power Automate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowcapacityassignment` |
| Display name | Assegnazione capacità di flusso |
| Display (plural) | Assegnazioni capacità di flusso |
| Schema name | `flowcapacityassignment` |
| Entity set (Web API) | `flowcapacityassignments` |
| Primary id attribute | `flowcapacityassignmentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowcapacityassignments?$select=name&$top=10
GET /api/data/v9.2/flowcapacityassignments(<guid>)
POST /api/data/v9.2/flowcapacityassignments
PATCH /api/data/v9.2/flowcapacityassignments(<guid>)
DELETE /api/data/v9.2/flowcapacityassignments(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`allocationorigin`, `allowautoallocation`, `capacityoverage`, `capacitysource`, `capacitytype`, `count`, `flowcapacityassignmentid`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `regarding`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowcapacityassignment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowcapacityassignment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowcapacityassignment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowcapacityassignment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowcapacityassignment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowcapacityassignment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowcapacityassignment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowcapacityassignment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `flowcapacityassignment_workflow` | [workflow](workflow.md) | `regarding` | `regarding_workflow` |
| `flowcapacityassignment_flowmachine` | [flowmachine](flowmachine.md) | `regarding` | `regarding_flowmachine` |
| `flowcapacityassignment_flowmachinegroup` | [flowmachinegroup](flowmachinegroup.md) | `regarding` | `regarding_flowmachinegroup` |
| `flowcapacityassignment_msdyn_pminferredtask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regarding` | `regarding_msdyn_pminferredtask` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowcapacityassignment_SyncErrors` | [flowcapacityassignment](flowcapacityassignment.md) | `regardingobjectid` | `regardingobjectid_flowcapacityassignment` |
| `flowcapacityassignment_AsyncOperations` | [flowcapacityassignment](flowcapacityassignment.md) | `regardingobjectid` | `regardingobjectid_flowcapacityassignment` |
| `flowcapacityassignment_MailboxTrackingFolders` | [flowcapacityassignment](flowcapacityassignment.md) | `regardingobjectid` | `regardingobjectid_flowcapacityassignment` |
| `flowcapacityassignment_UserEntityInstanceDatas` | [flowcapacityassignment](flowcapacityassignment.md) | `objectid` | `objectid_flowcapacityassignment` |
| `flowcapacityassignment_ProcessSession` | [flowcapacityassignment](flowcapacityassignment.md) | `regardingobjectid` | `regardingobjectid_flowcapacityassignment` |
| `flowcapacityassignment_BulkDeleteFailures` | [flowcapacityassignment](flowcapacityassignment.md) | `regardingobjectid` | `regardingobjectid_flowcapacityassignment` |
| `flowcapacityassignment_PrincipalObjectAttributeAccesses` | [flowcapacityassignment](flowcapacityassignment.md) | `objectid` | `objectid_flowcapacityassignment` |


## Source

Generated from [flowcapacityassignment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowcapacityassignment')) on 2026-05-07.