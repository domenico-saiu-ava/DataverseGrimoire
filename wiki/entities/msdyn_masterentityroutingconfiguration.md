---
logical: "msdyn_masterentityroutingconfiguration"
display: "Master Entity Routing Configuration"
entitySetName: "msdyn_masterentityroutingconfigurations"
primaryId: "msdyn_masterentityroutingconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Master Entity Routing Configuration

Defines master routing details for the entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_masterentityroutingconfiguration` |
| Display name | Master Entity Routing Configuration |
| Display (plural) | Master Entity Routing Configurations |
| Schema name | `msdyn_masterentityroutingconfiguration` |
| Entity set (Web API) | `msdyn_masterentityroutingconfigurations` |
| Primary id attribute | `msdyn_masterentityroutingconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_masterentityroutingconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_masterentityroutingconfigurations(<guid>)
POST /api/data/v9.2/msdyn_masterentityroutingconfigurations
PATCH /api/data/v9.2/msdyn_masterentityroutingconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_masterentityroutingconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_entitylogicalname`, `msdyn_masterentityroutingconfigurationId`, `msdyn_name`, `msdyn_rulesetid`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_masterentityroutingconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_masterentityroutingconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_masterentityroutingconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_masterentityroutingconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_masterentityroutingconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_rulesetid` | `msdyn_rulesetid` |
| `owner_msdyn_masterentityroutingconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_masterentityroutingconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_masterentityroutingconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_masterentityroutingconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_masterentityroutingconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_masterentityroutingconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_masterentityroutingconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_masterentityroutingconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_masterentityroutingconfiguration_msdyn_liveworkstream` | _n/a_ | `msdyn_masterentityroutingconfigurationid` | _n/a_ |
| `msdyn_masterentityroutingconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_masterentityroutingconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_masterentityroutingconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_masterentityroutingconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_masterentityroutingconfiguration.md) on 2026-05-06.