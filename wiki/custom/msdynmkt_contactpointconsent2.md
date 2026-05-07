---
logical: "msdynmkt_contactpointconsent2"
display: "(Deprecato) Consenso punto di contatto"
entitySetName: "msdynmkt_contactpointconsent2s"
primaryId: "msdynmkt_contactpointconsent2id"
primaryName: "msdynmkt_contactpointvalue"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# (Deprecato) Consenso punto di contatto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_contactpointconsent2` |
| Display name | (Deprecato) Consenso punto di contatto |
| Display (plural) | (Deprecato) Consensi punto di contatto |
| Schema name | `msdynmkt_contactpointconsent2` |
| Entity set (Web API) | `msdynmkt_contactpointconsent2s` |
| Primary id attribute | `msdynmkt_contactpointconsent2id` |
| Primary name attribute | `msdynmkt_contactpointvalue` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_contactpointconsent2s?$select=msdynmkt_contactpointvalue&$top=10
GET /api/data/v9.2/msdynmkt_contactpointconsent2s(<guid>)
POST /api/data/v9.2/msdynmkt_contactpointconsent2s
PATCH /api/data/v9.2/msdynmkt_contactpointconsent2s(<guid>)
DELETE /api/data/v9.2/msdynmkt_contactpointconsent2s(<guid>)
```

## Attributes

Writable: **18** · Read-only: **8**

### Writable

`importsequencenumber`, `msdynmkt_consenttypevalue`, `msdynmkt_contactpointconsent2id`, `msdynmkt_contactpointtype`, `msdynmkt_contactpointvalue`, `msdynmkt_logicalreason`, `msdynmkt_migrationtimestamp`, `msdynmkt_modifiedonbehalf`, `msdynmkt_reason`, `msdynmkt_source`, `msdynmkt_uionly_value_marketingmessage`, `msdynmkt_uionly_value_tracking`, `msdynmkt_value`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_contactpointconsent2_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_contactpointconsent2_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_contactpointconsent2_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_contactpointconsent2_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_contactpointconsent2` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_contactpointconsent2_SyncErrors` | [msdynmkt_contactpointconsent2](msdynmkt_contactpointconsent2.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent2` |
| `msdynmkt_contactpointconsent2_DuplicateMatchingRecord` | [msdynmkt_contactpointconsent2](msdynmkt_contactpointconsent2.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_contactpointconsent2` |
| `msdynmkt_contactpointconsent2_DuplicateBaseRecord` | [msdynmkt_contactpointconsent2](msdynmkt_contactpointconsent2.md) | `baserecordid` | `baserecordid_msdynmkt_contactpointconsent2` |
| `msdynmkt_contactpointconsent2_AsyncOperations` | [msdynmkt_contactpointconsent2](msdynmkt_contactpointconsent2.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent2` |
| `msdynmkt_contactpointconsent2_MailboxTrackingFolders` | [msdynmkt_contactpointconsent2](msdynmkt_contactpointconsent2.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent2` |
| `msdynmkt_contactpointconsent2_UserEntityInstanceDatas` | [msdynmkt_contactpointconsent2](msdynmkt_contactpointconsent2.md) | `objectid` | `objectid_msdynmkt_contactpointconsent2` |
| `msdynmkt_contactpointconsent2_ProcessSession` | [msdynmkt_contactpointconsent2](msdynmkt_contactpointconsent2.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent2` |
| `msdynmkt_contactpointconsent2_BulkDeleteFailures` | [msdynmkt_contactpointconsent2](msdynmkt_contactpointconsent2.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent2` |
| `msdynmkt_contactpointconsent2_PrincipalObjectAttributeAccesses` | [msdynmkt_contactpointconsent2](msdynmkt_contactpointconsent2.md) | `objectid` | `objectid_msdynmkt_contactpointconsent2` |


## Source

Generated from [msdynmkt_contactpointconsent2 (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_contactpointconsent2')) on 2026-05-07.