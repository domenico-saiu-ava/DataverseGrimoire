---
logical: "msdyn_solutionhealthruleset"
display: "Set di regole per l'integrità della soluzione"
entitySetName: "msdyn_solutionhealthrulesets"
primaryId: "msdyn_solutionhealthrulesetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Set di regole per l'integrità della soluzione

Rappresenta un set a cui appartiene un certo numero di regole per l'integrità della soluzione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutionhealthruleset` |
| Display name | Set di regole per l'integrità della soluzione |
| Display (plural) | Set di regole per l'integrità della soluzione |
| Schema name | `msdyn_solutionhealthruleset` |
| Entity set (Web API) | `msdyn_solutionhealthrulesets` |
| Primary id attribute | `msdyn_solutionhealthrulesetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_solutionhealthrulesets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_solutionhealthrulesets(<guid>)
POST /api/data/v9.2/msdyn_solutionhealthrulesets
PATCH /api/data/v9.2/msdyn_solutionhealthrulesets(<guid>)
DELETE /api/data/v9.2/msdyn_solutionhealthrulesets(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_description`, `msdyn_name`, `msdyn_solutionhealthrulesetid`, `msdyn_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_solutionhealthruleset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_solutionhealthruleset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_solutionhealthruleset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_solutionhealthruleset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_solutionhealthruleset` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_solutionhealthruleset_SyncErrors` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleset` |
| `msdyn_solutionhealthruleset_DuplicateMatchingRecord` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_solutionhealthruleset` |
| `msdyn_solutionhealthruleset_DuplicateBaseRecord` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `baserecordid` | `baserecordid_msdyn_solutionhealthruleset` |
| `msdyn_solutionhealthruleset_AsyncOperations` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleset` |
| `msdyn_solutionhealthruleset_MailboxTrackingFolders` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleset` |
| `msdyn_solutionhealthruleset_UserEntityInstanceDatas` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `objectid` | `objectid_msdyn_solutionhealthruleset` |
| `msdyn_solutionhealthruleset_ProcessSession` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleset` |
| `msdyn_solutionhealthruleset_BulkDeleteFailures` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleset` |
| `msdyn_solutionhealthruleset_PrincipalObjectAttributeAccesses` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `objectid` | `objectid_msdyn_solutionhealthruleset` |
| `msdyn_msdyn_solutionhealthruleset_msdyn_analysi` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `msdyn_solutionhealthrulesetid` | `msdyn_SolutionHealthRuleSetId` |
| `msdyn_msdyn_solutionhealthruleset_msdyn_solutio` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `msdyn_solutionhealthrulesetid` | `msdyn_solutionhealthrulesetId` |


## Source

Generated from [msdyn_solutionhealthruleset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_solutionhealthruleset')) on 2026-05-07.