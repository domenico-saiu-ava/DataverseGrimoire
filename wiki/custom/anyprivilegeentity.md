---
logical: "anyprivilegeentity"
display: "Any Privilege Entity"
entitySetName: "anyprivilegeentities"
primaryId: "anyprivilegeentityid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Any Privilege Entity

Any Privilege Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `anyprivilegeentity` |
| Display name | Any Privilege Entity |
| Display (plural) | Any Privilege Entities |
| Schema name | `AnyPrivilegeEntity` |
| Entity set (Web API) | `anyprivilegeentities` |
| Primary id attribute | `anyprivilegeentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/anyprivilegeentities?$select=name&$top=10
GET /api/data/v9.2/anyprivilegeentities(<guid>)
POST /api/data/v9.2/anyprivilegeentities
PATCH /api/data/v9.2/anyprivilegeentities(<guid>)
DELETE /api/data/v9.2/anyprivilegeentities(<guid>)
```

## Attributes

Writable: **10** · Read-only: **14**

### Writable

`anyprivilegeentityid`, `extensionofrecordid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_anyprivilegeentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_anyprivilegeentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_anyprivilegeentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_anyprivilegeentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_anyprivilegeentity` | [organization](organization.md) | `organizationid` | `organizationid` |
| `anyprivilegeentity_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `anyprivilegeentity_SyncErrors` | [anyprivilegeentity](anyprivilegeentity.md) | `regardingobjectid` | `regardingobjectid_anyprivilegeentity` |
| `anyprivilegeentity_DuplicateMatchingRecord` | [anyprivilegeentity](anyprivilegeentity.md) | `duplicaterecordid` | `duplicaterecordid_anyprivilegeentity` |
| `anyprivilegeentity_DuplicateBaseRecord` | [anyprivilegeentity](anyprivilegeentity.md) | `baserecordid` | `baserecordid_anyprivilegeentity` |
| `anyprivilegeentity_AsyncOperations` | [anyprivilegeentity](anyprivilegeentity.md) | `regardingobjectid` | `regardingobjectid_anyprivilegeentity` |
| `anyprivilegeentity_MailboxTrackingFolders` | [anyprivilegeentity](anyprivilegeentity.md) | `regardingobjectid` | `regardingobjectid_anyprivilegeentity` |
| `anyprivilegeentity_UserEntityInstanceDatas` | [anyprivilegeentity](anyprivilegeentity.md) | `objectid` | `objectid_anyprivilegeentity` |
| `anyprivilegeentity_ProcessSession` | [anyprivilegeentity](anyprivilegeentity.md) | `regardingobjectid` | `regardingobjectid_anyprivilegeentity` |
| `anyprivilegeentity_BulkDeleteFailures` | [anyprivilegeentity](anyprivilegeentity.md) | `regardingobjectid` | `regardingobjectid_anyprivilegeentity` |
| `anyprivilegeentity_PrincipalObjectAttributeAccesses` | [anyprivilegeentity](anyprivilegeentity.md) | `objectid` | `objectid_anyprivilegeentity` |


## Source

Generated from [anyprivilegeentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='anyprivilegeentity')) on 2026-05-07.