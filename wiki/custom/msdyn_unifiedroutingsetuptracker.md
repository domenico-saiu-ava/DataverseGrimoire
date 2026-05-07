---
logical: "msdyn_unifiedroutingsetuptracker"
display: "Unified Routing Setup Tracker"
entitySetName: "msdyn_unifiedroutingsetuptrackers"
primaryId: "msdyn_unifiedroutingsetuptrackerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Unified Routing Setup Tracker

Unified Routing Setup Trackers

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_unifiedroutingsetuptracker` |
| Display name | Unified Routing Setup Tracker |
| Display (plural) | Unified Routing Setup Trackers |
| Schema name | `msdyn_unifiedroutingsetuptracker` |
| Entity set (Web API) | `msdyn_unifiedroutingsetuptrackers` |
| Primary id attribute | `msdyn_unifiedroutingsetuptrackerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_unifiedroutingsetuptrackers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_unifiedroutingsetuptrackers(<guid>)
POST /api/data/v9.2/msdyn_unifiedroutingsetuptrackers
PATCH /api/data/v9.2/msdyn_unifiedroutingsetuptrackers(<guid>)
DELETE /api/data/v9.2/msdyn_unifiedroutingsetuptrackers(<guid>)
```

## Attributes

Writable: **18** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_enableunifiedrouting`, `msdyn_errorcode`, `msdyn_errormessage`, `msdyn_executionstatus`, `msdyn_issuccessnotificationdisplayed`, `msdyn_isteachingbubbledisplayed`, `msdyn_name`, `msdyn_servicerequestid`, `msdyn_skipprovisioning`, `msdyn_token`, `msdyn_transactionid`, `msdyn_unifiedroutingsetuptrackerid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_unifiedroutingsetuptracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_unifiedroutingsetuptracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_unifiedroutingsetuptracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_unifiedroutingsetuptracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_unifiedroutingsetuptracker` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_unifiedroutingsetuptracker_SyncErrors` | [msdyn_unifiedroutingsetuptracker](msdyn_unifiedroutingsetuptracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingsetuptracker` |
| `msdyn_unifiedroutingsetuptracker_DuplicateMatchingRecord` | [msdyn_unifiedroutingsetuptracker](msdyn_unifiedroutingsetuptracker.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_unifiedroutingsetuptracker` |
| `msdyn_unifiedroutingsetuptracker_DuplicateBaseRecord` | [msdyn_unifiedroutingsetuptracker](msdyn_unifiedroutingsetuptracker.md) | `baserecordid` | `baserecordid_msdyn_unifiedroutingsetuptracker` |
| `msdyn_unifiedroutingsetuptracker_AsyncOperations` | [msdyn_unifiedroutingsetuptracker](msdyn_unifiedroutingsetuptracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingsetuptracker` |
| `msdyn_unifiedroutingsetuptracker_MailboxTrackingFolders` | [msdyn_unifiedroutingsetuptracker](msdyn_unifiedroutingsetuptracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingsetuptracker` |
| `msdyn_unifiedroutingsetuptracker_UserEntityInstanceDatas` | [msdyn_unifiedroutingsetuptracker](msdyn_unifiedroutingsetuptracker.md) | `objectid` | `objectid_msdyn_unifiedroutingsetuptracker` |
| `msdyn_unifiedroutingsetuptracker_ProcessSession` | [msdyn_unifiedroutingsetuptracker](msdyn_unifiedroutingsetuptracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingsetuptracker` |
| `msdyn_unifiedroutingsetuptracker_BulkDeleteFailures` | [msdyn_unifiedroutingsetuptracker](msdyn_unifiedroutingsetuptracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingsetuptracker` |
| `msdyn_unifiedroutingsetuptracker_PrincipalObjectAttributeAccesses` | [msdyn_unifiedroutingsetuptracker](msdyn_unifiedroutingsetuptracker.md) | `objectid` | `objectid_msdyn_unifiedroutingsetuptracker` |


## Source

Generated from [msdyn_unifiedroutingsetuptracker (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_unifiedroutingsetuptracker')) on 2026-05-07.