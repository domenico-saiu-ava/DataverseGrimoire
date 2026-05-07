---
logical: "msdyn_requirementorganizationunit"
display: "Unità organizzativa requisito"
entitySetName: "msdyn_requirementorganizationunits"
primaryId: "msdyn_requirementorganizationunitid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Unità organizzativa requisito

Requisito dell'unità organizzativa

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_requirementorganizationunit` |
| Display name | Unità organizzativa requisito |
| Display (plural) | Unità organizzative requisiti |
| Schema name | `msdyn_requirementorganizationunit` |
| Entity set (Web API) | `msdyn_requirementorganizationunits` |
| Primary id attribute | `msdyn_requirementorganizationunitid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_requirementorganizationunits?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_requirementorganizationunits(<guid>)
POST /api/data/v9.2/msdyn_requirementorganizationunits
PATCH /api/data/v9.2/msdyn_requirementorganizationunits(<guid>)
DELETE /api/data/v9.2/msdyn_requirementorganizationunits(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_organizationalunit`, `msdyn_requirementorganizationunitid`, `msdyn_resourcerequirement`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit` | [msdyn_organizationalunit](msdyn_organizationalunit.md) | `msdyn_organizationalunit` | `msdyn_OrganizationalUnit` |
| `msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirement` | `msdyn_ResourceRequirement` |
| `lk_msdyn_requirementorganizationunit_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_requirementorganizationunit_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_requirementorganizationunit_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_requirementorganizationunit_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_requirementorganizationunit` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_requirementorganizationunit` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_requirementorganizationunit` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_requirementorganizationunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementorganizationunit_DuplicateMatchingRecord` | [msdyn_requirementorganizationunit](msdyn_requirementorganizationunit.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_requirementorganizationunit` |
| `msdyn_requirementorganizationunit_DuplicateBaseRecord` | [msdyn_requirementorganizationunit](msdyn_requirementorganizationunit.md) | `baserecordid` | `baserecordid_msdyn_requirementorganizationunit` |
| `msdyn_requirementorganizationunit_SyncErrors` | [msdyn_requirementorganizationunit](msdyn_requirementorganizationunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementorganizationunit` |
| `msdyn_requirementorganizationunit_AsyncOperations` | [msdyn_requirementorganizationunit](msdyn_requirementorganizationunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementorganizationunit` |
| `msdyn_requirementorganizationunit_MailboxTrackingFolders` | [msdyn_requirementorganizationunit](msdyn_requirementorganizationunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementorganizationunit` |
| `msdyn_requirementorganizationunit_UserEntityInstanceDatas` | [msdyn_requirementorganizationunit](msdyn_requirementorganizationunit.md) | `objectid` | `objectid_msdyn_requirementorganizationunit` |
| `msdyn_requirementorganizationunit_ProcessSession` | [msdyn_requirementorganizationunit](msdyn_requirementorganizationunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementorganizationunit` |
| `msdyn_requirementorganizationunit_BulkDeleteFailures` | [msdyn_requirementorganizationunit](msdyn_requirementorganizationunit.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementorganizationunit` |
| `msdyn_requirementorganizationunit_PrincipalObjectAttributeAccesses` | [msdyn_requirementorganizationunit](msdyn_requirementorganizationunit.md) | `objectid` | `objectid_msdyn_requirementorganizationunit` |


## Source

Generated from [msdyn_requirementorganizationunit (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_requirementorganizationunit')) on 2026-05-07.