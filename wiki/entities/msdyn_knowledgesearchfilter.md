---
logical: "msdyn_knowledgesearchfilter"
display: "Knowledge search filter"
entitySetName: "msdyn_knowledgesearchfilters"
primaryId: "msdyn_knowledgesearchfilterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge search filter

Allows you to configure and manage filter settings.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgesearchfilter` |
| Display name | Knowledge search filter |
| Display (plural) | Knowledge search filters |
| Schema name | `msdyn_knowledgesearchfilter` |
| Entity set (Web API) | `msdyn_knowledgesearchfilters` |
| Primary id attribute | `msdyn_knowledgesearchfilterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgesearchfilters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_knowledgesearchfilters(<guid>)
POST /api/data/v9.2/msdyn_knowledgesearchfilters
PATCH /api/data/v9.2/msdyn_knowledgesearchfilters(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgesearchfilters(<guid>)
```

## Attributes

Writable: **19** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AttributeName`, `msdyn_DefaultValues`, `msdyn_Enabled`, `msdyn_EntityName`, `msdyn_IsCustom`, `msdyn_knowledgesearchfilterId`, `msdyn_name`, `msdyn_OrderId`, `msdyn_SelectedValues`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_knowledgesearchfilter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_knowledgesearchfilter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgesearchfilter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgesearchfilter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgesearchfilter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_knowledgesearchfilter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_knowledgesearchfilter` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_knowledgesearchfilter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgesearchfilter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgesearchfilter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgesearchfilter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_knowledgesearchfilter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_knowledgesearchfilter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgesearchfilter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgesearchfilter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgesearchfilter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_knowledgesearchfilter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_knowledgesearchfilter.md) on 2026-05-06.