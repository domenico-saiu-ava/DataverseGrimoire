---
logical: "msdynmkt_eventmetadata_sdkmessageprocessingstep"
display: "Triggers To Sdk Message Processing Steps"
entitySetName: "msdynmkt_eventmetadata_sdkmessageprocessingsteps"
primaryId: "msdynmkt_eventmetadata_sdkmessageprocessingstepid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Triggers To Sdk Message Processing Steps

Mapping between CJO Marketing Triggers and Sdk Message Processing Steps

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| Display name | Triggers To Sdk Message Processing Steps |
| Display (plural) | Triggers To Sdk Message Processing Steps |
| Schema name | `msdynmkt_eventmetadata_sdkmessageprocessingstep` |
| Entity set (Web API) | `msdynmkt_eventmetadata_sdkmessageprocessingsteps` |
| Primary id attribute | `msdynmkt_eventmetadata_sdkmessageprocessingstepid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_eventmetadata_sdkmessageprocessingsteps?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_eventmetadata_sdkmessageprocessingsteps(<guid>)
POST /api/data/v9.2/msdynmkt_eventmetadata_sdkmessageprocessingsteps
PATCH /api/data/v9.2/msdynmkt_eventmetadata_sdkmessageprocessingsteps(<guid>)
DELETE /api/data/v9.2/msdynmkt_eventmetadata_sdkmessageprocessingsteps(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdynmkt_eventmetadata_sdkmessageprocessingstepId`, `msdynmkt_eventmetadataId`, `msdynmkt_name`, `msdynmkt_sdkmessageprocessingstepId`, `msdynmkt_uniquename`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_eventmetadata_sdkmessageprocessingstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_eventmetadata_sdkmessageprocessingstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_eventmetadata_sdkmessageprocessingstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_eventmetadata_sdkmessageprocessingstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdynmkt_eventmetadata_eventmetadata_sdkmessagepro` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `msdynmkt_eventmetadataid` | `msdynmkt_eventmetadataId` |
| `msdynmkt_sdkmessageprocessingstep_eventmetadata_sd` | [sdkmessageprocessingstep](sdkmessageprocessingstep.md) | `msdynmkt_sdkmessageprocessingstepid` | `msdynmkt_sdkmessageprocessingstepId` |
| `organization_msdynmkt_eventmetadata_sdkmessageprocessingstep` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventmetadata_sdkmessageprocessingstep_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_eventmetadata_sdkmessageprocessingstep.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_eventmetadata_sdkmessageprocessingstep.md) on 2026-05-06.