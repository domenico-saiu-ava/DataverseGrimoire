---
logical: "mspp_webformstep"
display: "Passaggio modulo"
entitySetName: "mspp_webformsteps"
primaryId: "mspp_webformstepid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Passaggio modulo

Definisce la logica del flusso dell'esperienza utente del modulo, ad esempio passaggi e diramazione condizionale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_webformstep` |
| Display name | Passaggio modulo |
| Display (plural) | Passaggi modulo |
| Schema name | `mspp_webformstep` |
| Entity set (Web API) | `mspp_webformsteps` |
| Primary id attribute | `mspp_webformstepid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_webformsteps?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_webformsteps(<guid>)
POST /api/data/v9.2/mspp_webformsteps
PATCH /api/data/v9.2/mspp_webformsteps(<guid>)
DELETE /api/data/v9.2/mspp_webformsteps(<guid>)
```

## Attributes

Writable: **128** · Read-only: **0**

### Writable

`mspp_accept`, `mspp_allowmultiplefiles`, `mspp_appendquerystring`, `mspp_associatecurrentportaluser`, `mspp_attachfile`, `mspp_attachfilelabel`, `mspp_attachfilemaxsize`, `mspp_attachfilerequired`, `mspp_attachfilerequirederrormessage`, `mspp_attachfilerestrictaccept`, `mspp_attachfilesizeerrormessage`, `mspp_attachfilestoragelocation`, `mspp_attachfiletypeerrormessage`, `mspp_autogeneratesteps`, `mspp_autonumberattributelogicalname`, `mspp_autonumberdefinitionname`, `mspp_captcharequired`, `mspp_condition`, `mspp_conditiondefaultnextstep`, `mspp_containername`, `mspp_createautonumber`, `mspp_createdby`, `mspp_createdon`, `mspp_editexistingrecordpermitted`, `mspp_editexpiredmessage`, `mspp_editexpiredstatecode`, `mspp_editexpiredstatusreason`, `mspp_editnotpermittedmessage`, `mspp_entitypermissionsenabled`, `mspp_entitysourcestep`, `mspp_entitysourcetype`, `mspp_forceallfieldsrequired`, `mspp_formname`, `mspp_geolocation_addresslinefieldname`, `mspp_geolocation_cityfieldname`, `mspp_geolocation_countryfieldname`, `mspp_geolocation_countyfieldname`, `mspp_geolocation_displaymap`, `mspp_geolocation_enabled`, `mspp_geolocation_formattedaddressfieldname`, `mspp_geolocation_latitudefieldname`, `mspp_geolocation_longitudefieldname`, `mspp_geolocation_maptype`, `mspp_geolocation_neighborhoodfieldname`, `mspp_geolocation_postalcodefieldname`, `mspp_geolocation_statefieldname`, `mspp_hideformonsuccess`, `mspp_instructions`, `mspp_loadeventkeyname`, `mspp_loguser`, `mspp_maximumnooffiles`, `mspp_mode`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_movepreviouseventkeyname`, `mspp_movepreviouspermitted`, `mspp_multiplerecordsperuserpermitted`, `mspp_name`, `mspp_nextbuttoncssclass`, `mspp_nextbuttontext`, `mspp_nextstep`, `mspp_populatereferenceentitylookupfield`, `mspp_portaluserlookupattributeisactivityparty`, `mspp_postbackurl`, `mspp_previousbuttoncssclass`, `mspp_previousbuttontext`, `mspp_previousstep`, `mspp_primarykeyattributelogicalname`, `mspp_primarykeyquerystringparametername`, `mspp_provisionedlanguages`, `mspp_recommendedfieldsrequired`, `mspp_recordnotfoundmessage`, `mspp_recordsourcerelationshipname`, `mspp_redirecturl`, `mspp_redirecturlappendentityidquerystring`, `mspp_redirecturlcustomquerystring`, `mspp_redirecturlquerystringattribute`, `mspp_redirecturlquerystringattributeparamname`, `mspp_redirecturlquerystringname`, `mspp_redirectwebpage`, `mspp_referenceentitylogicalname`, `mspp_referenceentityprimarykeylogicalname`, `mspp_referenceentityreadonlyformname`, `mspp_referenceentityrelationshipname`, `mspp_referenceentityshowreadonlyform`, `mspp_referenceentitysourcetype`, `mspp_referenceentitystep`, `mspp_referencequeryattributelogicalname`, `mspp_referencequerystringisprimarykey`, `mspp_referencequerystringname`, `mspp_referencerecordsourcerelationshipname`, `mspp_referencesourceentitylogicalname`, `mspp_referencetargetlookupattributelogicalname`, `mspp_registerstartupscript`, `mspp_renderwebresourcesinline`, `mspp_savedeventkeyname`, `mspp_savingeventkeyname`, `mspp_setentityreference`, `mspp_settings`, `mspp_showcaptchaforauthenticatedusers`, `mspp_showownerfields`, `mspp_showunsupportedfields`, `mspp_storageaccountname`, `mspp_submitbuttonbusytext`, `mspp_submitbuttoncssclass`, `mspp_submitbuttontext`, `mspp_submiteventkeyname`, `mspp_successmessage`, `mspp_tabname`, `mspp_targetentitylogicalname`, `mspp_targetentityportaluserlookupattribute`, `mspp_targetentityprimarykeylogicalname`, `mspp_title`, `mspp_tooltipenabled`, `mspp_type`, `mspp_usercontrolpath`, `mspp_usercontroltitle`, `mspp_userhostaddressattributelogicalname`, `mspp_useridentitynameattributelogicalname`, `mspp_validationgroup`, `mspp_validationsummarycssclass`, `mspp_validationsummaryheadertext`, `mspp_validationsummarylinksenabled`, `mspp_validationsummarylinktext`, `mspp_webform`, `mspp_webformstepid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_webformstep_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_webformstep_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_webformstep_conditiondefaultnextstep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_conditiondefaultnextstep` | `mspp_conditiondefaultnextstep` |
| `mspp_webformstep_entitysourcestep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_entitysourcestep` | `mspp_entitysourcestep` |
| `mspp_webformstep_nextstep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_nextstep` | `mspp_nextstep` |
| `mspp_webformstep_previousstep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_previousstep` | `mspp_previousstep` |
| `mspp_webformstep_redirectwebpage` | [mspp_webpage](mspp_webpage.md) | `mspp_redirectwebpage` | `mspp_redirectwebpage` |
| `mspp_webformstep_referenceentitystep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_referenceentitystep` | `mspp_referenceentitystep` |
| `mspp_webformstep_webform` | [mspp_webform](mspp_webform.md) | `mspp_webform` | `mspp_webform` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_webform_startstep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_startstep` | `mspp_startstep` |
| `mspp_webformmetadata_webformstep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_webformstep` | `mspp_webformstep` |
| `mspp_webformstep_conditiondefaultnextstep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_conditiondefaultnextstep` | `mspp_conditiondefaultnextstep` |
| `mspp_webformstep_entitysourcestep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_entitysourcestep` | `mspp_entitysourcestep` |
| `mspp_webformstep_nextstep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_nextstep` | `mspp_nextstep` |
| `mspp_webformstep_previousstep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_previousstep` | `mspp_previousstep` |
| `mspp_webformstep_referenceentitystep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_referenceentitystep` | `mspp_referenceentitystep` |


## Source

Generated from [mspp_webformstep (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_webformstep')) on 2026-05-07.