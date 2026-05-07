---
logical: "msdyn_ocliveworkitemcontextitem"
display: "Context item value"
entitySetName: "msdyn_ocliveworkitemcontextitems"
primaryId: "msdyn_ocliveworkitemcontextitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Context item value

Stores context item values for an engagement.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemcontextitem` |
| Display name | Context item value |
| Display (plural) | Context item values |
| Schema name | `msdyn_ocliveworkitemcontextitem` |
| Entity set (Web API) | `msdyn_ocliveworkitemcontextitems` |
| Primary id attribute | `msdyn_ocliveworkitemcontextitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemcontextitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemcontextitems(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemcontextitems
PATCH /api/data/v9.2/msdyn_ocliveworkitemcontextitems(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemcontextitems(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_datatype`, `msdyn_isdisplayable`, `msdyn_name`, `msdyn_ocliveworkitemcontextitemId`, `msdyn_ocliveworkitemid`, `msdyn_ocliveworkstreamcontextvariableid`, `msdyn_value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocliveworkitemcontextitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocliveworkitemcontextitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemcontextitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemcontextitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemcontextitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_lwscv_msdyn_ocliveworkitemcontextitem_ocliveworkstreamcontextvariableid` | [msdyn_ocliveworkstreamcontextvariable](msdyn_ocliveworkstreamcontextvariable.md) | `msdyn_ocliveworkstreamcontextvariableid` | `msdyn_ocliveworkstreamcontextvariableid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `owner_msdyn_ocliveworkitemcontextitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocliveworkitemcontextitem` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocliveworkitemcontextitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitemcontextitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcontextitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcontextitem_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocliveworkitemcontextitem_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocliveworkitemcontextitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcontextitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocliveworkitemcontextitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcontextitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocliveworkitemcontextitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocliveworkitemcontextitem.md) on 2026-05-06.