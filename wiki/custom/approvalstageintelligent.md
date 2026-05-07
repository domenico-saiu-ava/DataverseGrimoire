---
logical: "approvalstageintelligent"
display: "Funzionalità intelligente fase di approvazione"
entitySetName: "approvalstageintelligents"
primaryId: "approvalstageintelligentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Funzionalità intelligente fase di approvazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `approvalstageintelligent` |
| Display name | Funzionalità intelligente fase di approvazione |
| Display (plural) | Funzionalità intelligenti fase di approvazione |
| Schema name | `approvalstageintelligent` |
| Entity set (Web API) | `approvalstageintelligents` |
| Primary id attribute | `approvalstageintelligentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/approvalstageintelligents?$select=name&$top=10
GET /api/data/v9.2/approvalstageintelligents(<guid>)
POST /api/data/v9.2/approvalstageintelligents
PATCH /api/data/v9.2/approvalstageintelligents(<guid>)
DELETE /api/data/v9.2/approvalstageintelligents(<guid>)
```

## Attributes

Writable: **16** · Read-only: **11**

### Writable

`aimodelid`, `approval`, `approvalstageintelligentid`, `importsequencenumber`, `name`, `nextsteps`, `nextstepsresult`, `nextstepsresultvalue`, `overriddencreatedon`, `ownerid`, `predictionrationale`, `predictionresponse`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `inputs`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_approvalstageintelligent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_approvalstageintelligent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_approvalstageintelligent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_approvalstageintelligent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_approvalstageintelligent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_approvalstageintelligent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_approvalstageintelligent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_approvalstageintelligent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_approvalstageintelligent_Inputs` | [fileattachment](fileattachment.md) | `inputs` | `inputs` |
| `approvalstageintelligent_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstageintelligent_SyncErrors` | [approvalstageintelligent](approvalstageintelligent.md) | `regardingobjectid` | `regardingobjectid_approvalstageintelligent` |
| `approvalstageintelligent_DuplicateMatchingRecord` | [approvalstageintelligent](approvalstageintelligent.md) | `duplicaterecordid` | `duplicaterecordid_approvalstageintelligent` |
| `approvalstageintelligent_DuplicateBaseRecord` | [approvalstageintelligent](approvalstageintelligent.md) | `baserecordid` | `baserecordid_approvalstageintelligent` |
| `approvalstageintelligent_AsyncOperations` | [approvalstageintelligent](approvalstageintelligent.md) | `regardingobjectid` | `regardingobjectid_approvalstageintelligent` |
| `approvalstageintelligent_MailboxTrackingFolders` | [approvalstageintelligent](approvalstageintelligent.md) | `regardingobjectid` | `regardingobjectid_approvalstageintelligent` |
| `approvalstageintelligent_UserEntityInstanceDatas` | [approvalstageintelligent](approvalstageintelligent.md) | `objectid` | `objectid_approvalstageintelligent` |
| `approvalstageintelligent_ProcessSession` | [approvalstageintelligent](approvalstageintelligent.md) | `regardingobjectid` | `regardingobjectid_approvalstageintelligent` |
| `approvalstageintelligent_BulkDeleteFailures` | [approvalstageintelligent](approvalstageintelligent.md) | `regardingobjectid` | `regardingobjectid_approvalstageintelligent` |
| `approvalstageintelligent_PrincipalObjectAttributeAccesses` | [approvalstageintelligent](approvalstageintelligent.md) | `objectid` | `objectid_approvalstageintelligent` |
| `approvalstageintelligent_FileAttachments` | [approvalstageintelligent](approvalstageintelligent.md) | `objectid` | `objectid_approvalstageintelligent` |
| `approvalstageorder_stageintelligent_approvalstageintelligent` | [approvalstageintelligent](approvalstageintelligent.md) | `stageintelligent` | `stageintelligent` |


## Source

Generated from [approvalstageintelligent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='approvalstageintelligent')) on 2026-05-07.