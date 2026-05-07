---
logical: "msdyn_proactive_engagement_config_attribute"
display: "Attributo configurazione interazione proattiva"
entitySetName: "msdyn_proactive_engagement_config_attributes"
primaryId: "msdyn_proactive_engagement_config_attributeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Attributo configurazione interazione proattiva

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_proactive_engagement_config_attribute` |
| Display name | Attributo configurazione interazione proattiva |
| Display (plural) | Attributo configurazione interazione proattiva |
| Schema name | `msdyn_proactive_engagement_config_attribute` |
| Entity set (Web API) | `msdyn_proactive_engagement_config_attributes` |
| Primary id attribute | `msdyn_proactive_engagement_config_attributeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_proactive_engagement_config_attributes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_proactive_engagement_config_attributes(<guid>)
POST /api/data/v9.2/msdyn_proactive_engagement_config_attributes
PATCH /api/data/v9.2/msdyn_proactive_engagement_config_attributes(<guid>)
DELETE /api/data/v9.2/msdyn_proactive_engagement_config_attributes(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_keyword`, `msdyn_name`, `msdyn_proactive_engagement_config`, `msdyn_proactive_engagement_config_attributeid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_proactive_engagement_config_attribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_proactive_engagement_config_attribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_proactive_engagement_config_attribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_proactive_engagement_config_attribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_proactive_engagement_config_attribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_proactive_engagement_config_attribute` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_proactive_engagement_config_attribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_proactive_engagement_config_attribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_proactive_engagement_config_msdyn_proactive_engagement_config_attribute` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `msdyn_proactive_engagement_config` | `msdyn_proactive_engagement_config` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_proactive_engagement_config_attribute_SyncErrors` | [msdyn_proactive_engagement_config_attribute](msdyn_proactive_engagement_config_attribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config_attribute` |
| `msdyn_proactive_engagement_config_attribute_DuplicateMatchingRecord` | [msdyn_proactive_engagement_config_attribute](msdyn_proactive_engagement_config_attribute.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_proactive_engagement_config_attribute` |
| `msdyn_proactive_engagement_config_attribute_DuplicateBaseRecord` | [msdyn_proactive_engagement_config_attribute](msdyn_proactive_engagement_config_attribute.md) | `baserecordid` | `baserecordid_msdyn_proactive_engagement_config_attribute` |
| `msdyn_proactive_engagement_config_attribute_AsyncOperations` | [msdyn_proactive_engagement_config_attribute](msdyn_proactive_engagement_config_attribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config_attribute` |
| `msdyn_proactive_engagement_config_attribute_MailboxTrackingFolders` | [msdyn_proactive_engagement_config_attribute](msdyn_proactive_engagement_config_attribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config_attribute` |
| `msdyn_proactive_engagement_config_attribute_UserEntityInstanceDatas` | [msdyn_proactive_engagement_config_attribute](msdyn_proactive_engagement_config_attribute.md) | `objectid` | `objectid_msdyn_proactive_engagement_config_attribute` |
| `msdyn_proactive_engagement_config_attribute_ProcessSession` | [msdyn_proactive_engagement_config_attribute](msdyn_proactive_engagement_config_attribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config_attribute` |
| `msdyn_proactive_engagement_config_attribute_BulkDeleteFailures` | [msdyn_proactive_engagement_config_attribute](msdyn_proactive_engagement_config_attribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config_attribute` |
| `msdyn_proactive_engagement_config_attribute_PrincipalObjectAttributeAccesses` | [msdyn_proactive_engagement_config_attribute](msdyn_proactive_engagement_config_attribute.md) | `objectid` | `objectid_msdyn_proactive_engagement_config_attribute` |


## Source

Generated from [msdyn_proactive_engagement_config_attribute (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_proactive_engagement_config_attribute')) on 2026-05-07.