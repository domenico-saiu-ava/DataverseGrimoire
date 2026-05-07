---
logical: "msdyn_kpieventdefinition"
display: "KPI Event Definition"
entitySetName: "msdyn_kpieventdefinitions"
primaryId: "msdyn_kpieventdefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# KPI Event Definition

Primary entity for defining a KPI event

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kpieventdefinition` |
| Display name | KPI Event Definition |
| Display (plural) | KPI Event Definitions |
| Schema name | `msdyn_KPIEventDefinition` |
| Entity set (Web API) | `msdyn_kpieventdefinitions` |
| Primary id attribute | `msdyn_kpieventdefinitionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kpieventdefinitions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kpieventdefinitions(<guid>)
POST /api/data/v9.2/msdyn_kpieventdefinitions
PATCH /api/data/v9.2/msdyn_kpieventdefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_kpieventdefinitions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_EventDescription`, `msdyn_EventDisplayName`, `msdyn_EventType`, `msdyn_KPIEventDefinitionId`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_kpieventdefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_kpieventdefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kpieventdefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kpieventdefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kpieventdefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_kpieventdefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_kpieventdefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_kpieventdefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kpieventdefinition_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kpieventdefinition_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kpieventdefinition_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_kpieventdefinition_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_kpieventdefinition_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kpieventdefinition_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_kpieventdefinition_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kpieventdefinition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_kpieventdefinition.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_kpieventdefinition.md) on 2026-05-06.