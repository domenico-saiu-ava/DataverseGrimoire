---
logical: "msdyn_attributevalue"
display: "Seller attribute value"
entitySetName: "msdyn_attributevalues"
primaryId: "msdyn_attributevalueid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Seller attribute value

Attribute Value of sales person or sales team

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_attributevalue` |
| Display name | Seller attribute value |
| Display (plural) | Seller attribute values |
| Schema name | `msdyn_attributevalue` |
| Entity set (Web API) | `msdyn_attributevalues` |
| Primary id attribute | `msdyn_attributevalueid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_attributevalues?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_attributevalues(<guid>)
POST /api/data/v9.2/msdyn_attributevalues
PATCH /api/data/v9.2/msdyn_attributevalues(<guid>)
DELETE /api/data/v9.2/msdyn_attributevalues(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_attributevalueId`, `msdyn_linkedvalue`, `msdyn_name`, `msdyn_parentattribute`, `msdyn_ReviewStatus`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_attributevalue` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_attributevalue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_attributevalue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_attributevalue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_attributevalue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_attributeparent` | [msdyn_attribute](msdyn_attribute.md) | `msdyn_parentattribute` | `msdyn_parentattribute` |
| `owner_msdyn_attributevalue` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_attributevalue` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_attributevalue` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_attributevalue_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attributevalue_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attributevalue_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_attributevalue_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_attributevalue_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attributevalue_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_attributevalue_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attributevalue_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_attributevalue_systemuser` | [msdyn_attributevalueid](msdyn_attributevalueid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_attributevalue.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_attributevalue.md) on 2026-05-06.