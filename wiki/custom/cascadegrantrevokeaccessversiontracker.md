---
logical: "cascadegrantrevokeaccessversiontracker"
display: "CascadeGrantRevokeAccessVersionTracker"
entitySetName: "cascadegrantrevokeaccessversiontrackers"
primaryId: "cascadegrantrevokeaccessversiontrackerid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# CascadeGrantRevokeAccessVersionTracker

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cascadegrantrevokeaccessversiontracker` |
| Display name | CascadeGrantRevokeAccessVersionTracker |
| Display (plural) | CascadeGrantRevokeAccessVersionTrackers |
| Schema name | `cascadegrantrevokeaccessversiontracker` |
| Entity set (Web API) | `cascadegrantrevokeaccessversiontrackers` |
| Primary id attribute | `cascadegrantrevokeaccessversiontrackerid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/cascadegrantrevokeaccessversiontrackers?$select=name&$top=10
GET /api/data/v9.2/cascadegrantrevokeaccessversiontrackers(<guid>)
POST /api/data/v9.2/cascadegrantrevokeaccessversiontrackers
PATCH /api/data/v9.2/cascadegrantrevokeaccessversiontrackers(<guid>)
DELETE /api/data/v9.2/cascadegrantrevokeaccessversiontrackers(<guid>)
```

## Attributes

Writable: **11** · Read-only: **6**

### Writable

`cascadegrantrevokeaccessversiontrackerid`, `importsequencenumber`, `messagename`, `name`, `overriddencreatedon`, `parententityid`, `parentobjecttypecode`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`

## Relationships


### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cascadegrantrevokeaccessversiontracker_SyncErrors` | [cascadegrantrevokeaccessversiontracker](cascadegrantrevokeaccessversiontracker.md) | `regardingobjectid` | `regardingobjectid_cascadegrantrevokeaccessversiontracker` |
| `cascadegrantrevokeaccessversiontracker_DuplicateMatchingRecord` | [cascadegrantrevokeaccessversiontracker](cascadegrantrevokeaccessversiontracker.md) | `duplicaterecordid` | `duplicaterecordid_cascadegrantrevokeaccessversiontracker` |
| `cascadegrantrevokeaccessversiontracker_DuplicateBaseRecord` | [cascadegrantrevokeaccessversiontracker](cascadegrantrevokeaccessversiontracker.md) | `baserecordid` | `baserecordid_cascadegrantrevokeaccessversiontracker` |
| `cascadegrantrevokeaccessversiontracker_AsyncOperations` | [cascadegrantrevokeaccessversiontracker](cascadegrantrevokeaccessversiontracker.md) | `regardingobjectid` | `regardingobjectid_cascadegrantrevokeaccessversiontracker` |
| `cascadegrantrevokeaccessversiontracker_MailboxTrackingFolders` | [cascadegrantrevokeaccessversiontracker](cascadegrantrevokeaccessversiontracker.md) | `regardingobjectid` | `regardingobjectid_cascadegrantrevokeaccessversiontracker` |
| `cascadegrantrevokeaccessversiontracker_UserEntityInstanceDatas` | [cascadegrantrevokeaccessversiontracker](cascadegrantrevokeaccessversiontracker.md) | `objectid` | `objectid_cascadegrantrevokeaccessversiontracker` |
| `cascadegrantrevokeaccessversiontracker_ProcessSession` | [cascadegrantrevokeaccessversiontracker](cascadegrantrevokeaccessversiontracker.md) | `regardingobjectid` | `regardingobjectid_cascadegrantrevokeaccessversiontracker` |
| `cascadegrantrevokeaccessversiontracker_BulkDeleteFailures` | [cascadegrantrevokeaccessversiontracker](cascadegrantrevokeaccessversiontracker.md) | `regardingobjectid` | `regardingobjectid_cascadegrantrevokeaccessversiontracker` |
| `cascadegrantrevokeaccessversiontracker_PrincipalObjectAttributeAccesses` | [cascadegrantrevokeaccessversiontracker](cascadegrantrevokeaccessversiontracker.md) | `objectid` | `objectid_cascadegrantrevokeaccessversiontracker` |
| `SyncTrackerIdLookup` | [cascadegrantrevokeaccessversiontracker](cascadegrantrevokeaccessversiontracker.md) | `synctrackerid` | `SyncTrackerId` |


## Source

Generated from [cascadegrantrevokeaccessversiontracker (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cascadegrantrevokeaccessversiontracker')) on 2026-05-07.