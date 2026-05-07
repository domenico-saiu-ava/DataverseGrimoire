---
logical: "mspp_webformmetadata"
display: "Metadati modulo con più passaggi"
entitySetName: "mspp_webformmetadatas"
primaryId: "mspp_webformmetadataid"
primaryName: "mspp_attributelogicalname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Metadati modulo con più passaggi

Definisce la logica di modifica del comportamento aggiuntiva per migliorare o sostituire la funzionalità dei campi del modulo, operazione impossibile da eseguire con i metadati del modulo e dell'entità Dynamics 365.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_webformmetadata` |
| Display name | Metadati modulo con più passaggi |
| Display (plural) | Metadati modulo con più passaggi |
| Schema name | `mspp_webformmetadata` |
| Entity set (Web API) | `mspp_webformmetadatas` |
| Primary id attribute | `mspp_webformmetadataid` |
| Primary name attribute | `mspp_attributelogicalname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_webformmetadatas?$select=mspp_attributelogicalname&$top=10
GET /api/data/v9.2/mspp_webformmetadatas(<guid>)
POST /api/data/v9.2/mspp_webformmetadatas
PATCH /api/data/v9.2/mspp_webformmetadatas(<guid>)
DELETE /api/data/v9.2/mspp_webformmetadatas(<guid>)
```

## Attributes

Writable: **67** · Read-only: **0**

### Writable

`mspp_adddescription`, `mspp_attributelogicalname`, `mspp_constantsummaximumtotal`, `mspp_constantsumminimumtotal`, `mspp_constantsumvalidationerrormessage`, `mspp_controlstyle`, `mspp_createdby`, `mspp_createdon`, `mspp_cssclass`, `mspp_description`, `mspp_descriptionposition`, `mspp_entityformforcreate`, `mspp_entityformforcreateinwebformmetadata`, `mspp_fieldisrequired`, `mspp_geolocationvalidatorerrormessage`, `mspp_groupname`, `mspp_ignoredefaultvalue`, `mspp_label`, `mspp_maxmultiplechoiceselectedcount`, `mspp_minmultiplechoiceselectedcount`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_multiplechoicevalidationerrormessage`, `mspp_notes_settings`, `mspp_onsavefromattribute`, `mspp_onsavetype`, `mspp_onsavevalue`, `mspp_prepopulatefromattribute`, `mspp_prepopulatetype`, `mspp_prepopulatevalue`, `mspp_provisionedlanguages`, `mspp_purchasecreateinvoiceonpayment`, `mspp_purchasefulfillorderonpayment`, `mspp_purchaselineitemdescriptionattribute`, `mspp_purchaselineiteminstructionsattribute`, `mspp_purchaselineitemorderattribute`, `mspp_purchaselineitemproductattribute`, `mspp_purchaselineitemquantityattribute`, `mspp_purchaselineitemrelationship`, `mspp_purchaselineitemrequiredattribute`, `mspp_purchaselineitemuomattribute`, `mspp_purchaseoptionalproductsrelationship`, `mspp_purchasequotename`, `mspp_purchaserequiredproductsrelationship`, `mspp_purchaserequiresshipping`, `mspp_purchasetargetentityinvoicerelationship`, `mspp_purchasetargetentityorderrelationship`, `mspp_purchasetargetentityrelationship`, `mspp_randomizeoptionsetvalues`, `mspp_rangevalidationerrormessage`, `mspp_rankordernotiesvalidationerrormessage`, `mspp_requiredfieldvalidationerrormessage`, `mspp_sectionname`, `mspp_setvalueonsave`, `mspp_subgrid_name`, `mspp_subgrid_settings`, `mspp_tabname`, `mspp_timeline_settings`, `mspp_type`, `mspp_useattributedescriptionproperty`, `mspp_validationerrormessage`, `mspp_validationregularexpression`, `mspp_validationregularexpressionerrormessage`, `mspp_webformmetadataid`, `mspp_webformstep`, `statecode`, `statuscode`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_entityform_webformmetadata_entityformforcreate` | [mspp_entityform](mspp_entityform.md) | `mspp_entityformforcreateinwebformmetadata` | `mspp_entityformforcreateinwebformmetadata` |
| `mspp_systemuser_mspp_webformmetadata_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_webformmetadata_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_webform_webformmetadata_entityformforcreate` | [mspp_webform](mspp_webform.md) | `mspp_entityformforcreate` | `mspp_entityformforcreate` |
| `mspp_webformmetadata_webformstep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_webformstep` | `mspp_webformstep` |



## Source

Generated from [mspp_webformmetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_webformmetadata')) on 2026-05-07.