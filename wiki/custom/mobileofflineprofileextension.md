---
logical: "mobileofflineprofileextension"
display: "MobileOfflineProfileExtension"
entitySetName: "mobileofflineprofileextensions"
primaryId: "mobileofflineprofileextensionid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# MobileOfflineProfileExtension

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mobileofflineprofileextension` |
| Display name | MobileOfflineProfileExtension |
| Display (plural) | MobileOfflineProfileExtensions |
| Schema name | `mobileofflineprofileextension` |
| Entity set (Web API) | `mobileofflineprofileextensions` |
| Primary id attribute | `mobileofflineprofileextensionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mobileofflineprofileextensions?$select=name&$top=10
GET /api/data/v9.2/mobileofflineprofileextensions(<guid>)
POST /api/data/v9.2/mobileofflineprofileextensions
PATCH /api/data/v9.2/mobileofflineprofileextensions(<guid>)
DELETE /api/data/v9.2/mobileofflineprofileextensions(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`filterversion`, `importsequencenumber`, `mobileofflineprofileextensionid`, `mobileofflineprofileid`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_mobileofflineprofileextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mobileofflineprofileextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mobileofflineprofileextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mobileofflineprofileextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_mobileofflineprofileextension` | [organization](organization.md) | `organizationid` | `organizationid` |
| `mobileofflineprofile_profileextension` | [mobileofflineprofile](mobileofflineprofile.md) | `mobileofflineprofileid` | `mobileofflineprofileid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mobileofflineprofileextension_SyncErrors` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `regardingobjectid` | `regardingobjectid_mobileofflineprofileextension` |
| `mobileofflineprofileextension_AsyncOperations` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `regardingobjectid` | `regardingobjectid_mobileofflineprofileextension` |
| `mobileofflineprofileextension_MailboxTrackingFolders` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `regardingobjectid` | `regardingobjectid_mobileofflineprofileextension` |
| `mobileofflineprofileextension_UserEntityInstanceDatas` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `objectid` | `objectid_mobileofflineprofileextension` |
| `mobileofflineprofileextension_ProcessSession` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `regardingobjectid` | `regardingobjectid_mobileofflineprofileextension` |
| `mobileofflineprofileextension_BulkDeleteFailures` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `regardingobjectid` | `regardingobjectid_mobileofflineprofileextension` |
| `mobileofflineprofileextension_PrincipalObjectAttributeAccesses` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `objectid` | `objectid_mobileofflineprofileextension` |


## Source

Generated from [mobileofflineprofileextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mobileofflineprofileextension')) on 2026-05-07.