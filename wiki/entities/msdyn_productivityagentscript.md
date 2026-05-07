---
logical: "msdyn_productivityagentscript"
display: "Script"
entitySetName: "msdyn_productivityagentscripts"
primaryId: "msdyn_productivityagentscriptid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Script

Script

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivityagentscript` |
| Display name | Script |
| Display (plural) | Scripts |
| Schema name | `msdyn_productivityagentscript` |
| Entity set (Web API) | `msdyn_productivityagentscripts` |
| Primary id attribute | `msdyn_productivityagentscriptid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivityagentscripts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivityagentscripts(<guid>)
POST /api/data/v9.2/msdyn_productivityagentscripts
PATCH /api/data/v9.2/msdyn_productivityagentscripts(<guid>)
DELETE /api/data/v9.2/msdyn_productivityagentscripts(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_description`, `msdyn_language`, `msdyn_name`, `msdyn_productivityagentscriptId`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_productivityagentscript` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_productivityagentscript_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivityagentscript_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivityagentscript_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivityagentscript_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_productivityagentscript` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_productivityagentscript` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_productivityagentscript` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_agentscriptid` | _n/a_ | `msdyn_agentscriptid` | _n/a_ |
| `msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_routeactionid` | _n/a_ | `msdyn_routeactionid` | _n/a_ |
| `msdyn_productivityagentscript_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityagentscript_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityagentscript_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_productivityagentscript_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_productivityagentscript_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityagentscript_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_productivityagentscript_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityagentscript_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat` | [msdyn_productivityagentscriptid](msdyn_productivityagentscriptid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_productivityagentscript.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_productivityagentscript.md) on 2026-05-06.