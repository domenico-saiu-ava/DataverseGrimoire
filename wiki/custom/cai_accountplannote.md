---
logical: "cai_accountplannote"
display: "Nota Account plan"
entitySetName: "cai_accountplannotes"
primaryId: "cai_accountplannoteid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Nota Account plan

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_accountplannote` |
| Display name | Nota Account plan |
| Display (plural) | Note Account plan |
| Schema name | `cai_accountplannote` |
| Entity set (Web API) | `cai_accountplannotes` |
| Primary id attribute | `cai_accountplannoteid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_accountplannotes?$select=cai_name&$top=10
GET /api/data/v9.2/cai_accountplannotes(<guid>)
POST /api/data/v9.2/cai_accountplannotes
PATCH /api/data/v9.2/cai_accountplannotes(<guid>)
DELETE /api/data/v9.2/cai_accountplannotes(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`cai_accountplanid`, `cai_accountplannoteid`, `cai_description`, `cai_name`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_accountplannote_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_accountplannote_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_accountplannote_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_accountplannote_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_accountplannote` | [organization](organization.md) | `organizationid` | `organizationid` |
| `cai_cai_accountplan_cai_accountplannote_accountplanid` | [cai_accountplan](cai_accountplan.md) | `cai_accountplanid` | `cai_accountplanid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_accountplannote_SyncErrors` | [cai_accountplannote](cai_accountplannote.md) | `regardingobjectid` | `regardingobjectid_cai_accountplannote` |
| `cai_accountplannote_DuplicateMatchingRecord` | [cai_accountplannote](cai_accountplannote.md) | `duplicaterecordid` | `duplicaterecordid_cai_accountplannote` |
| `cai_accountplannote_DuplicateBaseRecord` | [cai_accountplannote](cai_accountplannote.md) | `baserecordid` | `baserecordid_cai_accountplannote` |
| `cai_accountplannote_AsyncOperations` | [cai_accountplannote](cai_accountplannote.md) | `regardingobjectid` | `regardingobjectid_cai_accountplannote` |
| `cai_accountplannote_MailboxTrackingFolders` | [cai_accountplannote](cai_accountplannote.md) | `regardingobjectid` | `regardingobjectid_cai_accountplannote` |
| `cai_accountplannote_UserEntityInstanceDatas` | [cai_accountplannote](cai_accountplannote.md) | `objectid` | `objectid_cai_accountplannote` |
| `cai_accountplannote_ProcessSession` | [cai_accountplannote](cai_accountplannote.md) | `regardingobjectid` | `regardingobjectid_cai_accountplannote` |
| `cai_accountplannote_BulkDeleteFailures` | [cai_accountplannote](cai_accountplannote.md) | `regardingobjectid` | `regardingobjectid_cai_accountplannote` |
| `cai_accountplannote_PrincipalObjectAttributeAccesses` | [cai_accountplannote](cai_accountplannote.md) | `objectid` | `objectid_cai_accountplannote` |


## Source

Generated from [cai_accountplannote (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_accountplannote')) on 2026-05-07.