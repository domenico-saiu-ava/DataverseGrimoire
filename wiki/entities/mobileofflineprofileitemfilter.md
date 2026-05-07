---
logical: "mobileofflineprofileitemfilter"
display: "MobileOfflineProfileItemFilter"
entitySetName: "mobileofflineprofileitemfilters"
primaryId: "mobileofflineprofileitemfilterid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
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

`fetchxml`, `IsActivity`, `IsIntersect`, `mobileofflineprofileid`, `mobileofflineprofileitemfilterId`, `mobileofflineprofileitemid`, `Name`, `offlinesql`, `outerFetchXml`, `returnedtypecode`, `subtype`, `type`

### Read-only

`CreatedOn`, `ModifiedOn`, `OrganizationId`, `versionnumber`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mobileofflineprofile_mobileofflineprofile` | [mobileofflineprofile](mobileofflineprofile.md) | `mobileofflineprofileid` | `mobileofflineprofileid` |



## Source

Generated from [mobileofflineprofileitemfilter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mobileofflineprofileitemfilter.md) on 2026-05-06.