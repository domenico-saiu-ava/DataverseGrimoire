---
logical: "msdynmkt_customerdataselection"
display: "Customer Data Selection"
entitySetName: "msdynmkt_customerdataselections"
primaryId: "msdynmkt_customerdataselectionid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Customer Data Selection

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_customerdataselection` |
| Display name | Customer Data Selection |
| Display (plural) | Customer Data Selections |
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

`ImportSequenceNumber`, `msdynmkt_column1`, `msdynmkt_column10`, `msdynmkt_column2`, `msdynmkt_column3`, `msdynmkt_column4`, `msdynmkt_column5`, `msdynmkt_column6`, `msdynmkt_column7`, `msdynmkt_column8`, `msdynmkt_column9`, `msdynmkt_customerdataselectionId`, `msdynmkt_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_customerdataselection_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_customerdataselection_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_customerdataselection_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_customerdataselection_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_customerdataselection` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_customerdataselection_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_customerdataselection_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_customerdataselection_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_customerdataselection_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_customerdataselection_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_customerdataselection_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_customerdataselection_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_customerdataselection_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_customerdataselection.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_customerdataselection.md) on 2026-05-06.