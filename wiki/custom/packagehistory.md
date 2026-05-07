---
logical: "packagehistory"
display: "Package History"
entitySetName: "packagehistories"
primaryId: "packagehistoryid"
primaryName: "executionname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Package History

## Identity

| Property | Value |
| --- | --- |
| Logical name | `packagehistory` |
| Display name | Package History |
| Display (plural) | Package Histories |
| Schema name | `packagehistory` |
| Entity set (Web API) | `packagehistories` |
| Primary id attribute | `packagehistoryid` |
| Primary name attribute | `executionname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/packagehistories?$select=executionname&$top=10
GET /api/data/v9.2/packagehistories(<guid>)
POST /api/data/v9.2/packagehistories
PATCH /api/data/v9.2/packagehistories(<guid>)
DELETE /api/data/v9.2/packagehistories(<guid>)
```

## Attributes

Writable: **27** · Read-only: **10**

### Writable

`applicationid`, `applicationname`, `catalogid`, `correlationid`, `deployasuserid`, `deploymentmessageid`, `executionname`, `importsequencenumber`, `isclusteroperation`, `operationid`, `overriddencreatedon`, `packagehistoryid`, `packageid`, `packageinstanceid`, `packagetype`, `priority`, `publisherid`, `publishername`, `settings`, `stagevalue`, `statecode`, `statuscode`, `statusmessage`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`, `version`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `deploymentlog`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `packagefile`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_packagehistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_packagehistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_packagehistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_packagehistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_packagehistory` | [organization](organization.md) | `organizationid` | `organizationid` |
| `FileAttachment_packagehistory_PackageFile` | [fileattachment](fileattachment.md) | `packagefile` | `packagefile` |
| `FileAttachment_packagehistory_DeploymentLog` | [fileattachment](fileattachment.md) | `deploymentlog` | `deploymentlog` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `packagehistory_SyncErrors` | [packagehistory](packagehistory.md) | `regardingobjectid` | `regardingobjectid_packagehistory` |
| `packagehistory_DuplicateMatchingRecord` | [packagehistory](packagehistory.md) | `duplicaterecordid` | `duplicaterecordid_packagehistory` |
| `packagehistory_DuplicateBaseRecord` | [packagehistory](packagehistory.md) | `baserecordid` | `baserecordid_packagehistory` |
| `packagehistory_AsyncOperations` | [packagehistory](packagehistory.md) | `regardingobjectid` | `regardingobjectid_packagehistory` |
| `packagehistory_MailboxTrackingFolders` | [packagehistory](packagehistory.md) | `regardingobjectid` | `regardingobjectid_packagehistory` |
| `packagehistory_UserEntityInstanceDatas` | [packagehistory](packagehistory.md) | `objectid` | `objectid_packagehistory` |
| `packagehistory_ProcessSession` | [packagehistory](packagehistory.md) | `regardingobjectid` | `regardingobjectid_packagehistory` |
| `packagehistory_BulkDeleteFailures` | [packagehistory](packagehistory.md) | `regardingobjectid` | `regardingobjectid_packagehistory` |
| `packagehistory_PrincipalObjectAttributeAccesses` | [packagehistory](packagehistory.md) | `objectid` | `objectid_packagehistory` |
| `packagehistory_FileAttachments` | [packagehistory](packagehistory.md) | `objectid` | `objectid_packagehistory` |


## Source

Generated from [packagehistory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='packagehistory')) on 2026-05-07.