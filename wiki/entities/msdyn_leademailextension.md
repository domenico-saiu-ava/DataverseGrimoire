---
logical: "msdyn_leademailextension"
display: "Lead Email Extension"
entitySetName: "msdyn_leademailextensions"
primaryId: "msdyn_leademailextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Lead Email Extension

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leademailextension` |
| Display name | Lead Email Extension |
| Display (plural) | Lead Email Extensions |
| Schema name | `msdyn_leademailextension` |
| Entity set (Web API) | `msdyn_leademailextensions` |
| Primary id attribute | `msdyn_leademailextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leademailextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leademailextensions(<guid>)
POST /api/data/v9.2/msdyn_leademailextensions
PATCH /api/data/v9.2/msdyn_leademailextensions(<guid>)
DELETE /api/data/v9.2/msdyn_leademailextensions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_emailcategory`, `msdyn_emailvalidationreason`, `msdyn_emailvalidationstatus`, `msdyn_leademailextensionId`, `msdyn_leadid`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_leademailextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_leademailextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leademailextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leademailextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leademailextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_leademailextension_leadid_lead` | [lead](lead.md) | `msdyn_leadid` | `msdyn_leadid` |
| `owner_msdyn_leademailextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_leademailextension` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_leademailextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leademailextension_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leademailextension_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leademailextension_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_leademailextension_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_leademailextension_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leademailextension_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_leademailextension_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_leademailextension_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_leademailextension.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_leademailextension.md) on 2026-05-06.