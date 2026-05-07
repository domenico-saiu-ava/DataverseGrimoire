---
logical: "msdyn_attribute"
display: "Attributo venditore"
entitySetName: "msdyn_attribute"
primaryId: "msdyn_attributeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Attributo venditore

Attributo vendite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_attribute` |
| Display name | Attributo venditore |
| Display (plural) | Attributi venditore |
| Schema name | `msdyn_attribute` |
| Entity set (Web API) | `msdyn_attribute` |
| Primary id attribute | `msdyn_attributeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_attribute?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_attribute(<guid>)
POST /api/data/v9.2/msdyn_attribute
PATCH /api/data/v9.2/msdyn_attribute(<guid>)
DELETE /api/data/v9.2/msdyn_attribute(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_attributeid`, `msdyn_autogenerateattributevalues`, `msdyn_linkedattributename`, `msdyn_linkedobjecttypecode`, `msdyn_name`, `msdyn_reviewstatus`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_attribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_attribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_attribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_attribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_attribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_attribute` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_attribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_attribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_attribute_SyncErrors` | [msdyn_attribute](msdyn_attribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_attribute` |
| `msdyn_attribute_DuplicateMatchingRecord` | [msdyn_attribute](msdyn_attribute.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_attribute` |
| `msdyn_attribute_DuplicateBaseRecord` | [msdyn_attribute](msdyn_attribute.md) | `baserecordid` | `baserecordid_msdyn_attribute` |
| `msdyn_attribute_AsyncOperations` | [msdyn_attribute](msdyn_attribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_attribute` |
| `msdyn_attribute_MailboxTrackingFolders` | [msdyn_attribute](msdyn_attribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_attribute` |
| `msdyn_attribute_UserEntityInstanceDatas` | [msdyn_attribute](msdyn_attribute.md) | `objectid` | `objectid_msdyn_attribute` |
| `msdyn_attribute_ProcessSession` | [msdyn_attribute](msdyn_attribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_attribute` |
| `msdyn_attribute_BulkDeleteFailures` | [msdyn_attribute](msdyn_attribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_attribute` |
| `msdyn_attribute_PrincipalObjectAttributeAccesses` | [msdyn_attribute](msdyn_attribute.md) | `objectid` | `objectid_msdyn_attribute` |
| `msdyn_attributeparent` | [msdyn_attribute](msdyn_attribute.md) | `msdyn_parentattribute` | `msdyn_parentattribute` |


## Source

Generated from [msdyn_attribute (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_attribute')) on 2026-05-07.