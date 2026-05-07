---
logical: "synapselinkprofileentitystate"
display: "Synapse Link Profile Entity State"
entitySetName: "synapselinkprofileentitystates"
primaryId: "synapselinkprofileentitystateid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Synapse Link Profile Entity State

Runtime state of the Synapse Link entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `synapselinkprofileentitystate` |
| Display name | Synapse Link Profile Entity State |
| Display (plural) | Synapse Link Profile Entity States |
| Schema name | `synapselinkprofileentitystate` |
| Entity set (Web API) | `synapselinkprofileentitystates` |
| Primary id attribute | `synapselinkprofileentitystateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/synapselinkprofileentitystates?$select=name&$top=10
GET /api/data/v9.2/synapselinkprofileentitystates(<guid>)
POST /api/data/v9.2/synapselinkprofileentitystates
PATCH /api/data/v9.2/synapselinkprofileentitystates(<guid>)
DELETE /api/data/v9.2/synapselinkprofileentitystates(<guid>)
```

## Attributes

Writable: **31** · Read-only: **8**

### Writable

`AdditionTime`, `CrmRecordCount`, `CrmRecordCountModifiedTime`, `EntityName`, `EntitySource`, `EntityType`, `ImportSequenceNumber`, `InitialSyncDataCompletedTime`, `InitialSyncMetadataCreatedTime`, `InitialSyncProcessCompletedTime`, `InitialSyncState`, `LakeRecordCount`, `LakeRecordCountModifiedTime`, `LastSyncedDataTime`, `LastSyncedDataVersion`, `LastSyncedMetadataTime`, `LastSyncedMetadataVersion`, `MetadataState`, `MinSyncedDataVersion`, `name`, `OverriddenCreatedOn`, `profile`, `profileentity`, `SourceRecordCount`, `statecode`, `statuscode`, `synapselinkprofileentitystateId`, `SynapseTableCreationState`, `SyncState`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitystate` | [synapselinkprofileentity](synapselinkprofileentity.md) | `profileentity` | `profileentity` |
| `lk_synapselinkprofileentitystate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_synapselinkprofileentitystate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_synapselinkprofileentitystate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_synapselinkprofileentitystate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_synapselinkprofileentitystate` | [organization](organization.md) | `organizationid` | `organizationid` |
| `profileentitystates` | [synapselinkprofile](synapselinkprofile.md) | `profile` | `profile` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `synapselinkprofileentitystate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofileentitystate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofileentitystate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `synapselinkprofileentitystate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `synapselinkprofileentitystate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofileentitystate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `synapselinkprofileentitystate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofileentitystate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [synapselinkprofileentitystate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/synapselinkprofileentitystate.md) on 2026-05-06.