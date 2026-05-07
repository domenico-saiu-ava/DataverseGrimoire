---
logical: "msdyn_databaseversion"
display: "Versione del database"
entitySetName: "msdyn_databaseversions"
primaryId: "msdyn_databaseversionid"
primaryName: "msdyn_solutionname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Versione del database

Archivia la versione più recente del database per una soluzione, solo per uso interno.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_databaseversion` |
| Display name | Versione del database |
| Display (plural) | Versione del database |
| Schema name | `msdyn_databaseversion` |
| Entity set (Web API) | `msdyn_databaseversions` |
| Primary id attribute | `msdyn_databaseversionid` |
| Primary name attribute | `msdyn_solutionname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_databaseversions?$select=msdyn_solutionname&$top=10
GET /api/data/v9.2/msdyn_databaseversions(<guid>)
POST /api/data/v9.2/msdyn_databaseversions
PATCH /api/data/v9.2/msdyn_databaseversions(<guid>)
DELETE /api/data/v9.2/msdyn_databaseversions(<guid>)
```

## Attributes

Writable: **10** · Read-only: **7**

### Writable

`createdon`, `importsequencenumber`, `msdyn_databaseversionid`, `msdyn_dbversion`, `msdyn_solutionname`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_databaseversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_databaseversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_databaseversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_databaseversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_databaseversion` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_databaseversion_SyncErrors` | [msdyn_databaseversion](msdyn_databaseversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_databaseversion` |
| `msdyn_databaseversion_AsyncOperations` | [msdyn_databaseversion](msdyn_databaseversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_databaseversion` |
| `msdyn_databaseversion_MailboxTrackingFolders` | [msdyn_databaseversion](msdyn_databaseversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_databaseversion` |
| `msdyn_databaseversion_UserEntityInstanceDatas` | [msdyn_databaseversion](msdyn_databaseversion.md) | `objectid` | `objectid_msdyn_databaseversion` |
| `msdyn_databaseversion_ProcessSession` | [msdyn_databaseversion](msdyn_databaseversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_databaseversion` |
| `msdyn_databaseversion_BulkDeleteFailures` | [msdyn_databaseversion](msdyn_databaseversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_databaseversion` |
| `msdyn_databaseversion_PrincipalObjectAttributeAccesses` | [msdyn_databaseversion](msdyn_databaseversion.md) | `objectid` | `objectid_msdyn_databaseversion` |


## Source

Generated from [msdyn_databaseversion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_databaseversion')) on 2026-05-07.