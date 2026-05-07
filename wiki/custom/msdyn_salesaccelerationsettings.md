---
logical: "msdyn_salesaccelerationsettings"
display: "Impostazioni accelerazione delle vendite"
entitySetName: "msdyn_salesaccelerationsettingset"
primaryId: "msdyn_salesaccelerationsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni accelerazione delle vendite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesaccelerationsettings` |
| Display name | Impostazioni accelerazione delle vendite |
| Display (plural) | Set di impostazioni accelerazione delle vendite |
| Schema name | `msdyn_salesaccelerationsettings` |
| Entity set (Web API) | `msdyn_salesaccelerationsettingset` |
| Primary id attribute | `msdyn_salesaccelerationsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesaccelerationsettingset?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesaccelerationsettingset(<guid>)
POST /api/data/v9.2/msdyn_salesaccelerationsettingset
PATCH /api/data/v9.2/msdyn_salesaccelerationsettingset(<guid>)
DELETE /api/data/v9.2/msdyn_salesaccelerationsettingset(<guid>)
```

## Attributes

Writable: **25** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_calendartype`, `msdyn_disablewqautorefreshonmarkcomplete`, `msdyn_entityconfiguration`, `msdyn_isautocreatephonecallenabled`, `msdyn_isdefaultsetting`, `msdyn_isfccenabled`, `msdyn_issignalrnotificationenabled`, `msdyn_iswaittimecomputationenabled`, `msdyn_isworkscheduleenabled`, `msdyn_linkingconfiguration`, `msdyn_linksequencesteptoactivity`, `msdyn_migrationstatus`, `msdyn_name`, `msdyn_recommendationsecurityroles`, `msdyn_salesaccelerationsettingsid`, `msdyn_securityroles`, `msdyn_securityrolesassignmentrules`, `msdyn_securityrolesnew`, `msdyn_sequenceconfiguration`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesaccelerationsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesaccelerationsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesaccelerationsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesaccelerationsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_salesaccelerationsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesaccelerationsettings_SyncErrors` | [msdyn_salesaccelerationsettings](msdyn_salesaccelerationsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesaccelerationsettings` |
| `msdyn_salesaccelerationsettings_DuplicateMatchingRecord` | [msdyn_salesaccelerationsettings](msdyn_salesaccelerationsettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salesaccelerationsettings` |
| `msdyn_salesaccelerationsettings_DuplicateBaseRecord` | [msdyn_salesaccelerationsettings](msdyn_salesaccelerationsettings.md) | `baserecordid` | `baserecordid_msdyn_salesaccelerationsettings` |
| `msdyn_salesaccelerationsettings_AsyncOperations` | [msdyn_salesaccelerationsettings](msdyn_salesaccelerationsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesaccelerationsettings` |
| `msdyn_salesaccelerationsettings_MailboxTrackingFolders` | [msdyn_salesaccelerationsettings](msdyn_salesaccelerationsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesaccelerationsettings` |
| `msdyn_salesaccelerationsettings_UserEntityInstanceDatas` | [msdyn_salesaccelerationsettings](msdyn_salesaccelerationsettings.md) | `objectid` | `objectid_msdyn_salesaccelerationsettings` |
| `msdyn_salesaccelerationsettings_ProcessSession` | [msdyn_salesaccelerationsettings](msdyn_salesaccelerationsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesaccelerationsettings` |
| `msdyn_salesaccelerationsettings_BulkDeleteFailures` | [msdyn_salesaccelerationsettings](msdyn_salesaccelerationsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesaccelerationsettings` |
| `msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses` | [msdyn_salesaccelerationsettings](msdyn_salesaccelerationsettings.md) | `objectid` | `objectid_msdyn_salesaccelerationsettings` |
| `msdyn_worklistviewconfig_salesaccelerationsettingsid` | [msdyn_salesaccelerationsettings](msdyn_salesaccelerationsettings.md) | `msdyn_salesaccelerationsettingsid` | `msdyn_salesaccelerationsettingsid` |


## Source

Generated from [msdyn_salesaccelerationsettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesaccelerationsettings')) on 2026-05-07.