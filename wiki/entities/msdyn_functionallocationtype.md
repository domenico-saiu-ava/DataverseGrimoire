---
logical: "msdyn_functionallocationtype"
display: "Functional Location Type"
entitySetName: "msdyn_functionallocationtypes"
primaryId: "msdyn_functionallocationtypeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Functional Location Type

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_functionallocationtype` |
| Display name | Functional Location Type |
| Display (plural) | Functional Location Types |
| Schema name | `msdyn_FunctionalLocationType` |
| Entity set (Web API) | `msdyn_functionallocationtypes` |
| Primary id attribute | `msdyn_functionallocationtypeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_functionallocationtypes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_functionallocationtypes(<guid>)
POST /api/data/v9.2/msdyn_functionallocationtypes
PATCH /api/data/v9.2/msdyn_functionallocationtypes(<guid>)
DELETE /api/data/v9.2/msdyn_functionallocationtypes(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_FunctionalLocationTypeId`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_functionallocationtype` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_functionallocationtype_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_functionallocationtype_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_functionallocationtype_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_functionallocationtype_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_functionallocationtype` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_functionallocationtype` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_functionallocationtype` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_FunctionalLocation_FunctionalLocationTyp` | _n/a_ | `msdyn_functionallocationtype` | _n/a_ |
| `msdyn_functionallocationtype_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_functionallocationtype_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_functionallocationtype_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_functionallocationtype_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_functionallocationtype_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_functionallocationtype_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_functionallocationtype_msdyn_locationtypetemplateassociation_functionallocationtype` | _n/a_ | `msdyn_functionallocationtype` | _n/a_ |


## Source

Generated from [msdyn_functionallocationtype.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_functionallocationtype.md) on 2026-05-06.