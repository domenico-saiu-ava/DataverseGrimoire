---
logical: "msdyn_propertylog"
display: "Property Log"
entitySetName: "msdyn_propertylogs"
primaryId: "msdyn_propertylogid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Property Log

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_propertylog` |
| Display name | Property Log |
| Display (plural) | Property Logs |
| Schema name | `msdyn_propertylog` |
| Entity set (Web API) | `msdyn_propertylogs` |
| Primary id attribute | `msdyn_propertylogid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_propertylogs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_propertylogs(<guid>)
POST /api/data/v9.2/msdyn_propertylogs
PATCH /api/data/v9.2/msdyn_propertylogs(<guid>)
DELETE /api/data/v9.2/msdyn_propertylogs(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_booleanvalue`, `msdyn_customerasset`, `msdyn_datevalue`, `msdyn_delta`, `msdyn_FunctionalLocation`, `msdyn_islatest`, `msdyn_name`, `msdyn_numbervalue`, `msdyn_property`, `msdyn_propertylogId`, `msdyn_readingtime`, `msdyn_stringvalue`, `msdyn_valuetodisplay`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_propertylog` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_propertylog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_propertylog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_propertylog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_propertylog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_customerasset_msdyn_propertylog_customerasset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_customerasset` |
| `msdyn_msdyn_functionallocation_msdyn_propertylog_FunctionalLocation` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |
| `msdyn_msdyn_property_msdyn_propertylog_property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_property` |
| `owner_msdyn_propertylog` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_propertylog` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_propertylog` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_propertylog_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertylog_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertylog_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertylog_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_propertylog_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertylog_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_propertylog.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_propertylog.md) on 2026-05-06.