---
logical: "desktopflowbinary"
display: "Dati binari flusso desktop"
entitySetName: "desktopflowbinaries"
primaryId: "desktopflowbinaryid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dati binari flusso desktop

## Identity

| Property | Value |
| --- | --- |
| Logical name | `desktopflowbinary` |
| Display name | Dati binari flusso desktop |
| Display (plural) | Dati binari flusso desktop |
| Schema name | `desktopflowbinary` |
| Entity set (Web API) | `desktopflowbinaries` |
| Primary id attribute | `desktopflowbinaryid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/desktopflowbinaries?$select=name&$top=10
GET /api/data/v9.2/desktopflowbinaries(<guid>)
POST /api/data/v9.2/desktopflowbinaries
PATCH /api/data/v9.2/desktopflowbinaries(<guid>)
DELETE /api/data/v9.2/desktopflowbinaries(<guid>)
```

## Attributes

Writable: **17** · Read-only: **17**

### Writable

`desktopflowbinaryid`, `desktopflowmodule`, `importsequencenumber`, `iscustomizable`, `metadata`, `mimetype`, `name`, `overriddencreatedon`, `ownerid`, `process`, `reference`, `referencename`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `data`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_desktopflowbinary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_desktopflowbinary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_desktopflowbinary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_desktopflowbinary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_desktopflowbinary` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_desktopflowbinary` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_desktopflowbinary` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_desktopflowbinary` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_desktopflowbinary_Data` | [fileattachment](fileattachment.md) | `data` | `data` |
| `workflow_desktopflowbinary_Process` | [workflow](workflow.md) | `process` | `Process` |
| `dfm_desktopflowbinary_DFM` | [desktopflowmodule](desktopflowmodule.md) | `desktopflowmodule` | `desktopflowmodule` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `desktopflowbinary_componentversionnrddatasourceset` | [desktopflowbinary](desktopflowbinary.md) | `component` | `component_desktopflowbinary` |
| `desktopflowbinary_componentversions` | [desktopflowbinary](desktopflowbinary.md) | `component` | `component_desktopflowbinary` |
| `desktopflowbinary_SyncErrors` | [desktopflowbinary](desktopflowbinary.md) | `regardingobjectid` | `regardingobjectid_desktopflowbinary` |
| `desktopflowbinary_AsyncOperations` | [desktopflowbinary](desktopflowbinary.md) | `regardingobjectid` | `regardingobjectid_desktopflowbinary` |
| `desktopflowbinary_MailboxTrackingFolders` | [desktopflowbinary](desktopflowbinary.md) | `regardingobjectid` | `regardingobjectid_desktopflowbinary` |
| `desktopflowbinary_UserEntityInstanceDatas` | [desktopflowbinary](desktopflowbinary.md) | `objectid` | `objectid_desktopflowbinary` |
| `desktopflowbinary_ProcessSession` | [desktopflowbinary](desktopflowbinary.md) | `regardingobjectid` | `regardingobjectid_desktopflowbinary` |
| `desktopflowbinary_BulkDeleteFailures` | [desktopflowbinary](desktopflowbinary.md) | `regardingobjectid` | `regardingobjectid_desktopflowbinary` |
| `desktopflowbinary_PrincipalObjectAttributeAccesses` | [desktopflowbinary](desktopflowbinary.md) | `objectid` | `objectid_desktopflowbinary` |
| `desktopflowbinary_FileAttachments` | [desktopflowbinary](desktopflowbinary.md) | `objectid` | `objectid_desktopflowbinary` |
| `desktopflowbinary_componentchangesetversions` | [desktopflowbinary](desktopflowbinary.md) | `component` | `component_desktopflowbinary` |


## Source

Generated from [desktopflowbinary (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='desktopflowbinary')) on 2026-05-07.