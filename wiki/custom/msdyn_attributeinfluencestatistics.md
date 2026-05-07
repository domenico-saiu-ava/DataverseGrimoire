---
logical: "msdyn_attributeinfluencestatistics"
display: "Statistiche influenza attributo"
entitySetName: "msdyn_attributeinfluencestatisticses"
primaryId: "msdyn_attributeinfluencestatisticsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Statistiche influenza attributo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_attributeinfluencestatistics` |
| Display name | Statistiche influenza attributo |
| Display (plural) | msdyn_attributeinfluencestatistics_set |
| Schema name | `msdyn_attributeinfluencestatistics` |
| Entity set (Web API) | `msdyn_attributeinfluencestatisticses` |
| Primary id attribute | `msdyn_attributeinfluencestatisticsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_attributeinfluencestatisticses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_attributeinfluencestatisticses(<guid>)
POST /api/data/v9.2/msdyn_attributeinfluencestatisticses
PATCH /api/data/v9.2/msdyn_attributeinfluencestatisticses(<guid>)
DELETE /api/data/v9.2/msdyn_attributeinfluencestatisticses(<guid>)
```

## Attributes

Writable: **20** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_attributeinfluencestatisticsid`, `msdyn_attributename`, `msdyn_entityname`, `msdyn_ignoreifblank`, `msdyn_importance`, `msdyn_iscrmattribute`, `msdyn_isrecommended`, `msdyn_isvalid`, `msdyn_modelid`, `msdyn_name`, `msdyn_notselectedreason`, `msdyn_predictionid`, `msdyn_statistics`, `msdyn_submodelid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_attributeinfluencestatistics_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_attributeinfluencestatistics_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_attributeinfluencestatistics_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_attributeinfluencestatistics_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_attributeinfluencestatistics` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_attributeinfluencestatistics_SyncErrors` | [msdyn_attributeinfluencestatistics](msdyn_attributeinfluencestatistics.md) | `regardingobjectid` | `regardingobjectid_msdyn_attributeinfluencestatistics` |
| `msdyn_attributeinfluencestatistics_DuplicateMatchingRecord` | [msdyn_attributeinfluencestatistics](msdyn_attributeinfluencestatistics.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_attributeinfluencestatistics` |
| `msdyn_attributeinfluencestatistics_DuplicateBaseRecord` | [msdyn_attributeinfluencestatistics](msdyn_attributeinfluencestatistics.md) | `baserecordid` | `baserecordid_msdyn_attributeinfluencestatistics` |
| `msdyn_attributeinfluencestatistics_AsyncOperations` | [msdyn_attributeinfluencestatistics](msdyn_attributeinfluencestatistics.md) | `regardingobjectid` | `regardingobjectid_msdyn_attributeinfluencestatistics` |
| `msdyn_attributeinfluencestatistics_MailboxTrackingFolders` | [msdyn_attributeinfluencestatistics](msdyn_attributeinfluencestatistics.md) | `regardingobjectid` | `regardingobjectid_msdyn_attributeinfluencestatistics` |
| `msdyn_attributeinfluencestatistics_UserEntityInstanceDatas` | [msdyn_attributeinfluencestatistics](msdyn_attributeinfluencestatistics.md) | `objectid` | `objectid_msdyn_attributeinfluencestatistics` |
| `msdyn_attributeinfluencestatistics_ProcessSession` | [msdyn_attributeinfluencestatistics](msdyn_attributeinfluencestatistics.md) | `regardingobjectid` | `regardingobjectid_msdyn_attributeinfluencestatistics` |
| `msdyn_attributeinfluencestatistics_BulkDeleteFailures` | [msdyn_attributeinfluencestatistics](msdyn_attributeinfluencestatistics.md) | `regardingobjectid` | `regardingobjectid_msdyn_attributeinfluencestatistics` |
| `msdyn_attributeinfluencestatistics_PrincipalObjectAttributeAccesses` | [msdyn_attributeinfluencestatistics](msdyn_attributeinfluencestatistics.md) | `objectid` | `objectid_msdyn_attributeinfluencestatistics` |


## Source

Generated from [msdyn_attributeinfluencestatistics (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_attributeinfluencestatistics')) on 2026-05-07.