---
logical: "msdyn_intentmetrics"
display: "msdyn_intentmetrics"
entitySetName: "msdyn_intentmetricses"
primaryId: "msdyn_intentmetricsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_intentmetrics

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentmetrics` |
| Display name | msdyn_intentmetrics |
| Display (plural) | msdyn_intentmetricses |
| Schema name | `msdyn_intentmetrics` |
| Entity set (Web API) | `msdyn_intentmetricses` |
| Primary id attribute | `msdyn_intentmetricsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentmetricses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentmetricses(<guid>)
POST /api/data/v9.2/msdyn_intentmetricses
PATCH /api/data/v9.2/msdyn_intentmetricses(<guid>)
DELETE /api/data/v9.2/msdyn_intentmetricses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_intentid`, `msdyn_intentmetricsId`, `msdyn_intentsolutionrate`, `msdyn_intentvolume`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intentmetrics` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intentmetrics_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentmetrics_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentmetrics_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentmetrics_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_intent_msdyn_intentmetrics_msdyn_intentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `owner_msdyn_intentmetrics` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intentmetrics` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intentmetrics` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentmetrics_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentmetrics_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentmetrics_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intentmetrics_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intentmetrics_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentmetrics_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intentmetrics_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentmetrics_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_intentmetrics.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentmetrics.md) on 2026-05-06.