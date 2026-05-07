---
logical: "msdyn_ocbotchannelregistrationsecret"
display: "Segreto registrazione canale bot"
entitySetName: "msdyn_ocbotchannelregistrationsecrets"
primaryId: "msdyn_ocbotchannelregistrationsecretid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Segreto registrazione canale bot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocbotchannelregistrationsecret` |
| Display name | Segreto registrazione canale bot |
| Display (plural) | Segreti registrazione canale bot |
| Schema name | `msdyn_ocbotchannelregistrationsecret` |
| Entity set (Web API) | `msdyn_ocbotchannelregistrationsecrets` |
| Primary id attribute | `msdyn_ocbotchannelregistrationsecretid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocbotchannelregistrationsecrets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocbotchannelregistrationsecrets(<guid>)
POST /api/data/v9.2/msdyn_ocbotchannelregistrationsecrets
PATCH /api/data/v9.2/msdyn_ocbotchannelregistrationsecrets(<guid>)
DELETE /api/data/v9.2/msdyn_ocbotchannelregistrationsecrets(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_ocbotchannelregistrationid`, `msdyn_ocbotchannelregistrationsecretid`, `msdyn_securemsappsecret`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocbotchannelregistrationsecret_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocbotchannelregistrationsecret_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocbotchannelregistrationsecret_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocbotchannelregistrationsecret_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocbotchannelregistrationsecret` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocbotchannelregistrationsecret` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocbotchannelregistrationsecret` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocbotchannelregistrationsecret` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocbotchannelregistration_msdyn_ocbotchannelregistrationsecret_ocbotchannelregistrationid` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `msdyn_ocbotchannelregistrationid` | `msdyn_ocbotchannelregistrationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocbotchannelregistrationsecret_SyncErrors` | [msdyn_ocbotchannelregistrationsecret](msdyn_ocbotchannelregistrationsecret.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocbotchannelregistrationsecret` |
| `msdyn_ocbotchannelregistrationsecret_DuplicateMatchingRecord` | [msdyn_ocbotchannelregistrationsecret](msdyn_ocbotchannelregistrationsecret.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocbotchannelregistrationsecret` |
| `msdyn_ocbotchannelregistrationsecret_DuplicateBaseRecord` | [msdyn_ocbotchannelregistrationsecret](msdyn_ocbotchannelregistrationsecret.md) | `baserecordid` | `baserecordid_msdyn_ocbotchannelregistrationsecret` |
| `msdyn_ocbotchannelregistrationsecret_AsyncOperations` | [msdyn_ocbotchannelregistrationsecret](msdyn_ocbotchannelregistrationsecret.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocbotchannelregistrationsecret` |
| `msdyn_ocbotchannelregistrationsecret_MailboxTrackingFolders` | [msdyn_ocbotchannelregistrationsecret](msdyn_ocbotchannelregistrationsecret.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocbotchannelregistrationsecret` |
| `msdyn_ocbotchannelregistrationsecret_UserEntityInstanceDatas` | [msdyn_ocbotchannelregistrationsecret](msdyn_ocbotchannelregistrationsecret.md) | `objectid` | `objectid_msdyn_ocbotchannelregistrationsecret` |
| `msdyn_ocbotchannelregistrationsecret_ProcessSession` | [msdyn_ocbotchannelregistrationsecret](msdyn_ocbotchannelregistrationsecret.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocbotchannelregistrationsecret` |
| `msdyn_ocbotchannelregistrationsecret_BulkDeleteFailures` | [msdyn_ocbotchannelregistrationsecret](msdyn_ocbotchannelregistrationsecret.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocbotchannelregistrationsecret` |
| `msdyn_ocbotchannelregistrationsecret_PrincipalObjectAttributeAccesses` | [msdyn_ocbotchannelregistrationsecret](msdyn_ocbotchannelregistrationsecret.md) | `objectid` | `objectid_msdyn_ocbotchannelregistrationsecret` |


## Source

Generated from [msdyn_ocbotchannelregistrationsecret (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocbotchannelregistrationsecret')) on 2026-05-07.