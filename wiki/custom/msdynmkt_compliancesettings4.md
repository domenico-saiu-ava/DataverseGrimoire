---
logical: "msdynmkt_compliancesettings4"
display: "Profilo di conformità"
entitySetName: "msdynmkt_compliancesettings4s"
primaryId: "msdynmkt_compliancesettings4id"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Profilo di conformità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_compliancesettings4` |
| Display name | Profilo di conformità |
| Display (plural) | Profili di conformità |
| Schema name | `msdynmkt_compliancesettings4` |
| Entity set (Web API) | `msdynmkt_compliancesettings4s` |
| Primary id attribute | `msdynmkt_compliancesettings4id` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_compliancesettings4s?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_compliancesettings4s(<guid>)
POST /api/data/v9.2/msdynmkt_compliancesettings4s
PATCH /api/data/v9.2/msdynmkt_compliancesettings4s(<guid>)
DELETE /api/data/v9.2/msdynmkt_compliancesettings4s(<guid>)
```

## Attributes

Writable: **47** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdynmkt_compliancesettings4id`, `msdynmkt_consentlink`, `msdynmkt_consentlink_customerprofile`, `msdynmkt_consentlink_leads`, `msdynmkt_consentlinktype`, `msdynmkt_consentproviderid`, `msdynmkt_doiconfirmationtext`, `msdynmkt_doiconfirmationtype`, `msdynmkt_doiconfirmationurl`, `msdynmkt_doifailurereason`, `msdynmkt_doijobstatus`, `msdynmkt_doistatus`, `msdynmkt_emaildescription`, `msdynmkt_extendedentityid`, `msdynmkt_gettrackingconsents`, `msdynmkt_globaldoienabled`, `msdynmkt_jurisdiction`, `msdynmkt_legaladdress`, `msdynmkt_migrationtimestamp`, `msdynmkt_name`, `msdynmkt_ssc_allowemaildescription`, `msdynmkt_ssc_allowsmsdescription`, `msdynmkt_ssc_allowtrackingdescription`, `msdynmkt_ssc_consentchangereason`, `msdynmkt_ssc_description`, `msdynmkt_ssc_emailtitle`, `msdynmkt_ssc_errorpagetext`, `msdynmkt_ssc_legaltext`, `msdynmkt_ssc_smsdescription`, `msdynmkt_ssc_smstitle`, `msdynmkt_ssc_submitbuttonlabel`, `msdynmkt_ssc_thankyoupagetext`, `msdynmkt_ssc_title`, `msdynmkt_ssc_trackingdescription`, `msdynmkt_ssc_trackingtitle`, `msdynmkt_subscriptioncenter`, `msdynmkt_trackingconsentpurpose`, `msdynmkt_uionly_link_existing_profile`, `msdynmkt_uionly_linked_profile`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_compliancesettings4_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_compliancesettings4_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_compliancesettings4_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_compliancesettings4_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_compliancesettings4` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_compliancesettings4` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_compliancesettings4` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_compliancesettings4` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdynmkt_compliancesettings4_uionly_linkedprofile` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `msdynmkt_uionly_linked_profile` | `msdynmkt_uionly_linked_profile` |
| `msdynmkt_msdynmkt_compliancesettings4_TrackingCons` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_trackingconsentpurpose` | `msdynmkt_TrackingConsentPurpose` |
| `msdynmkt_msdynmkt_consentprovider_msdynmkt_complia` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `msdynmkt_consentproviderid` | `msdynmkt_ConsentProviderId` |
| `msdynmkt_compliancesettings4_msdynmkt_consentproviderdefaultconfiguration` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `msdynmkt_extendedentityid` | `msdynmkt_extendedentityId_msdynmkt_consentproviderdefaultconfiguration` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_compliancesettings4_SyncErrors` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings4` |
| `msdynmkt_compliancesettings4_DuplicateMatchingRecord` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_compliancesettings4` |
| `msdynmkt_compliancesettings4_DuplicateBaseRecord` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `baserecordid` | `baserecordid_msdynmkt_compliancesettings4` |
| `msdynmkt_compliancesettings4_AsyncOperations` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings4` |
| `msdynmkt_compliancesettings4_MailboxTrackingFolders` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings4` |
| `msdynmkt_compliancesettings4_UserEntityInstanceDatas` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `objectid` | `objectid_msdynmkt_compliancesettings4` |
| `msdynmkt_compliancesettings4_ProcessSession` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings4` |
| `msdynmkt_compliancesettings4_BulkDeleteFailures` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings4` |
| `msdynmkt_compliancesettings4_PrincipalObjectAttributeAccesses` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `objectid` | `objectid_msdynmkt_compliancesettings4` |
| `msdynmkt_compliancesettings4_uionly_linkedprofile` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `msdynmkt_uionly_linked_profile` | `msdynmkt_uionly_linked_profile` |
| `msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `msdynmkt_complianceid` | `msdynmkt_ComplianceId` |
| `msdynmkt_msdynmkt_uionly_compliancesettings4_lookup` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `msdynmkt_uionlycomplianceprofilelookup` | `msdynmkt_uionlycomplianceprofilelookup` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4` | [msdynmkt_purpose](msdynmkt_purpose.md) | _n/a_ | `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4` |

## Source

Generated from [msdynmkt_compliancesettings4 (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_compliancesettings4')) on 2026-05-07.