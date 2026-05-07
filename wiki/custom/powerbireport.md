---
logical: "powerbireport"
display: "Report Power BI"
entitySetName: "powerbireports"
primaryId: "powerbireportid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Report Power BI

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerbireport` |
| Display name | Report Power BI |
| Display (plural) | Report Power BI |
| Schema name | `powerbireport` |
| Entity set (Web API) | `powerbireports` |
| Primary id attribute | `powerbireportid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerbireports?$select=name&$top=10
GET /api/data/v9.2/powerbireports(<guid>)
POST /api/data/v9.2/powerbireports
PATCH /api/data/v9.2/powerbireports(<guid>)
DELETE /api/data/v9.2/powerbireports(<guid>)
```

## Attributes

Writable: **17** · Read-only: **17**

### Writable

`datasetid`, `etag`, `importpowerbicomponentsequencenumber`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `powerbireportid`, `reportobjectid`, `reportoriginalobjectid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`, `workspaceobjectid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `package`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerbireport_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerbireport_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerbireport_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerbireport_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerbireport` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerbireport` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerbireport` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerbireport` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_powerbireport_Package` | [fileattachment](fileattachment.md) | `package` | `package` |
| `powerbidataset_powerbireport` | [powerbidataset](powerbidataset.md) | `datasetid` | `DatasetId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerbireport_SyncErrors` | [powerbireport](powerbireport.md) | `regardingobjectid` | `regardingobjectid_powerbireport` |
| `powerbireport_DuplicateMatchingRecord` | [powerbireport](powerbireport.md) | `duplicaterecordid` | `duplicaterecordid_powerbireport` |
| `powerbireport_DuplicateBaseRecord` | [powerbireport](powerbireport.md) | `baserecordid` | `baserecordid_powerbireport` |
| `powerbireport_AsyncOperations` | [powerbireport](powerbireport.md) | `regardingobjectid` | `regardingobjectid_powerbireport` |
| `powerbireport_MailboxTrackingFolders` | [powerbireport](powerbireport.md) | `regardingobjectid` | `regardingobjectid_powerbireport` |
| `powerbireport_UserEntityInstanceDatas` | [powerbireport](powerbireport.md) | `objectid` | `objectid_powerbireport` |
| `powerbireport_ProcessSession` | [powerbireport](powerbireport.md) | `regardingobjectid` | `regardingobjectid_powerbireport` |
| `powerbireport_BulkDeleteFailures` | [powerbireport](powerbireport.md) | `regardingobjectid` | `regardingobjectid_powerbireport` |
| `powerbireport_PrincipalObjectAttributeAccesses` | [powerbireport](powerbireport.md) | `objectid` | `objectid_powerbireport` |
| `powerbireport_FileAttachments` | [powerbireport](powerbireport.md) | `objectid` | `objectid_powerbireport` |


## Source

Generated from [powerbireport (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerbireport')) on 2026-05-07.