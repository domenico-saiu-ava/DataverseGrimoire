---
logical: "msdyn_readtrackingenabledinfo"
display: "Informazioni abilitate per la registrazione in lettura"
entitySetName: "msdyn_readtrackingenabledinfos"
primaryId: "msdyn_readtrackingenabledinfoid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Informazioni abilitate per la registrazione in lettura

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_readtrackingenabledinfo` |
| Display name | Informazioni abilitate per la registrazione in lettura |
| Display (plural) | Informazioni abilitate per la registrazione in lettura |
| Schema name | `msdyn_readtrackingenabledinfo` |
| Entity set (Web API) | `msdyn_readtrackingenabledinfos` |
| Primary id attribute | `msdyn_readtrackingenabledinfoid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_readtrackingenabledinfos?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_readtrackingenabledinfos(<guid>)
POST /api/data/v9.2/msdyn_readtrackingenabledinfos
PATCH /api/data/v9.2/msdyn_readtrackingenabledinfos(<guid>)
DELETE /api/data/v9.2/msdyn_readtrackingenabledinfos(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_enabledtimestamp`, `msdyn_entity`, `msdyn_isenabled`, `msdyn_name`, `msdyn_readtrackingenabledinfoid`, `msdyn_userid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_readtrackingenabledinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_readtrackingenabledinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_readtrackingenabledinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_readtrackingenabledinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_readtrackingenabledinfo` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_readtrackingenabledinfo_SyncErrors` | [msdyn_readtrackingenabledinfo](msdyn_readtrackingenabledinfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_readtrackingenabledinfo` |
| `msdyn_readtrackingenabledinfo_AsyncOperations` | [msdyn_readtrackingenabledinfo](msdyn_readtrackingenabledinfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_readtrackingenabledinfo` |
| `msdyn_readtrackingenabledinfo_MailboxTrackingFolders` | [msdyn_readtrackingenabledinfo](msdyn_readtrackingenabledinfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_readtrackingenabledinfo` |
| `msdyn_readtrackingenabledinfo_UserEntityInstanceDatas` | [msdyn_readtrackingenabledinfo](msdyn_readtrackingenabledinfo.md) | `objectid` | `objectid_msdyn_readtrackingenabledinfo` |
| `msdyn_readtrackingenabledinfo_ProcessSession` | [msdyn_readtrackingenabledinfo](msdyn_readtrackingenabledinfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_readtrackingenabledinfo` |
| `msdyn_readtrackingenabledinfo_BulkDeleteFailures` | [msdyn_readtrackingenabledinfo](msdyn_readtrackingenabledinfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_readtrackingenabledinfo` |
| `msdyn_readtrackingenabledinfo_PrincipalObjectAttributeAccesses` | [msdyn_readtrackingenabledinfo](msdyn_readtrackingenabledinfo.md) | `objectid` | `objectid_msdyn_readtrackingenabledinfo` |


## Source

Generated from [msdyn_readtrackingenabledinfo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_readtrackingenabledinfo')) on 2026-05-07.