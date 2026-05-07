---
logical: "powerbireportapdx"
display: "powerbireportapdx"
entitySetName: "powerbireportapdxes"
primaryId: "powerbireportapdxid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# powerbireportapdx

PowerBI Report appendix entity for unmanaged technical attributes

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerbireportapdx` |
| Display name | powerbireportapdx |
| Display (plural) | powerbireportapdxes |
| Schema name | `powerbireportapdx` |
| Entity set (Web API) | `powerbireportapdxes` |
| Primary id attribute | `powerbireportapdxid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerbireportapdxes?$select=name&$top=10
GET /api/data/v9.2/powerbireportapdxes(<guid>)
POST /api/data/v9.2/powerbireportapdxes
PATCH /api/data/v9.2/powerbireportapdxes(<guid>)
DELETE /api/data/v9.2/powerbireportapdxes(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ArtifactObjectId`, `ETag`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentId`, `powerbireportapdxId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `WorkspaceObjectId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerbireportapdx` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_powerbireportapdx_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerbireportapdx_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerbireportapdx_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerbireportapdx_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerbireportapdx` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_powerbireportapdx` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerbireportapdx` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerbireportapdx_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbireportapdx_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbireportapdx_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `powerbireportapdx_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `powerbireportapdx_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbireportapdx_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerbireportapdx_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbireportapdx_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerbireportapdx.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerbireportapdx.md) on 2026-05-06.