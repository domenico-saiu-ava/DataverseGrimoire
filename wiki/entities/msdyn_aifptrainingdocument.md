---
logical: "msdyn_aifptrainingdocument"
display: "AI Form Processing Document"
entitySetName: "msdyn_aifptrainingdocuments"
primaryId: "msdyn_aifptrainingdocumentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AIConfigurationId`, `msdyn_AIFpTrainingDocumentId`, `msdyn_Checksum`, `msdyn_Metadata`, `msdyn_name`, `msdyn_SourceType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aifptrainingdocument` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aifptrainingdocument_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aifptrainingdocument_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aifptrainingdocument_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aifptrainingdocument_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_aiconfigurationid` | `msdyn_AIConfigurationId` |
| `owner_msdyn_aifptrainingdocument` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aifptrainingdocument` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aifptrainingdocument` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aifptrainingdocument_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aifptrainingdocument_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aifptrainingdocument_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aifptrainingdocument_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aifptrainingdocument_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aifptrainingdocument_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aifptrainingdocument_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aifptrainingdocument.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aifptrainingdocument.md) on 2026-05-06.