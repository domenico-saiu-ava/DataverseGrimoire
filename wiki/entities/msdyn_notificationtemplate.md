---
logical: "msdyn_notificationtemplate"
display: "Notification Template"
entitySetName: "msdyn_notificationtemplates"
primaryId: "msdyn_notificationtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Notification Template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_notificationtemplate` |
| Display name | Notification Template |
| Display (plural) | Notification Templates |
| Schema name | `msdyn_notificationtemplate` |
| Entity set (Web API) | `msdyn_notificationtemplates` |
| Primary id attribute | `msdyn_notificationtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_notificationtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_notificationtemplates(<guid>)
POST /api/data/v9.2/msdyn_notificationtemplates
PATCH /api/data/v9.2/msdyn_notificationtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_notificationtemplates(<guid>)
```

## Attributes

Writable: **24** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_acceptbuttontext`, `msdyn_autoacceptnotification`, `msdyn_autopopupsession`, `msdyn_description`, `msdyn_desktopnotificationmode`, `msdyn_icon`, `msdyn_name`, `msdyn_notificationtemplateId`, `msdyn_rejectbuttontext`, `msdyn_showrejectbutton`, `msdyn_showtimeout`, `msdyn_theme`, `msdyn_timeout`, `msdyn_title`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_notificationtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_notificationtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_notificationtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_notificationtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_notificationtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_notificationtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_notificationtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_notificationtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notificationtemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notificationtemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notificationtemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_notificationtemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_notificationtemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notificationtemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_notificationtemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notificationtemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notificationtemplate_notificationfield` | [msdyn_notificationtemplateid](msdyn_notificationtemplateid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_notificationtemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_notificationtemplate.md) on 2026-05-06.