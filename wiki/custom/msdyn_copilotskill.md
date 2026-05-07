---
logical: "msdyn_copilotskill"
display: "Competenza Copilot"
entitySetName: "msdyn_copilotskills"
primaryId: "msdyn_copilotskillid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Competenza Copilot

Competenza Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotskill` |
| Display name | Competenza Copilot |
| Display (plural) | Competenza Copilot |
| Schema name | `msdyn_copilotskill` |
| Entity set (Web API) | `msdyn_copilotskills` |
| Primary id attribute | `msdyn_copilotskillid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotskills?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotskills(<guid>)
POST /api/data/v9.2/msdyn_copilotskills
PATCH /api/data/v9.2/msdyn_copilotskills(<guid>)
DELETE /api/data/v9.2/msdyn_copilotskills(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_accessenabledforallroles`, `msdyn_copilotskillid`, `msdyn_description`, `msdyn_featureconfiguration`, `msdyn_isinternal`, `msdyn_name`, `msdyn_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotskill_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotskill_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotskill_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotskill_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_copilotskill` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_copilotskill_msdyn_copilotskillmapping_childskillid` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_childskillid` | `msdyn_childskillid` |
| `msdyn_msdyn_copilotskill_msdyn_copilotskillmapping_parentskillid` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_parentskillid` | `msdyn_parentskillid` |
| `msdyn_copilotskill_SyncErrors` | [msdyn_copilotskill](msdyn_copilotskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskill` |
| `msdyn_copilotskill_DuplicateMatchingRecord` | [msdyn_copilotskill](msdyn_copilotskill.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotskill` |
| `msdyn_copilotskill_DuplicateBaseRecord` | [msdyn_copilotskill](msdyn_copilotskill.md) | `baserecordid` | `baserecordid_msdyn_copilotskill` |
| `msdyn_copilotskill_AsyncOperations` | [msdyn_copilotskill](msdyn_copilotskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskill` |
| `msdyn_copilotskill_MailboxTrackingFolders` | [msdyn_copilotskill](msdyn_copilotskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskill` |
| `msdyn_copilotskill_UserEntityInstanceDatas` | [msdyn_copilotskill](msdyn_copilotskill.md) | `objectid` | `objectid_msdyn_copilotskill` |
| `msdyn_copilotskill_ProcessSession` | [msdyn_copilotskill](msdyn_copilotskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskill` |
| `msdyn_copilotskill_BulkDeleteFailures` | [msdyn_copilotskill](msdyn_copilotskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotskill` |
| `msdyn_copilotskill_PrincipalObjectAttributeAccesses` | [msdyn_copilotskill](msdyn_copilotskill.md) | `objectid` | `objectid_msdyn_copilotskill` |
| `msdyn_msdyn_copilotskill_msdyn_copilotstarterprompt_copilotskill` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_copilotskill` | `msdyn_copilotskill` |
| `msdyn_organizationprompt_msdyn_skill_msdyn_copilotskill` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_skill` | `msdyn_skill` |
| `msdyn_msdyn_copilotskill_msdyn_copilotskillrole_copilotskillid` | [msdyn_copilotskill](msdyn_copilotskill.md) | `msdyn_copilotskillid` | `msdyn_copilotskillid` |


## Source

Generated from [msdyn_copilotskill (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotskill')) on 2026-05-07.