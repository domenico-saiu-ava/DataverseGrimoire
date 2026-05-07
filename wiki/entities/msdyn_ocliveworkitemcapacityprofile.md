---
logical: "msdyn_ocliveworkitemcapacityprofile"
display: "Conversation Capacity profile"
entitySetName: "msdyn_ocliveworkitemcapacityprofiles"
primaryId: "msdyn_ocliveworkitemcapacityprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Capacity profile

Conversation Capacity profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemcapacityprofile` |
| Display name | Conversation Capacity profile |
| Display (plural) | Conversation Capacity profile |
| Schema name | `msdyn_ocliveworkitemcapacityprofile` |
| Entity set (Web API) | `msdyn_ocliveworkitemcapacityprofiles` |
| Primary id attribute | `msdyn_ocliveworkitemcapacityprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemcapacityprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemcapacityprofiles(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemcapacityprofiles
PATCH /api/data/v9.2/msdyn_ocliveworkitemcapacityprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemcapacityprofiles(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_capacityprofileid`, `msdyn_name`, `msdyn_ocliveworkitemcapacityprofileId`, `msdyn_ocliveworkitemid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocliveworkitemcapacityprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocliveworkitemcapacityprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemcapacityprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemcapacityprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemcapacityprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_capacityprofile_msdyn_ocliveworkitemcapacityprofile` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |
| `msdyn_ocliveworkitem_msdyn_ocliveworkitemcapacityprofile` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `owner_msdyn_ocliveworkitemcapacityprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocliveworkitemcapacityprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocliveworkitemcapacityprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitemcapacityprofile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcapacityprofile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcapacityprofile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocliveworkitemcapacityprofile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocliveworkitemcapacityprofile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcapacityprofile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocliveworkitemcapacityprofile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcapacityprofile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocliveworkitemcapacityprofile.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocliveworkitemcapacityprofile.md) on 2026-05-06.