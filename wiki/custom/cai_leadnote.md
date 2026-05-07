---
logical: "cai_leadnote"
display: "Nota Lead"
entitySetName: "cai_leadnotes"
primaryId: "cai_leadnoteid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Nota Lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_leadnote` |
| Display name | Nota Lead |
| Display (plural) | Note Lead |
| Schema name | `cai_leadnote` |
| Entity set (Web API) | `cai_leadnotes` |
| Primary id attribute | `cai_leadnoteid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_leadnotes?$select=cai_name&$top=10
GET /api/data/v9.2/cai_leadnotes(<guid>)
POST /api/data/v9.2/cai_leadnotes
PATCH /api/data/v9.2/cai_leadnotes(<guid>)
DELETE /api/data/v9.2/cai_leadnotes(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`cai_leadid`, `cai_leadnoteid`, `cai_name`, `cai_note`, `cai_sequencenumber`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_leadnote_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_leadnote_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_leadnote_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_leadnote_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_leadnote` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_leadnote` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_leadnote` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_leadnote` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `cai_leadnote_leadid_lead` | [lead](lead.md) | `cai_leadid` | `cai_leadid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_leadnote_SyncErrors` | [cai_leadnote](cai_leadnote.md) | `regardingobjectid` | `regardingobjectid_cai_leadnote` |
| `cai_leadnote_AsyncOperations` | [cai_leadnote](cai_leadnote.md) | `regardingobjectid` | `regardingobjectid_cai_leadnote` |
| `cai_leadnote_MailboxTrackingFolders` | [cai_leadnote](cai_leadnote.md) | `regardingobjectid` | `regardingobjectid_cai_leadnote` |
| `cai_leadnote_UserEntityInstanceDatas` | [cai_leadnote](cai_leadnote.md) | `objectid` | `objectid_cai_leadnote` |
| `cai_leadnote_ProcessSession` | [cai_leadnote](cai_leadnote.md) | `regardingobjectid` | `regardingobjectid_cai_leadnote` |
| `cai_leadnote_BulkDeleteFailures` | [cai_leadnote](cai_leadnote.md) | `regardingobjectid` | `regardingobjectid_cai_leadnote` |
| `cai_leadnote_PrincipalObjectAttributeAccesses` | [cai_leadnote](cai_leadnote.md) | `objectid` | `objectid_cai_leadnote` |


## Source

Generated from [cai_leadnote (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_leadnote')) on 2026-05-07.