---
logical: "msdyn_attribute"
display: "Seller attribute"
entitySetName: "msdyn_attribute"
primaryId: "msdyn_attributeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Seller attribute

Sales Attribute

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_attribute` |
| Display name | Seller attribute |
| Display (plural) | Seller attributes |
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

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_attributeId`, `msdyn_autogenerateattributevalues`, `msdyn_linkedattributename`, `msdyn_linkedobjecttypecode`, `msdyn_name`, `msdyn_ReviewStatus`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_attribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_attribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_attribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_attribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_attribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_attribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_attribute` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_attribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_attribute_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attribute_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attribute_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_attribute_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_attribute_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attribute_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_attribute_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attribute_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attributeparent` | _n/a_ | `msdyn_parentattribute` | _n/a_ |


## Source

Generated from [msdyn_attribute.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_attribute.md) on 2026-05-06.