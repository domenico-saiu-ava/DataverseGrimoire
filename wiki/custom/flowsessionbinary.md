---
logical: "flowsessionbinary"
display: "Flow Session Binary"
entitySetName: "flowsessionbinaries"
primaryId: "flowsessionbinaryid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Flow Session Binary

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowsessionbinary` |
| Display name | Flow Session Binary |
| Display (plural) | Flow Session Binaries |
| Schema name | `flowsessionbinary` |
| Entity set (Web API) | `flowsessionbinaries` |
| Primary id attribute | `flowsessionbinaryid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowsessionbinaries?$select=name&$top=10
GET /api/data/v9.2/flowsessionbinaries(<guid>)
POST /api/data/v9.2/flowsessionbinaries
PATCH /api/data/v9.2/flowsessionbinaries(<guid>)
DELETE /api/data/v9.2/flowsessionbinaries(<guid>)
```

## Attributes

Writable: **13** · Read-only: **11**

### Writable

`flowsessionbinaryid`, `flowsessionid`, `importsequencenumber`, `metadata`, `mimetype`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `data`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowsessionbinary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowsessionbinary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowsessionbinary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowsessionbinary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowsessionbinary` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowsessionbinary` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowsessionbinary` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowsessionbinary` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_flowsessionbinary_Data` | [fileattachment](fileattachment.md) | `data` | `data` |
| `flowsession_flowsessionbinary_FlowSessionId` | [flowsession](flowsession.md) | `flowsessionid` | `flowsessionid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowsessionbinary_SyncErrors` | [flowsessionbinary](flowsessionbinary.md) | `regardingobjectid` | `regardingobjectid_flowsessionbinary` |
| `flowsessionbinary_DuplicateMatchingRecord` | [flowsessionbinary](flowsessionbinary.md) | `duplicaterecordid` | `duplicaterecordid_flowsessionbinary` |
| `flowsessionbinary_DuplicateBaseRecord` | [flowsessionbinary](flowsessionbinary.md) | `baserecordid` | `baserecordid_flowsessionbinary` |
| `flowsessionbinary_AsyncOperations` | [flowsessionbinary](flowsessionbinary.md) | `regardingobjectid` | `regardingobjectid_flowsessionbinary` |
| `flowsessionbinary_MailboxTrackingFolders` | [flowsessionbinary](flowsessionbinary.md) | `regardingobjectid` | `regardingobjectid_flowsessionbinary` |
| `flowsessionbinary_UserEntityInstanceDatas` | [flowsessionbinary](flowsessionbinary.md) | `objectid` | `objectid_flowsessionbinary` |
| `flowsessionbinary_ProcessSession` | [flowsessionbinary](flowsessionbinary.md) | `regardingobjectid` | `regardingobjectid_flowsessionbinary` |
| `flowsessionbinary_BulkDeleteFailures` | [flowsessionbinary](flowsessionbinary.md) | `regardingobjectid` | `regardingobjectid_flowsessionbinary` |
| `flowsessionbinary_PrincipalObjectAttributeAccesses` | [flowsessionbinary](flowsessionbinary.md) | `objectid` | `objectid_flowsessionbinary` |
| `flowsessionbinary_FileAttachments` | [flowsessionbinary](flowsessionbinary.md) | `objectid` | `objectid_flowsessionbinary` |


## Source

Generated from [flowsessionbinary (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowsessionbinary')) on 2026-05-07.