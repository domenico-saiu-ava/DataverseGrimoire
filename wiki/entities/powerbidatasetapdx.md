---
logical: "powerbidatasetapdx"
display: "powerbidatasetapdx"
entitySetName: "powerbidatasetapdxes"
primaryId: "powerbidatasetapdxid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# powerbidatasetapdx

PowerBI Dataset appendix entity - for unmanaged technical attributes

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerbidatasetapdx` |
| Display name | powerbidatasetapdx |
| Display (plural) | powerbidatasetapdxes |
| Schema name | `powerbidatasetapdx` |
| Entity set (Web API) | `powerbidatasetapdxes` |
| Primary id attribute | `powerbidatasetapdxid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerbidatasetapdxes?$select=name&$top=10
GET /api/data/v9.2/powerbidatasetapdxes(<guid>)
POST /api/data/v9.2/powerbidatasetapdxes
PATCH /api/data/v9.2/powerbidatasetapdxes(<guid>)
DELETE /api/data/v9.2/powerbidatasetapdxes(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ArtifactObjectId`, `ETag`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentId`, `powerbidatasetapdxId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `WorkspaceObjectId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerbidatasetapdx` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_powerbidatasetapdx_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerbidatasetapdx_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerbidatasetapdx_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerbidatasetapdx_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerbidatasetapdx` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_powerbidatasetapdx` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerbidatasetapdx` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerbidatasetapdx_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbidatasetapdx_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbidatasetapdx_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `powerbidatasetapdx_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `powerbidatasetapdx_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbidatasetapdx_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerbidatasetapdx_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbidatasetapdx_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerbidatasetapdx.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerbidatasetapdx.md) on 2026-05-06.