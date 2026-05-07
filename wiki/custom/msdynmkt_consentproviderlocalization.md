---
logical: "msdynmkt_consentproviderlocalization"
display: "Consent provider Localization"
entitySetName: "msdynmkt_consentproviderlocalizations"
primaryId: "msdynmkt_consentproviderlocalizationid"
primaryName: "msdynmkt_localizationkey"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Consent provider Localization

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentproviderlocalization` |
| Display name | Consent provider Localization |
| Display (plural) | Consent provider Localizations |
| Schema name | `msdynmkt_ConsentproviderLocalization` |
| Entity set (Web API) | `msdynmkt_consentproviderlocalizations` |
| Primary id attribute | `msdynmkt_consentproviderlocalizationid` |
| Primary name attribute | `msdynmkt_localizationkey` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consentproviderlocalizations?$select=msdynmkt_localizationkey&$top=10
GET /api/data/v9.2/msdynmkt_consentproviderlocalizations(<guid>)
POST /api/data/v9.2/msdynmkt_consentproviderlocalizations
PATCH /api/data/v9.2/msdynmkt_consentproviderlocalizations(<guid>)
DELETE /api/data/v9.2/msdynmkt_consentproviderlocalizations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdynmkt_consentproviderlocalizationid`, `msdynmkt_lcid`, `msdynmkt_localizationkey`, `msdynmkt_localizationvalue`, `msdynmkt_msdynmkt_consentprovider`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_consentproviderlocalization_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentproviderlocalization_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentproviderlocalization_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentproviderlocalization_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_consentproviderlocalization` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdynmkt_ConsentproviderLocalization_msdynmk` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `msdynmkt_msdynmkt_consentprovider` | `msdynmkt_msdynmkt_consentprovider` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentproviderlocalization_SyncErrors` | [msdynmkt_consentproviderlocalization](msdynmkt_consentproviderlocalization.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderlocalization` |
| `msdynmkt_consentproviderlocalization_AsyncOperations` | [msdynmkt_consentproviderlocalization](msdynmkt_consentproviderlocalization.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderlocalization` |
| `msdynmkt_consentproviderlocalization_MailboxTrackingFolders` | [msdynmkt_consentproviderlocalization](msdynmkt_consentproviderlocalization.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderlocalization` |
| `msdynmkt_consentproviderlocalization_UserEntityInstanceDatas` | [msdynmkt_consentproviderlocalization](msdynmkt_consentproviderlocalization.md) | `objectid` | `objectid_msdynmkt_consentproviderlocalization` |
| `msdynmkt_consentproviderlocalization_ProcessSession` | [msdynmkt_consentproviderlocalization](msdynmkt_consentproviderlocalization.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderlocalization` |
| `msdynmkt_consentproviderlocalization_BulkDeleteFailures` | [msdynmkt_consentproviderlocalization](msdynmkt_consentproviderlocalization.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderlocalization` |
| `msdynmkt_consentproviderlocalization_PrincipalObjectAttributeAccesses` | [msdynmkt_consentproviderlocalization](msdynmkt_consentproviderlocalization.md) | `objectid` | `objectid_msdynmkt_consentproviderlocalization` |


## Source

Generated from [msdynmkt_consentproviderlocalization (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_consentproviderlocalization')) on 2026-05-07.