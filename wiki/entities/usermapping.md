---
logical: "usermapping"
display: "User Mapping"
entitySetName: "usermappings"
primaryId: "usermappingid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# User Mapping

User Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `usermapping` |
| Display name | User Mapping |
| Display (plural) | User Mappings |
| Schema name | `UserMapping` |
| Entity set (Web API) | `usermappings` |
| Primary id attribute | `usermappingid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/usermappings?$select=&$top=10
GET /api/data/v9.2/usermappings(<guid>)
POST /api/data/v9.2/usermappings
PATCH /api/data/v9.2/usermappings(<guid>)
DELETE /api/data/v9.2/usermappings(<guid>)
```

## Attributes

Writable: **7** · Read-only: **9**

### Writable

`ClaimType`, `PartnerApplicationType`, `SystemUserAttributeName`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UserMappingId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_usermapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_usermapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_usermapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_usermapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_UserMapping` | [organization](organization.md) | `organizationid` | `organizationid` |
| `TransactionCurrency_UserMapping` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `usermapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `usermapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `usermapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [usermapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/usermapping.md) on 2026-05-06.