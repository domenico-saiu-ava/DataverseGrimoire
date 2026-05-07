---
logical: "msdyn_casesentimentsetting"
display: "Case sentiment settings"
entitySetName: "msdyn_casesentimentsettings"
primaryId: "msdyn_casesentimentsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Case sentiment settings

Case sentiment settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casesentimentsetting` |
| Display name | Case sentiment settings |
| Display (plural) | Case sentiment settings |
| Schema name | `msdyn_casesentimentsetting` |
| Entity set (Web API) | `msdyn_casesentimentsettings` |
| Primary id attribute | `msdyn_casesentimentsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casesentimentsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casesentimentsettings(<guid>)
POST /api/data/v9.2/msdyn_casesentimentsettings
PATCH /api/data/v9.2/msdyn_casesentimentsettings(<guid>)
DELETE /api/data/v9.2/msdyn_casesentimentsettings(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`channelweightage`, `chatweightage`, `emailweightage`, `enablechat`, `enableemail`, `enablevoice`, `ImportSequenceNumber`, `IsCustomizable`, `msdyn_casesentimentsettingId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `voiceweightage`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_casesentimentsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_casesentimentsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casesentimentsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casesentimentsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casesentimentsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_casesentimentsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_casesentimentsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_casesentimentsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casesentimentsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casesentimentsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casesentimentsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_casesentimentsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_casesentimentsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casesentimentsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_casesentimentsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casesentimentsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_casesentimentsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_casesentimentsetting.md) on 2026-05-06.