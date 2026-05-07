---
logical: "mspp_entityformmetadata"
display: "Basic Form Metadata"
entitySetName: "mspp_entityformmetadatas"
primaryId: "mspp_entityformmetadataid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Basic Form Metadata

Defines the additional behavior modification logic to augment or override the functionality of form components that is not possible with Dynamics 365 entity and form metadata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_entityformmetadata` |
| Display name | Basic Form Metadata |
| Display (plural) | Basic Form Metadata |
| Schema name | `mspp_entityformmetadata` |
| Entity set (Web API) | `mspp_entityformmetadatas` |
| Primary id attribute | `mspp_entityformmetadataid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_entityformmetadatas?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_entityformmetadatas(<guid>)
POST /api/data/v9.2/mspp_entityformmetadatas
PATCH /api/data/v9.2/mspp_entityformmetadatas(<guid>)
DELETE /api/data/v9.2/mspp_entityformmetadatas(<guid>)
```

## Attributes

Writable: **50** · Read-only: **0**

### Writable

`mspp_adddescription`, `mspp_attributelogicalname`, `mspp_constantsummaximumtotal`, `mspp_constantsumminimumtotal`, `mspp_constantsumvalidationerrormessage`, `mspp_controlstyle`, `mspp_createdby`, `mspp_createdon`, `mspp_cssclass`, `mspp_description`, `mspp_descriptionposition`, `mspp_entityform`, `mspp_entityformforcreate`, `mspp_entityformmetadataId`, `mspp_fieldisrequired`, `mspp_geolocationvalidatorerrormessage`, `mspp_groupname`, `mspp_ignoredefaultvalue`, `mspp_label`, `mspp_maxmultiplechoiceselectedcount`, `mspp_minmultiplechoiceselectedcount`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_multiplechoicevalidationerrormessage`, `mspp_name`, `mspp_notes_settings`, `mspp_onsavefromattribute`, `mspp_onsavetype`, `mspp_onsavevalue`, `mspp_prepopulatefromattribute`, `mspp_prepopulatetype`, `mspp_prepopulatevalue`, `mspp_provisionedlanguages`, `mspp_randomizeoptionsetvalues`, `mspp_rangevalidationerrormessage`, `mspp_rankordernotiesvalidationerrormessage`, `mspp_requiredfieldvalidationerrormessage`, `mspp_sectionname`, `mspp_setvalueonsave`, `mspp_subgrid_name`, `mspp_subgrid_settings`, `mspp_tabname`, `mspp_timeline_settings`, `mspp_type`, `mspp_useattributedescriptionproperty`, `mspp_validationerrormessage`, `mspp_validationregularexpression`, `mspp_validationregularexpressionerrormessage`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_entityform_entityformmetadata_entityformforcreate` | [mspp_entityform](mspp_entityform.md) | `mspp_entityformforcreate` | `mspp_entityformforcreate` |
| `mspp_entityformmetadata_entityform` | [mspp_entityform](mspp_entityform.md) | `mspp_entityform` | `mspp_entityform` |
| `mspp_systemuser_mspp_entityformmetadata_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_entityformmetadata_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |



## Source

Generated from [mspp_entityformmetadata.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_entityformmetadata.md) on 2026-05-06.