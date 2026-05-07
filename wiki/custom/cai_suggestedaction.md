---
logical: "cai_suggestedaction"
display: "Azione suggerita"
entitySetName: "cai_suggestedactions"
primaryId: "cai_suggestedactionid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Azione suggerita

Azioni suggerite per il gestore

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_suggestedaction` |
| Display name | Azione suggerita |
| Display (plural) | Azioni suggerite |
| Schema name | `cai_suggestedaction` |
| Entity set (Web API) | `cai_suggestedactions` |
| Primary id attribute | `cai_suggestedactionid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_suggestedactions?$select=cai_name&$top=10
GET /api/data/v9.2/cai_suggestedactions(<guid>)
POST /api/data/v9.2/cai_suggestedactions
PATCH /api/data/v9.2/cai_suggestedactions(<guid>)
DELETE /api/data/v9.2/cai_suggestedactions(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`cai_code`, `cai_name`, `cai_operationtypesuggested`, `cai_suggestedactionid`, `cai_suggestedactiontext`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_suggestedaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_suggestedaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_suggestedaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_suggestedaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_suggestedaction` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_suggestedaction` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_suggestedaction` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_suggestedaction` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_suggestedaction_SyncErrors` | [cai_suggestedaction](cai_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_cai_suggestedaction` |
| `cai_suggestedaction_DuplicateMatchingRecord` | [cai_suggestedaction](cai_suggestedaction.md) | `duplicaterecordid` | `duplicaterecordid_cai_suggestedaction` |
| `cai_suggestedaction_DuplicateBaseRecord` | [cai_suggestedaction](cai_suggestedaction.md) | `baserecordid` | `baserecordid_cai_suggestedaction` |
| `cai_suggestedaction_AsyncOperations` | [cai_suggestedaction](cai_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_cai_suggestedaction` |
| `cai_suggestedaction_MailboxTrackingFolders` | [cai_suggestedaction](cai_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_cai_suggestedaction` |
| `cai_suggestedaction_UserEntityInstanceDatas` | [cai_suggestedaction](cai_suggestedaction.md) | `objectid` | `objectid_cai_suggestedaction` |
| `cai_suggestedaction_ProcessSession` | [cai_suggestedaction](cai_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_cai_suggestedaction` |
| `cai_suggestedaction_BulkDeleteFailures` | [cai_suggestedaction](cai_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_cai_suggestedaction` |
| `cai_suggestedaction_PrincipalObjectAttributeAccesses` | [cai_suggestedaction](cai_suggestedaction.md) | `objectid` | `objectid_cai_suggestedaction` |


## Source

Generated from [cai_suggestedaction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_suggestedaction')) on 2026-05-07.