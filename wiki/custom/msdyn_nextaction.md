---
logical: "msdyn_nextaction"
display: "Azione successiva"
entitySetName: "msdyn_nextactions"
primaryId: "msdyn_nextactionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Azione successiva

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_nextaction` |
| Display name | Azione successiva |
| Display (plural) | Azioni successive |
| Schema name | `msdyn_nextaction` |
| Entity set (Web API) | `msdyn_nextactions` |
| Primary id attribute | `msdyn_nextactionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_nextactions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_nextactions(<guid>)
POST /api/data/v9.2/msdyn_nextactions
PATCH /api/data/v9.2/msdyn_nextactions(<guid>)
DELETE /api/data/v9.2/msdyn_nextactions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_actiondata`, `msdyn_actiontype`, `msdyn_isfullautonomous`, `msdyn_name`, `msdyn_nextactionid`, `msdyn_regarding`, `msdyn_validfrom`, `msdyn_validto`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_nextaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_nextaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_nextaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_nextaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_nextaction` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_nextaction_regarding_incident` | [incident](incident.md) | `msdyn_regarding` | `msdyn_regarding` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_nextaction_SyncErrors` | [msdyn_nextaction](msdyn_nextaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_nextaction` |
| `msdyn_nextaction_AsyncOperations` | [msdyn_nextaction](msdyn_nextaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_nextaction` |
| `msdyn_nextaction_MailboxTrackingFolders` | [msdyn_nextaction](msdyn_nextaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_nextaction` |
| `msdyn_nextaction_UserEntityInstanceDatas` | [msdyn_nextaction](msdyn_nextaction.md) | `objectid` | `objectid_msdyn_nextaction` |
| `msdyn_nextaction_ProcessSession` | [msdyn_nextaction](msdyn_nextaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_nextaction` |
| `msdyn_nextaction_BulkDeleteFailures` | [msdyn_nextaction](msdyn_nextaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_nextaction` |
| `msdyn_nextaction_PrincipalObjectAttributeAccesses` | [msdyn_nextaction](msdyn_nextaction.md) | `objectid` | `objectid_msdyn_nextaction` |


## Source

Generated from [msdyn_nextaction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_nextaction')) on 2026-05-07.