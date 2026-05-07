---
logical: "teammobileofflineprofilemembership"
display: "TeamMobileOfflineProfileMembership"
entitySetName: "teammobileofflineprofilememberships"
primaryId: "teammobileofflineprofilemembershipid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# TeamMobileOfflineProfileMembership

## Identity

| Property | Value |
| --- | --- |
| Logical name | `teammobileofflineprofilemembership` |
| Display name | TeamMobileOfflineProfileMembership |
| Display (plural) | TeamMobileOfflineProfileMemberships |
| Schema name | `teammobileofflineprofilemembership` |
| Entity set (Web API) | `teammobileofflineprofilememberships` |
| Primary id attribute | `teammobileofflineprofilemembershipid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/teammobileofflineprofilememberships?$select=name&$top=10
GET /api/data/v9.2/teammobileofflineprofilememberships(<guid>)
POST /api/data/v9.2/teammobileofflineprofilememberships
PATCH /api/data/v9.2/teammobileofflineprofilememberships(<guid>)
DELETE /api/data/v9.2/teammobileofflineprofilememberships(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `mobileofflineprofileid`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `teamid`, `teammobileofflineprofilemembershipid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_teammobileofflineprofilemembership_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_teammobileofflineprofilemembership_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_teammobileofflineprofilemembership_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_teammobileofflineprofilemembership_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_teammobileofflineprofilemembership` | [organization](organization.md) | `organizationid` | `organizationid` |
| `mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId` | [mobileofflineprofile](mobileofflineprofile.md) | `mobileofflineprofileid` | `MobileOfflineProfileId` |
| `team_teammobileofflineprofilemembership_TeamId` | [team](team.md) | `teamid` | `TeamId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `teammobileofflineprofilemembership_SyncErrors` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_teammobileofflineprofilemembership` |
| `teammobileofflineprofilemembership_AsyncOperations` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_teammobileofflineprofilemembership` |
| `teammobileofflineprofilemembership_MailboxTrackingFolders` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_teammobileofflineprofilemembership` |
| `teammobileofflineprofilemembership_UserEntityInstanceDatas` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `objectid` | `objectid_teammobileofflineprofilemembership` |
| `teammobileofflineprofilemembership_ProcessSession` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_teammobileofflineprofilemembership` |
| `teammobileofflineprofilemembership_BulkDeleteFailures` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_teammobileofflineprofilemembership` |
| `teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `objectid` | `objectid_teammobileofflineprofilemembership` |


## Source

Generated from [teammobileofflineprofilemembership (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='teammobileofflineprofilemembership')) on 2026-05-07.