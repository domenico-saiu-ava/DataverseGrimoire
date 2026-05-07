---
logical: "msdyn_intententity"
display: "intententity"
entitySetName: "msdyn_intententities"
primaryId: "msdyn_intententityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# intententity

Associa una finalità a qualsiasi entità, ad esempio un caso, una conversazione per acquisire la finalità in evoluzione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intententity` |
| Display name | intententity |
| Display (plural) | intententities |
| Schema name | `msdyn_intententity` |
| Entity set (Web API) | `msdyn_intententities` |
| Primary id attribute | `msdyn_intententityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intententities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intententities(<guid>)
POST /api/data/v9.2/msdyn_intententities
PATCH /api/data/v9.2/msdyn_intententities(<guid>)
DELETE /api/data/v9.2/msdyn_intententities(<guid>)
```

## Attributes

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_harvestingtag`, `msdyn_intent_instance_id`, `msdyn_intentcandidate`, `msdyn_intententityid`, `msdyn_intentfamilyid`, `msdyn_intentgroupid`, `msdyn_intentid`, `msdyn_intentstate`, `msdyn_name`, `msdyn_objectid`, `msdyn_objecttype`, `msdyn_retrytoc2count`, `msdyn_solutionquery`, `msdyn_source`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intententity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intententity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intententity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intententity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intententity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intententity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intententity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intententity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_intent_msdyn_intententity_intentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intententity_objectid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_objectid` | `msdyn_objectid_msdyn_ocliveworkitem` |
| `msdyn_incident_msdyn_intententity_objectid` | [incident](incident.md) | `msdyn_objectid` | `msdyn_objectid_incident` |
| `msdyn_intententity_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intententity_intentgroupid_msdyn_intent` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentgroupid` | `msdyn_intentgroupid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intententity_SyncErrors` | [msdyn_intententity](msdyn_intententity.md) | `regardingobjectid` | `regardingobjectid_msdyn_intententity` |
| `msdyn_intententity_DuplicateMatchingRecord` | [msdyn_intententity](msdyn_intententity.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intententity` |
| `msdyn_intententity_DuplicateBaseRecord` | [msdyn_intententity](msdyn_intententity.md) | `baserecordid` | `baserecordid_msdyn_intententity` |
| `msdyn_intententity_AsyncOperations` | [msdyn_intententity](msdyn_intententity.md) | `regardingobjectid` | `regardingobjectid_msdyn_intententity` |
| `msdyn_intententity_MailboxTrackingFolders` | [msdyn_intententity](msdyn_intententity.md) | `regardingobjectid` | `regardingobjectid_msdyn_intententity` |
| `msdyn_intententity_UserEntityInstanceDatas` | [msdyn_intententity](msdyn_intententity.md) | `objectid` | `objectid_msdyn_intententity` |
| `msdyn_intententity_ProcessSession` | [msdyn_intententity](msdyn_intententity.md) | `regardingobjectid` | `regardingobjectid_msdyn_intententity` |
| `msdyn_intententity_BulkDeleteFailures` | [msdyn_intententity](msdyn_intententity.md) | `regardingobjectid` | `regardingobjectid_msdyn_intententity` |
| `msdyn_intententity_PrincipalObjectAttributeAccesses` | [msdyn_intententity](msdyn_intententity.md) | `objectid` | `objectid_msdyn_intententity` |
| `msdyn_msdyn_intententity_msdyn_intentattribute_entity_intent_entityid` | [msdyn_intententity](msdyn_intententity.md) | `msdyn_intent_entityid` | `msdyn_intent_entityid` |


## Source

Generated from [msdyn_intententity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intententity')) on 2026-05-07.