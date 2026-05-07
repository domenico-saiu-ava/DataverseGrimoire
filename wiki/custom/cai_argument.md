---
logical: "cai_argument"
display: "Argomento"
entitySetName: "cai_arguments"
primaryId: "cai_argumentid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Argomento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_argument` |
| Display name | Argomento |
| Display (plural) | Argomenti |
| Schema name | `cai_argument` |
| Entity set (Web API) | `cai_arguments` |
| Primary id attribute | `cai_argumentid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_arguments?$select=cai_name&$top=10
GET /api/data/v9.2/cai_arguments(<guid>)
POST /api/data/v9.2/cai_arguments
PATCH /api/data/v9.2/cai_arguments(<guid>)
DELETE /api/data/v9.2/cai_arguments(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`cai_argumentid`, `cai_code`, `cai_colorcode`, `cai_minterclass`, `cai_name`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_argument_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_argument_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_argument_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_argument_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_argument` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_cai_argument_cai_product_argumentid` | [cai_argument](cai_argument.md) | `cai_argumentid` | `cai_argumentid` |
| `cai_cai_argument_appointment_argumentid` | [cai_argument](cai_argument.md) | `cai_argumentid` | `cai_argumentid_Appointment` |
| `cai_cai_argument_cai_campaignoffer_argumentid` | [cai_argument](cai_argument.md) | `cai_argumentid` | `cai_argumentid` |
| `cai_cai_argument_cai_appointmentrequest_argumentid` | [cai_argument](cai_argument.md) | `cai_argumentid` | `cai_argumentid` |
| `cai_argument_SyncErrors` | [cai_argument](cai_argument.md) | `regardingobjectid` | `regardingobjectid_cai_argument` |
| `cai_argument_DuplicateMatchingRecord` | [cai_argument](cai_argument.md) | `duplicaterecordid` | `duplicaterecordid_cai_argument` |
| `cai_argument_DuplicateBaseRecord` | [cai_argument](cai_argument.md) | `baserecordid` | `baserecordid_cai_argument` |
| `cai_argument_AsyncOperations` | [cai_argument](cai_argument.md) | `regardingobjectid` | `regardingobjectid_cai_argument` |
| `cai_argument_MailboxTrackingFolders` | [cai_argument](cai_argument.md) | `regardingobjectid` | `regardingobjectid_cai_argument` |
| `cai_argument_UserEntityInstanceDatas` | [cai_argument](cai_argument.md) | `objectid` | `objectid_cai_argument` |
| `cai_argument_ProcessSession` | [cai_argument](cai_argument.md) | `regardingobjectid` | `regardingobjectid_cai_argument` |
| `cai_argument_BulkDeleteFailures` | [cai_argument](cai_argument.md) | `regardingobjectid` | `regardingobjectid_cai_argument` |
| `cai_argument_PrincipalObjectAttributeAccesses` | [cai_argument](cai_argument.md) | `objectid` | `objectid_cai_argument` |


## Source

Generated from [cai_argument (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_argument')) on 2026-05-07.