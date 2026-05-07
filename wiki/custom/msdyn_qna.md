---
logical: "msdyn_qna"
display: "Domande e risposte"
entitySetName: "msdyn_qnas"
primaryId: "msdyn_qnaid"
primaryName: "msdyn_question"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Domande e risposte

Entità domande e risposte

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_qna` |
| Display name | Domande e risposte |
| Display (plural) | Domande e risposte |
| Schema name | `msdyn_qna` |
| Entity set (Web API) | `msdyn_qnas` |
| Primary id attribute | `msdyn_qnaid` |
| Primary name attribute | `msdyn_question` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_qnas?$select=msdyn_question&$top=10
GET /api/data/v9.2/msdyn_qnas(<guid>)
POST /api/data/v9.2/msdyn_qnas
PATCH /api/data/v9.2/msdyn_qnas(<guid>)
DELETE /api/data/v9.2/msdyn_qnas(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_attributename`, `msdyn_chunkid`, `msdyn_entityname`, `msdyn_qnaid`, `msdyn_qnatext`, `msdyn_question`, `msdyn_rank`, `msdyn_recordid`, `msdyn_recordversion`, `msdyn_referencecount`, `msdyn_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_qna_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_qna_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_qna_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_qna_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_qna` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_qna` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_qna` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_qna` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_qna_SyncErrors` | [msdyn_qna](msdyn_qna.md) | `regardingobjectid` | `regardingobjectid_msdyn_qna` |
| `msdyn_qna_DuplicateMatchingRecord` | [msdyn_qna](msdyn_qna.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_qna` |
| `msdyn_qna_DuplicateBaseRecord` | [msdyn_qna](msdyn_qna.md) | `baserecordid` | `baserecordid_msdyn_qna` |
| `msdyn_qna_AsyncOperations` | [msdyn_qna](msdyn_qna.md) | `regardingobjectid` | `regardingobjectid_msdyn_qna` |
| `msdyn_qna_MailboxTrackingFolders` | [msdyn_qna](msdyn_qna.md) | `regardingobjectid` | `regardingobjectid_msdyn_qna` |
| `msdyn_qna_UserEntityInstanceDatas` | [msdyn_qna](msdyn_qna.md) | `objectid` | `objectid_msdyn_qna` |
| `msdyn_qna_ProcessSession` | [msdyn_qna](msdyn_qna.md) | `regardingobjectid` | `regardingobjectid_msdyn_qna` |
| `msdyn_qna_BulkDeleteFailures` | [msdyn_qna](msdyn_qna.md) | `regardingobjectid` | `regardingobjectid_msdyn_qna` |
| `msdyn_qna_PrincipalObjectAttributeAccesses` | [msdyn_qna](msdyn_qna.md) | `objectid` | `objectid_msdyn_qna` |


## Source

Generated from [msdyn_qna (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_qna')) on 2026-05-07.