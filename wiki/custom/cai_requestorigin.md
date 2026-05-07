---
logical: "cai_requestorigin"
display: "Fonte Richiesta"
entitySetName: "cai_requestorigins"
primaryId: "cai_requestoriginid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Fonte Richiesta

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_requestorigin` |
| Display name | Fonte Richiesta |
| Display (plural) | Fonti Richieste |
| Schema name | `cai_requestorigin` |
| Entity set (Web API) | `cai_requestorigins` |
| Primary id attribute | `cai_requestoriginid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_requestorigins?$select=cai_name&$top=10
GET /api/data/v9.2/cai_requestorigins(<guid>)
POST /api/data/v9.2/cai_requestorigins
PATCH /api/data/v9.2/cai_requestorigins(<guid>)
DELETE /api/data/v9.2/cai_requestorigins(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`cai_code`, `cai_name`, `cai_requestoriginid`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_requestorigin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_requestorigin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_requestorigin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_requestorigin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_requestorigin` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_lead_sourcerequestid_cai_requestorigin` | [cai_requestorigin](cai_requestorigin.md) | `cai_sourcerequestid` | `cai_sourcerequestid` |
| `cai_cai_requestorigin_cai_dispatchingrule_sourcerequestid` | [cai_requestorigin](cai_requestorigin.md) | `cai_sourcerequestid` | `cai_sourcerequestid` |
| `cai_requestorigin_SyncErrors` | [cai_requestorigin](cai_requestorigin.md) | `regardingobjectid` | `regardingobjectid_cai_requestorigin` |
| `cai_requestorigin_DuplicateMatchingRecord` | [cai_requestorigin](cai_requestorigin.md) | `duplicaterecordid` | `duplicaterecordid_cai_requestorigin` |
| `cai_requestorigin_DuplicateBaseRecord` | [cai_requestorigin](cai_requestorigin.md) | `baserecordid` | `baserecordid_cai_requestorigin` |
| `cai_requestorigin_AsyncOperations` | [cai_requestorigin](cai_requestorigin.md) | `regardingobjectid` | `regardingobjectid_cai_requestorigin` |
| `cai_requestorigin_MailboxTrackingFolders` | [cai_requestorigin](cai_requestorigin.md) | `regardingobjectid` | `regardingobjectid_cai_requestorigin` |
| `cai_requestorigin_UserEntityInstanceDatas` | [cai_requestorigin](cai_requestorigin.md) | `objectid` | `objectid_cai_requestorigin` |
| `cai_requestorigin_ProcessSession` | [cai_requestorigin](cai_requestorigin.md) | `regardingobjectid` | `regardingobjectid_cai_requestorigin` |
| `cai_requestorigin_BulkDeleteFailures` | [cai_requestorigin](cai_requestorigin.md) | `regardingobjectid` | `regardingobjectid_cai_requestorigin` |
| `cai_requestorigin_PrincipalObjectAttributeAccesses` | [cai_requestorigin](cai_requestorigin.md) | `objectid` | `objectid_cai_requestorigin` |


## Source

Generated from [cai_requestorigin (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_requestorigin')) on 2026-05-07.