---
logical: "msdyn_requirementrelationship"
display: "Relazione requisito"
entitySetName: "msdyn_requirementrelationships"
primaryId: "msdyn_requirementrelationshipid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Relazione requisito

Relazione dei requisiti nel gruppo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_requirementrelationship` |
| Display name | Relazione requisito |
| Display (plural) | Relazioni requisiti |
| Schema name | `msdyn_requirementrelationship` |
| Entity set (Web API) | `msdyn_requirementrelationships` |
| Primary id attribute | `msdyn_requirementrelationshipid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_requirementrelationships?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_requirementrelationships(<guid>)
POST /api/data/v9.2/msdyn_requirementrelationships
PATCH /api/data/v9.2/msdyn_requirementrelationships(<guid>)
DELETE /api/data/v9.2/msdyn_requirementrelationships(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_minconditioncount`, `msdyn_name`, `msdyn_operator`, `msdyn_parentrequirementrelationshipid`, `msdyn_requirementgroupcontrolviewid`, `msdyn_requirementgroupid`, `msdyn_requirementrelationshipid`, `msdyn_resourcegroupings`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_requirementrelationship_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_requirementrelationship_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_requirementrelationship_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_requirementrelationship_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_requirementrelationship` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_requirementrelationship` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_requirementrelationship` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_requirementrelationship` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_requirementgroup_requirementrelationship_requirementgroupid` | [msdyn_requirementgroup](msdyn_requirementgroup.md) | `msdyn_requirementgroupid` | `msdyn_requirementgroupid` |
| `msdyn_requirementrelationship_parentrequirementrelationshipid` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `msdyn_parentrequirementrelationshipid` | `msdyn_parentrequirementrelationshipid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementrelationship_SyncErrors` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementrelationship` |
| `msdyn_requirementrelationship_AsyncOperations` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementrelationship` |
| `msdyn_requirementrelationship_MailboxTrackingFolders` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementrelationship` |
| `msdyn_requirementrelationship_UserEntityInstanceDatas` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `objectid` | `objectid_msdyn_requirementrelationship` |
| `msdyn_requirementrelationship_ProcessSession` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementrelationship` |
| `msdyn_requirementrelationship_BulkDeleteFailures` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementrelationship` |
| `msdyn_requirementrelationship_PrincipalObjectAttributeAccesses` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `objectid` | `objectid_msdyn_requirementrelationship` |
| `msdyn_requirementrelationship_DuplicateMatchingRecord` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_requirementrelationship` |
| `msdyn_requirementrelationship_DuplicateBaseRecord` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `baserecordid` | `baserecordid_msdyn_requirementrelationship` |
| `msdyn_requirementrelationship_parentrequirementrelationshipid` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `msdyn_parentrequirementrelationshipid` | `msdyn_parentrequirementrelationshipid` |
| `msdyn_requirementrelationship_resourcerequirement_requirementrelationshipid` | [msdyn_requirementrelationship](msdyn_requirementrelationship.md) | `msdyn_requirementrelationshipid` | `msdyn_requirementrelationshipid` |


## Source

Generated from [msdyn_requirementrelationship (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_requirementrelationship')) on 2026-05-07.