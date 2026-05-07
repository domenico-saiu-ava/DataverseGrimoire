---
logical: "solutioncomponentconfiguration"
display: "Configurazione componente di soluzione"
entitySetName: "solutioncomponentconfigurations"
primaryId: "solutioncomponentconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione componente di soluzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `solutioncomponentconfiguration` |
| Display name | Configurazione componente di soluzione |
| Display (plural) | Configurazioni componente di soluzione |
| Schema name | `solutioncomponentconfiguration` |
| Entity set (Web API) | `solutioncomponentconfigurations` |
| Primary id attribute | `solutioncomponentconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/solutioncomponentconfigurations?$select=name&$top=10
GET /api/data/v9.2/solutioncomponentconfigurations(<guid>)
POST /api/data/v9.2/solutioncomponentconfigurations
PATCH /api/data/v9.2/solutioncomponentconfigurations(<guid>)
DELETE /api/data/v9.2/solutioncomponentconfigurations(<guid>)
```

## Attributes

Writable: **20** · Read-only: **14**

### Writable

`allowexportkeywithoutprefix`, `dependencyremovaldisabledforcomponents`, `entityid`, `fileformat`, `filescope`, `importsequencenumber`, `invokesubstitution`, `iscustomizable`, `isdisplayable`, `isonetoonechildcomponent`, `issoftdeleteenabled`, `isversioningenabled`, `keepactivecustomizationafterconversion`, `name`, `overriddencreatedon`, `solutioncomponentconfigurationid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_solutioncomponentconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_solutioncomponentconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_solutioncomponentconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_solutioncomponentconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_solutioncomponentconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `entity_solutioncomponentconfiguration` | [entity](entity.md) | `entityid` | `EntityId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `solutioncomponentconfiguration_SyncErrors` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentconfiguration` |
| `solutioncomponentconfiguration_DuplicateMatchingRecord` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_solutioncomponentconfiguration` |
| `solutioncomponentconfiguration_DuplicateBaseRecord` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `baserecordid` | `baserecordid_solutioncomponentconfiguration` |
| `solutioncomponentconfiguration_AsyncOperations` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentconfiguration` |
| `solutioncomponentconfiguration_MailboxTrackingFolders` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentconfiguration` |
| `solutioncomponentconfiguration_UserEntityInstanceDatas` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `objectid` | `objectid_solutioncomponentconfiguration` |
| `solutioncomponentconfiguration_ProcessSession` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentconfiguration` |
| `solutioncomponentconfiguration_BulkDeleteFailures` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentconfiguration` |
| `solutioncomponentconfiguration_PrincipalObjectAttributeAccesses` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `objectid` | `objectid_solutioncomponentconfiguration` |
| `solutioncomponentconfig_solutioncomponentattrconfig` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `solutioncomponentconfigurationid` | `solutioncomponentconfigurationid` |


## Source

Generated from [solutioncomponentconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='solutioncomponentconfiguration')) on 2026-05-07.