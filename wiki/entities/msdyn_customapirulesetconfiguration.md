---
logical: "msdyn_customapirulesetconfiguration"
display: "Custom API Ruleset Configuration"
entitySetName: "msdyn_customapirulesetconfigurations"
primaryId: "msdyn_customapirulesetconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Custom API Ruleset Configuration

Configuration table for setting up custom APIs for usage inside the Unified routing system

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customapirulesetconfiguration` |
| Display name | Custom API Ruleset Configuration |
| Display (plural) | Custom API Ruleset Configurations |
| Schema name | `msdyn_customapirulesetconfiguration` |
| Entity set (Web API) | `msdyn_customapirulesetconfigurations` |
| Primary id attribute | `msdyn_customapirulesetconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customapirulesetconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_customapirulesetconfigurations(<guid>)
POST /api/data/v9.2/msdyn_customapirulesetconfigurations
PATCH /api/data/v9.2/msdyn_customapirulesetconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_customapirulesetconfigurations(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_CustomAPI`, `msdyn_CustomAPIRequestParameter`, `msdyn_CustomAPIResponseProperty`, `msdyn_customapirulesetconfigurationId`, `msdyn_name`, `msdyn_PersistOutputData`, `msdyn_RefreshInputData`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_customapirulesetconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_customapirulesetconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customapirulesetconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customapirulesetconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customapirulesetconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_customapi_msdyn_customapirulesetconfiguration_CustomAPI` | [customapi](customapi.md) | `msdyn_customapi` | `msdyn_CustomAPI` |
| `msdyn_customapirequestparameter_msdyn_customapirulesetconfiguration_CustomAPIRequestParameter` | [customapirequestparameter](customapirequestparameter.md) | `msdyn_customapirequestparameter` | `msdyn_CustomAPIRequestParameter` |
| `msdyn_customapiresponseproperty_msdyn_customapirulesetconfiguration_CustomAPIResponseProperty` | [customapiresponseproperty](customapiresponseproperty.md) | `msdyn_customapiresponseproperty` | `msdyn_CustomAPIResponseProperty` |
| `owner_msdyn_customapirulesetconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_customapirulesetconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_customapirulesetconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customapirulesetconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customapirulesetconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customapirulesetconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customapirulesetconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customapirulesetconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customapirulesetconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customapirulesetconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customapirulesetconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_customapirulesetconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_customapirulesetconfiguration.md) on 2026-05-06.