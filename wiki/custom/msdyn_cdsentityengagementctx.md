---
logical: "msdyn_cdsentityengagementctx"
display: "Contesto distribuzione entità"
entitySetName: "msdyn_cdsentityengagementctxes"
primaryId: "msdyn_cdsentityengagementctxid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contesto distribuzione entità

Contesti distribuzione entità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_cdsentityengagementctx` |
| Display name | Contesto distribuzione entità |
| Display (plural) | Contesti distribuzione entità |
| Schema name | `msdyn_cdsentityengagementctx` |
| Entity set (Web API) | `msdyn_cdsentityengagementctxes` |
| Primary id attribute | `msdyn_cdsentityengagementctxid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_cdsentityengagementctxes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_cdsentityengagementctxes(<guid>)
POST /api/data/v9.2/msdyn_cdsentityengagementctxes
PATCH /api/data/v9.2/msdyn_cdsentityengagementctxes(<guid>)
DELETE /api/data/v9.2/msdyn_cdsentityengagementctxes(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_cdsentityengagementctxid`, `msdyn_engagedentitysetname`, `msdyn_liveworkitemid`, `msdyn_name`, `msdyn_recordid`, `msdyn_workitemrelation`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_cdsentityengagementctx_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_cdsentityengagementctx_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_cdsentityengagementctx_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_cdsentityengagementctx_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_cdsentityengagementctx` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_cdsentityengagementctx` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_cdsentityengagementctx` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_cdsentityengagementctx` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_cdsentityengagementctx_SyncErrors` | [msdyn_cdsentityengagementctx](msdyn_cdsentityengagementctx.md) | `regardingobjectid` | `regardingobjectid_msdyn_cdsentityengagementctx` |
| `msdyn_cdsentityengagementctx_AsyncOperations` | [msdyn_cdsentityengagementctx](msdyn_cdsentityengagementctx.md) | `regardingobjectid` | `regardingobjectid_msdyn_cdsentityengagementctx` |
| `msdyn_cdsentityengagementctx_MailboxTrackingFolders` | [msdyn_cdsentityengagementctx](msdyn_cdsentityengagementctx.md) | `regardingobjectid` | `regardingobjectid_msdyn_cdsentityengagementctx` |
| `msdyn_cdsentityengagementctx_UserEntityInstanceDatas` | [msdyn_cdsentityengagementctx](msdyn_cdsentityengagementctx.md) | `objectid` | `objectid_msdyn_cdsentityengagementctx` |
| `msdyn_cdsentityengagementctx_ProcessSession` | [msdyn_cdsentityengagementctx](msdyn_cdsentityengagementctx.md) | `regardingobjectid` | `regardingobjectid_msdyn_cdsentityengagementctx` |
| `msdyn_cdsentityengagementctx_BulkDeleteFailures` | [msdyn_cdsentityengagementctx](msdyn_cdsentityengagementctx.md) | `regardingobjectid` | `regardingobjectid_msdyn_cdsentityengagementctx` |
| `msdyn_cdsentityengagementctx_PrincipalObjectAttributeAccesses` | [msdyn_cdsentityengagementctx](msdyn_cdsentityengagementctx.md) | `objectid` | `objectid_msdyn_cdsentityengagementctx` |


## Source

Generated from [msdyn_cdsentityengagementctx (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_cdsentityengagementctx')) on 2026-05-07.