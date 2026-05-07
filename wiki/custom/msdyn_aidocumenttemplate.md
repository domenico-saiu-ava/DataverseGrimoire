---
logical: "msdyn_aidocumenttemplate"
display: "AI Document Template"
entitySetName: "msdyn_aidocumenttemplates"
primaryId: "msdyn_aidocumenttemplateid"
primaryName: "msdyn_filename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Document Template

Used to store Document templates

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aidocumenttemplate` |
| Display name | AI Document Template |
| Display (plural) | AI Document Templates |
| Schema name | `msdyn_aidocumenttemplate` |
| Entity set (Web API) | `msdyn_aidocumenttemplates` |
| Primary id attribute | `msdyn_aidocumenttemplateid` |
| Primary name attribute | `msdyn_filename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aidocumenttemplates?$select=msdyn_filename&$top=10
GET /api/data/v9.2/msdyn_aidocumenttemplates(<guid>)
POST /api/data/v9.2/msdyn_aidocumenttemplates
PATCH /api/data/v9.2/msdyn_aidocumenttemplates(<guid>)
DELETE /api/data/v9.2/msdyn_aidocumenttemplates(<guid>)
```

## Attributes

Writable: **12** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aidocumenttemplateid`, `msdyn_filename`, `msdyn_mimetype`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_document`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aidocumenttemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aidocumenttemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aidocumenttemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aidocumenttemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aidocumenttemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aidocumenttemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aidocumenttemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aidocumenttemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_aidocumenttemplate_msdyn_document` | [fileattachment](fileattachment.md) | `msdyn_document` | `msdyn_aidocumenttemplatefileid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aidocumenttemplate_SyncErrors` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidocumenttemplate` |
| `msdyn_aidocumenttemplate_AsyncOperations` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidocumenttemplate` |
| `msdyn_aidocumenttemplate_MailboxTrackingFolders` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidocumenttemplate` |
| `msdyn_aidocumenttemplate_UserEntityInstanceDatas` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `objectid` | `objectid_msdyn_aidocumenttemplate` |
| `msdyn_aidocumenttemplate_ProcessSession` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidocumenttemplate` |
| `msdyn_aidocumenttemplate_BulkDeleteFailures` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidocumenttemplate` |
| `msdyn_aidocumenttemplate_PrincipalObjectAttributeAccesses` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `objectid` | `objectid_msdyn_aidocumenttemplate` |
| `msdyn_aidocumenttemplate_FileAttachments` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `objectid` | `objectid_msdyn_aidocumenttemplate` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aidocumenttemplate_msdyn_aiconfig` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | _n/a_ | `msdyn_aidocumenttemplate_msdyn_aiconfig` |

## Source

Generated from [msdyn_aidocumenttemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aidocumenttemplate')) on 2026-05-07.