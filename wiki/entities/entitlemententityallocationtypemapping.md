---
logical: "entitlemententityallocationtypemapping"
display: "Entitlement Entity Allocation Type Mapping"
entitySetName: "entitlemententityallocationtypemappings"
primaryId: "entitlemententityallocationtypemappingid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Entitlement Entity Allocation Type Mapping

Mapping to define which Allocation Types are available for Entity Type to be used on Entitlement

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entitlemententityallocationtypemapping` |
| Display name | Entitlement Entity Allocation Type Mapping |
| Display (plural) | Entitlement Entity Allocation Type Mappings |
| Schema name | `EntitlementEntityAllocationTypeMapping` |
| Entity set (Web API) | `entitlemententityallocationtypemappings` |
| Primary id attribute | `entitlemententityallocationtypemappingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/entitlemententityallocationtypemappings?$select=name&$top=10
GET /api/data/v9.2/entitlemententityallocationtypemappings(<guid>)
POST /api/data/v9.2/entitlemententityallocationtypemappings
PATCH /api/data/v9.2/entitlemententityallocationtypemappings(<guid>)
DELETE /api/data/v9.2/entitlemententityallocationtypemappings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`allocationtype`, `EntitlementEntityAllocationTypeMappingId`, `entitytype`, `ImportSequenceNumber`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_entitlemententityallocationtypemapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_entitlemententityallocationtypemapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_entitlemententityallocationtypemapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_entitlemententityallocationtypemapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_entitlemententityallocationtypemapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_entitlemententityallocationtypemapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_entitlemententityallocationtypemapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_entitlemententityallocationtypemapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlemententityallocationtypemapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlemententityallocationtypemapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlemententityallocationtypemapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `entitlemententityallocationtypemapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `entitlemententityallocationtypemapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlemententityallocationtypemapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `entitlemententityallocationtypemapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlemententityallocationtypemapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [entitlemententityallocationtypemapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/entitlemententityallocationtypemapping.md) on 2026-05-06.