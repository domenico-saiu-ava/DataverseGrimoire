---
logical: "msdyn_tour"
display: "Presentazione"
entitySetName: "msdyn_tours"
primaryId: "msdyn_tourid"
primaryName: "msdyn_displayname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Presentazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_tour` |
| Display name | Presentazione |
| Display (plural) | Presentazioni |
| Schema name | `msdyn_tour` |
| Entity set (Web API) | `msdyn_tours` |
| Primary id attribute | `msdyn_tourid` |
| Primary name attribute | `msdyn_displayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_tours?$select=msdyn_displayname&$top=10
GET /api/data/v9.2/msdyn_tours(<guid>)
POST /api/data/v9.2/msdyn_tours
PATCH /api/data/v9.2/msdyn_tours(<guid>)
DELETE /api/data/v9.2/msdyn_tours(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_displayname`, `msdyn_labelsresource`, `msdyn_path`, `msdyn_tourdefinition`, `msdyn_tourid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_tour_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_tour_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_tour_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_tour_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_tour` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_tour_SyncErrors` | [msdyn_tour](msdyn_tour.md) | `regardingobjectid` | `regardingobjectid_msdyn_tour` |
| `msdyn_tour_AsyncOperations` | [msdyn_tour](msdyn_tour.md) | `regardingobjectid` | `regardingobjectid_msdyn_tour` |
| `msdyn_tour_MailboxTrackingFolders` | [msdyn_tour](msdyn_tour.md) | `regardingobjectid` | `regardingobjectid_msdyn_tour` |
| `msdyn_tour_UserEntityInstanceDatas` | [msdyn_tour](msdyn_tour.md) | `objectid` | `objectid_msdyn_tour` |
| `msdyn_tour_ProcessSession` | [msdyn_tour](msdyn_tour.md) | `regardingobjectid` | `regardingobjectid_msdyn_tour` |
| `msdyn_tour_BulkDeleteFailures` | [msdyn_tour](msdyn_tour.md) | `regardingobjectid` | `regardingobjectid_msdyn_tour` |
| `msdyn_tour_PrincipalObjectAttributeAccesses` | [msdyn_tour](msdyn_tour.md) | `objectid` | `objectid_msdyn_tour` |


## Source

Generated from [msdyn_tour (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_tour')) on 2026-05-07.