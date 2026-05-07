---
logical: "msdyn_routingconfiguration"
display: "Routing configuration"
entitySetName: "msdyn_routingconfigurations"
primaryId: "msdyn_routingconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Routing configuration

Defines routing details for the workstream

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_routingconfiguration` |
| Display name | Routing configuration |
| Display (plural) | Routing configurations |
| Schema name | `msdyn_routingconfiguration` |
| Entity set (Web API) | `msdyn_routingconfigurations` |
| Primary id attribute | `msdyn_routingconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_routingconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_routingconfigurations(<guid>)
POST /api/data/v9.2/msdyn_routingconfigurations
PATCH /api/data/v9.2/msdyn_routingconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_routingconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_isactiveconfiguration`, `msdyn_liveworkstreamid`, `msdyn_name`, `msdyn_routingconfigurationId`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_routingconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_routingconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_routingconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_routingconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_routingconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `owner_msdyn_routingconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_routingconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_routingconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_routingconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_routingconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_routingconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingconfiguration_msdyn_routingconfigurationstep_routingconfigurationid` | _n/a_ | `msdyn_routingconfigurationid` | _n/a_ |
| `msdyn_routingconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_routingconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_routingconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_routingconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_routingconfiguration.md) on 2026-05-06.