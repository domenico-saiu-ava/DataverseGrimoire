---
logical: "msdyn_intentplaybook"
display: "Playbook finalità"
entitySetName: "msdyn_intentplaybooks"
primaryId: "msdyn_intentplaybookid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Playbook finalità

Questa tabella contiene record di playbook finalità.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentplaybook` |
| Display name | Playbook finalità |
| Display (plural) | Playbook finalità |
| Schema name | `msdyn_intentplaybook` |
| Entity set (Web API) | `msdyn_intentplaybooks` |
| Primary id attribute | `msdyn_intentplaybookid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentplaybooks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentplaybooks(<guid>)
POST /api/data/v9.2/msdyn_intentplaybooks
PATCH /api/data/v9.2/msdyn_intentplaybooks(<guid>)
DELETE /api/data/v9.2/msdyn_intentplaybooks(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_description`, `msdyn_intentfamilyid`, `msdyn_intentplaybookid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentplaybook_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentplaybook_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentplaybook_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentplaybook_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentplaybook` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentplaybook` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentplaybook` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentplaybook` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intentplaybook_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentplaybook_SyncErrors` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentplaybook` |
| `msdyn_intentplaybook_DuplicateMatchingRecord` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentplaybook` |
| `msdyn_intentplaybook_DuplicateBaseRecord` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `baserecordid` | `baserecordid_msdyn_intentplaybook` |
| `msdyn_intentplaybook_AsyncOperations` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentplaybook` |
| `msdyn_intentplaybook_MailboxTrackingFolders` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentplaybook` |
| `msdyn_intentplaybook_UserEntityInstanceDatas` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `objectid` | `objectid_msdyn_intentplaybook` |
| `msdyn_intentplaybook_ProcessSession` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentplaybook` |
| `msdyn_intentplaybook_BulkDeleteFailures` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentplaybook` |
| `msdyn_intentplaybook_PrincipalObjectAttributeAccesses` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `objectid` | `objectid_msdyn_intentplaybook` |
| `msdyn_intentplaybookmap_msdyn_intentplaybook` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `msdyn_intentplaybookid` | `msdyn_intentplaybookid` |
| `msdyn_intentplaybookmap_msdyn_referenceplaybookid_msdyn_intentplaybook` | [msdyn_intentplaybook](msdyn_intentplaybook.md) | `msdyn_referenceplaybookid` | `msdyn_referenceplaybookid` |


## Source

Generated from [msdyn_intentplaybook (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentplaybook')) on 2026-05-07.