---
logical: "msdyn_dealmanageraccess"
display: "dealmanageraccess"
entitySetName: "msdyn_dealmanageraccesses"
primaryId: "msdyn_dealmanageraccessid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# dealmanageraccess

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dealmanageraccess` |
| Display name | dealmanageraccess |
| Display (plural) | dealmanageraccesses |
| Schema name | `msdyn_dealmanageraccess` |
| Entity set (Web API) | `msdyn_dealmanageraccesses` |
| Primary id attribute | `msdyn_dealmanageraccessid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dealmanageraccesses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dealmanageraccesses(<guid>)
POST /api/data/v9.2/msdyn_dealmanageraccesses
PATCH /api/data/v9.2/msdyn_dealmanageraccesses(<guid>)
DELETE /api/data/v9.2/msdyn_dealmanageraccesses(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_dealmanageraccessId`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dealmanageraccess` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dealmanageraccess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dealmanageraccess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dealmanageraccess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dealmanageraccess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_dealmanageraccess` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dealmanageraccess` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dealmanageraccess` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dealmanageraccess_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dealmanageraccess_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dealmanageraccess_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_dealmanageraccess_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_dealmanageraccess_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dealmanageraccess_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dealmanageraccess_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dealmanageraccess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dealmanageraccess.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dealmanageraccess.md) on 2026-05-06.