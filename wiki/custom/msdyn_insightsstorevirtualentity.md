---
logical: "msdyn_insightsstorevirtualentity"
display: "Insights Store Virtual Entity"
entitySetName: "msdyn_insightsstorevirtualentities"
primaryId: "msdyn_insightsstorevirtualentityid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`extensionofrecordid`, `importsequencenumber`, `iscustomizable`, `msdyn_insightsstorevirtualentityid`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_insightsstorevirtualentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_insightsstorevirtualentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_insightsstorevirtualentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_insightsstorevirtualentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_insightsstorevirtualentity` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_insightsstorevirtualentity_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_insightsstorevirtualentity_SyncErrors` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_insightsstorevirtualentity` |
| `msdyn_insightsstorevirtualentity_AsyncOperations` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_insightsstorevirtualentity` |
| `msdyn_insightsstorevirtualentity_MailboxTrackingFolders` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_insightsstorevirtualentity` |
| `msdyn_insightsstorevirtualentity_UserEntityInstanceDatas` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `objectid` | `objectid_msdyn_insightsstorevirtualentity` |
| `msdyn_insightsstorevirtualentity_ProcessSession` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_insightsstorevirtualentity` |
| `msdyn_insightsstorevirtualentity_BulkDeleteFailures` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_insightsstorevirtualentity` |
| `msdyn_insightsstorevirtualentity_PrincipalObjectAttributeAccesses` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `objectid` | `objectid_msdyn_insightsstorevirtualentity` |


## Source

Generated from [msdyn_insightsstorevirtualentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_insightsstorevirtualentity')) on 2026-05-07.