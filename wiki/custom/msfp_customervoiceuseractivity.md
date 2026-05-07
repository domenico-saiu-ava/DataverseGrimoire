---
logical: "msfp_customervoiceuseractivity"
display: "Attività utente Customer Voice"
entitySetName: "msfp_customervoiceuseractivities"
primaryId: "msfp_customervoiceuseractivityid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Attività utente Customer Voice

Un'entità per archiviare le attività più recenti di un utente vocale del cliente.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_customervoiceuseractivity` |
| Display name | Attività utente Customer Voice |
| Display (plural) | Attività utente Customer Voice |
| Schema name | `msfp_customervoiceuseractivity` |
| Entity set (Web API) | `msfp_customervoiceuseractivities` |
| Primary id attribute | `msfp_customervoiceuseractivityid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_customervoiceuseractivities?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_customervoiceuseractivities(<guid>)
POST /api/data/v9.2/msfp_customervoiceuseractivities
PATCH /api/data/v9.2/msfp_customervoiceuseractivities(<guid>)
DELETE /api/data/v9.2/msfp_customervoiceuseractivities(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_customervoiceuseractivityid`, `msfp_name`, `msfp_project`, `msfp_resourceid`, `msfp_resourcename`, `msfp_resourcetype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_customervoiceuseractivity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_customervoiceuseractivity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_customervoiceuseractivity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_customervoiceuseractivity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_customervoiceuseractivity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_customervoiceuseractivity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_customervoiceuseractivity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_customervoiceuseractivity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_msfp_project_msfp_customervoiceuseractivity_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_customervoiceuseractivity_SyncErrors` | [msfp_customervoiceuseractivity](msfp_customervoiceuseractivity.md) | `regardingobjectid` | `regardingobjectid_msfp_customervoiceuseractivity` |
| `msfp_customervoiceuseractivity_AsyncOperations` | [msfp_customervoiceuseractivity](msfp_customervoiceuseractivity.md) | `regardingobjectid` | `regardingobjectid_msfp_customervoiceuseractivity` |
| `msfp_customervoiceuseractivity_MailboxTrackingFolders` | [msfp_customervoiceuseractivity](msfp_customervoiceuseractivity.md) | `regardingobjectid` | `regardingobjectid_msfp_customervoiceuseractivity` |
| `msfp_customervoiceuseractivity_UserEntityInstanceDatas` | [msfp_customervoiceuseractivity](msfp_customervoiceuseractivity.md) | `objectid` | `objectid_msfp_customervoiceuseractivity` |
| `msfp_customervoiceuseractivity_ProcessSession` | [msfp_customervoiceuseractivity](msfp_customervoiceuseractivity.md) | `regardingobjectid` | `regardingobjectid_msfp_customervoiceuseractivity` |
| `msfp_customervoiceuseractivity_BulkDeleteFailures` | [msfp_customervoiceuseractivity](msfp_customervoiceuseractivity.md) | `regardingobjectid` | `regardingobjectid_msfp_customervoiceuseractivity` |
| `msfp_customervoiceuseractivity_PrincipalObjectAttributeAccesses` | [msfp_customervoiceuseractivity](msfp_customervoiceuseractivity.md) | `objectid` | `objectid_msfp_customervoiceuseractivity` |


## Source

Generated from [msfp_customervoiceuseractivity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_customervoiceuseractivity')) on 2026-05-07.