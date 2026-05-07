---
logical: "msdyn_agentresourceforecasting"
display: "Previsione risorse agente"
entitySetName: "msdyn_agentresourceforecastings"
primaryId: "msdyn_agentresourceforecastingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Previsione risorse agente

Previsione risorse agente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentresourceforecasting` |
| Display name | Previsione risorse agente |
| Display (plural) | Previsioni risorse agente |
| Schema name | `msdyn_agentresourceforecasting` |
| Entity set (Web API) | `msdyn_agentresourceforecastings` |
| Primary id attribute | `msdyn_agentresourceforecastingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentresourceforecastings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentresourceforecastings(<guid>)
POST /api/data/v9.2/msdyn_agentresourceforecastings
PATCH /api/data/v9.2/msdyn_agentresourceforecastings(<guid>)
DELETE /api/data/v9.2/msdyn_agentresourceforecastings(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_agentresourceforecastingid`, `msdyn_channel`, `msdyn_concurrency`, `msdyn_name`, `msdyn_servicetime`, `msdyn_shrinkage`, `msdyn_sla`, `msdyn_type`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_occhannelconfiguration_msdyn_agentresourceforecasting_channel` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `msdyn_channel` | `msdyn_channel` |
| `lk_msdyn_agentresourceforecasting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentresourceforecasting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentresourceforecasting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentresourceforecasting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_agentresourceforecasting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentresourceforecasting_SyncErrors` | [msdyn_agentresourceforecasting](msdyn_agentresourceforecasting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentresourceforecasting` |
| `msdyn_agentresourceforecasting_DuplicateMatchingRecord` | [msdyn_agentresourceforecasting](msdyn_agentresourceforecasting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentresourceforecasting` |
| `msdyn_agentresourceforecasting_DuplicateBaseRecord` | [msdyn_agentresourceforecasting](msdyn_agentresourceforecasting.md) | `baserecordid` | `baserecordid_msdyn_agentresourceforecasting` |
| `msdyn_agentresourceforecasting_AsyncOperations` | [msdyn_agentresourceforecasting](msdyn_agentresourceforecasting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentresourceforecasting` |
| `msdyn_agentresourceforecasting_MailboxTrackingFolders` | [msdyn_agentresourceforecasting](msdyn_agentresourceforecasting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentresourceforecasting` |
| `msdyn_agentresourceforecasting_UserEntityInstanceDatas` | [msdyn_agentresourceforecasting](msdyn_agentresourceforecasting.md) | `objectid` | `objectid_msdyn_agentresourceforecasting` |
| `msdyn_agentresourceforecasting_ProcessSession` | [msdyn_agentresourceforecasting](msdyn_agentresourceforecasting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentresourceforecasting` |
| `msdyn_agentresourceforecasting_BulkDeleteFailures` | [msdyn_agentresourceforecasting](msdyn_agentresourceforecasting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentresourceforecasting` |
| `msdyn_agentresourceforecasting_PrincipalObjectAttributeAccesses` | [msdyn_agentresourceforecasting](msdyn_agentresourceforecasting.md) | `objectid` | `objectid_msdyn_agentresourceforecasting` |


## Source

Generated from [msdyn_agentresourceforecasting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentresourceforecasting')) on 2026-05-07.