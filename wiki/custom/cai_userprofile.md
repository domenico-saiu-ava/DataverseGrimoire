---
logical: "cai_userprofile"
display: "Profilo Utente"
entitySetName: "cai_userprofiles"
primaryId: "cai_userprofileid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Profilo Utente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_userprofile` |
| Display name | Profilo Utente |
| Display (plural) | Profili Utente |
| Schema name | `cai_userprofile` |
| Entity set (Web API) | `cai_userprofiles` |
| Primary id attribute | `cai_userprofileid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_userprofiles?$select=cai_name&$top=10
GET /api/data/v9.2/cai_userprofiles(<guid>)
POST /api/data/v9.2/cai_userprofiles
PATCH /api/data/v9.2/cai_userprofiles(<guid>)
DELETE /api/data/v9.2/cai_userprofiles(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`cai_code`, `cai_level`, `cai_modirolesforcalendar`, `cai_name`, `cai_userprofileid`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_userprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_userprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_userprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_userprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_userprofile` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_modirole_userprofileid_cai_userprofile` | [cai_userprofile](cai_userprofile.md) | `cai_userprofileid` | `cai_userprofileid` |
| `cai_userprofile_SyncErrors` | [cai_userprofile](cai_userprofile.md) | `regardingobjectid` | `regardingobjectid_cai_userprofile` |
| `cai_userprofile_DuplicateMatchingRecord` | [cai_userprofile](cai_userprofile.md) | `duplicaterecordid` | `duplicaterecordid_cai_userprofile` |
| `cai_userprofile_DuplicateBaseRecord` | [cai_userprofile](cai_userprofile.md) | `baserecordid` | `baserecordid_cai_userprofile` |
| `cai_userprofile_AsyncOperations` | [cai_userprofile](cai_userprofile.md) | `regardingobjectid` | `regardingobjectid_cai_userprofile` |
| `cai_userprofile_MailboxTrackingFolders` | [cai_userprofile](cai_userprofile.md) | `regardingobjectid` | `regardingobjectid_cai_userprofile` |
| `cai_userprofile_UserEntityInstanceDatas` | [cai_userprofile](cai_userprofile.md) | `objectid` | `objectid_cai_userprofile` |
| `cai_userprofile_ProcessSession` | [cai_userprofile](cai_userprofile.md) | `regardingobjectid` | `regardingobjectid_cai_userprofile` |
| `cai_userprofile_BulkDeleteFailures` | [cai_userprofile](cai_userprofile.md) | `regardingobjectid` | `regardingobjectid_cai_userprofile` |
| `cai_userprofile_PrincipalObjectAttributeAccesses` | [cai_userprofile](cai_userprofile.md) | `objectid` | `objectid_cai_userprofile` |
| `cai_systemuser_userprofileid_cai_userprofile` | [cai_userprofile](cai_userprofile.md) | `cai_userprofileid` | `cai_userprofileid` |


## Source

Generated from [cai_userprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_userprofile')) on 2026-05-07.