---
logical: "msdynmkt_customerdatamapping"
display: "Mapping dei dati del cliente CXP"
entitySetName: "msdynmkt_customerdatamappings"
primaryId: "msdynmkt_customerdatamappingid"
primaryName: "msdynmkt_columnname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping dei dati del cliente CXP

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_customerdatamapping` |
| Display name | Mapping dei dati del cliente CXP |
| Display (plural) | Mapping dei dati del cliente CXP |
| Schema name | `msdynmkt_customerdatamapping` |
| Entity set (Web API) | `msdynmkt_customerdatamappings` |
| Primary id attribute | `msdynmkt_customerdatamappingid` |
| Primary name attribute | `msdynmkt_columnname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_customerdatamappings?$select=msdynmkt_columnname&$top=10
GET /api/data/v9.2/msdynmkt_customerdatamappings(<guid>)
POST /api/data/v9.2/msdynmkt_customerdatamappings
PATCH /api/data/v9.2/msdynmkt_customerdatamappings(<guid>)
DELETE /api/data/v9.2/msdynmkt_customerdatamappings(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `msdynmkt_columnname`, `msdynmkt_customerdatamappingid`, `msdynmkt_entityname`, `msdynmkt_sourcefieldname`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_customerdatamapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_customerdatamapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_customerdatamapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_customerdatamapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_customerdatamapping` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_customerdatamapping_SyncErrors` | [msdynmkt_customerdatamapping](msdynmkt_customerdatamapping.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_customerdatamapping` |
| `msdynmkt_customerdatamapping_DuplicateMatchingRecord` | [msdynmkt_customerdatamapping](msdynmkt_customerdatamapping.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_customerdatamapping` |
| `msdynmkt_customerdatamapping_DuplicateBaseRecord` | [msdynmkt_customerdatamapping](msdynmkt_customerdatamapping.md) | `baserecordid` | `baserecordid_msdynmkt_customerdatamapping` |
| `msdynmkt_customerdatamapping_AsyncOperations` | [msdynmkt_customerdatamapping](msdynmkt_customerdatamapping.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_customerdatamapping` |
| `msdynmkt_customerdatamapping_MailboxTrackingFolders` | [msdynmkt_customerdatamapping](msdynmkt_customerdatamapping.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_customerdatamapping` |
| `msdynmkt_customerdatamapping_UserEntityInstanceDatas` | [msdynmkt_customerdatamapping](msdynmkt_customerdatamapping.md) | `objectid` | `objectid_msdynmkt_customerdatamapping` |
| `msdynmkt_customerdatamapping_ProcessSession` | [msdynmkt_customerdatamapping](msdynmkt_customerdatamapping.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_customerdatamapping` |
| `msdynmkt_customerdatamapping_BulkDeleteFailures` | [msdynmkt_customerdatamapping](msdynmkt_customerdatamapping.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_customerdatamapping` |
| `msdynmkt_customerdatamapping_PrincipalObjectAttributeAccesses` | [msdynmkt_customerdatamapping](msdynmkt_customerdatamapping.md) | `objectid` | `objectid_msdynmkt_customerdatamapping` |


## Source

Generated from [msdynmkt_customerdatamapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_customerdatamapping')) on 2026-05-07.