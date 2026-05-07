---
logical: "msdyn_autocapturesettings"
display: "Auto Capture Settings"
entitySetName: "msdyn_autocapturesettingses"
primaryId: "msdyn_autocapturesettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Auto Capture Settings

Auto Capture Settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autocapturesettings` |
| Display name | Auto Capture Settings |
| Display (plural) | Auto Capture Settings |
| Schema name | `msdyn_autocapturesettings` |
| Entity set (Web API) | `msdyn_autocapturesettingses` |
| Primary id attribute | `msdyn_autocapturesettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autocapturesettingses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_autocapturesettingses(<guid>)
POST /api/data/v9.2/msdyn_autocapturesettingses
PATCH /api/data/v9.2/msdyn_autocapturesettingses(<guid>)
DELETE /api/data/v9.2/msdyn_autocapturesettingses(<guid>)
```

## Attributes

Writable: **24** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_autocapture`, `msdyn_autocapturesettingsId`, `msdyn_autocaptureV1`, `msdyn_automaticactivityupdate`, `msdyn_calendar`, `msdyn_contacts`, `msdyn_defaultassociation`, `msdyn_DontShowSettingStatus`, `msdyn_emails`, `msdyn_meetings`, `msdyn_name`, `msdyn_organizationid`, `msdyn_settingsuiaction`, `msdyn_UserId`, `msdyn_V1TermsandConditionsCount`, `msdyn_V2TermsandConditionsCount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_autocapturesettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_autocapturesettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autocapturesettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autocapturesettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autocapturesettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_autocapturesettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_autocapturesettings` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_autocapturesettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autocapturesettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocapturesettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocapturesettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_autocapturesettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_autocapturesettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocapturesettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_autocapturesettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autocapturesettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_autocapturesettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_autocapturesettings.md) on 2026-05-06.