---
logical: "msdyn_templatecontextvariable"
display: "Template Context Variable"
entitySetName: "msdyn_templatecontextvariables"
primaryId: "msdyn_templatecontextvariableid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Template Context Variable

Used to create Context Variables that can be used in Template rule set entity. Makes Context variables available on Global level and gives option to make Templates Channel Agnostic.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templatecontextvariable` |
| Display name | Template Context Variable |
| Display (plural) | Template Context Variables |
| Schema name | `msdyn_templatecontextvariable` |
| Entity set (Web API) | `msdyn_templatecontextvariables` |
| Primary id attribute | `msdyn_templatecontextvariableid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_templatecontextvariables?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_templatecontextvariables(<guid>)
POST /api/data/v9.2/msdyn_templatecontextvariables
PATCH /api/data/v9.2/msdyn_templatecontextvariables(<guid>)
DELETE /api/data/v9.2/msdyn_templatecontextvariables(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_datatype`, `msdyn_displayname`, `msdyn_name`, `msdyn_templatecontextvariableId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_templatecontextvariable` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_templatecontextvariable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_templatecontextvariable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_templatecontextvariable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_templatecontextvariable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_templatecontextvariable` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_templatecontextvariable` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_templatecontextvariable` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templatecontextvariable_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templatecontextvariable_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templatecontextvariable_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_templatecontextvariable_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_templatecontextvariable_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templatecontextvariable_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_templatecontextvariable_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templatecontextvariable_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templatecontextvariable_msdyn_templateruleset_msdyn_templateruleset` | [msdyn_templatecontextvariableid](msdyn_templatecontextvariableid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_templatecontextvariable.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_templatecontextvariable.md) on 2026-05-06.