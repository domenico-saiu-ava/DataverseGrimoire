---
logical: "msfp_satisfactionmetric"
display: "Customer Voice satisfaction metric"
entitySetName: "msfp_satisfactionmetrics"
primaryId: "msfp_satisfactionmetricid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice satisfaction metric

Customer Voice satisfaction metric  defined for a project.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_satisfactionmetric` |
| Display name | Customer Voice satisfaction metric |
| Display (plural) | Customer Voice satisfaction metrics |
| Schema name | `msfp_satisfactionmetric` |
| Entity set (Web API) | `msfp_satisfactionmetrics` |
| Primary id attribute | `msfp_satisfactionmetricid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_satisfactionmetrics?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_satisfactionmetrics(<guid>)
POST /api/data/v9.2/msfp_satisfactionmetrics
PATCH /api/data/v9.2/msfp_satisfactionmetrics(<guid>)
DELETE /api/data/v9.2/msfp_satisfactionmetrics(<guid>)
```

## Attributes

Writable: **23** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_description`, `msfp_historicalcomputedvalue`, `msfp_issystemkpi`, `msfp_lastcomputedon`, `msfp_lastcomputedvalue`, `msfp_maximumvalue`, `msfp_minimumvalue`, `msfp_name`, `msfp_project`, `msfp_questions`, `msfp_satisfactionmetricId`, `msfp_status`, `msfp_threshold`, `msfp_type`, `msfp_versionnumber`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_satisfactionmetric` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_satisfactionmetric_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_satisfactionmetric_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_satisfactionmetric_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_satisfactionmetric_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_msfp_project_msfp_satisfactionmetric_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `owner_msfp_satisfactionmetric` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_satisfactionmetric` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_satisfactionmetric` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_msfp_satisfactionmetric_msfp_alert` | _n/a_ | `msfp_satisfactionmetric` | _n/a_ |
| `msfp_msfp_satisfactionmetric_msfp_alertrule` | _n/a_ | `msfp_satisfactionmetric` | _n/a_ |
| `msfp_satisfactionmetric_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetric_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetric_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetric_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_satisfactionmetric_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetric_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_satisfactionmetricid_msfp_satisfactionmetric` | _n/a_ | `msfp_satisfactionmetricid` | _n/a_ |


## Source

Generated from [msfp_satisfactionmetric.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_satisfactionmetric.md) on 2026-05-06.