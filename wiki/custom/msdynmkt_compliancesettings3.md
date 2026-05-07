---
logical: "msdynmkt_compliancesettings3"
display: "(Deprecato) Conformità"
entitySetName: "msdynmkt_compliancesettings3s"
primaryId: "msdynmkt_compliancesettings3id"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# (Deprecato) Conformità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_compliancesettings3` |
| Display name | (Deprecato) Conformità |
| Display (plural) | (Deprecato) Conformità |
| Schema name | `msdynmkt_compliancesettings3` |
| Entity set (Web API) | `msdynmkt_compliancesettings3s` |
| Primary id attribute | `msdynmkt_compliancesettings3id` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_compliancesettings3s?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_compliancesettings3s(<guid>)
POST /api/data/v9.2/msdynmkt_compliancesettings3s
PATCH /api/data/v9.2/msdynmkt_compliancesettings3s(<guid>)
DELETE /api/data/v9.2/msdynmkt_compliancesettings3s(<guid>)
```

## Attributes

Writable: **33** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_compliancesettings3id`, `msdynmkt_consentlink`, `msdynmkt_consentlinktype`, `msdynmkt_consentmodel`, `msdynmkt_defaulttracking`, `msdynmkt_gettrackingconsents`, `msdynmkt_jurisdiction`, `msdynmkt_legaladdress`, `msdynmkt_name`, `msdynmkt_ssc_allowemaildescription`, `msdynmkt_ssc_allowsmsdescription`, `msdynmkt_ssc_allowtrackingdescription`, `msdynmkt_ssc_consentchangereason`, `msdynmkt_ssc_description`, `msdynmkt_ssc_emaildescription`, `msdynmkt_ssc_emailtitle`, `msdynmkt_ssc_errorpagetext`, `msdynmkt_ssc_legaltext`, `msdynmkt_ssc_smsdescription`, `msdynmkt_ssc_smstitle`, `msdynmkt_ssc_submitbuttonlabel`, `msdynmkt_ssc_thankyoupagetext`, `msdynmkt_ssc_title`, `msdynmkt_ssc_trackingdescription`, `msdynmkt_ssc_trackingtitle`, `msdynmkt_subscriptioncenter`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_compliancesettings3_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_compliancesettings3_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_compliancesettings3_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_compliancesettings3_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_compliancesettings3` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_compliancesettings3` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_compliancesettings3` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_compliancesettings3` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_compliancesettings3_SyncErrors` | [msdynmkt_compliancesettings3](msdynmkt_compliancesettings3.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings3` |
| `msdynmkt_compliancesettings3_DuplicateMatchingRecord` | [msdynmkt_compliancesettings3](msdynmkt_compliancesettings3.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_compliancesettings3` |
| `msdynmkt_compliancesettings3_DuplicateBaseRecord` | [msdynmkt_compliancesettings3](msdynmkt_compliancesettings3.md) | `baserecordid` | `baserecordid_msdynmkt_compliancesettings3` |
| `msdynmkt_compliancesettings3_AsyncOperations` | [msdynmkt_compliancesettings3](msdynmkt_compliancesettings3.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings3` |
| `msdynmkt_compliancesettings3_MailboxTrackingFolders` | [msdynmkt_compliancesettings3](msdynmkt_compliancesettings3.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings3` |
| `msdynmkt_compliancesettings3_UserEntityInstanceDatas` | [msdynmkt_compliancesettings3](msdynmkt_compliancesettings3.md) | `objectid` | `objectid_msdynmkt_compliancesettings3` |
| `msdynmkt_compliancesettings3_ProcessSession` | [msdynmkt_compliancesettings3](msdynmkt_compliancesettings3.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings3` |
| `msdynmkt_compliancesettings3_BulkDeleteFailures` | [msdynmkt_compliancesettings3](msdynmkt_compliancesettings3.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings3` |
| `msdynmkt_compliancesettings3_PrincipalObjectAttributeAccesses` | [msdynmkt_compliancesettings3](msdynmkt_compliancesettings3.md) | `objectid` | `objectid_msdynmkt_compliancesettings3` |


## Source

Generated from [msdynmkt_compliancesettings3 (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_compliancesettings3')) on 2026-05-07.