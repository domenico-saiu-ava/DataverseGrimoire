---
logical: "msdyn_templateparameter"
display: "Template Parameter"
entitySetName: "msdyn_templateparameters"
primaryId: "msdyn_templateparameterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Template Parameter

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templateparameter` |
| Display name | Template Parameter |
| Display (plural) | Template Parameters |
| Schema name | `msdyn_templateparameter` |
| Entity set (Web API) | `msdyn_templateparameters` |
| Primary id attribute | `msdyn_templateparameterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_templateparameters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_templateparameters(<guid>)
POST /api/data/v9.2/msdyn_templateparameters
PATCH /api/data/v9.2/msdyn_templateparameters(<guid>)
DELETE /api/data/v9.2/msdyn_templateparameters(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_applicationtabtemplateid`, `msdyn_name`, `msdyn_templateparameterId`, `msdyn_UniqueName`, `msdyn_value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_templateparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_templateparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_templateparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_templateparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_templateparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_applicationtabtemplate_templateparameter` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `msdyn_applicationtabtemplateid` | `msdyn_applicationtabtemplateid` |
| `owner_msdyn_templateparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_templateparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_templateparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templateparameter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateparameter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateparameter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_templateparameter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_templateparameter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateparameter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_templateparameter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templateparameter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_templateparameter.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_templateparameter.md) on 2026-05-06.