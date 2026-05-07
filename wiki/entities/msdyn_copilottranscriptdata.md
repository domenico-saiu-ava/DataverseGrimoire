---
logical: "msdyn_copilottranscriptdata"
display: "Copilot Transcript Data"
entitySetName: "msdyn_copilottranscriptdatas"
primaryId: "msdyn_copilottranscriptdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Copilot Transcript Data

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilottranscriptdata` |
| Display name | Copilot Transcript Data |
| Display (plural) | Copilot Transcript Datas |
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

Writable: **11** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `msdyn_copilottranscriptdataId`, `msdyn_copilottranscriptid`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_transcriptdata`, `msdyn_transcriptdata_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_copilottranscriptdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_copilottranscriptdata_msdyn_transcriptdata` | [fileattachment](fileattachment.md) | `msdyn_transcriptdata` | `msdyn_transcriptdata` |
| `lk_msdyn_copilottranscriptdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilottranscriptdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilottranscriptdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilottranscriptdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_copilottranscript_msdyn_copilottranscriptdata_copilottranscriptid` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `msdyn_copilottranscriptid` | `msdyn_copilottranscriptid` |
| `owner_msdyn_copilottranscriptdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_copilottranscriptdata` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_copilottranscriptdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilottranscriptdata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilottranscriptdata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilottranscriptdata_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilottranscriptdata_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilottranscriptdata_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilottranscriptdata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilottranscriptdata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilottranscriptdata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilottranscriptdata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_copilottranscriptdata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilottranscriptdata.md) on 2026-05-06.