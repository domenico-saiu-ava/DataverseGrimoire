---
logical: "msdynmkt_consentprovider"
display: "Consent Provider"
entitySetName: "msdynmkt_consentproviders"
primaryId: "msdynmkt_consentproviderid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Consent Provider

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentprovider` |
| Display name | Consent Provider |
| Display (plural) | Consent Providers |
| Schema name | `msdynmkt_consentprovider` |
| Entity set (Web API) | `msdynmkt_consentproviders` |
| Primary id attribute | `msdynmkt_consentproviderid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consentproviders?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_consentproviders(<guid>)
POST /api/data/v9.2/msdynmkt_consentproviders
PATCH /api/data/v9.2/msdynmkt_consentproviders(<guid>)
DELETE /api/data/v9.2/msdynmkt_consentproviders(<guid>)
```

## Attributes

Writable: **21** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdynmkt_consentcheckurltemplate`, `msdynmkt_consentproviderexternalentity`, `msdynmkt_consentproviderexternalformidentifier`, `msdynmkt_consentproviderexternalpurposeentity`, `msdynmkt_consentproviderexternalpurposeformidentifier`, `msdynmkt_consentproviderId`, `msdynmkt_consentresolutionmessageoptions`, `msdynmkt_consentresolutiontrackingoptions`, `msdynmkt_email_consentresolutionmessageoverride`, `msdynmkt_email_consentresolutiontrackingoverride`, `msdynmkt_name`, `msdynmkt_oneclickunsubscribesupported`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_consentprovider` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_consentprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_consentprovider` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_consentprovider` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_consentprovider` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentprovider_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentprovider_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentprovider_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_consentprovider_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_consentprovider_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentprovider_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_consentprovider_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentprovider_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_ConsentproviderLocalization_msdynmk` | _n/a_ | `msdynmkt_msdynmkt_consentprovider` | _n/a_ |
| `msdynmkt_msdynmkt_consentprovider_msdynmkt_complia` | _n/a_ | `msdynmkt_consentproviderid` | _n/a_ |


## Source

Generated from [msdynmkt_consentprovider.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_consentprovider.md) on 2026-05-06.