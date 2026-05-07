---
logical: "msdyn_emailsentiment"
display: "Valutazione e-mail"
entitySetName: "msdyn_emailsentiments"
primaryId: "msdyn_emailsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Valutazione e-mail

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_emailsentiment` |
| Display name | Valutazione e-mail |
| Display (plural) | Valutazioni e-mail |
| Schema name | `msdyn_emailsentiment` |
| Entity set (Web API) | `msdyn_emailsentiments` |
| Primary id attribute | `msdyn_emailsentimentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_emailsentiments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_emailsentiments(<guid>)
POST /api/data/v9.2/msdyn_emailsentiments
PATCH /api/data/v9.2/msdyn_emailsentiments(<guid>)
DELETE /api/data/v9.2/msdyn_emailsentiments(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_email`, `msdyn_emailsentimentid`, `msdyn_name`, `msdyn_responsetime`, `msdyn_sentimentscore`, `msdyn_timezone`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_emailsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_emailsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_emailsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_emailsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_emailsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_emailsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_emailsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_emailsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_email_email_msdyn_emailsentiment` | [email](email.md) | `msdyn_email` | `msdyn_email` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_emailsentiment_SyncErrors` | [msdyn_emailsentiment](msdyn_emailsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailsentiment` |
| `msdyn_emailsentiment_DuplicateMatchingRecord` | [msdyn_emailsentiment](msdyn_emailsentiment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_emailsentiment` |
| `msdyn_emailsentiment_DuplicateBaseRecord` | [msdyn_emailsentiment](msdyn_emailsentiment.md) | `baserecordid` | `baserecordid_msdyn_emailsentiment` |
| `msdyn_emailsentiment_AsyncOperations` | [msdyn_emailsentiment](msdyn_emailsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailsentiment` |
| `msdyn_emailsentiment_MailboxTrackingFolders` | [msdyn_emailsentiment](msdyn_emailsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailsentiment` |
| `msdyn_emailsentiment_UserEntityInstanceDatas` | [msdyn_emailsentiment](msdyn_emailsentiment.md) | `objectid` | `objectid_msdyn_emailsentiment` |
| `msdyn_emailsentiment_ProcessSession` | [msdyn_emailsentiment](msdyn_emailsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailsentiment` |
| `msdyn_emailsentiment_BulkDeleteFailures` | [msdyn_emailsentiment](msdyn_emailsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailsentiment` |
| `msdyn_emailsentiment_PrincipalObjectAttributeAccesses` | [msdyn_emailsentiment](msdyn_emailsentiment.md) | `objectid` | `objectid_msdyn_emailsentiment` |


## Source

Generated from [msdyn_emailsentiment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_emailsentiment')) on 2026-05-07.