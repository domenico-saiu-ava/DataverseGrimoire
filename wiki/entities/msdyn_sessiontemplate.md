---
logical: "msdyn_sessiontemplate"
display: "Session Template"
entitySetName: "msdyn_sessiontemplates"
primaryId: "msdyn_sessiontemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Session Template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessiontemplate` |
| Display name | Session Template |
| Display (plural) | Session Templates |
| Schema name | `msdyn_sessiontemplate` |
| Entity set (Web API) | `msdyn_sessiontemplates` |
| Primary id attribute | `msdyn_sessiontemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sessiontemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sessiontemplates(<guid>)
POST /api/data/v9.2/msdyn_sessiontemplates
PATCH /api/data/v9.2/msdyn_sessiontemplates(<guid>)
DELETE /api/data/v9.2/msdyn_sessiontemplates(<guid>)
```

## Attributes

Writable: **23** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_anchortab`, `msdyn_description`, `msdyn_enablebuildexpression`, `msdyn_EnableTitleSync`, `msdyn_entity`, `msdyn_expressiondata`, `msdyn_name`, `msdyn_panelstate`, `msdyn_sessionicon`, `msdyn_sessiontemplateId`, `msdyn_sessiontype`, `msdyn_title`, `msdyn_Type`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_sessiontemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_sessiontemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sessiontemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sessiontemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sessiontemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_applicationtabtemplate_sessiontemplate_anchortab` | [msdyn_applicationtabtemplate](msdyn_applicationtabtemplate.md) | `msdyn_anchortab` | `msdyn_anchortab` |
| `msdyn_webresource_sessiontemplate_sessionicon` | [webresource](webresource.md) | `msdyn_sessionicon` | `msdyn_sessionicon` |
| `owner_msdyn_sessiontemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_sessiontemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_sessiontemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessiontemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessiontemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessiontemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_sessiontemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_sessiontemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessiontemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sessiontemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessiontemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfiguration_sessiontemplate` | [msdyn_sessiontemplateid](msdyn_sessiontemplateid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat` | [msdyn_sessiontemplateid](msdyn_sessiontemplateid.md) | _n/a_ | _n/a_ |
| `msdyn_sessiontemplate_applicationtab` | [msdyn_sessiontemplateid](msdyn_sessiontemplateid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_sessiontemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sessiontemplate.md) on 2026-05-06.