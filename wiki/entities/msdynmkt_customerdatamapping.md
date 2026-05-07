---
logical: "msdynmkt_customerdatamapping"
display: "CXP Customer Data Mapping"
entitySetName: "msdynmkt_customerdatamappings"
primaryId: "msdynmkt_customerdatamappingid"
primaryName: "msdynmkt_columnname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# CXP Customer Data Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_customerdatamapping` |
| Display name | CXP Customer Data Mapping |
| Display (plural) | CXP Customer Data Mappings |
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

`ImportSequenceNumber`, `msdynmkt_columnname`, `msdynmkt_customerdatamappingId`, `msdynmkt_entityname`, `msdynmkt_sourcefieldname`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_customerdatamapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_customerdatamapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_customerdatamapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_customerdatamapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_customerdatamapping` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_customerdatamapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_customerdatamapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_customerdatamapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_customerdatamapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_customerdatamapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_customerdatamapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_customerdatamapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_customerdatamapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_customerdatamapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_customerdatamapping.md) on 2026-05-06.