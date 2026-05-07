---
logical: "deleteditemreference"
display: "Riferimento al record eliminato"
entitySetName: "deleteditemreferences"
primaryId: "deleteditemreferenceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Riferimento al record eliminato

Riferimento al record eliminato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `deleteditemreference` |
| Display name | Riferimento al record eliminato |
| Display (plural) | Riferimenti al record eliminato |
| Schema name | `DeletedItemReference` |
| Entity set (Web API) | `deleteditemreferences` |
| Primary id attribute | `deleteditemreferenceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/deleteditemreferences?$select=name&$top=10
GET /api/data/v9.2/deleteditemreferences(<guid>)
POST /api/data/v9.2/deleteditemreferences
PATCH /api/data/v9.2/deleteditemreferences(<guid>)
DELETE /api/data/v9.2/deleteditemreferences(<guid>)
```

## Attributes

Writable: **10** · Read-only: **13**

### Writable

`deleteditemreferenceid`, `deletedobject`, `importsequencenumber`, `name`, `overriddencreatedon`, `regardingobjectid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `deletedlogicalnames`, `deletedrecords`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `processedrecords`, `totalrecords`, `validforrestore`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_DeletedItemReference_DeletedLogicalNames` | [fileattachment](fileattachment.md) | `deletedlogicalnames` | `DeletedLogicalNames` |
| `lk_deleteditemreference_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_deleteditemreference_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_deleteditemreference_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_deleteditemreference_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_deleteditemreference` | [organization](organization.md) | `organizationid` | `organizationid` |
| `FileAttachment_DeletedItemReference_DeletedRecords` | [fileattachment](fileattachment.md) | `deletedrecords` | `DeletedRecords` |
| `AsyncOperation_DeletedItemReference_RegardingObjectId` | [asyncoperation](asyncoperation.md) | `regardingobjectid` | `RegardingObjectId` |
| `RecycleBinConfig_DeletedItemReference_DeletedObject` | [recyclebinconfig](recyclebinconfig.md) | `deletedobject` | `DeletedObject` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `deleteditemreference_SyncErrors` | [deleteditemreference](deleteditemreference.md) | `regardingobjectid` | `regardingobjectid_deleteditemreference` |
| `deleteditemreference_DuplicateMatchingRecord` | [deleteditemreference](deleteditemreference.md) | `duplicaterecordid` | `duplicaterecordid_deleteditemreference` |
| `deleteditemreference_DuplicateBaseRecord` | [deleteditemreference](deleteditemreference.md) | `baserecordid` | `baserecordid_deleteditemreference` |
| `deleteditemreference_AsyncOperations` | [deleteditemreference](deleteditemreference.md) | `regardingobjectid` | `regardingobjectid_deleteditemreference` |
| `deleteditemreference_MailboxTrackingFolders` | [deleteditemreference](deleteditemreference.md) | `regardingobjectid` | `regardingobjectid_deleteditemreference` |
| `deleteditemreference_UserEntityInstanceDatas` | [deleteditemreference](deleteditemreference.md) | `objectid` | `objectid_deleteditemreference` |
| `deleteditemreference_ProcessSession` | [deleteditemreference](deleteditemreference.md) | `regardingobjectid` | `regardingobjectid_deleteditemreference` |
| `deleteditemreference_BulkDeleteFailures` | [deleteditemreference](deleteditemreference.md) | `regardingobjectid` | `regardingobjectid_deleteditemreference` |
| `deleteditemreference_PrincipalObjectAttributeAccesses` | [deleteditemreference](deleteditemreference.md) | `objectid` | `objectid_deleteditemreference` |
| `deleteditemreference_FileAttachments` | [deleteditemreference](deleteditemreference.md) | `objectid` | `objectid_deleteditemreference` |


## Source

Generated from [deleteditemreference (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='deleteditemreference')) on 2026-05-07.