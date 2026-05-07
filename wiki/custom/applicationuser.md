---
logical: "applicationuser"
display: "ApplicationUser"
entitySetName: "applicationusers"
primaryId: "applicationuserid"
primaryName: "applicationname"
tableType: "Standard"
ownership: "BusinessOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ApplicationUser

Application User that has non-interactive access to the CDS system

## Identity

| Property | Value |
| --- | --- |
| Logical name | `applicationuser` |
| Display name | ApplicationUser |
| Display (plural) | ApplicationUsers |
| Schema name | `ApplicationUser` |
| Entity set (Web API) | `applicationusers` |
| Primary id attribute | `applicationuserid` |
| Primary name attribute | `applicationname` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/applicationusers?$select=applicationname&$top=10
GET /api/data/v9.2/applicationusers(<guid>)
POST /api/data/v9.2/applicationusers
PATCH /api/data/v9.2/applicationusers(<guid>)
DELETE /api/data/v9.2/applicationusers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`applicationid`, `applicationname`, `applicationtype`, `applicationuserid`, `businessunitid`, `canimpersonateassystemuser`, `importsequencenumber`, `iscustomizable`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_applicationuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_applicationuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_applicationuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_applicationuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `business_unit_applicationuser` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `applicationuser_SyncErrors` | [applicationuser](applicationuser.md) | `regardingobjectid` | `regardingobjectid_applicationuser` |
| `applicationuser_DuplicateMatchingRecord` | [applicationuser](applicationuser.md) | `duplicaterecordid` | `duplicaterecordid_applicationuser` |
| `applicationuser_DuplicateBaseRecord` | [applicationuser](applicationuser.md) | `baserecordid` | `baserecordid_applicationuser` |
| `applicationuser_AsyncOperations` | [applicationuser](applicationuser.md) | `regardingobjectid` | `regardingobjectid_applicationuser` |
| `applicationuser_MailboxTrackingFolders` | [applicationuser](applicationuser.md) | `regardingobjectid` | `regardingobjectid_applicationuser` |
| `applicationuser_UserEntityInstanceDatas` | [applicationuser](applicationuser.md) | `objectid` | `objectid_applicationuser` |
| `applicationuser_ProcessSession` | [applicationuser](applicationuser.md) | `regardingobjectid` | `regardingobjectid_applicationuser` |
| `applicationuser_BulkDeleteFailures` | [applicationuser](applicationuser.md) | `regardingobjectid` | `regardingobjectid_applicationuser` |
| `applicationuser_PrincipalObjectAttributeAccesses` | [applicationuser](applicationuser.md) | `objectid` | `objectid_applicationuser` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `applicationuserrole` | [role](role.md) | _n/a_ | `applicationuserrole` |
| `applicationuserprofile` | [fieldsecurityprofile](fieldsecurityprofile.md) | _n/a_ | `applicationuserprofile` |

## Source

Generated from [applicationuser (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='applicationuser')) on 2026-05-07.