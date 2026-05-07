---
logical: "solutioncomponentbatchconfiguration"
display: "Solution Component Batch Configuration"
entitySetName: "solutioncomponentbatchconfigurations"
primaryId: "solutioncomponentbatchconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Solution Component Batch Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `solutioncomponentbatchconfiguration` |
| Display name | Solution Component Batch Configuration |
| Display (plural) | Solution Component Batch Configurations |
| Schema name | `solutioncomponentbatchconfiguration` |
| Entity set (Web API) | `solutioncomponentbatchconfigurations` |
| Primary id attribute | `solutioncomponentbatchconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/solutioncomponentbatchconfigurations?$select=name&$top=10
GET /api/data/v9.2/solutioncomponentbatchconfigurations(<guid>)
POST /api/data/v9.2/solutioncomponentbatchconfigurations
PATCH /api/data/v9.2/solutioncomponentbatchconfigurations(<guid>)
DELETE /api/data/v9.2/solutioncomponentbatchconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `name`, `Operation`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PrimaryEntity`, `RelatedEntity`, `solutioncomponentbatchconfigurationId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_solutioncomponentbatchconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `entity_solutioncomponentbatchconfiguration_PrimaryEntity` | [entity](entity.md) | `primaryentity` | `PrimaryEntity` |
| `entity_solutioncomponentbatchconfiguration_RelatedEntity` | [entity](entity.md) | `relatedentity` | `RelatedEntity` |
| `lk_solutioncomponentbatchconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_solutioncomponentbatchconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_solutioncomponentbatchconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_solutioncomponentbatchconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_solutioncomponentbatchconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_solutioncomponentbatchconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_solutioncomponentbatchconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `solutioncomponentbatchconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentbatchconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentbatchconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `solutioncomponentbatchconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `solutioncomponentbatchconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `solutioncomponentbatchconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `solutioncomponentbatchconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [solutioncomponentbatchconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/solutioncomponentbatchconfiguration.md) on 2026-05-06.