---
logical: "msdynmkt_consentproviderdefaultpurpose"
display: "Scopo predefinito"
entitySetName: "msdynmkt_consentproviderdefaultpurposes"
primaryId: "msdynmkt_consentproviderdefaultpurposeid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Scopo predefinito

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentproviderdefaultpurpose` |
| Display name | Scopo predefinito |
| Display (plural) | Scopi predefiniti provider consenso |
| Schema name | `msdynmkt_consentproviderdefaultpurpose` |
| Entity set (Web API) | `msdynmkt_consentproviderdefaultpurposes` |
| Primary id attribute | `msdynmkt_consentproviderdefaultpurposeid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consentproviderdefaultpurposes?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_consentproviderdefaultpurposes(<guid>)
POST /api/data/v9.2/msdynmkt_consentproviderdefaultpurposes
PATCH /api/data/v9.2/msdynmkt_consentproviderdefaultpurposes(<guid>)
DELETE /api/data/v9.2/msdynmkt_consentproviderdefaultpurposes(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_consentproviderdefaultpurposeid`, `msdynmkt_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_consentproviderdefaultpurpose_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentproviderdefaultpurpose_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentproviderdefaultpurpose_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentproviderdefaultpurpose_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_consentproviderdefaultpurpose` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_consentproviderdefaultpurpose` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_consentproviderdefaultpurpose` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_consentproviderdefaultpurpose` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentproviderdefaultpurpose_SyncErrors` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderdefaultpurpose` |
| `msdynmkt_consentproviderdefaultpurpose_DuplicateMatchingRecord` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_consentproviderdefaultpurpose` |
| `msdynmkt_consentproviderdefaultpurpose_DuplicateBaseRecord` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `baserecordid` | `baserecordid_msdynmkt_consentproviderdefaultpurpose` |
| `msdynmkt_consentproviderdefaultpurpose_AsyncOperations` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderdefaultpurpose` |
| `msdynmkt_consentproviderdefaultpurpose_MailboxTrackingFolders` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderdefaultpurpose` |
| `msdynmkt_consentproviderdefaultpurpose_UserEntityInstanceDatas` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `objectid` | `objectid_msdynmkt_consentproviderdefaultpurpose` |
| `msdynmkt_consentproviderdefaultpurpose_ProcessSession` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderdefaultpurpose` |
| `msdynmkt_consentproviderdefaultpurpose_BulkDeleteFailures` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentproviderdefaultpurpose` |
| `msdynmkt_consentproviderdefaultpurpose_PrincipalObjectAttributeAccesses` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `objectid` | `objectid_msdynmkt_consentproviderdefaultpurpose` |
| `msdynmkt_purpose_msdynmkt_consentproviderdefaultpurpose` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `msdynmkt_extendedentityid` | `msdynmkt_extendedentityId_msdynmkt_consentproviderdefaultpurpose` |


## Source

Generated from [msdynmkt_consentproviderdefaultpurpose (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_consentproviderdefaultpurpose')) on 2026-05-07.