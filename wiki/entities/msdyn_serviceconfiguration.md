---
logical: "msdyn_serviceconfiguration"
display: "Service Configuration"
entitySetName: "msdyn_serviceconfigurations"
primaryId: "msdyn_serviceconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Service Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_serviceconfiguration` |
| Display name | Service Configuration |
| Display (plural) | Service Configurations |
| Schema name | `msdyn_serviceconfiguration` |
| Entity set (Web API) | `msdyn_serviceconfigurations` |
| Primary id attribute | `msdyn_serviceconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_serviceconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_serviceconfigurations(<guid>)
POST /api/data/v9.2/msdyn_serviceconfigurations
PATCH /api/data/v9.2/msdyn_serviceconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_serviceconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_EntityLogicalName`, `msdyn_LookupAttributeforSLA`, `msdyn_name`, `msdyn_OrganizationID`, `msdyn_PauseState`, `msdyn_serviceconfigurationId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_serviceconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_serviceconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_serviceconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_serviceconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_serviceconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_serviceconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_serviceconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_serviceconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_serviceconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_serviceconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_serviceconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_serviceconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_serviceconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_serviceconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_serviceconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_serviceconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_serviceconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_serviceconfiguration.md) on 2026-05-06.