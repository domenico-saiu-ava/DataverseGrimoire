---
logical: "msdyn_conversationtopicsetting"
display: "Impostazione dell'argomento di conversazione"
entitySetName: "msdyn_conversationtopicsettings"
primaryId: "msdyn_conversationtopicsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione dell'argomento di conversazione

Entità impostazione dell'argomento di conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationtopicsetting` |
| Display name | Impostazione dell'argomento di conversazione |
| Display (plural) | Impostazioni dell'argomento di conversazione |
| Schema name | `msdyn_conversationtopicsetting` |
| Entity set (Web API) | `msdyn_conversationtopicsettings` |
| Primary id attribute | `msdyn_conversationtopicsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationtopicsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationtopicsettings(<guid>)
POST /api/data/v9.2/msdyn_conversationtopicsettings
PATCH /api/data/v9.2/msdyn_conversationtopicsettings(<guid>)
DELETE /api/data/v9.2/msdyn_conversationtopicsettings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_conversationtopicsettingid`, `msdyn_enabled`, `msdyn_ignorelist`, `msdyn_name`, `msdyn_topicautomationenabled`, `msdyn_topictraininglanguage`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationtopicsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationtopicsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationtopicsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationtopicsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_conversationtopicsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationtopicsetting_SyncErrors` | [msdyn_conversationtopicsetting](msdyn_conversationtopicsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopicsetting` |
| `msdyn_conversationtopicsetting_AsyncOperations` | [msdyn_conversationtopicsetting](msdyn_conversationtopicsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopicsetting` |
| `msdyn_conversationtopicsetting_MailboxTrackingFolders` | [msdyn_conversationtopicsetting](msdyn_conversationtopicsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopicsetting` |
| `msdyn_conversationtopicsetting_UserEntityInstanceDatas` | [msdyn_conversationtopicsetting](msdyn_conversationtopicsetting.md) | `objectid` | `objectid_msdyn_conversationtopicsetting` |
| `msdyn_conversationtopicsetting_ProcessSession` | [msdyn_conversationtopicsetting](msdyn_conversationtopicsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopicsetting` |
| `msdyn_conversationtopicsetting_BulkDeleteFailures` | [msdyn_conversationtopicsetting](msdyn_conversationtopicsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopicsetting` |
| `msdyn_conversationtopicsetting_PrincipalObjectAttributeAccesses` | [msdyn_conversationtopicsetting](msdyn_conversationtopicsetting.md) | `objectid` | `objectid_msdyn_conversationtopicsetting` |


## Source

Generated from [msdyn_conversationtopicsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationtopicsetting')) on 2026-05-07.