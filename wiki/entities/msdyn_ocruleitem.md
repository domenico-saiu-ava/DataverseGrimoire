---
logical: "msdyn_ocruleitem"
display: "Rule Item"
entitySetName: "msdyn_ocruleitems"
primaryId: "msdyn_ocruleitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Rule Item

Stores the condition and destination including Omnichannel queues or agents

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocruleitem` |
| Display name | Rule Item |
| Display (plural) | Rule Items |
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

Writable: **22** · Read-only: **18**

### Writable

`Description`, `ImportSequenceNumber`, `IsCustomizable`, `msdyn_Action`, `msdyn_Assignedto`, `msdyn_cdsqueueassignid`, `msdyn_Condition`, `msdyn_Expression`, `msdyn_liveworkstream`, `msdyn_name`, `msdyn_ocruleitemId`, `msdyn_priority`, `msdyn_QueueAssignId`, `msdyn_Rulejson`, `msdyn_UserAssignId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocruleitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocruleitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocruleitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocruleitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocruleitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_liveworkstream_ocruleitem` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstream` | `msdyn_liveworkstream` |
| `msdyn_queue_ocruleitem` | [queue](queue.md) | `msdyn_cdsqueueassignid` | `msdyn_cdsqueueassignid` |
| `msdyn_systemuser_ocruleitem` | [systemuser](systemuser.md) | `msdyn_userassignid` | `msdyn_UserAssignId` |
| `owner_msdyn_ocruleitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocruleitem` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocruleitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocruleitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocruleitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocruleitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocruleitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocruleitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocruleitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocruleitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocruleitem.md) on 2026-05-06.