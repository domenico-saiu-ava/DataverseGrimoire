---
logical: "powerpagesscanreport"
display: "Report di analisi Power Pages"
entitySetName: "powerpagesscanreports"
primaryId: "powerpagesscanreportid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Report di analisi Power Pages

Report di analisi Power Pages

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesscanreport` |
| Display name | Report di analisi Power Pages |
| Display (plural) | Report di analisi Power Pages |
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

Writable: **12** · Read-only: **11**

### Writable

`content`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `portalid`, `powerpagesscanreportid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `filecontent`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerpagesscanreport_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesscanreport_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesscanreport_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesscanreport_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerpagesscanreport` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerpagesscanreport` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerpagesscanreport` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerpagesscanreport` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_PowerPagesScanReport_FileContent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesscanreport_SyncErrors` | [powerpagesscanreport](powerpagesscanreport.md) | `regardingobjectid` | `regardingobjectid_powerpagesscanreport` |
| `powerpagesscanreport_DuplicateMatchingRecord` | [powerpagesscanreport](powerpagesscanreport.md) | `duplicaterecordid` | `duplicaterecordid_powerpagesscanreport` |
| `powerpagesscanreport_DuplicateBaseRecord` | [powerpagesscanreport](powerpagesscanreport.md) | `baserecordid` | `baserecordid_powerpagesscanreport` |
| `powerpagesscanreport_AsyncOperations` | [powerpagesscanreport](powerpagesscanreport.md) | `regardingobjectid` | `regardingobjectid_powerpagesscanreport` |
| `powerpagesscanreport_MailboxTrackingFolders` | [powerpagesscanreport](powerpagesscanreport.md) | `regardingobjectid` | `regardingobjectid_powerpagesscanreport` |
| `powerpagesscanreport_UserEntityInstanceDatas` | [powerpagesscanreport](powerpagesscanreport.md) | `objectid` | `objectid_powerpagesscanreport` |
| `powerpagesscanreport_ProcessSession` | [powerpagesscanreport](powerpagesscanreport.md) | `regardingobjectid` | `regardingobjectid_powerpagesscanreport` |
| `powerpagesscanreport_BulkDeleteFailures` | [powerpagesscanreport](powerpagesscanreport.md) | `regardingobjectid` | `regardingobjectid_powerpagesscanreport` |
| `powerpagesscanreport_PrincipalObjectAttributeAccesses` | [powerpagesscanreport](powerpagesscanreport.md) | `objectid` | `objectid_powerpagesscanreport` |
| `powerpagesscanreport_FileAttachments` | [powerpagesscanreport](powerpagesscanreport.md) | `objectid` | `objectid_powerpagesscanreport` |


## Source

Generated from [powerpagesscanreport (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagesscanreport')) on 2026-05-07.