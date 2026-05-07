---
logical: "cai_leadoutcomeactivitycssessionlead"
display: "Sessione di Esitazione Lead"
entitySetName: "cai_leadoutcomeactivitycssessionleads"
primaryId: "cai_leadoutcomeactivitycssessionleadid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sessione di Esitazione Lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_leadoutcomeactivitycssessionlead` |
| Display name | Sessione di Esitazione Lead |
| Display (plural) | Sessione di Esitazione Leads |
| Schema name | `cai_leadoutcomeactivitycssessionlead` |
| Entity set (Web API) | `cai_leadoutcomeactivitycssessionleads` |
| Primary id attribute | `cai_leadoutcomeactivitycssessionleadid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_leadoutcomeactivitycssessionleads?$select=cai_name&$top=10
GET /api/data/v9.2/cai_leadoutcomeactivitycssessionleads(<guid>)
POST /api/data/v9.2/cai_leadoutcomeactivitycssessionleads
PATCH /api/data/v9.2/cai_leadoutcomeactivitycssessionleads(<guid>)
DELETE /api/data/v9.2/cai_leadoutcomeactivitycssessionleads(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`cai_annotation`, `cai_futureinterestdate`, `cai_leadid`, `cai_leadoutcomeactivitycssessionid`, `cai_leadoutcomeactivitycssessionleadid`, `cai_leadoutcomeactivityid`, `cai_leadoutcomeid`, `cai_leadoutcomenewappointment`, `cai_leadoutcomereason`, `cai_name`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_leadoutcomeactivitycssessionlead_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_leadoutcomeactivitycssessionlead_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_leadoutcomeactivitycssessionlead_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_leadoutcomeactivitycssessionlead_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_cai_leadoutcomeactivitycssessionlead` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_cai_leadoutcomeactivitycssessionlead` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_cai_leadoutcomeactivitycssessionlead` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_cai_leadoutcomeactivitycssessionlead` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `cai_leadoutcomeactivitycssessionlead_leadoutcomeactivityid_cai_leadoutcomeactivity` | [cai_leadoutcomeactivity](cai_leadoutcomeactivity.md) | `cai_leadoutcomeactivityid` | `cai_leadoutcomeactivityid` |
| `cai_leadoutcomeactivitycssessionlead_leadoutcomeactivitycssessionid_cai_leadoutcomeactivitycssessi` | [cai_leadoutcomeactivitycssession](cai_leadoutcomeactivitycssession.md) | `cai_leadoutcomeactivitycssessionid` | `cai_leadoutcomeactivitycssessionid` |
| `cai_leadoutcomeactivitycssessionlead_leadid_lead` | [lead](lead.md) | `cai_leadid` | `cai_leadid` |
| `cai_leadoutcomeactivitycssessionlead_leadoutcomeid_cai_leadoutcome` | [cai_leadoutcome](cai_leadoutcome.md) | `cai_leadoutcomeid` | `cai_leadoutcomeid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_leadoutcomeactivitycssessionlead_SyncErrors` | [cai_leadoutcomeactivitycssessionlead](cai_leadoutcomeactivitycssessionlead.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivitycssessionlead` |
| `cai_leadoutcomeactivitycssessionlead_AsyncOperations` | [cai_leadoutcomeactivitycssessionlead](cai_leadoutcomeactivitycssessionlead.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivitycssessionlead` |
| `cai_leadoutcomeactivitycssessionlead_MailboxTrackingFolders` | [cai_leadoutcomeactivitycssessionlead](cai_leadoutcomeactivitycssessionlead.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivitycssessionlead` |
| `cai_leadoutcomeactivitycssessionlead_UserEntityInstanceDatas` | [cai_leadoutcomeactivitycssessionlead](cai_leadoutcomeactivitycssessionlead.md) | `objectid` | `objectid_cai_leadoutcomeactivitycssessionlead` |
| `cai_leadoutcomeactivitycssessionlead_ProcessSession` | [cai_leadoutcomeactivitycssessionlead](cai_leadoutcomeactivitycssessionlead.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivitycssessionlead` |
| `cai_leadoutcomeactivitycssessionlead_BulkDeleteFailures` | [cai_leadoutcomeactivitycssessionlead](cai_leadoutcomeactivitycssessionlead.md) | `regardingobjectid` | `regardingobjectid_cai_leadoutcomeactivitycssessionlead` |
| `cai_leadoutcomeactivitycssessionlead_PrincipalObjectAttributeAccesses` | [cai_leadoutcomeactivitycssessionlead](cai_leadoutcomeactivitycssessionlead.md) | `objectid` | `objectid_cai_leadoutcomeactivitycssessionlead` |


## Source

Generated from [cai_leadoutcomeactivitycssessionlead (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_leadoutcomeactivitycssessionlead')) on 2026-05-07.