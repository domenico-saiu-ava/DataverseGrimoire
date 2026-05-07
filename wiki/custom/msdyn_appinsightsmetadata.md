---
logical: "msdyn_appinsightsmetadata"
display: "Metadati App Insights"
entitySetName: "msdyn_appinsightsmetadatas"
primaryId: "msdyn_appinsightsmetadataid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Metadati App Insights

Metadati per i componenti della piattaforma App Insights

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appinsightsmetadata` |
| Display name | Metadati App Insights |
| Display (plural) | Metadati App Insights |
| Schema name | `msdyn_appinsightsmetadata` |
| Entity set (Web API) | `msdyn_appinsightsmetadatas` |
| Primary id attribute | `msdyn_appinsightsmetadataid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appinsightsmetadatas?$select=name&$top=10
GET /api/data/v9.2/msdyn_appinsightsmetadatas(<guid>)
POST /api/data/v9.2/msdyn_appinsightsmetadatas
PATCH /api/data/v9.2/msdyn_appinsightsmetadatas(<guid>)
DELETE /api/data/v9.2/msdyn_appinsightsmetadatas(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_appinsightsmetadataid`, `msdyn_partitionkey`, `msdyn_payload`, `msdyn_payloadserialization`, `msdyn_typename`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_appinsightsmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_appinsightsmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_appinsightsmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_appinsightsmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_appinsightsmetadata` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appinsightsmetadata_SyncErrors` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_appinsightsmetadata` |
| `msdyn_appinsightsmetadata_DuplicateMatchingRecord` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_appinsightsmetadata` |
| `msdyn_appinsightsmetadata_DuplicateBaseRecord` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `baserecordid` | `baserecordid_msdyn_appinsightsmetadata` |
| `msdyn_appinsightsmetadata_AsyncOperations` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_appinsightsmetadata` |
| `msdyn_appinsightsmetadata_MailboxTrackingFolders` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_appinsightsmetadata` |
| `msdyn_appinsightsmetadata_UserEntityInstanceDatas` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `objectid` | `objectid_msdyn_appinsightsmetadata` |
| `msdyn_appinsightsmetadata_ProcessSession` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_appinsightsmetadata` |
| `msdyn_appinsightsmetadata_BulkDeleteFailures` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_appinsightsmetadata` |
| `msdyn_appinsightsmetadata_PrincipalObjectAttributeAccesses` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `objectid` | `objectid_msdyn_appinsightsmetadata` |


## Source

Generated from [msdyn_appinsightsmetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_appinsightsmetadata')) on 2026-05-07.