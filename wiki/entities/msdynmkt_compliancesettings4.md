---
logical: "msdynmkt_compliancesettings4"
display: "Compliance profile"
entitySetName: "msdynmkt_compliancesettings4s"
primaryId: "msdynmkt_compliancesettings4id"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Compliance profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_compliancesettings4` |
| Display name | Compliance profile |
| Display (plural) | Compliance profiles |
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

Writable: **49** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdynmkt_compliancesettings4Id`, `msdynmkt_consentlink`, `msdynmkt_consentlink_customerprofile`, `msdynmkt_consentlink_leads`, `msdynmkt_consentlinktype`, `msdynmkt_ConsentProviderId`, `msdynmkt_DOIConfirmationText`, `msdynmkt_DOIConfirmationType`, `msdynmkt_DOIConfirmationURL`, `msdynmkt_DOIFailureReason`, `msdynmkt_doijobstatus`, `msdynmkt_DOIStatus`, `msdynmkt_emaildescription`, `msdynmkt_extendedentityId`, `msdynmkt_extendedentityIdType`, `msdynmkt_gettrackingconsents`, `msdynmkt_globaldoienabled`, `msdynmkt_jurisdiction`, `msdynmkt_legaladdress`, `msdynmkt_migrationtimestamp`, `msdynmkt_name`, `msdynmkt_ssc_allowemaildescription`, `msdynmkt_ssc_allowsmsdescription`, `msdynmkt_ssc_allowtrackingdescription`, `msdynmkt_ssc_consentchangereason`, `msdynmkt_ssc_description`, `msdynmkt_ssc_emailtitle`, `msdynmkt_ssc_errorpagetext`, `msdynmkt_ssc_legaltext`, `msdynmkt_ssc_smsdescription`, `msdynmkt_ssc_smstitle`, `msdynmkt_ssc_submitbuttonlabel`, `msdynmkt_ssc_thankyoupagetext`, `msdynmkt_ssc_title`, `msdynmkt_ssc_trackingdescription`, `msdynmkt_ssc_trackingtitle`, `msdynmkt_subscriptioncenter`, `msdynmkt_TrackingConsentPurpose`, `msdynmkt_uionly_link_existing_profile`, `msdynmkt_uionly_linked_profile`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_compliancesettings4` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_compliancesettings4_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_compliancesettings4_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_compliancesettings4_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_compliancesettings4_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdynmkt_compliancesettings4_msdynmkt_consentproviderdefaultconfiguration` | [msdynmkt_consentproviderdefaultconfiguration](msdynmkt_consentproviderdefaultconfiguration.md) | `msdynmkt_extendedentityid` | `msdynmkt_extendedentityId_msdynmkt_consentproviderdefaultconfiguration` |
| `msdynmkt_compliancesettings4_uionly_linkedprofile` | [msdynmkt_compliancesettings4](msdynmkt_compliancesettings4.md) | `msdynmkt_uionly_linked_profile` | `msdynmkt_uionly_linked_profile` |
| `msdynmkt_msdynmkt_compliancesettings4_TrackingCons` | [msdynmkt_purpose](msdynmkt_purpose.md) | `msdynmkt_trackingconsentpurpose` | `msdynmkt_TrackingConsentPurpose` |
| `msdynmkt_msdynmkt_consentprovider_msdynmkt_complia` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `msdynmkt_consentproviderid` | `msdynmkt_ConsentProviderId` |
| `owner_msdynmkt_compliancesettings4` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_compliancesettings4` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_compliancesettings4` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_compliancesettings4_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_compliancesettings4_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_compliancesettings4_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_compliancesettings4_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_compliancesettings4_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_compliancesettings4_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_compliancesettings4_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_compliancesettings4_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_compliancesettings4_uionly_linkedprofile` | _n/a_ | `msdynmkt_uionly_linked_profile` | _n/a_ |
| `msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre` | _n/a_ | `msdynmkt_complianceid` | _n/a_ |
| `msdynmkt_msdynmkt_uionly_compliancesettings4_lookup` | _n/a_ | `msdynmkt_uionlycomplianceprofilelookup` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4` | [msdynmkt_compliancesettings4id](msdynmkt_compliancesettings4id.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdynmkt_compliancesettings4.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_compliancesettings4.md) on 2026-05-06.