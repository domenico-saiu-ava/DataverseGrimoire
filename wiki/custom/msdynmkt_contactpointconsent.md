---
logical: "msdynmkt_contactpointconsent"
display: "(Deprecata) Consenso punto di contatto"
entitySetName: "msdynmkt_contactpointconsents"
primaryId: "msdynmkt_contactpointconsentid"
primaryName: "msdynmkt_contactpoint"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# (Deprecata) Consenso punto di contatto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_contactpointconsent` |
| Display name | (Deprecata) Consenso punto di contatto |
| Display (plural) | (Deprecato) Consensi punto di contatto |
| Schema name | `msdynmkt_contactpointconsent` |
| Entity set (Web API) | `msdynmkt_contactpointconsents` |
| Primary id attribute | `msdynmkt_contactpointconsentid` |
| Primary name attribute | `msdynmkt_contactpoint` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_contactpointconsents?$select=msdynmkt_contactpoint&$top=10
GET /api/data/v9.2/msdynmkt_contactpointconsents(<guid>)
POST /api/data/v9.2/msdynmkt_contactpointconsents
PATCH /api/data/v9.2/msdynmkt_contactpointconsents(<guid>)
DELETE /api/data/v9.2/msdynmkt_contactpointconsents(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_consentstatus`, `msdynmkt_consenttype`, `msdynmkt_contactpoint`, `msdynmkt_contactpointconsentid`, `msdynmkt_reason`, `msdynmkt_source`, `msdynmkt_trackingstatus`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_contactpointconsent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_contactpointconsent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_contactpointconsent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_contactpointconsent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_contactpointconsent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_contactpointconsent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_contactpointconsent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_contactpointconsent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_contactpointconsent_SyncErrors` | [msdynmkt_contactpointconsent](msdynmkt_contactpointconsent.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent` |
| `msdynmkt_contactpointconsent_DuplicateMatchingRecord` | [msdynmkt_contactpointconsent](msdynmkt_contactpointconsent.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_contactpointconsent` |
| `msdynmkt_contactpointconsent_DuplicateBaseRecord` | [msdynmkt_contactpointconsent](msdynmkt_contactpointconsent.md) | `baserecordid` | `baserecordid_msdynmkt_contactpointconsent` |
| `msdynmkt_contactpointconsent_AsyncOperations` | [msdynmkt_contactpointconsent](msdynmkt_contactpointconsent.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent` |
| `msdynmkt_contactpointconsent_MailboxTrackingFolders` | [msdynmkt_contactpointconsent](msdynmkt_contactpointconsent.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent` |
| `msdynmkt_contactpointconsent_UserEntityInstanceDatas` | [msdynmkt_contactpointconsent](msdynmkt_contactpointconsent.md) | `objectid` | `objectid_msdynmkt_contactpointconsent` |
| `msdynmkt_contactpointconsent_ProcessSession` | [msdynmkt_contactpointconsent](msdynmkt_contactpointconsent.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent` |
| `msdynmkt_contactpointconsent_BulkDeleteFailures` | [msdynmkt_contactpointconsent](msdynmkt_contactpointconsent.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_contactpointconsent` |
| `msdynmkt_contactpointconsent_PrincipalObjectAttributeAccesses` | [msdynmkt_contactpointconsent](msdynmkt_contactpointconsent.md) | `objectid` | `objectid_msdynmkt_contactpointconsent` |


## Source

Generated from [msdynmkt_contactpointconsent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_contactpointconsent')) on 2026-05-07.