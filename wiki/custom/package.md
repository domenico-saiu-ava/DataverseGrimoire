---
logical: "package"
display: "Package"
entitySetName: "packages"
primaryId: "packageid"
primaryName: "packageuniquename"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Package

## Identity

| Property | Value |
| --- | --- |
| Logical name | `package` |
| Display name | Package |
| Display (plural) | Packages |
| Schema name | `package` |
| Entity set (Web API) | `packages` |
| Primary id attribute | `packageid` |
| Primary name attribute | `packageuniquename` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/packages?$select=packageuniquename&$top=10
GET /api/data/v9.2/packages(<guid>)
POST /api/data/v9.2/packages
PATCH /api/data/v9.2/packages(<guid>)
DELETE /api/data/v9.2/packages(<guid>)
```

## Attributes

Writable: **18** · Read-only: **9**

### Writable

`appid`, `applicationname`, `catalogid`, `importsequencenumber`, `installedon`, `overriddencreatedon`, `packageid`, `packageinstanceid`, `packageinstanceoperationid`, `packageuniquename`, `packageversion`, `publisherid`, `publishername`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `tpspackageid`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `deploymentlog`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_package_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_package_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_package_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_package_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_package` | [organization](organization.md) | `organizationid` | `organizationid` |
| `FileAttachment_package_DeploymentLog` | [fileattachment](fileattachment.md) | `deploymentlog` | `deploymentlog` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `package_SyncErrors` | [package](package.md) | `regardingobjectid` | `regardingobjectid_package` |
| `package_DuplicateMatchingRecord` | [package](package.md) | `duplicaterecordid` | `duplicaterecordid_package` |
| `package_DuplicateBaseRecord` | [package](package.md) | `baserecordid` | `baserecordid_package` |
| `package_AsyncOperations` | [package](package.md) | `regardingobjectid` | `regardingobjectid_package` |
| `package_MailboxTrackingFolders` | [package](package.md) | `regardingobjectid` | `regardingobjectid_package` |
| `package_UserEntityInstanceDatas` | [package](package.md) | `objectid` | `objectid_package` |
| `package_ProcessSession` | [package](package.md) | `regardingobjectid` | `regardingobjectid_package` |
| `package_BulkDeleteFailures` | [package](package.md) | `regardingobjectid` | `regardingobjectid_package` |
| `package_PrincipalObjectAttributeAccesses` | [package](package.md) | `objectid` | `objectid_package` |
| `package_FileAttachments` | [package](package.md) | `objectid` | `objectid_package` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `package_solution` | [solution](solution.md) | _n/a_ | `package_solution` |

## Source

Generated from [package (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='package')) on 2026-05-07.