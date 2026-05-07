---
logical: "appactionrule"
display: "Regola di azione dell'app"
entitySetName: "appactionrules"
primaryId: "appactionruleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di azione dell'app

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appactionrule` |
| Display name | Regola di azione dell'app |
| Display (plural) | Regole di azione dell'app |
| Schema name | `appactionrule` |
| Entity set (Web API) | `appactionrules` |
| Primary id attribute | `appactionruleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appactionrules?$select=name&$top=10
GET /api/data/v9.2/appactionrules(<guid>)
POST /api/data/v9.2/appactionrules
PATCH /api/data/v9.2/appactionrules(<guid>)
DELETE /api/data/v9.2/appactionrules(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`appactionruleid`, `context`, `contextentity`, `contextvalue`, `definition`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appactionrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appactionrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appactionrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appactionrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appactionrule` | [organization](organization.md) | `organizationid` | `organizationid` |
| `entity_appactionrule_ContextEntity` | [entity](entity.md) | `contextentity` | `ContextEntity` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appactionrule_SyncErrors` | [appactionrule](appactionrule.md) | `regardingobjectid` | `regardingobjectid_appactionrule` |
| `appactionrule_AsyncOperations` | [appactionrule](appactionrule.md) | `regardingobjectid` | `regardingobjectid_appactionrule` |
| `appactionrule_MailboxTrackingFolders` | [appactionrule](appactionrule.md) | `regardingobjectid` | `regardingobjectid_appactionrule` |
| `appactionrule_UserEntityInstanceDatas` | [appactionrule](appactionrule.md) | `objectid` | `objectid_appactionrule` |
| `appactionrule_ProcessSession` | [appactionrule](appactionrule.md) | `regardingobjectid` | `regardingobjectid_appactionrule` |
| `appactionrule_BulkDeleteFailures` | [appactionrule](appactionrule.md) | `regardingobjectid` | `regardingobjectid_appactionrule` |
| `appactionrule_PrincipalObjectAttributeAccesses` | [appactionrule](appactionrule.md) | `objectid` | `objectid_appactionrule` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appaction_appactionrule_classicrules` | [appaction](appaction.md) | _n/a_ | `appaction_appactionrule_classicrules` |
| `appactionrule_webresource_scripts` | [webresource](webresource.md) | _n/a_ | `appactionrule_webresource_scripts` |

## Source

Generated from [appactionrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appactionrule')) on 2026-05-07.