---
logical: "msdyn_oclocalizationdata"
display: "Localization"
entitySetName: "msdyn_oclocalizationdatas"
primaryId: "msdyn_oclocalizationdataid"
primaryName: "msdyn_localizedtext"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Localization

Entity used for data localization on CRM org.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_oclocalizationdata` |
| Display name | Localization |
| Display (plural) | Localizations |
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

Writable: **17** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_customerlanguageid`, `msdyn_DefaultLocalizedText`, `msdyn_EntityColumnName`, `msdyn_EntityName`, `msdyn_EntityRecordId`, `msdyn_Isdefault`, `msdyn_LanguageCode`, `msdyn_loc_ocautomatedactionruleid`, `msdyn_localizedtext`, `msdyn_oclocalizationdataId`, `msdyn_systemmessageid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_oclocalizationdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_oclocalizationdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_oclocalizationdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_oclocalizationdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocautomatedactionrule_msdyn_ocautomatedactionrule_msdyn_oclocalizationdata` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `msdyn_loc_ocautomatedactionruleid` | `msdyn_loc_ocautomatedactionruleid` |
| `msdyn_oclanguage_msdyn_oclocalizationdata` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_customerlanguageid` | `msdyn_customerlanguageid` |
| `msdyn_ocsystemmessage_msdyn_oclocalizationdata` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `msdyn_systemmessageid` | `msdyn_systemmessageid` |
| `organization_msdyn_oclocalizationdata` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_oclocalizationdata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oclocalizationdata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oclocalizationdata_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_oclocalizationdata_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_oclocalizationdata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oclocalizationdata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_oclocalizationdata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oclocalizationdata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_oclocalizationdata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_oclocalizationdata.md) on 2026-05-06.