---
logical: "mobileofflineprofileitemfilter"
display: "MobileOfflineProfileItemFilter"
entitySetName: "mobileofflineprofileitemfilters"
primaryId: "mobileofflineprofileitemfilterid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# MobileOfflineProfileItemFilter

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mobileofflineprofileitemfilter` |
| Display name | MobileOfflineProfileItemFilter |
| Display (plural) | MobileOfflineProfileItemFilters |
| Schema name | `mobileofflineprofileitemfilter` |
| Entity set (Web API) | `mobileofflineprofileitemfilters` |
| Primary id attribute | `mobileofflineprofileitemfilterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mobileofflineprofileitemfilters?$select=name&$top=10
GET /api/data/v9.2/mobileofflineprofileitemfilters(<guid>)
POST /api/data/v9.2/mobileofflineprofileitemfilters
PATCH /api/data/v9.2/mobileofflineprofileitemfilters(<guid>)
DELETE /api/data/v9.2/mobileofflineprofileitemfilters(<guid>)
```

## Attributes

Writable: **12** · Read-only: **4**

### Writable

`fetchxml`, `isactivity`, `isintersect`, `mobileofflineprofileid`, `mobileofflineprofileitemfilterid`, `mobileofflineprofileitemid`, `name`, `offlinesql`, `outerfetchXml`, `returnedtypecode`, `subtype`, `type`

### Read-only

`createdon`, `modifiedon`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mobileofflineprofile_mobileofflineprofile` | [mobileofflineprofile](mobileofflineprofile.md) | `mobileofflineprofileid` | `mobileofflineprofileid` |



## Source

Generated from [mobileofflineprofileitemfilter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mobileofflineprofileitemfilter')) on 2026-05-07.