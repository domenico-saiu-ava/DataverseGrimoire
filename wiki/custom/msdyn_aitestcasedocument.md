---
logical: "msdyn_aitestcasedocument"
display: "AI Test Case Document"
entitySetName: "msdyn_aitestcasedocuments"
primaryId: "msdyn_aitestcasedocumentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Test Case Document

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitestcasedocument` |
| Display name | AI Test Case Document |
| Display (plural) | AI Test Case Document |
| Schema name | `msdyn_AITestCaseDocument` |
| Entity set (Web API) | `msdyn_aitestcasedocuments` |
| Primary id attribute | `msdyn_aitestcasedocumentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitestcasedocuments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aitestcasedocuments(<guid>)
POST /api/data/v9.2/msdyn_aitestcasedocuments
PATCH /api/data/v9.2/msdyn_aitestcasedocuments(<guid>)
DELETE /api/data/v9.2/msdyn_aitestcasedocuments(<guid>)
```

## Attributes

Writable: **13** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aitestcasedocumentid`, `msdyn_aitestcaseinputid`, `msdyn_description`, `msdyn_inputid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_inputfile`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aitestcasedocument_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitestcasedocument_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitestcasedocument_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitestcasedocument_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aitestcasedocument` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aitestcasedocument` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aitestcasedocument` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aitestcasedocument` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_AITestCaseDocument_msdyn_InputFile` | [fileattachment](fileattachment.md) | `msdyn_inputfile` | `msdyn_inputfile` |
| `msdyn_aitestcaseinput_msdyn_aitestcasedocument` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `msdyn_aitestcaseinputid` | `msdyn_AITestCaseInputId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitestcasedocument_SyncErrors` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcasedocument_AsyncOperations` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcasedocument_MailboxTrackingFolders` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcasedocument_UserEntityInstanceDatas` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `objectid` | `objectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcasedocument_ProcessSession` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcasedocument_BulkDeleteFailures` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcasedocument_PrincipalObjectAttributeAccesses` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `objectid` | `objectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcasedocument_FileAttachments` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `objectid` | `objectid_msdyn_aitestcasedocument` |


## Source

Generated from [msdyn_aitestcasedocument (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aitestcasedocument')) on 2026-05-07.