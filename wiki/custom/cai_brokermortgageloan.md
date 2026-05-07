---
logical: "cai_brokermortgageloan"
display: "Canale intermediario mutuo"
entitySetName: "cai_brokermortgageloans"
primaryId: "cai_brokermortgageloanid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Canale intermediario mutuo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_brokermortgageloan` |
| Display name | Canale intermediario mutuo |
| Display (plural) | Canali intermediario mutuo |
| Schema name | `cai_brokermortgageloan` |
| Entity set (Web API) | `cai_brokermortgageloans` |
| Primary id attribute | `cai_brokermortgageloanid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_brokermortgageloans?$select=cai_name&$top=10
GET /api/data/v9.2/cai_brokermortgageloans(<guid>)
POST /api/data/v9.2/cai_brokermortgageloans
PATCH /api/data/v9.2/cai_brokermortgageloans(<guid>)
DELETE /api/data/v9.2/cai_brokermortgageloans(<guid>)
```

## Attributes

Writable: **18** · Read-only: **8**

### Writable

`cai_brokermortgageloanid`, `cai_code`, `cai_description`, `cai_email`, `cai_intermediaryguid`, `cai_intermediaryndg`, `cai_internalchannel`, `cai_isenabledforconsultantsending`, `cai_isenabledforpromoters`, `cai_isintermediaryguidenabled`, `cai_ismanagedexternally`, `cai_name`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_brokermortgageloan_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_brokermortgageloan_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_brokermortgageloan_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_brokermortgageloan_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_brokermortgageloan` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_lead_brokermortgageloanid_cai_brokermortgageloan` | [cai_brokermortgageloan](cai_brokermortgageloan.md) | `cai_brokermortgageloanid` | `cai_brokermortgageloanid` |
| `cai_brokermortgageloan_SyncErrors` | [cai_brokermortgageloan](cai_brokermortgageloan.md) | `regardingobjectid` | `regardingobjectid_cai_brokermortgageloan` |
| `cai_brokermortgageloan_DuplicateMatchingRecord` | [cai_brokermortgageloan](cai_brokermortgageloan.md) | `duplicaterecordid` | `duplicaterecordid_cai_brokermortgageloan` |
| `cai_brokermortgageloan_DuplicateBaseRecord` | [cai_brokermortgageloan](cai_brokermortgageloan.md) | `baserecordid` | `baserecordid_cai_brokermortgageloan` |
| `cai_brokermortgageloan_AsyncOperations` | [cai_brokermortgageloan](cai_brokermortgageloan.md) | `regardingobjectid` | `regardingobjectid_cai_brokermortgageloan` |
| `cai_brokermortgageloan_MailboxTrackingFolders` | [cai_brokermortgageloan](cai_brokermortgageloan.md) | `regardingobjectid` | `regardingobjectid_cai_brokermortgageloan` |
| `cai_brokermortgageloan_UserEntityInstanceDatas` | [cai_brokermortgageloan](cai_brokermortgageloan.md) | `objectid` | `objectid_cai_brokermortgageloan` |
| `cai_brokermortgageloan_ProcessSession` | [cai_brokermortgageloan](cai_brokermortgageloan.md) | `regardingobjectid` | `regardingobjectid_cai_brokermortgageloan` |
| `cai_brokermortgageloan_BulkDeleteFailures` | [cai_brokermortgageloan](cai_brokermortgageloan.md) | `regardingobjectid` | `regardingobjectid_cai_brokermortgageloan` |
| `cai_brokermortgageloan_PrincipalObjectAttributeAccesses` | [cai_brokermortgageloan](cai_brokermortgageloan.md) | `objectid` | `objectid_cai_brokermortgageloan` |


## Source

Generated from [cai_brokermortgageloan (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_brokermortgageloan')) on 2026-05-07.