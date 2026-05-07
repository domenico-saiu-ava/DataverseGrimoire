---
logical: "cai_marketinggoal"
display: "Obiettivo di marketing"
entitySetName: "cai_marketinggoals"
primaryId: "cai_marketinggoalid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Obiettivo di marketing

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_marketinggoal` |
| Display name | Obiettivo di marketing |
| Display (plural) | Obiettivi di marketing |
| Schema name | `cai_marketinggoal` |
| Entity set (Web API) | `cai_marketinggoals` |
| Primary id attribute | `cai_marketinggoalid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_marketinggoals?$select=cai_name&$top=10
GET /api/data/v9.2/cai_marketinggoals(<guid>)
POST /api/data/v9.2/cai_marketinggoals
PATCH /api/data/v9.2/cai_marketinggoals(<guid>)
DELETE /api/data/v9.2/cai_marketinggoals(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`cai_code`, `cai_marketinggoalid`, `cai_name`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_marketinggoal_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_marketinggoal_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_marketinggoal_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_marketinggoal_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_marketinggoal` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_cai_marketinggoal_cai_product_marketinggoalid` | [cai_marketinggoal](cai_marketinggoal.md) | `cai_marketinggoalid` | `cai_marketinggoalid` |
| `cai_marketinggoal_SyncErrors` | [cai_marketinggoal](cai_marketinggoal.md) | `regardingobjectid` | `regardingobjectid_cai_marketinggoal` |
| `cai_marketinggoal_DuplicateMatchingRecord` | [cai_marketinggoal](cai_marketinggoal.md) | `duplicaterecordid` | `duplicaterecordid_cai_marketinggoal` |
| `cai_marketinggoal_DuplicateBaseRecord` | [cai_marketinggoal](cai_marketinggoal.md) | `baserecordid` | `baserecordid_cai_marketinggoal` |
| `cai_marketinggoal_AsyncOperations` | [cai_marketinggoal](cai_marketinggoal.md) | `regardingobjectid` | `regardingobjectid_cai_marketinggoal` |
| `cai_marketinggoal_MailboxTrackingFolders` | [cai_marketinggoal](cai_marketinggoal.md) | `regardingobjectid` | `regardingobjectid_cai_marketinggoal` |
| `cai_marketinggoal_UserEntityInstanceDatas` | [cai_marketinggoal](cai_marketinggoal.md) | `objectid` | `objectid_cai_marketinggoal` |
| `cai_marketinggoal_ProcessSession` | [cai_marketinggoal](cai_marketinggoal.md) | `regardingobjectid` | `regardingobjectid_cai_marketinggoal` |
| `cai_marketinggoal_BulkDeleteFailures` | [cai_marketinggoal](cai_marketinggoal.md) | `regardingobjectid` | `regardingobjectid_cai_marketinggoal` |
| `cai_marketinggoal_PrincipalObjectAttributeAccesses` | [cai_marketinggoal](cai_marketinggoal.md) | `objectid` | `objectid_cai_marketinggoal` |
| `cai_cai_marketinggoal_cai_leadoutcomegoal_marketinggoalid` | [cai_marketinggoal](cai_marketinggoal.md) | `cai_marketinggoalid` | `cai_marketinggoalid` |


## Source

Generated from [cai_marketinggoal (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_marketinggoal')) on 2026-05-07.