---
logical: "msdyn_suggestionprincipalobjectaccess"
display: "Suggestion Principal Object Access"
entitySetName: "msdyn_suggestionprincipalobjectaccesses"
primaryId: "msdyn_suggestionprincipalobjectaccessid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Suggestion Principal Object Access

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionprincipalobjectaccess` |
| Display name | Suggestion Principal Object Access |
| Display (plural) | suggestionprincipalobjectaccesses |
| Schema name | `msdyn_suggestionprincipalobjectaccess` |
| Entity set (Web API) | `msdyn_suggestionprincipalobjectaccesses` |
| Primary id attribute | `msdyn_suggestionprincipalobjectaccessid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestionprincipalobjectaccesses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_suggestionprincipalobjectaccesses(<guid>)
POST /api/data/v9.2/msdyn_suggestionprincipalobjectaccesses
PATCH /api/data/v9.2/msdyn_suggestionprincipalobjectaccesses(<guid>)
DELETE /api/data/v9.2/msdyn_suggestionprincipalobjectaccesses(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_accessrightsmask`, `msdyn_name`, `msdyn_principalid`, `msdyn_principalidIdType`, `msdyn_salessuggestionid`, `msdyn_suggestionprincipalobjectaccessId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_suggestionprincipalobjectaccess` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_suggestionprincipalobjectaccess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionprincipalobjectaccess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionprincipalobjectaccess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionprincipalobjectaccess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salessuggestion_suggestionprincipalobjectaccess_salessuggestionid` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `msdyn_salessuggestionid` | `msdyn_salessuggestionid` |
| `msdyn_systemuser_suggestionprincipalobjectaccess_principalid` | [systemuser](systemuser.md) | `msdyn_principalid` | `msdyn_principalid` |
| `owner_msdyn_suggestionprincipalobjectaccess` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_suggestionprincipalobjectaccess` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_suggestionprincipalobjectaccess` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestionprincipalobjectaccess_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionprincipalobjectaccess_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionprincipalobjectaccess_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_suggestionprincipalobjectaccess_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_suggestionprincipalobjectaccess_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionprincipalobjectaccess_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_suggestionprincipalobjectaccess_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionprincipalobjectaccess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_suggestionprincipalobjectaccess.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_suggestionprincipalobjectaccess.md) on 2026-05-06.