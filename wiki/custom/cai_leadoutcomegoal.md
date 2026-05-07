---
logical: "cai_leadoutcomegoal"
display: "Obiettivo Esito Lead"
entitySetName: "cai_leadoutcomegoals"
primaryId: "cai_leadoutcomegoalid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Obiettivo Esito Lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_leadoutcomegoal` |
| Display name | Obiettivo Esito Lead |
| Display (plural) | Obiettivi Esito Lead |
| Schema name | `cai_leadoutcomegoal` |
| Entity set (Web API) | `cai_leadoutcomegoals` |
| Primary id attribute | `cai_leadoutcomegoalid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_leadoutcomegoals?$select=cai_name&$top=10
GET /api/data/v9.2/cai_leadoutcomegoals(<guid>)
POST /api/data/v9.2/cai_leadoutcomegoals
PATCH /api/data/v9.2/cai_leadoutcomegoals(<guid>)
DELETE /api/data/v9.2/cai_leadoutcomegoals(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`cai_leadoutcomegoalid`, `cai_leadoutcomeid`, `cai_marketinggoalid`, `cai_name`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_leadoutcomegoal_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_leadoutcomegoal_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_leadoutcomegoal_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_leadoutcomegoal_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_leadoutcomegoal` | [organization](organization.md) | `organizationid` | `organizationid` |
| `cai_cai_leadoutcome_cai_leadoutcomegoal_leadoutcomeid` | [cai_leadoutcome](cai_leadoutcome.md) | `cai_leadoutcomeid` | `cai_leadoutcomeid` |
| `cai_cai_marketinggoal_cai_leadoutcomegoal_marketinggoalid` | [cai_marketinggoal](cai_marketinggoal.md) | `cai_marketinggoalid` | `cai_marketinggoalid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_leadoutcomegoal_SyncErrors` | [cai_leadoutcomegoal](cai_leadoutcomegoal.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomegoal` |
| `cai_leadoutcomegoal_DuplicateMatchingRecord` | [cai_leadoutcomegoal](cai_leadoutcomegoal.md) | `duplicaterecordid` | `duplicaterecordid_cai_leadoutcomegoal` |
| `cai_leadoutcomegoal_DuplicateBaseRecord` | [cai_leadoutcomegoal](cai_leadoutcomegoal.md) | `baserecordid` | `baserecordid_cai_leadoutcomegoal` |
| `cai_leadoutcomegoal_AsyncOperations` | [cai_leadoutcomegoal](cai_leadoutcomegoal.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomegoal` |
| `cai_leadoutcomegoal_MailboxTrackingFolders` | [cai_leadoutcomegoal](cai_leadoutcomegoal.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomegoal` |
| `cai_leadoutcomegoal_UserEntityInstanceDatas` | [cai_leadoutcomegoal](cai_leadoutcomegoal.md) | `objectid` | `objectid_cai_leadoutcomegoal` |
| `cai_leadoutcomegoal_ProcessSession` | [cai_leadoutcomegoal](cai_leadoutcomegoal.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomegoal` |
| `cai_leadoutcomegoal_BulkDeleteFailures` | [cai_leadoutcomegoal](cai_leadoutcomegoal.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomegoal` |
| `cai_leadoutcomegoal_PrincipalObjectAttributeAccesses` | [cai_leadoutcomegoal](cai_leadoutcomegoal.md) | `objectid` | `objectid_cai_leadoutcomegoal` |


## Source

Generated from [cai_leadoutcomegoal (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_leadoutcomegoal')) on 2026-05-07.