---
logical: "msdyn_conversationsummarysetting"
display: "Impostazione riepilogo della conversazione"
entitySetName: "msdyn_conversationsummarysettings"
primaryId: "msdyn_conversationsummarysettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione riepilogo della conversazione

Entità impostazioni riepilogo della conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationsummarysetting` |
| Display name | Impostazione riepilogo della conversazione |
| Display (plural) | Impostazioni riepilogo della conversazione |
| Schema name | `msdyn_conversationsummarysetting` |
| Entity set (Web API) | `msdyn_conversationsummarysettings` |
| Primary id attribute | `msdyn_conversationsummarysettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationsummarysettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationsummarysettings(<guid>)
POST /api/data/v9.2/msdyn_conversationsummarysettings
PATCH /api/data/v9.2/msdyn_conversationsummarysettings(<guid>)
DELETE /api/data/v9.2/msdyn_conversationsummarysettings(<guid>)
```

## Attributes

Writable: **16** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_allagentsenabled`, `msdyn_conversationends`, `msdyn_conversationsummarysettingid`, `msdyn_enabledforagents`, `msdyn_name`, `msdyn_previewlanguages`, `msdyn_showcreatecase`, `msdyn_systemagentlist`, `msdyn_whenagentjoins`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationsummarysetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsummarysetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsummarysetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsummarysetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_conversationsummarysetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsummarysetting_SyncErrors` | [msdyn_conversationsummarysetting](msdyn_conversationsummarysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummarysetting` |
| `msdyn_conversationsummarysetting_AsyncOperations` | [msdyn_conversationsummarysetting](msdyn_conversationsummarysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummarysetting` |
| `msdyn_conversationsummarysetting_MailboxTrackingFolders` | [msdyn_conversationsummarysetting](msdyn_conversationsummarysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummarysetting` |
| `msdyn_conversationsummarysetting_UserEntityInstanceDatas` | [msdyn_conversationsummarysetting](msdyn_conversationsummarysetting.md) | `objectid` | `objectid_msdyn_conversationsummarysetting` |
| `msdyn_conversationsummarysetting_ProcessSession` | [msdyn_conversationsummarysetting](msdyn_conversationsummarysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummarysetting` |
| `msdyn_conversationsummarysetting_BulkDeleteFailures` | [msdyn_conversationsummarysetting](msdyn_conversationsummarysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummarysetting` |
| `msdyn_conversationsummarysetting_PrincipalObjectAttributeAccesses` | [msdyn_conversationsummarysetting](msdyn_conversationsummarysetting.md) | `objectid` | `objectid_msdyn_conversationsummarysetting` |


## Source

Generated from [msdyn_conversationsummarysetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationsummarysetting')) on 2026-05-07.