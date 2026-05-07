---
logical: "msdyn_conversationdispositioncodemap"
display: "Conversation disposition code map"
entitySetName: "msdyn_conversationdispositioncodemaps"
primaryId: "msdyn_conversationdispositioncodemapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation disposition code map

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationdispositioncodemap` |
| Display name | Conversation disposition code map |
| Display (plural) | Conversation disposition code map |
| Schema name | `msdyn_conversationdispositioncodemap` |
| Entity set (Web API) | `msdyn_conversationdispositioncodemaps` |
| Primary id attribute | `msdyn_conversationdispositioncodemapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationdispositioncodemaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationdispositioncodemaps(<guid>)
POST /api/data/v9.2/msdyn_conversationdispositioncodemaps
PATCH /api/data/v9.2/msdyn_conversationdispositioncodemaps(<guid>)
DELETE /api/data/v9.2/msdyn_conversationdispositioncodemaps(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_conversationdispositioncodemapId`, `msdyn_dispositioncodevalue`, `msdyn_name`, `msdyn_ocdispositioncodeid`, `msdyn_ocliveworkitemid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationdispositioncodemap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationdispositioncodemap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationdispositioncodemap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationdispositioncodemap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationdispositioncodemap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_conversationdispositioncodemap_ocdispositioncode` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | `msdyn_ocdispositioncodeid` | `msdyn_ocdispositioncodeid` |
| `msdyn_conversationdispositioncodemap_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `owner_msdyn_conversationdispositioncodemap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationdispositioncodemap` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationdispositioncodemap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationdispositioncodemap_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationdispositioncodemap_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationdispositioncodemap_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationdispositioncodemap_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationdispositioncodemap_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationdispositioncodemap_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationdispositioncodemap_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationdispositioncodemap_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationdispositioncodemap.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationdispositioncodemap.md) on 2026-05-06.