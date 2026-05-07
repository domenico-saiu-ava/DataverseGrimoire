---
logical: "msdyn_externalcrm"
display: "External CRM"
entitySetName: "msdyn_externalcrms"
primaryId: "msdyn_externalcrmid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# External CRM

External CRM - Copilot for Sales

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_externalcrm` |
| Display name | External CRM |
| Display (plural) | External CRMs |
| Schema name | `msdyn_externalcrm` |
| Entity set (Web API) | `msdyn_externalcrms` |
| Primary id attribute | `msdyn_externalcrmid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_externalcrms?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_externalcrms(<guid>)
POST /api/data/v9.2/msdyn_externalcrms
PATCH /api/data/v9.2/msdyn_externalcrms(<guid>)
DELETE /api/data/v9.2/msdyn_externalcrms(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_crmenvironmenttype`, `msdyn_crmtype`, `msdyn_crmurl`, `msdyn_externalcrmid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_externalcrm_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_externalcrm_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_externalcrm_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_externalcrm_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_externalcrm` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_externalcrm` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_externalcrm` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_externalcrm` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_externalcrm_SyncErrors` | [msdyn_externalcrm](msdyn_externalcrm.md) | `regardingobjectid` | `regardingobjectid_msdyn_externalcrm` |
| `msdyn_externalcrm_DuplicateMatchingRecord` | [msdyn_externalcrm](msdyn_externalcrm.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_externalcrm` |
| `msdyn_externalcrm_DuplicateBaseRecord` | [msdyn_externalcrm](msdyn_externalcrm.md) | `baserecordid` | `baserecordid_msdyn_externalcrm` |
| `msdyn_externalcrm_AsyncOperations` | [msdyn_externalcrm](msdyn_externalcrm.md) | `regardingobjectid` | `regardingobjectid_msdyn_externalcrm` |
| `msdyn_externalcrm_MailboxTrackingFolders` | [msdyn_externalcrm](msdyn_externalcrm.md) | `regardingobjectid` | `regardingobjectid_msdyn_externalcrm` |
| `msdyn_externalcrm_UserEntityInstanceDatas` | [msdyn_externalcrm](msdyn_externalcrm.md) | `objectid` | `objectid_msdyn_externalcrm` |
| `msdyn_externalcrm_ProcessSession` | [msdyn_externalcrm](msdyn_externalcrm.md) | `regardingobjectid` | `regardingobjectid_msdyn_externalcrm` |
| `msdyn_externalcrm_BulkDeleteFailures` | [msdyn_externalcrm](msdyn_externalcrm.md) | `regardingobjectid` | `regardingobjectid_msdyn_externalcrm` |
| `msdyn_externalcrm_PrincipalObjectAttributeAccesses` | [msdyn_externalcrm](msdyn_externalcrm.md) | `objectid` | `objectid_msdyn_externalcrm` |
| `msdyn_msdyn_externalcrm_msdyn_externalrecord` | [msdyn_externalcrm](msdyn_externalcrm.md) | `msdyn_externalcrm` | `msdyn_externalcrm` |


## Source

Generated from [msdyn_externalcrm (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_externalcrm')) on 2026-05-07.