---
logical: "msdyn_entityrankingrule"
display: "EntityRankingRule"
entitySetName: "msdyn_entityrankingrules"
primaryId: "msdyn_entityrankingruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# EntityRankingRule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityrankingrule` |
| Display name | EntityRankingRule |
| Display (plural) | EntityRankingRules |
| Schema name | `msdyn_entityrankingrule` |
| Entity set (Web API) | `msdyn_entityrankingrules` |
| Primary id attribute | `msdyn_entityrankingruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityrankingrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityrankingrules(<guid>)
POST /api/data/v9.2/msdyn_entityrankingrules
PATCH /api/data/v9.2/msdyn_entityrankingrules(<guid>)
DELETE /api/data/v9.2/msdyn_entityrankingrules(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_enabled`, `msdyn_entityname`, `msdyn_entityrankingruleId`, `msdyn_FetchXmlRule`, `msdyn_name`, `msdyn_ObjectTypeCode`, `msdyn_OOBRule`, `msdyn_overriddenrank`, `msdyn_RulePriority`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_entityrankingrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_entityrankingrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityrankingrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityrankingrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityrankingrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_entityrankingrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_entityrankingrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_entityrankingrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityrankingrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityrankingrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityrankingrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityrankingrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_entityrankingrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityrankingrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_entityrankingrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_entityrankingrule.md) on 2026-05-06.