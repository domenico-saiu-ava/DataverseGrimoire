---
logical: "msdyn_agentsourceinfo"
display: "Origine agente"
entitySetName: "msdyn_agentsourceinfos"
primaryId: "msdyn_agentsourceinfoid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine agente

origini usate da CMA

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentsourceinfo` |
| Display name | Origine agente |
| Display (plural) | Origini agenti |
| Schema name | `msdyn_agentsourceinfo` |
| Entity set (Web API) | `msdyn_agentsourceinfos` |
| Primary id attribute | `msdyn_agentsourceinfoid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentsourceinfos?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentsourceinfos(<guid>)
POST /api/data/v9.2/msdyn_agentsourceinfos
PATCH /api/data/v9.2/msdyn_agentsourceinfos(<guid>)
DELETE /api/data/v9.2/msdyn_agentsourceinfos(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_agentsourceinfoid`, `msdyn_name`, `msdyn_regardingobjectid`, `msdyn_sourcedescription`, `msdyn_sourceid`, `msdyn_sourceparameters`, `msdyn_sourcetype`, `msdyn_sourceurlclickable`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentsourceinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentsourceinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentsourceinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentsourceinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_agentsourceinfo` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_agentsourceinfo_email` | [email](email.md) | `msdyn_regardingobjectid` | `msdyn_regardingobjectid_email` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentsourceinfo_SyncErrors` | [msdyn_agentsourceinfo](msdyn_agentsourceinfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentsourceinfo` |
| `msdyn_agentsourceinfo_DuplicateMatchingRecord` | [msdyn_agentsourceinfo](msdyn_agentsourceinfo.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentsourceinfo` |
| `msdyn_agentsourceinfo_DuplicateBaseRecord` | [msdyn_agentsourceinfo](msdyn_agentsourceinfo.md) | `baserecordid` | `baserecordid_msdyn_agentsourceinfo` |
| `msdyn_agentsourceinfo_AsyncOperations` | [msdyn_agentsourceinfo](msdyn_agentsourceinfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentsourceinfo` |
| `msdyn_agentsourceinfo_MailboxTrackingFolders` | [msdyn_agentsourceinfo](msdyn_agentsourceinfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentsourceinfo` |
| `msdyn_agentsourceinfo_UserEntityInstanceDatas` | [msdyn_agentsourceinfo](msdyn_agentsourceinfo.md) | `objectid` | `objectid_msdyn_agentsourceinfo` |
| `msdyn_agentsourceinfo_ProcessSession` | [msdyn_agentsourceinfo](msdyn_agentsourceinfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentsourceinfo` |
| `msdyn_agentsourceinfo_BulkDeleteFailures` | [msdyn_agentsourceinfo](msdyn_agentsourceinfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentsourceinfo` |
| `msdyn_agentsourceinfo_PrincipalObjectAttributeAccesses` | [msdyn_agentsourceinfo](msdyn_agentsourceinfo.md) | `objectid` | `objectid_msdyn_agentsourceinfo` |


## Source

Generated from [msdyn_agentsourceinfo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentsourceinfo')) on 2026-05-07.