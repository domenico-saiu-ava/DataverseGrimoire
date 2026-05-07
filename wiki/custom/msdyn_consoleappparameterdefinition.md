---
logical: "msdyn_consoleappparameterdefinition"
display: "Definizione dei parametri delle app (deprecato)"
entitySetName: "msdyn_consoleappparameterdefinitions"
primaryId: "msdyn_consoleappparameterdefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Definizione dei parametri delle app (deprecato)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_consoleappparameterdefinition` |
| Display name | Definizione dei parametri delle app (deprecato) |
| Display (plural) | Definizioni dei parametri delle app (deprecato) |
| Schema name | `msdyn_consoleappparameterdefinition` |
| Entity set (Web API) | `msdyn_consoleappparameterdefinitions` |
| Primary id attribute | `msdyn_consoleappparameterdefinitionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_consoleappparameterdefinitions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_consoleappparameterdefinitions(<guid>)
POST /api/data/v9.2/msdyn_consoleappparameterdefinitions
PATCH /api/data/v9.2/msdyn_consoleappparameterdefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_consoleappparameterdefinitions(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_consoleappparameterdefinitionid`, `msdyn_defaultvalue`, `msdyn_isruntime`, `msdyn_name`, `msdyn_runtimetype`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_consoleappparameterdefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_consoleappparameterdefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_consoleappparameterdefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_consoleappparameterdefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_consoleappparameterdefinition` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_consoleappparameterdefinition_SyncErrors` | [msdyn_consoleappparameterdefinition](msdyn_consoleappparameterdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleappparameterdefinition` |
| `msdyn_consoleappparameterdefinition_AsyncOperations` | [msdyn_consoleappparameterdefinition](msdyn_consoleappparameterdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleappparameterdefinition` |
| `msdyn_consoleappparameterdefinition_MailboxTrackingFolders` | [msdyn_consoleappparameterdefinition](msdyn_consoleappparameterdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleappparameterdefinition` |
| `msdyn_consoleappparameterdefinition_UserEntityInstanceDatas` | [msdyn_consoleappparameterdefinition](msdyn_consoleappparameterdefinition.md) | `objectid` | `objectid_msdyn_consoleappparameterdefinition` |
| `msdyn_consoleappparameterdefinition_ProcessSession` | [msdyn_consoleappparameterdefinition](msdyn_consoleappparameterdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleappparameterdefinition` |
| `msdyn_consoleappparameterdefinition_BulkDeleteFailures` | [msdyn_consoleappparameterdefinition](msdyn_consoleappparameterdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleappparameterdefinition` |
| `msdyn_consoleappparameterdefinition_PrincipalObjectAttributeAccesses` | [msdyn_consoleappparameterdefinition](msdyn_consoleappparameterdefinition.md) | `objectid` | `objectid_msdyn_consoleappparameterdefinition` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationtype_msdyn_consol` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | _n/a_ | `msdyn_msdyn_consoleapplicationtype_msdyn_consol` |

## Source

Generated from [msdyn_consoleappparameterdefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_consoleappparameterdefinition')) on 2026-05-07.