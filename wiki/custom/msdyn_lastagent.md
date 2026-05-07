---
logical: "msdyn_lastagent"
display: "Last Agent"
entitySetName: "msdyn_lastagents"
primaryId: "msdyn_lastagentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_lastagentid`, `msdyn_name`, `msdyn_recordid`, `msdyn_recordtype`, `msdyn_systemuserid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_lastagent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_lastagent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_lastagent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_lastagent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_lastagent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_lastagent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_lastagent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_lastagent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_lastagent_account_msdyn_recordId` | [account](account.md) | `msdyn_recordid` | `msdyn_recordId_account` |
| `msdyn_msdyn_lastagent_contact_msdyn_recordId` | [contact](contact.md) | `msdyn_recordid` | `msdyn_recordId_contact` |
| `msdyn_systemuser_msdyn_lastagent_systemuserid` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_lastagent_SyncErrors` | [msdyn_lastagent](msdyn_lastagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_lastagent` |
| `msdyn_lastagent_DuplicateMatchingRecord` | [msdyn_lastagent](msdyn_lastagent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_lastagent` |
| `msdyn_lastagent_DuplicateBaseRecord` | [msdyn_lastagent](msdyn_lastagent.md) | `baserecordid` | `baserecordid_msdyn_lastagent` |
| `msdyn_lastagent_AsyncOperations` | [msdyn_lastagent](msdyn_lastagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_lastagent` |
| `msdyn_lastagent_MailboxTrackingFolders` | [msdyn_lastagent](msdyn_lastagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_lastagent` |
| `msdyn_lastagent_UserEntityInstanceDatas` | [msdyn_lastagent](msdyn_lastagent.md) | `objectid` | `objectid_msdyn_lastagent` |
| `msdyn_lastagent_ProcessSession` | [msdyn_lastagent](msdyn_lastagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_lastagent` |
| `msdyn_lastagent_BulkDeleteFailures` | [msdyn_lastagent](msdyn_lastagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_lastagent` |
| `msdyn_lastagent_PrincipalObjectAttributeAccesses` | [msdyn_lastagent](msdyn_lastagent.md) | `objectid` | `objectid_msdyn_lastagent` |


## Source

Generated from [msdyn_lastagent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_lastagent')) on 2026-05-07.