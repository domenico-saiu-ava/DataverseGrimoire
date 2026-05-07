---
logical: "supportusertable"
display: "SupportUserTable"
entitySetName: "supportusertables"
primaryId: "supportusertableid"
primaryName: "aaduserobjectid"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# SupportUserTable

## Identity

| Property | Value |
| --- | --- |
| Logical name | `supportusertable` |
| Display name | SupportUserTable |
| Display (plural) | SupportUserTables |
| Schema name | `supportusertable` |
| Entity set (Web API) | `supportusertables` |
| Primary id attribute | `supportusertableid` |
| Primary name attribute | `aaduserobjectid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/supportusertables?$select=aaduserobjectid&$top=10
GET /api/data/v9.2/supportusertables(<guid>)
POST /api/data/v9.2/supportusertables
PATCH /api/data/v9.2/supportusertables(<guid>)
DELETE /api/data/v9.2/supportusertables(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`aaduserobjectid`, `enabledforsoftdelete`, `expirydatetime`, `identityprovider`, `importsequencenumber`, `isactive`, `overriddencreatedon`, `statecode`, `statuscode`, `supportusertableid`, `tenantid`, `timezoneruleversionnumber`, `upn`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_supportusertable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_supportusertable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_supportusertable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_supportusertable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_supportusertable` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `supportusertable_SyncErrors` | [supportusertable](supportusertable.md) | `regardingobjectid` | `regardingobjectid_supportusertable` |
| `supportusertable_DuplicateMatchingRecord` | [supportusertable](supportusertable.md) | `duplicaterecordid` | `duplicaterecordid_supportusertable` |
| `supportusertable_DuplicateBaseRecord` | [supportusertable](supportusertable.md) | `baserecordid` | `baserecordid_supportusertable` |
| `supportusertable_AsyncOperations` | [supportusertable](supportusertable.md) | `regardingobjectid` | `regardingobjectid_supportusertable` |
| `supportusertable_MailboxTrackingFolders` | [supportusertable](supportusertable.md) | `regardingobjectid` | `regardingobjectid_supportusertable` |
| `supportusertable_UserEntityInstanceDatas` | [supportusertable](supportusertable.md) | `objectid` | `objectid_supportusertable` |
| `supportusertable_ProcessSession` | [supportusertable](supportusertable.md) | `regardingobjectid` | `regardingobjectid_supportusertable` |
| `supportusertable_BulkDeleteFailures` | [supportusertable](supportusertable.md) | `regardingobjectid` | `regardingobjectid_supportusertable` |
| `supportusertable_PrincipalObjectAttributeAccesses` | [supportusertable](supportusertable.md) | `objectid` | `objectid_supportusertable` |


## Source

Generated from [supportusertable (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='supportusertable')) on 2026-05-07.