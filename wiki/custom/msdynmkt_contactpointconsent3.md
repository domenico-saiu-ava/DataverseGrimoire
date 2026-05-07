---
logical: "msdynmkt_contactpointconsent3"
display: "(Deprecato) Consenso punto di contatto"
entitySetName: "msdynmkt_contactpointconsent3s"
primaryId: "msdynmkt_contactpointconsent3id"
primaryName: "msdynmkt_contactpointvalue"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# (Deprecato) Consenso punto di contatto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_contactpointconsent3` |
| Display name | (Deprecato) Consenso punto di contatto |
| Display (plural) | (Deprecato) Consensi punto di contatto |
| Schema name | `msdynmkt_contactpointconsent3` |
| Entity set (Web API) | `msdynmkt_contactpointconsent3s` |
| Primary id attribute | `msdynmkt_contactpointconsent3id` |
| Primary name attribute | `msdynmkt_contactpointvalue` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_contactpointconsent3s?$select=msdynmkt_contactpointvalue&$top=10
GET /api/data/v9.2/msdynmkt_contactpointconsent3s(<guid>)
POST /api/data/v9.2/msdynmkt_contactpointconsent3s
PATCH /api/data/v9.2/msdynmkt_contactpointconsent3s(<guid>)
DELETE /api/data/v9.2/msdynmkt_contactpointconsent3s(<guid>)
```

## Attributes

Writable: **19** · Read-only: **11**

### Writable

`importsequencenumber`, `msdynmkt_consenttypevalue`, `msdynmkt_contactpointconsent3id`, `msdynmkt_contactpointtype`, `msdynmkt_contactpointvalue`, `msdynmkt_logicalreason`, `msdynmkt_migrationtimestamp`, `msdynmkt_modifiedonbehalf`, `msdynmkt_reason`, `msdynmkt_source`, `msdynmkt_uionly_value_marketingmessage`, `msdynmkt_uionly_value_tracking`, `msdynmkt_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_contactpointconsent3_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_contactpointconsent3_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_contactpointconsent3_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_contactpointconsent3_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_contactpointconsent3` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_contactpointconsent3` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_contactpointconsent3` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_contactpointconsent3` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_contactpointconsent3_SyncErrors` | [msdynmkt_contactpointconsent3](msdynmkt_contactpointconsent3.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent3` |
| `msdynmkt_contactpointconsent3_DuplicateMatchingRecord` | [msdynmkt_contactpointconsent3](msdynmkt_contactpointconsent3.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_contactpointconsent3` |
| `msdynmkt_contactpointconsent3_DuplicateBaseRecord` | [msdynmkt_contactpointconsent3](msdynmkt_contactpointconsent3.md) | `baserecordid` | `baserecordid_msdynmkt_contactpointconsent3` |
| `msdynmkt_contactpointconsent3_AsyncOperations` | [msdynmkt_contactpointconsent3](msdynmkt_contactpointconsent3.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent3` |
| `msdynmkt_contactpointconsent3_MailboxTrackingFolders` | [msdynmkt_contactpointconsent3](msdynmkt_contactpointconsent3.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent3` |
| `msdynmkt_contactpointconsent3_UserEntityInstanceDatas` | [msdynmkt_contactpointconsent3](msdynmkt_contactpointconsent3.md) | `objectid` | `objectid_msdynmkt_contactpointconsent3` |
| `msdynmkt_contactpointconsent3_ProcessSession` | [msdynmkt_contactpointconsent3](msdynmkt_contactpointconsent3.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent3` |
| `msdynmkt_contactpointconsent3_BulkDeleteFailures` | [msdynmkt_contactpointconsent3](msdynmkt_contactpointconsent3.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent3` |
| `msdynmkt_contactpointconsent3_PrincipalObjectAttributeAccesses` | [msdynmkt_contactpointconsent3](msdynmkt_contactpointconsent3.md) | `objectid` | `objectid_msdynmkt_contactpointconsent3` |


## Source

Generated from [msdynmkt_contactpointconsent3 (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_contactpointconsent3')) on 2026-05-07.