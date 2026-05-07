---
logical: "msdynmkt_compliancesettings"
display: "(Deprecato) Conformità"
entitySetName: "msdynmkt_compliancesettingses"
primaryId: "msdynmkt_compliancesettingsid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# (Deprecato) Conformità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_compliancesettings` |
| Display name | (Deprecato) Conformità |
| Display (plural) | (Deprecato) Conformità |
| Schema name | `msdynmkt_compliancesettings` |
| Entity set (Web API) | `msdynmkt_compliancesettingses` |
| Primary id attribute | `msdynmkt_compliancesettingsid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_compliancesettingses?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_compliancesettingses(<guid>)
POST /api/data/v9.2/msdynmkt_compliancesettingses
PATCH /api/data/v9.2/msdynmkt_compliancesettingses(<guid>)
DELETE /api/data/v9.2/msdynmkt_compliancesettingses(<guid>)
```

## Attributes

Writable: **34** · Read-only: **8**

### Writable

`importsequencenumber`, `msdynmkt_compliancesettingsid`, `msdynmkt_consentlink`, `msdynmkt_consentlinktype`, `msdynmkt_consentmodel`, `msdynmkt_defaulttracking`, `msdynmkt_gettrackingconsents`, `msdynmkt_jurisdiction`, `msdynmkt_legaladdress`, `msdynmkt_marketinglogconsentchangesswitch`, `msdynmkt_marketingrespectconsentswitch`, `msdynmkt_name`, `msdynmkt_ssc_allowemaildescription`, `msdynmkt_ssc_allowsmsdescription`, `msdynmkt_ssc_allowtrackingdescription`, `msdynmkt_ssc_consentchangereason`, `msdynmkt_ssc_description`, `msdynmkt_ssc_emaildescription`, `msdynmkt_ssc_emailtitle`, `msdynmkt_ssc_errorpagetext`, `msdynmkt_ssc_legaltext`, `msdynmkt_ssc_smsdescription`, `msdynmkt_ssc_smstitle`, `msdynmkt_ssc_submitbuttonlabel`, `msdynmkt_ssc_thankyoupagetext`, `msdynmkt_ssc_title`, `msdynmkt_ssc_trackingdescription`, `msdynmkt_ssc_trackingtitle`, `msdynmkt_subscriptioncenter`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_compliancesettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_compliancesettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_compliancesettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_compliancesettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_compliancesettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_compliancesettings_SyncErrors` | [msdynmkt_compliancesettings](msdynmkt_compliancesettings.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings` |
| `msdynmkt_compliancesettings_DuplicateMatchingRecord` | [msdynmkt_compliancesettings](msdynmkt_compliancesettings.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_compliancesettings` |
| `msdynmkt_compliancesettings_DuplicateBaseRecord` | [msdynmkt_compliancesettings](msdynmkt_compliancesettings.md) | `baserecordid` | `baserecordid_msdynmkt_compliancesettings` |
| `msdynmkt_compliancesettings_AsyncOperations` | [msdynmkt_compliancesettings](msdynmkt_compliancesettings.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings` |
| `msdynmkt_compliancesettings_MailboxTrackingFolders` | [msdynmkt_compliancesettings](msdynmkt_compliancesettings.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings` |
| `msdynmkt_compliancesettings_UserEntityInstanceDatas` | [msdynmkt_compliancesettings](msdynmkt_compliancesettings.md) | `objectid` | `objectid_msdynmkt_compliancesettings` |
| `msdynmkt_compliancesettings_ProcessSession` | [msdynmkt_compliancesettings](msdynmkt_compliancesettings.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings` |
| `msdynmkt_compliancesettings_BulkDeleteFailures` | [msdynmkt_compliancesettings](msdynmkt_compliancesettings.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_compliancesettings` |
| `msdynmkt_compliancesettings_PrincipalObjectAttributeAccesses` | [msdynmkt_compliancesettings](msdynmkt_compliancesettings.md) | `objectid` | `objectid_msdynmkt_compliancesettings` |


## Source

Generated from [msdynmkt_compliancesettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_compliancesettings')) on 2026-05-07.