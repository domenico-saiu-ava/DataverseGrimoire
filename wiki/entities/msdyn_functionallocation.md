---
logical: "msdyn_functionallocation"
display: "Functional Location"
entitySetName: "msdyn_functionallocations"
primaryId: "msdyn_functionallocationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Functional Location

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_functionallocation` |
| Display name | Functional Location |
| Display (plural) | Functional Locations |
| Schema name | `msdyn_FunctionalLocation` |
| Entity set (Web API) | `msdyn_functionallocations` |
| Primary id attribute | `msdyn_functionallocationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_functionallocations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_functionallocations(<guid>)
POST /api/data/v9.2/msdyn_functionallocations
PATCH /api/data/v9.2/msdyn_functionallocations(<guid>)
DELETE /api/data/v9.2/msdyn_functionallocations(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_CostCenter`, `msdyn_EmailAddress`, `msdyn_FunctionalLocationId`, `msdyn_FunctionalLocationType`, `msdyn_LocationOpenDate`, `msdyn_Name`, `msdyn_ParentFunctionalLocation`, `msdyn_PrimaryTimeZone`, `msdyn_Sequence`, `msdyn_ShortName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_functionallocation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_functionallocation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_functionallocation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_functionallocation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_functionallocation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_FunctionalLocation_FunctionalLocationTyp` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `msdyn_functionallocationtype` | `msdyn_FunctionalLocationType` |
| `msdyn_FunctionalLocation_ParentFunctional` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_parentfunctionallocation` | `msdyn_ParentFunctionalLocation` |
| `owner_msdyn_functionallocation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_functionallocation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_functionallocation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerasset_FunctionalLocation_ms` | _n/a_ | `msdyn_functionallocation` | _n/a_ |
| `msdyn_functionallocation_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_functionallocation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_functionallocation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_functionallocation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_FunctionalLocation_ParentFunctional` | _n/a_ | `msdyn_parentfunctionallocation` | _n/a_ |
| `msdyn_functionallocation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_functionallocation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_functionallocation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_functionallocation_msdyn_locationtemplateassociation_FunctionalLocation` | _n/a_ | `msdyn_functionallocation` | _n/a_ |
| `msdyn_msdyn_functionallocation_msdyn_propertylocationassociation_FunctionalLocation` | _n/a_ | `msdyn_functionallocation` | _n/a_ |
| `msdyn_msdyn_functionallocation_msdyn_propertylog_FunctionalLocation` | _n/a_ | `msdyn_functionallocation` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_functionallocation_account` | [msdyn_functionallocationid](msdyn_functionallocationid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_warranty_msdyn_functionallocation` | [msdyn_functionallocationid](msdyn_functionallocationid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_functionallocation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_functionallocation.md) on 2026-05-06.