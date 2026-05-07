---
logical: "msdyn_intentplaybookmap"
display: "Mapping playbook finalità"
entitySetName: "msdyn_intentplaybookmaps"
primaryId: "msdyn_intentplaybookmapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping playbook finalità

Questa tabella contiene mapping di playbook finalità.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentplaybookmap` |
| Display name | Mapping playbook finalità |
| Display (plural) | Mapping playbook finalità |
| Schema name | `msdyn_intentplaybookmap` |
| Entity set (Web API) | `msdyn_intentplaybookmaps` |
| Primary id attribute | `msdyn_intentplaybookmapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentplaybookmaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentplaybookmaps(<guid>)
POST /api/data/v9.2/msdyn_intentplaybookmaps
PATCH /api/data/v9.2/msdyn_intentplaybookmaps(<guid>)
DELETE /api/data/v9.2/msdyn_intentplaybookmaps(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_intentfamilyid`, `msdyn_intentid`, `msdyn_intentplaybookid`, `msdyn_intentplaybookmapid`, `msdyn_name`, `msdyn_referenceplaybookid`, `msdyn_targetsource`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentplaybookmap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentplaybookmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentplaybookmap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentplaybookmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentplaybookmap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentplaybookmap` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentplaybookmap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentplaybookmap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intentplaybookmap_msdyn_intentplaybook` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `msdyn_intentplaybookid` | `msdyn_intentplaybookid` |
| `msdyn_intentplaybookmap_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intentplaybookmap_msdyn_intentid_msdyn_intent` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_intentplaybookmap_msdyn_referenceplaybookid_msdyn_intentplaybook` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `msdyn_referenceplaybookid` | `msdyn_referenceplaybookid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentplaybookmap_SyncErrors` | [msdyn_intentplaybookmap](msdyn_intentplaybookmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentplaybookmap` |
| `msdyn_intentplaybookmap_AsyncOperations` | [msdyn_intentplaybookmap](msdyn_intentplaybookmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentplaybookmap` |
| `msdyn_intentplaybookmap_MailboxTrackingFolders` | [msdyn_intentplaybookmap](msdyn_intentplaybookmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentplaybookmap` |
| `msdyn_intentplaybookmap_UserEntityInstanceDatas` | [msdyn_intentplaybookmap](msdyn_intentplaybookmap.md) | `objectid` | `objectid_msdyn_intentplaybookmap` |
| `msdyn_intentplaybookmap_ProcessSession` | [msdyn_intentplaybookmap](msdyn_intentplaybookmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentplaybookmap` |
| `msdyn_intentplaybookmap_BulkDeleteFailures` | [msdyn_intentplaybookmap](msdyn_intentplaybookmap.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentplaybookmap` |
| `msdyn_intentplaybookmap_PrincipalObjectAttributeAccesses` | [msdyn_intentplaybookmap](msdyn_intentplaybookmap.md) | `objectid` | `objectid_msdyn_intentplaybookmap` |


## Source

Generated from [msdyn_intentplaybookmap (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentplaybookmap')) on 2026-05-07.