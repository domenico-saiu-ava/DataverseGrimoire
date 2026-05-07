---
logical: "msdyn_slakpi"
display: "SLA KPI"
entitySetName: "msdyn_slakpis"
primaryId: "msdyn_slakpiid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# SLA KPI

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_slakpi` |
| Display name | SLA KPI |
| Display (plural) | SLA KPIs |
| Schema name | `msdyn_slakpi` |
| Entity set (Web API) | `msdyn_slakpis` |
| Primary id attribute | `msdyn_slakpiid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_slakpis?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_slakpis(<guid>)
POST /api/data/v9.2/msdyn_slakpis
PATCH /api/data/v9.2/msdyn_slakpis(<guid>)
DELETE /api/data/v9.2/msdyn_slakpis(<guid>)
```

## Attributes

Writable: **20** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AdvancedPauseConfiguration`, `msdyn_ApplicableFromDisplayName`, `msdyn_ApplicableFromField`, `msdyn_Description`, `msdyn_EntityDisplayName`, `msdyn_EntityName`, `msdyn_KPIField`, `msdyn_name`, `msdyn_PauseConfigurationXml`, `msdyn_slakpiId`, `msdyn_WorkflowInfo`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_slakpi` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_slakpi_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_slakpi_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_slakpi_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_slakpi_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_slakpi` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_slakpi` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_slakpi` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_slakpi_slaitem` | _n/a_ | `msdyn_slakpiid` | _n/a_ |
| `msdyn_slakpi_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_slakpi_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_slakpi_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_slakpi_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_slakpi_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_slakpi_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_slakpi_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_slakpi_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_slakpi.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_slakpi.md) on 2026-05-06.