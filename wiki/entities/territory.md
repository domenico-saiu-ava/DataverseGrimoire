---
logical: "territory"
display: "Territory"
entitySetName: "territories"
primaryId: "territoryid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
synonyms_it: ["territorio", "territori", "area geografica"]
synonyms_en: ["territory", "region"]
---

# Territory

Territory represents sales regions.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `territory` |
| Display name | Territory |
| Display (plural) | Territories |
| Schema name | `Territory` |
| Entity set (Web API) | `territories` |
| Primary id attribute | `territoryid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/territories?$select=name&$top=10
GET /api/data/v9.2/territories(<guid>)
POST /api/data/v9.2/territories
PATCH /api/data/v9.2/territories(<guid>)
DELETE /api/data/v9.2/territories(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`Description`, `EntityImage`, `ImportSequenceNumber`, `ManagerId`, `Name`, `OverriddenCreatedOn`, `ParentTerritoryId`, `TerritoryId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_territory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_territory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_territorybase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_territorybase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_territories` | [organization](organization.md) | `organizationid` | `organizationid` |
| `system_user_territories` | [systemuser](systemuser.md) | `managerid` | `managerid` |
| `territory_parent_territory` | [territory](territory.md) | `parentterritoryid` | `parentterritoryid` |
| `TransactionCurrency_Territory` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Territory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Territory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `territory_connections1` | _n/a_ | `record1id` | _n/a_ |
| `territory_connections2` | _n/a_ | `record2id` | _n/a_ |
| `territory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `territory_parent_territory` | _n/a_ | `parentterritoryid` | _n/a_ |
| `territory_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Territory_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Territory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `territory_system_users` | _n/a_ | `territoryid` | _n/a_ |


## Source

Generated from [territory.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/territory.md) on 2026-05-06.