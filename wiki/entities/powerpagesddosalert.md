---
logical: "powerpagesddosalert"
display: "PowerPagesDDOSAlert"
entitySetName: "powerpagesddosalerts"
primaryId: "powerpagesddosalertid"
primaryName: "portalid"
tableType: "Standard"
ownership: "UserOwned"
---

# PowerPagesDDOSAlert

Schema for DDOS Alerts on PowerPage Site

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesddosalert` |
| Display name | PowerPagesDDOSAlert |
| Display (plural) | PowerPagesDDOSAlerts |
| Schema name | `PowerPagesDDOSAlert` |
| Entity set (Web API) | `powerpagesddosalerts` |
| Primary id attribute | `powerpagesddosalertid` |
| Primary name attribute | `portalid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagesddosalerts?$select=portalid&$top=10
GET /api/data/v9.2/powerpagesddosalerts(<guid>)
POST /api/data/v9.2/powerpagesddosalerts
PATCH /api/data/v9.2/powerpagesddosalerts(<guid>)
DELETE /api/data/v9.2/powerpagesddosalerts(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`AdditionalData`, `AttackType`, `Description`, `FirstActivityTime`, `HostName`, `ImportSequenceNumber`, `IncidentId`, `LastActivityTime`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PortalId`, `PowerPagesDDOSAlertId`, `RecordType`, `Severity`, `statecode`, `statuscode`, `TimeGenerated`, `TimeZoneRuleVersionNumber`, `Title`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerpagesddosalert` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_powerpagesddosalert_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesddosalert_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesddosalert_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesddosalert_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerpagesddosalert` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_powerpagesddosalert` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerpagesddosalert` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesddosalert_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesddosalert_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesddosalert_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `powerpagesddosalert_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `powerpagesddosalert_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesddosalert_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerpagesddosalert_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesddosalert_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerpagesddosalert.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagesddosalert.md) on 2026-05-06.