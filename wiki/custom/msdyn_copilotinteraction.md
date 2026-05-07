---
logical: "msdyn_copilotinteraction"
display: "Interazione Copilot"
entitySetName: "msdyn_copilotinteractions"
primaryId: "msdyn_copilotinteractionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Interazione Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotinteraction` |
| Display name | Interazione Copilot |
| Display (plural) | Interazioni Copilot |
| Schema name | `msdyn_copilotinteraction` |
| Entity set (Web API) | `msdyn_copilotinteractions` |
| Primary id attribute | `msdyn_copilotinteractionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotinteractions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotinteractions(<guid>)
POST /api/data/v9.2/msdyn_copilotinteractions
PATCH /api/data/v9.2/msdyn_copilotinteractions(<guid>)
DELETE /api/data/v9.2/msdyn_copilotinteractions(<guid>)
```

## Attributes

Writable: **16** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_clienttimestamp`, `msdyn_copilotinteractionid`, `msdyn_interactioncontext`, `msdyn_interactiondataid`, `msdyn_interactionforid`, `msdyn_interactionforlogicalname`, `msdyn_interactiontype`, `msdyn_name`, `msdyn_scenariorequestid`, `msdyn_scenariotype`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotinteraction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotinteraction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotinteraction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotinteraction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_copilotinteraction` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_copilotinteractiondata_msdyn_copilotinteraction_interactiondataid` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `msdyn_interactiondataid` | `msdyn_interactiondataid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotinteraction_SyncErrors` | [msdyn_copilotinteraction](msdyn_copilotinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteraction` |
| `msdyn_copilotinteraction_DuplicateMatchingRecord` | [msdyn_copilotinteraction](msdyn_copilotinteraction.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotinteraction` |
| `msdyn_copilotinteraction_DuplicateBaseRecord` | [msdyn_copilotinteraction](msdyn_copilotinteraction.md) | `baserecordid` | `baserecordid_msdyn_copilotinteraction` |
| `msdyn_copilotinteraction_AsyncOperations` | [msdyn_copilotinteraction](msdyn_copilotinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteraction` |
| `msdyn_copilotinteraction_MailboxTrackingFolders` | [msdyn_copilotinteraction](msdyn_copilotinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteraction` |
| `msdyn_copilotinteraction_UserEntityInstanceDatas` | [msdyn_copilotinteraction](msdyn_copilotinteraction.md) | `objectid` | `objectid_msdyn_copilotinteraction` |
| `msdyn_copilotinteraction_ProcessSession` | [msdyn_copilotinteraction](msdyn_copilotinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteraction` |
| `msdyn_copilotinteraction_BulkDeleteFailures` | [msdyn_copilotinteraction](msdyn_copilotinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteraction` |
| `msdyn_copilotinteraction_PrincipalObjectAttributeAccesses` | [msdyn_copilotinteraction](msdyn_copilotinteraction.md) | `objectid` | `objectid_msdyn_copilotinteraction` |


## Source

Generated from [msdyn_copilotinteraction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotinteraction')) on 2026-05-07.