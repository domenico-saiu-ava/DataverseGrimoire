---
logical: "position"
display: "Position"
entitySetName: "positions"
primaryId: "positionid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Position

Position of a user in the hierarchy

## Identity

| Property | Value |
| --- | --- |
| Logical name | `position` |
| Display name | Position |
| Display (plural) | Positions |
| Schema name | `Position` |
| Entity set (Web API) | `positions` |
| Primary id attribute | `positionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/positions?$select=name&$top=10
GET /api/data/v9.2/positions(<guid>)
POST /api/data/v9.2/positions
PATCH /api/data/v9.2/positions(<guid>)
DELETE /api/data/v9.2/positions(<guid>)
```

## Attributes

Writable: **11** · Read-only: **9**

### Writable

`Description`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `ParentPositionId`, `PositionId`, `statecode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_position_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_position_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_position_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_position_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_position` | [organization](organization.md) | `organizationid` | `organizationid` |
| `position_parent_position` | [position](position.md) | `parentpositionid` | `parentpositionid` |
| `transactioncurrency_position` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `position_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `position_connection1` | _n/a_ | `record1id` | _n/a_ |
| `position_connection2` | _n/a_ | `record2id` | _n/a_ |
| `position_parent_position` | _n/a_ | `parentpositionid` | _n/a_ |
| `position_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `position_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Position_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `position_users` | _n/a_ | `positionid` | _n/a_ |


## Source

Generated from [position.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/position.md) on 2026-05-06.