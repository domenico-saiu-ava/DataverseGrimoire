---
logical: "msdyn_usagemetric"
display: "Usage Metric"
entitySetName: "msdyn_usagemetrics"
primaryId: "msdyn_usagemetricid"
primaryName: "msdyn_featurename"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Usage Metric

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_usagemetric` |
| Display name | Usage Metric |
| Display (plural) | Usage Metrics |
| Schema name | `msdyn_usagemetric` |
| Entity set (Web API) | `msdyn_usagemetrics` |
| Primary id attribute | `msdyn_usagemetricid` |
| Primary name attribute | `msdyn_featurename` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_usagemetrics?$select=msdyn_featurename&$top=10
GET /api/data/v9.2/msdyn_usagemetrics(<guid>)
POST /api/data/v9.2/msdyn_usagemetrics
PATCH /api/data/v9.2/msdyn_usagemetrics(<guid>)
DELETE /api/data/v9.2/msdyn_usagemetrics(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_date`, `msdyn_featuremetrics`, `msdyn_featurename`, `msdyn_usagemetricid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_usagemetric_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_usagemetric_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_usagemetric_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_usagemetric_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_usagemetric` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_usagemetric_SyncErrors` | [msdyn_usagemetric](msdyn_usagemetric.md) | `regardingobjectid` | `regardingobjectid_msdyn_usagemetric` |
| `msdyn_usagemetric_AsyncOperations` | [msdyn_usagemetric](msdyn_usagemetric.md) | `regardingobjectid` | `regardingobjectid_msdyn_usagemetric` |
| `msdyn_usagemetric_MailboxTrackingFolders` | [msdyn_usagemetric](msdyn_usagemetric.md) | `regardingobjectid` | `regardingobjectid_msdyn_usagemetric` |
| `msdyn_usagemetric_UserEntityInstanceDatas` | [msdyn_usagemetric](msdyn_usagemetric.md) | `objectid` | `objectid_msdyn_usagemetric` |
| `msdyn_usagemetric_ProcessSession` | [msdyn_usagemetric](msdyn_usagemetric.md) | `regardingobjectid` | `regardingobjectid_msdyn_usagemetric` |
| `msdyn_usagemetric_BulkDeleteFailures` | [msdyn_usagemetric](msdyn_usagemetric.md) | `regardingobjectid` | `regardingobjectid_msdyn_usagemetric` |
| `msdyn_usagemetric_PrincipalObjectAttributeAccesses` | [msdyn_usagemetric](msdyn_usagemetric.md) | `objectid` | `objectid_msdyn_usagemetric` |


## Source

Generated from [msdyn_usagemetric (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_usagemetric')) on 2026-05-07.