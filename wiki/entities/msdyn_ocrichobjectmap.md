---
logical: "msdyn_ocrichobjectmap"
display: "Rich message map"
entitySetName: "msdyn_ocrichobjectmaps"
primaryId: "msdyn_ocrichobjectmapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Rich message map

Rich messages map for Omnichannel integration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocrichobjectmap` |
| Display name | Rich message map |
| Display (plural) | Rich messages map |
| Schema name | `msdyn_ocrichobjectmap` |
| Entity set (Web API) | `msdyn_ocrichobjectmaps` |
| Primary id attribute | `msdyn_ocrichobjectmapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocrichobjectmaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocrichobjectmaps(<guid>)
POST /api/data/v9.2/msdyn_ocrichobjectmaps
PATCH /api/data/v9.2/msdyn_ocrichobjectmaps(<guid>)
DELETE /api/data/v9.2/msdyn_ocrichobjectmaps(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_authsettingsmapid`, `msdyn_name`, `msdyn_ocmappedrichobjid`, `msdyn_ocpaymentprofileid`, `msdyn_ocrichobjectmapId`, `msdyn_ocrichobjId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocrichobjectmap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocrichobjectmap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocrichobjectmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocrichobjectmap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocrichobjectmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_authenticationsettings_msdyn_ocrichobjectmap` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `msdyn_authsettingsmapid` | `msdyn_authsettingsmapid` |
| `msdyn_msdyn_ocpaymentprofile_msdyn_ocrichobjectmap_ocpaymentprofileid` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `msdyn_ocpaymentprofileid` | `msdyn_ocpaymentprofileid` |
| `msdyn_ocrichobject_msdyn_ocrichobjectmap` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `msdyn_ocmappedrichobjid` | `msdyn_ocmappedrichobjid` |
| `owner_msdyn_ocrichobjectmap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocrichobjectmap` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocrichobjectmap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocrichobjectmap_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrichobjectmap_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrichobjectmap_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocrichobjectmap_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocrichobjectmap_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrichobjectmap_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocrichobjectmap_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrichobjectmap_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocrichobjectmap.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocrichobjectmap.md) on 2026-05-06.