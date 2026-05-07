---
logical: "msdyn_propertylocationassociation"
display: "Property Location Association"
entitySetName: "msdyn_propertylocationassociations"
primaryId: "msdyn_propertylocationassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Property Location Association

Captures the relationship between a Property and a Functional Location.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_propertylocationassociation` |
| Display name | Property Location Association |
| Display (plural) | Property Location Associations |
| Schema name | `msdyn_propertylocationassociation` |
| Entity set (Web API) | `msdyn_propertylocationassociations` |
| Primary id attribute | `msdyn_propertylocationassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_propertylocationassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_propertylocationassociations(<guid>)
POST /api/data/v9.2/msdyn_propertylocationassociations
PATCH /api/data/v9.2/msdyn_propertylocationassociations(<guid>)
DELETE /api/data/v9.2/msdyn_propertylocationassociations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_FunctionalLocation`, `msdyn_name`, `msdyn_Property`, `msdyn_propertylocationassociationId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_propertylocationassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_propertylocationassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_propertylocationassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_propertylocationassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_propertylocationassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_functionallocation_msdyn_propertylocationassociation_FunctionalLocation` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |
| `msdyn_msdyn_property_msdyn_propertylocationassociation_Property` | [msdyn_property](msdyn_property.md) | `msdyn_property` | `msdyn_Property` |
| `owner_msdyn_propertylocationassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_propertylocationassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_propertylocationassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_propertylocationassociation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertylocationassociation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertylocationassociation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_propertylocationassociation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_propertylocationassociation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertylocationassociation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_propertylocationassociation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_propertylocationassociation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_propertylocationassociation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_propertylocationassociation.md) on 2026-05-06.