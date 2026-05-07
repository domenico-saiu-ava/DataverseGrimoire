---
logical: "report"
display: "Report"
entitySetName: "reports"
primaryId: "reportid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Report

Data summary in an easy-to-read layout.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `report` |
| Display name | Report |
| Display (plural) | Reports |
| Schema name | `Report` |
| Entity set (Web API) | `reports` |
| Primary id attribute | `reportid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/reports?$select=name&$top=10
GET /api/data/v9.2/reports(<guid>)
POST /api/data/v9.2/reports
PATCH /api/data/v9.2/reports(<guid>)
DELETE /api/data/v9.2/reports(<guid>)
```

## Attributes

Writable: **30** · Read-only: **36**

### Writable

`BodyBinary`, `BodyText`, `BodyUrl`, `CreatedInMajorVersion`, `DefaultFilter`, `DependentModelReportId`, `Description`, `FileName`, `IntroducedVersion`, `IsCustomizable`, `IsPersonal`, `LanguageCode`, `ManagedType`, `MimeType`, `Name`, `OwnerId`, `OwnerIdType`, `ParentReportId`, `PowerBiFeatureTag`, `ReportId`, `ReportStatus`, `ReportTypeCode`, `ReportVersion`, `SignatureDate`, `SignatureId`, `SignatureLcid`, `SignatureMajorVersion`, `SignatureMinorVersion`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ApplicationId`, `CdsDatasetId`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomReportXml`, `FileContent`, `FileContent_Name`, `FileSize`, `IsCustomReport`, `IsManaged`, `IsScheduledReport`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OriginalBodyText`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PowerBiDatasetId`, `PowerBiReportId`, `PowerBiReportInternalState`, `PowerBiReportName`, `PowerBiWorkspaceInfo`, `QueryInfo`, `RdlHash`, `ReportIdUnique`, `ReportNameOnSRS`, `ScheduleXml`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_reports` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_Report_FileContent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |
| `lk_report_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_report_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_reportbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_reportbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `owner_reports` | [owner](owner.md) | `ownerid` | `ownerid` |
| `report_parent_report` | [report](report.md) | `parentreportid` | `parentreportid` |
| `Report_Report_DependentModelReportId` | [report](report.md) | `dependentmodelreportid` | `DependentModelReportId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Report_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `report_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `report_parent_report` | _n/a_ | `parentreportid` | _n/a_ |
| `Report_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Report_Report_DependentModelReportId` | _n/a_ | `dependentmodelreportid` | _n/a_ |
| `report_reportcategories` | _n/a_ | `reportid` | _n/a_ |
| `Report_ReportParameter_ReportId` | _n/a_ | `reportid` | _n/a_ |
| `Report_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [report.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/report.md) on 2026-05-06.