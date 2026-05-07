---
logical: "msdyn_playbookactivityattribute"
display: "Attributo impegno di tipo playbook"
entitySetName: "msdyn_playbookactivityattributes"
primaryId: "msdyn_playbookactivityattributeid"
primaryName: "msdyn_attributeLogicalName"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Attributo impegno di tipo playbook

Archivia valori e nomi degli attributi dell'impegno di tipo playbook.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_playbookactivityattribute` |
| Display name | Attributo impegno di tipo playbook |
| Display (plural) | Attributi impegno di tipo playbook |
| Schema name | `msdyn_playbookactivityattribute` |
| Entity set (Web API) | `msdyn_playbookactivityattributes` |
| Primary id attribute | `msdyn_playbookactivityattributeid` |
| Primary name attribute | `msdyn_attributeLogicalName` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_playbookactivityattributes?$select=msdyn_attributeLogicalName&$top=10
GET /api/data/v9.2/msdyn_playbookactivityattributes(<guid>)
POST /api/data/v9.2/msdyn_playbookactivityattributes
PATCH /api/data/v9.2/msdyn_playbookactivityattributes(<guid>)
DELETE /api/data/v9.2/msdyn_playbookactivityattributes(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_attributeLogicalName`, `msdyn_attributeType`, `msdyn_attributeValue`, `msdyn_playbookactivityattributeid`, `msdyn_playbookactivityid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_playbookactivityattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_playbookactivityattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_playbookactivityattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_playbookactivityattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_playbookactivityattribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_playbookactivityattribute` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_playbookactivityattribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_playbookactivityattribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_playbookactivity_msdyn_playbookactivityattribute` | [msdyn_playbookactivity](msdyn_playbookactivity.md) | `msdyn_playbookactivityid` | `msdyn_playbookactivityid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_playbookactivityattribute_SyncErrors` | [msdyn_playbookactivityattribute](msdyn_playbookactivityattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivityattribute` |
| `msdyn_playbookactivityattribute_DuplicateMatchingRecord` | [msdyn_playbookactivityattribute](msdyn_playbookactivityattribute.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_playbookactivityattribute` |
| `msdyn_playbookactivityattribute_DuplicateBaseRecord` | [msdyn_playbookactivityattribute](msdyn_playbookactivityattribute.md) | `baserecordid` | `baserecordid_msdyn_playbookactivityattribute` |
| `msdyn_playbookactivityattribute_AsyncOperations` | [msdyn_playbookactivityattribute](msdyn_playbookactivityattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivityattribute` |
| `msdyn_playbookactivityattribute_MailboxTrackingFolders` | [msdyn_playbookactivityattribute](msdyn_playbookactivityattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivityattribute` |
| `msdyn_playbookactivityattribute_UserEntityInstanceDatas` | [msdyn_playbookactivityattribute](msdyn_playbookactivityattribute.md) | `objectid` | `objectid_msdyn_playbookactivityattribute` |
| `msdyn_playbookactivityattribute_ProcessSession` | [msdyn_playbookactivityattribute](msdyn_playbookactivityattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivityattribute` |
| `msdyn_playbookactivityattribute_BulkDeleteFailures` | [msdyn_playbookactivityattribute](msdyn_playbookactivityattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookactivityattribute` |
| `msdyn_playbookactivityattribute_PrincipalObjectAttributeAccesses` | [msdyn_playbookactivityattribute](msdyn_playbookactivityattribute.md) | `objectid` | `objectid_msdyn_playbookactivityattribute` |


## Source

Generated from [msdyn_playbookactivityattribute (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_playbookactivityattribute')) on 2026-05-07.