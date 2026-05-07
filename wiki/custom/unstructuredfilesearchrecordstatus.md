---
logical: "unstructuredfilesearchrecordstatus"
display: "UnstructuredFileSearchRecordStatus"
entitySetName: "unstructuredfilesearchrecordstatuses"
primaryId: "unstructuredfilesearchrecordstatusid"
primaryName: "unstructuredfilesearchrecordstatusname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# UnstructuredFileSearchRecordStatus

UnstructuredFileSearchRecordStatus

## Identity

| Property | Value |
| --- | --- |
| Logical name | `unstructuredfilesearchrecordstatus` |
| Display name | UnstructuredFileSearchRecordStatus |
| Display (plural) | UnstructuredFileSearchRecordStatus |
| Schema name | `unstructuredfilesearchrecordstatus` |
| Entity set (Web API) | `unstructuredfilesearchrecordstatuses` |
| Primary id attribute | `unstructuredfilesearchrecordstatusid` |
| Primary name attribute | `unstructuredfilesearchrecordstatusname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/unstructuredfilesearchrecordstatuses?$select=unstructuredfilesearchrecordstatusname&$top=10
GET /api/data/v9.2/unstructuredfilesearchrecordstatuses(<guid>)
POST /api/data/v9.2/unstructuredfilesearchrecordstatuses
PATCH /api/data/v9.2/unstructuredfilesearchrecordstatuses(<guid>)
DELETE /api/data/v9.2/unstructuredfilesearchrecordstatuses(<guid>)
```

## Attributes

Writable: **23** · Read-only: **10**

### Writable

`fileid`, `importsequencenumber`, `indexingissuedetails`, `indexingissuetype`, `indexingstatus`, `ingestionbatchid`, `ingestionissuedetails`, `ingestionissuetype`, `ingestionstatus`, `lastindexingtimestamp`, `lastingestiontimestamp`, `lastsuccessfulindexingtimestamp`, `lastsuccessfulingestiontimestamp`, `overriddencreatedon`, `ownerid`, `searchconfigurationid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `unstructuredfilesearchrecordid`, `unstructuredfilesearchrecordstatusid`, `unstructuredfilesearchrecordstatusname`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_unstructuredfilesearchrecordstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_unstructuredfilesearchrecordstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_unstructuredfilesearchrecordstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_unstructuredfilesearchrecordstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_unstructuredfilesearchrecordstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_unstructuredfilesearchrecordstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_unstructuredfilesearchrecordstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_unstructuredfilesearchrecordstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `recordstatus_filerecord_UnstructuredFileSearchRecordId` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `unstructuredfilesearchrecordid` | `UnstructuredFileSearchRecordId` |
| `recordstatus_searchtable_SearchConfigurationId` | [dvtablesearch](dvtablesearch.md) | `searchconfigurationid` | `SearchConfigurationId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `unstructuredfilesearchrecordstatus_SyncErrors` | [unstructuredfilesearchrecordstatus](unstructuredfilesearchrecordstatus.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecordstatus` |
| `unstructuredfilesearchrecordstatus_DuplicateMatchingRecord` | [unstructuredfilesearchrecordstatus](unstructuredfilesearchrecordstatus.md) | `duplicaterecordid` | `duplicaterecordid_unstructuredfilesearchrecordstatus` |
| `unstructuredfilesearchrecordstatus_DuplicateBaseRecord` | [unstructuredfilesearchrecordstatus](unstructuredfilesearchrecordstatus.md) | `baserecordid` | `baserecordid_unstructuredfilesearchrecordstatus` |
| `unstructuredfilesearchrecordstatus_AsyncOperations` | [unstructuredfilesearchrecordstatus](unstructuredfilesearchrecordstatus.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecordstatus` |
| `unstructuredfilesearchrecordstatus_MailboxTrackingFolders` | [unstructuredfilesearchrecordstatus](unstructuredfilesearchrecordstatus.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecordstatus` |
| `unstructuredfilesearchrecordstatus_UserEntityInstanceDatas` | [unstructuredfilesearchrecordstatus](unstructuredfilesearchrecordstatus.md) | `objectid` | `objectid_unstructuredfilesearchrecordstatus` |
| `unstructuredfilesearchrecordstatus_ProcessSession` | [unstructuredfilesearchrecordstatus](unstructuredfilesearchrecordstatus.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecordstatus` |
| `unstructuredfilesearchrecordstatus_BulkDeleteFailures` | [unstructuredfilesearchrecordstatus](unstructuredfilesearchrecordstatus.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecordstatus` |
| `unstructuredfilesearchrecordstatus_PrincipalObjectAttributeAccesses` | [unstructuredfilesearchrecordstatus](unstructuredfilesearchrecordstatus.md) | `objectid` | `objectid_unstructuredfilesearchrecordstatus` |


## Source

Generated from [unstructuredfilesearchrecordstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='unstructuredfilesearchrecordstatus')) on 2026-05-07.