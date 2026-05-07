---
logical: "msdyn_derivedinsightsrelatedentity"
display: "Derived insights related entity"
entitySetName: "msdyn_derivedinsightsrelatedentities"
primaryId: "msdyn_derivedinsightsrelatedentityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Derived insights related entity

Derived insights related entities

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_derivedinsightsrelatedentity` |
| Display name | Derived insights related entity |
| Display (plural) | Derived insights related entities |
| Schema name | `msdyn_derivedinsightsrelatedentity` |
| Entity set (Web API) | `msdyn_derivedinsightsrelatedentities` |
| Primary id attribute | `msdyn_derivedinsightsrelatedentityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_derivedinsightsrelatedentities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_derivedinsightsrelatedentities(<guid>)
POST /api/data/v9.2/msdyn_derivedinsightsrelatedentities
PATCH /api/data/v9.2/msdyn_derivedinsightsrelatedentities(<guid>)
DELETE /api/data/v9.2/msdyn_derivedinsightsrelatedentities(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_derivedinsight`, `msdyn_derivedinsightsrelatedentityid`, `msdyn_entityrecordid`, `msdyn_entitytypename`, `msdyn_keyfieldshash`, `msdyn_lastmodifiedtimestamp`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_derivedinsightsrelatedentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_derivedinsightsrelatedentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_derivedinsightsrelatedentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_derivedinsightsrelatedentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_derivedinsightsrelatedentity` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_derivedinsightsrelatedentity_derivedinsight_msdyn_entityderivedinsight` | [msdyn_entityderivedinsight](msdyn_entityderivedinsight.md) | `msdyn_derivedinsight` | `msdyn_derivedinsight` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_derivedinsightsrelatedentity_SyncErrors` | [msdyn_derivedinsightsrelatedentity](msdyn_derivedinsightsrelatedentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_derivedinsightsrelatedentity` |
| `msdyn_derivedinsightsrelatedentity_AsyncOperations` | [msdyn_derivedinsightsrelatedentity](msdyn_derivedinsightsrelatedentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_derivedinsightsrelatedentity` |
| `msdyn_derivedinsightsrelatedentity_MailboxTrackingFolders` | [msdyn_derivedinsightsrelatedentity](msdyn_derivedinsightsrelatedentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_derivedinsightsrelatedentity` |
| `msdyn_derivedinsightsrelatedentity_UserEntityInstanceDatas` | [msdyn_derivedinsightsrelatedentity](msdyn_derivedinsightsrelatedentity.md) | `objectid` | `objectid_msdyn_derivedinsightsrelatedentity` |
| `msdyn_derivedinsightsrelatedentity_ProcessSession` | [msdyn_derivedinsightsrelatedentity](msdyn_derivedinsightsrelatedentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_derivedinsightsrelatedentity` |
| `msdyn_derivedinsightsrelatedentity_BulkDeleteFailures` | [msdyn_derivedinsightsrelatedentity](msdyn_derivedinsightsrelatedentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_derivedinsightsrelatedentity` |
| `msdyn_derivedinsightsrelatedentity_PrincipalObjectAttributeAccesses` | [msdyn_derivedinsightsrelatedentity](msdyn_derivedinsightsrelatedentity.md) | `objectid` | `objectid_msdyn_derivedinsightsrelatedentity` |


## Source

Generated from [msdyn_derivedinsightsrelatedentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_derivedinsightsrelatedentity')) on 2026-05-07.