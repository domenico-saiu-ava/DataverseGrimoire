---
logical: "synapselinkexternaltablestate"
display: "Synapse Link External Table State"
entitySetName: "synapselinkexternaltablestates"
primaryId: "synapselinkexternaltablestateid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Synapse Link External Table State

Synapse Link external table states

## Identity

| Property | Value |
| --- | --- |
| Logical name | `synapselinkexternaltablestate` |
| Display name | Synapse Link External Table State |
| Display (plural) | Synapse Link External Table States |
| Schema name | `synapselinkexternaltablestate` |
| Entity set (Web API) | `synapselinkexternaltablestates` |
| Primary id attribute | `synapselinkexternaltablestateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/synapselinkexternaltablestates?$select=name&$top=10
GET /api/data/v9.2/synapselinkexternaltablestates(<guid>)
POST /api/data/v9.2/synapselinkexternaltablestates
PATCH /api/data/v9.2/synapselinkexternaltablestates(<guid>)
DELETE /api/data/v9.2/synapselinkexternaltablestates(<guid>)
```

## Attributes

Writable: **23** · Read-only: **8**

### Writable

`datalakefolder`, `EntityName`, `ImportSequenceNumber`, `LakehouseShortcutState`, `LastSynchronizedOn`, `LastSyncState`, `MaxRecordVersion`, `MetadataVersion`, `MinSyncedDataVersion`, `name`, `OverriddenCreatedOn`, `RecordCount`, `SchemaModifiedOn`, `SourceRecordCount`, `statecode`, `statuscode`, `SynapseDatabaseName`, `synapselinkexternaltablestateId`, `SynapseWorkspaceName`, `TableState`, `TimeZoneRuleVersionNumber`, `TrinoState`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_synapselinkexternaltablestate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_synapselinkexternaltablestate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_synapselinkexternaltablestate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_synapselinkexternaltablestate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_synapselinkexternaltablestate` | [organization](organization.md) | `organizationid` | `organizationid` |
| `synapselinkexternaltablestates` | [datalakefolder](datalakefolder.md) | `datalakefolder` | `datalakefolder` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `synapselinkexternaltablestate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkexternaltablestate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkexternaltablestate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `synapselinkexternaltablestate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `synapselinkexternaltablestate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkexternaltablestate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `synapselinkexternaltablestate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkexternaltablestate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [synapselinkexternaltablestate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/synapselinkexternaltablestate.md) on 2026-05-06.