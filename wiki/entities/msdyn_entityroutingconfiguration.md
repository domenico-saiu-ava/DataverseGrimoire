---
logical: "msdyn_entityroutingconfiguration"
display: "Entity"
entitySetName: "msdyn_entityroutingconfigurations"
primaryId: "msdyn_entityroutingconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Entity

Entity Routing Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityroutingconfiguration` |
| Display name | Entity |
| Display (plural) | Entities |
| Schema name | `msdyn_entityroutingconfiguration` |
| Entity set (Web API) | `msdyn_entityroutingconfigurations` |
| Primary id attribute | `msdyn_entityroutingconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityroutingconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityroutingconfigurations(<guid>)
POST /api/data/v9.2/msdyn_entityroutingconfigurations
PATCH /api/data/v9.2/msdyn_entityroutingconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_entityroutingconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_DeroutingProcess`, `msdyn_entity`, `msdyn_entityroutingconfigurationId`, `msdyn_entitysetname`, `msdyn_name`, `msdyn_relationshipname`, `msdyn_RoutingProcess`, `msdyn_routingrulesubgrid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_entityroutingconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_entityroutingconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityroutingconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityroutingconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityroutingconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess` | [workflow](workflow.md) | `msdyn_deroutingprocess` | `msdyn_DeroutingProcess` |
| `msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess` | [workflow](workflow.md) | `msdyn_routingprocess` | `msdyn_RoutingProcess` |
| `owner_msdyn_entityroutingconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_entityroutingconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_entityroutingconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityroutingconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityroutingconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityroutingconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityroutingconfiguration_msdyn_liveworkstream` | _n/a_ | `msdyn_entityroutingconfigurationid` | _n/a_ |
| `msdyn_entityroutingconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_entityroutingconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityroutingconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_entityroutingconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_entityroutingconfiguration.md) on 2026-05-06.