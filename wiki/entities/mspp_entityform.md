---
logical: "mspp_entityform"
display: "Basic Form"
entitySetName: "mspp_entityforms"
primaryId: "mspp_entityformid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Basic Form

Defines the form to render for a given entity type.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_entityform` |
| Display name | Basic Form |
| Display (plural) | Basic Forms |
| Schema name | `mspp_entityform` |
| Entity set (Web API) | `mspp_entityforms` |
| Primary id attribute | `mspp_entityformid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_entityforms?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_entityforms(<guid>)
POST /api/data/v9.2/mspp_entityforms
PATCH /api/data/v9.2/mspp_entityforms(<guid>)
DELETE /api/data/v9.2/mspp_entityforms(<guid>)
```

## Attributes

Writable: **102** · Read-only: **0**

### Writable

`mspp_appendquerystring`, `mspp_associatecurrentportaluser`, `mspp_attachfile`, `mspp_attachfileaccept`, `mspp_attachfileacceptextensions`, `mspp_attachfileallowmultiple`, `mspp_attachfilelabel`, `mspp_attachfilemaxsize`, `mspp_attachfilerequired`, `mspp_attachfilerequirederrormessage`, `mspp_attachfilerestrictaccept`, `mspp_attachfilesaveoption`, `mspp_attachfilesizeerrormessage`, `mspp_attachfilestoragelocation`, `mspp_attachfiletypeerrormessage`, `mspp_autogeneratesteps`, `mspp_captcharequired`, `mspp_containername`, `mspp_createdby`, `mspp_createdon`, `mspp_entityformId`, `mspp_entityname`, `mspp_entitypermissionsenabled`, `mspp_entitysourcetype`, `mspp_forceallfieldsrequired`, `mspp_formname`, `mspp_geolocation_addresslinefieldname`, `mspp_geolocation_cityfieldname`, `mspp_geolocation_countryfieldname`, `mspp_geolocation_countyfieldname`, `mspp_geolocation_displaymap`, `mspp_geolocation_enabled`, `mspp_geolocation_formattedaddressfieldname`, `mspp_geolocation_latitudefieldname`, `mspp_geolocation_longitudefieldname`, `mspp_geolocation_maptype`, `mspp_geolocation_neighborhoodfieldname`, `mspp_geolocation_postalcodefieldname`, `mspp_geolocation_statefieldname`, `mspp_hideformonsuccess`, `mspp_instructions`, `mspp_maximumnooffiles`, `mspp_mode`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_nextbuttoncssclass`, `mspp_nextbuttontext`, `mspp_onsuccess`, `mspp_populatereferenceentitylookupfield`, `mspp_portaluserlookupattributeisactivityparty`, `mspp_previousbuttoncssclass`, `mspp_previousbuttontext`, `mspp_primarykeyname`, `mspp_provisionedlanguages`, `mspp_recommendedfieldsrequired`, `mspp_recordidquerystringparametername`, `mspp_recordnotfoundmessage`, `mspp_recordsourceallowcreateonnull`, `mspp_recordsourceentitylogicalname`, `mspp_recordsourcerelationshipname`, `mspp_redirecturl`, `mspp_redirecturlappendentityidquerystring`, `mspp_redirecturlcustomquerystring`, `mspp_redirecturlquerystringattribute`, `mspp_redirecturlquerystringattributeparamname`, `mspp_redirecturlquerystringname`, `mspp_redirectwebpage`, `mspp_referenceentitylogicalname`, `mspp_referenceentityprimarykeylogicalname`, `mspp_referenceentityreadonlyformname`, `mspp_referenceentityrelationshipname`, `mspp_referenceentityshowreadonlyform`, `mspp_referenceentitysourcetype`, `mspp_referencequeryattributelogicalname`, `mspp_referencequerystringisprimarykey`, `mspp_referencequerystringname`, `mspp_referencerecordsourcerelationshipname`, `mspp_referencetargetlookupattributelogicalname`, `mspp_registerstartupscript`, `mspp_renderwebresourcesinline`, `mspp_setentityreference`, `mspp_settings`, `mspp_showcaptchaforauthenticatedusers`, `mspp_showownerfields`, `mspp_showunsupportedfields`, `mspp_storageaccountname`, `mspp_submitbuttonbusytext`, `mspp_submitbuttoncssclass`, `mspp_submitbuttontext`, `mspp_successmessage`, `mspp_tabname`, `mspp_targetentityportaluserlookupattribute`, `mspp_tooltipenabled`, `mspp_validationgroup`, `mspp_validationsummarycssclass`, `mspp_validationsummaryheadertext`, `mspp_validationsummarylinksenabled`, `mspp_validationsummarylinktext`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_entityform_redirectwebpage` | [mspp_webpage](mspp_webpage.md) | `mspp_redirectwebpage` | `mspp_redirectwebpage` |
| `mspp_systemuser_mspp_entityform_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_entityform_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_entityform` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_entityform_entityformmetadata_entityformforcreate` | _n/a_ | `mspp_entityformforcreate` | _n/a_ |
| `mspp_entityform_webformmetadata_entityformforcreate` | _n/a_ | `mspp_entityformforcreateinwebformmetadata` | _n/a_ |
| `mspp_entityformmetadata_entityform` | _n/a_ | `mspp_entityform` | _n/a_ |
| `mspp_webpage_entityform` | _n/a_ | `mspp_entityform` | _n/a_ |


## Source

Generated from [mspp_entityform.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_entityform.md) on 2026-05-06.