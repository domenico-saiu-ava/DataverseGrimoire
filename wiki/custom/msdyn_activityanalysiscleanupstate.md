---
logical: "msdyn_activityanalysiscleanupstate"
display: "Stato pulizia analisi impegno"
entitySetName: "msdyn_activityanalysiscleanupstates"
primaryId: "msdyn_activityanalysiscleanupstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato pulizia analisi impegno

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_activityanalysiscleanupstate` |
| Display name | Stato pulizia analisi impegno |
| Display (plural) | Stati pulizia analisi impegno |
| Schema name | `msdyn_activityanalysiscleanupstate` |
| Entity set (Web API) | `msdyn_activityanalysiscleanupstates` |
| Primary id attribute | `msdyn_activityanalysiscleanupstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_activityanalysiscleanupstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_activityanalysiscleanupstates(<guid>)
POST /api/data/v9.2/msdyn_activityanalysiscleanupstates
PATCH /api/data/v9.2/msdyn_activityanalysiscleanupstates(<guid>)
DELETE /api/data/v9.2/msdyn_activityanalysiscleanupstates(<guid>)
```

## Attributes

Writable: **16** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_accountkpicleanupbatchnum`, `msdyn_accountkpicleanupstatus`, `msdyn_activityanalysiscleanupstateid`, `msdyn_contactkpicleanupbatchnum`, `msdyn_contactkpicleanupstatus`, `msdyn_leadkpicleanupbatchnum`, `msdyn_leadkpicleanupstatus`, `msdyn_name`, `msdyn_opportunitykpicleanupbatchnum`, `msdyn_opportunitykpicleanupstatus`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_activityanalysiscleanupstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_activityanalysiscleanupstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_activityanalysiscleanupstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_activityanalysiscleanupstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_activityanalysiscleanupstate` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_activityanalysiscleanupstate_SyncErrors` | [msdyn_activityanalysiscleanupstate](msdyn_activityanalysiscleanupstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_activityanalysiscleanupstate` |
| `msdyn_activityanalysiscleanupstate_AsyncOperations` | [msdyn_activityanalysiscleanupstate](msdyn_activityanalysiscleanupstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_activityanalysiscleanupstate` |
| `msdyn_activityanalysiscleanupstate_MailboxTrackingFolders` | [msdyn_activityanalysiscleanupstate](msdyn_activityanalysiscleanupstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_activityanalysiscleanupstate` |
| `msdyn_activityanalysiscleanupstate_UserEntityInstanceDatas` | [msdyn_activityanalysiscleanupstate](msdyn_activityanalysiscleanupstate.md) | `objectid` | `objectid_msdyn_activityanalysiscleanupstate` |
| `msdyn_activityanalysiscleanupstate_ProcessSession` | [msdyn_activityanalysiscleanupstate](msdyn_activityanalysiscleanupstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_activityanalysiscleanupstate` |
| `msdyn_activityanalysiscleanupstate_BulkDeleteFailures` | [msdyn_activityanalysiscleanupstate](msdyn_activityanalysiscleanupstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_activityanalysiscleanupstate` |
| `msdyn_activityanalysiscleanupstate_PrincipalObjectAttributeAccesses` | [msdyn_activityanalysiscleanupstate](msdyn_activityanalysiscleanupstate.md) | `objectid` | `objectid_msdyn_activityanalysiscleanupstate` |


## Source

Generated from [msdyn_activityanalysiscleanupstate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_activityanalysiscleanupstate')) on 2026-05-07.