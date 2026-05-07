---
logical: "synapselinkprofileentity"
display: "Synapse Link Profile Entity"
entitySetName: "synapselinkprofileentities"
primaryId: "synapselinkprofileentityid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`appendonlymode`, `enabled`, `entityname`, `entitysource`, `entitytype`, `extendedproperties`, `generateparquet`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `partitionstrategy`, `profile`, `recordcountperblock`, `statecode`, `statuscode`, `synapselinkprofileentityid`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

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

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `synapselinkprofileentity_SyncErrors` | [synapselinkprofileentity](synapselinkprofileentity.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentity` |
| `synapselinkprofileentity_DuplicateMatchingRecord` | [synapselinkprofileentity](synapselinkprofileentity.md) | `duplicaterecordid` | `duplicaterecordid_synapselinkprofileentity` |
| `synapselinkprofileentity_DuplicateBaseRecord` | [synapselinkprofileentity](synapselinkprofileentity.md) | `baserecordid` | `baserecordid_synapselinkprofileentity` |
| `synapselinkprofileentity_AsyncOperations` | [synapselinkprofileentity](synapselinkprofileentity.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentity` |
| `synapselinkprofileentity_MailboxTrackingFolders` | [synapselinkprofileentity](synapselinkprofileentity.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentity` |
| `synapselinkprofileentity_UserEntityInstanceDatas` | [synapselinkprofileentity](synapselinkprofileentity.md) | `objectid` | `objectid_synapselinkprofileentity` |
| `synapselinkprofileentity_ProcessSession` | [synapselinkprofileentity](synapselinkprofileentity.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentity` |
| `synapselinkprofileentity_BulkDeleteFailures` | [synapselinkprofileentity](synapselinkprofileentity.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentity` |
| `synapselinkprofileentity_PrincipalObjectAttributeAccesses` | [synapselinkprofileentity](synapselinkprofileentity.md) | `objectid` | `objectid_synapselinkprofileentity` |
| `entitystate` | [synapselinkprofileentity](synapselinkprofileentity.md) | `profileentity` | `profileentity` |


## Source

Generated from [synapselinkprofileentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='synapselinkprofileentity')) on 2026-05-07.