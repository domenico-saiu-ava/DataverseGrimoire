---
logical: "solutioncomponentrelationshipconfiguration"
display: "Configurazione relazione componente di soluzione"
entitySetName: "solutioncomponentrelationshipconfigurations"
primaryId: "solutioncomponentrelationshipconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione relazione componente di soluzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `solutioncomponentrelationshipconfiguration` |
| Display name | Configurazione relazione componente di soluzione |
| Display (plural) | Configurazioni relazione componente di soluzione |
| Schema name | `solutioncomponentrelationshipconfiguration` |
| Entity set (Web API) | `solutioncomponentrelationshipconfigurations` |
| Primary id attribute | `solutioncomponentrelationshipconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/solutioncomponentrelationshipconfigurations?$select=name&$top=10
GET /api/data/v9.2/solutioncomponentrelationshipconfigurations(<guid>)
POST /api/data/v9.2/solutioncomponentrelationshipconfigurations
PATCH /api/data/v9.2/solutioncomponentrelationshipconfigurations(<guid>)
DELETE /api/data/v9.2/solutioncomponentrelationshipconfigurations(<guid>)
```

## Attributes

Writable: **17** · Read-only: **14**

### Writable

`addrelatedcomponents`, `cascaderemovecomponents`, `entityrelationshipid`, `forceaddingmanagedrelatedcomponents`, `importsequencenumber`, `iscustomizable`, `name`, `nomissingdependencyforapimanagedsolution`, `overriddencreatedon`, `primaryentitydependencytype`, `respectparentrootcomponentbehavior`, `secondaryentitydependencytype`, `solutioncomponentrelationshipconfigurationid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_solutioncomponentrelationshipconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_solutioncomponentrelationshipconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_solutioncomponentrelationshipconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_solutioncomponentrelationshipconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_solutioncomponentrelationshipconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `entityrelationship_config` | [entityrelationship](entityrelationship.md) | `entityrelationshipid` | `EntityRelationshipId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `solutioncomponentrelationshipconfiguration_SyncErrors` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentrelationshipconfiguration` |
| `solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_solutioncomponentrelationshipconfiguration` |
| `solutioncomponentrelationshipconfiguration_DuplicateBaseRecord` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `baserecordid` | `baserecordid_solutioncomponentrelationshipconfiguration` |
| `solutioncomponentrelationshipconfiguration_AsyncOperations` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentrelationshipconfiguration` |
| `solutioncomponentrelationshipconfiguration_MailboxTrackingFolders` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentrelationshipconfiguration` |
| `solutioncomponentrelationshipconfiguration_UserEntityInstanceDatas` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `objectid` | `objectid_solutioncomponentrelationshipconfiguration` |
| `solutioncomponentrelationshipconfiguration_ProcessSession` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentrelationshipconfiguration` |
| `solutioncomponentrelationshipconfiguration_BulkDeleteFailures` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentrelationshipconfiguration` |
| `solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `objectid` | `objectid_solutioncomponentrelationshipconfiguration` |


## Source

Generated from [solutioncomponentrelationshipconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='solutioncomponentrelationshipconfiguration')) on 2026-05-07.