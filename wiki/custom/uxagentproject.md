---
logical: "uxagentproject"
display: "Progetto agente UX"
entitySetName: "uxagentprojects"
primaryId: "uxagentprojectid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Progetto agente UX

Progetti di codice generati dall'agente UX.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `uxagentproject` |
| Display name | Progetto agente UX |
| Display (plural) | Progetti agente UX |
| Schema name | `uxagentproject` |
| Entity set (Web API) | `uxagentprojects` |
| Primary id attribute | `uxagentprojectid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/uxagentprojects?$select=name&$top=10
GET /api/data/v9.2/uxagentprojects(<guid>)
POST /api/data/v9.2/uxagentprojects
PATCH /api/data/v9.2/uxagentprojects(<guid>)
DELETE /api/data/v9.2/uxagentprojects(<guid>)
```

## Attributes

Writable: **9** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `uxagentprojectid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_uxagentproject_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_uxagentproject_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_uxagentproject_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_uxagentproject_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_uxagentproject` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `uxagentproject_componentversionnrddatasourceset` | [uxagentproject](uxagentproject.md) | `component` | `component_uxagentproject` |
| `uxagentproject_componentversions` | [uxagentproject](uxagentproject.md) | `component` | `component_uxagentproject` |
| `uxagentproject_componentchangesetversions` | [uxagentproject](uxagentproject.md) | `component` | `component_uxagentproject` |
| `uxagentproject_SyncErrors` | [uxagentproject](uxagentproject.md) | `regardingobjectid` | `regardingobjectid_uxagentproject` |
| `uxagentproject_AsyncOperations` | [uxagentproject](uxagentproject.md) | `regardingobjectid` | `regardingobjectid_uxagentproject` |
| `uxagentproject_MailboxTrackingFolders` | [uxagentproject](uxagentproject.md) | `regardingobjectid` | `regardingobjectid_uxagentproject` |
| `uxagentproject_UserEntityInstanceDatas` | [uxagentproject](uxagentproject.md) | `objectid` | `objectid_uxagentproject` |
| `uxagentproject_ProcessSession` | [uxagentproject](uxagentproject.md) | `regardingobjectid` | `regardingobjectid_uxagentproject` |
| `uxagentproject_BulkDeleteFailures` | [uxagentproject](uxagentproject.md) | `regardingobjectid` | `regardingobjectid_uxagentproject` |
| `uxagentproject_PrincipalObjectAttributeAccesses` | [uxagentproject](uxagentproject.md) | `objectid` | `objectid_uxagentproject` |
| `uxagentproject_uxagentprojectfile_uxagentprojectid` | [uxagentproject](uxagentproject.md) | `uxagentprojectid` | `uxagentprojectid` |
| `agentconversationmessage_uxagentproject` | [uxagentproject](uxagentproject.md) | `regardingobjectid` | `RegardingObjectId_uxagentproject` |


## Source

Generated from [uxagentproject (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='uxagentproject')) on 2026-05-07.