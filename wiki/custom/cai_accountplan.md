---
logical: "cai_accountplan"
display: "Account plan"
entitySetName: "cai_accountplans"
primaryId: "cai_accountplanid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Account plan

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_accountplan` |
| Display name | Account plan |
| Display (plural) | Account plans |
| Schema name | `cai_accountplan` |
| Entity set (Web API) | `cai_accountplans` |
| Primary id attribute | `cai_accountplanid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_accountplans?$select=cai_name&$top=10
GET /api/data/v9.2/cai_accountplans(<guid>)
POST /api/data/v9.2/cai_accountplans
PATCH /api/data/v9.2/cai_accountplans(<guid>)
DELETE /api/data/v9.2/cai_accountplans(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`cai_accountplanid`, `cai_accountvision`, `cai_customerid`, `cai_enddate`, `cai_name`, `cai_startdate`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_accountplan_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_accountplan_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_accountplan_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_accountplan_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_accountplan` | [organization](organization.md) | `organizationid` | `organizationid` |
| `cai_account_cai_accountplan_customerid` | [account](account.md) | `cai_customerid` | `cai_customerid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_accountplan_SyncErrors` | [cai_accountplan](cai_accountplan.md) | `regardingobjectid` | `regardingobjectid_cai_accountplan` |
| `cai_accountplan_DuplicateMatchingRecord` | [cai_accountplan](cai_accountplan.md) | `duplicaterecordid` | `duplicaterecordid_cai_accountplan` |
| `cai_accountplan_DuplicateBaseRecord` | [cai_accountplan](cai_accountplan.md) | `baserecordid` | `baserecordid_cai_accountplan` |
| `cai_accountplan_AsyncOperations` | [cai_accountplan](cai_accountplan.md) | `regardingobjectid` | `regardingobjectid_cai_accountplan` |
| `cai_accountplan_MailboxTrackingFolders` | [cai_accountplan](cai_accountplan.md) | `regardingobjectid` | `regardingobjectid_cai_accountplan` |
| `cai_accountplan_UserEntityInstanceDatas` | [cai_accountplan](cai_accountplan.md) | `objectid` | `objectid_cai_accountplan` |
| `cai_accountplan_ProcessSession` | [cai_accountplan](cai_accountplan.md) | `regardingobjectid` | `regardingobjectid_cai_accountplan` |
| `cai_accountplan_BulkDeleteFailures` | [cai_accountplan](cai_accountplan.md) | `regardingobjectid` | `regardingobjectid_cai_accountplan` |
| `cai_accountplan_PrincipalObjectAttributeAccesses` | [cai_accountplan](cai_accountplan.md) | `objectid` | `objectid_cai_accountplan` |
| `cai_cai_accountplan_cai_accountplannote_accountplanid` | [cai_accountplan](cai_accountplan.md) | `cai_accountplanid` | `cai_accountplanid` |


## Source

Generated from [cai_accountplan (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_accountplan')) on 2026-05-07.