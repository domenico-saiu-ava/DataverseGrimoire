---
logical: "msdyn_ocbotchannelregistration"
display: "Registrazione al canale bot"
entitySetName: "msdyn_ocbotchannelregistrations"
primaryId: "msdyn_ocbotchannelregistrationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Registrazione al canale bot

Registrazione al canale bot utilizzata per l'integrazione del canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocbotchannelregistration` |
| Display name | Registrazione al canale bot |
| Display (plural) | Registrazioni al canale bot |
| Schema name | `msdyn_ocbotchannelregistration` |
| Entity set (Web API) | `msdyn_ocbotchannelregistrations` |
| Primary id attribute | `msdyn_ocbotchannelregistrationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocbotchannelregistrations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocbotchannelregistrations(<guid>)
POST /api/data/v9.2/msdyn_ocbotchannelregistrations
PATCH /api/data/v9.2/msdyn_ocbotchannelregistrations(<guid>)
DELETE /api/data/v9.2/msdyn_ocbotchannelregistrations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bottype`, `msdyn_msappid`, `msdyn_name`, `msdyn_ocbotchannelregistrationid`, `msdyn_tenantid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocbotchannelregistration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocbotchannelregistration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocbotchannelregistration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocbotchannelregistration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocbotchannelregistration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocbotchannelregistration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocbotchannelregistration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocbotchannelregistration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocbotchannelregistration_SyncErrors` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocbotchannelregistration` |
| `msdyn_ocbotchannelregistration_DuplicateMatchingRecord` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocbotchannelregistration` |
| `msdyn_ocbotchannelregistration_DuplicateBaseRecord` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `baserecordid` | `baserecordid_msdyn_ocbotchannelregistration` |
| `msdyn_ocbotchannelregistration_AsyncOperations` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocbotchannelregistration` |
| `msdyn_ocbotchannelregistration_MailboxTrackingFolders` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocbotchannelregistration` |
| `msdyn_ocbotchannelregistration_UserEntityInstanceDatas` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `objectid` | `objectid_msdyn_ocbotchannelregistration` |
| `msdyn_ocbotchannelregistration_ProcessSession` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocbotchannelregistration` |
| `msdyn_ocbotchannelregistration_BulkDeleteFailures` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocbotchannelregistration` |
| `msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `objectid` | `objectid_msdyn_ocbotchannelregistration` |
| `msdyn_msdyn_ocbotchannelregistration_msdyn_ocbotchannelregistrationsecret_ocbotchannelregistrationid` | [msdyn_ocbotchannelregistration](msdyn_ocbotchannelregistration.md) | `msdyn_ocbotchannelregistrationid` | `msdyn_ocbotchannelregistrationid` |


## Source

Generated from [msdyn_ocbotchannelregistration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocbotchannelregistration')) on 2026-05-07.