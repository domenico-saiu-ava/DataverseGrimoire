---
logical: "msdyn_ocexternalcontext"
display: "Contesto esterno"
entitySetName: "msdyn_ocexternalcontexts"
primaryId: "msdyn_ocexternalcontextid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contesto esterno

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocexternalcontext` |
| Display name | Contesto esterno |
| Display (plural) | Contesti esterni |
| Schema name | `msdyn_ocexternalcontext` |
| Entity set (Web API) | `msdyn_ocexternalcontexts` |
| Primary id attribute | `msdyn_ocexternalcontextid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocexternalcontexts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocexternalcontexts(<guid>)
POST /api/data/v9.2/msdyn_ocexternalcontexts
PATCH /api/data/v9.2/msdyn_ocexternalcontexts(<guid>)
DELETE /api/data/v9.2/msdyn_ocexternalcontexts(<guid>)
```

## Attributes

Writable: **11** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_authenticationcorrelation`, `msdyn_isauthenticated`, `msdyn_name`, `msdyn_ocexternalcontextid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_transcript`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocexternalcontext_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocexternalcontext_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocexternalcontext_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocexternalcontext_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocexternalcontext` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocexternalcontext` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocexternalcontext` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocexternalcontext` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_ocexternalcontext_msdyn_transcript` | [fileattachment](fileattachment.md) | `msdyn_transcript` | `msdyn_transcript` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocexternalcontext_SyncErrors` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocexternalcontext` |
| `msdyn_ocexternalcontext_DuplicateMatchingRecord` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocexternalcontext` |
| `msdyn_ocexternalcontext_DuplicateBaseRecord` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `baserecordid` | `baserecordid_msdyn_ocexternalcontext` |
| `msdyn_ocexternalcontext_AsyncOperations` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocexternalcontext` |
| `msdyn_ocexternalcontext_MailboxTrackingFolders` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocexternalcontext` |
| `msdyn_ocexternalcontext_UserEntityInstanceDatas` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `objectid` | `objectid_msdyn_ocexternalcontext` |
| `msdyn_ocexternalcontext_ProcessSession` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocexternalcontext` |
| `msdyn_ocexternalcontext_BulkDeleteFailures` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocexternalcontext` |
| `msdyn_ocexternalcontext_PrincipalObjectAttributeAccesses` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `objectid` | `objectid_msdyn_ocexternalcontext` |
| `msdyn_ocexternalcontext_FileAttachments` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `objectid` | `objectid_msdyn_ocexternalcontext` |
| `msdyn_ocliveworkitem_msdyn_externalcontext_msdyn_ocexternalcontextid` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `msdyn_externalcontext` | `msdyn_externalcontext_msdyn_ocliveworkitem` |


## Source

Generated from [msdyn_ocexternalcontext (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocexternalcontext')) on 2026-05-07.