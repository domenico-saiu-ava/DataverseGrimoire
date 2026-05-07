---
logical: "msdyn_intentattribute_entity"
display: "intentattribute_entity"
entitySetName: "msdyn_intentattribute_entities"
primaryId: "msdyn_intentattribute_entityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# intentattribute_entity

Associates the value of an intent attribute identified for a given case or conversation.

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

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_attributecandidate`, `msdyn_attributestate`, `msdyn_harvestingtag`, `msdyn_intent_entityid`, `msdyn_intentattribute_entityId`, `msdyn_intentattributeid`, `msdyn_name`, `msdyn_objectid`, `msdyn_objectidIdType`, `msdyn_objecttype`, `msdyn_value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intentattribute_entity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intentattribute_entity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentattribute_entity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentattribute_entity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentattribute_entity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_intentattribute_msdyn_intentattribute_entity_intentattributeid` | [msdyn_intentattribute](msdyn_intentattribute.md) | `msdyn_intentattributeid` | `msdyn_intentattributeid` |
| `msdyn_msdyn_intententity_msdyn_intentattribute_entity_intent_entityid` | [msdyn_intententity](msdyn_intententity.md) | `msdyn_intent_entityid` | `msdyn_intent_entityid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intententityattribute_objectid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_objectid` | `msdyn_objectid` |
| `owner_msdyn_intentattribute_entity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intentattribute_entity` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intentattribute_entity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentattribute_entity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattribute_entity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattribute_entity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intentattribute_entity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intentattribute_entity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattribute_entity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intentattribute_entity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentattribute_entity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_intentattribute_entity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentattribute_entity.md) on 2026-05-06.