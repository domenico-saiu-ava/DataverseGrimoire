---
logical: "msdynmkt_contactpointsettings"
display: "Impostazioni punto di contatto"
entitySetName: "msdynmkt_contactpointsettingses"
primaryId: "msdynmkt_contactpointsettingsid"
primaryName: "msdynmkt_entityname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni punto di contatto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_contactpointsettings` |
| Display name | Impostazioni punto di contatto |
| Display (plural) | Impostazioni punto di contatto |
| Schema name | `msdynmkt_contactpointsettings` |
| Entity set (Web API) | `msdynmkt_contactpointsettingses` |
| Primary id attribute | `msdynmkt_contactpointsettingsid` |
| Primary name attribute | `msdynmkt_entityname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_contactpointsettingses?$select=msdynmkt_entityname&$top=10
GET /api/data/v9.2/msdynmkt_contactpointsettingses(<guid>)
POST /api/data/v9.2/msdynmkt_contactpointsettingses
PATCH /api/data/v9.2/msdynmkt_contactpointsettingses(<guid>)
DELETE /api/data/v9.2/msdynmkt_contactpointsettingses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`importsequencenumber`, `msdynmkt_contactablefields`, `msdynmkt_contactpointsettingsid`, `msdynmkt_contactpointtype`, `msdynmkt_emailaddressfields`, `msdynmkt_entityname`, `msdynmkt_phonenumberfields`, `msdynmkt_timezonefields`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_contactpointsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_contactpointsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_contactpointsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_contactpointsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_contactpointsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_contactpointsettings_SyncErrors` | [msdynmkt_contactpointsettings](msdynmkt_contactpointsettings.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointsettings` |
| `msdynmkt_contactpointsettings_DuplicateMatchingRecord` | [msdynmkt_contactpointsettings](msdynmkt_contactpointsettings.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_contactpointsettings` |
| `msdynmkt_contactpointsettings_DuplicateBaseRecord` | [msdynmkt_contactpointsettings](msdynmkt_contactpointsettings.md) | `baserecordid` | `baserecordid_msdynmkt_contactpointsettings` |
| `msdynmkt_contactpointsettings_AsyncOperations` | [msdynmkt_contactpointsettings](msdynmkt_contactpointsettings.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointsettings` |
| `msdynmkt_contactpointsettings_MailboxTrackingFolders` | [msdynmkt_contactpointsettings](msdynmkt_contactpointsettings.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointsettings` |
| `msdynmkt_contactpointsettings_UserEntityInstanceDatas` | [msdynmkt_contactpointsettings](msdynmkt_contactpointsettings.md) | `objectid` | `objectid_msdynmkt_contactpointsettings` |
| `msdynmkt_contactpointsettings_ProcessSession` | [msdynmkt_contactpointsettings](msdynmkt_contactpointsettings.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointsettings` |
| `msdynmkt_contactpointsettings_BulkDeleteFailures` | [msdynmkt_contactpointsettings](msdynmkt_contactpointsettings.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointsettings` |
| `msdynmkt_contactpointsettings_PrincipalObjectAttributeAccesses` | [msdynmkt_contactpointsettings](msdynmkt_contactpointsettings.md) | `objectid` | `objectid_msdynmkt_contactpointsettings` |


## Source

Generated from [msdynmkt_contactpointsettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_contactpointsettings')) on 2026-05-07.