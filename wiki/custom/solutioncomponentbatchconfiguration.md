---
logical: "solutioncomponentbatchconfiguration"
display: "Configurazione batch componente di soluzione"
entitySetName: "solutioncomponentbatchconfigurations"
primaryId: "solutioncomponentbatchconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione batch componente di soluzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `solutioncomponentbatchconfiguration` |
| Display name | Configurazione batch componente di soluzione |
| Display (plural) | Configurazioni batch componente di soluzione |
| Schema name | `solutioncomponentbatchconfiguration` |
| Entity set (Web API) | `solutioncomponentbatchconfigurations` |
| Primary id attribute | `solutioncomponentbatchconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/solutioncomponentbatchconfigurations?$select=name&$top=10
GET /api/data/v9.2/solutioncomponentbatchconfigurations(<guid>)
POST /api/data/v9.2/solutioncomponentbatchconfigurations
PATCH /api/data/v9.2/solutioncomponentbatchconfigurations(<guid>)
DELETE /api/data/v9.2/solutioncomponentbatchconfigurations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `name`, `operation`, `overriddencreatedon`, `ownerid`, `primaryentity`, `relatedentity`, `solutioncomponentbatchconfigurationid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_solutioncomponentbatchconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_solutioncomponentbatchconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_solutioncomponentbatchconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_solutioncomponentbatchconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_solutioncomponentbatchconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_solutioncomponentbatchconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_solutioncomponentbatchconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_solutioncomponentbatchconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `entity_solutioncomponentbatchconfiguration_PrimaryEntity` | [entity](entity.md) | `primaryentity` | `PrimaryEntity` |
| `entity_solutioncomponentbatchconfiguration_RelatedEntity` | [entity](entity.md) | `relatedentity` | `RelatedEntity` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `solutioncomponentbatchconfiguration_SyncErrors` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentbatchconfiguration_DuplicateMatchingRecord` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_solutioncomponentbatchconfiguration` |
| `solutioncomponentbatchconfiguration_DuplicateBaseRecord` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `baserecordid` | `baserecordid_solutioncomponentbatchconfiguration` |
| `solutioncomponentbatchconfiguration_AsyncOperations` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentbatchconfiguration_MailboxTrackingFolders` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentbatchconfiguration_UserEntityInstanceDatas` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `objectid` | `objectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentbatchconfiguration_ProcessSession` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentbatchconfiguration_BulkDeleteFailures` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `objectid` | `objectid_solutioncomponentbatchconfiguration` |


## Source

Generated from [solutioncomponentbatchconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='solutioncomponentbatchconfiguration')) on 2026-05-07.