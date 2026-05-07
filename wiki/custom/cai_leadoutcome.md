---
logical: "cai_leadoutcome"
display: "Esito lead"
entitySetName: "cai_leadoutcomes"
primaryId: "cai_leadoutcomeid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Esito lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_leadoutcome` |
| Display name | Esito lead |
| Display (plural) | Esiti lead |
| Schema name | `cai_leadoutcome` |
| Entity set (Web API) | `cai_leadoutcomes` |
| Primary id attribute | `cai_leadoutcomeid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_leadoutcomes?$select=cai_name&$top=10
GET /api/data/v9.2/cai_leadoutcomes(<guid>)
POST /api/data/v9.2/cai_leadoutcomes
PATCH /api/data/v9.2/cai_leadoutcomes(<guid>)
DELETE /api/data/v9.2/cai_leadoutcomes(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`cai_code`, `cai_isfinal`, `cai_leadoutcomeid`, `cai_leadstatecode`, `cai_leadstatuscode`, `cai_name`, `cai_technicalcode`, `cai_type`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_leadoutcome_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_leadoutcome_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_leadoutcome_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_leadoutcome_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_leadoutcome` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_cai_leadoutcome_cai_leadoutcomeactivity_leadoutcomeid` | [cai_leadoutcome](cai_leadoutcome.md) | `cai_leadoutcomeid` | `cai_leadoutcomeid` |
| `cai_lead_lastleadoutcomeid_cai_leadoutcome` | [cai_leadoutcome](cai_leadoutcome.md) | `cai_lastleadoutcomeid` | `cai_lastleadoutcomeid` |
| `cai_cai_leadoutcome_cai_leadoutcomegoal_leadoutcomeid` | [cai_leadoutcome](cai_leadoutcome.md) | `cai_leadoutcomeid` | `cai_leadoutcomeid` |
| `cai_leadoutcome_SyncErrors` | [cai_leadoutcome](cai_leadoutcome.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcome` |
| `cai_leadoutcome_DuplicateMatchingRecord` | [cai_leadoutcome](cai_leadoutcome.md) | `duplicaterecordid` | `duplicaterecordid_cai_leadoutcome` |
| `cai_leadoutcome_DuplicateBaseRecord` | [cai_leadoutcome](cai_leadoutcome.md) | `baserecordid` | `baserecordid_cai_leadoutcome` |
| `cai_leadoutcome_AsyncOperations` | [cai_leadoutcome](cai_leadoutcome.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcome` |
| `cai_leadoutcome_MailboxTrackingFolders` | [cai_leadoutcome](cai_leadoutcome.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcome` |
| `cai_leadoutcome_UserEntityInstanceDatas` | [cai_leadoutcome](cai_leadoutcome.md) | `objectid` | `objectid_cai_leadoutcome` |
| `cai_leadoutcome_ProcessSession` | [cai_leadoutcome](cai_leadoutcome.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcome` |
| `cai_leadoutcome_BulkDeleteFailures` | [cai_leadoutcome](cai_leadoutcome.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcome` |
| `cai_leadoutcome_PrincipalObjectAttributeAccesses` | [cai_leadoutcome](cai_leadoutcome.md) | `objectid` | `objectid_cai_leadoutcome` |
| `cai_leadoutcomeactivitycssessionlead_leadoutcomeid_cai_leadoutcome` | [cai_leadoutcome](cai_leadoutcome.md) | `cai_leadoutcomeid` | `cai_leadoutcomeid` |


## Source

Generated from [cai_leadoutcome (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_leadoutcome')) on 2026-05-07.