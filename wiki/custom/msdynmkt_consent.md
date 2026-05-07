---
logical: "msdynmkt_consent"
display: "Consenso"
entitySetName: "msdynmkt_consents"
primaryId: "msdynmkt_consentid"
primaryName: "msdynmkt_profileid"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Consenso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consent` |
| Display name | Consenso |
| Display (plural) | Consensi |
| Schema name | `msdynmkt_consent` |
| Entity set (Web API) | `msdynmkt_consents` |
| Primary id attribute | `msdynmkt_consentid` |
| Primary name attribute | `msdynmkt_profileid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consents?$select=msdynmkt_profileid&$top=10
GET /api/data/v9.2/msdynmkt_consents(<guid>)
POST /api/data/v9.2/msdynmkt_consents
PATCH /api/data/v9.2/msdynmkt_consents(<guid>)
DELETE /api/data/v9.2/msdynmkt_consents(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`importsequencenumber`, `msdynmkt_allowemail`, `msdynmkt_allowsms`, `msdynmkt_allowtracking`, `msdynmkt_changesource`, `msdynmkt_consentid`, `msdynmkt_profileid`, `msdynmkt_reason`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_consent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_consent` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consent_SyncErrors` | [msdynmkt_consent](msdynmkt_consent.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consent` |
| `msdynmkt_consent_DuplicateMatchingRecord` | [msdynmkt_consent](msdynmkt_consent.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_consent` |
| `msdynmkt_consent_DuplicateBaseRecord` | [msdynmkt_consent](msdynmkt_consent.md) | `baserecordid` | `baserecordid_msdynmkt_consent` |
| `msdynmkt_consent_AsyncOperations` | [msdynmkt_consent](msdynmkt_consent.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consent` |
| `msdynmkt_consent_MailboxTrackingFolders` | [msdynmkt_consent](msdynmkt_consent.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consent` |
| `msdynmkt_consent_UserEntityInstanceDatas` | [msdynmkt_consent](msdynmkt_consent.md) | `objectid` | `objectid_msdynmkt_consent` |
| `msdynmkt_consent_ProcessSession` | [msdynmkt_consent](msdynmkt_consent.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consent` |
| `msdynmkt_consent_BulkDeleteFailures` | [msdynmkt_consent](msdynmkt_consent.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consent` |
| `msdynmkt_consent_PrincipalObjectAttributeAccesses` | [msdynmkt_consent](msdynmkt_consent.md) | `objectid` | `objectid_msdynmkt_consent` |


## Source

Generated from [msdynmkt_consent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_consent')) on 2026-05-07.