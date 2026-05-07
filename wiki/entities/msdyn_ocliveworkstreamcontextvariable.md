---
logical: "msdyn_ocliveworkstreamcontextvariable"
display: "Context variable"
entitySetName: "msdyn_ocliveworkstreamcontextvariables"
primaryId: "msdyn_ocliveworkstreamcontextvariableid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Context variable

Stores the context variables for a work stream.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkstreamcontextvariable` |
| Display name | Context variable |
| Display (plural) | Context variables |
| Schema name | `msdyn_ocliveworkstreamcontextvariable` |
| Entity set (Web API) | `msdyn_ocliveworkstreamcontextvariables` |
| Primary id attribute | `msdyn_ocliveworkstreamcontextvariableid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkstreamcontextvariables?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkstreamcontextvariables(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkstreamcontextvariables
PATCH /api/data/v9.2/msdyn_ocliveworkstreamcontextvariables(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkstreamcontextvariables(<guid>)
```

## Attributes

Writable: **20** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_datatype`, `msdyn_displayname`, `msdyn_entitylogicalname`, `msdyn_isdisplayable`, `msdyn_islist`, `msdyn_ismodifiable`, `msdyn_issystemdefined`, `msdyn_liveworkstreamid`, `msdyn_name`, `msdyn_ocliveworkstreamcontextvariableId`, `msdyn_relationshipname`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocliveworkstreamcontextvariable` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocliveworkstreamcontextvariable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkstreamcontextvariable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkstreamcontextvariable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkstreamcontextvariable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `owner_msdyn_ocliveworkstreamcontextvariable` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocliveworkstreamcontextvariable` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocliveworkstreamcontextvariable` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_lwscv_msdyn_ocliveworkitemcontextitem_ocliveworkstreamcontextvariableid` | _n/a_ | `msdyn_ocliveworkstreamcontextvariableid` | _n/a_ |
| `msdyn_ocliveworkitemcontextitemelastic_msdyn_ocliveworkstreamcontextvariableid_msdyn_ocliveworkstreamcontextvariable` | _n/a_ | `msdyn_ocliveworkstreamcontextvariableid` | _n/a_ |
| `msdyn_ocliveworkstreamcontextvariable_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkstreamcontextvariable_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkstreamcontextvariable_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocliveworkstreamcontextvariable_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocliveworkstreamcontextvariable_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkstreamcontextvariable_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocliveworkstreamcontextvariable_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkstreamcontextvariable_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocliveworkstreamcontextvariable.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocliveworkstreamcontextvariable.md) on 2026-05-06.