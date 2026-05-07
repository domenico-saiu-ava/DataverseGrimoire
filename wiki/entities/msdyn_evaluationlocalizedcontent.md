---
logical: "msdyn_evaluationlocalizedcontent"
display: "Evaluation localized content"
entitySetName: "msdyn_evaluationlocalizedcontents"
primaryId: "msdyn_evaluationlocalizedcontentid"
primaryName: "msdyn_metadataid"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation localized content

The localized content used for evaluations.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationlocalizedcontent` |
| Display name | Evaluation localized content |
| Display (plural) | Evaluation localized contents |
| Schema name | `msdyn_EvaluationLocalizedContent` |
| Entity set (Web API) | `msdyn_evaluationlocalizedcontents` |
| Primary id attribute | `msdyn_evaluationlocalizedcontentid` |
| Primary name attribute | `msdyn_metadataid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationlocalizedcontents?$select=msdyn_metadataid&$top=10
GET /api/data/v9.2/msdyn_evaluationlocalizedcontents(<guid>)
POST /api/data/v9.2/msdyn_evaluationlocalizedcontents
PATCH /api/data/v9.2/msdyn_evaluationlocalizedcontents(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationlocalizedcontents(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_Content`, `msdyn_EvaluationLocalizedContentId`, `msdyn_LanguageCode`, `msdyn_MetadataId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationlocalizedcontent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationlocalizedcontent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationlocalizedcontent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationlocalizedcontent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationlocalizedcontent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_evaluationlocalizedcontent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationlocalizedcontent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationlocalizedcontent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationlocalizedcontent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationlocalizedcontent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationlocalizedcontent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationlocalizedcontent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationlocalizedcontent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationlocalizedcontent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_evaluationlocalizedcontent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationlocalizedcontent.md) on 2026-05-06.