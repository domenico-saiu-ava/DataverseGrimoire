---
logical: "msdyn_kbenrichment"
display: "Arricchimento Knowledge Base"
entitySetName: "msdyn_kbenrichments"
primaryId: "msdyn_kbenrichmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Arricchimento Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kbenrichment` |
| Display name | Arricchimento Knowledge Base |
| Display (plural) | Arricchimenti Knowledge Base |
| Schema name | `msdyn_kbenrichment` |
| Entity set (Web API) | `msdyn_kbenrichments` |
| Primary id attribute | `msdyn_kbenrichmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kbenrichments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kbenrichments(<guid>)
POST /api/data/v9.2/msdyn_kbenrichments
PATCH /api/data/v9.2/msdyn_kbenrichments(<guid>)
DELETE /api/data/v9.2/msdyn_kbenrichments(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_detailsummary`, `msdyn_kbenrichmentid`, `msdyn_kbid`, `msdyn_name`, `msdyn_summary`, `msdyn_tags`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_kbenrichment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kbenrichment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kbenrichment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kbenrichment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_kbenrichment` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_knowledgearticle_msdyn_kbenrichment_kbid` | [knowledgearticle](knowledgearticle.md) | `msdyn_kbid` | `msdyn_kbid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kbenrichment_SyncErrors` | [msdyn_kbenrichment](msdyn_kbenrichment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbenrichment` |
| `msdyn_kbenrichment_AsyncOperations` | [msdyn_kbenrichment](msdyn_kbenrichment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbenrichment` |
| `msdyn_kbenrichment_MailboxTrackingFolders` | [msdyn_kbenrichment](msdyn_kbenrichment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbenrichment` |
| `msdyn_kbenrichment_UserEntityInstanceDatas` | [msdyn_kbenrichment](msdyn_kbenrichment.md) | `objectid` | `objectid_msdyn_kbenrichment` |
| `msdyn_kbenrichment_ProcessSession` | [msdyn_kbenrichment](msdyn_kbenrichment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbenrichment` |
| `msdyn_kbenrichment_BulkDeleteFailures` | [msdyn_kbenrichment](msdyn_kbenrichment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbenrichment` |
| `msdyn_kbenrichment_PrincipalObjectAttributeAccesses` | [msdyn_kbenrichment](msdyn_kbenrichment.md) | `objectid` | `objectid_msdyn_kbenrichment` |


## Source

Generated from [msdyn_kbenrichment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_kbenrichment')) on 2026-05-07.