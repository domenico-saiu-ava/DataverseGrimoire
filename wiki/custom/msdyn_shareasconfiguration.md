---
logical: "msdyn_shareasconfiguration"
display: "ShareAs Configuration"
entitySetName: "msdyn_shareasconfigurations"
primaryId: "msdyn_shareasconfigurationid"
primaryName: "msdyn_shareashashid"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ShareAs Configuration

ShareAs Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_shareasconfiguration` |
| Display name | ShareAs Configuration |
| Display (plural) | ShareAs Configuration |
| Schema name | `msdyn_shareasconfiguration` |
| Entity set (Web API) | `msdyn_shareasconfigurations` |
| Primary id attribute | `msdyn_shareasconfigurationid` |
| Primary name attribute | `msdyn_shareashashid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_shareasconfigurations?$select=msdyn_shareashashid&$top=10
GET /api/data/v9.2/msdyn_shareasconfigurations(<guid>)
POST /api/data/v9.2/msdyn_shareasconfigurations
PATCH /api/data/v9.2/msdyn_shareasconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_shareasconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_forecastconfigurationid`, `msdyn_hierarchyrecordid`, `msdyn_shareasconfigurationid`, `msdyn_shareashashid`, `msdyn_sharedbyuserid`, `msdyn_sharedon`, `msdyn_sharedwithuserid`, `msdyn_sharelevel`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_shareasconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_shareasconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_shareasconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_shareasconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_shareasconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_shareasconfiguration_sharedbyuserid` | [systemuser](systemuser.md) | `msdyn_sharedbyuserid` | `msdyn_sharedbyuserid` |
| `msdyn_msdyn_shareasconfiguration_sharedwithuserid` | [systemuser](systemuser.md) | `msdyn_sharedwithuserid` | `msdyn_sharedwithuserid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_shareasconfiguration_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_shareasconfiguration_SyncErrors` | [msdyn_shareasconfiguration](msdyn_shareasconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_shareasconfiguration` |
| `msdyn_shareasconfiguration_AsyncOperations` | [msdyn_shareasconfiguration](msdyn_shareasconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_shareasconfiguration` |
| `msdyn_shareasconfiguration_MailboxTrackingFolders` | [msdyn_shareasconfiguration](msdyn_shareasconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_shareasconfiguration` |
| `msdyn_shareasconfiguration_UserEntityInstanceDatas` | [msdyn_shareasconfiguration](msdyn_shareasconfiguration.md) | `objectid` | `objectid_msdyn_shareasconfiguration` |
| `msdyn_shareasconfiguration_ProcessSession` | [msdyn_shareasconfiguration](msdyn_shareasconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_shareasconfiguration` |
| `msdyn_shareasconfiguration_BulkDeleteFailures` | [msdyn_shareasconfiguration](msdyn_shareasconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_shareasconfiguration` |
| `msdyn_shareasconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_shareasconfiguration](msdyn_shareasconfiguration.md) | `objectid` | `objectid_msdyn_shareasconfiguration` |


## Source

Generated from [msdyn_shareasconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_shareasconfiguration')) on 2026-05-07.