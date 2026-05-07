---
logical: "msdyn_assignmentmap"
display: "Mapping assegnazioni"
entitySetName: "msdyn_assignmentmaps"
primaryId: "msdyn_assignmentmapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping assegnazioni

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assignmentmap` |
| Display name | Mapping assegnazioni |
| Display (plural) | Assignmentmaps |
| Schema name | `msdyn_assignmentmap` |
| Entity set (Web API) | `msdyn_assignmentmaps` |
| Primary id attribute | `msdyn_assignmentmapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_assignmentmaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_assignmentmaps(<guid>)
POST /api/data/v9.2/msdyn_assignmentmaps
PATCH /api/data/v9.2/msdyn_assignmentmaps(<guid>)
DELETE /api/data/v9.2/msdyn_assignmentmaps(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_applicableforrouting`, `msdyn_assignedticks`, `msdyn_assignmentmapid`, `msdyn_availablecapacity`, `msdyn_isreconcilerequired`, `msdyn_lastreconciledtime`, `msdyn_maxcapacity`, `msdyn_name`, `msdyn_reconciletaskconsumedcapacity`, `msdyn_rulelevelassignedticksjson`, `msdyn_systemuserid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_assignmentmap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assignmentmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assignmentmap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assignmentmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_assignmentmap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_assignmentmap` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_assignmentmap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_assignmentmap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_systemuser_msdyn_msdyn_assignmentmap_systemuserid` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assignmentmap_SyncErrors` | [msdyn_assignmentmap](msdyn_assignmentmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentmap` |
| `msdyn_assignmentmap_AsyncOperations` | [msdyn_assignmentmap](msdyn_assignmentmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentmap` |
| `msdyn_assignmentmap_MailboxTrackingFolders` | [msdyn_assignmentmap](msdyn_assignmentmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentmap` |
| `msdyn_assignmentmap_UserEntityInstanceDatas` | [msdyn_assignmentmap](msdyn_assignmentmap.md) | `objectid` | `objectid_msdyn_assignmentmap` |
| `msdyn_assignmentmap_ProcessSession` | [msdyn_assignmentmap](msdyn_assignmentmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentmap` |
| `msdyn_assignmentmap_BulkDeleteFailures` | [msdyn_assignmentmap](msdyn_assignmentmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentmap` |
| `msdyn_assignmentmap_PrincipalObjectAttributeAccesses` | [msdyn_assignmentmap](msdyn_assignmentmap.md) | `objectid` | `objectid_msdyn_assignmentmap` |
| `msdyn_assignmentmap_connections1` | [msdyn_assignmentmap](msdyn_assignmentmap.md) | `record1id` | `record1id_msdyn_assignmentmap` |
| `msdyn_assignmentmap_connections2` | [msdyn_assignmentmap](msdyn_assignmentmap.md) | `record2id` | `record2id_msdyn_assignmentmap` |


## Source

Generated from [msdyn_assignmentmap (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_assignmentmap')) on 2026-05-07.