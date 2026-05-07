---
logical: "msdyn_stakeholderresearchoutput"
display: "Output ricerca stakeholder"
entitySetName: "msdyn_stakeholderresearchoutputs"
primaryId: "msdyn_stakeholderresearchoutputid"
primaryName: "msdyn_stakeholderresearchoutput"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Output ricerca stakeholder

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_stakeholderresearchoutput` |
| Display name | Output ricerca stakeholder |
| Display (plural) | Output ricerca stakeholder |
| Schema name | `msdyn_StakeholderResearchOutput` |
| Entity set (Web API) | `msdyn_stakeholderresearchoutputs` |
| Primary id attribute | `msdyn_stakeholderresearchoutputid` |
| Primary name attribute | `msdyn_stakeholderresearchoutput` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_stakeholderresearchoutputs?$select=msdyn_stakeholderresearchoutput&$top=10
GET /api/data/v9.2/msdyn_stakeholderresearchoutputs(<guid>)
POST /api/data/v9.2/msdyn_stakeholderresearchoutputs
PATCH /api/data/v9.2/msdyn_stakeholderresearchoutputs(<guid>)
DELETE /api/data/v9.2/msdyn_stakeholderresearchoutputs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_account`, `msdyn_mcstopstakeholdersummary`, `msdyn_stakeholderresearchoutput`, `msdyn_stakeholderresearchoutputid`, `msdyn_top20stakeholderinfo`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_stakeholderresearchoutput_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_stakeholderresearchoutput_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_stakeholderresearchoutput_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_stakeholderresearchoutput_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_stakeholderresearchoutput` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_stakeholderresearchoutput` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_stakeholderresearchoutput` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_stakeholderresearchoutput` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_stakeholderresearchoutput_Account_account` | [account](account.md) | `msdyn_account` | `msdyn_Account` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_stakeholderresearchoutput_SyncErrors` | [msdyn_stakeholderresearchoutput](msdyn_stakeholderresearchoutput.md) | `regardingobjectid` | `regardingobjectid_msdyn_stakeholderresearchoutput` |
| `msdyn_stakeholderresearchoutput_AsyncOperations` | [msdyn_stakeholderresearchoutput](msdyn_stakeholderresearchoutput.md) | `regardingobjectid` | `regardingobjectid_msdyn_stakeholderresearchoutput` |
| `msdyn_stakeholderresearchoutput_MailboxTrackingFolders` | [msdyn_stakeholderresearchoutput](msdyn_stakeholderresearchoutput.md) | `regardingobjectid` | `regardingobjectid_msdyn_stakeholderresearchoutput` |
| `msdyn_stakeholderresearchoutput_UserEntityInstanceDatas` | [msdyn_stakeholderresearchoutput](msdyn_stakeholderresearchoutput.md) | `objectid` | `objectid_msdyn_stakeholderresearchoutput` |
| `msdyn_stakeholderresearchoutput_ProcessSession` | [msdyn_stakeholderresearchoutput](msdyn_stakeholderresearchoutput.md) | `regardingobjectid` | `regardingobjectid_msdyn_stakeholderresearchoutput` |
| `msdyn_stakeholderresearchoutput_BulkDeleteFailures` | [msdyn_stakeholderresearchoutput](msdyn_stakeholderresearchoutput.md) | `regardingobjectid` | `regardingobjectid_msdyn_stakeholderresearchoutput` |
| `msdyn_stakeholderresearchoutput_PrincipalObjectAttributeAccesses` | [msdyn_stakeholderresearchoutput](msdyn_stakeholderresearchoutput.md) | `objectid` | `objectid_msdyn_stakeholderresearchoutput` |


## Source

Generated from [msdyn_stakeholderresearchoutput (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_stakeholderresearchoutput')) on 2026-05-07.