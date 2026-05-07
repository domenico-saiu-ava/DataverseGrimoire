---
logical: "usermobileofflineprofilemembership"
display: "UserMobileOfflineProfileMembership"
entitySetName: "usermobileofflineprofilememberships"
primaryId: "usermobileofflineprofilemembershipid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# UserMobileOfflineProfileMembership

## Identity

| Property | Value |
| --- | --- |
| Logical name | `usermobileofflineprofilemembership` |
| Display name | UserMobileOfflineProfileMembership |
| Display (plural) | UserMobileOfflineProfileMemberships |
| Schema name | `usermobileofflineprofilemembership` |
| Entity set (Web API) | `usermobileofflineprofilememberships` |
| Primary id attribute | `usermobileofflineprofilemembershipid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/usermobileofflineprofilememberships?$select=name&$top=10
GET /api/data/v9.2/usermobileofflineprofilememberships(<guid>)
POST /api/data/v9.2/usermobileofflineprofilememberships
PATCH /api/data/v9.2/usermobileofflineprofilememberships(<guid>)
DELETE /api/data/v9.2/usermobileofflineprofilememberships(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`hasmobileofflineprofileidconflict`, `importsequencenumber`, `mobileofflineprofileid`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `systemuserid`, `timezoneruleversionnumber`, `usermobileofflineprofilemembershipid`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_usermobileofflineprofilemembership_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_usermobileofflineprofilemembership_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_usermobileofflineprofilemembership_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_usermobileofflineprofilemembership_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_usermobileofflineprofilemembership` | [organization](organization.md) | `organizationid` | `organizationid` |
| `mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId` | [mobileofflineprofile](mobileofflineprofile.md) | `mobileofflineprofileid` | `MobileOfflineProfileId` |
| `systemuser_usermobileofflineprofilemembership_SystemUserId` | [systemuser](systemuser.md) | `systemuserid` | `SystemUserId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `usermobileofflineprofilemembership_SyncErrors` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_usermobileofflineprofilemembership` |
| `usermobileofflineprofilemembership_AsyncOperations` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_usermobileofflineprofilemembership` |
| `usermobileofflineprofilemembership_MailboxTrackingFolders` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_usermobileofflineprofilemembership` |
| `usermobileofflineprofilemembership_UserEntityInstanceDatas` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `objectid` | `objectid_usermobileofflineprofilemembership` |
| `usermobileofflineprofilemembership_ProcessSession` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_usermobileofflineprofilemembership` |
| `usermobileofflineprofilemembership_BulkDeleteFailures` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_usermobileofflineprofilemembership` |
| `usermobileofflineprofilemembership_PrincipalObjectAttributeAccesses` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `objectid` | `objectid_usermobileofflineprofilemembership` |


## Source

Generated from [usermobileofflineprofilemembership (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='usermobileofflineprofilemembership')) on 2026-05-07.