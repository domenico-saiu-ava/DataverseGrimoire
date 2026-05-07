---
logical: "msdyn_salesassignmentsetting"
display: "Impostazione assegnazione vendite"
entitySetName: "msdyn_salesassignmentsettings"
primaryId: "msdyn_salesassignmentsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione assegnazione vendite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesassignmentsetting` |
| Display name | Impostazione assegnazione vendite |
| Display (plural) | msdyn_salesassignmentsettings |
| Schema name | `msdyn_salesassignmentsetting` |
| Entity set (Web API) | `msdyn_salesassignmentsettings` |
| Primary id attribute | `msdyn_salesassignmentsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesassignmentsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesassignmentsettings(<guid>)
POST /api/data/v9.2/msdyn_salesassignmentsettings
PATCH /api/data/v9.2/msdyn_salesassignmentsettings(<guid>)
DELETE /api/data/v9.2/msdyn_salesassignmentsettings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_customownerfield`, `msdyn_defaultcapacity`, `msdyn_enabledtime`, `msdyn_name`, `msdyn_opportunityroutingenabled`, `msdyn_reassignmentbatchcount`, `msdyn_reassignmentbatchsize`, `msdyn_roundrobinscope`, `msdyn_ruleinfoenabled`, `msdyn_salesassignmentsettingid`, `msdyn_verboselogging`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesassignmentsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesassignmentsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesassignmentsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesassignmentsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_salesassignmentsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesassignmentsetting_SyncErrors` | [msdyn_salesassignmentsetting](msdyn_salesassignmentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesassignmentsetting` |
| `msdyn_salesassignmentsetting_AsyncOperations` | [msdyn_salesassignmentsetting](msdyn_salesassignmentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesassignmentsetting` |
| `msdyn_salesassignmentsetting_MailboxTrackingFolders` | [msdyn_salesassignmentsetting](msdyn_salesassignmentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesassignmentsetting` |
| `msdyn_salesassignmentsetting_UserEntityInstanceDatas` | [msdyn_salesassignmentsetting](msdyn_salesassignmentsetting.md) | `objectid` | `objectid_msdyn_salesassignmentsetting` |
| `msdyn_salesassignmentsetting_ProcessSession` | [msdyn_salesassignmentsetting](msdyn_salesassignmentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesassignmentsetting` |
| `msdyn_salesassignmentsetting_BulkDeleteFailures` | [msdyn_salesassignmentsetting](msdyn_salesassignmentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesassignmentsetting` |
| `msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses` | [msdyn_salesassignmentsetting](msdyn_salesassignmentsetting.md) | `objectid` | `objectid_msdyn_salesassignmentsetting` |


## Source

Generated from [msdyn_salesassignmentsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesassignmentsetting')) on 2026-05-07.