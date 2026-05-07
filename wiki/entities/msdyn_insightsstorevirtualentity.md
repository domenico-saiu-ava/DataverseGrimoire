---
logical: "msdyn_insightsstorevirtualentity"
display: "Insights Store Virtual Entity"
entitySetName: "msdyn_insightsstorevirtualentities"
primaryId: "msdyn_insightsstorevirtualentityid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Insights Store Virtual Entity

Insights Store Virtual Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_insightsstorevirtualentity` |
| Display name | Insights Store Virtual Entity |
| Display (plural) | Insights Store Virtual Entities |
| Schema name | `msdyn_InsightsStoreVirtualEntity` |
| Entity set (Web API) | `msdyn_insightsstorevirtualentities` |
| Primary id attribute | `msdyn_insightsstorevirtualentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_insightsstorevirtualentities?$select=name&$top=10
GET /api/data/v9.2/msdyn_insightsstorevirtualentities(<guid>)
POST /api/data/v9.2/msdyn_insightsstorevirtualentities
PATCH /api/data/v9.2/msdyn_insightsstorevirtualentities(<guid>)
DELETE /api/data/v9.2/msdyn_insightsstorevirtualentities(<guid>)
```

## Attributes

Writable: **10** · Read-only: **14**

### Writable

`ExtensionOfRecordId`, `ImportSequenceNumber`, `IsCustomizable`, `msdyn_InsightsStoreVirtualEntityId`, `Name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_insightsstorevirtualentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_insightsstorevirtualentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_insightsstorevirtualentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_insightsstorevirtualentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_insightsstorevirtualentity_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |
| `organization_msdyn_insightsstorevirtualentity` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_insightsstorevirtualentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_insightsstorevirtualentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_insightsstorevirtualentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_insightsstorevirtualentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_insightsstorevirtualentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_insightsstorevirtualentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_insightsstorevirtualentity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_insightsstorevirtualentity.md) on 2026-05-06.