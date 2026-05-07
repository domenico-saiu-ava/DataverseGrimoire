---
logical: "msdyn_templatevariablebatchoperation"
display: "Template Variable Batch Operation"
entitySetName: "msdyn_templatevariablebatchoperations"
primaryId: "msdyn_templatevariablebatchoperationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Template Variable Batch Operation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templatevariablebatchoperation` |
| Display name | Template Variable Batch Operation |
| Display (plural) | Template Variable Batch Operations |
| Schema name | `msdyn_templatevariablebatchoperation` |
| Entity set (Web API) | `msdyn_templatevariablebatchoperations` |
| Primary id attribute | `msdyn_templatevariablebatchoperationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_templatevariablebatchoperations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_templatevariablebatchoperations(<guid>)
POST /api/data/v9.2/msdyn_templatevariablebatchoperations
PATCH /api/data/v9.2/msdyn_templatevariablebatchoperations(<guid>)
DELETE /api/data/v9.2/msdyn_templatevariablebatchoperations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_bulkoperationrunid`, `msdyn_contextmapping`, `msdyn_createdcontextvariableids`, `msdyn_createddependencymappings`, `msdyn_errorlog`, `msdyn_name`, `msdyn_templaterulesetid`, `msdyn_templatevariablebatchoperationId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_templatevariablebatchoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_templatevariablebatchoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_templatevariablebatchoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_templatevariablebatchoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_templatevariablebatchoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_templatevariablebatchoperation_msdyn_templaterulesetid_msdyn_templateruleset` | [msdyn_templateruleset](msdyn_templateruleset.md) | `msdyn_templaterulesetid` | `msdyn_templaterulesetid` |
| `owner_msdyn_templatevariablebatchoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_templatevariablebatchoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_templatevariablebatchoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templatevariablebatchoperation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templatevariablebatchoperation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templatevariablebatchoperation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_templatevariablebatchoperation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_templatevariablebatchoperation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templatevariablebatchoperation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_templatevariablebatchoperation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_templatevariablebatchoperation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_templatevariablebatchoperation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_templatevariablebatchoperation.md) on 2026-05-06.