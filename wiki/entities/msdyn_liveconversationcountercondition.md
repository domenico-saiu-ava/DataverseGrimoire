---
logical: "msdyn_liveconversationcountercondition"
display: "Live Conversation Counter Condition"
entitySetName: "msdyn_liveconversationcounterconditions"
primaryId: "msdyn_liveconversationcounterconditionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Live Conversation Counter Condition

Live Conversation Counter Condition

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_liveconversationcountercondition` |
| Display name | Live Conversation Counter Condition |
| Display (plural) | Live Conversation Counter Conditions |
| Schema name | `msdyn_liveconversationcountercondition` |
| Entity set (Web API) | `msdyn_liveconversationcounterconditions` |
| Primary id attribute | `msdyn_liveconversationcounterconditionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_liveconversationcounterconditions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_liveconversationcounterconditions(<guid>)
POST /api/data/v9.2/msdyn_liveconversationcounterconditions
PATCH /api/data/v9.2/msdyn_liveconversationcounterconditions(<guid>)
DELETE /api/data/v9.2/msdyn_liveconversationcounterconditions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_liveconversationcounterconditionId`, `msdyn_name`, `msdyn_units`, `msdyn_urgencylevel`, `msdyn_value`, `msdyn_workstreamId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_liveconversationcountercondition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_liveconversationcountercondition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_liveconversationcountercondition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_liveconversationcountercondition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_liveconversationcountercondition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_workstream_liveconversationcountercond` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstreamid` | `msdyn_workstreamid` |
| `owner_msdyn_liveconversationcountercondition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_liveconversationcountercondition` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_liveconversationcountercondition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_liveconversationcountercondition_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveconversationcountercondition_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveconversationcountercondition_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveconversationcountercondition_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_liveconversationcountercondition_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveconversationcountercondition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_liveconversationcountercondition.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_liveconversationcountercondition.md) on 2026-05-06.