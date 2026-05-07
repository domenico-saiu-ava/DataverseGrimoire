---
logical: "msdyn_lastagent"
display: "Last Agent"
entitySetName: "msdyn_lastagents"
primaryId: "msdyn_lastagentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Last Agent

Last Agent Table, table used to store the mapping between the system user and contact/account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_lastagent` |
| Display name | Last Agent |
| Display (plural) | Last Agents |
| Schema name | `msdyn_lastagent` |
| Entity set (Web API) | `msdyn_lastagents` |
| Primary id attribute | `msdyn_lastagentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_lastagents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_lastagents(<guid>)
POST /api/data/v9.2/msdyn_lastagents
PATCH /api/data/v9.2/msdyn_lastagents(<guid>)
DELETE /api/data/v9.2/msdyn_lastagents(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_lastagentId`, `msdyn_name`, `msdyn_recordId`, `msdyn_recordIdType`, `msdyn_recordtype`, `msdyn_systemuserId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_lastagent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_lastagent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_lastagent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_lastagent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_lastagent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_lastagent_account_msdyn_recordId` | [account](account.md) | `msdyn_recordid` | `msdyn_recordId_account` |
| `msdyn_msdyn_lastagent_contact_msdyn_recordId` | [contact](contact.md) | `msdyn_recordid` | `msdyn_recordId_contact` |
| `msdyn_systemuser_msdyn_lastagent_systemuserid` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |
| `owner_msdyn_lastagent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_lastagent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_lastagent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_lastagent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_lastagent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_lastagent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_lastagent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_lastagent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_lastagent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_lastagent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_lastagent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_lastagent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_lastagent.md) on 2026-05-06.