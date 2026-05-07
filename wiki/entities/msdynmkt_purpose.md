---
logical: "msdynmkt_purpose"
display: "Purpose"
entitySetName: "msdynmkt_purposes"
primaryId: "msdynmkt_purposeid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Purpose

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_purpose` |
| Display name | Purpose |
| Display (plural) | Purposes |
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

Writable: **22** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdynmkt_customenforcementmodel`, `msdynmkt_description`, `msdynmkt_enforcementmodel`, `msdynmkt_extendedentityId`, `msdynmkt_extendedentityIdType`, `msdynmkt_name`, `msdynmkt_purposeId`, `msdynmkt_smsenforcementmodel`, `msdynmkt_topiccount`, `msdynmkt_type`, `msdynmkt_uionlycomplianceprofilelookup`, `msdynmkt_uionlypurposelookup`, `msdynmkt_voiceenforcementmodel`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_purpose` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_purpose_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_purpose_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_purpose_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_purpose_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdynmkt_msdynmkt_uionly_compliancesettings4_lookup` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `msdynmkt_uionlycomplianceprofilelookup` | `msdynmkt_uionlycomplianceprofilelookup` |
| `msdynmkt_msdynmkt_uionly_purpose_lookup` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_uionlypurposelookup` | `msdynmkt_uionlypurposelookup` |
| `msdynmkt_purpose_msdynmkt_consentproviderdefaultpurpose` | [msdynmkt_consentproviderdefaultpurpose](msdynmkt_consentproviderdefaultpurpose.md) | `msdynmkt_extendedentityid` | `msdynmkt_extendedentityId_msdynmkt_consentproviderdefaultpurpose` |
| `owner_msdynmkt_purpose` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_purpose` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_purpose` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_msdynmkt_compliancesettings4_TrackingCons` | _n/a_ | `msdynmkt_trackingconsentpurpose` | _n/a_ |
| `msdynmkt_msdynmkt_contactpointconsent4_purposeId_m` | _n/a_ | `msdynmkt_purposeid` | _n/a_ |
| `msdynmkt_msdynmkt_purpose_msdynmkt_topic` | _n/a_ | `msdynmkt_purposeid` | _n/a_ |
| `msdynmkt_msdynmkt_uionly_purpose_lookup` | _n/a_ | `msdynmkt_uionlypurposelookup` | _n/a_ |
| `msdynmkt_purpose_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_purpose_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_purpose_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_purpose_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_purpose_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_purpose_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_purpose_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_purpose_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4` | [msdynmkt_purposeid](msdynmkt_purposeid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdynmkt_purpose.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_purpose.md) on 2026-05-06.