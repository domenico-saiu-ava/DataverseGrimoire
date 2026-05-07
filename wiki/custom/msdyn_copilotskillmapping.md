---
logical: "msdyn_copilotskillmapping"
display: "Copilot Skill Mapping"
entitySetName: "msdyn_copilotskillmappings"
primaryId: "msdyn_copilotskillmappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Copilot Skill Mapping

Copilot Skill mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotskillmapping` |
| Display name | Copilot Skill Mapping |
| Display (plural) | Copilot Skill Mapping |
| Schema name | `msdyn_copilotskillmapping` |
| Entity set (Web API) | `msdyn_copilotskillmappings` |
| Primary id attribute | `msdyn_copilotskillmappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotskillmappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotskillmappings(<guid>)
POST /api/data/v9.2/msdyn_copilotskillmappings
PATCH /api/data/v9.2/msdyn_copilotskillmappings(<guid>)
DELETE /api/data/v9.2/msdyn_copilotskillmappings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_childskillid`, `msdyn_copilotskillmappingid`, `msdyn_name`, `msdyn_parentskillid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotskillmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotskillmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotskillmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotskillmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_copilotskillmapping` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_copilotskill_msdyn_copilotskillmapping_childskillid` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_childskillid` | `msdyn_childskillid` |
| `msdyn_msdyn_copilotskill_msdyn_copilotskillmapping_parentskillid` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_parentskillid` | `msdyn_parentskillid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotskillmapping_SyncErrors` | [msdyn_copilotskillmapping](msdyn_copilotskillmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskillmapping` |
| `msdyn_copilotskillmapping_DuplicateMatchingRecord` | [msdyn_copilotskillmapping](msdyn_copilotskillmapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotskillmapping` |
| `msdyn_copilotskillmapping_DuplicateBaseRecord` | [msdyn_copilotskillmapping](msdyn_copilotskillmapping.md) | `baserecordid` | `baserecordid_msdyn_copilotskillmapping` |
| `msdyn_copilotskillmapping_AsyncOperations` | [msdyn_copilotskillmapping](msdyn_copilotskillmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskillmapping` |
| `msdyn_copilotskillmapping_MailboxTrackingFolders` | [msdyn_copilotskillmapping](msdyn_copilotskillmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskillmapping` |
| `msdyn_copilotskillmapping_UserEntityInstanceDatas` | [msdyn_copilotskillmapping](msdyn_copilotskillmapping.md) | `objectid` | `objectid_msdyn_copilotskillmapping` |
| `msdyn_copilotskillmapping_ProcessSession` | [msdyn_copilotskillmapping](msdyn_copilotskillmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskillmapping` |
| `msdyn_copilotskillmapping_BulkDeleteFailures` | [msdyn_copilotskillmapping](msdyn_copilotskillmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskillmapping` |
| `msdyn_copilotskillmapping_PrincipalObjectAttributeAccesses` | [msdyn_copilotskillmapping](msdyn_copilotskillmapping.md) | `objectid` | `objectid_msdyn_copilotskillmapping` |


## Source

Generated from [msdyn_copilotskillmapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotskillmapping')) on 2026-05-07.