---
logical: "msdyn_consoleapplicationtype"
display: "Tipo di applicazione (deprecato)"
entitySetName: "msdyn_consoleapplicationtypes"
primaryId: "msdyn_consoleapplicationtypeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tipo di applicazione (deprecato)

Definisci un pageType UCI. Per ogni pageType definisci i parametri che devono essere parte del modello per questo tipo di applicazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_consoleapplicationtype` |
| Display name | Tipo di applicazione (deprecato) |
| Display (plural) | ConsoleApplicationTypes (deprecato) |
| Schema name | `msdyn_consoleapplicationtype` |
| Entity set (Web API) | `msdyn_consoleapplicationtypes` |
| Primary id attribute | `msdyn_consoleapplicationtypeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_consoleapplicationtypes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_consoleapplicationtypes(<guid>)
POST /api/data/v9.2/msdyn_consoleapplicationtypes
PATCH /api/data/v9.2/msdyn_consoleapplicationtypes(<guid>)
DELETE /api/data/v9.2/msdyn_consoleapplicationtypes(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_consoleapplicationtypeid`, `msdyn_displayname`, `msdyn_name`, `msdyn_renderingorder`, `msdyn_templateparameters`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_consoleapplicationtype_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_consoleapplicationtype_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_consoleapplicationtype_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_consoleapplicationtype_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_consoleapplicationtype` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_consoleapplicationtype_SyncErrors` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtype` |
| `msdyn_consoleapplicationtype_DuplicateMatchingRecord` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_consoleapplicationtype` |
| `msdyn_consoleapplicationtype_DuplicateBaseRecord` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | `baserecordid` | `baserecordid_msdyn_consoleapplicationtype` |
| `msdyn_consoleapplicationtype_AsyncOperations` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtype` |
| `msdyn_consoleapplicationtype_MailboxTrackingFolders` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtype` |
| `msdyn_consoleapplicationtype_UserEntityInstanceDatas` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | `objectid` | `objectid_msdyn_consoleapplicationtype` |
| `msdyn_consoleapplicationtype_ProcessSession` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtype` |
| `msdyn_consoleapplicationtype_BulkDeleteFailures` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_consoleapplicationtype` |
| `msdyn_consoleapplicationtype_PrincipalObjectAttributeAccesses` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | `objectid` | `objectid_msdyn_consoleapplicationtype` |
| `msdyn_msdyn_consoleapplicationtype_msdyn_consoleapplicationtemplate_PageType` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | `msdyn_pagetype` | `msdyn_PageType` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationtype_msdyn_consol` | [msdyn_consoleappparameterdefinition](msdyn_consoleappparameterdefinition.md) | _n/a_ | `msdyn_msdyn_consoleapplicationtype_msdyn_consol` |

## Source

Generated from [msdyn_consoleapplicationtype (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_consoleapplicationtype')) on 2026-05-07.