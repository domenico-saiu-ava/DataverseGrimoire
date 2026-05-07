---
logical: "msdyn_ocruleitem"
display: "Elemento regola"
entitySetName: "msdyn_ocruleitems"
primaryId: "msdyn_ocruleitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento regola

Archivia la condizione e la destinazione inclusi code e agenti multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocruleitem` |
| Display name | Elemento regola |
| Display (plural) | Elementi regola |
| Schema name | `msdyn_ocruleitem` |
| Entity set (Web API) | `msdyn_ocruleitems` |
| Primary id attribute | `msdyn_ocruleitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocruleitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocruleitems(<guid>)
POST /api/data/v9.2/msdyn_ocruleitems
PATCH /api/data/v9.2/msdyn_ocruleitems(<guid>)
DELETE /api/data/v9.2/msdyn_ocruleitems(<guid>)
```

## Attributes

Writable: **21** · Read-only: **16**

### Writable

`description`, `importsequencenumber`, `iscustomizable`, `msdyn_action`, `msdyn_assignedto`, `msdyn_cdsqueueassignid`, `msdyn_condition`, `msdyn_expression`, `msdyn_liveworkstream`, `msdyn_name`, `msdyn_ocruleitemid`, `msdyn_priority`, `msdyn_queueassignid`, `msdyn_rulejson`, `msdyn_userassignid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocruleitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocruleitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocruleitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocruleitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocruleitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocruleitem` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocruleitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocruleitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_liveworkstream_ocruleitem` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstream` | `msdyn_liveworkstream` |
| `msdyn_omnichannelqueue_ocruleitem` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `msdyn_queueassignid` | `msdyn_QueueAssignId` |
| `msdyn_systemuser_ocruleitem` | [systemuser](systemuser.md) | `msdyn_userassignid` | `msdyn_UserAssignId` |
| `msdyn_queue_ocruleitem` | [queue](queue.md) | `msdyn_cdsqueueassignid` | `msdyn_cdsqueueassignid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocruleitem_SyncErrors` | [msdyn_ocruleitem](msdyn_ocruleitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocruleitem` |
| `msdyn_ocruleitem_AsyncOperations` | [msdyn_ocruleitem](msdyn_ocruleitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocruleitem` |
| `msdyn_ocruleitem_MailboxTrackingFolders` | [msdyn_ocruleitem](msdyn_ocruleitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocruleitem` |
| `msdyn_ocruleitem_UserEntityInstanceDatas` | [msdyn_ocruleitem](msdyn_ocruleitem.md) | `objectid` | `objectid_msdyn_ocruleitem` |
| `msdyn_ocruleitem_ProcessSession` | [msdyn_ocruleitem](msdyn_ocruleitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocruleitem` |
| `msdyn_ocruleitem_BulkDeleteFailures` | [msdyn_ocruleitem](msdyn_ocruleitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocruleitem` |
| `msdyn_ocruleitem_PrincipalObjectAttributeAccesses` | [msdyn_ocruleitem](msdyn_ocruleitem.md) | `objectid` | `objectid_msdyn_ocruleitem` |


## Source

Generated from [msdyn_ocruleitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocruleitem')) on 2026-05-07.