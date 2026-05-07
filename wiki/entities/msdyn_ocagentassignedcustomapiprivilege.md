---
logical: "msdyn_ocagentassignedcustomapiprivilege"
display: "Omnichannel agent assignment custom api privilege"
entitySetName: "msdyn_ocagentassignedcustomapiprivileges"
primaryId: "msdyn_ocagentassignedcustomapiprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Omnichannel agent assignment custom api privilege

Entity for creating privilege for agent assignment private custom apis. The privileges for this entity will be used to restrict custom api access only for FPA app user.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocagentassignedcustomapiprivilege` |
| Display name | Omnichannel agent assignment custom api privilege |
| Display (plural) | Omnichannel agent assignment custom api privileges |
| Schema name | `msdyn_ocagentassignedcustomapiprivilege` |
| Entity set (Web API) | `msdyn_ocagentassignedcustomapiprivileges` |
| Primary id attribute | `msdyn_ocagentassignedcustomapiprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocagentassignedcustomapiprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocagentassignedcustomapiprivileges(<guid>)
POST /api/data/v9.2/msdyn_ocagentassignedcustomapiprivileges
PATCH /api/data/v9.2/msdyn_ocagentassignedcustomapiprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_ocagentassignedcustomapiprivileges(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_ocagentassignedcustomapiprivilegeId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocagentassignedcustomapiprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocagentassignedcustomapiprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocagentassignedcustomapiprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocagentassignedcustomapiprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocagentassignedcustomapiprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_ocagentassignedcustomapiprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocagentassignedcustomapiprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocagentassignedcustomapiprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocagentassignedcustomapiprivilege_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocagentassignedcustomapiprivilege_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocagentassignedcustomapiprivilege_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocagentassignedcustomapiprivilege_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocagentassignedcustomapiprivilege_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocagentassignedcustomapiprivilege_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocagentassignedcustomapiprivilege_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocagentassignedcustomapiprivilege_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocagentassignedcustomapiprivilege.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocagentassignedcustomapiprivilege.md) on 2026-05-06.