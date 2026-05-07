---
logical: "mspp_entitylist"
display: "List"
entitySetName: "mspp_entitylists"
primaryId: "mspp_entitylistid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# List

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_entitylist` |
| Display name | List |
| Display (plural) | Lists |
| Schema name | `mspp_entitylist` |
| Entity set (Web API) | `mspp_entitylists` |
| Primary id attribute | `mspp_entitylistid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_entitylists?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_entitylists(<guid>)
POST /api/data/v9.2/mspp_entitylists
PATCH /api/data/v9.2/mspp_entitylists(<guid>)
DELETE /api/data/v9.2/mspp_entitylists(<guid>)
```

## Attributes

Writable: **71** · Read-only: **0**

### Writable

`mspp_calendar_alldayfieldname`, `mspp_calendar_descriptionfieldname`, `mspp_calendar_enabled`, `mspp_calendar_enddatefieldname`, `mspp_calendar_initialdate`, `mspp_calendar_initialview`, `mspp_calendar_locationfieldname`, `mspp_calendar_organizerfieldname`, `mspp_calendar_startdatefieldname`, `mspp_calendar_style`, `mspp_calendar_summaryfieldname`, `mspp_calendar_timezone`, `mspp_calendar_timezonemode`, `mspp_createbuttonlabel`, `mspp_createdby`, `mspp_createdon`, `mspp_detailsbuttonlabel`, `mspp_emptylisttext`, `mspp_entitylistId`, `mspp_entityname`, `mspp_entitypermissionsenabled`, `mspp_filter_applybuttonlabel`, `mspp_filter_definition`, `mspp_filter_enabled`, `mspp_filter_orientation`, `mspp_filteraccount`, `mspp_filterportaluser`, `mspp_filterwebsite`, `mspp_idquerystringparametername`, `mspp_iscodecomponent`, `mspp_key`, `mspp_map_credentials`, `mspp_map_distanceunits`, `mspp_map_distancevalues`, `mspp_map_enabled`, `mspp_map_infoboxdescriptionfieldname`, `mspp_map_infoboxoffsetx`, `mspp_map_infoboxoffsety`, `mspp_map_infoboxtitlefieldname`, `mspp_map_latitude`, `mspp_map_latitudefieldname`, `mspp_map_longitude`, `mspp_map_longitudefieldname`, `mspp_map_pushpinheight`, `mspp_map_pushpinurl`, `mspp_map_pushpinwidth`, `mspp_map_resturl`, `mspp_map_type`, `mspp_map_zoom`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_odata_enabled`, `mspp_odata_entitysetname`, `mspp_odata_entitytypename`, `mspp_odata_view`, `mspp_pagesize`, `mspp_primarykeyname`, `mspp_provisionedlanguages`, `mspp_registerstartupscript`, `mspp_searchenabled`, `mspp_searchplaceholdertext`, `mspp_searchtooltiptext`, `mspp_settings`, `mspp_view`, `mspp_views`, `mspp_webpageforcreate`, `mspp_webpagefordetailsview`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_entitylist_webpageforcreate` | [mspp_webpage](mspp_webpage.md) | `mspp_webpageforcreate` | `mspp_webpageforcreate` |
| `mspp_entitylist_webpagefordetailsview` | [mspp_webpage](mspp_webpage.md) | `mspp_webpagefordetailsview` | `mspp_webpagefordetailsview` |
| `mspp_systemuser_mspp_entitylist_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_entitylist_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_entitylist` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_webpage_entitylist` | _n/a_ | `mspp_entitylist` | _n/a_ |


## Source

Generated from [mspp_entitylist.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_entitylist.md) on 2026-05-06.