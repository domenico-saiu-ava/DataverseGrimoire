---
logical: "msdyn_salescopilotusersetting"
display: "Impostazione utente di Sales Copilot"
entitySetName: "msdyn_salescopilotusersettings"
primaryId: "msdyn_salescopilotusersettingid"
primaryName: "msdyn_userid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione utente di Sales Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotusersetting` |
| Display name | Impostazione utente di Sales Copilot |
| Display (plural) | Impostazioni utente di Sales Copilot |
| Schema name | `msdyn_salescopilotusersetting` |
| Entity set (Web API) | `msdyn_salescopilotusersettings` |
| Primary id attribute | `msdyn_salescopilotusersettingid` |
| Primary name attribute | `msdyn_userid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotusersettings?$select=msdyn_userid&$top=10
GET /api/data/v9.2/msdyn_salescopilotusersettings(<guid>)
POST /api/data/v9.2/msdyn_salescopilotusersettings
PATCH /api/data/v9.2/msdyn_salescopilotusersettings(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotusersettings(<guid>)
```

## Attributes

Writable: **22** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_connectionname`, `msdyn_enrichmentskillconfig`, `msdyn_enrichmentskillconsentgiven`, `msdyn_exchangeconsentgiven`, `msdyn_graphdataconsentgiven`, `msdyn_m365infradetails`, `msdyn_m365skillconsentgiven`, `msdyn_m365skillinfrastatus`, `msdyn_m365skillinfrastatuslastverifiedon`, `msdyn_nbaskillconsentgiven`, `msdyn_nbaskillinfradetails`, `msdyn_nbaskillinfrastatus`, `msdyn_nbaskillinfrastatuslastverifiedon`, `msdyn_salescopilotusersettingid`, `msdyn_userid`, `msdyn_userpreferences`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salescopilotusersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotusersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotusersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotusersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotusersetting_SyncErrors` | [msdyn_salescopilotusersetting](msdyn_salescopilotusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotusersetting` |
| `msdyn_salescopilotusersetting_DuplicateMatchingRecord` | [msdyn_salescopilotusersetting](msdyn_salescopilotusersetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salescopilotusersetting` |
| `msdyn_salescopilotusersetting_DuplicateBaseRecord` | [msdyn_salescopilotusersetting](msdyn_salescopilotusersetting.md) | `baserecordid` | `baserecordid_msdyn_salescopilotusersetting` |
| `msdyn_salescopilotusersetting_AsyncOperations` | [msdyn_salescopilotusersetting](msdyn_salescopilotusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotusersetting` |
| `msdyn_salescopilotusersetting_MailboxTrackingFolders` | [msdyn_salescopilotusersetting](msdyn_salescopilotusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotusersetting` |
| `msdyn_salescopilotusersetting_UserEntityInstanceDatas` | [msdyn_salescopilotusersetting](msdyn_salescopilotusersetting.md) | `objectid` | `objectid_msdyn_salescopilotusersetting` |
| `msdyn_salescopilotusersetting_ProcessSession` | [msdyn_salescopilotusersetting](msdyn_salescopilotusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotusersetting` |
| `msdyn_salescopilotusersetting_BulkDeleteFailures` | [msdyn_salescopilotusersetting](msdyn_salescopilotusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotusersetting` |
| `msdyn_salescopilotusersetting_PrincipalObjectAttributeAccesses` | [msdyn_salescopilotusersetting](msdyn_salescopilotusersetting.md) | `objectid` | `objectid_msdyn_salescopilotusersetting` |


## Source

Generated from [msdyn_salescopilotusersetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salescopilotusersetting')) on 2026-05-07.