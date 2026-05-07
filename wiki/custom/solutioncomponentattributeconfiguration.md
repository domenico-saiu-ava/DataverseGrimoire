---
logical: "solutioncomponentattributeconfiguration"
display: "Configurazione attributo componente di soluzione"
entitySetName: "solutioncomponentattributeconfigurations"
primaryId: "solutioncomponentattributeconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione attributo componente di soluzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `solutioncomponentattributeconfiguration` |
| Display name | Configurazione attributo componente di soluzione |
| Display (plural) | Configurazioni attributo componente di soluzione |
| Schema name | `solutioncomponentattributeconfiguration` |
| Entity set (Web API) | `solutioncomponentattributeconfigurations` |
| Primary id attribute | `solutioncomponentattributeconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/solutioncomponentattributeconfigurations?$select=name&$top=10
GET /api/data/v9.2/solutioncomponentattributeconfigurations(<guid>)
POST /api/data/v9.2/solutioncomponentattributeconfigurations
PATCH /api/data/v9.2/solutioncomponentattributeconfigurations(<guid>)
DELETE /api/data/v9.2/solutioncomponentattributeconfigurations(<guid>)
```

## Attributes

Writable: **20** · Read-only: **14**

### Writable

`attributeid`, `custommanagedbehaviortype`, `dependencyremovalcapability`, `encodingformat`, `fileextension`, `importsequencenumber`, `invokesubstitutionforattribute`, `iscustomizable`, `isenabledfordependencyextraction`, `isexportdisabled`, `isexportedasfile`, `isprefixedbytemplate`, `name`, `overriddencreatedon`, `solutioncomponentattributeconfigurationid`, `solutioncomponentconfigurationid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_solutioncomponentattributeconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_solutioncomponentattributeconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_solutioncomponentattributeconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_solutioncomponentattributeconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_solutioncomponentattributeconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `attribute_solutioncomponentattrconfig` | [attribute](attribute.md) | `attributeid` | `AttributeId` |
| `solutioncomponentconfig_solutioncomponentattrconfig` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `solutioncomponentconfigurationid` | `solutioncomponentconfigurationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `solutioncomponentattributeconfiguration_SyncErrors` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentattributeconfiguration_DuplicateMatchingRecord` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_solutioncomponentattributeconfiguration` |
| `solutioncomponentattributeconfiguration_DuplicateBaseRecord` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `baserecordid` | `baserecordid_solutioncomponentattributeconfiguration` |
| `solutioncomponentattributeconfiguration_AsyncOperations` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentattributeconfiguration_MailboxTrackingFolders` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentattributeconfiguration_UserEntityInstanceDatas` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `objectid` | `objectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentattributeconfiguration_ProcessSession` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentattributeconfiguration_BulkDeleteFailures` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `objectid` | `objectid_solutioncomponentattributeconfiguration` |


## Source

Generated from [solutioncomponentattributeconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='solutioncomponentattributeconfiguration')) on 2026-05-07.