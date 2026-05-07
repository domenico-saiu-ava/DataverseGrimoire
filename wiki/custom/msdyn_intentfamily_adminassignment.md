---
logical: "msdyn_intentfamily_adminassignment"
display: "Assegnazione amministratore famiglia di finalità"
entitySetName: "msdyn_intentfamily_adminassignments"
primaryId: "msdyn_intentfamily_adminassignmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Assegnazione amministratore famiglia di finalità

Assegnazione di team o utenti amministratori a linee di business con specifici tipi di ruolo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentfamily_adminassignment` |
| Display name | Assegnazione amministratore famiglia di finalità |
| Display (plural) | Assegnazioni amministratore famiglia di finalità |
| Schema name | `msdyn_intentfamily_adminassignment` |
| Entity set (Web API) | `msdyn_intentfamily_adminassignments` |
| Primary id attribute | `msdyn_intentfamily_adminassignmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentfamily_adminassignments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentfamily_adminassignments(<guid>)
POST /api/data/v9.2/msdyn_intentfamily_adminassignments
PATCH /api/data/v9.2/msdyn_intentfamily_adminassignments(<guid>)
DELETE /api/data/v9.2/msdyn_intentfamily_adminassignments(<guid>)
```

## Attributes

Writable: **12** · Read-only: **15**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_adminroletype`, `msdyn_intentfamily_adminassignmentid`, `msdyn_intentfamilyid`, `msdyn_name`, `msdyn_teamid`, `msdyn_userid`, `overriddencreatedon`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `statecode`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentfamily_adminassignment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentfamily_adminassignment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentfamily_adminassignment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentfamily_adminassignment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_intentfamily_adminassignment` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_intentfamily_adminassignment_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentfamily_adminassignment_msdyn_userid_systemuser` | [systemuser](systemuser.md) | `msdyn_userid` | `msdyn_userid` |
| `msdyn_intentfamily_adminassignment_msdyn_teamid_team` | [team](team.md) | `msdyn_teamid` | `msdyn_teamid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentfamily_adminassignment_SyncErrors` | [msdyn_intentfamily_adminassignment](msdyn_intentfamily_adminassignment.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily_adminassignment` |
| `msdyn_intentfamily_adminassignment_DuplicateMatchingRecord` | [msdyn_intentfamily_adminassignment](msdyn_intentfamily_adminassignment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentfamily_adminassignment` |
| `msdyn_intentfamily_adminassignment_DuplicateBaseRecord` | [msdyn_intentfamily_adminassignment](msdyn_intentfamily_adminassignment.md) | `baserecordid` | `baserecordid_msdyn_intentfamily_adminassignment` |
| `msdyn_intentfamily_adminassignment_AsyncOperations` | [msdyn_intentfamily_adminassignment](msdyn_intentfamily_adminassignment.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily_adminassignment` |
| `msdyn_intentfamily_adminassignment_MailboxTrackingFolders` | [msdyn_intentfamily_adminassignment](msdyn_intentfamily_adminassignment.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily_adminassignment` |
| `msdyn_intentfamily_adminassignment_UserEntityInstanceDatas` | [msdyn_intentfamily_adminassignment](msdyn_intentfamily_adminassignment.md) | `objectid` | `objectid_msdyn_intentfamily_adminassignment` |
| `msdyn_intentfamily_adminassignment_ProcessSession` | [msdyn_intentfamily_adminassignment](msdyn_intentfamily_adminassignment.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily_adminassignment` |
| `msdyn_intentfamily_adminassignment_BulkDeleteFailures` | [msdyn_intentfamily_adminassignment](msdyn_intentfamily_adminassignment.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily_adminassignment` |
| `msdyn_intentfamily_adminassignment_PrincipalObjectAttributeAccesses` | [msdyn_intentfamily_adminassignment](msdyn_intentfamily_adminassignment.md) | `objectid` | `objectid_msdyn_intentfamily_adminassignment` |


## Source

Generated from [msdyn_intentfamily_adminassignment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentfamily_adminassignment')) on 2026-05-07.