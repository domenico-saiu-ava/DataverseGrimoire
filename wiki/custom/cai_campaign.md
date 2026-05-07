---
logical: "cai_campaign"
display: "Anagrafe campagna"
entitySetName: "cai_campaigns"
primaryId: "cai_campaignid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Anagrafe campagna

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_campaign` |
| Display name | Anagrafe campagna |
| Display (plural) | Anagrafi campagna |
| Schema name | `cai_campaign` |
| Entity set (Web API) | `cai_campaigns` |
| Primary id attribute | `cai_campaignid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_campaigns?$select=cai_name&$top=10
GET /api/data/v9.2/cai_campaigns(<guid>)
POST /api/data/v9.2/cai_campaigns
PATCH /api/data/v9.2/cai_campaigns(<guid>)
DELETE /api/data/v9.2/cai_campaigns(<guid>)
```

## Attributes

Writable: **25** · Read-only: **10**

### Writable

`cai_adobecode`, `cai_adobeid`, `cai_campaignid`, `cai_channel`, `cai_code`, `cai_description`, `cai_duration`, `cai_enddate`, `cai_frequency`, `cai_goal`, `cai_mode`, `cai_name`, `cai_redemption`, `cai_segment`, `cai_startdate`, `cai_status`, `cai_target`, `cai_type`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_campaign_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_campaign_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_campaign_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_campaign_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_campaign` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_campaign` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_campaign` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_campaign` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_campaign_SyncErrors` | [cai_campaign](cai_campaign.md) | `regardingobjectid` | `regardingobjectid_cai_campaign` |
| `cai_campaign_DuplicateMatchingRecord` | [cai_campaign](cai_campaign.md) | `duplicaterecordid` | `duplicaterecordid_cai_campaign` |
| `cai_campaign_DuplicateBaseRecord` | [cai_campaign](cai_campaign.md) | `baserecordid` | `baserecordid_cai_campaign` |
| `cai_campaign_AsyncOperations` | [cai_campaign](cai_campaign.md) | `regardingobjectid` | `regardingobjectid_cai_campaign` |
| `cai_campaign_MailboxTrackingFolders` | [cai_campaign](cai_campaign.md) | `regardingobjectid` | `regardingobjectid_cai_campaign` |
| `cai_campaign_UserEntityInstanceDatas` | [cai_campaign](cai_campaign.md) | `objectid` | `objectid_cai_campaign` |
| `cai_campaign_ProcessSession` | [cai_campaign](cai_campaign.md) | `regardingobjectid` | `regardingobjectid_cai_campaign` |
| `cai_campaign_BulkDeleteFailures` | [cai_campaign](cai_campaign.md) | `regardingobjectid` | `regardingobjectid_cai_campaign` |
| `cai_campaign_PrincipalObjectAttributeAccesses` | [cai_campaign](cai_campaign.md) | `objectid` | `objectid_cai_campaign` |
| `cai_lead_campaignid_cai_campaign` | [cai_campaign](cai_campaign.md) | `cai_campaignid` | `cai_campaignid` |


## Source

Generated from [cai_campaign (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_campaign')) on 2026-05-07.