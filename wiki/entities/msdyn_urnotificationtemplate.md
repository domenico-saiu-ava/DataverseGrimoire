---
logical: "msdyn_urnotificationtemplate"
display: "UR notification template"
entitySetName: "msdyn_urnotificationtemplates"
primaryId: "msdyn_urnotificationtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# UR notification template

The entity stores all the templates used for UR notification.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_urnotificationtemplate` |
| Display name | UR notification template |
| Display (plural) | UR notification templates |
| Schema name | `msdyn_urnotificationtemplate` |
| Entity set (Web API) | `msdyn_urnotificationtemplates` |
| Primary id attribute | `msdyn_urnotificationtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_urnotificationtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_urnotificationtemplates(<guid>)
POST /api/data/v9.2/msdyn_urnotificationtemplates
PATCH /api/data/v9.2/msdyn_urnotificationtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_urnotificationtemplates(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_channeltype`, `msdyn_entitylogicalname`, `msdyn_entitytitlemapping`, `msdyn_name`, `msdyn_urnotificationtemplateId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_urnotificationtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_urnotificationtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_urnotificationtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_urnotificationtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_urnotificationtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_urnotificationtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_urnotificationtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_urnotificationtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_urnotificationtemplate_msdyn_urnotificationtemplatemapping_notificationtemplate` | _n/a_ | `msdyn_notificationtemplate` | _n/a_ |
| `msdyn_urnotificationtemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_urnotificationtemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_urnotificationtemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_urnotificationtemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_urnotificationtemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_urnotificationtemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_urnotificationtemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_urnotificationtemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_urnotificationtemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_urnotificationtemplate.md) on 2026-05-06.