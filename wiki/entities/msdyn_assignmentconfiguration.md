---
logical: "msdyn_assignmentconfiguration"
display: "Assignment Configuration"
entitySetName: "msdyn_assignmentconfigurations"
primaryId: "msdyn_assignmentconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Assignment Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assignmentconfiguration` |
| Display name | Assignment Configuration |
| Display (plural) | Assignment Configurations |
| Schema name | `msdyn_assignmentconfiguration` |
| Entity set (Web API) | `msdyn_assignmentconfigurations` |
| Primary id attribute | `msdyn_assignmentconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_assignmentconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_assignmentconfigurations(<guid>)
POST /api/data/v9.2/msdyn_assignmentconfigurations
PATCH /api/data/v9.2/msdyn_assignmentconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_assignmentconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_assignmentconfigurationId`, `msdyn_description`, `msdyn_isactiveconfiguration`, `msdyn_name`, `msdyn_queueid`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_assignmentconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_assignmentconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assignmentconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assignmentconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assignmentconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_queue_msdyn_assignmentconfiguration_queueid` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |
| `owner_msdyn_assignmentconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_assignmentconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_assignmentconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assignmentconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_assignmentconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_assignmentconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentconfiguration_msdyn_assignmentconfigurationstep` | _n/a_ | `msdyn_assignmentconfigurationid` | _n/a_ |
| `msdyn_assignmentconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_assignmentconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_assignmentconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_assignmentconfiguration.md) on 2026-05-06.