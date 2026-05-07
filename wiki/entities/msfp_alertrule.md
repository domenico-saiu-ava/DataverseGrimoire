---
logical: "msfp_alertrule"
display: "Customer Voice alert rule"
entitySetName: "msfp_alertrules"
primaryId: "msfp_alertruleid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice alert rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_alertrule` |
| Display name | Customer Voice alert rule |
| Display (plural) | Customer Voice alert rules |
| Schema name | `msfp_alertrule` |
| Entity set (Web API) | `msfp_alertrules` |
| Primary id attribute | `msfp_alertruleid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_alertrules?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_alertrules(<guid>)
POST /api/data/v9.2/msfp_alertrules
PATCH /api/data/v9.2/msfp_alertrules(<guid>)
DELETE /api/data/v9.2/msfp_alertrules(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_alertruleId`, `msfp_expression`, `msfp_name`, `msfp_project`, `msfp_satisfactionmetric`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_alertrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_alertrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_alertrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_alertrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_alertrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_msfp_project_msfp_alertrule_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `msfp_msfp_satisfactionmetric_msfp_alertrule` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `msfp_satisfactionmetric` | `msfp_satisfactionmetric` |
| `owner_msfp_alertrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_alertrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_alertrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_alertrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_alertrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_alertrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msfp_alertrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msfp_alertrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_alertrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_alertrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_alertrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_msfp_alertrule_msfp_alert_alertrule` | _n/a_ | `msfp_alertrule` | _n/a_ |


## Source

Generated from [msfp_alertrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_alertrule.md) on 2026-05-06.