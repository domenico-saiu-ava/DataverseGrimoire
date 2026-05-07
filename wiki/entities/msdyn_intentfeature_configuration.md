---
logical: "msdyn_intentfeature_configuration"
display: "msdyn_intentfeature_configuration"
entitySetName: "msdyn_intentfeature_configurations"
primaryId: "msdyn_intentfeature_configurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_intentfeature_configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentfeature_configuration` |
| Display name | msdyn_intentfeature_configuration |
| Display (plural) | msdyn_intentfeature_configurations |
| Schema name | `msdyn_intentfeature_configuration` |
| Entity set (Web API) | `msdyn_intentfeature_configurations` |
| Primary id attribute | `msdyn_intentfeature_configurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentfeature_configurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentfeature_configurations(<guid>)
POST /api/data/v9.2/msdyn_intentfeature_configurations
PATCH /api/data/v9.2/msdyn_intentfeature_configurations(<guid>)
DELETE /api/data/v9.2/msdyn_intentfeature_configurations(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_batchjob_runstatus`, `msdyn_copilotprovisioning_status`, `msdyn_feature_status`, `msdyn_intentfeature_configurationId`, `msdyn_isenabled`, `msdyn_kbcopilotprovisioning_status`, `msdyn_Name`, `msdyn_packageprovisioning_status`, `msdyn_provision_trigger_time`, `msdyn_target_entity_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intentfeature_configuration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intentfeature_configuration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentfeature_configuration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentfeature_configuration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentfeature_configuration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_intentfeature_configuration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intentfeature_configuration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intentfeature_configuration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentfeature_configuration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentfeature_configuration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentfeature_configuration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intentfeature_configuration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intentfeature_configuration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentfeature_configuration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intentfeature_configuration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentfeature_configuration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_intentfeature_configuration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentfeature_configuration.md) on 2026-05-06.