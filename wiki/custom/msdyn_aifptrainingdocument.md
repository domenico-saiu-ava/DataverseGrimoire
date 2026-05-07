---
logical: "msdyn_aifptrainingdocument"
display: "AI Form Processing Document"
entitySetName: "msdyn_aifptrainingdocuments"
primaryId: "msdyn_aifptrainingdocumentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Form Processing Document

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aifptrainingdocument` |
| Display name | AI Form Processing Document |
| Display (plural) | AI Form Processing Document |
| Schema name | `msdyn_AIFpTrainingDocument` |
| Entity set (Web API) | `msdyn_aifptrainingdocuments` |
| Primary id attribute | `msdyn_aifptrainingdocumentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aifptrainingdocuments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aifptrainingdocuments(<guid>)
POST /api/data/v9.2/msdyn_aifptrainingdocuments
PATCH /api/data/v9.2/msdyn_aifptrainingdocuments(<guid>)
DELETE /api/data/v9.2/msdyn_aifptrainingdocuments(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aiconfigurationid`, `msdyn_aifptrainingdocumentid`, `msdyn_checksum`, `msdyn_metadata`, `msdyn_name`, `msdyn_sourcetype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aifptrainingdocument_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aifptrainingdocument_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aifptrainingdocument_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aifptrainingdocument_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aifptrainingdocument` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aifptrainingdocument` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aifptrainingdocument` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aifptrainingdocument` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_aiconfigurationid` | `msdyn_AIConfigurationId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aifptrainingdocument_SyncErrors` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aifptrainingdocument` |
| `msdyn_aifptrainingdocument_AsyncOperations` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aifptrainingdocument` |
| `msdyn_aifptrainingdocument_MailboxTrackingFolders` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aifptrainingdocument` |
| `msdyn_aifptrainingdocument_UserEntityInstanceDatas` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `objectid` | `objectid_msdyn_aifptrainingdocument` |
| `msdyn_aifptrainingdocument_ProcessSession` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aifptrainingdocument` |
| `msdyn_aifptrainingdocument_BulkDeleteFailures` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aifptrainingdocument` |
| `msdyn_aifptrainingdocument_PrincipalObjectAttributeAccesses` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `objectid` | `objectid_msdyn_aifptrainingdocument` |
| `msdyn_aifptrainingdocument_Annotations` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `objectid` | `objectid_msdyn_aifptrainingdocument` |


## Source

Generated from [msdyn_aifptrainingdocument (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aifptrainingdocument')) on 2026-05-07.