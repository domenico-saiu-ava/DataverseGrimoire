---
logical: "cai_loanattachments"
display: "Allegato Lead Mutuo"
entitySetName: "cai_loanattachmentses"
primaryId: "cai_loanattachmentsid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Allegato Lead Mutuo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_loanattachments` |
| Display name | Allegato Lead Mutuo |
| Display (plural) | Allegati Lead Mutuo |
| Schema name | `cai_loanattachments` |
| Entity set (Web API) | `cai_loanattachmentses` |
| Primary id attribute | `cai_loanattachmentsid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_loanattachmentses?$select=cai_name&$top=10
GET /api/data/v9.2/cai_loanattachmentses(<guid>)
POST /api/data/v9.2/cai_loanattachmentses
PATCH /api/data/v9.2/cai_loanattachmentses(<guid>)
DELETE /api/data/v9.2/cai_loanattachmentses(<guid>)
```

## Attributes

Writable: **10** · Read-only: **11**

### Writable

`cai_leadid`, `cai_loanattachmentsid`, `cai_name`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`cai_attachment`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_cai_loanattachments_cai_attachment` | [fileattachment](fileattachment.md) | `cai_attachment` | `cai_attachment` |
| `cai_loanattachments_leadid_lead` | [lead](lead.md) | `cai_leadid` | `cai_leadid` |
| `lk_cai_loanattachments_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_loanattachments_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_loanattachments_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_loanattachments_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_loanattachments` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_loanattachments` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_loanattachments` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_loanattachments` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_loanattachments_FileAttachments` | [cai_loanattachments](cai_loanattachments.md) | `objectid` | `objectid_cai_loanattachments` |
| `cai_loanattachments_SyncErrors` | [cai_loanattachments](cai_loanattachments.md) | `regardingobjectid` | `regardingobjectid_cai_loanattachments` |
| `cai_loanattachments_AsyncOperations` | [cai_loanattachments](cai_loanattachments.md) | `regardingobjectid` | `regardingobjectid_cai_loanattachments` |
| `cai_loanattachments_MailboxTrackingFolders` | [cai_loanattachments](cai_loanattachments.md) | `regardingobjectid` | `regardingobjectid_cai_loanattachments` |
| `cai_loanattachments_UserEntityInstanceDatas` | [cai_loanattachments](cai_loanattachments.md) | `objectid` | `objectid_cai_loanattachments` |
| `cai_loanattachments_ProcessSession` | [cai_loanattachments](cai_loanattachments.md) | `regardingobjectid` | `regardingobjectid_cai_loanattachments` |
| `cai_loanattachments_BulkDeleteFailures` | [cai_loanattachments](cai_loanattachments.md) | `regardingobjectid` | `regardingobjectid_cai_loanattachments` |
| `cai_loanattachments_PrincipalObjectAttributeAccesses` | [cai_loanattachments](cai_loanattachments.md) | `objectid` | `objectid_cai_loanattachments` |


## Source

Generated from [cai_loanattachments (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_loanattachments')) on 2026-05-07.