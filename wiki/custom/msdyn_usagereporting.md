---
logical: "msdyn_usagereporting"
display: "Report di utilizzo delle vendite"
entitySetName: "msdyn_usagereporting"
primaryId: "msdyn_usagereportingid"
primaryName: "msdyn_userId"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Report di utilizzo delle vendite

Report di utilizzo delle vendite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_usagereporting` |
| Display name | Report di utilizzo delle vendite |
| Display (plural) | Report di utilizzo delle vendite |
| Schema name | `msdyn_usagereporting` |
| Entity set (Web API) | `msdyn_usagereporting` |
| Primary id attribute | `msdyn_usagereportingid` |
| Primary name attribute | `msdyn_userId` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_usagereporting?$select=msdyn_userId&$top=10
GET /api/data/v9.2/msdyn_usagereporting(<guid>)
POST /api/data/v9.2/msdyn_usagereporting
PATCH /api/data/v9.2/msdyn_usagereporting(<guid>)
DELETE /api/data/v9.2/msdyn_usagereporting(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_date`, `msdyn_info`, `msdyn_usagereportingid`, `msdyn_userId`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_usagereporting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_usagereporting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_usagereporting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_usagereporting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_usagereporting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_usagereporting_SyncErrors` | [msdyn_usagereporting](msdyn_usagereporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_usagereporting` |
| `msdyn_usagereporting_AsyncOperations` | [msdyn_usagereporting](msdyn_usagereporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_usagereporting` |
| `msdyn_usagereporting_MailboxTrackingFolders` | [msdyn_usagereporting](msdyn_usagereporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_usagereporting` |
| `msdyn_usagereporting_UserEntityInstanceDatas` | [msdyn_usagereporting](msdyn_usagereporting.md) | `objectid` | `objectid_msdyn_usagereporting` |
| `msdyn_usagereporting_ProcessSession` | [msdyn_usagereporting](msdyn_usagereporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_usagereporting` |
| `msdyn_usagereporting_BulkDeleteFailures` | [msdyn_usagereporting](msdyn_usagereporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_usagereporting` |
| `msdyn_usagereporting_PrincipalObjectAttributeAccesses` | [msdyn_usagereporting](msdyn_usagereporting.md) | `objectid` | `objectid_msdyn_usagereporting` |


## Source

Generated from [msdyn_usagereporting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_usagereporting')) on 2026-05-07.