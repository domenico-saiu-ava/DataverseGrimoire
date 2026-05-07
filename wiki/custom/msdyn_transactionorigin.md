---
logical: "msdyn_transactionorigin"
display: "Origine transazione"
entitySetName: "msdyn_transactionorigins"
primaryId: "msdyn_transactionoriginid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine transazione

Entità di sistema usata per registrare l'origine di una vendita o un costo di progetto effettivo.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_transactionorigin` |
| Display name | Origine transazione |
| Display (plural) | Origini delle transazioni |
| Schema name | `msdyn_transactionorigin` |
| Entity set (Web API) | `msdyn_transactionorigins` |
| Primary id attribute | `msdyn_transactionoriginid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_transactionorigins?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_transactionorigins(<guid>)
POST /api/data/v9.2/msdyn_transactionorigins
PATCH /api/data/v9.2/msdyn_transactionorigins(<guid>)
DELETE /api/data/v9.2/msdyn_transactionorigins(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_origin`, `msdyn_origintype`, `msdyn_transaction`, `msdyn_transactionoriginid`, `msdyn_transactiontype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_transactionorigin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_transactionorigin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_transactionorigin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_transactionorigin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_transactionorigin` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_transactionorigin` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_transactionorigin` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_transactionorigin` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_transactionorigin_DuplicateMatchingRecord` | [msdyn_transactionorigin](msdyn_transactionorigin.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_transactionorigin` |
| `msdyn_transactionorigin_DuplicateBaseRecord` | [msdyn_transactionorigin](msdyn_transactionorigin.md) | `baserecordid` | `baserecordid_msdyn_transactionorigin` |
| `msdyn_transactionorigin_Annotations` | [msdyn_transactionorigin](msdyn_transactionorigin.md) | `objectid` | `objectid_msdyn_transactionorigin` |
| `msdyn_transactionorigin_SyncErrors` | [msdyn_transactionorigin](msdyn_transactionorigin.md) | `regardingobjectid` | `regardingobjectid_msdyn_transactionorigin` |
| `msdyn_transactionorigin_AsyncOperations` | [msdyn_transactionorigin](msdyn_transactionorigin.md) | `regardingobjectid` | `regardingobjectid_msdyn_transactionorigin` |
| `msdyn_transactionorigin_MailboxTrackingFolders` | [msdyn_transactionorigin](msdyn_transactionorigin.md) | `regardingobjectid` | `regardingobjectid_msdyn_transactionorigin` |
| `msdyn_transactionorigin_UserEntityInstanceDatas` | [msdyn_transactionorigin](msdyn_transactionorigin.md) | `objectid` | `objectid_msdyn_transactionorigin` |
| `msdyn_transactionorigin_ProcessSession` | [msdyn_transactionorigin](msdyn_transactionorigin.md) | `regardingobjectid` | `regardingobjectid_msdyn_transactionorigin` |
| `msdyn_transactionorigin_BulkDeleteFailures` | [msdyn_transactionorigin](msdyn_transactionorigin.md) | `regardingobjectid` | `regardingobjectid_msdyn_transactionorigin` |
| `msdyn_transactionorigin_PrincipalObjectAttributeAccesses` | [msdyn_transactionorigin](msdyn_transactionorigin.md) | `objectid` | `objectid_msdyn_transactionorigin` |


## Source

Generated from [msdyn_transactionorigin (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_transactionorigin')) on 2026-05-07.