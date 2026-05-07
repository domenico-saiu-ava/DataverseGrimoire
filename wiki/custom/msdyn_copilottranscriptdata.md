---
logical: "msdyn_copilottranscriptdata"
display: "Dati di trascrizione Copilot"
entitySetName: "msdyn_copilottranscriptdatas"
primaryId: "msdyn_copilottranscriptdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dati di trascrizione Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilottranscriptdata` |
| Display name | Dati di trascrizione Copilot |
| Display (plural) | Dati di trascrizione Copilot |
| Schema name | `msdyn_copilottranscriptdata` |
| Entity set (Web API) | `msdyn_copilottranscriptdatas` |
| Primary id attribute | `msdyn_copilottranscriptdataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilottranscriptdatas?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilottranscriptdatas(<guid>)
POST /api/data/v9.2/msdyn_copilottranscriptdatas
PATCH /api/data/v9.2/msdyn_copilottranscriptdatas(<guid>)
DELETE /api/data/v9.2/msdyn_copilottranscriptdatas(<guid>)
```

## Attributes

Writable: **10** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_copilottranscriptdataid`, `msdyn_copilottranscriptid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_transcriptdata`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilottranscriptdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilottranscriptdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilottranscriptdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilottranscriptdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_copilottranscriptdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_copilottranscriptdata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_copilottranscriptdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_copilottranscriptdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_copilottranscriptdata_msdyn_transcriptdata` | [fileattachment](fileattachment.md) | `msdyn_transcriptdata` | `msdyn_transcriptdata` |
| `msdyn_msdyn_copilottranscript_msdyn_copilottranscriptdata_copilottranscriptid` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `msdyn_copilottranscriptid` | `msdyn_copilottranscriptid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilottranscriptdata_SyncErrors` | [msdyn_copilottranscriptdata](msdyn_copilottranscriptdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscriptdata` |
| `msdyn_copilottranscriptdata_DuplicateMatchingRecord` | [msdyn_copilottranscriptdata](msdyn_copilottranscriptdata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilottranscriptdata` |
| `msdyn_copilottranscriptdata_DuplicateBaseRecord` | [msdyn_copilottranscriptdata](msdyn_copilottranscriptdata.md) | `baserecordid` | `baserecordid_msdyn_copilottranscriptdata` |
| `msdyn_copilottranscriptdata_AsyncOperations` | [msdyn_copilottranscriptdata](msdyn_copilottranscriptdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscriptdata` |
| `msdyn_copilottranscriptdata_MailboxTrackingFolders` | [msdyn_copilottranscriptdata](msdyn_copilottranscriptdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscriptdata` |
| `msdyn_copilottranscriptdata_UserEntityInstanceDatas` | [msdyn_copilottranscriptdata](msdyn_copilottranscriptdata.md) | `objectid` | `objectid_msdyn_copilottranscriptdata` |
| `msdyn_copilottranscriptdata_ProcessSession` | [msdyn_copilottranscriptdata](msdyn_copilottranscriptdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscriptdata` |
| `msdyn_copilottranscriptdata_BulkDeleteFailures` | [msdyn_copilottranscriptdata](msdyn_copilottranscriptdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscriptdata` |
| `msdyn_copilottranscriptdata_PrincipalObjectAttributeAccesses` | [msdyn_copilottranscriptdata](msdyn_copilottranscriptdata.md) | `objectid` | `objectid_msdyn_copilottranscriptdata` |
| `msdyn_copilottranscriptdata_FileAttachments` | [msdyn_copilottranscriptdata](msdyn_copilottranscriptdata.md) | `objectid` | `objectid_msdyn_copilottranscriptdata` |


## Source

Generated from [msdyn_copilottranscriptdata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilottranscriptdata')) on 2026-05-07.