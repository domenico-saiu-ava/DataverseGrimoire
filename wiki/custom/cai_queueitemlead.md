---
logical: "cai_queueitemlead"
display: "Elemento Coda Lead"
entitySetName: "cai_queueitemleads"
primaryId: "cai_queueitemleadid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento Coda Lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_queueitemlead` |
| Display name | Elemento Coda Lead |
| Display (plural) | Elemento Coda Leads |
| Schema name | `cai_queueitemlead` |
| Entity set (Web API) | `cai_queueitemleads` |
| Primary id attribute | `cai_queueitemleadid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_queueitemleads?$select=cai_name&$top=10
GET /api/data/v9.2/cai_queueitemleads(<guid>)
POST /api/data/v9.2/cai_queueitemleads
PATCH /api/data/v9.2/cai_queueitemleads(<guid>)
DELETE /api/data/v9.2/cai_queueitemleads(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`cai_leadid`, `cai_name`, `cai_queueitemid`, `cai_queueitemleadid`, `cai_relationship`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_queueitemlead_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_queueitemlead_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_queueitemlead_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_queueitemlead_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_queueitemlead` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_queueitemlead` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_queueitemlead` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_queueitemlead` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `cai_queueitemlead_leadid_lead` | [lead](lead.md) | `cai_leadid` | `cai_leadid` |
| `cai_queueitemlead_queueitemid_queueitem` | [queueitem](queueitem.md) | `cai_queueitemid` | `cai_queueitemid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_queueitemlead_SyncErrors` | [cai_queueitemlead](cai_queueitemlead.md) | `regardingobjectid` | `regardingobjectid_cai_queueitemlead` |
| `cai_queueitemlead_DuplicateMatchingRecord` | [cai_queueitemlead](cai_queueitemlead.md) | `duplicaterecordid` | `duplicaterecordid_cai_queueitemlead` |
| `cai_queueitemlead_DuplicateBaseRecord` | [cai_queueitemlead](cai_queueitemlead.md) | `baserecordid` | `baserecordid_cai_queueitemlead` |
| `cai_queueitemlead_AsyncOperations` | [cai_queueitemlead](cai_queueitemlead.md) | `regardingobjectid` | `regardingobjectid_cai_queueitemlead` |
| `cai_queueitemlead_MailboxTrackingFolders` | [cai_queueitemlead](cai_queueitemlead.md) | `regardingobjectid` | `regardingobjectid_cai_queueitemlead` |
| `cai_queueitemlead_UserEntityInstanceDatas` | [cai_queueitemlead](cai_queueitemlead.md) | `objectid` | `objectid_cai_queueitemlead` |
| `cai_queueitemlead_ProcessSession` | [cai_queueitemlead](cai_queueitemlead.md) | `regardingobjectid` | `regardingobjectid_cai_queueitemlead` |
| `cai_queueitemlead_BulkDeleteFailures` | [cai_queueitemlead](cai_queueitemlead.md) | `regardingobjectid` | `regardingobjectid_cai_queueitemlead` |
| `cai_queueitemlead_PrincipalObjectAttributeAccesses` | [cai_queueitemlead](cai_queueitemlead.md) | `objectid` | `objectid_cai_queueitemlead` |


## Source

Generated from [cai_queueitemlead (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_queueitemlead')) on 2026-05-07.