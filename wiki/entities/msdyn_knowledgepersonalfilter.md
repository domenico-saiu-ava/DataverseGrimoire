---
logical: "msdyn_knowledgepersonalfilter"
display: "Knowledge search personal filter config"
entitySetName: "msdyn_knowledgepersonalfilters"
primaryId: "msdyn_knowledgepersonalfilterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge search personal filter config

Allows you to configure and manage personal filter settings.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgepersonalfilter` |
| Display name | Knowledge search personal filter config |
| Display (plural) | Knowledge search personal filters |
| Schema name | `msdyn_knowledgepersonalfilter` |
| Entity set (Web API) | `msdyn_knowledgepersonalfilters` |
| Primary id attribute | `msdyn_knowledgepersonalfilterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgepersonalfilters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_knowledgepersonalfilters(<guid>)
POST /api/data/v9.2/msdyn_knowledgepersonalfilters
PATCH /api/data/v9.2/msdyn_knowledgepersonalfilters(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgepersonalfilters(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AttributeName`, `msdyn_Enabled`, `msdyn_EntityName`, `msdyn_knowledgepersonalfilterId`, `msdyn_name`, `msdyn_PreferredValues`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_knowledgepersonalfilter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_knowledgepersonalfilter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgepersonalfilter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgepersonalfilter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgepersonalfilter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_knowledgepersonalfilter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_knowledgepersonalfilter` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_knowledgepersonalfilter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgepersonalfilter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgepersonalfilter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgepersonalfilter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_knowledgepersonalfilter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_knowledgepersonalfilter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgepersonalfilter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgepersonalfilter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgepersonalfilter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_knowledgepersonalfilter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_knowledgepersonalfilter.md) on 2026-05-06.