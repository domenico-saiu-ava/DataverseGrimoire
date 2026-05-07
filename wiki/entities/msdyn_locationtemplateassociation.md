---
logical: "msdyn_locationtemplateassociation"
display: "Location Template Association"
entitySetName: "msdyn_locationtemplateassociations"
primaryId: "msdyn_locationtemplateassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Location Template Association

Captures the relationship between a Property Template, which in turns captures a set of Properties, and a Functional Location.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_locationtemplateassociation` |
| Display name | Location Template Association |
| Display (plural) | Location Template Associations |
| Schema name | `msdyn_locationtemplateassociation` |
| Entity set (Web API) | `msdyn_locationtemplateassociations` |
| Primary id attribute | `msdyn_locationtemplateassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_locationtemplateassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_locationtemplateassociations(<guid>)
POST /api/data/v9.2/msdyn_locationtemplateassociations
PATCH /api/data/v9.2/msdyn_locationtemplateassociations(<guid>)
DELETE /api/data/v9.2/msdyn_locationtemplateassociations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_FunctionalLocation`, `msdyn_locationtemplateassociationId`, `msdyn_name`, `msdyn_PropertyTemplate`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_locationtemplateassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_locationtemplateassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_locationtemplateassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_locationtemplateassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_locationtemplateassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_functionallocation_msdyn_locationtemplateassociation_FunctionalLocation` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |
| `msdyn_msdyn_templateforproperties_msdyn_locationtemplateassociation_PropertyTemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_PropertyTemplate` |
| `owner_msdyn_locationtemplateassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_locationtemplateassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_locationtemplateassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_locationtemplateassociation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_locationtemplateassociation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_locationtemplateassociation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_locationtemplateassociation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_locationtemplateassociation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_locationtemplateassociation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_locationtemplateassociation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_locationtemplateassociation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_locationtemplateassociation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_locationtemplateassociation.md) on 2026-05-06.