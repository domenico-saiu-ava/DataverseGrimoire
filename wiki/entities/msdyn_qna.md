---
logical: "msdyn_qna"
display: "QnA"
entitySetName: "msdyn_qnas"
primaryId: "msdyn_qnaid"
primaryName: "msdyn_question"
tableType: "Standard"
ownership: "UserOwned"
---

# QnA

Question and Answers entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_qna` |
| Display name | QnA |
| Display (plural) | QnA |
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

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AttributeName`, `msdyn_ChunkId`, `msdyn_EntityName`, `msdyn_qnaId`, `msdyn_QnAText`, `msdyn_Question`, `msdyn_Rank`, `msdyn_RecordId`, `msdyn_RecordVersion`, `msdyn_ReferenceCount`, `msdyn_Version`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_qna` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_qna_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_qna_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_qna_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_qna_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_qna` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_qna` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_qna` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_qna_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_qna_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_qna_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_qna_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_qna_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_qna_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_qna_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_qna_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_qna.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_qna.md) on 2026-05-06.