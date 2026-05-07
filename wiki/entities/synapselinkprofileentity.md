---
logical: "synapselinkprofileentity"
display: "Synapse Link Profile Entity"
entitySetName: "synapselinkprofileentities"
primaryId: "synapselinkprofileentityid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Synapse Link Profile Entity

Entities associated with the Synapse Link profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `synapselinkprofileentity` |
| Display name | Synapse Link Profile Entity |
| Display (plural) | Synapse Link Profile Entities |
| Schema name | `synapselinkprofileentity` |
| Entity set (Web API) | `synapselinkprofileentities` |
| Primary id attribute | `synapselinkprofileentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/synapselinkprofileentities?$select=name&$top=10
GET /api/data/v9.2/synapselinkprofileentities(<guid>)
POST /api/data/v9.2/synapselinkprofileentities
PATCH /api/data/v9.2/synapselinkprofileentities(<guid>)
DELETE /api/data/v9.2/synapselinkprofileentities(<guid>)
```

## Attributes

Writable: **20** · Read-only: **14**

### Writable

`AppendOnlyMode`, `Enabled`, `EntityName`, `EntitySource`, `EntityType`, `ExtendedProperties`, `GenerateParquet`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `PartitionStrategy`, `profile`, `RecordCountPerBlock`, `statecode`, `statuscode`, `synapselinkprofileentityId`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_synapselinkprofileentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_synapselinkprofileentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_synapselinkprofileentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_synapselinkprofileentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_synapselinkprofileentity` | [organization](organization.md) | `organizationid` | `organizationid` |
| `profileentities` | [synapselinkprofile](synapselinkprofile.md) | `profile` | `profile` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitystate` | _n/a_ | `profileentity` | _n/a_ |
| `synapselinkprofileentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofileentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofileentity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `synapselinkprofileentity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `synapselinkprofileentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofileentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `synapselinkprofileentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofileentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [synapselinkprofileentity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/synapselinkprofileentity.md) on 2026-05-06.