---
logical: "msdyn_intentattribute_entity"
display: "intentattribute_entity"
entitySetName: "msdyn_intentattribute_entities"
primaryId: "msdyn_intentattribute_entityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# intentattribute_entity

Associa il valore di un attributo di finalità identificato per un determinato caso o conversazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentattribute_entity` |
| Display name | intentattribute_entity |
| Display (plural) | intentattribute_entities |
| Schema name | `msdyn_intentattribute_entity` |
| Entity set (Web API) | `msdyn_intentattribute_entities` |
| Primary id attribute | `msdyn_intentattribute_entityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentattribute_entities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentattribute_entities(<guid>)
POST /api/data/v9.2/msdyn_intentattribute_entities
PATCH /api/data/v9.2/msdyn_intentattribute_entities(<guid>)
DELETE /api/data/v9.2/msdyn_intentattribute_entities(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_attributecandidate`, `msdyn_attributestate`, `msdyn_harvestingtag`, `msdyn_intent_entityid`, `msdyn_intentattribute_entityid`, `msdyn_intentattributeid`, `msdyn_name`, `msdyn_objectid`, `msdyn_objecttype`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentattribute_entity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentattribute_entity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentattribute_entity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentattribute_entity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentattribute_entity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentattribute_entity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentattribute_entity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentattribute_entity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_intentattribute_msdyn_intentattribute_entity_intentattributeid` | [msdyn_intentattribute](msdyn_intentattribute.md) | `msdyn_intentattributeid` | `msdyn_intentattributeid` |
| `msdyn_msdyn_intententity_msdyn_intentattribute_entity_intent_entityid` | [msdyn_intententity](msdyn_intententity.md) | `msdyn_intent_entityid` | `msdyn_intent_entityid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intententityattribute_objectid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_objectid` | `msdyn_objectid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentattribute_entity_SyncErrors` | [msdyn_intentattribute_entity](msdyn_intentattribute_entity.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattribute_entity` |
| `msdyn_intentattribute_entity_DuplicateMatchingRecord` | [msdyn_intentattribute_entity](msdyn_intentattribute_entity.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentattribute_entity` |
| `msdyn_intentattribute_entity_DuplicateBaseRecord` | [msdyn_intentattribute_entity](msdyn_intentattribute_entity.md) | `baserecordid` | `baserecordid_msdyn_intentattribute_entity` |
| `msdyn_intentattribute_entity_AsyncOperations` | [msdyn_intentattribute_entity](msdyn_intentattribute_entity.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattribute_entity` |
| `msdyn_intentattribute_entity_MailboxTrackingFolders` | [msdyn_intentattribute_entity](msdyn_intentattribute_entity.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattribute_entity` |
| `msdyn_intentattribute_entity_UserEntityInstanceDatas` | [msdyn_intentattribute_entity](msdyn_intentattribute_entity.md) | `objectid` | `objectid_msdyn_intentattribute_entity` |
| `msdyn_intentattribute_entity_ProcessSession` | [msdyn_intentattribute_entity](msdyn_intentattribute_entity.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattribute_entity` |
| `msdyn_intentattribute_entity_BulkDeleteFailures` | [msdyn_intentattribute_entity](msdyn_intentattribute_entity.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattribute_entity` |
| `msdyn_intentattribute_entity_PrincipalObjectAttributeAccesses` | [msdyn_intentattribute_entity](msdyn_intentattribute_entity.md) | `objectid` | `objectid_msdyn_intentattribute_entity` |


## Source

Generated from [msdyn_intentattribute_entity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentattribute_entity')) on 2026-05-07.