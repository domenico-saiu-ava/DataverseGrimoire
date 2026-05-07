---
logical: "businessprocesslinkedartifact"
display: "Business Process Linked Artifact"
entitySetName: "businessprocesslinkedartifacts"
primaryId: "businessprocesslinkedartifactid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Business Process Linked Artifact

## Identity

| Property | Value |
| --- | --- |
| Logical name | `businessprocesslinkedartifact` |
| Display name | Business Process Linked Artifact |
| Display (plural) | Business Process Linked Artifacts |
| Schema name | `BusinessProcessLinkedArtifact` |
| Entity set (Web API) | `businessprocesslinkedartifacts` |
| Primary id attribute | `businessprocesslinkedartifactid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/businessprocesslinkedartifacts?$select=name&$top=10
GET /api/data/v9.2/businessprocesslinkedartifacts(<guid>)
POST /api/data/v9.2/businessprocesslinkedartifacts
PATCH /api/data/v9.2/businessprocesslinkedartifacts(<guid>)
DELETE /api/data/v9.2/businessprocesslinkedartifacts(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ArtifactId`, `ArtifactType`, `BusinessProcess`, `BusinessProcessLinkedArtifactId`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PlanArtifact`, `PlanLink`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_businessprocesslinkedartifact` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `businessprocesslinkedartifact_businessprocess_businessprocess` | [businessprocess](businessprocess.md) | `businessprocess` | `businessprocess` |
| `lk_businessprocesslinkedartifact_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_businessprocesslinkedartifact_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_businessprocesslinkedartifact_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_businessprocesslinkedartifact_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_businessprocesslinkedartifact` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_businessprocesslinkedartifact` | [team](team.md) | `owningteam` | `owningteam` |
| `user_businessprocesslinkedartifact` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `businessprocesslinkedartifact_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `businessprocesslinkedartifact_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `businessprocesslinkedartifact_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `businessprocesslinkedartifact_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `businessprocesslinkedartifact_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `businessprocesslinkedartifact_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `businessprocesslinkedartifact_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `businessprocesslinkedartifact_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [businessprocesslinkedartifact.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/businessprocesslinkedartifact.md) on 2026-05-06.