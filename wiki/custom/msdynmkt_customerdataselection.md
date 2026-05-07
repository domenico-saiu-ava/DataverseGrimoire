---
logical: "msdynmkt_customerdataselection"
display: "Selezione dati cliente"
entitySetName: "msdynmkt_customerdataselections"
primaryId: "msdynmkt_customerdataselectionid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Selezione dati cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_customerdataselection` |
| Display name | Selezione dati cliente |
| Display (plural) | Selezioni dati cliente |
| Schema name | `msdynmkt_customerdataselection` |
| Entity set (Web API) | `msdynmkt_customerdataselections` |
| Primary id attribute | `msdynmkt_customerdataselectionid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_customerdataselections?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_customerdataselections(<guid>)
POST /api/data/v9.2/msdynmkt_customerdataselections
PATCH /api/data/v9.2/msdynmkt_customerdataselections(<guid>)
DELETE /api/data/v9.2/msdynmkt_customerdataselections(<guid>)
```

## Attributes

Writable: **18** · Read-only: **8**

### Writable

`importsequencenumber`, `msdynmkt_column1`, `msdynmkt_column10`, `msdynmkt_column2`, `msdynmkt_column3`, `msdynmkt_column4`, `msdynmkt_column5`, `msdynmkt_column6`, `msdynmkt_column7`, `msdynmkt_column8`, `msdynmkt_column9`, `msdynmkt_customerdataselectionid`, `msdynmkt_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_customerdataselection_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_customerdataselection_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_customerdataselection_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_customerdataselection_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_customerdataselection` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_customerdataselection_SyncErrors` | [msdynmkt_customerdataselection](msdynmkt_customerdataselection.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_customerdataselection` |
| `msdynmkt_customerdataselection_DuplicateMatchingRecord` | [msdynmkt_customerdataselection](msdynmkt_customerdataselection.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_customerdataselection` |
| `msdynmkt_customerdataselection_DuplicateBaseRecord` | [msdynmkt_customerdataselection](msdynmkt_customerdataselection.md) | `baserecordid` | `baserecordid_msdynmkt_customerdataselection` |
| `msdynmkt_customerdataselection_AsyncOperations` | [msdynmkt_customerdataselection](msdynmkt_customerdataselection.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_customerdataselection` |
| `msdynmkt_customerdataselection_MailboxTrackingFolders` | [msdynmkt_customerdataselection](msdynmkt_customerdataselection.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_customerdataselection` |
| `msdynmkt_customerdataselection_UserEntityInstanceDatas` | [msdynmkt_customerdataselection](msdynmkt_customerdataselection.md) | `objectid` | `objectid_msdynmkt_customerdataselection` |
| `msdynmkt_customerdataselection_ProcessSession` | [msdynmkt_customerdataselection](msdynmkt_customerdataselection.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_customerdataselection` |
| `msdynmkt_customerdataselection_BulkDeleteFailures` | [msdynmkt_customerdataselection](msdynmkt_customerdataselection.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_customerdataselection` |
| `msdynmkt_customerdataselection_PrincipalObjectAttributeAccesses` | [msdynmkt_customerdataselection](msdynmkt_customerdataselection.md) | `objectid` | `objectid_msdynmkt_customerdataselection` |


## Source

Generated from [msdynmkt_customerdataselection (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_customerdataselection')) on 2026-05-07.