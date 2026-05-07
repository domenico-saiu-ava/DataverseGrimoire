---
logical: "msdyn_assettemplateassociation"
display: "Asset Template Association"
entitySetName: "msdyn_assettemplateassociations"
primaryId: "msdyn_assettemplateassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Asset Template Association

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assettemplateassociation` |
| Display name | Asset Template Association |
| Display (plural) | Asset Template Associations |
| Schema name | `msdyn_assettemplateassociation` |
| Entity set (Web API) | `msdyn_assettemplateassociations` |
| Primary id attribute | `msdyn_assettemplateassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_assettemplateassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_assettemplateassociations(<guid>)
POST /api/data/v9.2/msdyn_assettemplateassociations
PATCH /api/data/v9.2/msdyn_assettemplateassociations(<guid>)
DELETE /api/data/v9.2/msdyn_assettemplateassociations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_assettemplateassociationId`, `msdyn_customerasset`, `msdyn_name`, `msdyn_propertytemplate`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_assettemplateassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_assettemplateassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assettemplateassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assettemplateassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assettemplateassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_customerasset_msdyn_assettemplateassociation_customerasset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_customerasset` |
| `msdyn_msdyn_templateforproperties_msdyn_assettemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |
| `owner_msdyn_assettemplateassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_assettemplateassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_assettemplateassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assettemplateassociation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assettemplateassociation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assettemplateassociation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assettemplateassociation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_assettemplateassociation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assettemplateassociation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_assettemplateassociation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_assettemplateassociation.md) on 2026-05-06.