---
logical: "msdyn_copilotagentpreference"
display: "User Preference For Copilot"
entitySetName: "msdyn_copilotagentpreferences"
primaryId: "msdyn_copilotagentpreferenceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# User Preference For Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotagentpreference` |
| Display name | User Preference For Copilot |
| Display (plural) | Representative Preferences For Copilot |
| Schema name | `msdyn_copilotagentpreference` |
| Entity set (Web API) | `msdyn_copilotagentpreferences` |
| Primary id attribute | `msdyn_copilotagentpreferenceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotagentpreferences?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotagentpreferences(<guid>)
POST /api/data/v9.2/msdyn_copilotagentpreferences
PATCH /api/data/v9.2/msdyn_copilotagentpreferences(<guid>)
DELETE /api/data/v9.2/msdyn_copilotagentpreferences(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_agentprompts`, `msdyn_copilotagentpreferenceId`, `msdyn_enabledefaultexecution`, `msdyn_enabledskills`, `msdyn_isfullpagecopilotenabled`, `msdyn_kbfilterscope`, `msdyn_name`, `msdyn_pluginscope`, `msdyn_prioritizationcolumns`, `msdyn_prioritizationfetchxml`, `msdyn_prioritizationprompt`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_copilotagentpreference` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_copilotagentpreference_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotagentpreference_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotagentpreference_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotagentpreference_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_copilotagentpreference` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_copilotagentpreference` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_copilotagentpreference` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotagentpreference_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotagentpreference_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotagentpreference_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilotagentpreference_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilotagentpreference_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotagentpreference_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotagentpreference_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotagentpreference_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_copilotagentpreference.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilotagentpreference.md) on 2026-05-06.