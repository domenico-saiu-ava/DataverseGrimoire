---
logical: "msfp_log"
display: "Customer Voice Log"
entitySetName: "msfp_logs"
primaryId: "msfp_logid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice Log

This entity contains logs that happen during Customer Voice CDS operations

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_log` |
| Display name | Customer Voice Log |
| Display (plural) | Customer Voice Logs |
| Schema name | `msfp_log` |
| Entity set (Web API) | `msfp_logs` |
| Primary id attribute | `msfp_logid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_logs?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_logs(<guid>)
POST /api/data/v9.2/msfp_logs
PATCH /api/data/v9.2/msfp_logs(<guid>)
DELETE /api/data/v9.2/msfp_logs(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_details`, `msfp_logId`, `msfp_name`, `msfp_operation`, `msfp_recordid`, `msfp_recordtype`, `msfp_sourcesurveyidentifier`, `msfp_surveytableid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_log` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_log_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_log_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_log_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_log_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msfp_log` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_log` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_log` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_log_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_log_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_log_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msfp_log_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msfp_log_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_log_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_log_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_log_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_log.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_log.md) on 2026-05-06.