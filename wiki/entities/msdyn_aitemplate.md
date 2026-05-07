---
logical: "msdyn_aitemplate"
display: "AI Template"
entitySetName: "msdyn_aitemplates"
primaryId: "msdyn_aitemplateid"
primaryName: "msdyn_uniquename"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitemplate` |
| Display name | AI Template |
| Display (plural) | AI Templates |
| Schema name | `msdyn_AITemplate` |
| Entity set (Web API) | `msdyn_aitemplates` |
| Primary id attribute | `msdyn_aitemplateid` |
| Primary name attribute | `msdyn_uniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitemplates?$select=msdyn_uniquename&$top=10
GET /api/data/v9.2/msdyn_aitemplates(<guid>)
POST /api/data/v9.2/msdyn_aitemplates
PATCH /api/data/v9.2/msdyn_aitemplates(<guid>)
DELETE /api/data/v9.2/msdyn_aitemplates(<guid>)
```

## Attributes

Writable: **23** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IntroducedVersion`, `IsCustomizable`, `msdyn_AITemplateId`, `msdyn_DataBinding`, `msdyn_defaultrunschedulingoptions`, `msdyn_IsTrainable`, `msdyn_ModelAction`, `msdyn_ResourceInfo`, `msdyn_RunConfigSchema`, `msdyn_RunDataSpecification`, `msdyn_TemplateVersion`, `msdyn_TrainingConfigSchema`, `msdyn_TrainingDataSpecification`, `msdyn_UniqueName`, `msdyn_UXConfiguration`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_AITemplateIdUnique`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aitemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aitemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_aitemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aitemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aitemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitemplate_msdyn_aimodel` | _n/a_ | `msdyn_templateid` | _n/a_ |
| `msdyn_aitemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aitemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aitemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aitemplate.md) on 2026-05-06.