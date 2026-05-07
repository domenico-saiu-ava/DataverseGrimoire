---
logical: "msdyn_oclocalizationdata"
display: "Localizzazione"
entitySetName: "msdyn_oclocalizationdatas"
primaryId: "msdyn_oclocalizationdataid"
primaryName: "msdyn_localizedtext"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Localizzazione

Entità utilizzata per la localizzazione dei dati nell'organizzazione CRM.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_oclocalizationdata` |
| Display name | Localizzazione |
| Display (plural) | Localizzazioni |
| Schema name | `msdyn_oclocalizationdata` |
| Entity set (Web API) | `msdyn_oclocalizationdatas` |
| Primary id attribute | `msdyn_oclocalizationdataid` |
| Primary name attribute | `msdyn_localizedtext` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_oclocalizationdatas?$select=msdyn_localizedtext&$top=10
GET /api/data/v9.2/msdyn_oclocalizationdatas(<guid>)
POST /api/data/v9.2/msdyn_oclocalizationdatas
PATCH /api/data/v9.2/msdyn_oclocalizationdatas(<guid>)
DELETE /api/data/v9.2/msdyn_oclocalizationdatas(<guid>)
```

## Attributes

Writable: **18** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_customerlanguageid`, `msdyn_defaultlocalizedtext`, `msdyn_entitycolumnname`, `msdyn_entityname`, `msdyn_entityrecordid`, `msdyn_isdefault`, `msdyn_languagecode`, `msdyn_loc_ocautomatedactionruleid`, `msdyn_localizedtext`, `msdyn_oclocalizationdataid`, `msdyn_presenceid`, `msdyn_systemmessageid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocautomatedactionrule_msdyn_ocautomatedactionrule_msdyn_oclocalizationdata` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `msdyn_loc_ocautomatedactionruleid` | `msdyn_loc_ocautomatedactionruleid` |
| `lk_msdyn_oclocalizationdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_oclocalizationdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_oclocalizationdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_oclocalizationdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_oclocalizationdata` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_presence_msdyn_oclocalizationdata_presenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_presenceid` | `msdyn_presenceid` |
| `msdyn_oclanguage_msdyn_oclocalizationdata` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_customerlanguageid` | `msdyn_customerlanguageid` |
| `msdyn_ocsystemmessage_msdyn_oclocalizationdata` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `msdyn_systemmessageid` | `msdyn_systemmessageid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_oclocalizationdata_SyncErrors` | [msdyn_oclocalizationdata](msdyn_oclocalizationdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_oclocalizationdata` |
| `msdyn_oclocalizationdata_DuplicateMatchingRecord` | [msdyn_oclocalizationdata](msdyn_oclocalizationdata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_oclocalizationdata` |
| `msdyn_oclocalizationdata_DuplicateBaseRecord` | [msdyn_oclocalizationdata](msdyn_oclocalizationdata.md) | `baserecordid` | `baserecordid_msdyn_oclocalizationdata` |
| `msdyn_oclocalizationdata_AsyncOperations` | [msdyn_oclocalizationdata](msdyn_oclocalizationdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_oclocalizationdata` |
| `msdyn_oclocalizationdata_MailboxTrackingFolders` | [msdyn_oclocalizationdata](msdyn_oclocalizationdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_oclocalizationdata` |
| `msdyn_oclocalizationdata_UserEntityInstanceDatas` | [msdyn_oclocalizationdata](msdyn_oclocalizationdata.md) | `objectid` | `objectid_msdyn_oclocalizationdata` |
| `msdyn_oclocalizationdata_ProcessSession` | [msdyn_oclocalizationdata](msdyn_oclocalizationdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_oclocalizationdata` |
| `msdyn_oclocalizationdata_BulkDeleteFailures` | [msdyn_oclocalizationdata](msdyn_oclocalizationdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_oclocalizationdata` |
| `msdyn_oclocalizationdata_PrincipalObjectAttributeAccesses` | [msdyn_oclocalizationdata](msdyn_oclocalizationdata.md) | `objectid` | `objectid_msdyn_oclocalizationdata` |


## Source

Generated from [msdyn_oclocalizationdata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_oclocalizationdata')) on 2026-05-07.