---
logical: "msdyn_intententity"
display: "intententity"
entitySetName: "msdyn_intententities"
primaryId: "msdyn_intententityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# intententity

Associates an intent to any entity such as case, conversation to capture evolving intent.

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

Writable: **23** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_harvestingtag`, `msdyn_intent_instance_id`, `msdyn_intentcandidate`, `msdyn_intententityId`, `msdyn_intentfamilyid`, `msdyn_intentgroupid`, `msdyn_intentid`, `msdyn_intentstate`, `msdyn_name`, `msdyn_objectid`, `msdyn_objectidIdType`, `msdyn_objecttype`, `msdyn_retrytoc2count`, `msdyn_solutionquery`, `msdyn_source`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intententity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intententity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intententity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intententity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intententity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_incident_msdyn_intententity_objectid` | [incident](incident.md) | `msdyn_objectid` | `msdyn_objectid_incident` |
| `msdyn_intententity_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_intententity_intentgroupid_msdyn_intent` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentgroupid` | `msdyn_intentgroupid` |
| `msdyn_msdyn_intent_msdyn_intententity_intentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intententity_objectid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_objectid` | `msdyn_objectid_msdyn_ocliveworkitem` |
| `owner_msdyn_intententity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intententity` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intententity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intententity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intententity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intententity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intententity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intententity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intententity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intententity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intententity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_intententity_msdyn_intentattribute_entity_intent_entityid` | _n/a_ | `msdyn_intent_entityid` | _n/a_ |


## Source

Generated from [msdyn_intententity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intententity.md) on 2026-05-06.