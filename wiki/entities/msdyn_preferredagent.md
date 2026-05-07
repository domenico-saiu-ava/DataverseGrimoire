---
logical: "msdyn_preferredagent"
display: "Preferred Agent"
entitySetName: "msdyn_preferredagents"
primaryId: "msdyn_preferredagentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Preferred Agent

Preferred Agent Table, table used to store the mapping between the system user and contact/account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_preferredagent` |
| Display name | Preferred Agent |
| Display (plural) | Preferred Agents |
| Schema name | `msdyn_preferredagent` |
| Entity set (Web API) | `msdyn_preferredagents` |
| Primary id attribute | `msdyn_preferredagentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_preferredagents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_preferredagents(<guid>)
POST /api/data/v9.2/msdyn_preferredagents
PATCH /api/data/v9.2/msdyn_preferredagents(<guid>)
DELETE /api/data/v9.2/msdyn_preferredagents(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_preferencerating`, `msdyn_preferredagentId`, `msdyn_recordId`, `msdyn_recordIdType`, `msdyn_recordtype`, `msdyn_systemuserId`, `msdyn_temporarypreference`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_preferredagent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_preferredagent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_preferredagent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_preferredagent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_preferredagent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_preferredagent_account_msdyn_recordId` | [account](account.md) | `msdyn_recordid` | `msdyn_recordId_account` |
| `msdyn_msdyn_preferredagent_contact_msdyn_recordId` | [contact](contact.md) | `msdyn_recordid` | `msdyn_recordId_contact` |
| `msdyn_systemuser_msdyn_preferredagent_systemuserid` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |
| `owner_msdyn_preferredagent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_preferredagent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_preferredagent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_preferredagent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_preferredagent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_preferredagent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_preferredagent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_preferredagent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_preferredagent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_preferredagent.md) on 2026-05-06.