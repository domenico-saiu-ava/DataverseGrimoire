---
logical: "powerbidataset"
display: "Set di dati Power BI"
entitySetName: "powerbidatasets"
primaryId: "powerbidatasetid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Set di dati Power BI

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerbidataset` |
| Display name | Set di dati Power BI |
| Display (plural) | Set di dati Power BI |
| Schema name | `powerbidataset` |
| Entity set (Web API) | `powerbidatasets` |
| Primary id attribute | `powerbidatasetid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerbidatasets?$select=name&$top=10
GET /api/data/v9.2/powerbidatasets(<guid>)
POST /api/data/v9.2/powerbidatasets
PATCH /api/data/v9.2/powerbidatasets(<guid>)
DELETE /api/data/v9.2/powerbidatasets(<guid>)
```

## Attributes

Writable: **17** · Read-only: **17**

### Writable

`datasetobjectid`, `datasetoriginalobjectid`, `dataverseconnectionupdateenabled`, `etag`, `importpowerbicomponentsequencenumber`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `powerbidatasetid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`, `workspaceobjectid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `package`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerbidataset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerbidataset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerbidataset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerbidataset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerbidataset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerbidataset` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerbidataset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerbidataset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_powerbidataset_Package` | [fileattachment](fileattachment.md) | `package` | `package` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerbidataset_SyncErrors` | [powerbidataset](powerbidataset.md) | `regardingobjectid` | `regardingobjectid_powerbidataset` |
| `powerbidataset_DuplicateMatchingRecord` | [powerbidataset](powerbidataset.md) | `duplicaterecordid` | `duplicaterecordid_powerbidataset` |
| `powerbidataset_DuplicateBaseRecord` | [powerbidataset](powerbidataset.md) | `baserecordid` | `baserecordid_powerbidataset` |
| `powerbidataset_AsyncOperations` | [powerbidataset](powerbidataset.md) | `regardingobjectid` | `regardingobjectid_powerbidataset` |
| `powerbidataset_MailboxTrackingFolders` | [powerbidataset](powerbidataset.md) | `regardingobjectid` | `regardingobjectid_powerbidataset` |
| `powerbidataset_UserEntityInstanceDatas` | [powerbidataset](powerbidataset.md) | `objectid` | `objectid_powerbidataset` |
| `powerbidataset_ProcessSession` | [powerbidataset](powerbidataset.md) | `regardingobjectid` | `regardingobjectid_powerbidataset` |
| `powerbidataset_BulkDeleteFailures` | [powerbidataset](powerbidataset.md) | `regardingobjectid` | `regardingobjectid_powerbidataset` |
| `powerbidataset_PrincipalObjectAttributeAccesses` | [powerbidataset](powerbidataset.md) | `objectid` | `objectid_powerbidataset` |
| `powerbidataset_FileAttachments` | [powerbidataset](powerbidataset.md) | `objectid` | `objectid_powerbidataset` |
| `powerbidataset_powerbimashupparameter` | [powerbidataset](powerbidataset.md) | `datasetid` | `DatasetId` |
| `powerbidataset_powerbireport` | [powerbidataset](powerbidataset.md) | `datasetid` | `DatasetId` |


## Source

Generated from [powerbidataset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerbidataset')) on 2026-05-07.