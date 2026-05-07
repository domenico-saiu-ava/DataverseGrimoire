---
logical: "powerpagesscanreport"
display: "Power Pages Scan Report"
entitySetName: "powerpagesscanreports"
primaryId: "powerpagesscanreportid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Power Pages Scan Report

Power Pages Scan Report

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesscanreport` |
| Display name | Power Pages Scan Report |
| Display (plural) | Power Pages Scan Reports |
| Schema name | `PowerPagesScanReport` |
| Entity set (Web API) | `powerpagesscanreports` |
| Primary id attribute | `powerpagesscanreportid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagesscanreports?$select=name&$top=10
GET /api/data/v9.2/powerpagesscanreports(<guid>)
POST /api/data/v9.2/powerpagesscanreports
PATCH /api/data/v9.2/powerpagesscanreports(<guid>)
DELETE /api/data/v9.2/powerpagesscanreports(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`Content`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PortalId`, `PowerPagesScanReportId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `FileContent`, `FileContent_Name`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerpagesscanreport` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_PowerPagesScanReport_FileContent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |
| `lk_powerpagesscanreport_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesscanreport_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesscanreport_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesscanreport_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerpagesscanreport` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_powerpagesscanreport` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerpagesscanreport` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesscanreport_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesscanreport_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesscanreport_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `powerpagesscanreport_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `powerpagesscanreport_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `powerpagesscanreport_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesscanreport_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerpagesscanreport_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesscanreport_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerpagesscanreport.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagesscanreport.md) on 2026-05-06.