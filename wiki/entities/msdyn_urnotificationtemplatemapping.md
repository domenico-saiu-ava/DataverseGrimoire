---
logical: "msdyn_urnotificationtemplatemapping"
display: "UR Notification Template Mapping"
entitySetName: "msdyn_urnotificationtemplatemappings"
primaryId: "msdyn_urnotificationtemplatemappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# UR Notification Template Mapping

This entity stores the mapping for notification template and workstream.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_urnotificationtemplatemapping` |
| Display name | UR Notification Template Mapping |
| Display (plural) | UR notification template mappings |
| Schema name | `msdyn_urnotificationtemplatemapping` |
| Entity set (Web API) | `msdyn_urnotificationtemplatemappings` |
| Primary id attribute | `msdyn_urnotificationtemplatemappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_urnotificationtemplatemappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_urnotificationtemplatemappings(<guid>)
POST /api/data/v9.2/msdyn_urnotificationtemplatemappings
PATCH /api/data/v9.2/msdyn_urnotificationtemplatemappings(<guid>)
DELETE /api/data/v9.2/msdyn_urnotificationtemplatemappings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_notificationtemplate`, `msdyn_urnotificationtemplatemappingId`, `msdyn_workstream`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_urnotificationtemplatemapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_urnotificationtemplatemapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_urnotificationtemplatemapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_urnotificationtemplatemapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_urnotificationtemplatemapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstream` | `msdyn_workstream` |
| `msdyn_msdyn_urnotificationtemplate_msdyn_urnotificationtemplatemapping_notificationtemplate` | [msdyn_urnotificationtemplate](msdyn_urnotificationtemplate.md) | `msdyn_notificationtemplate` | `msdyn_notificationtemplate` |
| `owner_msdyn_urnotificationtemplatemapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_urnotificationtemplatemapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_urnotificationtemplatemapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_urnotificationtemplatemapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_urnotificationtemplatemapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_urnotificationtemplatemapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_urnotificationtemplatemapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_urnotificationtemplatemapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_urnotificationtemplatemapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_urnotificationtemplatemapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_urnotificationtemplatemapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_urnotificationtemplatemapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_urnotificationtemplatemapping.md) on 2026-05-06.