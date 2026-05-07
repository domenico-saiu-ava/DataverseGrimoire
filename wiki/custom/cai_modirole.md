---
logical: "cai_modirole"
display: "Ruolo modì"
entitySetName: "cai_modiroles"
primaryId: "cai_modiroleid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Ruolo modì

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_modirole` |
| Display name | Ruolo modì |
| Display (plural) | Ruoli modì |
| Schema name | `cai_modirole` |
| Entity set (Web API) | `cai_modiroles` |
| Primary id attribute | `cai_modiroleid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_modiroles?$select=cai_name&$top=10
GET /api/data/v9.2/cai_modiroles(<guid>)
POST /api/data/v9.2/cai_modiroles
PATCH /api/data/v9.2/cai_modiroles(<guid>)
DELETE /api/data/v9.2/cai_modiroles(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`cai_code`, `cai_modiroleid`, `cai_name`, `cai_userprofileid`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_modirole_userprofileid_cai_userprofile` | [cai_userprofile](cai_userprofile.md) | `cai_userprofileid` | `cai_userprofileid` |
| `lk_cai_modirole_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_modirole_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_modirole_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_modirole_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_modirole` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_systemuser_modiroleid_cai_modirole` | [cai_modirole](cai_modirole.md) | `cai_modiroleid` | `cai_modiroleid` |
| `cai_modirole_SyncErrors` | [cai_modirole](cai_modirole.md) | `regardingobjectid` | `regardingobjectid_cai_modirole` |
| `cai_modirole_DuplicateMatchingRecord` | [cai_modirole](cai_modirole.md) | `duplicaterecordid` | `duplicaterecordid_cai_modirole` |
| `cai_modirole_DuplicateBaseRecord` | [cai_modirole](cai_modirole.md) | `baserecordid` | `baserecordid_cai_modirole` |
| `cai_modirole_AsyncOperations` | [cai_modirole](cai_modirole.md) | `regardingobjectid` | `regardingobjectid_cai_modirole` |
| `cai_modirole_MailboxTrackingFolders` | [cai_modirole](cai_modirole.md) | `regardingobjectid` | `regardingobjectid_cai_modirole` |
| `cai_modirole_UserEntityInstanceDatas` | [cai_modirole](cai_modirole.md) | `objectid` | `objectid_cai_modirole` |
| `cai_modirole_ProcessSession` | [cai_modirole](cai_modirole.md) | `regardingobjectid` | `regardingobjectid_cai_modirole` |
| `cai_modirole_BulkDeleteFailures` | [cai_modirole](cai_modirole.md) | `regardingobjectid` | `regardingobjectid_cai_modirole` |
| `cai_modirole_PrincipalObjectAttributeAccesses` | [cai_modirole](cai_modirole.md) | `objectid` | `objectid_cai_modirole` |


## Source

Generated from [cai_modirole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_modirole')) on 2026-05-07.