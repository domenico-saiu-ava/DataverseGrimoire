---
logical: "msdyn_notesanalysisconfig"
display: "Notes analysis Config"
entitySetName: "msdyn_notesanalysisconfigs"
primaryId: "msdyn_notesanalysisconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Notes analysis Config

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_notesanalysisconfig` |
| Display name | Notes analysis Config |
| Display (plural) | Notes analysis Configs |
| Schema name | `msdyn_notesanalysisconfig` |
| Entity set (Web API) | `msdyn_notesanalysisconfigs` |
| Primary id attribute | `msdyn_notesanalysisconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_notesanalysisconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_notesanalysisconfigs(<guid>)
POST /api/data/v9.2/msdyn_notesanalysisconfigs
PATCH /api/data/v9.2/msdyn_notesanalysisconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_notesanalysisconfigs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_aretermsaccepted`, `msdyn_isadminsettingenabled`, `msdyn_name`, `msdyn_notesanalysisconfigId`, `msdyn_throttlelimit`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_notesanalysisconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_notesanalysisconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_notesanalysisconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_notesanalysisconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_notesanalysisconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_notesanalysisconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_notesanalysisconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_notesanalysisconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notesanalysisconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notesanalysisconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notesanalysisconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notesanalysisconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_notesanalysisconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notesanalysisconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_notesanalysisconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_notesanalysisconfig.md) on 2026-05-06.