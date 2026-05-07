---
logical: "msdyn_applicationtabtemplate"
display: "Application Tab Template"
entitySetName: "msdyn_applicationtabtemplates"
primaryId: "msdyn_applicationtabtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Application Tab Template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_applicationtabtemplate` |
| Display name | Application Tab Template |
| Display (plural) | Application Tab Templates |
| Schema name | `msdyn_applicationtabtemplate` |
| Entity set (Web API) | `msdyn_applicationtabtemplates` |
| Primary id attribute | `msdyn_applicationtabtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_applicationtabtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_applicationtabtemplates(<guid>)
POST /api/data/v9.2/msdyn_applicationtabtemplates
PATCH /api/data/v9.2/msdyn_applicationtabtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_applicationtabtemplates(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_applicationtabtemplateId`, `msdyn_Description`, `msdyn_name`, `msdyn_pagetype`, `msdyn_pinned`, `msdyn_templateparameters`, `msdyn_title`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_applicationtabtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_applicationtabtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_applicationtabtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_applicationtabtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_applicationtabtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_applicationtabtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_applicationtabtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_applicationtabtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_applicationtabtemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_applicationtabtemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_applicationtabtemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_applicationtabtemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_applicationtabtemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_applicationtabtemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_applicationtabtemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_applicationtabtemplate_sessiontemplate_anchortab` | _n/a_ | `msdyn_anchortab` | _n/a_ |
| `msdyn_applicationtabtemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_applicationtabtemplate_templateparameter` | _n/a_ | `msdyn_applicationtabtemplateid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessiontemplate_applicationtab` | [msdyn_applicationtabtemplateid](msdyn_applicationtabtemplateid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_applicationtabtemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_applicationtabtemplate.md) on 2026-05-06.