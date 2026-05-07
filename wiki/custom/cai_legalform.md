---
logical: "cai_legalform"
display: "Natura Giuridica"
entitySetName: "cai_legalforms"
primaryId: "cai_legalformid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Natura Giuridica

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_legalform` |
| Display name | Natura Giuridica |
| Display (plural) | Nature Giuridiche |
| Schema name | `cai_legalform` |
| Entity set (Web API) | `cai_legalforms` |
| Primary id attribute | `cai_legalformid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_legalforms?$select=cai_name&$top=10
GET /api/data/v9.2/cai_legalforms(<guid>)
POST /api/data/v9.2/cai_legalforms
PATCH /api/data/v9.2/cai_legalforms(<guid>)
DELETE /api/data/v9.2/cai_legalforms(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`cai_code`, `cai_legalformid`, `cai_name`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_legalform_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_legalform_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_legalform_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_legalform_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_legalform` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_contact_legalformid_cai_legalform` | [cai_legalform](cai_legalform.md) | `cai_legalformid` | `cai_legalformid` |
| `cai_legalform_SyncErrors` | [cai_legalform](cai_legalform.md) | `regardingobjectid` | `regardingobjectid_cai_legalform` |
| `cai_legalform_AsyncOperations` | [cai_legalform](cai_legalform.md) | `regardingobjectid` | `regardingobjectid_cai_legalform` |
| `cai_legalform_MailboxTrackingFolders` | [cai_legalform](cai_legalform.md) | `regardingobjectid` | `regardingobjectid_cai_legalform` |
| `cai_legalform_UserEntityInstanceDatas` | [cai_legalform](cai_legalform.md) | `objectid` | `objectid_cai_legalform` |
| `cai_legalform_ProcessSession` | [cai_legalform](cai_legalform.md) | `regardingobjectid` | `regardingobjectid_cai_legalform` |
| `cai_legalform_BulkDeleteFailures` | [cai_legalform](cai_legalform.md) | `regardingobjectid` | `regardingobjectid_cai_legalform` |
| `cai_legalform_PrincipalObjectAttributeAccesses` | [cai_legalform](cai_legalform.md) | `objectid` | `objectid_cai_legalform` |
| `cai_legalform_DuplicateMatchingRecord` | [cai_legalform](cai_legalform.md) | `duplicaterecordid` | `duplicaterecordid_cai_legalform` |
| `cai_legalform_DuplicateBaseRecord` | [cai_legalform](cai_legalform.md) | `baserecordid` | `baserecordid_cai_legalform` |
| `cai_account_legalformid_cai_legalform` | [cai_legalform](cai_legalform.md) | `cai_legalformid` | `cai_legalformid` |


## Source

Generated from [cai_legalform (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_legalform')) on 2026-05-07.