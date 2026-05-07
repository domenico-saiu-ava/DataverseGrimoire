---
logical: "msdynmkt_consentprovider"
display: "Consent Provider"
entitySetName: "msdynmkt_consentproviders"
primaryId: "msdynmkt_consentproviderid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **20** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdynmkt_consentcheckurltemplate`, `msdynmkt_consentproviderexternalentity`, `msdynmkt_consentproviderexternalformidentifier`, `msdynmkt_consentproviderexternalpurposeentity`, `msdynmkt_consentproviderexternalpurposeformidentifier`, `msdynmkt_consentproviderid`, `msdynmkt_consentresolutionmessageoptions`, `msdynmkt_consentresolutiontrackingoptions`, `msdynmkt_email_consentresolutionmessageoverride`, `msdynmkt_email_consentresolutiontrackingoverride`, `msdynmkt_name`, `msdynmkt_oneclickunsubscribesupported`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_consentprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_consentprovider` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_consentprovider` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_consentprovider` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_consentprovider` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentprovider_SyncErrors` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentprovider` |
| `msdynmkt_consentprovider_DuplicateMatchingRecord` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_consentprovider` |
| `msdynmkt_consentprovider_DuplicateBaseRecord` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `baserecordid` | `baserecordid_msdynmkt_consentprovider` |
| `msdynmkt_consentprovider_AsyncOperations` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentprovider` |
| `msdynmkt_consentprovider_MailboxTrackingFolders` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentprovider` |
| `msdynmkt_consentprovider_UserEntityInstanceDatas` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `objectid` | `objectid_msdynmkt_consentprovider` |
| `msdynmkt_consentprovider_ProcessSession` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentprovider` |
| `msdynmkt_consentprovider_BulkDeleteFailures` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentprovider` |
| `msdynmkt_consentprovider_PrincipalObjectAttributeAccesses` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `objectid` | `objectid_msdynmkt_consentprovider` |
| `msdynmkt_ConsentproviderLocalization_msdynmk` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `msdynmkt_msdynmkt_consentprovider` | `msdynmkt_msdynmkt_consentprovider` |
| `msdynmkt_msdynmkt_consentprovider_msdynmkt_complia` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `msdynmkt_consentproviderid` | `msdynmkt_ConsentProviderId` |


## Source

Generated from [msdynmkt_consentprovider (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_consentprovider')) on 2026-05-07.