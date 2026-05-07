---
logical: "msdynmkt_purpose"
display: "Scopo"
entitySetName: "msdynmkt_purposes"
primaryId: "msdynmkt_purposeid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Scopo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_purpose` |
| Display name | Scopo |
| Display (plural) | Scopi |
| Schema name | `msdynmkt_purpose` |
| Entity set (Web API) | `msdynmkt_purposes` |
| Primary id attribute | `msdynmkt_purposeid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_purposes?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_purposes(<guid>)
POST /api/data/v9.2/msdynmkt_purposes
PATCH /api/data/v9.2/msdynmkt_purposes(<guid>)
DELETE /api/data/v9.2/msdynmkt_purposes(<guid>)
```

## Attributes

Writable: **20** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdynmkt_customenforcementmodel`, `msdynmkt_description`, `msdynmkt_enforcementmodel`, `msdynmkt_extendedentityid`, `msdynmkt_name`, `msdynmkt_purposeid`, `msdynmkt_smsenforcementmodel`, `msdynmkt_topiccount`, `msdynmkt_type`, `msdynmkt_uionlycomplianceprofilelookup`, `msdynmkt_uionlypurposelookup`, `msdynmkt_voiceenforcementmodel`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_purpose_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_purpose_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_purpose_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_purpose_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_purpose` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_purpose` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_purpose` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_purpose` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdynmkt_msdynmkt_uionly_compliancesettings4_lookup` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `msdynmkt_uionlycomplianceprofilelookup` | `msdynmkt_uionlycomplianceprofilelookup` |
| `msdynmkt_msdynmkt_uionly_purpose_lookup` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_uionlypurposelookup` | `msdynmkt_uionlypurposelookup` |
| `msdynmkt_purpose_msdynmkt_consentproviderdefaultpurpose` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `msdynmkt_extendedentityid` | `msdynmkt_extendedentityId_msdynmkt_consentproviderdefaultpurpose` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_purpose_SyncErrors` | [msdynmkt_purpose](msdynmkt_purpose.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_purpose` |
| `msdynmkt_purpose_DuplicateMatchingRecord` | [msdynmkt_purpose](msdynmkt_purpose.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_purpose` |
| `msdynmkt_purpose_DuplicateBaseRecord` | [msdynmkt_purpose](msdynmkt_purpose.md) | `baserecordid` | `baserecordid_msdynmkt_purpose` |
| `msdynmkt_purpose_AsyncOperations` | [msdynmkt_purpose](msdynmkt_purpose.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_purpose` |
| `msdynmkt_purpose_MailboxTrackingFolders` | [msdynmkt_purpose](msdynmkt_purpose.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_purpose` |
| `msdynmkt_purpose_UserEntityInstanceDatas` | [msdynmkt_purpose](msdynmkt_purpose.md) | `objectid` | `objectid_msdynmkt_purpose` |
| `msdynmkt_purpose_ProcessSession` | [msdynmkt_purpose](msdynmkt_purpose.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_purpose` |
| `msdynmkt_purpose_BulkDeleteFailures` | [msdynmkt_purpose](msdynmkt_purpose.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_purpose` |
| `msdynmkt_purpose_PrincipalObjectAttributeAccesses` | [msdynmkt_purpose](msdynmkt_purpose.md) | `objectid` | `objectid_msdynmkt_purpose` |
| `msdynmkt_msdynmkt_compliancesettings4_TrackingCons` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_trackingconsentpurpose` | `msdynmkt_TrackingConsentPurpose` |
| `msdynmkt_msdynmkt_contactpointconsent4_purposeId_m` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_purposeid` | `msdynmkt_purposeId` |
| `msdynmkt_msdynmkt_purpose_msdynmkt_topic` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_purposeid` | `msdynmkt_purposeId` |
| `msdynmkt_msdynmkt_uionly_purpose_lookup` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_uionlypurposelookup` | `msdynmkt_uionlypurposelookup` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | _n/a_ | `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4` |

## Source

Generated from [msdynmkt_purpose (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_purpose')) on 2026-05-07.