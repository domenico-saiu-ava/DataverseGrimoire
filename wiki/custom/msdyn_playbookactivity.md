---
logical: "msdyn_playbookactivity"
display: "Impegno di tipo playbook"
entitySetName: "msdyn_playbookactivities"
primaryId: "msdyn_playbookactivityid"
primaryName: "msdyn_subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impegno di tipo playbook

Archivia i dettagli degli impegni da creare quando viene avviato un playbook.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_playbookactivity` |
| Display name | Impegno di tipo playbook |
| Display (plural) | Impegni playbook |
| Schema name | `msdyn_playbookactivity` |
| Entity set (Web API) | `msdyn_playbookactivities` |
| Primary id attribute | `msdyn_playbookactivityid` |
| Primary name attribute | `msdyn_subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_playbookactivities?$select=msdyn_subject&$top=10
GET /api/data/v9.2/msdyn_playbookactivities(<guid>)
POST /api/data/v9.2/msdyn_playbookactivities
PATCH /api/data/v9.2/msdyn_playbookactivities(<guid>)
DELETE /api/data/v9.2/msdyn_playbookactivities(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_activityLogicalName`, `msdyn_activityType`, `msdyn_playbookactivity_json`, `msdyn_playbookactivityid`, `msdyn_playbooktemplateid`, `msdyn_subject`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_playbookactivity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_playbookactivity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_playbookactivity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_playbookactivity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_playbookactivity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_playbookactivity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_playbookactivity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_playbookactivity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_playbooktemplate_msdyn_playbookactivity` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `msdyn_playbooktemplateid` | `msdyn_playbooktemplateid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_playbookactivity_SyncErrors` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivity` |
| `msdyn_playbookactivity_DuplicateMatchingRecord` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_playbookactivity` |
| `msdyn_playbookactivity_DuplicateBaseRecord` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `baserecordid` | `baserecordid_msdyn_playbookactivity` |
| `msdyn_playbookactivity_SharePointDocumentLocations` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivity` |
| `msdyn_playbookactivity_SharePointDocuments` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivity` |
| `msdyn_playbookactivity_AsyncOperations` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivity` |
| `msdyn_playbookactivity_MailboxTrackingFolders` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivity` |
| `msdyn_playbookactivity_UserEntityInstanceDatas` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `objectid` | `objectid_msdyn_playbookactivity` |
| `msdyn_playbookactivity_ProcessSession` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivity` |
| `msdyn_playbookactivity_BulkDeleteFailures` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivity` |
| `msdyn_playbookactivity_PrincipalObjectAttributeAccesses` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `objectid` | `objectid_msdyn_playbookactivity` |
| `msdyn_playbookactivity_msdyn_playbookactivityattribute` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `msdyn_playbookactivityid` | `msdyn_playbookactivityid` |


## Source

Generated from [msdyn_playbookactivity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_playbookactivity')) on 2026-05-07.