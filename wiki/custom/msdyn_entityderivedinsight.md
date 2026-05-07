---
logical: "msdyn_entityderivedinsight"
display: "Entity derived insights"
entitySetName: "msdyn_entityderivedinsights"
primaryId: "msdyn_entityderivedinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Entity derived insights

Entity derived insights

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityderivedinsight` |
| Display name | Entity derived insights |
| Display (plural) | Entity derived insights |
| Schema name | `msdyn_entityderivedinsight` |
| Entity set (Web API) | `msdyn_entityderivedinsights` |
| Primary id attribute | `msdyn_entityderivedinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityderivedinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityderivedinsights(<guid>)
POST /api/data/v9.2/msdyn_entityderivedinsights
PATCH /api/data/v9.2/msdyn_entityderivedinsights(<guid>)
DELETE /api/data/v9.2/msdyn_entityderivedinsights(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_dataformatversion`, `msdyn_entityderivedinsightid`, `msdyn_entityrecordid`, `msdyn_entitytypename`, `msdyn_externalcrmorgid`, `msdyn_insightlocale`, `msdyn_insightsdata`, `msdyn_name`, `msdyn_processedtimestamp`, `msdyn_processingretrycount`, `msdyn_status`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entityderivedinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityderivedinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityderivedinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityderivedinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_entityderivedinsight` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityderivedinsight_SyncErrors` | [msdyn_entityderivedinsight](msdyn_entityderivedinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityderivedinsight` |
| `msdyn_entityderivedinsight_AsyncOperations` | [msdyn_entityderivedinsight](msdyn_entityderivedinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityderivedinsight` |
| `msdyn_entityderivedinsight_MailboxTrackingFolders` | [msdyn_entityderivedinsight](msdyn_entityderivedinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityderivedinsight` |
| `msdyn_entityderivedinsight_UserEntityInstanceDatas` | [msdyn_entityderivedinsight](msdyn_entityderivedinsight.md) | `objectid` | `objectid_msdyn_entityderivedinsight` |
| `msdyn_entityderivedinsight_ProcessSession` | [msdyn_entityderivedinsight](msdyn_entityderivedinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityderivedinsight` |
| `msdyn_entityderivedinsight_BulkDeleteFailures` | [msdyn_entityderivedinsight](msdyn_entityderivedinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityderivedinsight` |
| `msdyn_entityderivedinsight_PrincipalObjectAttributeAccesses` | [msdyn_entityderivedinsight](msdyn_entityderivedinsight.md) | `objectid` | `objectid_msdyn_entityderivedinsight` |
| `msdyn_derivedinsightsrelatedentity_derivedinsight_msdyn_entityderivedinsight` | [msdyn_entityderivedinsight](msdyn_entityderivedinsight.md) | `msdyn_derivedinsight` | `msdyn_derivedinsight` |


## Source

Generated from [msdyn_entityderivedinsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_entityderivedinsight')) on 2026-05-07.